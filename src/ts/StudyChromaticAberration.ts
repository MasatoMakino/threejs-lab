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

export class Study {
  public static readonly W = 640;
  public static readonly H = 480;

  public render: PostProcessRenderer;
  private center: Mesh;
  private satellite: Mesh;

  constructor() {
    const scene = Common.initScene();
    scene.fog = new Fog(0x000000, 80, 160);
    Common.initLight(scene);
    const camera = Common.initCamera(scene, Study.W, Study.H);
    const renderer = Common.initRenderer(Study.W, Study.H);
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);

    this.render = new PostProcessRenderer(scene, camera, renderer);
    const pass = new ChromaticAberrationPass();
    this.render.initComposer([pass], renderer);

    this.render.onBeforeRequestAnimationFrame = () => {
      control.update();
    };
    this.render.start();

    this.initGUI(pass);
  }

  private initObject(scene: Scene): void {
    const spot = new PointLight(0xffffff, 3, 0, 2);
    spot.position.set(0, 0, 0);
    scene.add(spot);
    const helper = new PointLightHelper(spot, 2, 0);
    scene.add(helper);

    const geo = new SphereGeometry(10, 6, 6);
    const mat = new MeshLambertMaterial({
      fog: scene.fog !== undefined
    });
    mat.color = new Color(0xff6666);
    mat.wireframe = true;
    this.center = new Mesh(geo, mat);
    scene.add(this.center);

    this.satellite = new Mesh(geo, mat.clone());
    this.satellite.position.set(30, 0, 0);
    scene.add(this.satellite);

    const satellite02 = new Mesh(geo, mat);
    satellite02.position.set(-30, 0, 0);
    scene.add(satellite02);
  }

  public initGUI(pass: ChromaticAberrationPass): void {
    const gui = new dat.GUI();
    this.initGUISatellite(gui);
    this.initGUIResolution(gui, pass);
  }

  private initGUISatellite(gui): void {
    const folder = gui.addFolder("Satellite");
    folder.add(this.satellite.material, "transparent");
    folder.add(this.satellite.material, "opacity", 0.0, 1.0);
    folder.open();
  }

  private initGUIResolution(gui, pass: ChromaticAberrationPass): void {
    const folder = gui.addFolder("Chromatic Aberration");
    folder.add(pass, "rate", 0.0, 3.0);
    folder.add(pass, "radiusInner", 0.0, 3.0);
    folder.add(pass, "radiusOuter", 0.0, 3.0);
    folder.open();
  }
}

window.onload = () => {
  const study = new Study();
};
