import {
  AmbientLight,
  AxesHelper,
  Camera,
  Color,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  REVISION,
} from "three";
import WebGPURenderer from "three/examples/jsm/renderers/webgpu/WebGPURenderer.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export class Common {
  public static initScene() {
    const scene = new Scene();
    return scene;
  }

  public static initLight(scene) {
    const ambientLight = new AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);
    return ambientLight;
  }

  public static initCamera(
    scene: Scene,
    W: number,
    H: number,
    near = 1,
    far = 400
  ): PerspectiveCamera {
    const camera = new PerspectiveCamera(45, W / H, near, far);
    camera.position.set(0, 0, 100);
    camera.updateMatrixWorld(false);
    scene.add(camera);
    return camera;
  }

  public static initControl(
    camera: Camera,
    render: WebGLRenderer | WebGPURenderer
  ): OrbitControls {
    let domElement;
    if (render) {
      domElement = render.domElement;
    }
    const control = new OrbitControls(camera, domElement);
    control.update();
    return control;
  }

  public static initRenderer(
    W: number,
    H: number,
    color: number = 0x000000,
    id: string = "webgl-canvas",
    antialias: boolean = true
  ) {
    const renderer = new WebGLRenderer({
      canvas: document.getElementById(id) as HTMLCanvasElement,
      antialias: antialias,
    });
    this.initRendererSettings(renderer, color, W, H);
    return renderer;
  }

  public static initWebGPURenderer(
    W: number,
    H: number,
    color: number = 0x000000,
    id: string = "webgl-canvas",
    antialias: boolean = true
  ) {
    const renderer = new WebGPURenderer({
      canvas: document.getElementById(id) as HTMLCanvasElement,
      antialias: antialias,
    });
    this.initRendererSettings(renderer, color, W, H);
    return renderer;
  }

  private static initRendererSettings(
    renderer: WebGLRenderer | WebGPURenderer,
    color: number,
    W: number,
    H: number
  ) {
    renderer.setClearColor(new Color(color));
    renderer.setSize(W, H);
    renderer.setPixelRatio(window.devicePixelRatio);
    console.log("three.js revision: ", REVISION);
  }

  public static initHelper(scene: Scene): void {
    const axesHelper = new AxesHelper(30);
    scene.add(axesHelper);
  }

  public static render(
    control: OrbitControls,
    renderer: WebGLRenderer | WebGPURenderer,
    scene: Scene,
    camera: Camera,
    onBeforeRender?: () => void
  ) {
    const rendering = () => {
      if (onBeforeRender) {
        onBeforeRender();
      }
      control.update();
      if (renderer instanceof WebGPURenderer) {
        renderer.renderAsync(scene, camera);
      } else {
        renderer.render(scene, camera);
      }
      requestAnimationFrame(rendering);
    };
    rendering();
  }

  public static addRendererInfo(): HTMLDivElement {
    const info = document.createElement("div");
    document.body.appendChild(info);
    return info;
  }

  public static updateRendererInfo(div: HTMLDivElement, info: any): void {
    div.innerText = JSON.stringify(info);
  }
}
