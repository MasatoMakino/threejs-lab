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

export class StudyBloom {
  public static readonly W = 640;
  public static readonly H = 480;

  public bloomRenderer: BloomRenderer;
  private center: Mesh;
  private satellite: Mesh;

  constructor() {
    const scene = Common.initScene();
    scene.fog = new Fog(0x000000, 80, 160);
    Common.initLight(scene);
    const camera = Common.initCamera(scene, StudyBloom.W, StudyBloom.H);
    const renderer = Common.initRenderer(StudyBloom.W, StudyBloom.H);
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);

    this.bloomRenderer = new BloomRenderer(scene, camera, renderer);
    this.bloomRenderer.onBeforeRequestAnimationFrame = () => {
      control.update();
    };
    this.bloomRenderer.threshold = 0.4;
    this.bloomRenderer.start();

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
    folder.add(this.bloomRenderer, "threshold", 0.0, 1.0);
    folder.add(this.bloomRenderer, "strength", 0.0, 4.0);
    folder.add(this.bloomRenderer, "radius", 0.0, 1.0);
    folder.open();
  }

  public sizeUp(): void {
    const size = this.bloomRenderer.getSize();
    this.bloomRenderer.updateSize(size.width + 4, size.height + 4);
  }

  public sizeDown(): void {
    const size = this.bloomRenderer.getSize();
    this.bloomRenderer.updateSize(size.width - 4, size.height - 4);
  }
}

window.onload = () => {
  const study = new StudyBloom();

  document.addEventListener(
    "keydown",
    event => {
      const keyName = event.key;

      switch (keyName) {
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