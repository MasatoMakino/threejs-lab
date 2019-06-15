import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { MixShaderPass } from "ts/bloom/mix/MixShaderPass";
import { WebGLRenderer } from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";

export class MixComposer extends EffectComposer {
  constructor(
    renderer: WebGLRenderer,
    renderPass: RenderPass,
    targetComposer: EffectComposer
  ) {
    super(renderer);
    this.addPass(renderPass);
    this.addPass(new MixShaderPass(targetComposer));

    //TODO : add FXAA Shader Pass
  }
}
