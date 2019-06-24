import { Scene, Mesh, Fog, PointLight, PointLightHelper, Color } from "three";
import { Common } from "ts/Common";
import { EarthGridMaterial } from "ts/earthGrid/EarthGridMaterial";
import { SphereGeometry } from "three";
import { DoubleSide } from "three";

export class StudyEarthGrid {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    scene.fog = new Fog(0x000000, 80, 160);
    Common.initLight(scene);
    const camera = Common.initCamera(scene, StudyEarthGrid.W, StudyEarthGrid.H);
    const renderer = Common.initRenderer(StudyEarthGrid.W, StudyEarthGrid.H);
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

    const geo = new SphereGeometry(10, 64, 64);
    // geo.rotateX(Math.PI/4);

    const mat = new EarthGridMaterial({
      // opacity: 0.5,
      // side:DoubleSide,
      fog: scene.fog !== undefined
    });
    mat.gridColor = new Color(0xff6666);
    mat.glowColor = new Color(0x66ffff);
    mat.glowStrength = 0.5;
    // mat.startGlow();

    const mesh = new Mesh(geo, mat);

    scene.add(mesh);
  }
}

window.onload = () => {
  const study = new StudyEarthGrid();
};
