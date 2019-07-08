import { WebGLRenderer, Vector2 } from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { SMAAPass } from "three/examples/jsm/postprocessing/SMAAPass";
import { MixShaderPass } from "ts/bloom/mix/MixShaderPass";
import { FXAAShaderPass } from "ts/aa/FXAAShaderPass";
import { AntiAliasingType } from "ts/aa/AntiAliasingType";

export class MixComposer extends EffectComposer {
  private _type: AntiAliasingType;
  private fxaaPass: FXAAShaderPass;
  private smaaPass: SMAAPass;

  constructor(
    renderer: WebGLRenderer,
    renderPass: RenderPass,
    targetComposer: EffectComposer
  ) {
    super(renderer);
    this.addPass(renderPass);
    this.addPass(new MixShaderPass(targetComposer));

    this.fxaaPass = new FXAAShaderPass(renderer);
    this.addPass(this.fxaaPass);

    const size = renderer.getSize(new Vector2());
    this.smaaPass = new SMAAPass(size.width, size.height);
    this.addPass(this.smaaPass);
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
