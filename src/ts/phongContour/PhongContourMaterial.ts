/**
 *
 *
 * https://github.com/mrdoob/three.js/blob/76c64b23d422dcfb36a28353f45b1effa1f68c5a/src/renderers/shaders/ShaderLib.js#L53
 */

import {
  ShaderMaterial,
  UniformsLib,
  Color,
  UniformsUtils,
  ShaderMaterialParameters,
  Texture,
  TextureLoader,
  DoubleSide,
  Geometry,
  BufferGeometry
} from "three";

// @ts-ignore
import PhongContourFragmentShader from "./PhongContour.frag";
// @ts-ignore
import PhongContourVertexShader from "./PhongContour.vert";
import { AdditiveBlending } from "three";

export class PhongContourMaterial extends ShaderMaterial {
  get opacity(): number {
    return this._opacity;
  }
  set opacity(value: number) {
    if (value === undefined) return;

    this._opacity = value;
    if (this.uniforms && this.uniforms.opacity) {
      this.uniforms.opacity.value = value;
    }
  }
  private _opacity: number;

  get map(): Texture {
    return this._map;
  }
  public loadMap(url: string, geo: Geometry | BufferGeometry) {
    this._map = new TextureLoader().load(url, texture => {
      if (this.uniforms && this.uniforms.map) {
        this.uniforms.map.value = texture;
      }
    });

    geo.computeBoundingBox();
    this.uniforms.top.value = geo.boundingBox.max.y;
    this.uniforms.bottom.value = geo.boundingBox.min.y;
  }
  private _map: Texture;

  get emissive(): Color {
    return this._emissive;
  }
  set emissive(value: Color) {
    this._emissive = value;
    if (this.uniforms && this.uniforms.emissive) {
      this.uniforms.emissive.value = value;
    }
  }
  private _emissive: Color;

  constructor(parameters?: ShaderMaterialParameters) {
    super(parameters);

    this.uniforms = UniformsUtils.merge([
      UniformsLib.common,
      UniformsLib.specularmap,
      UniformsLib.envmap,
      UniformsLib.aomap,
      UniformsLib.lightmap,
      UniformsLib.emissivemap,
      UniformsLib.bumpmap,
      UniformsLib.normalmap,
      UniformsLib.displacementmap,
      UniformsLib.gradientmap,
      UniformsLib.fog,
      UniformsLib.lights,
      {
        emissive: { value: new Color(0x000000) },
        specular: { value: new Color(0x111111) },
        shininess: { value: 30 },
        top: { value: 1.0 },
        bottom: { value: -1.0 }
      }
    ]);

    this.vertexShader = PhongContourVertexShader;
    this.fragmentShader = PhongContourFragmentShader;

    this.initDefaultSetting(parameters);
  }

  private initDefaultSetting(parameters?: ShaderMaterialParameters): void {
    this.opacity = this._opacity;
    this.lights = true; //FIXME シェーダーがエラーを起こすのでlights設定は強制でON

    if (parameters.transparent == null) {
      this.transparent = true;
    } else {
      this.transparent = parameters.transparent;
    }

    if (this.transparent && parameters.alphaTest == null) {
      this.alphaTest = 0.5;
    }

    if (parameters.side == null) {
      this.side = DoubleSide;
    } else {
      this.side = parameters.side;
    }
  }

  /**
   * 発光状態のために、マテリアルの設定をまとめて変更する。
   * {@link https://stackoverflow.com/questions/37647853/three-js-depthwrite-vs-depthtest-for-transparent-canvas-texture-map-on-three-p}
   */
  public startGlow(): void {
    this.alphaTest = 0.0;
    this.depthWrite = false;
    this.blending = AdditiveBlending;
  }
}
