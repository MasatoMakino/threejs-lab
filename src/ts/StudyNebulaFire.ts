import { Common } from "ts/Common";
import { Scene } from "three";
import * as THREE from "three";

import System, { SpriteRenderer } from "three-nebula";
import * as dat from "dat.gui";
import { FireEmitter } from "ts/nebulaFire/FireEmitter";
import { NebulaGUI } from "ts/NebulaGUI";

/**
 * パーティクルエンジンを利用した炎の表現の作例。
 * https://www.youtube.com/watch?v=5Mw6NpSEb2o
 */
export class Study {
  public static readonly W = 640;
  public static readonly H = 480;

  private system: System;
  private emitter: FireEmitter;

  constructor() {
    const scene = Common.initScene();
    Common.initLight(scene);
    const camera = Common.initCamera(scene, Study.W, Study.H);
    const renderer = Common.initRenderer(Study.W, Study.H);
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);
    Common.render(control, renderer, scene, camera, () => {
      if (this.system) {
        this.system.update();
      }
    });

    this.initGUI();
  }

  private initObject(scene: Scene): void {
    this.system = new System();
    this.emitter = new FireEmitter({
      maps: [
        "./textures/fire01.png",
        "./textures/fire02.png",
        "./textures/fire03.png",
        "./textures/fire04.png"
      ]
    });
    const renderer = new SpriteRenderer(scene, THREE);

    this.system.addEmitter(this.emitter);
    this.system.addRenderer(renderer);
  }

  public initGUI(): void {
    const gui = new dat.GUI();

    const folder = gui.addFolder("Emitter");
    folder.open();
    NebulaGUI.initEmitterPosition(folder, [this.emitter]);
    NebulaGUI.initEmitterRate(folder, [this.emitter]);
    NebulaGUI.initRange(folder, [this.emitter.rangeInitializer]);
    NebulaGUI.initRadius(folder, [this.emitter.radiusInitializer]);
    NebulaGUI.initLife(folder, [this.emitter.lifeInitializer]);

    const folderBehaviour = gui.addFolder("Behaviour");
    NebulaGUI.initAlpha(folderBehaviour, [this.emitter.alphaBehaviour]);
    NebulaGUI.initScale(folderBehaviour, [this.emitter.scaleBehaviour]);
    NebulaGUI.initColor(folderBehaviour, [this.emitter.colorBehaviour]);
    folderBehaviour.open();
  }
}

window.onload = () => {
  const study = new Study();
};
