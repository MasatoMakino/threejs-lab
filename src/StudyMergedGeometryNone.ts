import {
  BoxGeometry,
  Color,
  Group,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  Scene,
} from "three";
import { MergedGeometryStudy } from "./MergedGeometryStudy";

export class StudyMergedGeometryNone extends MergedGeometryStudy {
  protected initMesh(scene: Scene): Object3D {
    const group = new Group();

    const size = 1;
    const margin = 0.3;
    const pitch = size + margin;
    const numCube = 25;
    const offset = (numCube * pitch) / 2;

    const generateCube = (x: number, y: number, z: number) => {
      const mesh = new Mesh(
        new BoxGeometry(size, size, size),
        new MeshBasicMaterial({
          color: new Color(x / numCube, y / numCube, z / numCube),
          opacity: 0.1,
          transparent: true,
        })
      );
      mesh.position.set(
        x * pitch - offset,
        y * pitch - offset,
        z * pitch - offset
      );
      group.add(mesh);
    };
    for (let x = 0; x < numCube; x++) {
      for (let y = 0; y < numCube; y++) {
        for (let z = 0; z < numCube; z++) {
          generateCube(x, y, z);
        }
      }
    }

    scene.add(group);
    return group;
  }
}

window.onload = () => {
  const study = new StudyMergedGeometryNone();
};
