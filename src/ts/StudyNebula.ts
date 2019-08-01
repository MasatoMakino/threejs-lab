import { Common } from "ts/Common";
import { Color, Scene } from "three";
import * as THREE from "three";

import System, {
  Alpha,
  Color as NebulaColor,
  Emitter,
  Life,
  Mass,
  PointZone,
  Position,
  RadialVelocity,
  Radius,
  Rate,
  Scale,
  Span,
  SpriteRenderer,
  Vector3D
} from "three-nebula";
import * as dat from "dat.gui";
import { NebulaGUI } from "ts/NebulaGUI";

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
  private color: NebulaColor;

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
    this.life = new Life(6);

    this.alpha = new Alpha(1, 0);
    this.scale = new Scale(0.1, 1.0);
    this.color = new NebulaColor(new Color(0x00ff00), new Color(0x00ff00));

    this.emitter
      .setRate(new Rate(new Span(4, 16), 0.1))
      .setInitializers([
        new Position(new PointZone(0, 0)),
        new Mass(1),
        this.radius,
        this.life,
        this.range
      ])
      .setBehaviours([this.alpha, this.scale, this.color])
      .emit();

    this.system.addEmitter(this.emitter).addRenderer(renderer);
  }

  public initGUI(): void {
    const gui = new dat.GUI();

    const folder = gui.addFolder("Emitter");
    folder.open();
    NebulaGUI.initEmitterPosition(folder, [this.emitter]);
    NebulaGUI.initEmitterRate(folder, [this.emitter]);
    NebulaGUI.initRange(folder, [this.range]);
    NebulaGUI.initRadius(folder, [this.radius]);
    NebulaGUI.initLife(folder, [this.life]);

    const folderBehaviour = gui.addFolder("Behaviour");
    NebulaGUI.initAlpha(folderBehaviour, [this.alpha]);
    NebulaGUI.initScale(folderBehaviour, [this.scale]);
    NebulaGUI.initColor(folderBehaviour, [this.color]);
    folderBehaviour.open();
  }
}

window.onload = () => {
  const study = new Study();
};
