import GUI from "lil-gui";
import { Scene, Sprite, SpriteMaterial, TextureLoader } from "three";
import { Common } from "./Common";
import { CommonGUI } from "./CommonGUI";

export class Study {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    Common.initLight(scene);
    const camera = Common.initCamera(scene, Study.W, Study.H);
    const renderer = Common.initRenderer(Study.W, Study.H);
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);
    Common.render(control, renderer, scene, camera);
  }

  private initObject(scene: Scene): void {
    const loader = new TextureLoader();
    const texture = loader.load("./textures/uv_grid_opengl.jpg");
    const mat = new SpriteMaterial({ map: texture });

    const sprite = new Sprite(mat);
    sprite.scale.set(10, 10, 1);
    scene.add(sprite);

    const gui = new GUI();
    CommonGUI.initSpriteUVGUI(gui, sprite.geometry);
  }
}

window.onload = () => {
  const study = new Study();
};
