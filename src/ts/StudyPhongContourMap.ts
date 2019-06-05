import {
  Scene,
  Mesh,
  Fog,
  PointLight,
  PointLightHelper,
  Color,
  TorusGeometry
} from "three";
import { Common } from "ts/Common";
import { PhongContourMaterial } from "ts/phongContour/PhongContourMaterial";

export class StudyContourMap {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    scene.fog = new Fog(0x000000, 80, 160);
    Common.initLight(scene);
    const camera = Common.initCamera(
      scene,
      StudyContourMap.W,
      StudyContourMap.H
    );
    const renderer = Common.initRenderer(StudyContourMap.W, StudyContourMap.H);
    const control = Common.initControl(camera);
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

    const geo = new TorusGeometry(10, 4, 16, 32);
    // geo.rotateX(Math.PI/4);

    const mat = new PhongContourMaterial({
      // alphaTest:0.1,
      // opacity: 0.5,
      fog: scene.fog !== undefined
    });
    mat.loadMap("./textures/contour.png", geo);
    // mat.emissive = new Color(0xffff00);

    const mesh = new Mesh(geo, mat);

    scene.add(mesh);
  }
}

window.onload = () => {
  const study = new StudyContourMap();
};
