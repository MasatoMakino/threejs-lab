import { ShaderChunk } from "three";

export class WaterVertexShader {
  public static get(): string {
    return [
      "uniform mat4 textureMatrix;",
      "uniform float time;",

      "varying vec4 mirrorCoord;",
      "varying vec4 worldPosition;",

      ShaderChunk["fog_pars_vertex"],
      ShaderChunk["shadowmap_pars_vertex"],

      "void main() {",
      "	 mirrorCoord = modelMatrix * vec4( position, 1.0 );",
      "	 worldPosition = mirrorCoord.xyzw;",
      "	 mirrorCoord = textureMatrix * mirrorCoord;",
      "	 vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );",
      "	 gl_Position = projectionMatrix * mvPosition;",

      ShaderChunk["fog_vertex"],
      ShaderChunk["shadowmap_vertex"],

      "}"
    ].join("\n");
  }
}
