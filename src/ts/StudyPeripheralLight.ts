import {
  Color,
  Fog,
  Mesh,
  MeshLambertMaterial,
  PointLight,
  PointLightHelper,
  Scene,
  SphereGeometry
} from "three";
import { Common } from "ts/Common";
import * as dat from "dat.gui";
import { PostProcessRenderer } from "ts/postprocess/PostProcessRenderer";
import { ChromaticAberrationPass } from "ts/chromaticAberration/ChromaticAberrationPass";
import { PeripheralLightShader } from "ts/peripheralLight/PeripheralLightShader";
import { PeripheralLightPass } from "ts/peripheralLight/PeripheralLightPass";

export class Study {
  public static readonly W = 640;
  public static readonly H = 480;

  public render: PostProcessRenderer;
  private center: Mesh;
  private satellite: Mesh;

  constructor() {
    const scene = Common.initScene();
    scene.fog = new Fog(0xffffff, 80, 160);
    Common.initLight(scene);
    const camera = Common.initCamera(scene, Study.W, Study.H);
    const renderer = Common.initRenderer(Study.W, Study.H, 0xffffff);
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);

    this.render = new PostProcessRenderer(scene, camera, renderer);
    const pass = new PeripheralLightPass();
    this.render.initComposer([pass], renderer);

    this.render.onBeforeRequestAnimationFrame = () => {
      control.update();
    };
    this.render.start();

    this.initGUI(pass);
  }

  private initObject(scene: Scene): void {
    const geo = new SphereGeometry(10, 16, 16);
    const mat = new MeshLambertMaterial({
      fog: scene.fog !== undefined
    });
    mat.color = new Color(0xff6666);
    this.center = new Mesh(geo, mat);
    scene.add(this.center);

    this.satellite = new Mesh(geo, mat.clone());
    this.satellite.position.set(30, 0, 0);
    scene.add(this.satellite);

    const satellite02 = new Mesh(geo, mat);
    satellite02.position.set(-30, 0, 0);
    scene.add(satellite02);
  }

  public initGUI(pass: PeripheralLightPass): void {
    const gui = new dat.GUI();
    this.initGUIEffect(gui, pass);
  }

  private initGUIEffect(gui, pass: PeripheralLightPass): void {
    const prop = {
      color: pass.color.getHex()
    };
    const folder = gui.addFolder("PeripheralLightPass");
    folder.add(pass, "rate", 0.0, 10.0);
    folder.add(pass, "radiusInner", 0.0, 3.0);
    folder.add(pass, "radiusOuter", 0.0, 3.0);
    folder.addColor(prop, "color").onChange(val => {
      pass.color.setHex(val);
    });
    folder.open();
  }
}

window.onload = () => {
  const study = new Study();
};
