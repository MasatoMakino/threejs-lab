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
import { Light } from "three";

export class Water extends Mesh {
  private mirrorPlane = new Plane();
  private normal = new Vector3();
  private mirrorWorldPosition = new Vector3();
  private cameraWorldPosition = new Vector3();
  private rotationMatrix = new Matrix4();
  private lookAtPosition = new Vector3(0, 0, -1);
  private clipPlane = new Vector4();

  private view = new Vector3();
  private target = new Vector3();
  private q = new Vector4();

  private mirrorCamera = new PerspectiveCamera();

  private options: WaterOptions;

  private renderTarget: WebGLRenderTarget;

  constructor(geometry: Geometry | BufferGeometry, options: WaterOptions) {
    super(geometry);
    this.options = WaterOptionsUtil.initOption(options);
    this.initRenderTarget(this.options);
    const mat = this.initShader(this.options);
    this.material = mat;

    this.onBeforeRender = this.onBeforeRenderHandler;
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

    (<ShaderMaterial>this.material).uniforms[
      "sunDirection"
    ].value = this.options.sunDirection;
    (<ShaderMaterial>this.material).uniforms[
      "sunColor"
    ].value = this.options.sunColor;
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
    this.render(renderer, scene);
  };

  private updateMirrorCamera(camera) {
    this.mirrorCamera.position.copy(this.view);
    this.mirrorCamera.up.set(0, 1, 0);
    this.mirrorCamera.up.applyMatrix4(this.rotationMatrix);
    this.mirrorCamera.up.reflect(this.normal);
    this.mirrorCamera.lookAt(this.target);

    this.mirrorCamera.far = camera.far; // Used in WebGLBackground
    this.mirrorCamera.updateMatrixWorld(true);
    this.mirrorCamera.projectionMatrix.copy(camera.projectionMatrix);
  }

  private textureMatrix = new Matrix4();
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

    var projectionMatrix = this.mirrorCamera.projectionMatrix;

    this.q.x =
      (Math.sign(this.clipPlane.x) + projectionMatrix.elements[8]) /
      projectionMatrix.elements[0];
    this.q.y =
      (Math.sign(this.clipPlane.y) + projectionMatrix.elements[9]) /
      projectionMatrix.elements[5];
    this.q.z = -1.0;
    this.q.w =
      (1.0 + projectionMatrix.elements[10]) / projectionMatrix.elements[14];

    // Calculate the scaled plane vector
    this.clipPlane.multiplyScalar(2.0 / this.clipPlane.dot(this.q));

    // Replacing the third row of the projection matrix
    projectionMatrix.elements[2] = this.clipPlane.x;
    projectionMatrix.elements[6] = this.clipPlane.y;
    projectionMatrix.elements[10] = this.clipPlane.z + 1.0 - options.clipBias;
    projectionMatrix.elements[14] = this.clipPlane.w;

    options.eye.setFromMatrixPosition(camera.matrixWorld);
  }

  private render(renderer, scene) {
    var currentRenderTarget = renderer.getRenderTarget();

    var currentVrEnabled = renderer.vr.enabled;
    var currentShadowAutoUpdate = renderer.shadowMap.autoUpdate;

    this.visible = false;

    renderer.vr.enabled = false; // Avoid camera modification and recursion
    renderer.shadowMap.autoUpdate = false; // Avoid re-computing shadows

    renderer.setRenderTarget(this.renderTarget);
    renderer.clear();
    renderer.render(scene, this.mirrorCamera);

    this.visible = true;

    renderer.vr.enabled = currentVrEnabled;
    renderer.shadowMap.autoUpdate = currentShadowAutoUpdate;

    renderer.setRenderTarget(currentRenderTarget);

    //TODO onBeforeRenderではなく、requestAnimationFrameで処理する。
    (<ShaderMaterial>this.material).uniforms.time.value += 1.0 / 60.0;
  }
}
