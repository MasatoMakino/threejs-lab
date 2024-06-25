(()=>{"use strict";var __webpack_modules__={1040:(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   G: () => (/* binding */ Common)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6075);\n/* harmony import */ var three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5481);\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8012);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__]);\nthree_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nvar Common = /** @class */ (function () {\n    function Common() {\n    }\n    Common.initScene = function () {\n        var scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        return scene;\n    };\n    Common.initLight = function (scene) {\n        var ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    };\n    Common.initCamera = function (scene, W, H, near, far) {\n        if (near === void 0) { near = 1; }\n        if (far === void 0) { far = 400; }\n        var camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(45, W / H, near, far);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    };\n    Common.initControl = function (camera, render) {\n        var domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        var control = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__/* .OrbitControls */ .z(camera, domElement);\n        control.update();\n        return control;\n    };\n    Common.initRenderer = function (W, H, color, id, antialias) {\n        if (color === void 0) { color = 0x000000; }\n        if (id === void 0) { id = "webgl-canvas"; }\n        if (antialias === void 0) { antialias = true; }\n        var renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        this.initRendererSettings(renderer, color, W, H);\n        return renderer;\n    };\n    Common.initWebGPURenderer = function (W, H, color, id, antialias) {\n        if (color === void 0) { color = 0x000000; }\n        if (id === void 0) { id = "webgl-canvas"; }\n        if (antialias === void 0) { antialias = true; }\n        var renderer = new three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        this.initRendererSettings(renderer, color, W, H);\n        return renderer;\n    };\n    Common.initRendererSettings = function (renderer, color, W, H) {\n        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__.Color(color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        console.log("three.js revision: ", three__WEBPACK_IMPORTED_MODULE_0__.REVISION);\n    };\n    Common.initHelper = function (scene) {\n        var axesHelper = new three__WEBPACK_IMPORTED_MODULE_0__.AxesHelper(30);\n        scene.add(axesHelper);\n    };\n    Common.render = function (control, renderer, scene, camera, onBeforeRender) {\n        var rendering = function () {\n            if (onBeforeRender) {\n                onBeforeRender();\n            }\n            control.update();\n            if (renderer instanceof three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z) {\n                renderer.renderAsync(scene, camera);\n            }\n            else {\n                renderer.render(scene, camera);\n            }\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    };\n    Common.addRendererInfo = function () {\n        var info = document.createElement("div");\n        document.body.appendChild(info);\n        return info;\n    };\n    Common.updateRendererInfo = function (div, info) {\n        div.innerText = JSON.stringify(info);\n    };\n    return Common;\n}());\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlanMtbGFiLy4vc3JjL0NvbW1vbi50cz83MzMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFtYmllbnRMaWdodCxcbiAgQXhlc0hlbHBlcixcbiAgQ2FtZXJhLFxuICBDb2xvcixcbiAgUGVyc3BlY3RpdmVDYW1lcmEsXG4gIFNjZW5lLFxuICBXZWJHTFJlbmRlcmVyLFxuICBSRVZJU0lPTixcbn0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgV2ViR1BVUmVuZGVyZXIgZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9yZW5kZXJlcnMvd2ViZ3B1L1dlYkdQVVJlbmRlcmVyLmpzXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBDb21tb24ge1xuICBwdWJsaWMgc3RhdGljIGluaXRTY2VuZSgpIHtcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBTY2VuZSgpO1xuICAgIHJldHVybiBzY2VuZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdExpZ2h0KHNjZW5lKSB7XG4gICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IEFtYmllbnRMaWdodCgweGZmZmZmZiwgMS4wKTtcbiAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcbiAgICByZXR1cm4gYW1iaWVudExpZ2h0O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0Q2FtZXJhKFxuICAgIHNjZW5lOiBTY2VuZSxcbiAgICBXOiBudW1iZXIsXG4gICAgSDogbnVtYmVyLFxuICAgIG5lYXIgPSAxLFxuICAgIGZhciA9IDQwMFxuICApOiBQZXJzcGVjdGl2ZUNhbWVyYSB7XG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCBXIC8gSCwgbmVhciwgZmFyKTtcbiAgICBjYW1lcmEucG9zaXRpb24uc2V0KDAsIDAsIDEwMCk7XG4gICAgY2FtZXJhLnVwZGF0ZU1hdHJpeFdvcmxkKGZhbHNlKTtcbiAgICBzY2VuZS5hZGQoY2FtZXJhKTtcbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0Q29udHJvbChcbiAgICBjYW1lcmE6IENhbWVyYSxcbiAgICByZW5kZXI6IFdlYkdMUmVuZGVyZXIgfCBXZWJHUFVSZW5kZXJlclxuICApOiBPcmJpdENvbnRyb2xzIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcbiAgICBpZiAocmVuZGVyKSB7XG4gICAgICBkb21FbGVtZW50ID0gcmVuZGVyLmRvbUVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRyb2wgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIGRvbUVsZW1lbnQpO1xuICAgIGNvbnRyb2wudXBkYXRlKCk7XG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRSZW5kZXJlcihcbiAgICBXOiBudW1iZXIsXG4gICAgSDogbnVtYmVyLFxuICAgIGNvbG9yOiBudW1iZXIgPSAweDAwMDAwMCxcbiAgICBpZDogc3RyaW5nID0gXCJ3ZWJnbC1jYW52YXNcIixcbiAgICBhbnRpYWxpYXM6IGJvb2xlYW4gPSB0cnVlXG4gICkge1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFdlYkdMUmVuZGVyZXIoe1xuICAgICAgY2FudmFzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTENhbnZhc0VsZW1lbnQsXG4gICAgICBhbnRpYWxpYXM6IGFudGlhbGlhcyxcbiAgICB9KTtcbiAgICB0aGlzLmluaXRSZW5kZXJlclNldHRpbmdzKHJlbmRlcmVyLCBjb2xvciwgVywgSCk7XG4gICAgcmV0dXJuIHJlbmRlcmVyO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0V2ViR1BVUmVuZGVyZXIoXG4gICAgVzogbnVtYmVyLFxuICAgIEg6IG51bWJlcixcbiAgICBjb2xvcjogbnVtYmVyID0gMHgwMDAwMDAsXG4gICAgaWQ6IHN0cmluZyA9IFwid2ViZ2wtY2FudmFzXCIsXG4gICAgYW50aWFsaWFzOiBib29sZWFuID0gdHJ1ZVxuICApIHtcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBXZWJHUFVSZW5kZXJlcih7XG4gICAgICBjYW52YXM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICAgIGFudGlhbGlhczogYW50aWFsaWFzLFxuICAgIH0pO1xuICAgIHRoaXMuaW5pdFJlbmRlcmVyU2V0dGluZ3MocmVuZGVyZXIsIGNvbG9yLCBXLCBIKTtcbiAgICByZXR1cm4gcmVuZGVyZXI7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBpbml0UmVuZGVyZXJTZXR0aW5ncyhcbiAgICByZW5kZXJlcjogV2ViR0xSZW5kZXJlciB8IFdlYkdQVVJlbmRlcmVyLFxuICAgIGNvbG9yOiBudW1iZXIsXG4gICAgVzogbnVtYmVyLFxuICAgIEg6IG51bWJlclxuICApIHtcbiAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKG5ldyBDb2xvcihjb2xvcikpO1xuICAgIHJlbmRlcmVyLnNldFNpemUoVywgSCk7XG4gICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgY29uc29sZS5sb2coXCJ0aHJlZS5qcyByZXZpc2lvbjogXCIsIFJFVklTSU9OKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdEhlbHBlcihzY2VuZTogU2NlbmUpOiB2b2lkIHtcbiAgICBjb25zdCBheGVzSGVscGVyID0gbmV3IEF4ZXNIZWxwZXIoMzApO1xuICAgIHNjZW5lLmFkZChheGVzSGVscGVyKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVuZGVyKFxuICAgIGNvbnRyb2w6IE9yYml0Q29udHJvbHMsXG4gICAgcmVuZGVyZXI6IFdlYkdMUmVuZGVyZXIgfCBXZWJHUFVSZW5kZXJlcixcbiAgICBzY2VuZTogU2NlbmUsXG4gICAgY2FtZXJhOiBDYW1lcmEsXG4gICAgb25CZWZvcmVSZW5kZXI/OiAoKSA9PiB2b2lkXG4gICkge1xuICAgIGNvbnN0IHJlbmRlcmluZyA9ICgpID0+IHtcbiAgICAgIGlmIChvbkJlZm9yZVJlbmRlcikge1xuICAgICAgICBvbkJlZm9yZVJlbmRlcigpO1xuICAgICAgfVxuICAgICAgY29udHJvbC51cGRhdGUoKTtcbiAgICAgIGlmIChyZW5kZXJlciBpbnN0YW5jZW9mIFdlYkdQVVJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlckFzeW5jKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgfVxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcmluZyk7XG4gICAgfTtcbiAgICByZW5kZXJpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYWRkUmVuZGVyZXJJbmZvKCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluZm8pO1xuICAgIHJldHVybiBpbmZvO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB1cGRhdGVSZW5kZXJlckluZm8oZGl2OiBIVE1MRGl2RWxlbWVudCwgaW5mbzogYW55KTogdm9pZCB7XG4gICAgZGl2LmlubmVyVGV4dCA9IEpTT04uc3RyaW5naWZ5KGluZm8pO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1040\n')},6105:(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n/* unused harmony export Study */\n/* harmony import */ var lil_gui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7429);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6075);\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1040);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Common__WEBPACK_IMPORTED_MODULE_0__]);\n_Common__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n/**\n * WebGLとWebGPUでのopacity値の設定の違いを確認するためのサンプルコード\n * - WebGLではopacityプロパティはガンマ補正(2.2)が適用される\n * - WebGPUではリニア値が適用される。\n *\n * Color.setRGB(alpha, 0,0,"srgb")を利用することでガンマ補正後のアルファ値が取得できるので、\n * WebGPU環境でWebGLやPhotoshopなどの環境の表示を再現する場合はこちらを利用する。\n */\nvar Study = /** @class */ (function () {\n    function Study() {\n        /**\n         * CanvasElementを、そのCanvasElementを内包したfigure要素に置き換える。figure要素にはfigcaption要素が追加される。\n         * @param canvas\n         * @param figure\n         */\n        this.addFigure = function (canvas, figure) {\n            var figureElement = document.createElement("figure");\n            var figCaption = document.createElement("figcaption");\n            figCaption.textContent = figure;\n            figureElement.appendChild(canvas);\n            figureElement.appendChild(figCaption);\n            document.body.appendChild(figureElement);\n        };\n        this.initGUI = function (materialBasic, rendererGL, rendererWebGPU) {\n            var gui = new lil_gui__WEBPACK_IMPORTED_MODULE_1__/* .GUI */ .XS();\n            var materialColor = {\n                r: 0.5,\n                g: 0.5,\n                b: 0.5,\n            };\n            var materialAlpha = {\n                a: 1,\n                useGamma: false,\n            };\n            var colorSpaceSetting = {\n                colorSpace: rendererGL.outputColorSpace,\n                workspace: three__WEBPACK_IMPORTED_MODULE_2__.ColorManagement.workingColorSpace,\n            };\n            var onChangeColor = function () {\n                materialBasic.color.setRGB(materialColor.r, materialColor.g, materialColor.b);\n            };\n            gui.add(materialColor, "r", 0, 1).onChange(onChangeColor);\n            gui.add(materialColor, "g", 0, 1).onChange(onChangeColor);\n            gui.add(materialColor, "b", 0, 1).onChange(onChangeColor);\n            var updateAlpha = function () {\n                materialBasic.opacity = materialAlpha.a;\n            };\n            gui.add(materialAlpha, "a", 0, 1).onChange(updateAlpha);\n            var updateColorSpace = function () {\n                rendererGL.outputColorSpace = rendererWebGPU.outputColorSpace =\n                    colorSpaceSetting.colorSpace;\n                three__WEBPACK_IMPORTED_MODULE_2__.ColorManagement.workingColorSpace = colorSpaceSetting.workspace;\n            };\n            gui\n                .add(colorSpaceSetting, "colorSpace", ["srgb", "srgb-linear"])\n                .onChange(updateColorSpace);\n            gui\n                .add(colorSpaceSetting, "workspace", ["srgb-linear", "display-p3-linear"])\n                .onChange(updateColorSpace);\n            onChangeColor();\n            updateAlpha();\n            updateColorSpace();\n        };\n        var scene = _Common__WEBPACK_IMPORTED_MODULE_0__/* .Common */ .G.initScene();\n        _Common__WEBPACK_IMPORTED_MODULE_0__/* .Common */ .G.initLight(scene);\n        var camera = _Common__WEBPACK_IMPORTED_MODULE_0__/* .Common */ .G.initCamera(scene, Study.W, Study.H);\n        var canvasGL = document.createElement("canvas");\n        canvasGL.id = "webGPU-canvas";\n        document.body.appendChild(canvasGL);\n        document.body.style.display = "flex"; // bodyの子要素を横並びにする\n        var renderer = _Common__WEBPACK_IMPORTED_MODULE_0__/* .Common */ .G.initRenderer(Study.W, Study.H, 0x000000);\n        var rendererGPU = _Common__WEBPACK_IMPORTED_MODULE_0__/* .Common */ .G.initWebGPURenderer(Study.W, Study.H, 0x000000, "webGPU-canvas");\n        var mat = this.initObject(scene);\n        this.addFigure(renderer.domElement, "WebGL");\n        this.addFigure(rendererGPU.domElement, "WebGPU");\n        this.initGUI(mat, renderer, rendererGPU);\n        var rendering = function () {\n            renderer.render(scene, camera);\n            rendererGPU.renderAsync(scene, camera);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n    Study.prototype.initObject = function (scene) {\n        var geo = new three__WEBPACK_IMPORTED_MODULE_2__.PlaneGeometry(30, 30);\n        var mat = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial();\n        mat.color.setRGB(1, 0, 0);\n        mat.transparent = true;\n        var mesh = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geo, mat);\n        scene.add(mesh);\n        return mat;\n    };\n    Study.W = 640;\n    Study.H = 480;\n    return Study;\n}());\n\nwindow.onload = function () {\n    var study = new Study();\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFekMsSUFBTSxTQUFTLEdBQUc7WUFDaEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDL0IsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDdkMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDO1FBQ0YsU0FBUyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBZ0JPLDBCQUFVLEdBQWxCLFVBQW1CLEtBQVk7UUFDN0IsSUFBTSxHQUFHLEdBQUcsSUFBSSxnREFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV0QyxJQUFNLEdBQUcsR0FBRyxJQUFJLG9EQUFpQixFQUFFLENBQUM7UUFDcEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQixHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFNLElBQUksR0FBRyxJQUFJLHVDQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBM0RzQixPQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ1IsT0FBQyxHQUFHLEdBQUcsQ0FBQztJQWlIakMsWUFBQztDQUFBO0FBbkhpQjtBQXFIbEIsTUFBTSxDQUFDLE1BQU0sR0FBRztJQUNkLElBQU0sS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7QUFDNUIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWVqcy1sYWIvLi9zcmMvU3R1ZHlDb2xvclNwYWNlQWxwaGEudHM/ZDVkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHVUkgfSBmcm9tIFwibGlsLWd1aVwiO1xuaW1wb3J0IHtcbiAgQ29sb3JNYW5hZ2VtZW50LFxuICBNZXNoLFxuICBNZXNoQmFzaWNNYXRlcmlhbCxcbiAgUGxhbmVHZW9tZXRyeSxcbiAgU2NlbmUsXG4gIFdlYkdMUmVuZGVyZXIsXG4gIFdvcmtpbmdDb2xvclNwYWNlLFxufSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCBXZWJHUFVSZW5kZXJlciBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3JlbmRlcmVycy93ZWJncHUvV2ViR1BVUmVuZGVyZXIuanNcIjtcbmltcG9ydCB7IENvbW1vbiB9IGZyb20gXCIuL0NvbW1vblwiO1xuXG4vKipcbiAqIFdlYkdM44GoV2ViR1BV44Gn44Gub3BhY2l0eeWApOOBruioreWumuOBrumBleOBhOOCkueiuuiqjeOBmeOCi+OBn+OCgeOBruOCteODs+ODl+ODq+OCs+ODvOODiVxuICogLSBXZWJHTOOBp+OBr29wYWNpdHnjg5fjg63jg5Hjg4bjgqPjga/jgqzjg7Pjg57oo5zmraMoMi4yKeOBjOmBqeeUqOOBleOCjOOCi1xuICogLSBXZWJHUFXjgafjga/jg6rjg4vjgqLlgKTjgYzpgannlKjjgZXjgozjgovjgIJcbiAqXG4gKiBDb2xvci5zZXRSR0IoYWxwaGEsIDAsMCxcInNyZ2JcIinjgpLliKnnlKjjgZnjgovjgZPjgajjgafjgqzjg7Pjg57oo5zmraPlvozjga7jgqLjg6vjg5XjgqHlgKTjgYzlj5blvpfjgafjgY3jgovjga7jgafjgIFcbiAqIFdlYkdQVeeSsOWig+OBp1dlYkdM44KEUGhvdG9zaG9w44Gq44Gp44Gu55Kw5aKD44Gu6KGo56S644KS5YaN54++44GZ44KL5aC05ZCI44Gv44GT44Gh44KJ44KS5Yip55So44GZ44KL44CCXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHVkeSB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVyA9IDY0MDtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBIID0gNDgwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHNjZW5lID0gQ29tbW9uLmluaXRTY2VuZSgpO1xuICAgIENvbW1vbi5pbml0TGlnaHQoc2NlbmUpO1xuICAgIGNvbnN0IGNhbWVyYSA9IENvbW1vbi5pbml0Q2FtZXJhKHNjZW5lLCBTdHVkeS5XLCBTdHVkeS5IKTtcblxuICAgIGNvbnN0IGNhbnZhc0dMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICBjYW52YXNHTC5pZCA9IFwid2ViR1BVLWNhbnZhc1wiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzR0wpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyAvLyBib2R544Gu5a2Q6KaB57Sg44KS5qiq5Lim44Gz44Gr44GZ44KLXG5cbiAgICBjb25zdCByZW5kZXJlciA9IENvbW1vbi5pbml0UmVuZGVyZXIoU3R1ZHkuVywgU3R1ZHkuSCwgMHgwMDAwMDApO1xuICAgIGNvbnN0IHJlbmRlcmVyR1BVID0gQ29tbW9uLmluaXRXZWJHUFVSZW5kZXJlcihcbiAgICAgIFN0dWR5LlcsXG4gICAgICBTdHVkeS5ILFxuICAgICAgMHgwMDAwMDAsXG4gICAgICBcIndlYkdQVS1jYW52YXNcIlxuICAgICk7XG4gICAgY29uc3QgbWF0ID0gdGhpcy5pbml0T2JqZWN0KHNjZW5lKTtcblxuICAgIHRoaXMuYWRkRmlndXJlKHJlbmRlcmVyLmRvbUVsZW1lbnQsIFwiV2ViR0xcIik7XG4gICAgdGhpcy5hZGRGaWd1cmUocmVuZGVyZXJHUFUuZG9tRWxlbWVudCwgXCJXZWJHUFVcIik7XG5cbiAgICB0aGlzLmluaXRHVUkobWF0LCByZW5kZXJlciwgcmVuZGVyZXJHUFUpO1xuXG4gICAgY29uc3QgcmVuZGVyaW5nID0gKCkgPT4ge1xuICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgcmVuZGVyZXJHUFUucmVuZGVyQXN5bmMoc2NlbmUsIGNhbWVyYSk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyaW5nKTtcbiAgICB9O1xuICAgIHJlbmRlcmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbnZhc0VsZW1lbnTjgpLjgIHjgZ3jga5DYW52YXNFbGVtZW5044KS5YaF5YyF44GX44GfZmlndXJl6KaB57Sg44Gr572u44GN5o+b44GI44KL44CCZmlndXJl6KaB57Sg44Gr44GvZmlnY2FwdGlvbuimgee0oOOBjOi/veWKoOOBleOCjOOCi+OAglxuICAgKiBAcGFyYW0gY2FudmFzXG4gICAqIEBwYXJhbSBmaWd1cmVcbiAgICovXG4gIHByaXZhdGUgYWRkRmlndXJlID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGZpZ3VyZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZmlndXJlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XG4gICAgY29uc3QgZmlnQ2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWdjYXB0aW9uXCIpO1xuICAgIGZpZ0NhcHRpb24udGV4dENvbnRlbnQgPSBmaWd1cmU7XG4gICAgZmlndXJlRWxlbWVudC5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgIGZpZ3VyZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZmlnQ2FwdGlvbik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmaWd1cmVFbGVtZW50KTtcbiAgfTtcblxuICBwcml2YXRlIGluaXRPYmplY3Qoc2NlbmU6IFNjZW5lKSB7XG4gICAgY29uc3QgZ2VvID0gbmV3IFBsYW5lR2VvbWV0cnkoMzAsIDMwKTtcblxuICAgIGNvbnN0IG1hdCA9IG5ldyBNZXNoQmFzaWNNYXRlcmlhbCgpO1xuICAgIG1hdC5jb2xvci5zZXRSR0IoMSwgMCwgMCk7XG4gICAgbWF0LnRyYW5zcGFyZW50ID0gdHJ1ZTtcbiAgICBjb25zdCBtZXNoID0gbmV3IE1lc2goZ2VvLCBtYXQpO1xuICAgIHNjZW5lLmFkZChtZXNoKTtcblxuICAgIHJldHVybiBtYXQ7XG4gIH1cblxuICBpbml0R1VJID0gKFxuICAgIG1hdGVyaWFsQmFzaWM6IE1lc2hCYXNpY01hdGVyaWFsLFxuICAgIHJlbmRlcmVyR0w6IFdlYkdMUmVuZGVyZXIsXG4gICAgcmVuZGVyZXJXZWJHUFU6IFdlYkdQVVJlbmRlcmVyXG4gICk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGd1aSA9IG5ldyBHVUkoKTtcbiAgICBjb25zdCBtYXRlcmlhbENvbG9yID0ge1xuICAgICAgcjogMC41LFxuICAgICAgZzogMC41LFxuICAgICAgYjogMC41LFxuICAgIH07XG4gICAgY29uc3QgbWF0ZXJpYWxBbHBoYSA9IHtcbiAgICAgIGE6IDEsXG4gICAgICB1c2VHYW1tYTogZmFsc2UsXG4gICAgfTtcbiAgICBjb25zdCBjb2xvclNwYWNlU2V0dGluZyA9IHtcbiAgICAgIGNvbG9yU3BhY2U6IHJlbmRlcmVyR0wub3V0cHV0Q29sb3JTcGFjZSxcbiAgICAgIHdvcmtzcGFjZTogQ29sb3JNYW5hZ2VtZW50LndvcmtpbmdDb2xvclNwYWNlLFxuICAgIH07XG5cbiAgICBjb25zdCBvbkNoYW5nZUNvbG9yID0gKCkgPT4ge1xuICAgICAgbWF0ZXJpYWxCYXNpYy5jb2xvci5zZXRSR0IoXG4gICAgICAgIG1hdGVyaWFsQ29sb3IucixcbiAgICAgICAgbWF0ZXJpYWxDb2xvci5nLFxuICAgICAgICBtYXRlcmlhbENvbG9yLmJcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGd1aS5hZGQobWF0ZXJpYWxDb2xvciwgXCJyXCIsIDAsIDEpLm9uQ2hhbmdlKG9uQ2hhbmdlQ29sb3IpO1xuICAgIGd1aS5hZGQobWF0ZXJpYWxDb2xvciwgXCJnXCIsIDAsIDEpLm9uQ2hhbmdlKG9uQ2hhbmdlQ29sb3IpO1xuICAgIGd1aS5hZGQobWF0ZXJpYWxDb2xvciwgXCJiXCIsIDAsIDEpLm9uQ2hhbmdlKG9uQ2hhbmdlQ29sb3IpO1xuXG4gICAgY29uc3QgdXBkYXRlQWxwaGEgPSAoKSA9PiB7XG4gICAgICBtYXRlcmlhbEJhc2ljLm9wYWNpdHkgPSBtYXRlcmlhbEFscGhhLmE7XG4gICAgfTtcbiAgICBndWkuYWRkKG1hdGVyaWFsQWxwaGEsIFwiYVwiLCAwLCAxKS5vbkNoYW5nZSh1cGRhdGVBbHBoYSk7XG5cbiAgICBjb25zdCB1cGRhdGVDb2xvclNwYWNlID0gKCkgPT4ge1xuICAgICAgcmVuZGVyZXJHTC5vdXRwdXRDb2xvclNwYWNlID0gcmVuZGVyZXJXZWJHUFUub3V0cHV0Q29sb3JTcGFjZSA9XG4gICAgICAgIGNvbG9yU3BhY2VTZXR0aW5nLmNvbG9yU3BhY2U7XG4gICAgICBDb2xvck1hbmFnZW1lbnQud29ya2luZ0NvbG9yU3BhY2UgPSBjb2xvclNwYWNlU2V0dGluZy53b3Jrc3BhY2U7XG4gICAgfTtcbiAgICBndWlcbiAgICAgIC5hZGQoY29sb3JTcGFjZVNldHRpbmcsIFwiY29sb3JTcGFjZVwiLCBbXCJzcmdiXCIsIFwic3JnYi1saW5lYXJcIl0pXG4gICAgICAub25DaGFuZ2UodXBkYXRlQ29sb3JTcGFjZSk7XG4gICAgZ3VpXG4gICAgICAuYWRkKGNvbG9yU3BhY2VTZXR0aW5nLCBcIndvcmtzcGFjZVwiLCBbXCJzcmdiLWxpbmVhclwiLCBcImRpc3BsYXktcDMtbGluZWFyXCJdKVxuICAgICAgLm9uQ2hhbmdlKHVwZGF0ZUNvbG9yU3BhY2UpO1xuXG4gICAgb25DaGFuZ2VDb2xvcigpO1xuICAgIHVwZGF0ZUFscGhhKCk7XG4gICAgdXBkYXRlQ29sb3JTcGFjZSgpO1xuICB9O1xufVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBjb25zdCBzdHVkeSA9IG5ldyBTdHVkeSgpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6105\n')}},__webpack_module_cache__={},webpackQueues,webpackExports,webpackError,resolveQueue,deferred;function __webpack_require__(Q){var e=__webpack_module_cache__[Q];if(void 0!==e)return e.exports;var U=__webpack_module_cache__[Q]={id:Q,loaded:!1,exports:{}};return __webpack_modules__[Q].call(U.exports,U,U.exports,__webpack_require__),U.loaded=!0,U.exports}__webpack_require__.m=__webpack_modules__,webpackQueues="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",webpackExports="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",webpackError="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",resolveQueue=Q=>{Q&&Q.d<1&&(Q.d=1,Q.forEach((Q=>Q.r--)),Q.forEach((Q=>Q.r--?Q.r++:Q())))},__webpack_require__.a=(Q,e,U)=>{var F;U&&((F=[]).d=-1);var B,n,c,s=new Set,r=Q.exports,a=new Promise(((Q,e)=>{c=e,n=Q}));a[webpackExports]=r,a[webpackQueues]=Q=>(F&&Q(F),s.forEach(Q),a.catch((Q=>{}))),Q.exports=a,e((Q=>{var e;B=(Q=>Q.map((Q=>{if(null!==Q&&"object"==typeof Q){if(Q[webpackQueues])return Q;if(Q.then){var e=[];e.d=0,Q.then((Q=>{U[webpackExports]=Q,resolveQueue(e)}),(Q=>{U[webpackError]=Q,resolveQueue(e)}));var U={};return U[webpackQueues]=Q=>Q(e),U}}var F={};return F[webpackQueues]=Q=>{},F[webpackExports]=Q,F})))(Q);var U=()=>B.map((Q=>{if(Q[webpackError])throw Q[webpackError];return Q[webpackExports]})),n=new Promise((Q=>{(e=()=>Q(U)).r=0;var n=Q=>Q!==F&&!s.has(Q)&&(s.add(Q),Q&&!Q.d&&(e.r++,Q.push(e)));B.map((Q=>Q[webpackQueues](n)))}));return e.r?n:U()}),(Q=>(Q?c(a[webpackError]=Q):n(r),resolveQueue(F)))),F&&F.d<0&&(F.d=0)},deferred=[],__webpack_require__.O=(Q,e,U,F)=>{if(!e){var B=1/0;for(r=0;r<deferred.length;r++){for(var[e,U,F]=deferred[r],n=!0,c=0;c<e.length;c++)(!1&F||B>=F)&&Object.keys(__webpack_require__.O).every((Q=>__webpack_require__.O[Q](e[c])))?e.splice(c--,1):(n=!1,F<B&&(B=F));if(n){deferred.splice(r--,1);var s=U();void 0!==s&&(Q=s)}}return Q}F=F||0;for(var r=deferred.length;r>0&&deferred[r-1][2]>F;r--)deferred[r]=deferred[r-1];deferred[r]=[e,U,F]},__webpack_require__.n=Q=>{var e=Q&&Q.__esModule?()=>Q.default:()=>Q;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(Q,e)=>{for(var U in e)__webpack_require__.o(e,U)&&!__webpack_require__.o(Q,U)&&Object.defineProperty(Q,U,{enumerable:!0,get:e[U]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(Q){if("object"==typeof window)return window}}(),__webpack_require__.o=(Q,e)=>Object.prototype.hasOwnProperty.call(Q,e),__webpack_require__.r=Q=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},__webpack_require__.nmd=Q=>(Q.paths=[],Q.children||(Q.children=[]),Q),__webpack_require__.j=173,(()=>{var Q={173:0};__webpack_require__.O.j=e=>0===Q[e];var e=(e,U)=>{var F,B,[n,c,s]=U,r=0;if(n.some((e=>0!==Q[e]))){for(F in c)__webpack_require__.o(c,F)&&(__webpack_require__.m[F]=c[F]);if(s)var a=s(__webpack_require__)}for(e&&e(U);r<n.length;r++)B=n[r],__webpack_require__.o(Q,B)&&Q[B]&&Q[B][0](),Q[B]=0;return __webpack_require__.O(a)},U=self.webpackChunkthreejs_lab=self.webpackChunkthreejs_lab||[];U.forEach(e.bind(null,0)),U.push=e.bind(null,U.push.bind(U))})();var __webpack_exports__=__webpack_require__.O(void 0,[736],(()=>__webpack_require__(6105)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();