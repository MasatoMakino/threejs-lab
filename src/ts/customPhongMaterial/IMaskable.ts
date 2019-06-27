import { Texture } from "three";
import { IUniform } from "three";
import { MaterialInterfaceChunk } from "ts/customPhongMaterial/CustomPhongMaterial";

export interface IMaskable {
  uniforms: { [uniform: string]: IUniform };
  maskTexture: Texture;
  // isLoading: boolean;
  // loadMaskTexture(url: string): void;
  // deleteMaskTexture(): void;
}

export class MaskableMaterialChunk extends MaterialInterfaceChunk {
  static getUniform() {
    return {
      hasMaskTexture: { value: false },
      maskTexture: { value: null }
    };
  }
}
