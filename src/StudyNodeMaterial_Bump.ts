import { Mesh, Scene, TorusGeometry } from "three";
import {
  MeshBasicNodeMaterial,
  normalLocal,
  positionLocal,
  uniform,
  vec3,
  ShaderNodeObject,
  UniformNode,
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
    const geo = new TorusGeometry(10, 4, 16, 100);
    const mat = new MeshBasicNodeMaterial();

    const bump = uniform(1.0);

    //positionLocalがGLSLのtransformedと同じ、加工前のジオメトリ座標
    mat.positionNode = positionLocal.add(normalLocal.mul(vec3(bump)));
    const mesh = new Mesh(geo, mat);
    scene.add(mesh);

    this.initGUI(bump);
  }

  private initGUI(uniformBump: ShaderNodeObject<UniformNode<number>>): void {
    const gui = new GUI();
    const bumpObj = { bump: uniformBump.value };
    gui.add(bumpObj, "bump", -10, 10, 0.1).onChange((v) => {
      uniformBump.value = v;
    });
  }
}

window.onload = () => {
  const study = new Study();
};
