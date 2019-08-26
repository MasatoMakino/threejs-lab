import { Material } from "three";
import { GUI } from "dat.gui";

export class CommonGUI {
  static initColorGUI(
    folder,
    mat: Material | Material[],
    propName = "color"
  ): void {
    const prop = {};
    const targetColor = mat[propName];
    prop[propName] = targetColor.getHex();
    folder.addColor(prop, propName).onChange(val => {
      targetColor.setHex(val);
    });
  }

  static initMaterialGUI(
    gui,
    mat: Material | Material[],
    folderName = "Material"
  ): GUI {
    const folder = gui.addFolder(folderName);
    this.initMaterialFolder(folder, mat);
    if (mat.hasOwnProperty("emissive")) {
      this.initColorGUI(folder, mat, "emissive");
    }
    folder.open();
    return folder;
  }

  static initMaterialFolder(folder, mat: Material | Material[]): void {
    this.initColorGUI(folder, mat);
    folder.add(mat, "transparent");
    folder.add(mat, "opacity", 0.0, 1.0);
  }
}
