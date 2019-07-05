import { WebGLRenderer } from "three";
import { Scene } from "three";
import { PerspectiveCamera } from "three";
import { Vector2 } from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { Pass } from "three/examples/jsm/postprocessing/Pass";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";

export class PostProcessRenderer {
  protected renderer: WebGLRenderer;
  protected pass: Pass;
  protected composer: EffectComposer;
  protected scene: Scene;
  protected camera: PerspectiveCamera;
  protected id: number;
  protected lastUpdateTimestamp: number;

  constructor(
    scene: Scene,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
  }

  protected getRenderPass(): RenderPass {
    return new RenderPass(
      this.scene,
      this.camera,
      undefined,
      undefined,
      undefined
    );
  }

  /**
   * シェーダーパスを挟んだEffectComposerを初期化する。
   * @param renderer
   */
  protected initComposer(
    pass: Pass | Pass[],
    renderer: WebGLRenderer
  ): EffectComposer {
    const renderPass = this.getRenderPass();
    const composer = new EffectComposer(renderer);
    composer.addPass(renderPass);
    if (pass instanceof Array) {
      pass.forEach(p => {
        composer.addPass(p);
      });
    } else {
      composer.addPass(pass);
    }
    return composer;
  }

  /**
   * レンダリングを開始する。
   */
  public start(): void {
    if (this.id != null) return;
    this.id = requestAnimationFrame(this.onRequestAnimationFrame);
  }

  /**
   * レンダリングを停止する。
   */
  public stop(): void {
    if (this.id == null) return;
    cancelAnimationFrame(this.id);
    this.lastUpdateTimestamp = null;
  }

  public updateSize(w: number, h: number): void {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(w, h);

    if (this.composer != null) {
      this.composer.setSize(w, h);
    }
    if (this.pass != null) {
      this.pass.setSize(w, h);
    }
  }

  public getSize(): Vector2 {
    return this.renderer.getSize(new Vector2());
  }

  /**
   * requestAnimationFrameハンドラ
   * @param timestamp
   */
  protected onRequestAnimationFrame = (timestamp?: number) => {
    if (this.lastUpdateTimestamp == null) {
      this.lastUpdateTimestamp = timestamp;
    }

    const delta = timestamp - this.lastUpdateTimestamp;

    if (this.onBeforeRequestAnimationFrame) {
      this.onBeforeRequestAnimationFrame(timestamp);
    }
    this.render(delta);

    this.lastUpdateTimestamp = timestamp;
    this.id = requestAnimationFrame(this.onRequestAnimationFrame);
  };

  protected render(delta): void {
    // this.composer.render(delta);
  }

  public onBeforeRequestAnimationFrame: (timestamp?: number) => void;
}
