import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { MixShaderPass } from "ts/bloom/mix/MixShaderPass";
import { WebGLRenderer } from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { FXAAShaderPass } from "ts/fxaa/FXAAShaderPass";

export class MixComposer extends EffectComposer {
  constructor(
    renderer: WebGLRenderer,
    renderPass: RenderPass,
    targetComposer: EffectComposer
  ) {
    super(renderer);
    this.addPass(renderPass);
    this.addPass(new MixShaderPass(targetComposer));
    this.addPass(new FXAAShaderPass(renderer));
  }
}
