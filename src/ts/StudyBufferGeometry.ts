import * as dat from "dat.gui";
import Stats from "stats.js";
import {
  Camera,
  Color,
  Fog,
  Mesh,
  MeshLambertMaterial,
  PointLight,
  PointLightHelper,
  Scene,
  SphereBufferGeometry,
  SphereGeometry,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Common } from "./Common";

/**
 * BufferGeometryとGeometryの生成処理時間の比較を行う
 */
export class StudyBufferGeometry {
  public static readonly W = 640;
  public static readonly H = 480;

  private mesh: Mesh;
  private mat: MeshLambertMaterial;

  private stats;
  private geoStats;

  private params: {
    isBufferGeometry: boolean;
    updateGeometry: boolean;
  };

  constructor() {
    this.initStats();
    this.initGUI();

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

    this.initPointLight(scene);
    this.initMesh(scene);

    this.refreshGeometry();
    this.render(control, renderer, scene, camera);
  }

  private initStats(): void {
    this.stats = new Stats();
    this.stats.showPanel(1);
    document.body.appendChild(this.stats.dom);
    this.geoStats = this.stats.addPanel(
      new Stats.Panel("ms, geo init", "#ff8", "#221")
    );
  }

  private initGUI(): void {
    this.params = {
      isBufferGeometry: true,
      updateGeometry: true,
    };
    const gui = new dat.GUI();
    gui.add(this.params, "isBufferGeometry").onChange(() => {
      this.refreshGeometry();
    });
    gui.add(this.params, "updateGeometry").onChange(() => {
      this.refreshGeometry();
    });
  }

  private initPointLight(scene: Scene): void {
    const spot = new PointLight(0xffffff, 3, 0, 2);
    spot.position.set(10, 20, 30);
    scene.add(spot);
    const helper = new PointLightHelper(spot);
    scene.add(helper);
  }

  private initMesh(scene): void {
    this.mat = new MeshLambertMaterial();
    this.mat.color = new Color(0xff6666);
    this.mesh = new Mesh();
    this.mesh.material = this.mat;
    scene.add(this.mesh);
  }

  private refreshGeometry(): void {
    const now = performance.now();

    const seg = Math.pow(2, 8);
    let geo;
    if (this.params.isBufferGeometry) {
      geo = new SphereBufferGeometry(10, seg, seg);
    } else {
      geo = new SphereGeometry(10, seg, seg);
    }
    this.mesh.geometry = geo;

    const onGeo = performance.now();

    this.geoStats.update(onGeo - now, 1000);
  }

  public render(
    control: OrbitControls,
    renderer: WebGLRenderer,
    scene: Scene,
    camera: Camera
  ) {
    const rendering = () => {
      this.stats.begin();
      control.update();
      if (this.params.updateGeometry) {
        this.refreshGeometry();
      }
      renderer.render(scene, camera);
      this.stats.end();
      requestAnimationFrame(rendering);
    };
    rendering();
  }
}

window.onload = () => {
  const study = new StudyBufferGeometry();
};
