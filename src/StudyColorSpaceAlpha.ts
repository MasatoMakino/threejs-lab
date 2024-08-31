import { GUI } from "lil-gui";
import { WebGLRenderer } from "three";
import {
  ColorManagement,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  Scene,
  WebGPURenderer,
} from "three/webgpu";
import { Common } from "./Common.js";
import { Common as CommonWebGPU } from "./CommonWebGPU.js";

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

  static initWebGLScene() {
    const scene = Common.initScene();
    Common.initLight(scene);
    const camera = Common.initCamera(scene, Study.W, Study.H);
    return { scene, camera };
  }

  static initWebGPUScene() {
    const scene = CommonWebGPU.initScene();
    CommonWebGPU.initLight(scene);
    const camera = CommonWebGPU.initCamera(scene, Study.W, Study.H);
    return { scene, camera };
  }

  constructor() {
    // const scene = Common.initScene();
    // Common.initLight(scene);
    // const camera = Common.initCamera(scene, Study.W, Study.H);
    const glScnene = Study.initWebGLScene();
    const wgpuScene = Study.initWebGPUScene();

    const canvasGL = document.createElement("canvas");
    canvasGL.id = "webGPU-canvas";
    document.body.appendChild(canvasGL);
    document.body.style.display = "flex"; // bodyの子要素を横並びにする

    const renderer = Common.initRenderer(Study.W, Study.H, 0x000000);
    const rendererGPU = CommonWebGPU.initWebGPURenderer(
      Study.W,
      Study.H,
      0x000000,
      "webGPU-canvas"
    );
    const matGL = this.initObject(glScnene.scene);
    const matGPU = this.initObject(wgpuScene.scene);

    this.addFigure(renderer.domElement, "WebGL");
    this.addFigure(rendererGPU.domElement, "WebGPU");

    this.initGUI(matGL, matGPU, renderer, rendererGPU);

    const rendering = () => {
      renderer.render(glScnene.scene, glScnene.camera);
      rendererGPU.renderAsync(wgpuScene.scene, wgpuScene.camera);
      requestAnimationFrame(rendering);
    };
    rendering();
  }

  /**
   * CanvasElementを、そのCanvasElementを内包したfigure要素に置き換える。figure要素にはfigcaption要素が追加される。
   * @param canvas
   * @param figure
   */
  private addFigure = (canvas: HTMLCanvasElement, figure: string) => {
    const figureElement = document.createElement("figure");
    const figCaption = document.createElement("figcaption");
    figCaption.textContent = figure;
    figureElement.appendChild(canvas);
    figureElement.appendChild(figCaption);
    document.body.appendChild(figureElement);
  };

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
    materialBasicWebGPU: MeshBasicMaterial,
    rendererGL: WebGLRenderer,
    rendererWebGPU: WebGPURenderer
  ): void => {
    const materials = [materialBasic, materialBasicWebGPU];

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
      materials.forEach((m) => {
        m.color.setRGB(materialColor.r, materialColor.g, materialColor.b);
      });
    };

    gui.add(materialColor, "r", 0, 1).onChange(onChangeColor);
    gui.add(materialColor, "g", 0, 1).onChange(onChangeColor);
    gui.add(materialColor, "b", 0, 1).onChange(onChangeColor);

    const updateAlpha = () => {
      materials.forEach((m) => {
        m.opacity = materialAlpha.a;
      });
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
