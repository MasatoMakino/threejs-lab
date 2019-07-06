import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { FXAAShaderPass } from "ts/fxaa/FXAAShaderPass";
import { PostProcessRenderer } from "ts/postprocess/PostProcessRenderer";

export class FXAARenderer extends PostProcessRenderer {
  public isActive: boolean = true;

  constructor(
    scene: Scene,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) {
    super(scene, camera, renderer);
    this.composer = this.initComposer([new FXAAShaderPass(renderer)], renderer);
  }

  protected render(delta): void {
    if (this.composer && this.isActive) {
      this.composer.render(delta);
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }
}
