/**
 * 地球儀用の緯度経度グリッド
 */

import { ShaderMaterialParameters, UniformsUtils, Texture } from "three";
import { CustomPhongMaterial } from "ts/customPhongMaterial/CustomPhongMaterial";
import {
  Directions,
  IWaveAnimatable,
  AnimatableMaterialChunk,
  WaveAnimatableMaterialChunk
} from "ts/customPhongMaterial/IAnimatable";
import {
  IRepeatablePattern,
  RepeatablePatternMaterialChunk
} from "ts/customPhongMaterial/IRepeatablePattern";
import {
  IMaskable,
  MaskableMaterialChunk
} from "ts/customPhongMaterial/IMaskable";

// @ts-ignore
import FragmentShader from "./Shader.frag";
// @ts-ignore
import VertexShader from "../customPhongMaterial/Shader.vert";

export class HalftoneGridMaterial extends CustomPhongMaterial
  implements IWaveAnimatable, IRepeatablePattern, IMaskable {
  addTime(delta: number): void {
    AnimatableMaterialChunk.addTime(this, delta);
  }

  /**
   * 波アニメーションを行うか否か。
   */
  get isAnimate(): boolean {
    return this.uniforms.isAnimate.value;
  }
  set isAnimate(value: boolean) {
    this.uniforms.isAnimate.value = value;
  }

  /**
   * 波の速度
   * 0.5にすると1の半分の速度になる。
   * マイナスを指定すると、波の進行方向が反転する。
   */
  speed: number = -0.5;

  get division(): number {
    return this.uniforms.division.value;
  }
  set division(value: number) {
    this.uniforms.division.value = value;
  }
  get divisionScaleX(): number {
    return this.uniforms.divisionScaleX.value;
  }
  set divisionScaleX(value: number) {
    this.uniforms.divisionScaleX.value = value;
  }

  /**
   * 明るさの底上げ
   */
  get raisedBottom(): number {
    return this.uniforms.raisedBottom.value;
  }
  set raisedBottom(value: number) {
    this.uniforms.raisedBottom.value = value;
  }

  /**
   * グリッド線の太さ
   * 0.0で線なし、0.5でグリッド面なしになる。
   */
  get radius(): number {
    return this.uniforms.radius.value;
  }
  set radius(value: number) {
    this.uniforms.radius.value = value;
  }

  /**
   * 波の振幅
   * 1の場合、幅1ヘックス
   * 0.5の場合、幅2ヘックスになる
   */
  get waveFrequency(): number {
    return this.uniforms.waveFrequency.value;
  }
  set waveFrequency(value: number) {
    this.uniforms.waveFrequency.value = value;
  }

  get wavePow(): number {
    return this.uniforms.wavePow.value;
  }
  set wavePow(value: number) {
    this.uniforms.wavePow.value = value;
  }

  /**
   * 波が発生する方角
   */
  get direction(): Directions {
    return this.uniforms.direction.value;
  }
  set direction(value: Directions) {
    this.uniforms.direction.value = value;
  }

  //IMaskable interface implements
  isLoading: boolean = false;
  get maskTexture(): Texture {
    return this.uniforms.maskTexture.value;
  }
  loadMaskTexture(url: string): void {
    MaskableMaterialChunk.loadMaskTexture(this, url);
  }
  deleteMaskTexture(): void {
    MaskableMaterialChunk.deleteMaskTexture(this);
  }

  constructor(parameters?: ShaderMaterialParameters) {
    super(VertexShader, FragmentShader, parameters);
  }

  protected initUniforms(): void {
    this.uniforms = UniformsUtils.merge([
      CustomPhongMaterial.getBasicUniforms(),
      WaveAnimatableMaterialChunk.getUniform(),
      RepeatablePatternMaterialChunk.getUniform(),
      MaskableMaterialChunk.getUniform(),
      {
        radius: { value: 0.75 }
      }
    ]);
  }

  protected initDefaultSetting(parameters?: ShaderMaterialParameters): void {
    super.initDefaultSetting(parameters);
    if (parameters.transparent == null) {
      this.transparent = true;
    }
  }
}
