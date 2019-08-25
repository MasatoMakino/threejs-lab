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
import { PlaneBufferGeometry } from "three";
import { MeshStandardMaterial } from "three";
import { NotEqualStencilFunc } from "three";
import { ReplaceStencilOp } from "three";
import { Material } from "three";
import { StencilOp } from "three";
import { Side } from "three";

export class ClippingSurface extends Group {
  public planeObject: Mesh;
  protected plane: Plane;

  /**
   *
   * @param clippingPlane
   * @param allPlanes
   * @param geometry
   */
  constructor(
    clippingPlane: Plane,
    allPlanes: Plane[],
    geometry: Geometry | BufferGeometry,
    option?: {}
  ) {
    super();

    this.plane = clippingPlane;
    const i = allPlanes.indexOf(clippingPlane);

    const stencilGroup = ClippingSurface.createPlaneStencilGroup(
      geometry,
      this.plane,
      i + 1
    );
    this.add(stencilGroup);

    this.planeObject = ClippingSurface.createPlane(this.plane, allPlanes, i);
    this.planeObject.onBeforeRender = this.updatePlane;
    this.add(this.planeObject);
  }

  /**
   * 着色用のプレーンジオメトリを生成する。
   * @param clippingPlane
   * @param otherPlanes
   * @param index
   */
  public static createPlane(
    clippingPlane: Plane,
    otherPlanes: Plane[],
    index: number
  ): Mesh {
    const planeGeom = new PlaneBufferGeometry(4, 4);

    const planeMat = new MeshStandardMaterial({
      color: 0xe91e63,
      metalness: 0.1,
      roughness: 0.75,
      clippingPlanes: otherPlanes.filter(p => p !== clippingPlane),
      stencilWrite: true,
      stencilRef: 0,
      stencilFunc: NotEqualStencilFunc
    });
    this.setStencilOp(planeMat, ReplaceStencilOp);

    //プレーンジオメトリオブジェクトを生成。
    const po = new Mesh(planeGeom, planeMat);
    po.onAfterRender = function(renderer) {
      renderer.clearStencil();
    };
    po.renderOrder = index + 1.1;

    return po;
  }

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
    const mesh0 = new Mesh(
      geometry,
      this.getStencilMat(baseMat, BackSide, plane, IncrementWrapStencilOp)
    );
    mesh0.renderOrder = renderOrder;
    group.add(mesh0);

    // front faces
    const mesh1 = new Mesh(
      geometry,
      this.getStencilMat(baseMat, FrontSide, plane, DecrementWrapStencilOp)
    );
    mesh1.renderOrder = renderOrder;
    group.add(mesh1);

    return group;
  }

  static getStencilMat(
    base: MeshBasicMaterial,
    side: Side,
    plane: Plane,
    stencilOp: StencilOp
  ): MeshBasicMaterial {
    const mat = base.clone();
    mat.side = side;
    mat.clippingPlanes = [plane];
    this.setStencilOp(mat, stencilOp);
    return mat;
  }

  /**
   * マテリアルにstencilFail時の処理を一括で指定する。
   * @param mat
   * @param val
   */
  static setStencilOp(mat: Material, val: StencilOp): void {
    mat.stencilFail = val;
    mat.stencilZFail = val;
    mat.stencilZPass = val;
  }

  /**
   * planeObjectにplaneの座標をコピーする
   */
  updatePlane = () => {
    this.plane.coplanarPoint(this.planeObject.position);
    this.planeObject.lookAt(
      this.planeObject.position.x - this.plane.normal.x,
      this.planeObject.position.y - this.plane.normal.y,
      this.planeObject.position.z - this.plane.normal.z
    );
  };
}
