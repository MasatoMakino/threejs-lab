import {
  BufferGeometry,
  Light,
  RepeatWrapping,
  ShaderMaterial,
  Texture,
  TextureLoader,
} from "three";
import { Water, WaterOptions } from "three/examples/jsm/objects/Water";

export class WaterMesh extends Water {
  private option: WaterOptions;

  private currentTimeStamp;
  private requestID;

  constructor(geometry: BufferGeometry, options: WaterOptions) {
    super(geometry, options);
    this.option = options;
    this.rotation.x = -Math.PI / 2;
    this.requestID = requestAnimationFrame(this.onRequestAnimationFrame);
  }

  /**
   * 受け取ったライトを元に反射光の状態を更新する。
   * @param light
   */
  public updateSun(light: Light): void {
    WaterMesh.updateSunOption(this.option, light);
    const mat = <ShaderMaterial>this.material;
    mat.uniforms.sunDirection.value = this.option.sunDirection;
    mat.uniforms.sunColor.value = this.option.sunColor;
  }

  /**
   * ライトオブジェクトから位置と色を取り出し、オプションに追記する。
   * @param options
   * @param light
   */
  public static updateSunOption(options: WaterOptions, light: Light): void {
    options.sunDirection = light.position.clone().normalize();
    options.sunColor = light.color.clone();
  }

  /**
   * ノーマルマップの読み込みと設定を行う。
   * @param url
   */
  public static loadNormalSampler(url: string): Texture {
    return new TextureLoader().load(url, (texture) => {
      texture.wrapS = texture.wrapT = RepeatWrapping;
    });
  }

  /**
   * uniformsのtime変数を加算する。
   * requestAnimationFrameから呼び出される。
   *
   * @param timestamp
   */
  private onRequestAnimationFrame = (timestamp: number) => {
    if (!this.currentTimeStamp) this.currentTimeStamp = timestamp;
    const delta = timestamp - this.currentTimeStamp;

    (<ShaderMaterial>this.material).uniforms.time.value += delta / 3000;

    this.requestID = requestAnimationFrame(this.onRequestAnimationFrame);
    this.currentTimeStamp = timestamp;
  };
}
