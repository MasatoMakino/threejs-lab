import { MaterialInterfaceChunk } from "ts/customPhongMaterial/CustomPhongMaterial";
import { UniformsUtils } from "three";
import { IUniform } from "three";

export interface IAnimatable {
  uniforms: { [uniform: string]: IUniform };
  addTime(delta: number): void;
  speed: number;
  isAnimate: boolean;
}

export class AnimatableMaterialChunk extends MaterialInterfaceChunk {
  static getUniform() {
    return {
      time: { value: 0.0 },
      isAnimate: { value: true }
    };
  }
  static addTime(self: IAnimatable, delta: number): void {
    self.uniforms.time.value += delta * self.speed;
  }
}

export interface IWaveAnimatable extends IAnimatable {
  raisedBottom: number;
  waveFrequency: number;
  wavePow: number;
  direction: Directions;
}

export class WaveAnimatableMaterialChunk extends AnimatableMaterialChunk {
  static getUniform() {
    return UniformsUtils.merge([
      AnimatableMaterialChunk.getUniform(),
      {
        raisedBottom: { value: 0.05 },
        waveFrequency: { value: 0.2 },
        wavePow: { value: 4.0 },
        direction: { value: Directions.vertical }
      }
    ]);
  }
}

export enum Directions {
  vertical = 4,
  horizontal = 3,
  radial = 5
}
