import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import { BloomComposer } from "ts/bloom/BloomComposer";
import { MixComposer } from "ts/bloom/mix/MixComposer";
import { PostProcessRenderer } from "ts/postprocess/PostProcessRenderer";

export class BloomRenderer extends PostProcessRenderer {
  public bloom: BloomComposer;
  private mix: MixComposer;

  constructor(
    scene: Scene,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) {
    super(scene, camera, renderer);
    const renderScene = this.getRenderPass();
    this.bloom = new BloomComposer(renderer, renderScene);
    this.mix = new MixComposer(renderer, renderScene, this.bloom);
  }

  protected render(delta): void {
    //TODO render()
    // this.scene.traverse(darkenNonBloomed);
    this.bloom.render(delta);
    // this.scene.traverse(restoreMaterial);

    this.mix.render(delta);
  }
}
