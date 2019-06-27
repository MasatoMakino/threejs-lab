import { Texture } from "three";
import { IUniform } from "three";
import { TextureLoader } from "three";
import { MaterialInterfaceChunk } from "ts/customPhongMaterial/CustomPhongMaterial";

export interface IMaskable {
  maskTexture: Texture;
  uniforms: { [uniform: string]: IUniform };
  isLoading: boolean;
  loadMaskTexture(url: string): void;
  deleteMaskTexture(): void;
}

export class MaskableMaterialChunk extends MaterialInterfaceChunk {
  static getUniform() {
    return {
      hasMaskTexture: { value: false },
      maskTexture: { value: null }
    };
  }

  public static loadMaskTexture(self: IMaskable, url: string): void {
    self.isLoading = true;
    new TextureLoader().load(url, texture => {
      if (!self.isLoading) return;
      self.uniforms.hasMaskTexture.value = true;
      self.uniforms.maskTexture.value = texture;
      self.isLoading = false;
    });
  }

  public static deleteMaskTexture(self: IMaskable): void {
    self.isLoading = false;
    self.uniforms.hasMaskTexture.value = false;
    self.uniforms.maskTexture.value = null;
  }
}
