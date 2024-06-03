import { Mesh, PlaneGeometry, Scene, Color } from "three";
import {
  MeshBasicNodeMaterial,
  color,
} from "three/examples/jsm/nodes/Nodes.js";
import WebGPURenderer from "three/examples/jsm/renderers/webgpu/WebGPURenderer.js";
import { Common } from "./Common";

export class StudyNodeBasic {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    Common.initLight(scene);
    const camera = Common.initCamera(scene, StudyNodeBasic.W, StudyNodeBasic.H);

    const renderer = new WebGPURenderer({
      canvas: document.getElementById("webgl-canvas") as HTMLCanvasElement,
      antialias: true,
    });
    renderer.setClearColor(new Color(0x000000));

    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);
    Common.render(control, renderer, scene, camera);
  }

  private initObject(scene: Scene): void {
    const geo = new PlaneGeometry(10, 10);
    const mat = new MeshBasicNodeMaterial();
    mat.colorNode = color(0xff0000);
    const mesh = new Mesh(geo, mat);
    scene.add(mesh);
  }
}

window.onload = () => {
  const study = new StudyNodeBasic();
};