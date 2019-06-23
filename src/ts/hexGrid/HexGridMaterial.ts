/**
 * 地球儀用の緯度経度グリッド
 */

import { ShaderMaterialParameters, Color, UniformsUtils } from "three";
import { CustomPhongMaterial } from "ts/customPhongMaterial/CustomPhongMaterial";

// @ts-ignore
import FragmentShader from "./Shader.frag";
// @ts-ignore
import VertexShader from "../customPhongMaterial/Shader.vert";

export class HexGridMaterial extends CustomPhongMaterial {
  get time(): number {
    return this.uniforms.time.value;
  }
  set time(value: number) {
    this.uniforms.time.value = value;
  }

  /**
   * 波の速度
   * 0.5にすると1の半分の速度になる。
   * マイナスを指定すると、波の進行方向が反転する。
   */
  get speed(): number {
    return this.uniforms.speed.value;
  }
  set speed(value: number) {
    this.uniforms.speed.value = value;
  }

  get color(): Color {
    return this.uniforms.color.value;
  }
  set color(value: Color) {
    this.uniforms.color.value = value;
  }

  get hexScale(): number {
    return this.uniforms.hexScale.value;
  }
  set hexScale(value: number) {
    this.uniforms.hexScale.value = value;
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

  constructor(parameters?: ShaderMaterialParameters) {
    super(VertexShader, FragmentShader, parameters);
  }

  protected initUniforms(): void {
    this.uniforms = UniformsUtils.merge([
      CustomPhongMaterial.getBasicUniforms(),
      {
        color: { value: new Color(0xffffff) },
        time: { value: 0.0 },
        speed: { value: -0.5 },
        raisedBottom: { value: 0.05 },
        hexScale: { value: 32.0 },
        waveFrequency: { value: 0.2 },
        wavePow: { value: 4.0 },
        direction: { value: Directions.vertical },
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

export enum Directions {
  vertical = 4,
  horizontal = 3,
  radial = 5
}
