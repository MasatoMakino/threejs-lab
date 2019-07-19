import { PostProcessShader } from "ts/postprocess/PostProcessShader";
import { UniformsUtils } from "three";
import FragmentShader from "./ChromaticAberration.frag.glsl";

export class ChromaticAberrationShader extends PostProcessShader {
  constructor() {
    super();
    this.fragmentShader = FragmentShader();
  }

  protected initUniform() {
    super.initUniform();

    this.uniforms = UniformsUtils.merge([this.uniforms, {}]);
  }
}
