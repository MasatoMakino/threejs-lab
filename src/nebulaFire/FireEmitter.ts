import {
  AdditiveBlending,
  Color,
  Sprite,
  SpriteMaterial,
  TextureLoader,
} from "three";

import {
  Alpha,
  Body,
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
  Vector3D,
} from "three-nebula";

export class FireEmitter extends Emitter {
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
  private _body: Body;

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

    this.initOnLoadedTexture(option);
  }

  private initBody(urlArray: string[]): void {
    const loader = new TextureLoader();
    const sprites = urlArray.map((url) => {
      return new Sprite(
        new SpriteMaterial({
          map: loader.load(url),
          blending: AdditiveBlending,
        })
      );
    });
    this._body = new Body(sprites);
  }

  private initOnLoadedTexture(option: FireEmitterOption): void {
    this.initBody(option.maps);

    // @ts-ignore
    this.setRate(new Rate(new Span(2, 7), 0.06))
      .setInitializers([
        new Position(new SphereZone(0, 0, 0.0, 6.0)),
        this._radius,
        this._life,
        this._range,
        this._body,
      ])
      .setBehaviours([this._alpha, this._scale, this._color])
      .emit();

    // @ts-ignore
    this.position.y = -8;
  }
}

export class FireEmitterOption {
  maps: string[];
}
