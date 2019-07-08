import { Scene, Mesh, Fog, PointLight, PointLightHelper, Color } from "three";
import { Common } from "ts/Common";
import { SphereGeometry } from "three";
import { FXAARenderer } from "ts/fxaa/FXAARenderer";
import { SquareGridMaterial } from "threejs-shader-materials";
import { SMAARenderer } from "ts/smaa/SMAARenderer";

export class StudyFXAA {
  public static readonly W = 640;
  public static readonly H = 480;

  private smaaRenderer: SMAARenderer;

  constructor() {
    const scene = Common.initScene();
    scene.fog = new Fog(0x000000, 80, 160);
    Common.initLight(scene);
    const camera = Common.initCamera(scene, StudyFXAA.W, StudyFXAA.H);
    const renderer = Common.initRenderer(
      StudyFXAA.W,
      StudyFXAA.H,
      0,
      "webgl-canvas",
      false
    );
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);

    this.smaaRenderer = new SMAARenderer(scene, camera, renderer);
    this.smaaRenderer.onBeforeRequestAnimationFrame = () => {
      control.update();
    };
    this.smaaRenderer.start();
  }

  private initObject(scene: Scene): void {
    const spot = new PointLight(0xffffff, 3, 0, 2);
    spot.position.set(10, 20, 30);
    scene.add(spot);
    const helper = new PointLightHelper(spot);
    scene.add(helper);

    const geo = new SphereGeometry(10, 64, 64);
    const mat = new SquareGridMaterial({
      fog: scene.fog !== undefined
    });
    mat.isAnimate = false;
    mat.isReversed = true;

    const mesh = new Mesh(geo, mat);

    scene.add(mesh);
  }

  public switchAA(): void {
    this.smaaRenderer.isActive = !this.smaaRenderer.isActive;
  }

  public sizeUp(): void {
    const size = this.smaaRenderer.getSize();
    this.smaaRenderer.setSize(size.width + 4, size.height + 4);
  }

  public sizeDown(): void {
    const size = this.smaaRenderer.getSize();
    this.smaaRenderer.setSize(size.width - 4, size.height - 4);
  }
}

window.onload = () => {
  const study = new StudyFXAA();

  document.addEventListener(
    "keydown",
    event => {
      const keyName = event.key;

      switch (keyName) {
        case " ":
          study.switchAA();
          break;
        case "q":
          study.sizeUp();
          break;
        case "a":
          study.sizeDown();
          break;
      }
    },
    false
  );
};
