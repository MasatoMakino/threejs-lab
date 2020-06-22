import { Mesh, PlaneGeometry, Scene, ShaderMaterial } from "three";
import { Common } from "./Common";
// @ts-ignore
import fragmentSource from "./simple/shader.frag";
// @ts-ignore
import vertexSource from "./simple/shader.vert";

export class StudySimple {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    Common.initLight(scene);
    const camera = Common.initCamera(scene, StudySimple.W, StudySimple.H);
    const renderer = Common.initRenderer(StudySimple.W, StudySimple.H);
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);
    Common.render(control, renderer, scene, camera);
  }

  private initObject(scene: Scene): void {
    const geo = new PlaneGeometry(10, 10);
    const mat = new ShaderMaterial({
      vertexShader: vertexSource,
      fragmentShader: fragmentSource,
    });
    const mesh = new Mesh(geo, mat);
    scene.add(mesh);
  }
}

window.onload = () => {
  const study = new StudySimple();
};
