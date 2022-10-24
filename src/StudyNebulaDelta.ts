import { GUI } from "lil-gui";
import * as THREE from "three";
import { Color, Scene } from "three";

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
  Vector3D,
} from "three-nebula";
import { Common } from "./Common";
import { NebulaGUI } from "./NebulaGUI";

export class Study {
  public static readonly W = 640;
  public static readonly H = 480;

  private system: System;
  private emitter: Emitter;

  private delta: number = Study.DEFAULT_SYSTEM_DELTA;
  private static readonly DEFAULT_SYSTEM_DELTA = 0.0167;

  constructor() {
    const scene = Common.initScene();
    Common.initLight(scene);
    const camera = Common.initCamera(scene, Study.W, Study.H);
    const renderer = Common.initRenderer(Study.W, Study.H);
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initNebulaSystem(scene);
    Common.render(control, renderer, scene, camera, () => {
      if (this.system) {
        this.system.update(this.delta);
      }
    });

    this.initGUI();
  }

  private initNebulaSystem(scene: Scene): void {
    this.system = new System();
    this.emitter = new Emitter();
    this.emitter.setPosition({ x: -40, y: 0, z: 0 });
    const renderer = new SpriteRenderer(scene, THREE);

    this.emitter
      .setRate(new Rate(new Span(1, 1), 0.4))
      .setInitializers([
        new Radius(3, 3),
        new RadialVelocity(30, new Vector3D(1.0, 0, 0), 0),
        new Life(4),
      ])
      .emit();
    this.system.addEmitter(this.emitter).addRenderer(renderer);
    return this.system;
  }

  public initGUI(): void {
    const gui = new GUI();

    const folder = gui.addFolder("Emitter");
    folder.open();
    folder.add(this, "delta", 0.0, 0.3);
  }
}

window.onload = () => {
  const study = new Study();
};
