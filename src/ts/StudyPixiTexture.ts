import TWEEN from "@tweenjs/tween.js";
import { Application, Graphics } from "pixi.js";
import {
  AdditiveBlending,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  Scene,
  Texture,
} from "three";
import { Common } from "ts/Common";

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
    const app = new Application({ width: 256, height: 256 });
    document.body.appendChild(app.view);

    app.ticker.add(() => {
      TWEEN.update(app.ticker.lastTime);
      map.needsUpdate = true;
    });

    const shape = new Graphics();
    shape.beginFill(0xff00ff).drawRect(0, 0, 32, 32).endFill();

    app.stage.addChild(shape);

    const tween = new TWEEN.Tween(shape as any) //bug : tween.js v18.6.0
      .to({ x: 256, y: 256 }, 3000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .repeat(Infinity)
      .yoyo(true)
      .start(null); //bug : tween.js v18.6.0

    const geo = new PlaneGeometry(32, 32);
    const map = new Texture(app.view);
    const mat = new MeshBasicMaterial({
      map: map,
      blending: AdditiveBlending,
    });
    const mesh = new Mesh(geo, mat);
    scene.add(mesh);
  }
}

window.onload = () => {
  const study = new Study();
};
