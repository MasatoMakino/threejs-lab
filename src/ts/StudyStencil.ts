import { Mesh } from "three";
import { Scene } from "three";
import { PerspectiveCamera } from "three";
import { DirectionalLight } from "three";
import { Plane } from "three";
import { Vector3 } from "three";
import { TorusKnotBufferGeometry } from "three";
import { MeshStandardMaterial } from "three";
import { WebGLRenderer } from "three";
import { Common } from "ts/Common";
import { ClippingSurface } from "ts/clippingSurface/ClippingSurface";

export class Study {
  static readonly W: number = 640.0;
  static readonly H: number = 480.0;

  scene: Scene;
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;
  planes: Plane[];

  static initPlanes(): Plane[] {
    return [
      new Plane(new Vector3(-1, 0, 0), 0),
      new Plane(new Vector3(0, -1, 0), 0),
      new Plane(new Vector3(0, 0, -1), 0)
    ];
  }

  static initFrontFaceMesh(planes, geometry): Mesh {
    const material = new MeshStandardMaterial({
      color: 0xffc107,
      metalness: 0.1,
      roughness: 0.75,
      clippingPlanes: planes
      // clipShadows: true,
      // shadowSide: DoubleSide
    });

    // 切り取られたジオメトリの表面を描画するためのオブジェクト
    const clippedColorFront = new Mesh(geometry, material);
    // clippedColorFront.castShadow = true;
    clippedColorFront.renderOrder = 6;
    return clippedColorFront;
  }

  init() {
    this.scene = new Scene();
    this.camera = Common.initCamera(this.scene, Study.W, Study.H);
    this.camera.position.set(2, 2, 2);

    Common.initLight(this.scene);
    var dirLight = new DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 7.5);
    this.scene.add(dirLight);

    this.planes = Study.initPlanes();

    const geometry = new TorusKnotBufferGeometry(0.4, 0.15, 220, 60);

    //トーラスジオメトリをコピーしたグループを作る。
    this.planes.forEach(plane => {
      const group = new ClippingSurface(plane, this.planes, geometry);
      this.scene.add(group);
    });
    //フロントジオメトリを生成して追加。
    // this.scene.add(Study.initFrontFaceMesh(this.planes, geometry));

    this.renderer = Common.initRenderer(Study.W, Study.H, 0x263238);
    this.renderer.localClippingEnabled = true;

    const controls = Common.initControl(this.camera, this.renderer);
    Common.render(controls, this.renderer, this.scene, this.camera, () => {});
  }
}

window.onload = () => {
  const study = new Study();
  study.init();
};
