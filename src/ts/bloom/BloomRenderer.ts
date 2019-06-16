import { Scene, PerspectiveCamera, WebGLRenderer, Layers } from "three";
import { BloomComposer } from "ts/bloom/BloomComposer";
import { MixComposer } from "ts/bloom/mix/MixComposer";
import { PostProcessRenderer } from "ts/postprocess/PostProcessRenderer";
import { Material } from "three";
import { getAndCacheOutputJSFileName } from "ts-loader/dist/types/utils";

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
    const renderScene = this.getRenderPass();

    this.layers = new Layers();
    this.layers.set(BloomRenderer.BLOOM);

    this.bloom = new BloomComposer(renderer, renderScene);
    this.mix = new MixComposer(renderer, renderScene, this.bloom);
  }

  protected render(delta): void {
    this.scene.traverse(this.darkenNonBloomed);
    this.bloom.render(delta);
    this.scene.traverse(this.restoreMaterial);
    this.mix.render(delta);
  }

  private darkenNonBloomed = (obj: any) => {
    if (obj.isMesh == null || obj.isMesh === false) return;
    if (this.layers.test(obj.layers)) return;

    if (obj.userData.materialStrage == null) {
      obj.userData.materialStrage = new MaterialStorage();
    }
    const storage: MaterialStorage = obj.userData.materialStrage;
    storage.updateMaterial(obj.material);
    obj.material = storage.darken;
  };

  private restoreMaterial = (obj: any) => {
    if (obj.userData.materialStrage) {
      obj.material = obj.userData.materialStrage.original;
    }
  };
}

class MaterialStorage {
  original?: Material;
  darken?: Material;

  public updateMaterial(original: Material) {
    this.original = original;

    if (this.darken == null) {
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
