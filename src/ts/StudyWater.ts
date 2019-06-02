import { Common } from "ts/Common";
import {
  Scene,
  PlaneBufferGeometry,
  Mesh,
  TextureLoader,
  RepeatWrapping
} from "three";
import { Water } from "ts/water/Water";

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
    const waterGeometry = new PlaneBufferGeometry(10000, 10000);

    this.water = new Water(waterGeometry, {
      // textureWidth: 512,
      // textureHeight: 512,
      normalSampler: new TextureLoader().load(
        "textures/waternormals.jpg",
        function(texture) {
          texture.wrapS = texture.wrapT = RepeatWrapping;
        }
      ),
      alpha: 1.0,
      // sunDirection: light.position.clone().normalize(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: scene.fog !== undefined
    });

    this.water.rotation.x = -Math.PI / 2;

    scene.add(this.water);
  }
}

window.onload = () => {
  const study = new StudyWater();
};
