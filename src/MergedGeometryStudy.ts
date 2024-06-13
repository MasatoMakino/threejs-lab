import { Camera, Group, Object3D, Scene, WebGLRenderer } from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { Common } from "./Common";

export class MergedGeometryStudy {
  public static readonly W = 1280;
  public static readonly H = 800;
  protected stats;
  protected renderer: WebGLRenderer;

  constructor() {
    this.initStats();
    const scene = Common.initScene();

    const camera = Common.initCamera(
      scene,
      MergedGeometryStudy.W,
      MergedGeometryStudy.H
    );
    this.renderer = Common.initRenderer(
      MergedGeometryStudy.W,
      MergedGeometryStudy.H
    );

    const object = this.initMesh(scene);
    const info = Common.addRendererInfo();

    this.render(object, info, this.renderer, scene, camera);
  }

  private initStats(): void {
    this.stats = new Stats();
    this.stats.showPanel(0);
    document.body.appendChild(this.stats.dom);
  }

  protected initMesh(scene: Scene): Object3D {
    // Override me
    return new Group();
  }

  public render(
    mergedMesh: Object3D,
    infoContainer: HTMLDivElement,
    renderer: WebGLRenderer,
    scene: Scene,
    camera: Camera
  ) {
    const rendering = () => {
      mergedMesh.rotation.x += 0.01;
      mergedMesh.rotation.y += 0.01;
      mergedMesh.rotation.z += 0.01;

      this.stats.begin();
      renderer.render(scene, camera);
      this.stats.end();

      Common.updateRendererInfo(infoContainer, renderer.info.render);
      requestAnimationFrame(rendering);
    };
    rendering();
  }
}
