import { Common } from "ts/Common";
import { Scene } from "three";
import { ShaderMaterial } from "three";
import { Mesh } from "three";
import { BoxGeometry } from "three";
import {ContourVertexShader } from "ts/contour/vert.ts";
import { ContourFragmentShader } from "ts/contour/frag.ts";
import { TextureLoader } from "three";
import { DoubleSide } from "three";
import { UniformsUtils } from "three";
import { UniformsLib } from "three";
import { Fog } from "three";

export class StudySimple {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    scene.fog = new Fog(0x000000, 80, 120);

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

    const uniforms = UniformsUtils.merge([
      UniformsLib["fog"],
      // UniformsLib["lights"],
      {
        bottom: { type: "float", value: bottom },
        top: { type: "float", value: top },
        texture: { type: "sampler2D", value: texture }
      }
    ]);

    const mat = new ShaderMaterial({
      uniforms: uniforms,
      vertexShader: ContourVertexShader.get(),
      fragmentShader: ContourFragmentShader.get(),
      side: DoubleSide,
      transparent: true,
      // lights:true,
      fog: scene.fog !== undefined
    });

    mat.uniforms.bottom.value = bottom;
    mat.uniforms.top.value = top;
    mat.uniforms.texture.value = texture;

    const mesh = new Mesh(geo, mat);

    scene.add(mesh);
  }
}

window.onload = () => {
  const study = new StudySimple();
};
