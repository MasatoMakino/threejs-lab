import { Fog, Mesh, PointLight, PointLightHelper, Scene } from "three";
import { SphereGeometry } from "three";
import { Common } from "ts/Common";
import { SquareGridMaterial } from "threejs-shader-materials";
import { AARenderer } from "ts/aa/AARenderer";
import { AAType } from "ts/aa/AARenderer";
import * as dat from "dat.gui";

export class StudyAA {
  public static readonly W = 640;
  public static readonly H = 480;
  protected aaRenderer: AARenderer;

  constructor() {
    const scene = Common.initScene();
    scene.fog = new Fog(0x000000, 80, 160);
    Common.initLight(scene);
    const camera = Common.initCamera(scene, StudyAA.W, StudyAA.H);
    const renderer = Common.initRenderer(
      StudyAA.W,
      StudyAA.H,
      0,
      "webgl-canvas",
      false
    );

    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);

    this.aaRenderer = new AARenderer(scene, camera, renderer);
    this.aaRenderer.onBeforeRequestAnimationFrame = () => {
      control.update();
    };

    this.aaRenderer.start();

    this.initGUI();
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

  public initGUI(): void {
    const gui = new dat.GUI();
    this.initGUI_AAType(gui);
    this.initGUIResolution(gui);
  }

  private initGUI_AAType(gui): void {
    const folder = gui.addFolder("AA Type");
    folder.add(this.aaRenderer, "type", {
      None: AAType.None,
      FXAA: AAType.FXAA,
      SMAA: AAType.SMAA
    });
    folder.open();
  }

  private initGUIResolution(gui): void {
    const size = this.aaRenderer.getSize();
    const prop = {
      width: size.width,
      height: size.height
    };

    const onChange = () => {
      this.aaRenderer.setSize(prop.width, prop.height);
    };
    const folder = gui.addFolder("Resolution");
    folder
      .add(prop, "width", 2, 1920)
      .step(1)
      .onChange(onChange);
    folder
      .add(prop, "height", 2, 1080)
      .step(1)
      .onChange(onChange);
    folder.open();
  }
}

window.onload = () => {
  const study = new StudyAA();
};
