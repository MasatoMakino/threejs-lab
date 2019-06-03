import { Common } from "ts/Common";
import { Scene } from "three";
import { ShaderMaterial } from "three";
import { Mesh } from "three";
import { Color } from "three";
import { BoxGeometry } from "three";
// @ts-ignore
import vertexSource from "ts/gradient/shader.vert";
// @ts-ignore
import fragmentSource from "ts/gradient/shader.frag";


export class StudySimple {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    Common.initLight(scene);
    const camera = Common.initCamera(scene, StudySimple.W, StudySimple.H);
    const renderer = Common.initRenderer(StudySimple.W, StudySimple.H);
    const control = Common.initControl(camera);
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
      colorA: { type: "vec3", value: new Color(0xff00ff) }
    };

    const mat = new ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexSource,
      fragmentShader: fragmentSource
    });
    const mesh = new Mesh(geo, mat);

    mesh.rotation.set(0, 0, -Math.PI / 2);
    scene.add(mesh);
  }
}

window.onload = () => {
  const study = new StudySimple();
};
