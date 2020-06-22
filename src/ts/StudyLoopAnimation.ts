import * as dat from "dat.gui";
import {
  Color,
  Fog,
  MeshBasicMaterial,
  Plane,
  PointLight,
  PointLightHelper,
  Scene,
  TorusKnotBufferGeometry,
  Vector3,
} from "three";
import { ClippingSurface } from "./clippingSurface/ClippingSurface";
import { Common } from "./Common";
import { CommonGUI } from "./CommonGUI";

export class Study {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    scene.fog = new Fog(0x000000, 160, 320);
    Common.initLight(scene);
    const camera = Common.initCamera(scene, Study.W, Study.H);
    const renderer = Common.initRenderer(Study.W, Study.H);
    renderer.localClippingEnabled = true;

    const control = Common.initControl(camera, renderer);
    const surface = this.initObject(scene);
    this.initGUI(surface);

    Common.render(control, renderer, scene, camera, () => {
      surface.rotation.x += 0.03;
      surface.updatePlane();
    });
  }

  private initObject(scene: Scene): ClippingSurface {
    const spot = new PointLight(0xffffff, 3, 0, 2);
    spot.position.set(10, 20, 30);
    scene.add(spot);
    const helper = new PointLightHelper(spot);
    scene.add(helper);

    const geo = new TorusKnotBufferGeometry(10, 3, 64, 32);

    const plane = new Plane(new Vector3(0, 0, -1), 0);
    const surface = new ClippingSurface(plane, geo, {
      planeMaterial: new MeshBasicMaterial({
        color: new Color(0xffffff),
      }),
    });

    scene.add(surface);
    return surface;
  }

  public initGUI(surface: ClippingSurface): void {
    const gui = new dat.GUI();
    CommonGUI.initMaterialGUI(
      gui,
      surface.planeObject.material,
      "Clipping Surface"
    );
    const frontFaceFolder = CommonGUI.initMaterialGUI(
      gui,
      surface.frontFace.material,
      "FrontFace"
    );
    frontFaceFolder.add(surface.frontFace, "visible");
  }
}

window.onload = () => {
  const study = new Study();
};
