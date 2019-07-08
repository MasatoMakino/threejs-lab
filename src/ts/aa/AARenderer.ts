import { PostProcessRenderer } from "ts/postprocess/PostProcessRenderer";
import { Scene } from "three";
import { PerspectiveCamera } from "three";
import { WebGLRenderer } from "three";
import { FXAAShaderPass } from "ts/fxaa/FXAAShaderPass";
import { SMAAPass } from "three/examples/jsm/postprocessing/SMAAPass";
import { Vector2 } from "three";
import { AntiAliasingType } from "ts/aa/AntiAliasingType";

export class AARenderer extends PostProcessRenderer {
  private _type: AntiAliasingType;
  private fxaaPass: FXAAShaderPass;
  private smaaPass: SMAAPass;

  constructor(
    scene: Scene,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) {
    super(scene, camera, renderer);

    const size = renderer.getSize(new Vector2());
    this.fxaaPass = new FXAAShaderPass(renderer);
    this.smaaPass = new SMAAPass(size.width, size.height);
    this.initComposer([this.fxaaPass, this.smaaPass], renderer);

    this.type = AntiAliasingType.SMAA;
  }

  get type(): AntiAliasingType {
    return this._type;
  }
  set type(value: AntiAliasingType) {
    this._type = value;
    this.smaaPass.enabled = value == AntiAliasingType.SMAA;
    this.fxaaPass.enabled = value == AntiAliasingType.FXAA;
  }
}
