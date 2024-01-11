import { GUI } from "lil-gui";
import { BufferGeometry, Material } from "three";

export class CommonGUI {
  static initColorGUI(
    folder,
    mat: Material | Material[],
    propName = "color"
  ): void {
    const prop = {};
    const targetColor = mat[propName];
    prop[propName] = targetColor.getHex();
    folder.addColor(prop, propName).onChange((val) => {
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

  static initUVGUI(gui, geo: BufferGeometry): void {
    const uvArea = {
      x1: 0.0,
      y1: 0.0,
      x2: 1.0,
      y2: 1.0,
    };

    const updateUV = () => {
      const uv = geo.getAttribute("uv");
      uv.setXY(0, uvArea.x1, uvArea.y2);
      uv.setXY(1, uvArea.x2, uvArea.y2);
      uv.setXY(2, uvArea.x1, uvArea.y1);
      uv.setXY(3, uvArea.x2, uvArea.y1);
      uv.needsUpdate = true;
    };

    gui.add(uvArea, "x1", 0.0, 1.0).onChange((val) => {
      uvArea.x1 = val;
      updateUV();
    });
    gui.add(uvArea, "y1", 0.0, 1.0).onChange((val) => {
      uvArea.y1 = val;
      updateUV();
    });
    gui.add(uvArea, "x2", 0.0, 1.0).onChange((val) => {
      uvArea.x2 = val;
      updateUV();
    });
    gui.add(uvArea, "y2", 0.0, 1.0).onChange((val) => {
      uvArea.y2 = val;
      updateUV();
    });
  }
}
