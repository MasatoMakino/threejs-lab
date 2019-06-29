import { GLSLChunk } from "ts/customPhongMaterial/chunk/GLSLChunk";
import { Directions } from "ts/customPhongMaterial/IAnimatable";

/**
 * IWaveAnimatableインターフェースで定義されたアニメーションを実行するGLSLチャンク。
 * 実行にはグリッドid値が必要。idはvec2。
 * 結果はdiffuseColor.aに反映される。
 */

export class WavyAnimationChunk extends GLSLChunk {
  public static add(): void {
    WavyAnimationFragmentChunk.add();
    WavyAnimationUniformChunk.add();
  }
}

class WavyAnimationFragmentChunk extends GLSLChunk {
  protected static getChunkName(): string {
    return "wavy_animation_fragment_chunk";
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

class TimeAnimationUniformChunk extends GLSLChunk {
  protected static getChunkName(): string {
    return "time_animation_uniform_chunk";
  }

  protected static getChunk(): string {
    return `
    uniform float time;
    uniform bool isAnimate;
    `;
  }
}

class WavyAnimationUniformChunk extends TimeAnimationUniformChunk {
  protected static getChunkName(): string {
    return "wavy_animation_uniform_chunk";
  }

  protected static getChunk(): string {
    return (
      super.getChunk() +
      `
    uniform float raisedBottom;
    uniform float waveFrequency;
    uniform float wavePow;
    uniform int direction;
    `
    );
  }
}
