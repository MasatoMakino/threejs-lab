import {
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  Scene,
  Color,
  Vector3,
} from "three";
import { MeshBasicNodeMaterial, materialColor, uniform } from "three/webgpu";
import { GUI } from "lil-gui";

import { Common } from "./Common";

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
    const geo = new PlaneGeometry(10, 10);

    const mat = new MeshBasicMaterial();
    mat.color.setRGB(1, 0, 0);
    mat.transparent = true;
    const mesh = new Mesh(geo, mat);
    scene.add(mesh);

    const matHex = new MeshBasicMaterial();
    matHex.color.setHex(0xff0000);
    matHex.transparent = true;
    const meshHex = new Mesh(geo, matHex);
    scene.add(meshHex);
    meshHex.position.set(20, 0, 0);

    const matNode = new MeshBasicNodeMaterial();
    const meshNode = new Mesh(geo, matNode);
    matNode.color.setRGB(1, 0, 0);
    matNode.transparent = true;
    scene.add(meshNode);
    meshNode.position.set(-20, 0, 0);

    const matNodeMulti = new MeshBasicNodeMaterial();
    const multiColor = new Color(1, 0, 0);
    const uniformColor = uniform(multiColor);
    matNodeMulti.colorNode = materialColor.mul(uniformColor);
    const meshNodeMulti = new Mesh(geo, matNodeMulti);
    matNodeMulti.transparent = true;
    scene.add(meshNodeMulti);
    meshNodeMulti.position.set(0, 20, 0);

    this.initGUI(mat, matHex, matNode, multiColor, matNodeMulti);
  }

  initGUI = (
    materialBasic: MeshBasicMaterial,
    materialHex: MeshBasicMaterial,
    materialNode: MeshBasicNodeMaterial,
    multiColor: Vector3 | Color,
    multiMaterial: MeshBasicNodeMaterial
  ): void => {
    const gui = new GUI();
    const materialColor = {
      r: 0.5,
      g: 0.5,
      b: 0.5,
    };
    const materialAlpha = {
      a: 1,
    };

    const onChangeColor = () => {
      materialBasic.color.setRGB(
        materialColor.r,
        materialColor.g,
        materialColor.b
      );
      const hex =
        ((materialColor.r * 255) << 16) |
        ((materialColor.g * 255) << 8) |
        (materialColor.b * 255);
      materialHex.color.setHex(hex);
      materialNode.color.setRGB(
        materialColor.r,
        materialColor.g,
        materialColor.b,
        "srgb"
      );

      multiColor.set(
        materialNode.color.r,
        materialNode.color.g,
        materialNode.color.b
      );
    };

    gui.add(materialColor, "r", 0, 1).onChange(onChangeColor);
    gui.add(materialColor, "g", 0, 1).onChange(onChangeColor);
    gui.add(materialColor, "b", 0, 1).onChange(onChangeColor);

    const updateAlpha = () => {
      materialBasic.opacity = materialAlpha.a;
      materialHex.opacity = materialAlpha.a;
      materialNode.opacity = materialAlpha.a;
      multiMaterial.opacity = materialAlpha.a;
    };
    gui.add(materialAlpha, "a", 0, 1).onChange(updateAlpha);

    onChangeColor();
    updateAlpha();
  };
}

window.onload = () => {
  const study = new Study();
};
