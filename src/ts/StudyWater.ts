import {
  DirectionalLight,
  DirectionalLightHelper,
  PlaneBufferGeometry,
  Scene,
} from "three";
import { WaterOptions } from "three/examples/jsm/objects/Water";
import { Common } from "ts/Common";
import { WaterMesh } from "ts/water/WaterMesh";

export class StudyWater {
  public static readonly W = 640;
  public static readonly H = 480;

  public water: WaterMesh;

  constructor() {
    const scene = Common.initScene();
    Common.initLight(scene);
    const camera = Common.initCamera(scene, StudyWater.W, StudyWater.H);
    camera.position.set(0, 20, 100);
    const renderer = Common.initRenderer(StudyWater.W, StudyWater.H, 0x999999);
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);
    Common.render(control, renderer, scene, camera);
  }

  private initObject(scene: Scene): void {
    const light = new DirectionalLight(0xffffff, 1.0);
    light.position.set(80.707, 80.707, 0);
    scene.add(light);
    const helper = new DirectionalLightHelper(light, 15);
    scene.add(helper);

    const waterGeometry = new PlaneBufferGeometry(10000, 10000);

    const option: WaterOptions = {
      waterNormals: WaterMesh.loadNormalSampler("textures/waternormals.jpg"),
      // alpha: 1.0,
      // waterColor: 0x001e0f,
      // distortionScale: 3.7,
      fog: scene.fog !== undefined,
    };
    WaterMesh.updateSunOption(option, light);

    this.water = new WaterMesh(waterGeometry, option);

    scene.add(this.water);
  }
}

window.onload = () => {
  const study = new StudyWater();
};
