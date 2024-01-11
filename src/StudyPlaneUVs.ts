import {
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  Scene,
  TextureLoader,
} from "three";
import { Common } from "./Common";
import GUI from "lil-gui";
import { CommonGUI } from "./CommonGUI";

export class Study {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    Common.initLight(scene);
    const camera = Common.initCamera(scene, Study.W, Study.H);
    const renderer = Common.initRenderer(Study.W, Study.H);
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);
    Common.render(control, renderer, scene, camera);
  }

  private initObject(scene: Scene): void {
    const geo = new PlaneGeometry(10, 10);
    const loader = new TextureLoader();
    const texture = loader.load("./textures/uv_grid_opengl.jpg");
    const mat = new MeshBasicMaterial({ map: texture });
    const mesh = new Mesh(geo, mat);
    scene.add(mesh);

    const gui = new GUI();
    CommonGUI.initUVGUI(gui, geo);
  }
}

window.onload = () => {
  const study = new Study();
};
