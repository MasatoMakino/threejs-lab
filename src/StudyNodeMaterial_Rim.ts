import GUI from "lil-gui";
import { Color, Mesh, Scene, TorusGeometry, Vector3 } from "three";
import {
  MeshBasicNodeMaterial,
  ShaderNodeObject,
  UniformNode,
  materialColor,
  uniform,
} from "three/webgpu";
import { Common } from "./Common";
import { rimEffect } from "./tsl/RimFunction.js";

type UniformType<T> = ShaderNodeObject<UniformNode<T>>;

export class Study {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    Common.initLight(scene);
    const camera = Common.initCamera(scene, Study.W, Study.H);

    const renderer = Common.initWebGPURenderer(Study.W, Study.H);
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);
    Common.render(control, renderer, scene, camera);
  }

  private initObject(scene: Scene): void {
    const geo = new TorusGeometry(10, 4, 16, 100);
    const mat = new MeshBasicNodeMaterial();
    mat.color.setHex(0x000000);

    const generateRimEffectSetting = () => {
      const rimColor = uniform(new Color(0xff0000));
      const rimStrength = uniform(1);
      const rimPow = uniform(2.0);
      const rimInnerColor = uniform(new Color(0x0000ff));
      const rimInnerStrength = uniform(0.1);
      const rimInnerPow = uniform(1.0);
      const angle = uniform(new Vector3(0, 0, 1));
      return {
        rimColor,
        rimStrength,
        rimPow,
        rimInnerColor,
        rimInnerStrength,
        rimInnerPow,
        angle,
      };
    };
    const rim01 = generateRimEffectSetting();

    mat.colorNode = materialColor.add(
      rimEffect(
        rim01.rimColor,
        rim01.rimPow,
        rim01.rimStrength,
        rim01.rimInnerColor,
        rim01.rimInnerPow,
        rim01.rimInnerStrength
      )
    );
    const mesh = new Mesh(geo, mat);
    scene.add(mesh);

    this.initGUI(
      mat.color,
      rim01.rimColor,
      rim01.rimStrength,
      rim01.rimPow,
      rim01.rimInnerColor,
      rim01.rimInnerStrength,
      rim01.rimInnerPow
    );
  }

  initGUI = (
    color: Color,
    rimColor: UniformType<Color>,
    rimStrength: UniformType<number>,
    rimPow: UniformType<number>,
    rimInnerColor: UniformType<Color>,
    rimInnerStrength: UniformType<number>,
    rimInnerPow: UniformType<number>
  ): void => {
    const gui = new GUI();
    const options = {
      color: color.getHex(),
      rimColor: rimColor.value.getHex(),
      rimStrength: rimStrength.value,
      rimPow: rimPow.value,
      rimInnerColor: rimInnerColor.value.getHex(),
      rimInnerStrength: rimInnerStrength.value,
      rimInnerPow: rimInnerPow.value,
    };
    gui.addColor(options, "color").onChange((v) => {
      color.setHex(v);
    });

    const rimFolder = gui.addFolder("Rim");
    rimFolder.addColor(options, "rimColor").onChange((v) => {
      rimColor.value.setHex(v);
    });
    rimFolder.add(options, "rimStrength", 0, 1).onChange((v) => {
      rimStrength.value = v;
    });
    rimFolder.add(options, "rimPow", 0, 5).onChange((v) => {
      rimPow.value = v;
    });
    const rimInnerFolder = gui.addFolder("Rim Inner");
    rimInnerFolder.addColor(options, "rimInnerColor").onChange((v) => {
      rimInnerColor.value.setHex(v);
    });
    rimInnerFolder.add(options, "rimInnerStrength", 0, 1).onChange((v) => {
      rimInnerStrength.value = v;
    });
    rimInnerFolder.add(options, "rimInnerPow", 0, 5).onChange((v) => {
      rimInnerPow.value = v;
    });
  };
}

window.onload = () => {
  const study = new Study();
};
