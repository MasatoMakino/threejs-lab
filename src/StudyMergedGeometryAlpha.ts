import {
  BoxGeometry,
  BufferAttribute,
  Mesh,
  MeshBasicMaterial,
  Scene,
  Vector3,
} from "three";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { MergedGeometryStudy } from "./MergedGeometryStudy";

export class StudyMergedGeometryAlpha extends MergedGeometryStudy {
  public static readonly W = 1280;
  public static readonly H = 800;
  protected stats;

  constructor() {
    super();
  }

  protected initMesh(scene: Scene): Mesh {
    const geometryArray = [];

    const size = 1;
    const margin = 0.3;
    const pitch = size + margin;
    const numCube = 40;
    const offset = (numCube * pitch) / 2;

    const pos = new Vector3();
    const center = new Vector3();

    const generateCube = (x: number, y: number, z: number) => {
      const geometry = new BoxGeometry();
      const positions = geometry.getAttribute("position");
      const count = positions.count;
      geometry.setAttribute(
        "color",
        new BufferAttribute(new Float32Array(count * 4), 4)
      );
      const colors = geometry.getAttribute("color");
      for (let i = 0; i < count; i++) {
        pos.set(
          positions.getX(i) + x * pitch - offset,
          positions.getY(i) + y * pitch - offset,
          positions.getZ(i) + z * pitch - offset
        );
        positions.setXYZ(i, pos.x, pos.y, pos.z);

        const distance = pos.distanceTo(center);
        colors.setXYZW(
          i,
          x / numCube,
          y / numCube,
          z / numCube,
          Math.pow(distance / 40, 10)
        );
      }
      geometryArray.push(geometry);
    };

    for (let x = 0; x < numCube; x++) {
      for (let y = 0; y < numCube; y++) {
        for (let z = 0; z < numCube; z++) {
          generateCube(x, y, z);
        }
      }
    }

    const mergedMesh = new Mesh(
      mergeBufferGeometries(geometryArray),
      new MeshBasicMaterial({
        transparent: true,
        vertexColors: true,
        depthTest: false,
        depthWrite: false,
      })
    );

    scene.add(mergedMesh);
    return mergedMesh;
  }
}

window.onload = () => {
  const study = new StudyMergedGeometryAlpha();
};
