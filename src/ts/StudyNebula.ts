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
  Velocity,
  PointZone,
  Vector3D,
  Alpha,
  Scale,
  Color as NeburaColor,
  SpriteRenderer,
  RadialVelocity
} from "three-nebula";
import * as THREE from "three";

export class Study {
  public static readonly W = 640;
  public static readonly H = 480;

  private system: System;

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
  }

  private initObject(scene: Scene): void {
    this.system = new System();
    const emitter = new Emitter();
    const renderer = new SpriteRenderer(scene, THREE);

    emitter
      .setRate(new Rate(new Span(4, 16), new Span(0.01)))
      .setInitializers([
        new Position(new PointZone(0, 0)),
        new Mass(1),
        new Radius(6, 12),
        new Life(6),
        new RadialVelocity(45, new Vector3D(0, 1, 0), 180)
      ])
      .setBehaviours([
        new Alpha(1, 0),
        new Scale(0.1, 1.3),
        new NeburaColor(new Color(0x00ff00), new Color(0x000000))
      ])
      .emit();
    this.system.addEmitter(emitter).addRenderer(renderer);
  }
}

window.onload = () => {
  const study = new Study();
};
