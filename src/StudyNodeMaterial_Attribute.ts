import { Mesh, PlaneGeometry, Scene, BufferAttribute, Color } from "three";
import {
  MeshBasicNodeMaterial,
  color,
  attribute,
} from "three/examples/jsm/nodes/Nodes.js";
import { Common } from "./Common";

/**
 * アトリビュートの設定と取り出しのサンプル
 */
export class StudyNodeBasic {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    Common.initLight(scene);
    const camera = Common.initCamera(scene, StudyNodeBasic.W, StudyNodeBasic.H);

    const renderer = Common.initWebGPURenderer(
      StudyNodeBasic.W,
      StudyNodeBasic.H
    );
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);
    Common.render(control, renderer, scene, camera);
  }

  private initObject(scene: Scene): void {
    const geo = new PlaneGeometry(10, 10);
    const customAttribute = new BufferAttribute(
      new Float32Array(geo.attributes.position.array),
      3
    );
    customAttribute.setXYZ(0, 0, 0, 0);
    customAttribute.setXYZ(1, 1, 0, 0);
    customAttribute.setXYZ(2, 0, 1, 0);
    customAttribute.setXYZ(3, 1, 1, 1);

    geo.setAttribute("customColorAttribute", customAttribute);

    const mat = new MeshBasicNodeMaterial();
    mat.colorNode = color(attribute("customColorAttribute"));
    const mesh = new Mesh(geo, mat);
    scene.add(mesh);
  }
}

window.onload = () => {
  const study = new StudyNodeBasic();
};
