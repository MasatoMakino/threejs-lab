import { Common } from "ts/Common";
import { Scene, PlaneGeometry, Mesh, Color } from "three";

import System, {
  Emitter,
  Rate,
  Span,
  Position,
  Mass,
  Radius,
  Life,
  PointZone,
  Vector3D,
  Alpha,
  Scale,
  Color as NeburaColor,
  SpriteRenderer,
  RadialVelocity
} from "three-nebula";
import * as THREE from "three";
import * as dat from "dat.gui";

export class Study {
  public static readonly W = 640;
  public static readonly H = 480;

  private system: System;
  private emitter: Emitter;
  private range: RadialVelocity;
  private radius: Radius;

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
    this.emitter = new Emitter();
    const renderer = new SpriteRenderer(scene, THREE);

    this.range = new RadialVelocity(45, new Vector3D(0, 1, 0), 180);
    this.radius = new Radius(6, 12);

    this.emitter
      .setRate(new Rate(new Span(4, 16), 0.1))
      .setInitializers([
        new Position(new PointZone(0, 0)),
        new Mass(1),
        this.radius,
        new Life(6),
        this.range
      ])
      .setBehaviours([
        new Alpha(1, 0),
        new Scale(0.1, 1.0),
        new NeburaColor(new Color(0x00ff00), new Color(0x00ff00))
      ])
      .emit();

    this.system.addEmitter(this.emitter).addRenderer(renderer);
  }

  public initGUI(): void {
    const gui = new dat.GUI();

    const folder = gui.addFolder("Emitter");
    folder.open();
    this.initGUIEmitter(folder);
    this.initGUIRate(folder);
    this.initGUIRange(folder);
    this.initGUIRadius(folder);
    this.initGUIInitializers(folder);

    const folderBehaviour = gui.addFolder("Behaviour");
    folderBehaviour.open();
  }

  /**
   * emitterの座標制御
   * @param gui
   */
  private initGUIEmitter(gui): void {
    const folder = gui.addFolder("Position");
    folder.add(this.emitter.position, "x", -30.0, 30.0);
    folder.add(this.emitter.position, "y", -30.0, 30.0);
    folder.add(this.emitter.position, "z", -30.0, 30.0);
    folder.open();
  }

  /**
   * パーティクル生成間隔の制御パネル
   * @param gui
   */
  private initGUIRate(gui): void {
    //spanクラスはmin, maxの２つの値をセットにした範囲を指定する型
    const prop = {
      numPanA: this.emitter.rate.numPan.a,
      numPanB: this.emitter.rate.numPan.b,
      timePan: this.emitter.rate.timePan.a
    };

    /**
     * 1回で射出されるパーティクルの数, min, max
     */
    const folder = gui.addFolder("Rate");
    folder
      .add(prop, "numPanA", 0.0, 30.0)
      .step(1)
      .onChange(val => {
        this.emitter.rate.numPan.a = val;
      });
    folder
      .add(prop, "numPanB", 0.0, 30.0)
      .step(1)
      .onChange(val => {
        this.emitter.rate.numPan.b = val;
      });
    folder
      .add(prop, "timePan", 0.01, 0.5)
      .step(0.01)
      .onChange(val => {
        this.emitter.rate.timePan.a = val;
      });
    folder.open();
  }

  /**
   * 射出した粒子の到達点および射出角度を制御するパネル
   * @param gui
   */
  private initGUIRange(gui): void {
    //spanクラスはmin, maxの２つの値をセットにした範囲を指定する型
    const prop = {
      radiusMin: this.range.radiusPan.a,
      radiusMax: this.range.radiusPan.b,
      tha: this.range.tha
    };

    const folder = gui.addFolder("RadialVelocity");
    folder
      .add(prop, "radiusMin", 0.0, 45.0)
      .step(0.1)
      .onChange(val => {
        this.range.radiusPan.a = val;
      });
    folder
      .add(prop, "radiusMax", 0.0, 45.0)
      .step(0.1)
      .onChange(val => {
        this.range.radiusPan.b = val;
      });
    folder
      .add(prop, "tha", 0.0, Math.PI)
      .step(0.1)
      .onChange(val => {
        this.range.tha = val;
      });
    folder.open();
  }

  /**
   * Spriteのサイズを制御するパネル
   * @param gui
   */
  private initGUIRadius(gui): void {
    //spanクラスはmin, maxの２つの値をセットにした範囲を指定する型
    const prop = {
      min: this.radius.radius.a,
      max: this.radius.radius.b
    };

    const folder = gui.addFolder("Initial Sprite Size");
    folder
      .add(prop, "min", 0.0, 45.0)
      .step(0.1)
      .onChange(val => {
        this.radius.radius.a = val;
      });
    folder
      .add(prop, "max", 0.0, 45.0)
      .step(0.1)
      .onChange(val => {
        this.radius.radius.b = val;
      });
    folder.open();
  }

  private initGUIInitializers(gui): void {
    console.log(this.emitter.initializers);
  }
}

window.onload = () => {
  const study = new Study();
};
