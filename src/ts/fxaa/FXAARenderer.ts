import { PerspectiveCamera, WebGLRenderer, Scene, Vector2 } from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { FXAAShaderPass } from "ts/fxaa/FXAAShaderPass";

export class FXAARenderer {
  private composer: EffectComposer;
  private renderer: WebGLRenderer;
  private scene: Scene;
  private camera: PerspectiveCamera;
  private id: number;
  private fxaaPass: FXAAShaderPass;
  private lastUpdateTimestamp: number;
  public isActive: boolean = true;

  constructor(
    scene: Scene,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.fxaaPass = new FXAAShaderPass(renderer);
    this.composer = this.initComposer(this.fxaaPass, scene, camera, renderer);
    console.log(renderer.domElement);
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
    const renderPass = new RenderPass(
      scene,
      camera,
      undefined,
      undefined,
      undefined
    );

    const composer = new EffectComposer(renderer);
    composer.addPass(renderPass);
    composer.addPass(fxaaPass);
    return composer;
  }

  public updateSize(w: number, h: number): void {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);
    this.fxaaPass.updateSize();
  }

  public getSize(): Vector2 {
    return this.renderer.getSize(new Vector2());
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

  /**
   * requestAnimationFrameハンドラ
   * @param timestamp
   */
  private onRequestAnimationFrame = (timestamp?: number) => {
    if (this.lastUpdateTimestamp == null) {
      this.lastUpdateTimestamp = timestamp;
    }

    const delta = timestamp - this.lastUpdateTimestamp;

    if (this.onBeforeRequestAnimationFrame) {
      this.onBeforeRequestAnimationFrame(timestamp);
    }
    if (this.composer && this.isActive) {
      this.composer.render(delta);
    } else {
      this.renderer.render(this.scene, this.camera);
    }

    this.lastUpdateTimestamp = timestamp;
    this.id = requestAnimationFrame(this.onRequestAnimationFrame);
  };

  public onBeforeRequestAnimationFrame: (timestamp?: number) => void;
}
