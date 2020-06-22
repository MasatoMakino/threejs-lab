import { BoxGeometry, Color, Mesh, Scene, ShaderMaterial } from "three";
import { Common } from "./Common";
// @ts-ignore
import fragmentSource from "./gradient/shader.frag";
// @ts-ignore
import vertexSource from "./gradient/shader.vert";

export class StudyGradient {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    Common.initLight(scene);
    const camera = Common.initCamera(scene, StudyGradient.W, StudyGradient.H);
    const renderer = Common.initRenderer(StudyGradient.W, StudyGradient.H);
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);
    Common.render(control, renderer, scene, camera);
  }

  private initObject(scene: Scene): void {
    const size = 20.0;
    const geo = new BoxGeometry(size, size, size);

    const uniforms = {
      size: { type: "float", value: size },
      colorB: { type: "vec3", value: new Color(0x00ff00) },
      colorA: { type: "vec3", value: new Color(0xff00ff) },
    };

    const mat = new ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexSource,
      fragmentShader: fragmentSource,
    });
    const mesh = new Mesh(geo, mat);

    mesh.rotation.set(0, 0, -Math.PI / 2);
    scene.add(mesh);
  }
}

window.onload = () => {
  const study = new StudyGradient();
};
