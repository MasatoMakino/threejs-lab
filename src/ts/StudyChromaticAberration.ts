import {
  Scene,
  Mesh,
  Fog,
  PointLight,
  PointLightHelper,
  Color,
  SphereGeometry,
  MeshLambertMaterial
} from "three";
import { Common } from "ts/Common";
import { BloomRenderer } from "ts/bloom/BloomRenderer";
import * as dat from "dat.gui";
import { AntiAliasingType } from "ts/aa/AntiAliasingType";
import { PostProcessRenderer } from "ts/postprocess/PostProcessRenderer";
import { ChromaticAberrationShader } from "ts/chromaticAberration/ChromaticAberrationShader";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";

export class Study {
  public static readonly W = 640;
  public static readonly H = 480;

  // public bloomRenderer: BloomRenderer;
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

    // this.bloomRenderer = new BloomRenderer(scene, camera, renderer);
    this.render = new PostProcessRenderer(scene, camera, renderer);
    const chromatic = new ChromaticAberrationShader();
    const pass = new ShaderPass(chromatic);
    this.render.initComposer([pass], renderer);

    this.render.onBeforeRequestAnimationFrame = () => {
      control.update();
    };
    this.render.start();

    this.initGUI();
  }

  private initObject(scene: Scene): void {
    const spot = new PointLight(0xffffff, 3, 0, 2);
    spot.position.set(0, 0, 0);
    scene.add(spot);
    const helper = new PointLightHelper(spot, 2, 0);
    scene.add(helper);

    const geo = new SphereGeometry(10, 32, 32);
    const mat = new MeshLambertMaterial({
      fog: scene.fog !== undefined
    });
    mat.color = new Color(0xff6666);
    this.center = new Mesh(geo, mat);
    this.center.layers.enable(BloomRenderer.BLOOM);
    scene.add(this.center);

    this.satellite = new Mesh(geo, mat.clone());
    this.satellite.position.set(30, 0, 0);
    scene.add(this.satellite);

    const satellite02 = new Mesh(geo, mat);
    satellite02.position.set(-30, 0, 0);
    scene.add(satellite02);
  }

  public initGUI(): void {
    const gui = new dat.GUI();
    this.initGULBloom(gui);
    this.initGUISatellite(gui);
    this.initRenderGUI(gui);
    this.initGUIResolution(gui);
    this.initGUI_AAType(gui);
  }

  private initGULBloom(gui): void {
    const prop = {
      bloomCenter: true,
      bloomSatellite: false
    };
    const switchBloom = (target: Mesh, isBloom: boolean) => {
      if (isBloom) {
        target.layers.enable(BloomRenderer.BLOOM);
      } else {
        target.layers.disable(BloomRenderer.BLOOM);
      }
    };

    const folder = gui.addFolder("bloom");
    folder.add(prop, "bloomCenter").onChange(val => {
      switchBloom(this.center, val);
    });
    folder.add(prop, "bloomSatellite").onChange(val => {
      switchBloom(this.satellite, val);
    });
    folder.open();
  }

  private initGUISatellite(gui): void {
    const folder = gui.addFolder("Satellite");
    folder.add(this.satellite.material, "transparent");
    folder.add(this.satellite.material, "opacity", 0.0, 1.0);
    folder.open();
  }

  private initRenderGUI(gui): void {
    const folder = gui.addFolder("renderer");
    // folder.add(this.bloomRenderer, "threshold", 0.0, 1.0);
    // folder.add(this.bloomRenderer, "strength", 0.0, 4.0);
    // folder.add(this.bloomRenderer, "radius", 0.0, 1.0);
    folder.open();
  }

  private initGUIResolution(gui): void {
    // const size = this.bloomRenderer.getSize();
    // const prop = {
    //   width: size.width,
    //   height: size.height
    // };

    const onChange = () => {
      // this.bloomRenderer.setSize(prop.width, prop.height);
    };
    const folder = gui.addFolder("Resolution");
    // folder
    //   .add(prop, "width", 2, 1920)
    //   .step(1)
    //   .onChange(onChange);
    // folder
    //   .add(prop, "height", 2, 1080)
    //   .step(1)
    //   .onChange(onChange);
    folder.open();
  }

  private initGUI_AAType(gui): void {
    const folder = gui.addFolder("AA Type");
    // folder.add(this.bloomRenderer, "antiAliasingType", {
    //   None: AntiAliasingType.None,
    //   FXAA: AntiAliasingType.FXAA,
    //   SMAA: AntiAliasingType.SMAA
    // });
    folder.open();
  }
}

window.onload = () => {
  const study = new Study();
};
