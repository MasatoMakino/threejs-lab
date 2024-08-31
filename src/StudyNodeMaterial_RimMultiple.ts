import GUI from "lil-gui";
import {
  Color,
  Mesh,
  Scene,
  TorusGeometry,
  Vector3,
  MeshBasicNodeMaterial,
  ShaderNodeObject,
  UniformNode,
  materialColor,
  uniform,
} from "three/webgpu";
import { Common } from "./CommonWebGPU.js";
import { rimAngleEffect } from "./tsl/RimFunction.js";

type UniformType<T> = ShaderNodeObject<UniformNode<T>>;
type RimSetting = {
  rimColor: UniformType<Color>;
  rimStrength: UniformType<number>;
  rimPow: UniformType<number>;
  rimInnerColor: UniformType<Color>;
  rimInnerStrength: UniformType<number>;
  rimInnerPow: UniformType<number>;
  angle: UniformType<Vector3>;
};
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

    const generateRimEffectSetting = (): RimSetting => {
      const rimColor = uniform(new Color(0xff0000));
      const rimStrength = uniform(1);
      const rimPow = uniform(2.0);
      const rimInnerColor = uniform(new Color(0x000000));
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
    const rim02 = generateRimEffectSetting();
    rim02.rimColor.value.setHex(0x77aaff);
    rim02.angle.value.set(-0.1, 0.4, 1);
    const rim03 = generateRimEffectSetting();
    rim03.rimColor.value.setHex(0x44ff55);
    rim03.angle.value.set(-0.7, -0.4, 1);
    rim03.rimStrength.value = 0.2;

    const addRim = (
      node: ShaderNodeObject<any>,
      setting: RimSetting
    ): ShaderNodeObject<any> => {
      return node.add(
        rimAngleEffect(
          setting.rimColor,
          setting.rimPow,
          setting.rimStrength,
          setting.rimInnerColor,
          setting.rimInnerPow,
          setting.rimInnerStrength,
          setting.angle
        )
      );
    };

    let rim = addRim(materialColor, rim01);
    rim = addRim(rim, rim02);
    rim = addRim(rim, rim03);

    mat.colorNode = rim;
    const mesh = new Mesh(geo, mat);
    scene.add(mesh);

    const gui = this.initGUI(mat.color, rim01);
    this.addRimSettingGUI("rim01", rim01, gui);
    this.addRimSettingGUI("rim02", rim02, gui);
    this.addRimSettingGUI("rim03", rim03, gui);
  }

  initGUI = (color: Color, setting: RimSetting) => {
    const gui = new GUI();
    const options = {
      color: color.getHex(),
    };
    gui.addColor(options, "color").onChange((v) => {
      color.setHex(v);
    });
    return gui;
  };

  addRimSettingGUI = (name: string, setting: RimSetting, gui: GUI) => {
    const options = {
      rimColor: setting.rimColor.value.getHex(),
      rimStrength: setting.rimStrength.value,
      rimPow: setting.rimPow.value,
      rimInnerColor: setting.rimInnerColor.value.getHex(),
      rimInnerStrength: setting.rimInnerStrength.value,
      rimInnerPow: setting.rimInnerPow.value,
      angleX: setting.angle.value.x,
      angleY: setting.angle.value.y,
      angleZ: setting.angle.value.z,
    };
    const folder = gui.addFolder(name);
    folder.addColor(options, "rimColor").onChange((v) => {
      setting.rimColor.value.setHex(v);
    });
    folder.add(options, "rimStrength", 0, 1).onChange((v) => {
      setting.rimStrength.value = v;
    });
    folder.add(options, "rimPow", 0, 5).onChange((v) => {
      setting.rimPow.value = v;
    });
    folder.addColor(options, "rimInnerColor").onChange((v) => {
      setting.rimInnerColor.value.setHex(v);
    });
    folder.add(options, "rimInnerStrength", 0, 1).onChange((v) => {
      setting.rimInnerStrength.value = v;
    });
    folder.add(options, "rimInnerPow", 0, 5).onChange((v) => {
      setting.rimInnerPow.value = v;
    });
    folder.add(options, "angleX", -1, 1).onChange((v) => {
      setting.angle.value.x = v;
    });
    folder.add(options, "angleY", -1, 1).onChange((v) => {
      setting.angle.value.y = v;
    });
    folder.add(options, "angleZ", -1, 1).onChange((v) => {
      setting.angle.value.z = v;
    });
  };
}

window.onload = () => {
  const study = new Study();
};
