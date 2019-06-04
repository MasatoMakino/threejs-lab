import { Common } from "ts/Common";
import { Scene } from "three";
import { ShaderMaterial } from "three";
import { Mesh } from "three";
import { BoxGeometry } from "three";
import { ContourVertexShader } from "ts/contour/vert.ts";
import { ContourFragmentShader } from "ts/contour/frag.ts";
import { TextureLoader } from "three";
import { DoubleSide } from "three";
import { UniformsUtils } from "three";
import { UniformsLib } from "three";
import { Fog } from "three";
import { PointLight } from "three";
import { PointLightHelper } from "three";
import { PhongContourMaterial } from "ts/phongContour/PhongContourMaterial";

export class StudyContourMap {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    scene.fog = new Fog(0x000000, 80, 160);
    // Common.initLight(scene);
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
    const spot = new PointLight(0xffffff, 1, 0, 2);
    spot.position.set( 10, 20,30);
    scene.add(spot);
    const helper = new PointLightHelper(spot);
    scene.add(helper);

    const size = 20.0;
    const geo = new BoxGeometry(size, size, size);

    const mat = new PhongContourMaterial({
      // opacity:0.5,
      fog: scene.fog !== undefined,
    });
    mat.loadMap("./textures/contour.png",geo);


    const mesh = new Mesh(geo, mat);

    scene.add(mesh);
  }
}

window.onload = () => {
  const study = new StudyContourMap();
};
