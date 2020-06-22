import {
  Alpha,
  Color as NebulaColor,
  Emitter,
  Life,
  RadialVelocity,
  Radius,
  Scale,
  Span,
} from "three-nebula";

export class NebulaGUI {
  /**
   * emitterの座標制御
   * @param gui
   */
  public static initEmitterPosition(gui, emitters: Emitter[]): void {
    const prop = {
      x: emitters[0].position.x,
      y: emitters[0].position.y,
      z: emitters[0].position.z,
    };
    const changed = (val) => {
      emitters.forEach((emt) => {
        emt.position.x = prop.x;
        emt.position.y = prop.y;
        emt.position.z = prop.z;
      });
    };

    const folder = gui.addFolder("Position");
    folder.add(prop, "x", -30.0, 30.0).onChange(changed);
    folder.add(prop, "y", -30.0, 30.0).onChange(changed);
    folder.add(prop, "z", -30.0, 30.0).onChange(changed);
    folder.open();
  }

  /**
   * パーティクル生成間隔の制御パネル
   * @param gui
   */
  public static initEmitterRate(gui, emitters: Emitter[]): void {
    //spanクラスはmin, maxの２つの値をセットにした範囲を指定する型
    const prop = {
      numPanA: emitters[0].rate.numPan.a,
      numPanB: emitters[0].rate.numPan.b,
      timePan: emitters[0].rate.timePan.a,
    };
    const changed = (val) => {
      emitters.forEach((emt) => {
        emt.rate.numPan.a = prop.numPanA;
        emt.rate.numPan.b = prop.numPanB;
        emt.rate.timePan.a = prop.timePan;
      });
    };

    /**
     * 1回で射出されるパーティクルの数, min, max
     */
    const folder = gui.addFolder("Rate");
    folder.add(prop, "numPanA", 0.0, 30.0).step(1).onChange(changed);
    folder.add(prop, "numPanB", 0.0, 30.0).step(1).onChange(changed);
    folder.add(prop, "timePan", 0.01, 0.5).step(0.01).onChange(changed);
    folder.open();
  }

  /**
   * 射出した粒子の到達点および射出角度を制御するパネル
   * @param gui
   */
  public static initRange(gui, ranges: RadialVelocity[]): void {
    const prop = {
      radiusMin: ranges[0].radiusPan.a,
      radiusMax: ranges[0].radiusPan.b,
      tha: ranges[0].tha,
    };

    const changed = (val) => {
      ranges.forEach((range) => {
        range.radiusPan.a = prop.radiusMin;
        range.radiusPan.b = prop.radiusMax;
        range.tha = prop.tha;
      });
    };

    const folder = gui.addFolder("RadialVelocity");
    folder.add(prop, "radiusMin", 0.0, 45.0).step(0.1).onChange(changed);
    folder.add(prop, "radiusMax", 0.0, 45.0).step(0.1).onChange(changed);
    folder.add(prop, "tha", 0.0, Math.PI).step(0.1).onChange(changed);
    folder.open();
  }

  /**
   * Spriteのサイズを制御するパネル
   * @param gui
   */
  public static initRadius(gui, radiusInitializers: Radius[]): void {
    const prop = {
      min: radiusInitializers[0].radius.a,
      max: radiusInitializers[0].radius.b,
    };

    const changed = (val) => {
      radiusInitializers.forEach((rad) => {
        rad.radius.a = prop.min;
        rad.radius.b = prop.max;
      });
    };

    const folder = gui.addFolder("Initial Sprite Size");
    folder.add(prop, "min", 0.0, 45.0).step(0.1).onChange(changed);
    folder.add(prop, "max", 0.0, 45.0).step(0.1).onChange(changed);
    folder.open();
  }

  /**
   * Spriteの寿命を制御するパネル
   * @param gui
   */
  public static initLife(gui, lifeInitializers: Life[]): void {
    //spanクラスはmin, maxの２つの値をセットにした範囲を指定する型
    const span: Span = lifeInitializers[0].lifePan;
    const prop = {
      min: span.a,
      max: span.b,
    };

    const changed = (val) => {
      lifeInitializers.forEach((life) => {
        life.lifePan.a = prop.min;
        life.lifePan.b = prop.max;
      });
    };

    const folder = gui.addFolder("Life");
    folder.add(prop, "min", 0.0, 12.0).step(0.1).onChange(changed);
    folder.add(prop, "max", 0.0, 24.0).step(0.1).onChange(changed);
    folder.open();
  }

  public static initAlpha(gui, alphaBehaviours: Alpha[]): void {
    const prop = {
      start: alphaBehaviours[0].alphaA.a,
      end: alphaBehaviours[0].alphaB.a,
    };
    const changed = (val) => {
      alphaBehaviours.forEach((alpha) => {
        alpha.alphaA.a = prop.start;
        alpha.alphaA.b = prop.start;
        alpha.alphaB.a = prop.end;
        alpha.alphaB.b = prop.end;
      });
    };

    const folder = gui.addFolder("Alpha");
    folder.add(prop, "start", 0.0, 1.0).step(0.1).onChange(changed);
    folder.add(prop, "end", 0.0, 1.0).step(0.1).onChange(changed);
    folder.open();
  }

  public static initScale(gui, scaleBehaviours: Scale[]): void {
    const prop = {
      start: scaleBehaviours[0].scaleA.a,
      end: scaleBehaviours[0].scaleB.a,
    };

    const changed = (val) => {
      scaleBehaviours.forEach((scale) => {
        scale.scaleA.a = prop.start;
        scale.scaleA.b = prop.start;
        scale.scaleB.a = prop.end;
        scale.scaleB.b = prop.end;
      });
    };

    const folder = gui.addFolder("Scale");
    folder.add(prop, "start", 0.0, 3.0).step(0.1).onChange(changed);
    folder.add(prop, "end", 0.0, 3.0).step(0.1).onChange(changed);
    folder.open();
  }

  public static initColor(gui, colors: NebulaColor[]): void {
    const prop = {
      start: colors[0].colorA.colors[0].getHex(),
      end: colors[0].colorB.colors[0].getHex(),
    };

    const changed = () => {
      colors.forEach((color) => {
        color.colorA.colors[0].setHex(prop.start);
        color.colorB.colors[0].setHex(prop.end);
      });
    };

    const folder = gui.addFolder("Color");
    folder.addColor(prop, "start").onChange(changed);
    folder.addColor(prop, "end").onChange(changed);
    folder.open();
  }
}
