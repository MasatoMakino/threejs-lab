import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import * as FXAAShaderModule from "three/examples/jsm/shaders/FXAAShader";
import { Vector2, ShaderMaterial, WebGLRenderer } from "three";

/**
 * FXAAShaderを組み込み済みのShaderPass
 */
export class FXAAShaderPass extends ShaderPass {
  private renderer: WebGLRenderer;

  /**
   * コンストラクタ
   * @param renderer
   */
  constructor(renderer: WebGLRenderer) {
    super(FXAAShaderModule["FXAAShader"]);

    this.renderer = renderer;
    this.updateSize();
  }

  /**
   * レンダリングサイズを更新する。
   * サイズはコンストラクタで指定されたWebGLRendererに追従する。
   */
  public updateSize(): void {
    const size = this.renderer.getSize(new Vector2());
    const pixelRatio = this.renderer.getPixelRatio();
    this.setSize(size.width * pixelRatio, size.height * pixelRatio);
  }

  public setSize(width: number, height: number): void {
    super.setSize(width, height);
    const uniforms = (this.material as ShaderMaterial).uniforms;
    uniforms.resolution.value.x = 1 / width;
    uniforms.resolution.value.y = 1 / height;
  }
}
