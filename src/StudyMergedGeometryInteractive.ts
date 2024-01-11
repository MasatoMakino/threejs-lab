import {
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  Camera,
  Face,
  Intersection,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  Raycaster,
  Scene,
  Vector2,
  WebGLRenderer,
} from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { Common } from "./Common";
import { MergedGeometryStudy } from "./MergedGeometryStudy";

export class StudyMergedGeometryInteractive extends MergedGeometryStudy {
  public static readonly W = 1280;
  public static readonly H = 800;
  protected stats;
  protected raycaster: Raycaster = new Raycaster();
  protected mousePoint: Vector2 = new Vector2();

  constructor() {
    super();
    document.addEventListener("pointermove", this.onPointerMove);
  }

  private onPointerMove = (e: MouseEvent) => {
    this.mousePoint.x =
      (e.clientX / parseInt(this.renderer.domElement.style.width)) * 2 - 1;
    this.mousePoint.y =
      -(e.clientY / parseInt(this.renderer.domElement.style.height)) * 2 + 1;
  };

  protected initMesh(scene: Scene): Mesh {
    const geometryArray: BoxGeometry[] = [];

    const size = 1;
    const margin = 0.3;
    const pitch = size + margin;
    const numCube = 25;
    const offset = (numCube * pitch) / 2;

    const generateCube = (x: number, y: number, z: number, idCount: number) => {
      const geometry = new BoxGeometry();
      const positions = geometry.getAttribute("position");
      const count = positions.count;
      geometry.setAttribute(
        "color",
        new BufferAttribute(new Float32Array(count * 4), 4)
      );
      geometry.setAttribute(
        "originalColor",
        new BufferAttribute(new Float32Array(count * 4), 4)
      );
      geometry.setAttribute(
        "mesh_id",
        new BufferAttribute(new Float32Array(count), 1)
      );

      const colors = geometry.getAttribute("color");
      const originalColor = geometry.getAttribute("originalColor");
      const idAttribute = geometry.getAttribute("mesh_id");

      for (let i = 0; i < count; i++) {
        positions.setXYZ(
          i,
          positions.getX(i) + x * pitch - offset,
          positions.getY(i) + y * pitch - offset,
          positions.getZ(i) + z * pitch - offset
        );
        colors.setXYZW(i, x / numCube, y / numCube, z / numCube, 0.1);
        originalColor.setXYZW(i, x / numCube, y / numCube, z / numCube, 0.1);
        idAttribute.setX(i, idCount);
      }
      geometryArray.push(geometry);
    };

    let idCounter = 0;
    for (let x = 0; x < numCube; x++) {
      for (let y = 0; y < numCube; y++) {
        for (let z = 0; z < numCube; z++) {
          generateCube(x, y, z, idCounter);
          idCounter++;
        }
      }
    }

    const mergedMesh = new Mesh(
      mergeGeometries(geometryArray),
      new MeshBasicMaterial({ transparent: true, vertexColors: true })
    );

    scene.add(mergedMesh);
    return mergedMesh;
  }

  public render(
    mergedMesh: Object3D,
    infoContainer: HTMLDivElement,
    renderer: WebGLRenderer,
    scene: Scene,
    camera: Camera
  ) {
    const rendering = () => {
      const speed = 0.01;
      mergedMesh.rotation.x += speed;
      mergedMesh.rotation.y += speed;
      mergedMesh.rotation.z += speed;
      mergedMesh.updateMatrix();

      this.stats.begin();

      this.raycaster?.setFromCamera(this.mousePoint, camera);
      const intersects = this.raycaster?.intersectObject(mergedMesh, false);

      if (intersects?.length > 0) {
        this.updateIntersect(intersects[0], (mergedMesh as Mesh).geometry);
      }

      renderer.render(scene, camera);
      this.stats.end();

      Common.updateRendererInfo(infoContainer, renderer.info.render);
      requestAnimationFrame(rendering);
    };
    rendering();
  }

  private updateIntersect(intersect: Intersection, geo: BufferGeometry): void {
    const idAttribute = geo.getAttribute("mesh_id");
    const face = intersect.face as Face;
    const meshID = idAttribute.getX(face.a);

    if (
      idAttribute.getX(face.a) !== idAttribute.getX(face.b) ||
      idAttribute.getX(face.a) !== idAttribute.getX(face.c)
    ) {
      console.log(
        idAttribute.getX(face.a),
        idAttribute.getX(face.b),
        idAttribute.getX(face.c)
      );
    }

    const colorAttribute = geo.getAttribute("color");
    const originalColorAttribute = geo.getAttribute("originalColor");
    const count = idAttribute.count;

    for (let i = 0; i < count; i++) {
      if (idAttribute.getX(i) === meshID) {
        colorAttribute.setXYZW(i, 1, 1, 1, 1);
      } else {
        colorAttribute.setXYZW(
          i,
          originalColorAttribute.getX(i),
          originalColorAttribute.getY(i),
          originalColorAttribute.getZ(i),
          originalColorAttribute.getW(i)
        );
      }
    }
    colorAttribute.needsUpdate = true;
  }
}

window.onload = () => {
  const study = new StudyMergedGeometryInteractive();
};
