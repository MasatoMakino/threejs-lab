import { Scene, PerspectiveCamera, WebGLRenderer, Layers } from "three";
import { BloomComposer } from "ts/bloom/BloomComposer";
import { MixComposer } from "ts/bloom/mix/MixComposer";
import { PostProcessRenderer } from "ts/postprocess/PostProcessRenderer";

export class BloomRenderer extends PostProcessRenderer {
  public bloom: BloomComposer;
  private mix: MixComposer;

  private layers: Layers;
  public static readonly ENTIRE: number = 0;
  public static readonly BLOOM: number = 30;
  private materials: Object = {};

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
    //TODO render()
    this.scene.traverse(this.darkenNonBloomed);
    this.bloom.render(delta);
    this.scene.traverse(this.restoreMaterial);
    this.mix.render(delta);
  }

  private darkenNonBloomed = (obj: any) => {
    if (obj.isMesh && !this.layers.test(obj.layers)) {
      const matDictionary = (this.materials[obj.uuid] = new MaterialStorage());

      const targetMaterial = obj.material;
      if (targetMaterial.color != null) {
        matDictionary.colorValue = targetMaterial.color.getHex();
        targetMaterial.color.setHex(0);
      }
      if (targetMaterial.shininess != null) {
        matDictionary.shininess = targetMaterial.shininess;
        targetMaterial.shininess = 0;
      }
      if (targetMaterial.specular != null) {
        matDictionary.specularValue = targetMaterial.specular.getHex();
        targetMaterial.specular.setHex(0);
      }
      if (targetMaterial.emissive != null) {
        matDictionary.emissiveValue = targetMaterial.emissive.getHex();
        targetMaterial.emissive.setHex(0);
      }
    }
  };

  private restoreMaterial = (obj: any) => {
    if (this.materials[obj.uuid] != null) {
      const matDictionary = this.materials[obj.uuid];
      const targetMaterial = obj.material;

      if (matDictionary.colorValue != null) {
        obj.material.color.setHex(matDictionary.colorValue);
      }
      if (matDictionary.shininess != null) {
        targetMaterial.shininess = matDictionary.shininess;
      }
      if (matDictionary.specularValue != null) {
        targetMaterial.specular.setHex(matDictionary.specularValue);
      }
      if (matDictionary.emissiveValue != null) {
        targetMaterial.emissive.setHex(matDictionary.emissiveValue);
      }

      delete this.materials[obj.uuid];
    }
  };
}

class MaterialStorage {
  colorValue?: number;
  shininess?: number;
  specularValue?: number;
  emissiveValue?: number;
}
