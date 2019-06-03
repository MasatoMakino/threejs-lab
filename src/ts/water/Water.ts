/**
 * @author jbouny / https://github.com/jbouny
 *
 * Work based on :
 * @author Slayvin / http://slayvin.net : Flat mirror for three.js
 * @author Stemkoski / http://www.adelphi.edu/~stemkoski : An implementation of water shader based on the flat mirror
 * @author Jonas Wagner / http://29a.ch/ && http://29a.ch/slides/2012/webglwater/ : Water shader explanations in WebGL
 */
import {
  Mesh,
  Vector3,
  Vector4,
  Color,
  Plane,
  Matrix4,
  PerspectiveCamera,
  LinearFilter,
  Light,
  RGBFormat,
  WebGLRenderTarget,
  UniformsUtils,
  UniformsLib,
  ShaderMaterial,
  Geometry,
  BufferGeometry
} from "three";
import { Math as THREEMath } from "three";
import { WaterVertexShader } from "ts/water/vert";
import { WaterFragmentShader } from "ts/water/frag";
import { WaterOptions, WaterOptionsUtil } from "ts/water/WaterOptions";

export class Water extends Mesh {
  private mirrorPlane: Plane = new Plane();
  private normal: Vector3 = new Vector3();
  private mirrorWorldPosition: Vector3 = new Vector3();
  private cameraWorldPosition: Vector3 = new Vector3();
  private rotationMatrix: Matrix4 = new Matrix4();
  private lookAtPosition: Vector3 = new Vector3(0, 0, -1);
  private clipPlane: Vector4 = new Vector4();

  private view: Vector3 = new Vector3();
  private target: Vector3 = new Vector3();

  private mirrorCamera: PerspectiveCamera = new PerspectiveCamera();

  private options: WaterOptions;

  private renderTarget: WebGLRenderTarget;

  constructor(geometry: Geometry | BufferGeometry, options: WaterOptions) {
    super(geometry);
    this.options = WaterOptionsUtil.initOption(options);
    this.initRenderTarget(this.options);
    const mat = this.initShader(this.options);
    this.material = mat;

    this.rotation.x = -Math.PI / 2;

    this.onBeforeRender = this.onBeforeRenderHandler;
    this.requestID = requestAnimationFrame(this.onRequestAnimationFrame);
  }

  private initRenderTarget(options): void {
    const parameters = {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      format: RGBFormat,
      stencilBuffer: false
    };

    this.renderTarget = new WebGLRenderTarget(
      options.textureWidth,
      options.textureHeight,
      parameters
    );
    if (
      !THREEMath.isPowerOfTwo(options.textureWidth) ||
      !THREEMath.isPowerOfTwo(options.textureHeight)
    ) {
      this.renderTarget.texture.generateMipmaps = false;
    }
  }

  private initShader(options): ShaderMaterial {
    const uniforms = UniformsUtils.merge([
      UniformsLib["fog"],
      UniformsLib["lights"],
      {
        normalSampler: { value: null },
        mirrorSampler: { value: null },
        alpha: { value: 1.0 },
        time: { value: 0.0 },
        size: { value: 1.0 },
        distortionScale: { value: 20.0 },
        textureMatrix: { value: new Matrix4() },
        sunColor: { value: new Color(0x7f7f7f) },
        sunDirection: { value: new Vector3(0.70707, 0.70707, 0) },
        eye: { value: new Vector3() },
        waterColor: { value: new Color(0x555555) }
      }
    ]);

    const material = new ShaderMaterial({
      fragmentShader: WaterFragmentShader.get(),
      vertexShader: WaterVertexShader.get(),
      uniforms: uniforms,
      transparent: true,
      lights: true,
      side: options.side,
      fog: options.fog
    });

    material.uniforms.mirrorSampler.value = this.renderTarget.texture;
    material.uniforms.textureMatrix.value = this.textureMatrix;
    material.uniforms.alpha.value = options.alpha;
    material.uniforms.time.value = options.time;
    material.uniforms.normalSampler.value = options.normalSampler;
    material.uniforms.sunColor.value = options.sunColor;
    material.uniforms.waterColor.value = options.waterColor;
    material.uniforms.sunDirection.value = options.sunDirection;
    material.uniforms.distortionScale.value = options.distortionScale;
    material.uniforms.eye.value = options.eye;

    return material;
  }

  /**
   * 受け取ったライトを元に反射光の状態を更新する。
   * @param light
   */
  public updateSun(light: Light): void {
    this.options.sunDirection = light.position.clone().normalize();
    this.options.sunColor = light.color.clone();

    (<ShaderMaterial>(
      this.material
    )).uniforms.sunDirection.value = this.options.sunDirection;
    (<ShaderMaterial>(
      this.material
    )).uniforms.sunColor.value = this.options.sunColor;
  }

  private onBeforeRenderHandler = (renderer, scene, camera) => {
    this.mirrorWorldPosition.setFromMatrixPosition(this.matrixWorld);
    this.cameraWorldPosition.setFromMatrixPosition(camera.matrixWorld);
    this.rotationMatrix.extractRotation(this.matrixWorld);

    this.normal.set(0, 0, 1);
    this.normal.applyMatrix4(this.rotationMatrix);

    this.view.subVectors(this.mirrorWorldPosition, this.cameraWorldPosition);
    // Avoid rendering when mirror is facing away
    if (this.view.dot(this.normal) > 0) return;

    this.view.reflect(this.normal).negate();
    this.view.add(this.mirrorWorldPosition);

    this.rotationMatrix.extractRotation(camera.matrixWorld);

    this.lookAtPosition.set(0, 0, -1);
    this.lookAtPosition.applyMatrix4(this.rotationMatrix);
    this.lookAtPosition.add(this.cameraWorldPosition);

    this.target.subVectors(this.mirrorWorldPosition, this.lookAtPosition);
    this.target.reflect(this.normal).negate();
    this.target.add(this.mirrorWorldPosition);

    this.updateMirrorCamera(camera);
    this.updateTextureMatrix();
    this.updateMirrorPlane(camera, this.options);

    this.options.eye.setFromMatrixPosition(camera.matrixWorld);

    this.render(renderer, scene);
  };

  private updateMirrorCamera(camera: PerspectiveCamera): void {
    this.mirrorCamera.position.copy(this.view);
    this.mirrorCamera.up.set(0, 1, 0);
    this.mirrorCamera.up.applyMatrix4(this.rotationMatrix);
    this.mirrorCamera.up.reflect(this.normal);
    this.mirrorCamera.lookAt(this.target);

    this.mirrorCamera.far = camera.far; // Used in WebGLBackground
    this.mirrorCamera.updateMatrixWorld(true);
    this.mirrorCamera.projectionMatrix.copy(camera.projectionMatrix);
  }

  private textureMatrix: Matrix4 = new Matrix4();
  private updateTextureMatrix() {
    // Update the texture matrix
    this.textureMatrix.set(
      0.5,
      0.0,
      0.0,
      0.5,
      0.0,
      0.5,
      0.0,
      0.5,
      0.0,
      0.0,
      0.5,
      0.5,
      0.0,
      0.0,
      0.0,
      1.0
    );
    this.textureMatrix.multiply(this.mirrorCamera.projectionMatrix);
    this.textureMatrix.multiply(this.mirrorCamera.matrixWorldInverse);
  }

  private updateMirrorPlane(camera, options: WaterOptions) {
    // Now update projection matrix with new clip plane, implementing code from: http://www.terathon.com/code/oblique.html
    // Paper explaining this technique: http://www.terathon.com/lengyel/Lengyel-Oblique.pdf
    this.mirrorPlane.setFromNormalAndCoplanarPoint(
      this.normal,
      this.mirrorWorldPosition
    );
    this.mirrorPlane.applyMatrix4(this.mirrorCamera.matrixWorldInverse);

    this.clipPlane.set(
      this.mirrorPlane.normal.x,
      this.mirrorPlane.normal.y,
      this.mirrorPlane.normal.z,
      this.mirrorPlane.constant
    );

    const projectionMatrix = this.mirrorCamera.projectionMatrix;

    Water.updateQ(this.q, projectionMatrix, this.clipPlane);

    // Calculate the scaled plane vector
    this.clipPlane.multiplyScalar(2.0 / this.clipPlane.dot(this.q));

    // Replacing the third row of the projection matrix
    projectionMatrix.elements[2] = this.clipPlane.x;
    projectionMatrix.elements[6] = this.clipPlane.y;
    projectionMatrix.elements[10] = this.clipPlane.z + 1.0 - options.clipBias;
    projectionMatrix.elements[14] = this.clipPlane.w;
  }

  private q: Vector4 = new Vector4();
  private static updateQ(q, projectionMatrix, clipPlane): void {
    q.x =
      (Math.sign(clipPlane.x) + projectionMatrix.elements[8]) /
      projectionMatrix.elements[0];
    q.y =
      (Math.sign(clipPlane.y) + projectionMatrix.elements[9]) /
      projectionMatrix.elements[5];
    q.z = -1.0;
    q.w = (1.0 + projectionMatrix.elements[10]) / projectionMatrix.elements[14];
  }

  private render(renderer, scene) {
    /** 設定を一助保存 **/
    const currentRenderTarget = renderer.getRenderTarget();
    const currentVrEnabled = renderer.vr.enabled;
    const currentShadowAutoUpdate = renderer.shadowMap.autoUpdate;

    this.visible = false;

    renderer.vr.enabled = false; // Avoid camera modification and recursion
    renderer.shadowMap.autoUpdate = false; // Avoid re-computing shadows

    renderer.setRenderTarget(this.renderTarget);
    renderer.clear();
    renderer.render(scene, this.mirrorCamera);

    this.visible = true;

    /** 設定を元に戻す **/
    renderer.vr.enabled = currentVrEnabled;
    renderer.shadowMap.autoUpdate = currentShadowAutoUpdate;
    renderer.setRenderTarget(currentRenderTarget);
  }

  private currentTimeStamp;
  private requestID;
  /**
   * uniformsのtime変数を加算する。
   * requestAnimationFrameから呼び出される。
   *
   * @param timestamp
   */
  private onRequestAnimationFrame = (timestamp: number) => {
    if (!this.currentTimeStamp) this.currentTimeStamp = timestamp;
    const delta = timestamp - this.currentTimeStamp;

    (<ShaderMaterial>this.material).uniforms.time.value += delta / 3000;

    this.requestID = requestAnimationFrame(this.onRequestAnimationFrame);
    this.currentTimeStamp = timestamp;
  };
}
