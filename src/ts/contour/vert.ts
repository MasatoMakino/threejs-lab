import {ShaderChunk} from "three";

export class ContourVertexShader {
  public static get() {
    return `
	  varying vec3 vUv;
	  ${ShaderChunk["fog_pars_vertex"]}
	        
	  void main() {
		vUv = position;
		vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
		vec4 mvPosition =  viewMatrix * worldPosition;
		gl_Position = projectionMatrix * mvPosition;
		
		${ShaderChunk["fog_vertex"]}
	  }
	`;
  }
}
