import { Common } from "ts/Common";
import { Fog } from "three";
import { Scene } from "three";
import { PointLight } from "three";
import { PointLightHelper } from "three";
import { Mesh } from "three";
import { TorusKnotBufferGeometry } from "three";
import { MeshBasicMaterial } from "three";
import { Color } from "three";
import { BackSide } from "three";

export class Study {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    // scene.fog = new Fog(0x000000, 80, 160);
    Common.initLight(scene);
    const camera = Common.initCamera(scene, Study.W, Study.H);
    const renderer = Common.initRenderer(Study.W, Study.H);

    const control = Common.initControl(camera, renderer);
    // Common.initHelper(scene);
    this.initObject(scene);
    // this.initGUI();

    Common.render(control, renderer, scene, camera);
  }

  private initObject(scene: Scene): void {
    const spot = new PointLight(0xffffff, 3, 0, 2);
    spot.position.set(10, 20, 30);
    scene.add(spot);
    const helper = new PointLightHelper(spot);
    scene.add(helper);

    const geo = new TorusKnotBufferGeometry(10, 3, 100, 16);
    const mat = new MeshBasicMaterial({
      color: new Color(0xff00ff),
      side: BackSide
    });

    const mesh = new Mesh(geo, mat);

    scene.add(mesh);
  }
}

window.onload = () => {
  const study = new Study();
};
