import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { PeripheralLightShader } from "./PeripheralLightShader";
import { Color } from "three";

/**
 * 周辺光量の減光を表現するフィルタ。
 */
export class PeripheralLightPass extends ShaderPass {
  get rate(): number {
    return this.uniforms["rate"].value;
  }
  set rate(value: number) {
    this.uniforms["rate"].value = value;
  }

  get radiusInner(): number {
    return this.uniforms["radiusInner"].value;
  }
  set radiusInner(value: number) {
    this.uniforms["radiusInner"].value = value;
  }

  get radiusOuter(): number {
    return this.uniforms["radiusOuter"].value;
  }
  set radiusOuter(value: number) {
    this.uniforms["radiusOuter"].value = value;
  }

  get color(): Color {
    return this.uniforms["color"].value;
  }
  set color(value: Color) {
    this.uniforms["color"].value = value;
  }

  constructor() {
    super(new PeripheralLightShader());
  }
}
