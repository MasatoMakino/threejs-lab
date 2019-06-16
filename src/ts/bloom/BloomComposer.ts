import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { WebGLRenderer } from "three";
import { Vector2 } from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";

export class BloomComposer extends EffectComposer {
  public bloomPass: UnrealBloomPass;

  constructor(renderer: WebGLRenderer, renderPass: RenderPass) {
    super(renderer);

    const size = renderer.getSize(new Vector2());
    this.bloomPass = new UnrealBloomPass(size, 1.0, 0.6, 0.2);

    // @ts-ignore
    this.renderToScreen = false;

    this.addPass(renderPass);
    this.addPass(this.bloomPass);
  }
}
