import {
  Scene,
  Mesh,
  Fog,
  PointLight,
  PointLightHelper,
  Color,
  TorusGeometry,
  AdditiveBlending
} from "three";
import { Common } from "ts/Common";
import { EarthGridMaterial } from "ts/earthGrid/EarthGridMaterial";
import { SphereGeometry } from "three";
import { DoubleSide } from "three";
import { MeshLambertMaterial } from "three";
import { FXAARenderer } from "ts/fxaa/FXAARenderer";
import { BloomRenderer } from "ts/bloom/BloomRenderer";

export class StudyBloom {
  public static readonly W = 640;
  public static readonly H = 480;

  public bloomRenderer: BloomRenderer;

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
    this.bloomRenderer.start();
  }

  private initObject(scene: Scene): void {
    const spot = new PointLight(0xffffff, 3, 0, 2);
    spot.position.set(0, 0, 0);
    scene.add(spot);
    const helper = new PointLightHelper(spot, 2);
    scene.add(helper);

    const geo = new SphereGeometry(10, 64, 64);
    const mat = new MeshLambertMaterial({
      fog: scene.fog !== undefined
    });
    mat.color = new Color(0xff6666);
    const mesh = new Mesh(geo, mat);
    mesh.layers.enable(BloomRenderer.BLOOM);
    scene.add(mesh);

    const nonBloom = new Mesh(geo, mat.clone());
    nonBloom.position.set(30, 0, 0);
    scene.add(nonBloom);
  }
}

window.onload = () => {
  const study = new StudyBloom();
};
