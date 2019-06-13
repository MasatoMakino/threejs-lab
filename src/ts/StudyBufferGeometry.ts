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
import { BufferGeometry } from "three";

export class StudyBufferGeometry {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    scene.fog = new Fog(0x000000, 80, 160);
    Common.initLight(scene);
    const camera = Common.initCamera(
      scene,
      StudyBufferGeometry.W,
      StudyBufferGeometry.H
    );
    const renderer = Common.initRenderer(
      StudyBufferGeometry.W,
      StudyBufferGeometry.H
    );
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);
    Common.render(control, renderer, scene, camera);
  }

  private initObject(scene: Scene): void {
    const spot = new PointLight(0xffffff, 3, 0, 2);
    spot.position.set(10, 20, 30);
    scene.add(spot);
    const helper = new PointLightHelper(spot);
    scene.add(helper);

    const seg = Math.pow(2, 8);
    console.log(seg);
    // const geo = new SphereGeometry(10, seg, seg);
    const geo = new BufferGeometry().fromGeometry(
      new SphereGeometry(10, seg, seg)
    );

    const mat = new MeshLambertMaterial();
    mat.color = new Color(0xff6666);
    const mesh = new Mesh(geo, mat);

    scene.add(mesh);
  }
}

window.onload = () => {
  const study = new StudyBufferGeometry();
};
