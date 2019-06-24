/**
 * 地球儀用の緯度経度グリッド
 */

import { ShaderMaterialParameters, Color, UniformsUtils } from "three";
import { CustomPhongMaterial } from "ts/customPhongMaterial/CustomPhongMaterial";

// @ts-ignore
import FragmentShader from "./Shader.frag";
// @ts-ignore
import VertexShader from "../customPhongMaterial/Shader.vert";

export class EarthGridMaterial extends CustomPhongMaterial {
  /**
   * 格子線になるcosグラフの範囲を指定する。
   * cosグラフは格子線の頂点を1.0、格子中央を-1.0とする周期を持つグラフである。
   * 例として0.0を指定した場合、グリッドの半分までの太さになる。
   * {@link https://upload.wikimedia.org/wikipedia/commons/0/0c/Sin_and_cos.png}
   */
  get lineLimit(): number {
    return this._lineLimit;
  }

  set lineLimit(value: number) {
    this._lineLimit = value;
    if (this.uniforms && this.uniforms.lineLimit) {
      this.uniforms.lineLimit.value = value;
    }
  }

  get division(): number {
    return this._division;
  }

  set division(value: number) {
    this._division = value;
    if (this.uniforms && this.uniforms.division) {
      this.uniforms.division.value = value;
    }
  }

  get glowPow(): number {
    return this._glowPow;
  }

  set glowPow(value: number) {
    this._glowPow = value;
    if (this.uniforms && this.uniforms.glowPow) {
      this.uniforms.glowPow.value = value;
    }
  }

  get glowStrength(): number {
    return this.uniforms.glowStrength.value;
  }

  set glowStrength(value: number) {
    this.uniforms.glowStrength.value = value;
  }

  get gridColor(): Color {
    return this.uniforms.gridColor.value;
  }
  set gridColor(value: Color) {
    this.uniforms.gridColor.value = value;
  }

  get glowColor(): Color {
    return this.uniforms.glowColor.value;
  }
  set glowColor(value: Color) {
    this.uniforms.glowColor.value = value;
  }

  private _lineLimit: number = 0.975;
  private _division: number = 8.0;
  private _glowPow: number = 3.7;


  constructor(parameters?: ShaderMaterialParameters) {
    super(VertexShader, FragmentShader, parameters);
  }
  protected initUniforms(): void {
    this.uniforms = UniformsUtils.merge([
      CustomPhongMaterial.getBasicUniforms(),
      {
        lineLimit: { value: 0.975 },
        division: { value: 8.0 },
        glowPow: { value: 3.7 },
        glowStrength: { value: 0.35 },
        gridColor: { value: new Color(0xffffff) },
        glowColor: { value: new Color(0xffff00) }
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
