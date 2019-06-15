import { ShaderMaterial } from "three";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
// @ts-ignore
import FragmentShader from "./mix.frag";
// @ts-ignore
import VertexShader from "./mix.vert";

/**
 * 他のエフェクトコンポーザーの描画結果を受け取り、自身のレンダリング結果に乗算するShaderPass
 */
export class MixShaderPass extends ShaderPass {
  private static readonly TEXTURE_ID: string = "baseTexture";

  constructor(targetComposer: EffectComposer) {
    super(
      new ShaderMaterial({
        uniforms: {
          baseTexture: { value: null },
          bloomTexture: { value: targetComposer.renderTarget2.texture }
        },
        vertexShader: VertexShader,
        fragmentShader: FragmentShader,
        defines: {}
      }),
      MixShaderPass.TEXTURE_ID
    );

    this.needsSwap = true;
  }
}
