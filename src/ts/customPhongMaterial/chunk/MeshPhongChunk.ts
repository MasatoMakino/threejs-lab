import { GLSLChunk } from "ts/customPhongMaterial/chunk/GLSLChunk";

class MeshPhongUniformChunk extends GLSLChunk {
  protected static getChunkName(): string {
    return "mesh_phong_uniform";
  }

  protected static getChunk(): string {
    return `
      uniform vec3 diffuse;
      uniform vec3 emissive;
      uniform vec3 specular;
      uniform float shininess;
      uniform float opacity;
      uniform bool hasAlphaMap;
      uniform sampler2D alphaMap;
    `;
  }
}

export class MeshPhongChunk extends GLSLChunk {
  public static add(): void {
    MeshPhongUniformChunk.add();
  }
}
