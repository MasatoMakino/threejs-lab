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
  get lineWeight(): number {
    return this._lineWeight;
  }

  set lineWeight(value: number) {
    this._lineWeight = value;
    if (this.uniforms && this.uniforms.lineWeight) {
      this.uniforms.lineWeight.value = value;
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
    return this._glowStrength;
  }

  set glowStrength(value: number) {
    this._glowStrength = value;
    if (this.uniforms && this.uniforms.glowStrength) {
      this.uniforms.glowStrength.value = value;
    }
  }

  get color(): Color {
    return this._color;
  }

  set color(value: Color) {
    this._color = value;
    console.log(this.uniforms);

    if (this.uniforms && this.uniforms.color) {
      this.uniforms.color.value = value;
      console.log(this.uniforms.color);
    }
  }

  get glowColor(): Color {
    return this._glowColor;
  }

  set glowColor(value: Color) {
    this._glowColor = value;
    if (this.uniforms && this.uniforms.glowColor) {
      this.uniforms.glowColor.value = value;
    }
  }

  private _lineWeight: number;
  private _division: number;
  private _glowPow: number;
  private _glowStrength: number;
  private _glowColor: Color;
  private _color: Color;

  constructor(parameters?: ShaderMaterialParameters) {
    super(VertexShader, FragmentShader, parameters);
  }
  protected initUniforms(): void {
    this.uniforms = UniformsUtils.merge([
      CustomPhongMaterial.getBasicUniforms(),
      {
        lineWeight: { value: 0.005 },
        division: { value: 8.0 },
        glowPow: { value: 3.7 },
        glowStrength: { value: 0.35 },
        color: { value: new Color(0xffffff) },
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
