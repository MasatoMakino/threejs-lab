import { Scene, Mesh, Fog, PointLight, PointLightHelper, Color } from "three";
import { Common } from "ts/Common";
import { EarthGridMaterial } from "ts/earthGrid/EarthGridMaterial";
import { SphereGeometry } from "three";
import { FXAARenderer } from "ts/fxaa/FXAARenderer";

export class StudyFXAA {
  public static readonly W = 640;
  public static readonly H = 480;

  private fxaaRenderer: FXAARenderer;

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
    const control = Common.initControl(camera);
    Common.initHelper(scene);
    this.initObject(scene);

    this.fxaaRenderer = new FXAARenderer(scene, camera, renderer);
    this.fxaaRenderer.onBeforeRequestAnimationFrame = () => {
      control.update();
    };
    this.fxaaRenderer.start();
  }

  private initObject(scene: Scene): void {
    const spot = new PointLight(0xffffff, 3, 0, 2);
    spot.position.set(10, 20, 30);
    scene.add(spot);
    const helper = new PointLightHelper(spot);
    scene.add(helper);

    const geo = new SphereGeometry(10, 64, 64);

    const mat = new EarthGridMaterial({
      fog: scene.fog !== undefined
    });
    mat.color = new Color(0xff6666);
    mat.lineWeight = 0.005;

    const mesh = new Mesh(geo, mat);

    scene.add(mesh);
  }

  public switchAA(): void {
    this.fxaaRenderer.isActive = !this.fxaaRenderer.isActive;
  }

  public sizeUp(): void {
    const size = this.fxaaRenderer.getSize();
    this.fxaaRenderer.updateSize(size.width + 4, size.height + 4);
  }

  public sizeDown(): void {
    const size = this.fxaaRenderer.getSize();
    this.fxaaRenderer.updateSize(size.width - 4, size.height - 4);
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
