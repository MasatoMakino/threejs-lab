/**
 *
 *
 * https://github.com/mrdoob/three.js/blob/76c64b23d422dcfb36a28353f45b1effa1f68c5a/src/renderers/shaders/ShaderLib.js#L53
 */

import {
  ShaderMaterial,
  UniformsLib,
  Color,
  ShaderChunk,
  UniformsUtils,
  ShaderMaterialParameters
} from "three";

// @ts-ignore
import PhongContourFragmentShader from "./PhongContour.frag";
import { Texture } from "three";
import { TextureLoader } from "three";
import {DoubleSide} from "three";

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
  public loadMap(url: string) {
    this._map = new TextureLoader().load(url, texture => {
      if (this.uniforms && this.uniforms.map) {
        this.uniforms.map.value = texture;
      }
    });
  }
  private _map: Texture;

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
        shininess: { value: 30 }
      }
    ]);

    this.vertexShader = ShaderChunk.meshphong_vert;
    this.fragmentShader = PhongContourFragmentShader;

    this.opacity = this._opacity;

    if( parameters.transparent == null ){
      this.transparent = true;
    }else{
      this.transparent = parameters.transparent;
    }

    if( parameters.side == null ){
      this.side = DoubleSide;
    }else{
      this.side = parameters.side;
    }

  }
}
