import {
  Color,
  Fog,
  Mesh,
  PointLight,
  PointLightHelper,
  Scene,
  SphereGeometry
} from "three";
import { Common } from "ts/Common";
import * as dat from "dat.gui";
import { Material } from "three";
import { Directions } from "ts/customPhongMaterial/IAnimatable";
import { HalftoneGridMaterial } from "ts/halftoneGrid/HalftoneGridMaterial";
import { TextureLoader } from "three";

export class StudyHalftoneGrid {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    scene.fog = new Fog(0x000000, 80, 160);
    Common.initLight(scene);
    const camera = Common.initCamera(
      scene,
      StudyHalftoneGrid.W,
      StudyHalftoneGrid.H
    );
    const renderer = Common.initRenderer(
      StudyHalftoneGrid.W,
      StudyHalftoneGrid.H
    );
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    const mat = this.initObject(scene);
    Common.render(control, renderer, scene, camera, () => {
      mat.addTime(0.0333);
    });

    this.initGUI(mat);
  }

  private initObject(scene: Scene): HalftoneGridMaterial {
    const spot = new PointLight(0xffffff, 1, 0, 2);
    spot.position.set(10, 20, 30);
    scene.add(spot);
    const helper = new PointLightHelper(spot);
    scene.add(helper);

    const geo = new SphereGeometry(10, 64, 64);

    const mat = new HalftoneGridMaterial({
      // side:DoubleSide,
      fog: scene.fog !== undefined
    });
    mat.color = new Color(0xff6666);
    mat.direction = Directions.vertical;
    // mat.loadMaskTexture("./textures/landmask.png");
    const mesh = new Mesh(geo, mat);

    scene.add(mesh);

    return mat;
  }

  public initGUI(mat: HalftoneGridMaterial): void {
    const gui = new dat.GUI();
    this.initGULMaterial(gui, mat);
  }

  private initGULMaterial(gui, mat: HalftoneGridMaterial): void {
    const prop = {
      color: mat.color.getHex(),
      mask: "./textures/landmask.png"
    };

    const folder = gui.addFolder("Material");
    folder.addColor(prop, "color").onChange(val => {
      mat.color.setHex(val);
    });
    folder.add(mat, "isAnimate");
    folder.add(mat, "speed", -2, 2);
    folder.add(mat, "waveFrequency", 0.0, 1.0);
    folder.add(mat, "raisedBottom", 0.0, 1.0);
    folder.add(mat, "division", 2.0, 128.0).step(1);
    folder.add(mat, "divisionScaleX", 0.0, 4.0).step(1);
    folder.add(mat, "wavePow", 0.0, 4.0);
    folder.add(mat, "radius", 0.0, 1.0);
    folder.add(mat, "direction", {
      horizontal: Directions.horizontal,
      vertical: Directions.vertical,
      radial: Directions.radial
    });

    folder
      .add(prop, "mask", {
        none: "",
        earth: "./textures/landmask.png"
      })
      .onChange(val => {
        if (val === "") {
          mat.maskTexture = null;
        } else {
          mat.maskTexture = new TextureLoader().load(val);
        }
      });
    mat.maskTexture = new TextureLoader().load("./textures/landmask.png");

    folder.add(mat, "opacity", 0.0, 1.0);
    folder.open();
  }
}

window.onload = () => {
  const study = new StudyHalftoneGrid();
};