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
  private emitters: FireEmitter[];

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
    this.emitters = [
      new FireEmitter({
        url: "./textures/fire01.png"
      }),
      new FireEmitter({
        url: "./textures/fire02.png"
      }),
      new FireEmitter({
        url: "./textures/fire03.png"
      }),
      new FireEmitter({
        url: "./textures/fire04.png"
      })
    ];
    const renderer = new SpriteRenderer(scene, THREE);

    this.emitters.forEach(val => {
      this.system.addEmitter(val);
    });
    this.system.addRenderer(renderer);
  }

  public initGUI(): void {
    const gui = new dat.GUI();

    const folder = gui.addFolder("Emitter");
    folder.open();
    NebulaGUI.initEmitterPosition(folder, this.emitters);
    NebulaGUI.initEmitterRate(folder, this.emitters);
    NebulaGUI.initRange(
      folder,
      this.emitters.map(val => {
        return val.rangeInitializer;
      })
    );
    NebulaGUI.initRadius(
      folder,
      this.emitters.map(val => {
        return val.radiusInitializer;
      })
    );
    NebulaGUI.initLife(
      folder,
      this.emitters.map(val => {
        return val.lifeInitializer;
      })
    );

    const folderBehaviour = gui.addFolder("Behaviour");
    NebulaGUI.initAlpha(
      folderBehaviour,
      this.emitters.map(val => {
        return val.alphaBehaviour;
      })
    );
    NebulaGUI.initScale(
      folderBehaviour,
      this.emitters.map(val => {
        return val.scaleBehaviour;
      })
    );
    NebulaGUI.initColor(
      folderBehaviour,
      this.emitters.map(val => {
        return val.colorBehaviour;
      })
    );
    folderBehaviour.open();
  }
}

window.onload = () => {
  const study = new Study();
};
