import { Common } from "ts/Common";
import { Scene } from "three";
import { ShaderMaterial } from "three";
import { Mesh } from "three";
import { Color } from "three";
import { BoxGeometry } from "three";
// @ts-ignore
import vertexSource from "ts/contour/shader.vert";
// @ts-ignore
import fragmentSource from "ts/contour/shader.frag";
import { TextureLoader } from "three";
import {DoubleSide} from "three";

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
    const bottom = -10.0;
    const top = 10.0;
    const texture = new TextureLoader().load("./textures/contour.png");

    const geo = new BoxGeometry(size, size, size);

    const uniforms = {
      bottom: { type: "float", value: bottom },
      top: { type: "float", value: top },
      texture: { type: "sampler2D", value: texture },
      colorB: { type: "vec3", value: new Color(0x00ff00) },
      colorA: { type: "vec3", value: new Color(0xff00ff) }
    };

    const mat = new ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexSource,
      fragmentShader: fragmentSource,
      side:DoubleSide,
      transparent:true

    });
    const mesh = new Mesh(geo, mat);

    scene.add(mesh);
  }
}

window.onload = () => {
  const study = new StudySimple();
};
