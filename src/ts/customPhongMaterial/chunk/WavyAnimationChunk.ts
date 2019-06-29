import { GLSLChunk } from "ts/customPhongMaterial/chunk/GLSLChunk";
import { Directions } from "ts/customPhongMaterial/IAnimatable";

/**
 * IWaveAnimatableインターフェースで定義されたアニメーションを実行するGLSLチャンク。
 * 実行にはグリッドid値が必要。idはvec2。
 * 結果はdiffuseColor.aに反映される。
 */
export class WavyAnimationChunk extends GLSLChunk {
  protected static getChunkName(): string {
    return "wavy_animation_chunk";
  }

  protected static getChunk(): string {
    return `
    float distance = id.y;
    if( direction == ${Directions.horizontal}){
      distance = id.x;
    }else if( direction == ${Directions.radial} ){
      distance = length(id.xy);
    }

    float wavy = isAnimate
      ? pow( sin( (distance * waveFrequency - time) ), wavePow) + raisedBottom
      : 1.0;
  
    diffuseColor.a *= wavy;
    `;
  }
}
