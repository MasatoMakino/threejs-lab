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
    return this._time;
  }

  set time(value: number) {
    this._time = value;
    if (this.uniforms && this.uniforms.time) {
      this.uniforms.time.value = value;
    }
  }

  get color(): Color {
    return this._color;
  }

  set color(value: Color) {
    this._color = value;

    if (this.uniforms && this.uniforms.color) {
      this.uniforms.color.value = value;
    }
  }

  private _color: Color = new Color(0xffff00);
  private _time: number = 0.0;

  constructor(parameters?: ShaderMaterialParameters) {
    super(VertexShader, FragmentShader, parameters);
  }

  protected initUniforms(): void {
    this.uniforms = UniformsUtils.merge([
      CustomPhongMaterial.getBasicUniforms(),
      {
        color: { value: new Color(0xffffff) },
        time: { value: 0.0 }
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
