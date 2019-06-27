import { MaterialInterfaceChunk } from "ts/customPhongMaterial/CustomPhongMaterial";

export interface IRepeatablePattern {
  division: number;
  divisionScaleX: number;
}

export class RepeatablePatternMaterialChunk extends MaterialInterfaceChunk {
  static getUniform() {
    return {
      division: { value: 32.0 },
      divisionScaleX: { value: 1.0 }
    };
  }
}
