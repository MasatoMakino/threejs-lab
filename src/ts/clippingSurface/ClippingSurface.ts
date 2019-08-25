import { Plane } from "three";
import { Geometry } from "three";
import { BufferGeometry } from "three";
import { Group } from "three";
import { MeshBasicMaterial } from "three";
import { AlwaysStencilFunc } from "three";
import { BackSide } from "three";
import { IncrementWrapStencilOp } from "three";
import { Mesh } from "three";
import { FrontSide } from "three";
import { DecrementWrapStencilOp } from "three";

export class ClippingSurface {
  protected stencilGroup: Group;

  constructor(clippingPlane: Plane, geometory: Geometry | BufferGeometry) {}

  /**
   * ステンシル設定がされたFrontFace, BackFaceのグループを生成する。
   * @param geometry
   * @param plane
   * @param renderOrder
   */
  public static createPlaneStencilGroup(
    geometry: Geometry | BufferGeometry,
    plane: Plane,
    renderOrder: number
  ): Group {
    const group = new Group();

    const baseMat = new MeshBasicMaterial();
    baseMat.depthWrite = false;
    baseMat.depthTest = false;
    baseMat.colorWrite = false;
    baseMat.stencilWrite = true;
    baseMat.stencilFunc = AlwaysStencilFunc;

    // back faces
    const mat0 = baseMat.clone();
    mat0.side = BackSide;
    mat0.clippingPlanes = [plane];
    mat0.stencilFail = IncrementWrapStencilOp;
    mat0.stencilZFail = IncrementWrapStencilOp;
    mat0.stencilZPass = IncrementWrapStencilOp;
    const mesh0 = new Mesh(geometry, mat0);
    mesh0.renderOrder = renderOrder;
    group.add(mesh0);

    // front faces
    const mat1 = baseMat.clone();
    mat1.side = FrontSide;
    mat1.clippingPlanes = [plane];
    mat1.stencilFail = DecrementWrapStencilOp;
    mat1.stencilZFail = DecrementWrapStencilOp;
    mat1.stencilZPass = DecrementWrapStencilOp;
    const mesh1 = new Mesh(geometry, mat1);
    mesh1.renderOrder = renderOrder;
    group.add(mesh1);

    return group;
  }
}
