import {
  Scene,
  Mesh,
  Fog,
  PointLight,
  PointLightHelper,
  Color,
  TorusGeometry,
  AdditiveBlending
} from "three";
import { Common } from "ts/Common";
import { EarthGridMaterial } from "ts/earthGrid/EarthGridMaterial";
import { SphereGeometry } from "three";
import { DoubleSide } from "three";
import { MeshLambertMaterial } from "three";
import * as Hls from "hls.js";
import { PlaneBufferGeometry } from "three";
import { VideoTexture } from "three";
import { MeshBasicMaterial } from "three";
import { Texture } from "three";

export class StudyStreamingVideo {
  public static readonly W = 640;
  public static readonly H = 480;

  constructor() {
    const scene = Common.initScene();
    scene.fog = new Fog(0x000000, 80, 160);
    Common.initLight(scene);
    const camera = Common.initCamera(
      scene,
      StudyStreamingVideo.W,
      StudyStreamingVideo.H
    );
    const renderer = Common.initRenderer(
      StudyStreamingVideo.W,
      StudyStreamingVideo.H
    );
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    const video = this.initVideo();
    const videoMap = this.initObject(scene, video);
    Common.render(control, renderer, scene, camera);
  }

  private initVideo(): HTMLVideoElement {
    const video = document.createElement("video");

    //limit video size
    video.width = 320;
    Hls.DefaultConfig.capLevelToPlayerSize = true;
    // video.loop = true;
    video.muted = true;
    video.setAttribute("playsinline", "");

    const src =
      "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        video.play();
        // message.textContent = video.toString();
      });
    }

    // const message = document.createElement("div");
    // message.textContent = Hls.isSupported().toString();
    // document.body.appendChild(message);
    // message.addEventListener("click", () => {
    //   video.play();
    // });

    document.body.appendChild(video);

    return video;
  }

  private initObject(scene: Scene, video: HTMLVideoElement): Texture {
    const spot = new PointLight(0xffffff, 3, 0, 2);
    spot.position.set(10, 20, 30);
    scene.add(spot);
    const helper = new PointLightHelper(spot);
    scene.add(helper);

    const geo = new PlaneBufferGeometry(64, 36);
    const mat = new MeshBasicMaterial({
      map: new VideoTexture(video),
      fog: scene.fog !== undefined
    });
    const mesh = new Mesh(geo, mat);
    mat.map.needsUpdate = true;

    scene.add(mesh);
    return mat.map;
  }
}

window.onload = () => {
  const study = new StudyStreamingVideo();
};
