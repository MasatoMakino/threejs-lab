import {
  Scene,
  Mesh,
  PointLight,
  PointLightHelper,
  Color,
  SphereGeometry,
  MeshPhongMaterial
} from "three";
import { Common } from "ts/Common";
import * as dat from "dat.gui";

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

    const self = StudyDepthTestAndDepthWrite;

    this.outer = self.initSphere(15, 0xff00ff, scene);
    this.inner = self.initSphere(10, 0xffff00, scene);

    this.switchSatelliteShift(false);
  }

  private static initSphere(r: number, color: number, scene: Scene): Mesh {
    const geo = new SphereGeometry(r, 64, 64);
    const mat = new MeshPhongMaterial({
      fog: scene.fog !== undefined,
      transparent: true,
      opacity: 0.5,
      color: new Color(color)
    });
    const mesh = new Mesh(geo, mat);
    scene.add(mesh);
    return mesh;
  }

  public switchDepthTest(val: boolean): void {
    const spheres = [this.outer, this.inner, this.satellite];
    spheres.forEach(sphere => {
      (<MeshPhongMaterial>sphere.material).depthTest = val;
    });
  }
  public switchDepthWrite(val: boolean): void {
    const spheres = [this.outer, this.inner, this.satellite];
    spheres.forEach(sphere => {
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
      depthWrite: true
    };

    const gui = new dat.GUI();

    //外部ボールがメッシュポジションか、ジオメトリシフトかで結果が変わる。
    const meshFolder = gui.addFolder("Mesh");
    meshFolder.add(prop, "alpha", 0.0, 1.0).onChange(val => {
      const spheres = [this.outer, this.inner, this.satellite];
      spheres.forEach(sphere => {
        (<MeshPhongMaterial>sphere.material).opacity = val;
      });
    });
    meshFolder.open();

    const satelliteFolder = gui.addFolder("satellite");
    satelliteFolder.add(prop, "satelliteShiftIsMeshPosition").onChange(val => {
      this.switchSatelliteShift(val);
    });
    satelliteFolder.open();

    const depthFolder = gui.addFolder("depth");
    depthFolder.add(prop, "depthTest").onChange(val => {
      this.switchDepthTest(val);
    });
    depthFolder.add(prop, "depthWrite").onChange(val => {
      this.switchDepthWrite(val);
    });
    depthFolder.open();

    const innerFolder = gui.addFolder("Inner Sphere");
    innerFolder.add(this.inner.position, "x", 0, 8);
    innerFolder.open();

    const renderOrderFolder = gui.addFolder("Render Order");
    const orders = {
      inner: 0.0,
      outer: 0.0,
      satellite: 0.0
    };
    const min = -3;
    const max = 3;
    const step = 1;
    renderOrderFolder
      .add(orders, "inner", min, max)
      .step(step)
      .onChange(val => {
        this.inner.renderOrder = val;
      });
    renderOrderFolder
      .add(orders, "outer", min, max)
      .step(step)
      .onChange(val => {
        this.outer.renderOrder = val;
      });
    renderOrderFolder
      .add(orders, "satellite", min, max)
      .step(step)
      .onChange(val => {
        this.satellite.renderOrder = val;
      });
    renderOrderFolder.open();
  }
}

window.onload = () => {
  const study = new StudyDepthTestAndDepthWrite();
};
