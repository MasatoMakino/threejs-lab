import { MergedGeometryStudy } from "./MergedGeometryStudy";
import { BoxGeometry, Group, Mesh, MeshBasicMaterial, Scene } from "three";

export class StudyMergedGeometryShared extends MergedGeometryStudy {
  protected initMesh(scene: Scene): Group {
    const group = new Group();

    const size = 1;
    const margin = 0.3;
    const pitch = size + margin;
    const numCube = 25;
    const offset = (numCube * pitch) / 2;

    const geometry = new BoxGeometry(size, size, size);
    const material = new MeshBasicMaterial({
      opacity: 0.5,
      transparent: true,
    });

    const generateCube = (x: number, y: number, z: number) => {
      const mesh = new Mesh(geometry, material);
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
  const study = new StudyMergedGeometryShared();
};
