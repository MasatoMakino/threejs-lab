import {
  AlwaysStencilFunc,
  BackSide,
  BufferGeometry,
  DecrementWrapStencilOp,
  Euler,
  FrontSide,
  Geometry,
  Group,
  IncrementWrapStencilOp,
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  NotEqualStencilFunc,
  Plane,
  PlaneBufferGeometry,
  ReplaceStencilOp,
  Side,
  StencilOp,
} from "three";

/**
 * ClippingPlaneにより切断したジオメトリの、切断面を描画するためのクラスです。
 *
 * 注意 : onBeforeRender関数やRenderループ内でstencilGroupの座標、スケール、回転を変更した場合、変更後にupdatePlane関数を明示的に呼び出してください。planeObjectの更新が行われず、表示が崩れます。
 */
export class ClippingSurface extends Group {
  public planeObject: Mesh;
  protected plane: Plane;
  protected stencilGroup: Group;
  public frontFace: Mesh;

  /**
   *コンストラクタ
   * @param clippingPlane 表示される切断面
   * @param allPlanes このジオメトリに影響する全ての切断面。clippingPlaneをさらにクリップするのに使用する。
   * @param geometry クリップされるジオメトリ
   * @param option
   */
  constructor(
    clippingPlane: Plane,
    geometry: Geometry | BufferGeometry,
    option?: ClippingSurfaceOption
  ) {
    super();

    option = ClippingSurfaceOption.init(option, clippingPlane);

    this.plane = clippingPlane;
    const i = option.allPlanes.indexOf(clippingPlane);

    this.stencilGroup = ClippingSurfaceUtil.createPlaneStencilGroup(
      geometry,
      clippingPlane,
      i + 1
    );
    this.add(this.stencilGroup);

    this.planeObject = ClippingSurface.createPlane(
      geometry,
      clippingPlane,
      option.allPlanes,
      i,
      option.planeMaterial
    );
    this.planeObject.onBeforeRender = this.updatePlane;
    this.add(this.planeObject);

    this.frontFace = ClippingSurfaceUtil.initFrontFaceMesh(
      option.allPlanes,
      geometry,
      option.frontFaceMaterial
    );
    this.stencilGroup.add(this.frontFace);
    this.frontFace.visible = option.visibleSurface;
  }

  /**
   * 着色用のプレーンジオメトリを生成する。
   * @param clippingPlane
   * @param otherPlanes
   * @param index
   */
  public static createPlane(
    geo: Geometry | BufferGeometry,
    clippingPlane: Plane,
    otherPlanes: Plane[],
    index: number,
    mat?: Material
  ): Mesh {
    geo.computeBoundingSphere();
    const rad = geo.boundingSphere.radius;
    const planeGeom = new PlaneBufferGeometry(rad * 2, rad * 2);

    if (mat == null) {
      mat = new MeshStandardMaterial({
        color: 0xe91e63,
        metalness: 0.1,
        roughness: 0.75,
      });
    }
    ClippingSurfaceUtil.overrideStencilMaterial(
      mat,
      clippingPlane,
      otherPlanes
    );

    //プレーンジオメトリオブジェクトを生成。
    const po = new Mesh(planeGeom, mat);
    po.onAfterRender = function (renderer) {
      renderer.clearStencil();
    };
    po.renderOrder = index + 1.1;

    return po;
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

  get rotation(): Euler {
    return this.stencilGroup.rotation;
  }
  set rotation(val: Euler) {
    this.stencilGroup.rotation.copy(val);
  }
}

class ClippingSurfaceUtil {
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

    const base = new MeshBasicMaterial();
    base.depthWrite = false;
    base.depthTest = false;
    base.colorWrite = false;
    base.stencilWrite = true;
    base.stencilFunc = AlwaysStencilFunc;

    // back faces
    const backMesh = new Mesh(
      geometry,
      this.getStencilMat(base, BackSide, plane, IncrementWrapStencilOp)
    );
    backMesh.renderOrder = renderOrder;
    group.add(backMesh);

    // front faces
    const frontMesh = new Mesh(
      geometry,
      this.getStencilMat(base, FrontSide, plane, DecrementWrapStencilOp)
    );
    frontMesh.renderOrder = renderOrder;
    group.add(frontMesh);

    return group;
  }

  /**
   * マテリアルにstencilFail時の処理を一括で指定する。
   * @param mat
   * @param val
   */
  public static setStencilOp(mat: Material, val: StencilOp): void {
    mat.stencilFail = val;
    mat.stencilZFail = val;
    mat.stencilZPass = val;
  }

  /**
   * ステンシルグループ用のマテリアルを生成する。
   * @param base
   * @param side
   * @param plane
   * @param stencilOp
   */
  public static getStencilMat(
    base: MeshBasicMaterial,
    side: Side,
    plane: Plane,
    stencilOp: StencilOp
  ): MeshBasicMaterial {
    const mat = base.clone();
    mat.side = side;
    mat.clippingPlanes = [plane];
    ClippingSurfaceUtil.setStencilOp(mat, stencilOp);
    return mat;
  }

  /**
   * planeObject用マテリアルに必須となる設定を、既存のマテリアルに対して上書きする。
   * @param mat
   * @param clippingPlane
   * @param otherPlanes
   */
  public static overrideStencilMaterial(
    mat: Material,
    clippingPlane: Plane,
    otherPlanes: Plane[]
  ): void {
    mat.clippingPlanes = otherPlanes.filter((p) => p !== clippingPlane);
    mat.stencilWrite = true;
    mat.stencilRef = 0;
    mat.stencilFunc = NotEqualStencilFunc;

    ClippingSurfaceUtil.setStencilOp(mat, ReplaceStencilOp);
  }

  /**
   * 切り取られたジオメトリの表面を生成する
   * @param planes
   * @param geometry
   * @param mat
   */
  static initFrontFaceMesh(
    planes: Plane[],
    geometry: Geometry | BufferGeometry,
    mat?: Material
  ): Mesh {
    if (mat == null) {
      mat = new MeshStandardMaterial({
        color: 0xffc107,
        metalness: 0.1,
        roughness: 0.75,
      });
    }
    this.overrideFrontFaceMaterial(mat, planes);

    const clippedColorFront = new Mesh(geometry, mat);
    clippedColorFront.renderOrder = planes.length * 2;
    return clippedColorFront;
  }

  static overrideFrontFaceMaterial(mat: Material, planes: Plane[]): void {
    mat.clippingPlanes = planes;
  }
}

class ClippingSurfaceOption {
  planeMaterial?: Material;
  frontFaceMaterial?: Material;
  allPlanes?: Plane[];
  visibleSurface?: boolean;

  static init(
    option: ClippingSurfaceOption,
    plane: Plane
  ): ClippingSurfaceOption {
    if (option == null) option = {};
    if (option.allPlanes == null || option.allPlanes.length === 0) {
      option.allPlanes = [plane];
    }
    if (option.visibleSurface == null) {
      option.visibleSurface = false;
    }
    return option;
  }
}
