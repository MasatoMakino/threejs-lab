import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { ChromaticAberrationShader } from "ts/chromaticAberration/ChromaticAberrationShader";

export class ChromaticAberrationPass extends ShaderPass {
  get rate(): number {
    return this.uniforms["rate"].value;
  }
  set rate(value: number) {
    this.uniforms["rate"].value = value;
  }

  constructor() {
    super(new ChromaticAberrationShader());
  }
}
