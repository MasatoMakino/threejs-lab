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
import { HexGridMaterial } from "ts/hexGrid/HexGridMaterial";
import { Directions } from "ts/hexGrid/HexGridMaterial";

export class StudyHexGrid {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    scene.fog = new Fog(0x000000, 80, 160);
    Common.initLight(scene);
    const camera = Common.initCamera(scene, StudyHexGrid.W, StudyHexGrid.H);
    const renderer = Common.initRenderer(StudyHexGrid.W, StudyHexGrid.H);
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    const mat = this.initObject(scene);
    Common.render(control, renderer, scene, camera, () => {
      mat.time += 0.0333;
    });
  }

  private initObject(scene: Scene): HexGridMaterial {
    const spot = new PointLight(0xffffff, 1, 0, 2);
    spot.position.set(10, 20, 30);
    scene.add(spot);
    const helper = new PointLightHelper(spot);
    scene.add(helper);

    const geo = new SphereGeometry(10, 64, 64);

    const mat = new HexGridMaterial({
      // opacity: 0.5,
      // side:DoubleSide,
      fog: scene.fog !== undefined
    });
    mat.color = new Color(0xff6666);
    // mat.waveFrequency = 0.1;
    // mat.speed = -0.1;
    // mat.raisedBottom = 0.5;
    // mat.wavePow =4;
    mat.direction = Directions.vertical;
    mat.gridWeight = 0.03;

    const mesh = new Mesh(geo, mat);

    scene.add(mesh);

    return mat;
  }
}

window.onload = () => {
  const study = new StudyHexGrid();
};
