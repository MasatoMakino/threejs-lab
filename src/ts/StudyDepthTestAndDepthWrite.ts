import * as dat from "dat.gui";
import {
  Color,
  Mesh,
  MeshPhongMaterial,
  PointLight,
  PointLightHelper,
  Scene,
  SphereGeometry,
} from "three";
import { Common } from "./Common";

export class StudyDepthTestAndDepthWrite {
  public static readonly W = 640;
  public static readonly H = 480;

  private inner: Mesh;
  private outer: Mesh;
  private satellite: Mesh;
  private scene: Scene;

  constructor() {
    this.scene = Common.initScene();
    Common.initLight(this.scene);
    const camera = Common.initCamera(
      this.scene,
      StudyDepthTestAndDepthWrite.W,
      StudyDepthTestAndDepthWrite.H
    );
    const renderer = Common.initRenderer(
      StudyDepthTestAndDepthWrite.W,
      StudyDepthTestAndDepthWrite.H
    );
    const control = Common.initControl(camera, renderer);
    Common.initHelper(this.scene);
    this.initObject(this.scene);
    Common.render(control, renderer, this.scene, camera);

    this.initGUI();
  }

  private initObject(scene: Scene): void {
    const spot = new PointLight(0xffffff, 3, 0, 2);
    spot.position.set(10, 20, 30);
    scene.add(spot);
    const helper = new PointLightHelper(spot);
    scene.add(helper);

    this.swapSphere(false);
    this.switchSatelliteShift(false);
  }

  /**
   * 中央の球体2つのシーンへの登録順のみを入れ替える。
   * @param isSwap
   */
  public swapSphere(isSwap: boolean): void {
    if (this.inner) {
      this.inner.parent.remove(this.inner);
      this.outer.parent.remove(this.outer);
      this.inner = null;
      this.outer = null;
    }

    const self = StudyDepthTestAndDepthWrite;
    if (!isSwap) {
      this.outer = self.initSphere(15, 0xff00ff, this.scene);
      this.inner = self.initSphere(10, 0xffff00, this.scene);
    } else {
      this.inner = self.initSphere(10, 0xffff00, this.scene);
      this.outer = self.initSphere(15, 0xff00ff, this.scene);
    }
  }

  private static initSphere(r: number, color: number, scene: Scene): Mesh {
    const geo = new SphereGeometry(r, 64, 64);
    const mat = new MeshPhongMaterial({
      fog: scene.fog !== undefined,
      transparent: true,
      opacity: 0.5,
      color: new Color(color),
    });
    const mesh = new Mesh(geo, mat);
    scene.add(mesh);
    return mesh;
  }

  public switchDepthTest(val: boolean): void {
    const spheres = [this.outer, this.inner, this.satellite];
    spheres.forEach((sphere) => {
      (<MeshPhongMaterial>sphere.material).depthTest = val;
    });
  }
  public switchDepthWrite(val: boolean): void {
    const spheres = [this.outer, this.inner, this.satellite];
    spheres.forEach((sphere) => {
      (<MeshPhongMaterial>sphere.material).depthWrite = val;
    });
  }

  public switchSatelliteShift(isMeshPosition: boolean) {
    if (this.satellite) {
      this.satellite.parent.remove(this.satellite);
      this.satellite = null;
    }

    const self = StudyDepthTestAndDepthWrite;
    this.satellite = self.initSphere(5, 0xffffff, this.scene);

    const satelliteX = 30;
    if (isMeshPosition) {
      this.satellite.position.x = satelliteX;
    } else {
      this.satellite.geometry.translate(satelliteX, 0, 0);
    }
  }

  public initGUI(): void {
    const prop = {
      alpha: 0.5,
      satelliteShiftIsMeshPosition: false,
      depthTest: true,
      depthWrite: true,
    };

    const gui = new dat.GUI();

    //外部ボールがメッシュポジションか、ジオメトリシフトかで結果が変わる。
    const meshFolder = gui.addFolder("Mesh");
    meshFolder.add(prop, "alpha", 0.0, 1.0).onChange((val) => {
      const spheres = [this.outer, this.inner, this.satellite];
      spheres.forEach((sphere) => {
        (<MeshPhongMaterial>sphere.material).opacity = val;
      });
    });
    meshFolder.open();

    const satelliteFolder = gui.addFolder("satellite");
    satelliteFolder
      .add(prop, "satelliteShiftIsMeshPosition")
      .onChange((val) => {
        this.switchSatelliteShift(val);
      });
    satelliteFolder.open();

    const depthFolder = gui.addFolder("depth");
    depthFolder.add(prop, "depthTest").onChange((val) => {
      this.switchDepthTest(val);
    });
    depthFolder.add(prop, "depthWrite").onChange((val) => {
      this.switchDepthWrite(val);
    });
    depthFolder.open();

    const innerFolder = gui.addFolder("Inner Sphere");
    const innerParam = {
      x: 0.0,
    };
    innerFolder.add(innerParam, "x", 0, 20).onChange((val) => {
      this.inner.position.x = val;
    });
    innerFolder.open();

    const renderOrderFolder = gui.addFolder("Render Order");
    const orders = {
      inner: 0.0,
      outer: 0.0,
      satellite: 0.0,
    };
    const min = -3;
    const max = 3;
    const step = 1;
    renderOrderFolder
      .add(orders, "inner", min, max)
      .step(step)
      .onChange((val) => {
        this.inner.renderOrder = val;
      });
    renderOrderFolder
      .add(orders, "outer", min, max)
      .step(step)
      .onChange((val) => {
        this.outer.renderOrder = val;
      });
    renderOrderFolder
      .add(orders, "satellite", min, max)
      .step(step)
      .onChange((val) => {
        this.satellite.renderOrder = val;
      });
    renderOrderFolder.open();

    const sceneFolder = gui.addFolder("Scene");
    const sceneParam = {
      SwapSphere: false,
    };
    sceneFolder.add(sceneParam, "SwapSphere").onChange((val) => {
      this.swapSphere(val);
      this.inner.position.x = innerParam.x;
    });

    sceneFolder.open();
  }
}

window.onload = () => {
  const study = new StudyDepthTestAndDepthWrite();
};
