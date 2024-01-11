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

  static initPlaneUVGUI(gui: GUI, geo: BufferGeometry): void {
    const uvArea = this.initUVArea();

    const updateUV = () => {
      const uv = geo.getAttribute("uv");
      uv.setXY(0, uvArea.x1, uvArea.y2);
      uv.setXY(1, uvArea.x2, uvArea.y2);
      uv.setXY(2, uvArea.x1, uvArea.y1);
      uv.setXY(3, uvArea.x2, uvArea.y1);
      uv.needsUpdate = true;
    };

    this.initUVGUI(gui, uvArea, updateUV);
  }

  static initSpriteUVGUI(gui: GUI, geo: BufferGeometry): void {
    const uvArea = this.initUVArea();

    const updateUV = () => {
      const uv = geo.getAttribute("uv");
      uv.setXY(0, uvArea.x1, uvArea.y1);
      uv.setXY(1, uvArea.x2, uvArea.y1);
      uv.setXY(2, uvArea.x2, uvArea.y2);
      uv.setXY(3, uvArea.x1, uvArea.y2);
      uv.needsUpdate = true;
    };

    this.initUVGUI(gui, uvArea, updateUV);
  }

  static initUVArea(): UVArea {
    return {
      x1: 0.0,
      y1: 0.0,
      x2: 1.0,
      y2: 1.0,
    };
  }
  static initUVGUI(gui: GUI, uvArea: UVArea, updateUV: () => void): void {
    gui.add(uvArea, "x1", 0.0, 1.0).onChange(updateUV);
    gui.add(uvArea, "y1", 0.0, 1.0).onChange(updateUV);
    gui.add(uvArea, "x2", 0.0, 1.0).onChange(updateUV);
    gui.add(uvArea, "y2", 0.0, 1.0).onChange(updateUV);
  }
}

interface UVArea {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}
