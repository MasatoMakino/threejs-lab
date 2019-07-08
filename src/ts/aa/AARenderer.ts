import { PostProcessRenderer } from "ts/postprocess/PostProcessRenderer";
import { Scene } from "three";
import { PerspectiveCamera } from "three";
import { WebGLRenderer } from "three";
import { FXAAShaderPass } from "ts/fxaa/FXAAShaderPass";
import { SMAAPass } from "three/examples/jsm/postprocessing/SMAAPass";
import { Vector2 } from "three";

export class AARenderer extends PostProcessRenderer {
  private _type: AAType;
  private fxaaPass: FXAAShaderPass;
  private smaaPass: SMAAPass;

  constructor(
    scene: Scene,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) {
    super(scene, camera, renderer);

    const size = renderer.getSize(new Vector2());
    this.fxaaPass = new FXAAShaderPass(renderer);
    this.smaaPass = new SMAAPass(size.width, size.height);
    this.initComposer([this.fxaaPass, this.smaaPass], renderer);

    this.type = AAType.SMAA;
  }

  get type(): AAType {
    return this._type;
  }
  set type(value: AAType) {
    this._type = value;
    this.smaaPass.enabled = value == AAType.SMAA;
    this.fxaaPass.enabled = value == AAType.FXAA;
  }
}

export enum AAType {
  None = 0,
  SMAA = 1,
  FXAA = 2
}
