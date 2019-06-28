import { Texture } from "three";
import { MaterialInterfaceChunk } from "ts/customPhongMaterial/CustomPhongMaterial";

export interface IMaskable {
  maskTexture: Texture;
}

export class MaskableMaterialChunk extends MaterialInterfaceChunk {
  static getUniform() {
    return {
      hasMaskTexture: { value: false },
      maskTexture: { value: null }
    };
  }
}
