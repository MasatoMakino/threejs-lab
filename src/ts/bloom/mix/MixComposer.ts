import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { MixShaderPass } from "ts/bloom/mix/MixShaderPass";
import { WebGLRenderer } from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { FXAAShaderPass } from "ts/fxaa/FXAAShaderPass";

export class MixComposer extends EffectComposer {
  private fxaaPass: FXAAShaderPass;

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
  }

  setSize(width: number, height: number): void {
    super.setSize(width, height);
    this.fxaaPass.updateSize();
  }
}
