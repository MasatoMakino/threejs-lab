import {
  AmbientLight,
  AxesHelper,
  Color,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Camera } from "three";

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

  public static initCamera(scene, W, H): PerspectiveCamera {
    const camera = new PerspectiveCamera(45, W / H, 1, 400);
    camera.position.set(0, 0, 100);
    camera.updateMatrixWorld(false);
    scene.add(camera);
    return camera;
  }

  public static initControl(camera, render?: WebGLRenderer): OrbitControls {
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
      antialias: antialias
    });
    renderer.setClearColor(new Color(color));
    renderer.setSize(W, H);
    renderer.setPixelRatio(window.devicePixelRatio);
    return renderer;
  }

  public static initHelper(scene: Scene): void {
    const axesHelper = new AxesHelper(30);
    scene.add(axesHelper);
  }

  public static render(
    control: OrbitControls,
    renderer: WebGLRenderer,
    scene: Scene,
    camera: Camera,
    onBeforeRender?: () => void
  ) {
    const rendering = () => {
      if (onBeforeRender) {
        onBeforeRender();
      }
      control.update();
      renderer.render(scene, camera);
      requestAnimationFrame(rendering);
    };
    rendering();
  }
}
