import { MaterialInterfaceChunk } from "ts/customPhongMaterial/CustomPhongMaterial";

export interface IReversible {
  isReversed: boolean;
}

export class ReversibleMaterialChunk extends MaterialInterfaceChunk {
  public static getUniform() {
    return {
      isReversed: { value: false }
    };
  }
}
