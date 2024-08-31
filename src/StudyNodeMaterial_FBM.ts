import {
  Mesh,
  PlaneGeometry,
  Scene,
  MeshBasicNodeMaterial,
  uniform,
  uv,
} from "three/webgpu";
import { Common } from "./CommonWebGPU.js";
import { fbm } from "./tsl/FMBFunction";
import { GUI } from "lil-gui";

export class StudyNodeBasic {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    Common.initLight(scene);
    const camera = Common.initCamera(scene, StudyNodeBasic.W, StudyNodeBasic.H);

    const renderer = Common.initWebGPURenderer(
      StudyNodeBasic.W,
      StudyNodeBasic.H
    );
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);
    Common.render(control, renderer, scene, camera);
  }

  private initObject(scene: Scene): void {
    const geo = new PlaneGeometry(100, 100);
    const mat = new MeshBasicNodeMaterial();

    const hashLoop = uniform(10.0);
    const amp = uniform(0.5);
    mat.colorNode = fbm(uv(), hashLoop, amp).toColor();
    const mesh = new Mesh(geo, mat);
    scene.add(mesh);

    this.initGUI(hashLoop, amp);
  }

  private initGUI(hashLoop, amp): void {
    const gui = new GUI();
    const settings = {
      hashLoop: hashLoop.value,
      amp: amp.value,
    };

    gui.add(settings, "hashLoop", 1, 30, 1).onChange((v) => {
      hashLoop.value = v;
    });
    gui.add(settings, "amp", 0, 1).onChange((v) => {
      amp.value = v;
    });
  }
}

window.onload = () => {
  const study = new StudyNodeBasic();
};
