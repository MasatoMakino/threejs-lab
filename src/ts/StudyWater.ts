import { Common } from "ts/Common";
import {
  Scene,
  PlaneBufferGeometry,
  Mesh,
  TextureLoader,
  RepeatWrapping
} from "three";
import { Water } from "ts/water/Water";
import { DirectionalLight } from "three";
import { WaterOptions } from "ts/water/Water";
import { WaterOptionsUtil } from "ts/water/Water";

export class StudyWater {
  public static readonly W = 640;
  public static readonly H = 480;

  public water: Mesh;

  constructor() {
    const scene = Common.initScene();
    Common.initLight(scene);
    const camera = Common.initCamera(scene, StudyWater.W, StudyWater.H);
    const renderer = Common.initRenderer(StudyWater.W, StudyWater.H);
    const control = Common.initControl(camera);
    Common.initHelper(scene);
    this.initObject(scene);
    Common.render(control, renderer, scene, camera);
  }

  private initObject(scene: Scene): void {
    const light = new DirectionalLight(0xfff0ff, 0.8);
    scene.add(light);

    const waterGeometry = new PlaneBufferGeometry(10000, 10000);

    const option: WaterOptions = {
      // textureWidth: 512,
      // textureHeight: 512,
      normalSampler: "textures/waternormals.jpg",
      alpha: 1.0,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: scene.fog !== undefined
    };
    WaterOptionsUtil.initSun(option, light);
    this.water = new Water(waterGeometry, option);

    this.water.rotation.x = -Math.PI / 2;

    scene.add(this.water);
  }
}

window.onload = () => {
  const study = new StudyWater();
};
