/**
 * 地球儀用の緯度経度グリッド
 */

import { ShaderMaterialParameters, UniformsUtils } from "three";
import { CustomPhongMaterial } from "ts/customPhongMaterial/CustomPhongMaterial";

// @ts-ignore
import FragmentShader from "./Shader.frag";
// @ts-ignore
import VertexShader from "../customPhongMaterial/Shader.vert";
import {
  AnimatableMaterialChunk,
  IWaveAnimatable,
  Directions,
  WaveAnimatableMaterialChunk
} from "ts/customPhongMaterial/IAnimatable";
import {
  IRepeatablePattern,
  RepeatablePatternMaterialChunk
} from "ts/customPhongMaterial/IRepeatablePattern";
import {
  IReversible,
  ReversibleMaterialChunk
} from "ts/customPhongMaterial/IReversible";
import {IMaskable, MaskableMaterialChunk} from "ts/customPhongMaterial/IMaskable";
import {Texture} from "three";

export class HexGridMaterial extends CustomPhongMaterial
  implements IWaveAnimatable, IRepeatablePattern, IReversible,IMaskable {
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

  get isReversed(): boolean {
    return this.uniforms.isReversed.value;
  }
  set isReversed(value: boolean) {
    this.uniforms.isReversed.value = value;
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
  get gridWeight(): number {
    return this.uniforms.gridWeight.value;
  }
  set gridWeight(value: number) {
    this.uniforms.gridWeight.value = value;
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
      ReversibleMaterialChunk.getUniform(),
      RepeatablePatternMaterialChunk.getUniform(),
      WaveAnimatableMaterialChunk.getUniform(),
      MaskableMaterialChunk.getUniform(),
      {
        hasAlphaMap: { value: false },
        gridWeight: { value: 0.03 }
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
