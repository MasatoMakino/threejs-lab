import {
  Mesh,
  PlaneGeometry,
  Scene,
  Color,
  MeshBasicNodeMaterial,
  ShaderNodeObject,
  UniformNode,
  uniform,
} from "three/webgpu";
import { Common } from "./CommonWebGPU.js";
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
    const geo = new PlaneGeometry(10, 10);
    const mat = new MeshBasicNodeMaterial();
    mat.color = new Color(0xff0000);

    // 1. シェーダー側でマテリアルのプロパティを参照したい場合、一度uniformにラッピングする。
    const colorUniform = uniform(mat.color);
    const mixColor = uniform(new Color(0x000000));

    // 2. シェーダー側では、uniformの値を参照する。
    mat.colorNode = colorUniform.add(mixColor);
    const mesh = new Mesh(geo, mat);
    scene.add(mesh);

    this.initGUI(mat, mixColor);
  }

  private initGUI(
    mat: MeshBasicNodeMaterial,
    mixColor: ShaderNodeObject<UniformNode<Color>>
  ): void {
    const gui = new GUI();
    const colorObj = {
      color: mat.color.getHex(),
      mixColor: mixColor.value.getHex(),
    };
    gui.addColor(colorObj, "color").onChange((v) => {
      //3. マテリアルプロパティを変更すれば、uniformの値も変更され、結果がシェーダーに反映される。
      mat.color.setHex(v);
    });
    gui.addColor(colorObj, "mixColor").onChange((v) => {
      mixColor.value.setHex(v);
    });
  }
}

window.onload = () => {
  const study = new StudyNodeBasic();
};
