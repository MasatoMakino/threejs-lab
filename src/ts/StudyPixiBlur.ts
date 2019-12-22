import { Common } from "ts/Common";
import { Scene, PlaneGeometry, Mesh, Texture, MeshBasicMaterial } from "three";
import { Application, Graphics } from "pixi.js";
import TWEEN from "@tweenjs/tween.js";
import { Blending } from "three";
import { AdditiveBlending } from "three";

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
    const app = new Application({
      width: 256,
      height: 256,
      preserveDrawingBuffer: true,
      clearBeforeRender: false
    });
    document.body.appendChild(app.view);

    app.ticker.add(() => {
      TWEEN.update(app.ticker.lastTime);
      map.needsUpdate = true;
    });

    const shape = new Graphics();
    shape
      .beginFill(0xff00ff)
      .drawRect(0, 0, 32, 32)
      .endFill();

    const shade = new Graphics();
    shade
      .beginFill(app.renderer.backgroundColor, 0.05)
      .drawRect(0, 0, 256, 256)
      .endFill();

    app.stage.addChild(shape);
    app.stage.addChild(shade);

    const tween = new TWEEN.Tween(shape)
      .to({ x: 256, y: 256 }, 3000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .repeat(Infinity)
      .yoyo(true)
      .start();

    const geo = new PlaneGeometry(32, 32);
    const map = new Texture(app.view);
    const mat = new MeshBasicMaterial({
      map: map,
      blending: AdditiveBlending
    });
    const mesh = new Mesh(geo, mat);
    scene.add(mesh);
  }
}

window.onload = () => {
  const study = new Study();
};
