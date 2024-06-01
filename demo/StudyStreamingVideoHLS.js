(()=>{"use strict";var __webpack_modules__={232:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval('\n// UNUSED EXPORTS: StudyStreamingVideoHLS\n\n// EXTERNAL MODULE: ./node_modules/hls.js/dist/hls.mjs\nvar dist_hls = __webpack_require__(3041);\n// EXTERNAL MODULE: ./node_modules/three/build/three.module.js\nvar three_module = __webpack_require__(6075);\n// EXTERNAL MODULE: ./node_modules/three/examples/jsm/controls/OrbitControls.js\nvar OrbitControls = __webpack_require__(8012);\n;// CONCATENATED MODULE: ./src/Common.ts\n\n\nclass Common {\n    static initScene() {\n        const scene = new three_module.Scene();\n        return scene;\n    }\n    static initLight(scene) {\n        const ambientLight = new three_module.AmbientLight(0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    }\n    static initCamera(scene, W, H, near = 1, far = 400) {\n        const camera = new three_module.PerspectiveCamera(45, W / H, near, far);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    }\n    static initControl(camera, render) {\n        let domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        const control = new OrbitControls/* OrbitControls */.z(camera, domElement);\n        control.update();\n        return control;\n    }\n    static initRenderer(W, H, color = 0x000000, id = "webgl-canvas", antialias = true) {\n        const renderer = new three_module.WebGLRenderer({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        renderer.setClearColor(new three_module.Color(color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        console.log("three.js revision: ", three_module.REVISION);\n        return renderer;\n    }\n    static initHelper(scene) {\n        const axesHelper = new three_module.AxesHelper(30);\n        scene.add(axesHelper);\n    }\n    static render(control, renderer, scene, camera, onBeforeRender) {\n        const rendering = () => {\n            if (onBeforeRender) {\n                onBeforeRender();\n            }\n            control.update();\n            renderer.render(scene, camera);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n    static addRendererInfo() {\n        const info = document.createElement("div");\n        document.body.appendChild(info);\n        return info;\n    }\n    static updateRendererInfo(div, info) {\n        div.innerText = JSON.stringify(info);\n    }\n}\n\n;// CONCATENATED MODULE: ./src/StudyStreamingVideoHLS.ts\n\n\n\n/**\n * HLS形式のストリーミングビデオをVideoテクスチャにするサンプル。\n * hls.jsを導入することでChrome, Desktop Safariでは動作する。\n * ※ iOS Safariでは動作なしない。\n */\nclass StudyStreamingVideoHLS {\n    constructor() {\n        const scene = Common.initScene();\n        scene.fog = new three_module.Fog(0x000000, 80, 160);\n        Common.initLight(scene);\n        const camera = Common.initCamera(scene, StudyStreamingVideoHLS.W, StudyStreamingVideoHLS.H);\n        const renderer = Common.initRenderer(StudyStreamingVideoHLS.W, StudyStreamingVideoHLS.H);\n        const control = Common.initControl(camera, renderer);\n        Common.initHelper(scene);\n        const video = this.initVideo();\n        this.initObject(scene, video);\n        Common.render(control, renderer, scene, camera);\n    }\n    initVideo() {\n        const video = document.createElement("video");\n        //limit video size\n        video.width = 320;\n        dist_hls/* default */.ZP.DefaultConfig.capLevelToPlayerSize = true;\n        // video.loop = true;\n        video.muted = true;\n        video.setAttribute("playsinline", "");\n        const src = "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8";\n        if (dist_hls/* default.isSupported */.ZP.isSupported()) {\n            const hls = new dist_hls/* default */.ZP();\n            hls.loadSource(src);\n            hls.attachMedia(video);\n            hls.on(dist_hls/* default.Events */.ZP.Events.MANIFEST_PARSED, function () {\n                video.play();\n            });\n        }\n        else if (video.canPlayType("application/vnd.apple.mpegurl")) {\n            video.src = src;\n            video.addEventListener("loadedmetadata", () => {\n                video.play();\n            });\n        }\n        return video;\n    }\n    initObject(scene, video) {\n        const spot = new three_module.PointLight(0xffffff, 3, 0, 2);\n        spot.position.set(10, 20, 30);\n        scene.add(spot);\n        const helper = new three_module.PointLightHelper(spot);\n        scene.add(helper);\n        const geo = new three_module.PlaneGeometry(64, 36);\n        const mat = new three_module.MeshBasicMaterial({\n            map: new three_module.VideoTexture(video),\n            fog: scene.fog !== undefined,\n        });\n        const mesh = new three_module.Mesh(geo, mat);\n        mat.map.needsUpdate = true;\n        scene.add(mesh);\n        return mat.map;\n    }\n}\nStudyStreamingVideoHLS.W = 640;\nStudyStreamingVideoHLS.H = 480;\nwindow.onload = () => {\n    const study = new StudyStreamingVideoHLS();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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N0MsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWVqcy1sYWIvLi9zcmMvQ29tbW9uLnRzPzczMzAiLCJ3ZWJwYWNrOi8vdGhyZWVqcy1sYWIvLi9zcmMvU3R1ZHlTdHJlYW1pbmdWaWRlb0hMUy50cz9lZTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFtYmllbnRMaWdodCxcbiAgQXhlc0hlbHBlcixcbiAgQ2FtZXJhLFxuICBDb2xvcixcbiAgUGVyc3BlY3RpdmVDYW1lcmEsXG4gIFNjZW5lLFxuICBXZWJHTFJlbmRlcmVyLFxuICBSRVZJU0lPTixcbn0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBDb21tb24ge1xuICBwdWJsaWMgc3RhdGljIGluaXRTY2VuZSgpIHtcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBTY2VuZSgpO1xuICAgIHJldHVybiBzY2VuZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdExpZ2h0KHNjZW5lKSB7XG4gICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IEFtYmllbnRMaWdodCgweGZmZmZmZiwgMS4wKTtcbiAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcbiAgICByZXR1cm4gYW1iaWVudExpZ2h0O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0Q2FtZXJhKFxuICAgIHNjZW5lLFxuICAgIFcsXG4gICAgSCxcbiAgICBuZWFyID0gMSxcbiAgICBmYXIgPSA0MDBcbiAgKTogUGVyc3BlY3RpdmVDYW1lcmEge1xuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYSg0NSwgVyAvIEgsIG5lYXIsIGZhcik7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnNldCgwLCAwLCAxMDApO1xuICAgIGNhbWVyYS51cGRhdGVNYXRyaXhXb3JsZChmYWxzZSk7XG4gICAgc2NlbmUuYWRkKGNhbWVyYSk7XG4gICAgcmV0dXJuIGNhbWVyYTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdENvbnRyb2woY2FtZXJhLCByZW5kZXI6IFdlYkdMUmVuZGVyZXIpOiBPcmJpdENvbnRyb2xzIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcbiAgICBpZiAocmVuZGVyKSB7XG4gICAgICBkb21FbGVtZW50ID0gcmVuZGVyLmRvbUVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRyb2wgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIGRvbUVsZW1lbnQpO1xuICAgIGNvbnRyb2wudXBkYXRlKCk7XG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRSZW5kZXJlcihcbiAgICBXOiBudW1iZXIsXG4gICAgSDogbnVtYmVyLFxuICAgIGNvbG9yOiBudW1iZXIgPSAweDAwMDAwMCxcbiAgICBpZDogc3RyaW5nID0gXCJ3ZWJnbC1jYW52YXNcIixcbiAgICBhbnRpYWxpYXM6IGJvb2xlYW4gPSB0cnVlXG4gICkge1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFdlYkdMUmVuZGVyZXIoe1xuICAgICAgY2FudmFzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTENhbnZhc0VsZW1lbnQsXG4gICAgICBhbnRpYWxpYXM6IGFudGlhbGlhcyxcbiAgICB9KTtcbiAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKG5ldyBDb2xvcihjb2xvcikpO1xuICAgIHJlbmRlcmVyLnNldFNpemUoVywgSCk7XG4gICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgY29uc29sZS5sb2coXCJ0aHJlZS5qcyByZXZpc2lvbjogXCIsIFJFVklTSU9OKTtcbiAgICByZXR1cm4gcmVuZGVyZXI7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRIZWxwZXIoc2NlbmU6IFNjZW5lKTogdm9pZCB7XG4gICAgY29uc3QgYXhlc0hlbHBlciA9IG5ldyBBeGVzSGVscGVyKDMwKTtcbiAgICBzY2VuZS5hZGQoYXhlc0hlbHBlcik7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlbmRlcihcbiAgICBjb250cm9sOiBPcmJpdENvbnRyb2xzLFxuICAgIHJlbmRlcmVyOiBXZWJHTFJlbmRlcmVyLFxuICAgIHNjZW5lOiBTY2VuZSxcbiAgICBjYW1lcmE6IENhbWVyYSxcbiAgICBvbkJlZm9yZVJlbmRlcj86ICgpID0+IHZvaWRcbiAgKSB7XG4gICAgY29uc3QgcmVuZGVyaW5nID0gKCkgPT4ge1xuICAgICAgaWYgKG9uQmVmb3JlUmVuZGVyKSB7XG4gICAgICAgIG9uQmVmb3JlUmVuZGVyKCk7XG4gICAgICB9XG4gICAgICBjb250cm9sLnVwZGF0ZSgpO1xuICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcmluZyk7XG4gICAgfTtcbiAgICByZW5kZXJpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYWRkUmVuZGVyZXJJbmZvKCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluZm8pO1xuICAgIHJldHVybiBpbmZvO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB1cGRhdGVSZW5kZXJlckluZm8oZGl2OiBIVE1MRGl2RWxlbWVudCwgaW5mbzogYW55KTogdm9pZCB7XG4gICAgZGl2LmlubmVyVGV4dCA9IEpTT04uc3RyaW5naWZ5KGluZm8pO1xuICB9XG59XG4iLCJpbXBvcnQgSGxzIGZyb20gXCJobHMuanNcIjtcbmltcG9ydCB7XG4gIEZvZyxcbiAgTWVzaCxcbiAgTWVzaEJhc2ljTWF0ZXJpYWwsXG4gIFBsYW5lR2VvbWV0cnksXG4gIFBvaW50TGlnaHQsXG4gIFBvaW50TGlnaHRIZWxwZXIsXG4gIFNjZW5lLFxuICBUZXh0dXJlLFxuICBWaWRlb1RleHR1cmUsXG59IGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgQ29tbW9uIH0gZnJvbSBcIi4vQ29tbW9uXCI7XG5cbi8qKlxuICogSExT5b2i5byP44Gu44K544OI44Oq44O844Of44Oz44Kw44OT44OH44Kq44KSVmlkZW/jg4bjgq/jgrnjg4Hjg6PjgavjgZnjgovjgrXjg7Pjg5fjg6vjgIJcbiAqIGhscy5qc+OCkuWwjuWFpeOBmeOCi+OBk+OBqOOBp0Nocm9tZSwgRGVza3RvcCBTYWZhcmnjgafjga/li5XkvZzjgZnjgovjgIJcbiAqIOKAuyBpT1MgU2FmYXJp44Gn44Gv5YuV5L2c44Gq44GX44Gq44GE44CCXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHVkeVN0cmVhbWluZ1ZpZGVvSExTIHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBXID0gNjQwO1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEggPSA0ODA7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgc2NlbmUgPSBDb21tb24uaW5pdFNjZW5lKCk7XG4gICAgc2NlbmUuZm9nID0gbmV3IEZvZygweDAwMDAwMCwgODAsIDE2MCk7XG4gICAgQ29tbW9uLmluaXRMaWdodChzY2VuZSk7XG4gICAgY29uc3QgY2FtZXJhID0gQ29tbW9uLmluaXRDYW1lcmEoXG4gICAgICBzY2VuZSxcbiAgICAgIFN0dWR5U3RyZWFtaW5nVmlkZW9ITFMuVyxcbiAgICAgIFN0dWR5U3RyZWFtaW5nVmlkZW9ITFMuSFxuICAgICk7XG4gICAgY29uc3QgcmVuZGVyZXIgPSBDb21tb24uaW5pdFJlbmRlcmVyKFxuICAgICAgU3R1ZHlTdHJlYW1pbmdWaWRlb0hMUy5XLFxuICAgICAgU3R1ZHlTdHJlYW1pbmdWaWRlb0hMUy5IXG4gICAgKTtcbiAgICBjb25zdCBjb250cm9sID0gQ29tbW9uLmluaXRDb250cm9sKGNhbWVyYSwgcmVuZGVyZXIpO1xuICAgIENvbW1vbi5pbml0SGVscGVyKHNjZW5lKTtcbiAgICBjb25zdCB2aWRlbyA9IHRoaXMuaW5pdFZpZGVvKCk7XG4gICAgdGhpcy5pbml0T2JqZWN0KHNjZW5lLCB2aWRlbyk7XG4gICAgQ29tbW9uLnJlbmRlcihjb250cm9sLCByZW5kZXJlciwgc2NlbmUsIGNhbWVyYSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRWaWRlbygpOiBIVE1MVmlkZW9FbGVtZW50IHtcbiAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKTtcblxuICAgIC8vbGltaXQgdmlkZW8gc2l6ZVxuICAgIHZpZGVvLndpZHRoID0gMzIwO1xuICAgIEhscy5EZWZhdWx0Q29uZmlnLmNhcExldmVsVG9QbGF5ZXJTaXplID0gdHJ1ZTtcbiAgICAvLyB2aWRlby5sb29wID0gdHJ1ZTtcbiAgICB2aWRlby5tdXRlZCA9IHRydWU7XG4gICAgdmlkZW8uc2V0QXR0cmlidXRlKFwicGxheXNpbmxpbmVcIiwgXCJcIik7XG5cbiAgICBjb25zdCBzcmMgPVxuICAgICAgXCJodHRwczovL2JpdGRhc2gtYS5ha2FtYWloZC5uZXQvY29udGVudC9NSTIwMTEwOTIxMDA4NF8xL20zdThzL2YwOGU4MGRhLWJmMWQtNGUzZC04ODk5LWYwZjYxNTVmNmVmYS5tM3U4XCI7XG5cbiAgICBpZiAoSGxzLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgIGNvbnN0IGhscyA9IG5ldyBIbHMoKTtcbiAgICAgIGhscy5sb2FkU291cmNlKHNyYyk7XG4gICAgICBobHMuYXR0YWNoTWVkaWEodmlkZW8pO1xuICAgICAgaGxzLm9uKEhscy5FdmVudHMuTUFOSUZFU1RfUEFSU0VELCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodmlkZW8uY2FuUGxheVR5cGUoXCJhcHBsaWNhdGlvbi92bmQuYXBwbGUubXBlZ3VybFwiKSkge1xuICAgICAgdmlkZW8uc3JjID0gc3JjO1xuICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlZG1ldGFkYXRhXCIsICgpID0+IHtcbiAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpZGVvO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0T2JqZWN0KHNjZW5lOiBTY2VuZSwgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQpOiBUZXh0dXJlIHtcbiAgICBjb25zdCBzcG90ID0gbmV3IFBvaW50TGlnaHQoMHhmZmZmZmYsIDMsIDAsIDIpO1xuICAgIHNwb3QucG9zaXRpb24uc2V0KDEwLCAyMCwgMzApO1xuICAgIHNjZW5lLmFkZChzcG90KTtcbiAgICBjb25zdCBoZWxwZXIgPSBuZXcgUG9pbnRMaWdodEhlbHBlcihzcG90KTtcbiAgICBzY2VuZS5hZGQoaGVscGVyKTtcblxuICAgIGNvbnN0IGdlbyA9IG5ldyBQbGFuZUdlb21ldHJ5KDY0LCAzNik7XG4gICAgY29uc3QgbWF0ID0gbmV3IE1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgIG1hcDogbmV3IFZpZGVvVGV4dHVyZSh2aWRlbyksXG4gICAgICBmb2c6IHNjZW5lLmZvZyAhPT0gdW5kZWZpbmVkLFxuICAgIH0pO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgTWVzaChnZW8sIG1hdCk7XG4gICAgbWF0Lm1hcCEubmVlZHNVcGRhdGUgPSB0cnVlO1xuXG4gICAgc2NlbmUuYWRkKG1lc2gpO1xuICAgIHJldHVybiBtYXQubWFwITtcbiAgfVxufVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBjb25zdCBzdHVkeSA9IG5ldyBTdHVkeVN0cmVhbWluZ1ZpZGVvSExTKCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///232\n')}},__webpack_module_cache__={},deferred;function __webpack_require__(Q){var U=__webpack_module_cache__[Q];if(void 0!==U)return U.exports;var F=__webpack_module_cache__[Q]={id:Q,loaded:!1,exports:{}};return __webpack_modules__[Q].call(F.exports,F,F.exports,__webpack_require__),F.loaded=!0,F.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(Q,U,F,B)=>{if(!U){var e=1/0;for(t=0;t<deferred.length;t++){for(var[U,F,B]=deferred[t],s=!0,n=0;n<U.length;n++)(!1&B||e>=B)&&Object.keys(__webpack_require__.O).every((Q=>__webpack_require__.O[Q](U[n])))?U.splice(n--,1):(s=!1,B<e&&(e=B));if(s){deferred.splice(t--,1);var c=F();void 0!==c&&(Q=c)}}return Q}B=B||0;for(var t=deferred.length;t>0&&deferred[t-1][2]>B;t--)deferred[t]=deferred[t-1];deferred[t]=[U,F,B]},__webpack_require__.n=Q=>{var U=Q&&Q.__esModule?()=>Q.default:()=>Q;return __webpack_require__.d(U,{a:U}),U},__webpack_require__.d=(Q,U)=>{for(var F in U)__webpack_require__.o(U,F)&&!__webpack_require__.o(Q,F)&&Object.defineProperty(Q,F,{enumerable:!0,get:U[F]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(Q){if("object"==typeof window)return window}}(),__webpack_require__.o=(Q,U)=>Object.prototype.hasOwnProperty.call(Q,U),__webpack_require__.r=Q=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},__webpack_require__.nmd=Q=>(Q.paths=[],Q.children||(Q.children=[]),Q),__webpack_require__.j=311,(()=>{var Q={311:0};__webpack_require__.O.j=U=>0===Q[U];var U=(U,F)=>{var B,e,[s,n,c]=F,t=0;if(s.some((U=>0!==Q[U]))){for(B in n)__webpack_require__.o(n,B)&&(__webpack_require__.m[B]=n[B]);if(c)var d=c(__webpack_require__)}for(U&&U(F);t<s.length;t++)e=s[t],__webpack_require__.o(Q,e)&&Q[e]&&Q[e][0](),Q[e]=0;return __webpack_require__.O(d)},F=self.webpackChunkthreejs_lab=self.webpackChunkthreejs_lab||[];F.forEach(U.bind(null,0)),F.push=U.bind(null,F.push.bind(F))})();var __webpack_exports__=__webpack_require__.O(void 0,[736],(()=>__webpack_require__(232)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();