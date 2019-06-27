/**
 * 地球儀用の緯度経度グリッド
 */

import { ShaderMaterialParameters, UniformsUtils } from "three";
import { CustomPhongMaterial } from "ts/customPhongMaterial/CustomPhongMaterial";
import { IAnimatable, Directions } from "ts/customPhongMaterial/IAnimatable";
import { IRepeatablePattern } from "ts/customPhongMaterial/IRepeatablePattern";

// @ts-ignore
import FragmentShader from "./Shader.frag";
// @ts-ignore
import VertexShader from "../customPhongMaterial/Shader.vert";
import { Texture } from "three";
import { TextureLoader } from "three";

export class HalftoneGridMaterial extends CustomPhongMaterial
  implements IAnimatable, IRepeatablePattern {
  addTime(delta: number): void {
    this.uniforms.time.value += delta * this.speed;
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

  /**
   *
   *
   */
  private _loading: boolean = false;
  get maskTexture(): Texture {
    return this.uniforms.maskTexture.value;
  }
  loadMaskTexture(url: string): void {
    this._loading = true;
    new TextureLoader().load(url, texture => {
      if (!this._loading) return;
      this.uniforms.hasMaskTexture.value = true;
      this.uniforms.maskTexture.value = texture;
      this._loading = false;
    });
  }
  deleteMaskTexture(): void {
    this._loading = false;
    this.uniforms.hasMaskTexture.value = false;
    this.uniforms.maskTexture.value = null;
  }

  constructor(parameters?: ShaderMaterialParameters) {
    super(VertexShader, FragmentShader, parameters);
  }

  protected initUniforms(): void {
    this.uniforms = UniformsUtils.merge([
      CustomPhongMaterial.getBasicUniforms(),
      {
        time: { value: 0.0 },
        isAnimate: { value: true },
        raisedBottom: { value: 0.05 },
        division: { value: 32.0 },
        divisionScaleX: { value: 1.0 },
        waveFrequency: { value: 0.2 },
        wavePow: { value: 4.0 },
        direction: { value: Directions.vertical },
        radius: { value: 0.75 },
        hasMaskTexture: { value: false },
        maskTexture: { value: null }
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
