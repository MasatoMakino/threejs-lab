import { Texture, Vector3, Color, Side } from "three";
import { TextureLoader } from "three";
import { RepeatWrapping } from "three";
import { FrontSide } from "three";
import { Light } from "three";

/**
 * 水面オブジェクトの初期化オプション
 */
export interface WaterOptions {
  /**
   * 水面反射テクスチャのサイズ
   * TODO Vector2にまとめる。
   */
  textureWidth?: number;
  textureHeight?: number;
  clipBias?: number;
  alpha?: number;
  time?: number;
  /**
   * 水面の法線マップ
   */
  normalSampler?: Texture | string;
  /**
   * 太陽光の角度
   */
  sunDirection?: Vector3;
  /**
   * 太陽光の色
   */
  sunColor?: Color | number;
  waterColor?: Color | number;
  eye?: Vector3;
  /**
   * 水面反射の歪みサイズ。大きいほど法線マップにしたがって歪む。
   */
  distortionScale?: number;
  side?: Side;
  fog?: boolean;
}

/**
 * WaterOptionsの操作を行うユーティリティークラス
 */
export class WaterOptionsUtil {
  /**
   * 初期化を行う。省略されたオプションをデフォルト値で補う。
   * @param options
   */
  public static initOption(options: WaterOptions): WaterOptions {
    options = options || {};

    if (options.textureWidth == null) {
      options.textureWidth = 512;
    }
    if (options.textureHeight == null) {
      options.textureHeight = 512;
    }

    options.clipBias = options.clipBias !== undefined ? options.clipBias : 0.0;
    options.alpha = options.alpha !== undefined ? options.alpha : 1.0;
    options.time = options.time !== undefined ? options.time : 0.0;

    if (options.normalSampler == null) {
      options.normalSampler = null;
    } else if (typeof options.normalSampler === "string") {
      options.normalSampler = new TextureLoader().load(
        options.normalSampler,
        function(texture) {
          texture.wrapS = texture.wrapT = RepeatWrapping;
        }
      );
    }

    options.sunDirection =
      options.sunDirection !== undefined
        ? options.sunDirection
        : new Vector3(0.70707, 0.70707, 0.0);
    options.sunColor = new Color(
      options.sunColor !== undefined ? options.sunColor : 0xffffff
    );

    options.waterColor = new Color(
      options.waterColor !== undefined ? options.waterColor : 0x7f7f7f
    );
    options.eye =
      options.eye !== undefined ? options.eye : new Vector3(0, 0, 0);
    options.distortionScale =
      options.distortionScale !== undefined ? options.distortionScale : 20.0;
    options.side = options.side !== undefined ? options.side : FrontSide;
    options.fog = options.fog !== undefined ? options.fog : false;
    return options;
  }

  /**
   * ライトオブジェクトから位置と色を取り出し、オプションに追記する。
   * @param options
   * @param light
   */
  public static updateSun(options: WaterOptions, light: Light): void {
    options.sunDirection = light.position.clone().normalize();
    options.sunColor = light.color.clone();
  }
}
