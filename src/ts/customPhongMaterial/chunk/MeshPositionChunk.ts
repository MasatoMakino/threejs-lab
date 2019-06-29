import { GLSLChunk } from "ts/customPhongMaterial/chunk/GLSLChunk";

export class MeshPositionVaryingChunk extends GLSLChunk {
  protected static getChunkName(): string {
    return "mesh_position_varying";
  }

  protected static getChunk(): string {
    return `
    #ifdef USE_MESH_POSITION
    varying vec3 meshPosition;
    #endif
    `;
  }
}

export class MeshPositionVertexChunk extends GLSLChunk {
  protected static getChunkName(): string {
    return "mesh_position_vertex";
  }

  protected static getChunk(): string {
    return `
    #ifdef USE_MESH_POSITION
    meshPosition = position;
    #endif
    `;
  }
}

export class MeshPositionChunk extends GLSLChunk {
  public static add(): void {
    MeshPositionVaryingChunk.add();
    MeshPositionVertexChunk.add();
  }

  public static getDefines(): Object {
    return {
      USE_MESH_POSITION: false
    };
  }
}
