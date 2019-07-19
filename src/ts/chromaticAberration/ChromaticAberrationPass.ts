import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { ChromaticAberrationShader } from "ts/chromaticAberration/ChromaticAberrationShader";

export class ChromaticAberrationPass extends ShaderPass {
  get rate(): number {
    return this.uniforms["rate"].value;
  }
  set rate(value: number) {
    this.uniforms["rate"].value = value;
  }

  get radiusInner(): number {
    return this.uniforms["radiusInner"].value;
  }
  set radiusInner(value: number) {
    this.uniforms["radiusInner"].value = value;
  }

  get radiusOuter(): number {
    return this.uniforms["radiusOuter"].value;
  }
  set radiusOuter(value: number) {
    this.uniforms["radiusOuter"].value = value;
  }

  constructor() {
    super(new ChromaticAberrationShader());
  }
}
