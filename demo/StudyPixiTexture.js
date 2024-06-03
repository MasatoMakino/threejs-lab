(()=>{var __webpack_modules__={1040:(module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   G: () => (/* binding */ Common)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6075);\n/* harmony import */ var three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5481);\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8012);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__]);\nthree_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nclass Common {\n    static initScene() {\n        const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        return scene;\n    }\n    static initLight(scene) {\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    }\n    static initCamera(scene, W, H, near = 1, far = 400) {\n        const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(45, W / H, near, far);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    }\n    static initControl(camera, render) {\n        let domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        const control = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__/* .OrbitControls */ .z(camera, domElement);\n        control.update();\n        return control;\n    }\n    static initRenderer(W, H, color = 0x000000, id = "webgl-canvas", antialias = true) {\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        this.initRendererSettings(renderer, color, W, H);\n        return renderer;\n    }\n    static initWebGPURenderer(W, H, color = 0x000000, id = "webgl-canvas", antialias = true) {\n        const renderer = new three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        this.initRendererSettings(renderer, color, W, H);\n        return renderer;\n    }\n    static initRendererSettings(renderer, color, W, H) {\n        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__.Color(color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        console.log("three.js revision: ", three__WEBPACK_IMPORTED_MODULE_0__.REVISION);\n    }\n    static initHelper(scene) {\n        const axesHelper = new three__WEBPACK_IMPORTED_MODULE_0__.AxesHelper(30);\n        scene.add(axesHelper);\n    }\n    static render(control, renderer, scene, camera, onBeforeRender) {\n        const rendering = () => {\n            if (onBeforeRender) {\n                onBeforeRender();\n            }\n            control.update();\n            if (renderer instanceof three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z) {\n                renderer.renderAsync(scene, camera);\n            }\n            else {\n                renderer.render(scene, camera);\n            }\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n    static addRendererInfo() {\n        const info = document.createElement("div");\n        document.body.appendChild(info);\n        return info;\n    }\n    static updateRendererInfo(div, info) {\n        div.innerText = JSON.stringify(info);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWVqcy1sYWIvLi9zcmMvQ29tbW9uLnRzPzczMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQW1iaWVudExpZ2h0LFxuICBBeGVzSGVscGVyLFxuICBDYW1lcmEsXG4gIENvbG9yLFxuICBQZXJzcGVjdGl2ZUNhbWVyYSxcbiAgU2NlbmUsXG4gIFdlYkdMUmVuZGVyZXIsXG4gIFJFVklTSU9OLFxufSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCBXZWJHUFVSZW5kZXJlciBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3JlbmRlcmVycy93ZWJncHUvV2ViR1BVUmVuZGVyZXIuanNcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMuanNcIjtcblxuZXhwb3J0IGNsYXNzIENvbW1vbiB7XG4gIHB1YmxpYyBzdGF0aWMgaW5pdFNjZW5lKCkge1xuICAgIGNvbnN0IHNjZW5lID0gbmV3IFNjZW5lKCk7XG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0TGlnaHQoc2NlbmUpIHtcbiAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAxLjApO1xuICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuICAgIHJldHVybiBhbWJpZW50TGlnaHQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRDYW1lcmEoXG4gICAgc2NlbmU6IFNjZW5lLFxuICAgIFc6IG51bWJlcixcbiAgICBIOiBudW1iZXIsXG4gICAgbmVhciA9IDEsXG4gICAgZmFyID0gNDAwXG4gICk6IFBlcnNwZWN0aXZlQ2FtZXJhIHtcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgUGVyc3BlY3RpdmVDYW1lcmEoNDUsIFcgLyBILCBuZWFyLCBmYXIpO1xuICAgIGNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMCwgMTAwKTtcbiAgICBjYW1lcmEudXBkYXRlTWF0cml4V29ybGQoZmFsc2UpO1xuICAgIHNjZW5lLmFkZChjYW1lcmEpO1xuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRDb250cm9sKFxuICAgIGNhbWVyYTogQ2FtZXJhLFxuICAgIHJlbmRlcjogV2ViR0xSZW5kZXJlciB8IFdlYkdQVVJlbmRlcmVyXG4gICk6IE9yYml0Q29udHJvbHMge1xuICAgIGxldCBkb21FbGVtZW50O1xuICAgIGlmIChyZW5kZXIpIHtcbiAgICAgIGRvbUVsZW1lbnQgPSByZW5kZXIuZG9tRWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgY29udHJvbCA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgZG9tRWxlbWVudCk7XG4gICAgY29udHJvbC51cGRhdGUoKTtcbiAgICByZXR1cm4gY29udHJvbDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdFJlbmRlcmVyKFxuICAgIFc6IG51bWJlcixcbiAgICBIOiBudW1iZXIsXG4gICAgY29sb3I6IG51bWJlciA9IDB4MDAwMDAwLFxuICAgIGlkOiBzdHJpbmcgPSBcIndlYmdsLWNhbnZhc1wiLFxuICAgIGFudGlhbGlhczogYm9vbGVhbiA9IHRydWVcbiAgKSB7XG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgV2ViR0xSZW5kZXJlcih7XG4gICAgICBjYW52YXM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICAgIGFudGlhbGlhczogYW50aWFsaWFzLFxuICAgIH0pO1xuICAgIHRoaXMuaW5pdFJlbmRlcmVyU2V0dGluZ3MocmVuZGVyZXIsIGNvbG9yLCBXLCBIKTtcbiAgICByZXR1cm4gcmVuZGVyZXI7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRXZWJHUFVSZW5kZXJlcihcbiAgICBXOiBudW1iZXIsXG4gICAgSDogbnVtYmVyLFxuICAgIGNvbG9yOiBudW1iZXIgPSAweDAwMDAwMCxcbiAgICBpZDogc3RyaW5nID0gXCJ3ZWJnbC1jYW52YXNcIixcbiAgICBhbnRpYWxpYXM6IGJvb2xlYW4gPSB0cnVlXG4gICkge1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFdlYkdQVVJlbmRlcmVyKHtcbiAgICAgIGNhbnZhczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpIGFzIEhUTUxDYW52YXNFbGVtZW50LFxuICAgICAgYW50aWFsaWFzOiBhbnRpYWxpYXMsXG4gICAgfSk7XG4gICAgdGhpcy5pbml0UmVuZGVyZXJTZXR0aW5ncyhyZW5kZXJlciwgY29sb3IsIFcsIEgpO1xuICAgIHJldHVybiByZW5kZXJlcjtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGluaXRSZW5kZXJlclNldHRpbmdzKFxuICAgIHJlbmRlcmVyOiBXZWJHTFJlbmRlcmVyIHwgV2ViR1BVUmVuZGVyZXIsXG4gICAgY29sb3I6IG51bWJlcixcbiAgICBXOiBudW1iZXIsXG4gICAgSDogbnVtYmVyXG4gICkge1xuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IobmV3IENvbG9yKGNvbG9yKSk7XG4gICAgcmVuZGVyZXIuc2V0U2l6ZShXLCBIKTtcbiAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcbiAgICBjb25zb2xlLmxvZyhcInRocmVlLmpzIHJldmlzaW9uOiBcIiwgUkVWSVNJT04pO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0SGVscGVyKHNjZW5lOiBTY2VuZSk6IHZvaWQge1xuICAgIGNvbnN0IGF4ZXNIZWxwZXIgPSBuZXcgQXhlc0hlbHBlcigzMCk7XG4gICAgc2NlbmUuYWRkKGF4ZXNIZWxwZXIpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyByZW5kZXIoXG4gICAgY29udHJvbDogT3JiaXRDb250cm9scyxcbiAgICByZW5kZXJlcjogV2ViR0xSZW5kZXJlciB8IFdlYkdQVVJlbmRlcmVyLFxuICAgIHNjZW5lOiBTY2VuZSxcbiAgICBjYW1lcmE6IENhbWVyYSxcbiAgICBvbkJlZm9yZVJlbmRlcj86ICgpID0+IHZvaWRcbiAgKSB7XG4gICAgY29uc3QgcmVuZGVyaW5nID0gKCkgPT4ge1xuICAgICAgaWYgKG9uQmVmb3JlUmVuZGVyKSB7XG4gICAgICAgIG9uQmVmb3JlUmVuZGVyKCk7XG4gICAgICB9XG4gICAgICBjb250cm9sLnVwZGF0ZSgpO1xuICAgICAgaWYgKHJlbmRlcmVyIGluc3RhbmNlb2YgV2ViR1BVUmVuZGVyZXIpIHtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyQXN5bmMoc2NlbmUsIGNhbWVyYSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgICB9XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyaW5nKTtcbiAgICB9O1xuICAgIHJlbmRlcmluZygpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhZGRSZW5kZXJlckluZm8oKTogSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gICAgcmV0dXJuIGluZm87XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHVwZGF0ZVJlbmRlcmVySW5mbyhkaXY6IEhUTUxEaXZFbGVtZW50LCBpbmZvOiBhbnkpOiB2b2lkIHtcbiAgICBkaXYuaW5uZXJUZXh0ID0gSlNPTi5zdHJpbmdpZnkoaW5mbyk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1040\n')},3509:(module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n/* unused harmony export Study */\n/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1984);\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7932);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6075);\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1040);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Common__WEBPACK_IMPORTED_MODULE_2__]);\n_Common__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nclass Study {\n    constructor() {\n        const scene = _Common__WEBPACK_IMPORTED_MODULE_2__/* .Common */ .G.initScene();\n        _Common__WEBPACK_IMPORTED_MODULE_2__/* .Common */ .G.initLight(scene);\n        const camera = _Common__WEBPACK_IMPORTED_MODULE_2__/* .Common */ .G.initCamera(scene, Study.W, Study.H);\n        const renderer = _Common__WEBPACK_IMPORTED_MODULE_2__/* .Common */ .G.initRenderer(Study.W, Study.H);\n        const control = _Common__WEBPACK_IMPORTED_MODULE_2__/* .Common */ .G.initControl(camera, renderer);\n        _Common__WEBPACK_IMPORTED_MODULE_2__/* .Common */ .G.initHelper(scene);\n        this.initObject(scene);\n        _Common__WEBPACK_IMPORTED_MODULE_2__/* .Common */ .G.render(control, renderer, scene, camera);\n    }\n    initObject(scene) {\n        const app = new pixi_js__WEBPACK_IMPORTED_MODULE_1__/* .Application */ .MxU({ width: 256, height: 256 });\n        document.body.appendChild(app.view);\n        app.ticker.add(() => {\n            _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].update */ .ZP.update(app.ticker.lastTime);\n            map.needsUpdate = true;\n        });\n        const shape = new pixi_js__WEBPACK_IMPORTED_MODULE_1__/* .Graphics */ .TCu();\n        shape.beginFill(0xff00ff).drawRect(0, 0, 32, 32).endFill();\n        app.stage.addChild(shape);\n        const tween = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Tween */ .ZP.Tween(shape)\n            .to({ x: 256, y: 256 }, 3000)\n            .easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Easing */ .ZP.Easing.Cubic.InOut)\n            .repeat(Infinity)\n            .yoyo(true)\n            .start();\n        const geo = new three__WEBPACK_IMPORTED_MODULE_3__.PlaneGeometry(32, 32);\n        const map = new three__WEBPACK_IMPORTED_MODULE_3__.Texture(app.view);\n        const mat = new three__WEBPACK_IMPORTED_MODULE_3__.MeshBasicMaterial({\n            map: map,\n            blending: three__WEBPACK_IMPORTED_MODULE_3__.AdditiveBlending,\n        });\n        const mesh = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(geo, mat);\n        scene.add(mesh);\n    }\n}\nStudy.W = 640;\nStudy.H = 480;\nwindow.onload = () => {\n    const study = new Study();\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q25CLE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7QUFDNUIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWVqcy1sYWIvLi9zcmMvU3R1ZHlQaXhpVGV4dHVyZS50cz8zY2M3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUV0VFTiBmcm9tIFwiQHR3ZWVuanMvdHdlZW4uanNcIjtcbmltcG9ydCB7IEFwcGxpY2F0aW9uLCBHcmFwaGljcyB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQge1xuICBBZGRpdGl2ZUJsZW5kaW5nLFxuICBNZXNoLFxuICBNZXNoQmFzaWNNYXRlcmlhbCxcbiAgUGxhbmVHZW9tZXRyeSxcbiAgU2NlbmUsXG4gIFRleHR1cmUsXG59IGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgQ29tbW9uIH0gZnJvbSBcIi4vQ29tbW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBTdHVkeSB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVyA9IDY0MDtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBIID0gNDgwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHNjZW5lID0gQ29tbW9uLmluaXRTY2VuZSgpO1xuICAgIENvbW1vbi5pbml0TGlnaHQoc2NlbmUpO1xuICAgIGNvbnN0IGNhbWVyYSA9IENvbW1vbi5pbml0Q2FtZXJhKHNjZW5lLCBTdHVkeS5XLCBTdHVkeS5IKTtcbiAgICBjb25zdCByZW5kZXJlciA9IENvbW1vbi5pbml0UmVuZGVyZXIoU3R1ZHkuVywgU3R1ZHkuSCk7XG4gICAgY29uc3QgY29udHJvbCA9IENvbW1vbi5pbml0Q29udHJvbChjYW1lcmEsIHJlbmRlcmVyKTtcbiAgICBDb21tb24uaW5pdEhlbHBlcihzY2VuZSk7XG4gICAgdGhpcy5pbml0T2JqZWN0KHNjZW5lKTtcbiAgICBDb21tb24ucmVuZGVyKGNvbnRyb2wsIHJlbmRlcmVyLCBzY2VuZSwgY2FtZXJhKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdE9iamVjdChzY2VuZTogU2NlbmUpOiB2b2lkIHtcbiAgICBjb25zdCBhcHAgPSBuZXcgQXBwbGljYXRpb24oeyB3aWR0aDogMjU2LCBoZWlnaHQ6IDI1NiB9KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcC52aWV3IGFzIEhUTUxDYW52YXNFbGVtZW50KTtcblxuICAgIGFwcC50aWNrZXIuYWRkKCgpID0+IHtcbiAgICAgIFRXRUVOLnVwZGF0ZShhcHAudGlja2VyLmxhc3RUaW1lKTtcbiAgICAgIG1hcC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzaGFwZSA9IG5ldyBHcmFwaGljcygpO1xuICAgIHNoYXBlLmJlZ2luRmlsbCgweGZmMDBmZikuZHJhd1JlY3QoMCwgMCwgMzIsIDMyKS5lbmRGaWxsKCk7XG5cbiAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQoc2hhcGUpO1xuXG4gICAgY29uc3QgdHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oc2hhcGUpXG4gICAgICAudG8oeyB4OiAyNTYsIHk6IDI1NiB9LCAzMDAwKVxuICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuQ3ViaWMuSW5PdXQpXG4gICAgICAucmVwZWF0KEluZmluaXR5KVxuICAgICAgLnlveW8odHJ1ZSlcbiAgICAgIC5zdGFydCgpO1xuXG4gICAgY29uc3QgZ2VvID0gbmV3IFBsYW5lR2VvbWV0cnkoMzIsIDMyKTtcbiAgICBjb25zdCBtYXAgPSBuZXcgVGV4dHVyZShhcHAudmlldyBhcyBIVE1MQ2FudmFzRWxlbWVudCk7XG4gICAgY29uc3QgbWF0ID0gbmV3IE1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgIG1hcDogbWFwLFxuICAgICAgYmxlbmRpbmc6IEFkZGl0aXZlQmxlbmRpbmcsXG4gICAgfSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBNZXNoKGdlbywgbWF0KTtcbiAgICBzY2VuZS5hZGQobWVzaCk7XG4gIH1cbn1cblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgY29uc3Qgc3R1ZHkgPSBuZXcgU3R1ZHkoKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3509\n')},4654:()=>{}},__webpack_module_cache__={},webpackQueues,webpackExports,webpackError,resolveQueue,deferred;function __webpack_require__(e){var Q=__webpack_module_cache__[e];if(void 0!==Q)return Q.exports;var U=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(U.exports,U,U.exports,__webpack_require__),U.loaded=!0,U.exports}__webpack_require__.m=__webpack_modules__,webpackQueues="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",webpackExports="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",webpackError="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",resolveQueue=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},__webpack_require__.a=(e,Q,U)=>{var F;U&&((F=[]).d=-1);var B,_,n,s=new Set,c=e.exports,r=new Promise(((e,Q)=>{n=Q,_=e}));r[webpackExports]=c,r[webpackQueues]=e=>(F&&e(F),s.forEach(e),r.catch((e=>{}))),e.exports=r,Q((e=>{var Q;B=(e=>e.map((e=>{if(null!==e&&"object"==typeof e){if(e[webpackQueues])return e;if(e.then){var Q=[];Q.d=0,e.then((e=>{U[webpackExports]=e,resolveQueue(Q)}),(e=>{U[webpackError]=e,resolveQueue(Q)}));var U={};return U[webpackQueues]=e=>e(Q),U}}var F={};return F[webpackQueues]=e=>{},F[webpackExports]=e,F})))(e);var U=()=>B.map((e=>{if(e[webpackError])throw e[webpackError];return e[webpackExports]})),_=new Promise((e=>{(Q=()=>e(U)).r=0;var _=e=>e!==F&&!s.has(e)&&(s.add(e),e&&!e.d&&(Q.r++,e.push(Q)));B.map((e=>e[webpackQueues](_)))}));return Q.r?_:U()}),(e=>(e?n(r[webpackError]=e):_(c),resolveQueue(F)))),F&&F.d<0&&(F.d=0)},deferred=[],__webpack_require__.O=(e,Q,U,F)=>{if(!Q){var B=1/0;for(c=0;c<deferred.length;c++){for(var[Q,U,F]=deferred[c],_=!0,n=0;n<Q.length;n++)(!1&F||B>=F)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](Q[n])))?Q.splice(n--,1):(_=!1,F<B&&(B=F));if(_){deferred.splice(c--,1);var s=U();void 0!==s&&(e=s)}}return e}F=F||0;for(var c=deferred.length;c>0&&deferred[c-1][2]>F;c--)deferred[c]=deferred[c-1];deferred[c]=[Q,U,F]},__webpack_require__.n=e=>{var Q=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(Q,{a:Q}),Q},__webpack_require__.d=(e,Q)=>{for(var U in Q)__webpack_require__.o(Q,U)&&!__webpack_require__.o(e,U)&&Object.defineProperty(e,U,{enumerable:!0,get:Q[U]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,Q)=>Object.prototype.hasOwnProperty.call(e,Q),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),__webpack_require__.j=850,(()=>{var e={850:0};__webpack_require__.O.j=Q=>0===e[Q];var Q=(Q,U)=>{var F,B,[_,n,s]=U,c=0;if(_.some((Q=>0!==e[Q]))){for(F in n)__webpack_require__.o(n,F)&&(__webpack_require__.m[F]=n[F]);if(s)var r=s(__webpack_require__)}for(Q&&Q(U);c<_.length;c++)B=_[c],__webpack_require__.o(e,B)&&e[B]&&e[B][0](),e[B]=0;return __webpack_require__.O(r)},U=self.webpackChunkthreejs_lab=self.webpackChunkthreejs_lab||[];U.forEach(Q.bind(null,0)),U.push=Q.bind(null,U.push.bind(U))})();var __webpack_exports__=__webpack_require__.O(void 0,[736],(()=>__webpack_require__(3509)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();