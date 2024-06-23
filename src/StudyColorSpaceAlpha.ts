import { GUI } from "lil-gui";
import {
  ColorManagement,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  Scene,
  WebGLRenderer,
  WorkingColorSpace,
} from "three";
import WebGPURenderer from "three/examples/jsm/renderers/webgpu/WebGPURenderer.js";
import { Common } from "./Common";

/**
 * WebGLとWebGPUでのopacity値の設定の違いを確認するためのサンプルコード
 * - WebGLではopacityプロパティはガンマ補正(2.2)が適用される
 * - WebGPUではリニア値が適用される。
 *
 * Color.setRGB(alpha, 0,0,"srgb")を利用することでガンマ補正後のアルファ値が取得できるので、
 * WebGPU環境でWebGLやPhotoshopなどの環境の表示を再現する場合はこちらを利用する。
 */
export class Study {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    Common.initLight(scene);
    const camera = Common.initCamera(scene, Study.W, Study.H);

    const canvasGL = document.createElement("canvas");
    canvasGL.id = "webGPU-canvas";
    document.body.appendChild(canvasGL);

    const renderer = Common.initRenderer(Study.W, Study.H, 0x000000);
    const rendererGPU = Common.initWebGPURenderer(
      Study.W,
      Study.H,
      0x000000,
      "webGPU-canvas"
    );
    [renderer, rendererGPU].forEach((r) => {
      // r.outputColorSpace = "srgb-linear";
    });
    const mat = this.initObject(scene);
    this.initGUI(mat, renderer, rendererGPU);

    const rendering = () => {
      renderer.render(scene, camera);
      rendererGPU.renderAsync(scene, camera);
      requestAnimationFrame(rendering);
    };
    rendering();
  }

  private initObject(scene: Scene) {
    const geo = new PlaneGeometry(30, 30);

    const mat = new MeshBasicMaterial();
    mat.color.setRGB(1, 0, 0);
    mat.transparent = true;
    const mesh = new Mesh(geo, mat);
    scene.add(mesh);

    return mat;
  }

  initGUI = (
    materialBasic: MeshBasicMaterial,
    rendererGL: WebGLRenderer,
    rendererWebGPU: WebGPURenderer
  ): void => {
    const gui = new GUI();
    const materialColor = {
      r: 0.5,
      g: 0.5,
      b: 0.5,
    };
    const materialAlpha = {
      a: 1,
      useGamma: false,
    };
    const colorSpaceSetting = {
      colorSpace: rendererGL.outputColorSpace,
      workspace: ColorManagement.workingColorSpace,
    };

    const onChangeColor = () => {
      materialBasic.color.setRGB(
        materialColor.r,
        materialColor.g,
        materialColor.b
      );
    };

    gui.add(materialColor, "r", 0, 1).onChange(onChangeColor);
    gui.add(materialColor, "g", 0, 1).onChange(onChangeColor);
    gui.add(materialColor, "b", 0, 1).onChange(onChangeColor);

    const updateAlpha = () => {
      materialBasic.opacity = materialAlpha.a;
    };
    gui.add(materialAlpha, "a", 0, 1).onChange(updateAlpha);

    const updateColorSpace = () => {
      rendererGL.outputColorSpace = rendererWebGPU.outputColorSpace =
        colorSpaceSetting.colorSpace;
      ColorManagement.workingColorSpace = colorSpaceSetting.workspace;
    };
    gui
      .add(colorSpaceSetting, "colorSpace", ["srgb", "srgb-linear"])
      .onChange(updateColorSpace);
    gui
      .add(colorSpaceSetting, "workspace", ["srgb-linear", "display-p3-linear"])
      .onChange(updateColorSpace);

    onChangeColor();
    updateAlpha();
    updateColorSpace();
  };
}

window.onload = () => {
  const study = new Study();
};
