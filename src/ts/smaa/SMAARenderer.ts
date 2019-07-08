import { PostProcessRenderer } from "ts/postprocess/PostProcessRenderer";
import { Scene } from "three";
import { PerspectiveCamera } from "three";
import { WebGLRenderer } from "three";
import { Vector2 } from "three";
import { SMAAPass } from "three/examples/jsm/postprocessing/SMAAPass";

export class SMAARenderer extends PostProcessRenderer {
  public isActive = true;

  constructor(
    scene: Scene,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) {
    super(scene, camera, renderer);
    const size = renderer.getSize(new Vector2());
    const pass = new SMAAPass(size.width, size.height);
    this.initComposer([pass], renderer);
  }

  protected render(delta): void {
    if (this.isActive) {
      super.render(delta);
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }
}
