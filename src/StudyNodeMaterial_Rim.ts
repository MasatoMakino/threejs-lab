import { Mesh, Scene, Color, TorusGeometry } from "three";
import {
  MeshBasicNodeMaterial,
  color,
  uniform,
} from "three/examples/jsm/nodes/Nodes.js";
import { Common } from "./Common";
import { rimEffect } from "./tsl/RimFunction.js";

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
    const geo = new TorusGeometry(10, 4, 16, 100);
    const mat = new MeshBasicNodeMaterial();
    mat.color.setHex(0x000000);

    const colorUniform = uniform(mat.color);
    const rimColor = uniform(new Color(0xff0000));
    const rimStrength = uniform(1);
    const rimPow = uniform(2.0);
    const rimInnerColor = uniform(new Color(0x0000ff));
    const rimInnerStrength = uniform(0.1);
    const rimInnerPow = uniform(1.0);

    mat.colorNode = color(colorUniform).add(
      rimEffect(
        rimColor,
        rimPow,
        rimStrength,
        rimInnerColor,
        rimInnerPow,
        rimInnerStrength
      )
    );
    const mesh = new Mesh(geo, mat);
    scene.add(mesh);
  }
}

window.onload = () => {
  const study = new Study();
};
