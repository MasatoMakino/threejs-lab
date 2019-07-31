import { Common } from "ts/Common";
import { Color, Scene } from "three";
import * as THREE from "three";

import System, {
  Alpha,
  BodySprite,
  Color as NeburaColor,
  Emitter,
  Life,
  Mass,
  SpriteRenderer,
  Position,
  RadialVelocity,
  Radius,
  Rate,
  Scale,
  Span,
  SphereZone,
  Vector3D
} from "three-nebula";
import * as dat from "dat.gui";

/**
 * パーティクルエンジンを利用した炎の表現の作例。
 * https://www.youtube.com/watch?v=5Mw6NpSEb2o
 */
export class Study {
  public static readonly W = 640;
  public static readonly H = 480;

  private system: System;
  private emitter: Emitter;
  private range: RadialVelocity;
  private radius: Radius;
  private life: Life;
  private alpha: Alpha;
  private scale: Scale;
  private color: NeburaColor;

  private body: BodySprite;

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

    this.range = new RadialVelocity(16, new Vector3D(0, 1, 0), 16);
    this.radius = new Radius(6, 8);
    this.life = new Life(4.0);

    this.alpha = new Alpha(1.0, 0.0);
    this.scale = new Scale(1.2, 0.4);
    this.color = new NeburaColor(new Color(0xff7733), new Color(0x111100));

    this.body = new BodySprite(THREE, "./textures/fire01.png");

    this.emitter
      .setRate(new Rate(new Span(2, 6), 0.06))
      .setInitializers([
        new Position(new SphereZone(0, 0, 0.0, 8.0)),
        new Mass(1),
        this.radius,
        this.life,
        this.range,
        this.body
      ])
      .setBehaviours([this.alpha, this.scale, this.color])
      .emit();

    this.emitter.position.y = -8;
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
    this.initGUILife(folder);

    const folderBehaviour = gui.addFolder("Behaviour");
    this.initGUIAlpha(folderBehaviour);
    this.initGUIScale(folderBehaviour);
    this.initGUIColor(folderBehaviour);
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

  /**
   * Spriteのサイズを制御するパネル
   * @param gui
   */
  private initGUILife(gui): void {
    //spanクラスはmin, maxの２つの値をセットにした範囲を指定する型
    const span: Span = this.life.lifePan;
    const prop = {
      min: span.a,
      max: span.b
    };

    const folder = gui.addFolder("Life");
    folder
      .add(prop, "min", 0.0, 12.0)
      .step(0.1)
      .onChange(val => {
        span.a = val;
      });
    folder
      .add(prop, "max", 0.0, 24.0)
      .step(0.1)
      .onChange(val => {
        span.b = val;
      });
    folder.open();
  }

  private initGUIAlpha(gui): void {
    //spanクラスはmin, maxの２つの値をセットにした範囲を指定する型
    const prop = {
      start: this.alpha.alphaA.a,
      end: this.alpha.alphaB.a
    };

    const folder = gui.addFolder("Alpha");
    folder
      .add(prop, "start", 0.0, 1.0)
      .step(0.1)
      .onChange(val => {
        this.alpha.alphaA.a = val;
        this.alpha.alphaA.b = val;
      });
    folder
      .add(prop, "end", 0.0, 1.0)
      .step(0.1)
      .onChange(val => {
        this.alpha.alphaB.a = val;
        this.alpha.alphaB.b = val;
      });
    folder.open();
  }

  private initGUIScale(gui): void {
    const prop = {
      start: this.scale.scaleA.a,
      end: this.scale.scaleB.a
    };
    const folder = gui.addFolder("Scale");
    folder
      .add(prop, "start", 0.0, 3.0)
      .step(0.1)
      .onChange(val => {
        this.scale.scaleA.a = val;
      });
    folder
      .add(prop, "end", 0.0, 3.0)
      .step(0.1)
      .onChange(val => {
        this.scale.scaleB.a = val;
      });
    folder.open();
  }

  private initGUIColor(gui): void {
    const col = this.color;
    const prop = {
      start: col.colorA.colors[0].getHex(),
      end: col.colorB.colors[0].getHex()
    };

    const onChange = (colorPan, val) => {
      colorPan.colors[0].setHex(val);
    };
    const folder = gui.addFolder("Color");
    folder.addColor(prop, "start").onChange(val => {
      onChange(col.colorA, val);
    });
    folder.addColor(prop, "end").onChange(val => {
      onChange(col.colorB, val);
    });
    folder.open();
  }
}

window.onload = () => {
  const study = new Study();
};
