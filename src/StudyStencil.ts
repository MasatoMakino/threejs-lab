import {
  DirectionalLight,
  PerspectiveCamera,
  Plane,
  Scene,
  TorusKnotGeometry,
  Vector3,
  WebGLRenderer,
} from "three";
import { ClippingSurface } from "./clippingSurface/ClippingSurface";
import { Common } from "./Common";

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
      new Plane(new Vector3(0, 0, -1), 0),
    ];
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

    const geometry = new TorusKnotGeometry(0.4, 0.15, 220, 60);

    const surfaces: ClippingSurface[] = [];
    //トーラスジオメトリをコピーしたグループを作る。
    this.planes.forEach((plane) => {
      const group = new ClippingSurface(plane, geometry, {
        allPlanes: this.planes,
      });
      this.scene.add(group);
      surfaces.push(group);
    });

    this.renderer = Common.initRenderer(Study.W, Study.H, 0x263238);
    this.renderer.localClippingEnabled = true;

    const controls = Common.initControl(this.camera, this.renderer);
    Common.render(controls, this.renderer, this.scene, this.camera, () => {
      surfaces.forEach((surface) => {
        surface.rotation.x += 0.01;
        surface.updatePlane();
      });
    });
  }
}

window.onload = () => {
  const study = new Study();
  study.init();
};
