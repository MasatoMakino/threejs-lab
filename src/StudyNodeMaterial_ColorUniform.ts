import { Mesh, PlaneGeometry, Scene, Color } from "three";
import {
  MeshBasicNodeMaterial,
  ShaderNodeObject,
  UniformNode,
  uniform,
} from "three/examples/jsm/nodes/Nodes.js";
import { Common } from "./Common";
import { GUI } from "lil-gui";

export class Study {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    Common.initLight(scene);
    const camera = Common.initCamera(scene, Study.W, Study.H);

    const renderer = Common.initWebGPURenderer(Study.W, Study.H);
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);
    Common.render(control, renderer, scene, camera);
  }

  private initObject(scene: Scene): void {
    const uniformColor = uniform(new Color(0xff0000));
    const geo = new PlaneGeometry(10, 10);
    const mat = new MeshBasicNodeMaterial();
    mat.colorNode = uniformColor;
    const mesh = new Mesh(geo, mat);
    scene.add(mesh);

    this.initGUI(uniformColor);
  }

  private initGUI(uniformColor: ShaderNodeObject<UniformNode<Color>>): void {
    const gui = new GUI();
    const colorObj = { color: uniformColor.value.getHex() };
    gui.addColor(colorObj, "color").onChange((v) => {
      uniformColor.value.setHex(v);
    });
  }
}

window.onload = () => {
  const study = new Study();
};
