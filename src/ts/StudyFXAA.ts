import {
  Scene,
  Mesh,
  Fog,
  PointLight,
  PointLightHelper,
  Color,
  TorusGeometry,
  AdditiveBlending
} from "three";
import { Common } from "ts/Common";
import { EarthGridMaterial } from "ts/earthGrid/EarthGridMaterial";
import { SphereGeometry } from "three";


import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import * as FXAAShaderModule from "three/examples/jsm/shaders/FXAAShader";
import { ShaderMaterial } from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { Vector2 } from "three";
import * as CopyShaderModule from "three/examples/jsm/shaders/CopyShader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { WebGLRenderer } from "three";
import { Camera } from "three";

export class StudyFXAA {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    scene.fog = new Fog(0x000000, 80, 160);
    Common.initLight(scene);
    const camera = Common.initCamera(scene, StudyFXAA.W, StudyFXAA.H);
    const renderer = Common.initRenderer(
      StudyFXAA.W,
      StudyFXAA.H,
      0,
      "webgl-canvas",
      false
    );
    const control = Common.initControl(camera);
    Common.initHelper(scene);
    this.initObject(scene);
    const composer = this.initFXAA(scene, camera, renderer);
    StudyFXAA.render(control, renderer, scene, camera, composer);
  }

  private initObject(scene: Scene): void {
    const spot = new PointLight(0xffffff, 3, 0, 2);
    spot.position.set(10, 20, 30);
    scene.add(spot);
    const helper = new PointLightHelper(spot);
    scene.add(helper);

    const geo = new SphereGeometry(10, 64, 64);

    const mat = new EarthGridMaterial({
      fog: scene.fog !== undefined
    });
    mat.color = new Color(0xff6666);
    mat.lineWeight = 0.005;

    const mesh = new Mesh(geo, mat);

    scene.add(mesh);
  }

  private initFXAA(scene, camera, renderer): EffectComposer {
    console.log("fxaa");
    const renderPass = new RenderPass(
      scene,
      camera,
      undefined,
      undefined,
      undefined
    );

    const shader = FXAAShaderModule["FXAAShader"];
    const fxaaPass = new ShaderPass(shader);

    //init fxaaPass size
    const pixelRatio = renderer.getPixelRatio();
    const size = renderer.getSize(new Vector2());
    const uniforms = (fxaaPass.material as ShaderMaterial).uniforms;
    uniforms.resolution.value.x = 1 / (size.width * pixelRatio);
    uniforms.resolution.value.y = 1 / (size.height * pixelRatio);

    //composer1
    const composer1 = new EffectComposer(renderer);
    composer1.addPass(renderPass);
    composer1.addPass(fxaaPass);

    // const copyShader = CopyShaderModule["CopyShader"];
    // const copyPass = new ShaderPass(copyShader);
    // const composer2 = new EffectComposer(renderer);
    // composer2.addPass(renderPass);
    // composer2.addPass(copyPass);

    return composer1;
  }

  public static isAA = true;

  public static render(
    control: OrbitControls,
    renderer: WebGLRenderer,
    scene: Scene,
    camera: Camera,
    composer: EffectComposer
  ) {
    const rendering = () => {
      control.update();
      if (this.isAA) {
        composer.render(undefined);
      } else {
        renderer.render(scene, camera);
      }
      requestAnimationFrame(rendering);
    };
    rendering();
  }

  public static switchAA = () => {
    StudyFXAA.isAA = !StudyFXAA.isAA;
  };
}

window.onload = () => {
  const study = new StudyFXAA();

  document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    console.log( keyName );
    if (keyName === ' ') {
      StudyFXAA.switchAA();
      return;
    }
  }, false);
};
