import * as THREE from "three";

import {
  Alpha,
  BodySprite,
  Color as NeburaColor,
  Emitter,
  Life,
  Position,
  RadialVelocity,
  Radius,
  Rate,
  Scale,
  Span,
  SphereZone,
  Vector3D
} from "three-nebula";
import { Color } from "three";
import { TextureLoader } from "three";

export class FireEmitter extends Emitter {
  get bodyInitializer(): BodySprite {
    return this._body;
  }
  get colorBehaviour(): NeburaColor {
    return this._color;
  }
  get scaleBehaviour(): Scale {
    return this._scale;
  }
  get alphaBehaviour(): Alpha {
    return this._alpha;
  }
  get lifeInitializer(): Life {
    return this._life;
  }
  get radiusInitializer(): Radius {
    return this._radius;
  }
  get rangeInitializer(): RadialVelocity {
    return this._range;
  }
  private _range: RadialVelocity;
  private _radius: Radius;
  private _life: Life;
  private _alpha: Alpha;
  private _scale: Scale;
  private _color: NeburaColor;
  private _body: BodySprite;

  constructor(option: FireEmitterOption) {
    super();
    this.initEmitter(option);
  }

  private initEmitter(option: FireEmitterOption): void {
    this._range = new RadialVelocity(16, new Vector3D(0, 1, 0), 20);
    this._radius = new Radius(8, 10);
    this._life = new Life(4.0);

    this._alpha = new Alpha(1.0, 1.0);
    this._scale = new Scale(1.2, 0.6);
    this._color = new NeburaColor(new Color(0x994422), new Color(0x110000));

    const loader = new TextureLoader();
    loader.load(option.url, map => {
      this.initOnLoadedTexture(option);
    });
  }

  private initOnLoadedTexture(option: FireEmitterOption): void {
    this._body = new BodySprite(THREE, option.url);

    // @ts-ignore
    this.setRate(new Rate(new Span(1, 2), 0.06))
      .setInitializers([
        new Position(new SphereZone(0, 0, 0.0, 6.0)),
        this._radius,
        this._life,
        this._range,
        this._body
      ])
      .setBehaviours([this._alpha, this._scale, this._color])
      .emit();

    // @ts-ignore
    this.position.y = -8;
  }
}

export class FireEmitterOption {
  url: string;
}
