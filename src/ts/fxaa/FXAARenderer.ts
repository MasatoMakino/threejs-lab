import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { FXAAShaderPass } from "ts/fxaa/FXAAShaderPass";
import { PostProcessRenderer } from "ts/postprocess/PostProcessRenderer";

export class FXAARenderer extends PostProcessRenderer {
  protected composer: EffectComposer;
  private fxaaPass: FXAAShaderPass;
  public isActive: boolean = true;

  constructor(
    scene: Scene,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) {
    super(scene, camera, renderer);
    this.fxaaPass = new FXAAShaderPass(renderer);
    this.composer = this.initComposer(this.fxaaPass, scene, camera, renderer);
  }

  /**
   * FXAAシェーダーを挟んだEffectComposerを初期化する。
   * @param scene
   * @param camera
   * @param renderer
   */
  private initComposer(
    fxaaPass: FXAAShaderPass,
    scene: Scene,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ): EffectComposer {
    const renderPass = this.getRenderPass();
    const composer = new EffectComposer(renderer);
    composer.addPass(renderPass);
    composer.addPass(fxaaPass);
    return composer;
  }

  public updateSize(w: number, h: number): void {
    super.updateSize(w, h);
    this.composer.setSize(w, h);
    this.fxaaPass.updateSize();
  }

  protected render(delta): void {
    if (this.composer && this.isActive) {
      this.composer.render(delta);
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }
}
