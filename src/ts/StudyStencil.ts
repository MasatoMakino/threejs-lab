import { Group } from "three";
import { Mesh } from "three";
import { Scene } from "three";
import { PerspectiveCamera } from "three";
import { DirectionalLight } from "three";
import { Plane } from "three";
import { Vector3 } from "three";
import { TorusKnotBufferGeometry } from "three";
import { PlaneBufferGeometry } from "three";
import { MeshStandardMaterial } from "three";
import { NotEqualStencilFunc } from "three";
import { ReplaceStencilOp } from "three";
import { WebGLRenderer } from "three";
import { Common } from "ts/Common";
import { ClippingSurface } from "ts/clippingSurface/ClippingSurface";

export class Study {
  static readonly W: number = 640.0;
  static readonly H: number = 480.0;

  scene: Scene;
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;
  planeObjects: Mesh[];
  planes: Plane[];

  static initPlanes(): Plane[] {
    return [
      new Plane(new Vector3(-1, 0, 0), 0),
      new Plane(new Vector3(0, -1, 0), 0),
      new Plane(new Vector3(0, 0, -1), 0)
    ];
  }

  static initFrontFaceMesh(planes, geometry): Mesh {
    const material = new MeshStandardMaterial({
      color: 0xffc107,
      metalness: 0.1,
      roughness: 0.75,
      clippingPlanes: planes
      // clipShadows: true,
      // shadowSide: DoubleSide
    });

    // 切り取られたジオメトリの表面を描画するためのオブジェクト
    const clippedColorFront = new Mesh(geometry, material);
    // clippedColorFront.castShadow = true;
    clippedColorFront.renderOrder = 6;
    return clippedColorFront;
  }

  init() {
    this.scene = new Scene();
    this.camera = Common.initCamera(this.scene, Study.W, Study.H);
    this.camera.position.set(2, 2, 2);

    Common.initLight(this.scene);
    var dirLight = new DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 7.5);
    this.scene.add(dirLight);

    this.planes = Study.initPlanes();

    const geometry = new TorusKnotBufferGeometry(0.4, 0.15, 220, 60);
    const object = new Group();
    this.scene.add(object);

    // Set up clip plane rendering
    this.planeObjects = [];
    const planeGeom = new PlaneBufferGeometry(4, 4);

    //トーラスジオメトリをコピーしたグループを作る。
    this.planes.forEach((plane, i) => {
      const stencilGroup = ClippingSurface.createPlaneStencilGroup(
        geometry,
        plane,
        i + 1
      );
      object.add(stencilGroup);

      // plane is clipped by the other clipping planes
      const planeMat = new MeshStandardMaterial({
        color: 0xe91e63,
        metalness: 0.1,
        roughness: 0.75,
        clippingPlanes: this.planes.filter(p => p !== plane),
        stencilWrite: true,
        stencilRef: 0,
        stencilFunc: NotEqualStencilFunc,
        stencilFail: ReplaceStencilOp,
        stencilZFail: ReplaceStencilOp,
        stencilZPass: ReplaceStencilOp
      });

      //プレーンジオメトリオブジェクトを生成。
      const po = new Mesh(planeGeom, planeMat);
      po.onAfterRender = function(renderer) {
        renderer.clearStencil();
      };
      po.renderOrder = i + 1.1;

      const poGroup = new Group();
      poGroup.add(po);
      this.planeObjects.push(po);
      this.scene.add(poGroup);
    });

    object.add(Study.initFrontFaceMesh(this.planes, geometry));

    this.renderer = Common.initRenderer(Study.W, Study.H, 0x263238);
    this.renderer.localClippingEnabled = true;

    const controls = Common.initControl(this.camera, this.renderer);

    Common.render(controls, this.renderer, this.scene, this.camera, () => {
      this.updatePlanes();
    });
  }

  updatePlanes = () => {
    for (var i = 0; i < this.planeObjects.length; i++) {
      var plane = this.planes[i];
      var po = this.planeObjects[i];

      //planeObjectにplaneの座標をコピー
      plane.coplanarPoint(po.position);
      po.lookAt(
        po.position.x - plane.normal.x,
        po.position.y - plane.normal.y,
        po.position.z - plane.normal.z
      );
    }
  };
}

window.onload = () => {
  const study = new Study();

  study.init();
  // study.animate();
};
