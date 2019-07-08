import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Layers,
  Material
} from "three";
import { BloomComposer } from "ts/bloom/BloomComposer";
import { MixComposer } from "ts/bloom/mix/MixComposer";
import { PostProcessRenderer } from "ts/postprocess/PostProcessRenderer";
import { AntiAliasingType } from "ts/aa/AntiAliasingType";

/**
 * Bloomレンダリングを行うクラス。
 * Bloomのオフスクリーンレンダリング、通常レンダリングとの合成、FXAAアンチエイリアスを連続して行う。
 * FXAAアンチエイリアス処理はMixShaderPass内で行われる。
 * {@link https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_unreal_bloom_selective.html reference}
 */
export class BloomRenderer extends PostProcessRenderer {
  public bloom: BloomComposer;
  private mix: MixComposer;

  private layers: Layers;
  public static readonly ENTIRE: number = 0;
  public static readonly BLOOM: number = 30;

  constructor(
    scene: Scene,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) {
    super(scene, camera, renderer);
    const renderPass = this.getRenderPass();

    this.layers = new Layers();
    this.layers.set(BloomRenderer.BLOOM);

    this.bloom = new BloomComposer(renderer, renderPass);
    this.mix = new MixComposer(renderer, renderPass, this.bloom);
    this.composers = [this.bloom, this.mix];
  }

  protected render(delta): void {
    //実行順が固定なため、super.renderの処理は継承しない。
    this.scene.traverse(this.darkenNonBloomed);
    this.bloom.render(delta);
    this.scene.traverse(this.restoreMaterial);
    this.mix.render(delta);
  }

  /**
   * bloomをマスクするオブジェクトの表示を切り替える。
   * @param obj
   */
  private darkenNonBloomed = (obj: any) => {
    if (!this.isDarken(obj)) return;

    if (obj.userData.materialStorage == null) {
      obj.userData.materialStorage = new MaterialStorage();
    }
    const storage: MaterialStorage = obj.userData.materialStorage;
    storage.updateMaterial(obj.material);
    obj.material = storage.darken;
  };

  /**
   * bloomマスクを元のマテリアルに戻す。
   * @param obj
   */
  private restoreMaterial = (obj: any) => {
    if (!this.isDarken(obj)) return;
    obj.material = obj.userData.materialStorage.original;
  };

  /**
   * そのオブジェクトがbloomマスクの対象か否かを判定する。
   * @param obj
   */
  private isDarken(obj: any): boolean {
    if (obj.isMesh == null && obj.isLine == null) return false;
    if (this.layers.test(obj.layers)) return false;
    return true;
  }

  /*
   * BloomPassのプロパティを隠蔽するため、アクセサをBloomRenderer側に用意。
   */
  set threshold(value: number) {
    this.bloom.bloomPass.threshold = value;
  }
  get threshold(): number {
    return this.bloom.bloomPass.threshold;
  }
  set strength(value: number) {
    this.bloom.bloomPass.strength = value;
  }
  get strength(): number {
    return this.bloom.bloomPass.strength;
  }
  set radius(value: number) {
    if (value > 1.0) {
      console.warn(
        "Bloomの半径が1を超えています。1以上ではメッシュにアウトラインが発生します。",
        value
      );
    }
    this.bloom.bloomPass.radius = value;
  }
  get radius(): number {
    return this.bloom.bloomPass.radius;
  }

  set antiAliasingType(value: AntiAliasingType) {
    this.mix.type = value;
  }
  get antiAliasingType(): AntiAliasingType {
    return this.mix.type;
  }
}

/**
 * Bloom設定に応じて、オリジナルのマテリアルを格納するためのオブジェクト。
 * Object3D.userData.materialStorageに格納される。
 */
class MaterialStorage {
  original?: Material;
  darken?: Material;

  public updateMaterial(original: Material) {
    this.original = original;

    if (this.darken == null || this.darken.type !== this.original.type) {
      this.darken = this.original.clone();
    } else {
      this.darken.copy(this.original);
    }

    if (this.darken["color"] != null) {
      this.darken["color"].setHex(0);
    }
    if (this.darken["shininess"] != null) {
      this.darken["shininess"] = 0;
    }
    if (this.darken["specular"] != null) {
      this.darken["specular"].setHex(0);
    }
    if (this.darken["emissive"] != null) {
      this.darken["emissive"].setHex(0);
    }
  }
}
