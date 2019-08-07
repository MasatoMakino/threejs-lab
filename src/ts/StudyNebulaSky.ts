import { Common } from "ts/Common";
import { NebulaGUI } from "ts/NebulaGUI";

import {
  Color,
  CubeTextureLoader,
  Scene,
  Sprite,
  SpriteMaterial,
  TextureLoader
} from "three";
import * as THREE from "three";

import System, {
  Alpha,
  Body,
  Color as NebulaColor,
  Emitter,
  Life,
  Mass,
  Position,
  RadialVelocity,
  Radius,
  Rate,
  Scale,
  Span,
  SphereZone,
  SpriteRenderer,
  Vector3D
} from "three-nebula";
import * as dat from "dat.gui";
import { Fog } from "three";

/**
 * パーティクルエンジンによる雲表現の習作
 *
 * SkyBox textures : Three.js
 * https://github.com/mrdoob/three.js/tree/master/examples/textures/cube/skybox
 *
 * Cloud textures : textures4photoshop
 * http://www.textures4photoshop.com/tex/clouds-and-sky/free-clouds-sky-overlay-png-for-photoshop.aspx
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
  private color: NebulaColor;

  constructor() {
    const scene = Common.initScene();
    this.initSkyBox(scene);
    Common.initLight(scene);
    scene.fog = new Fog(0x998877, 60, 3000);
    const camera = Common.initCamera(scene, Study.W, Study.H, 1, 3000);
    const renderer = Common.initRenderer(Study.W, Study.H);
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);
    Common.render(control, renderer, scene, camera, () => {
      //this.system.update();
    });

    this.initGUI();
  }

  private initSkyBox(scene: Scene): void {
    const cubeLoader = new CubeTextureLoader();
    cubeLoader.setPath("./textures/skybox/");
    const cubeTexture = cubeLoader.load([
      "px.jpg",
      "nx.jpg",
      "py.jpg",
      "ny.jpg",
      "pz.jpg",
      "nz.jpg"
    ]);
    scene.background = cubeTexture;
  }

  private initObject(scene: Scene): void {
    this.system = new System();
    this.emitter = new Emitter();
    const renderer = new SpriteRenderer(scene, THREE);

    this.range = new RadialVelocity(8, new Vector3D(0, 1, 0), 75);
    this.radius = new Radius(30, 40);
    this.life = new Life(20);

    const loader = new TextureLoader();
    const urlArray = [
      "./textures/cloud/cloud01.png",
      "./textures/cloud/cloud02.png",
      "./textures/cloud/cloud03.png",
      "./textures/cloud/cloud04.png"
    ];
    const sprites = urlArray.map(url => {
      return new Sprite(
        new SpriteMaterial({
          map: loader.load(url),
          transparent: true,
          fog: scene.fog !== undefined
          // blending:THREE.AdditiveBlending
        })
      );
    });
    const body = new Body(sprites);

    this.alpha = new Alpha(0.75, 0.0);
    this.scale = new Scale(1.0, 2.0);
    this.color = new NebulaColor(new Color(0xbbb4aa), new Color(0xccc4bb));

    this.emitter
      .setRate(new Rate(new Span(1, 2), 0.33))
      .setInitializers([
        new Position(new SphereZone(0, 0, 0, 16.0)),
        new Mass(1),
        this.radius,
        this.life,
        this.range,
        body
      ])
      .setBehaviours([this.alpha, this.scale, this.color])
      .emit();

    this.emitter.position.y = -16.0;

    this.system.addEmitter(this.emitter).addRenderer(renderer);

    //nフレーム分先行してパーティクルの生成を行う。
    for (let i = 0; i < 300; i++) {
      this.emitter.update(0.033);
    }
  }

  private initBody(): void {}

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
