(()=>{"use strict";var __webpack_modules__={1040:(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   G: () => (/* binding */ Common)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6075);\n/* harmony import */ var three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5481);\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8012);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__]);\nthree_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nvar Common = /** @class */ (function () {\n    function Common() {\n    }\n    Common.initScene = function () {\n        var scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        return scene;\n    };\n    Common.initLight = function (scene) {\n        var ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    };\n    Common.initCamera = function (scene, W, H, near, far) {\n        if (near === void 0) { near = 1; }\n        if (far === void 0) { far = 400; }\n        var camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(45, W / H, near, far);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    };\n    Common.initControl = function (camera, render) {\n        var domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        var control = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__/* .OrbitControls */ .z(camera, domElement);\n        control.update();\n        return control;\n    };\n    Common.initRenderer = function (W, H, color, id, antialias) {\n        if (color === void 0) { color = 0x000000; }\n        if (id === void 0) { id = "webgl-canvas"; }\n        if (antialias === void 0) { antialias = true; }\n        var renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        this.initRendererSettings(renderer, color, W, H);\n        return renderer;\n    };\n    Common.initWebGPURenderer = function (W, H, color, id, antialias) {\n        if (color === void 0) { color = 0x000000; }\n        if (id === void 0) { id = "webgl-canvas"; }\n        if (antialias === void 0) { antialias = true; }\n        var renderer = new three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        this.initRendererSettings(renderer, color, W, H);\n        return renderer;\n    };\n    Common.initRendererSettings = function (renderer, color, W, H) {\n        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__.Color(color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        console.log("three.js revision: ", three__WEBPACK_IMPORTED_MODULE_0__.REVISION);\n    };\n    Common.initHelper = function (scene) {\n        var axesHelper = new three__WEBPACK_IMPORTED_MODULE_0__.AxesHelper(30);\n        scene.add(axesHelper);\n    };\n    Common.render = function (control, renderer, scene, camera, onBeforeRender) {\n        var rendering = function () {\n            if (onBeforeRender) {\n                onBeforeRender();\n            }\n            control.update();\n            if (renderer instanceof three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z) {\n                renderer.renderAsync(scene, camera);\n            }\n            else {\n                renderer.render(scene, camera);\n            }\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    };\n    Common.addRendererInfo = function () {\n        var info = document.createElement("div");\n        document.body.appendChild(info);\n        return info;\n    };\n    Common.updateRendererInfo = function (div, info) {\n        div.innerText = JSON.stringify(info);\n    };\n    return Common;\n}());\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlanMtbGFiLy4vc3JjL0NvbW1vbi50cz83MzMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFtYmllbnRMaWdodCxcbiAgQXhlc0hlbHBlcixcbiAgQ2FtZXJhLFxuICBDb2xvcixcbiAgUGVyc3BlY3RpdmVDYW1lcmEsXG4gIFNjZW5lLFxuICBXZWJHTFJlbmRlcmVyLFxuICBSRVZJU0lPTixcbn0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgV2ViR1BVUmVuZGVyZXIgZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9yZW5kZXJlcnMvd2ViZ3B1L1dlYkdQVVJlbmRlcmVyLmpzXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBDb21tb24ge1xuICBwdWJsaWMgc3RhdGljIGluaXRTY2VuZSgpIHtcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBTY2VuZSgpO1xuICAgIHJldHVybiBzY2VuZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdExpZ2h0KHNjZW5lKSB7XG4gICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IEFtYmllbnRMaWdodCgweGZmZmZmZiwgMS4wKTtcbiAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcbiAgICByZXR1cm4gYW1iaWVudExpZ2h0O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0Q2FtZXJhKFxuICAgIHNjZW5lOiBTY2VuZSxcbiAgICBXOiBudW1iZXIsXG4gICAgSDogbnVtYmVyLFxuICAgIG5lYXIgPSAxLFxuICAgIGZhciA9IDQwMFxuICApOiBQZXJzcGVjdGl2ZUNhbWVyYSB7XG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCBXIC8gSCwgbmVhciwgZmFyKTtcbiAgICBjYW1lcmEucG9zaXRpb24uc2V0KDAsIDAsIDEwMCk7XG4gICAgY2FtZXJhLnVwZGF0ZU1hdHJpeFdvcmxkKGZhbHNlKTtcbiAgICBzY2VuZS5hZGQoY2FtZXJhKTtcbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0Q29udHJvbChcbiAgICBjYW1lcmE6IENhbWVyYSxcbiAgICByZW5kZXI6IFdlYkdMUmVuZGVyZXIgfCBXZWJHUFVSZW5kZXJlclxuICApOiBPcmJpdENvbnRyb2xzIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcbiAgICBpZiAocmVuZGVyKSB7XG4gICAgICBkb21FbGVtZW50ID0gcmVuZGVyLmRvbUVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRyb2wgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIGRvbUVsZW1lbnQpO1xuICAgIGNvbnRyb2wudXBkYXRlKCk7XG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRSZW5kZXJlcihcbiAgICBXOiBudW1iZXIsXG4gICAgSDogbnVtYmVyLFxuICAgIGNvbG9yOiBudW1iZXIgPSAweDAwMDAwMCxcbiAgICBpZDogc3RyaW5nID0gXCJ3ZWJnbC1jYW52YXNcIixcbiAgICBhbnRpYWxpYXM6IGJvb2xlYW4gPSB0cnVlXG4gICkge1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFdlYkdMUmVuZGVyZXIoe1xuICAgICAgY2FudmFzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTENhbnZhc0VsZW1lbnQsXG4gICAgICBhbnRpYWxpYXM6IGFudGlhbGlhcyxcbiAgICB9KTtcbiAgICB0aGlzLmluaXRSZW5kZXJlclNldHRpbmdzKHJlbmRlcmVyLCBjb2xvciwgVywgSCk7XG4gICAgcmV0dXJuIHJlbmRlcmVyO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0V2ViR1BVUmVuZGVyZXIoXG4gICAgVzogbnVtYmVyLFxuICAgIEg6IG51bWJlcixcbiAgICBjb2xvcjogbnVtYmVyID0gMHgwMDAwMDAsXG4gICAgaWQ6IHN0cmluZyA9IFwid2ViZ2wtY2FudmFzXCIsXG4gICAgYW50aWFsaWFzOiBib29sZWFuID0gdHJ1ZVxuICApIHtcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBXZWJHUFVSZW5kZXJlcih7XG4gICAgICBjYW52YXM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICAgIGFudGlhbGlhczogYW50aWFsaWFzLFxuICAgIH0pO1xuICAgIHRoaXMuaW5pdFJlbmRlcmVyU2V0dGluZ3MocmVuZGVyZXIsIGNvbG9yLCBXLCBIKTtcbiAgICByZXR1cm4gcmVuZGVyZXI7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBpbml0UmVuZGVyZXJTZXR0aW5ncyhcbiAgICByZW5kZXJlcjogV2ViR0xSZW5kZXJlciB8IFdlYkdQVVJlbmRlcmVyLFxuICAgIGNvbG9yOiBudW1iZXIsXG4gICAgVzogbnVtYmVyLFxuICAgIEg6IG51bWJlclxuICApIHtcbiAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKG5ldyBDb2xvcihjb2xvcikpO1xuICAgIHJlbmRlcmVyLnNldFNpemUoVywgSCk7XG4gICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgY29uc29sZS5sb2coXCJ0aHJlZS5qcyByZXZpc2lvbjogXCIsIFJFVklTSU9OKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdEhlbHBlcihzY2VuZTogU2NlbmUpOiB2b2lkIHtcbiAgICBjb25zdCBheGVzSGVscGVyID0gbmV3IEF4ZXNIZWxwZXIoMzApO1xuICAgIHNjZW5lLmFkZChheGVzSGVscGVyKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVuZGVyKFxuICAgIGNvbnRyb2w6IE9yYml0Q29udHJvbHMsXG4gICAgcmVuZGVyZXI6IFdlYkdMUmVuZGVyZXIgfCBXZWJHUFVSZW5kZXJlcixcbiAgICBzY2VuZTogU2NlbmUsXG4gICAgY2FtZXJhOiBDYW1lcmEsXG4gICAgb25CZWZvcmVSZW5kZXI/OiAoKSA9PiB2b2lkXG4gICkge1xuICAgIGNvbnN0IHJlbmRlcmluZyA9ICgpID0+IHtcbiAgICAgIGlmIChvbkJlZm9yZVJlbmRlcikge1xuICAgICAgICBvbkJlZm9yZVJlbmRlcigpO1xuICAgICAgfVxuICAgICAgY29udHJvbC51cGRhdGUoKTtcbiAgICAgIGlmIChyZW5kZXJlciBpbnN0YW5jZW9mIFdlYkdQVVJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlckFzeW5jKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgfVxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcmluZyk7XG4gICAgfTtcbiAgICByZW5kZXJpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYWRkUmVuZGVyZXJJbmZvKCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluZm8pO1xuICAgIHJldHVybiBpbmZvO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB1cGRhdGVSZW5kZXJlckluZm8oZGl2OiBIVE1MRGl2RWxlbWVudCwgaW5mbzogYW55KTogdm9pZCB7XG4gICAgZGl2LmlubmVyVGV4dCA9IEpTT04uc3RyaW5naWZ5KGluZm8pO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1040\n')},5191:(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n/* unused harmony export Study */\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6075);\n/* harmony import */ var three_examples_jsm_nodes_Nodes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3764);\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1040);\n/* harmony import */ var lil_gui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7429);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Common__WEBPACK_IMPORTED_MODULE_1__]);\n_Common__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nvar Study = /** @class */ (function () {\n    function Study() {\n        var scene = _Common__WEBPACK_IMPORTED_MODULE_1__/* .Common */ .G.initScene();\n        _Common__WEBPACK_IMPORTED_MODULE_1__/* .Common */ .G.initLight(scene);\n        var camera = _Common__WEBPACK_IMPORTED_MODULE_1__/* .Common */ .G.initCamera(scene, Study.W, Study.H);\n        var renderer = _Common__WEBPACK_IMPORTED_MODULE_1__/* .Common */ .G.initWebGPURenderer(Study.W, Study.H);\n        var control = _Common__WEBPACK_IMPORTED_MODULE_1__/* .Common */ .G.initControl(camera, renderer);\n        _Common__WEBPACK_IMPORTED_MODULE_1__/* .Common */ .G.initHelper(scene);\n        this.initObject(scene);\n        _Common__WEBPACK_IMPORTED_MODULE_1__/* .Common */ .G.render(control, renderer, scene, camera);\n    }\n    Study.prototype.initObject = function (scene) {\n        var geo = new three__WEBPACK_IMPORTED_MODULE_2__.TorusGeometry(10, 4, 16, 100);\n        var mat = new three_examples_jsm_nodes_Nodes_js__WEBPACK_IMPORTED_MODULE_0__/* .MeshBasicNodeMaterial */ .AEy();\n        var bump = (0,three_examples_jsm_nodes_Nodes_js__WEBPACK_IMPORTED_MODULE_0__/* .uniform */ .e5)(1.0);\n        //positionLocalがGLSLのtransformedと同じ、加工前のジオメトリ座標\n        mat.positionNode = three_examples_jsm_nodes_Nodes_js__WEBPACK_IMPORTED_MODULE_0__/* .positionLocal */ .Yf0.add(three_examples_jsm_nodes_Nodes_js__WEBPACK_IMPORTED_MODULE_0__/* .normalLocal */ .qwP.mul((0,three_examples_jsm_nodes_Nodes_js__WEBPACK_IMPORTED_MODULE_0__/* .vec3 */ .R3C)(bump)));\n        var mesh = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geo, mat);\n        scene.add(mesh);\n        this.initGUI(bump);\n    };\n    Study.prototype.initGUI = function (uniformBump) {\n        var gui = new lil_gui__WEBPACK_IMPORTED_MODULE_3__/* .GUI */ .XS();\n        var bumpObj = { bump: uniformBump.value };\n        gui.add(bumpObj, "bump", -10, 10, 0.1).onChange(function (v) {\n            uniformBump.value = v;\n        });\n    };\n    Study.W = 640;\n    Study.H = 480;\n    return Study;\n}());\n\nwindow.onload = function () {\n    var study = new Study();\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTE5MS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQVNSO0FBQ1Q7QUFDSjtBQUU5QjtJQUlFO1FBQ0UsSUFBTSxLQUFLLEdBQUcsb0RBQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQyxvREFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFNLE1BQU0sR0FBRyxvREFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUQsSUFBTSxRQUFRLEdBQUcsb0RBQU0sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFNLE9BQU8sR0FBRyxvREFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDckQsb0RBQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixvREFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU8sMEJBQVUsR0FBbEIsVUFBbUIsS0FBWTtRQUM3QixJQUFNLEdBQUcsR0FBRyxJQUFJLGdEQUFhLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUMsSUFBTSxHQUFHLEdBQUcsSUFBSSwrRkFBcUIsRUFBRSxDQUFDO1FBRXhDLElBQU0sSUFBSSxHQUFHLG9GQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFMUIsK0NBQStDO1FBQy9DLEdBQUcsQ0FBQyxZQUFZLEdBQUcsdUZBQWEsQ0FBQyxHQUFHLENBQUMscUZBQVcsQ0FBQyxHQUFHLENBQUMsa0ZBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBTSxJQUFJLEdBQUcsSUFBSSx1Q0FBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVPLHVCQUFPLEdBQWYsVUFBZ0IsV0FBa0Q7UUFDaEUsSUFBTSxHQUFHLEdBQUcsSUFBSSxrREFBRyxFQUFFLENBQUM7UUFDdEIsSUFBTSxPQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQUMsQ0FBQztZQUNoRCxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFuQ3NCLE9BQUMsR0FBRyxHQUFHLENBQUM7SUFDUixPQUFDLEdBQUcsR0FBRyxDQUFDO0lBbUNqQyxZQUFDO0NBQUE7QUFyQ2lCO0FBdUNsQixNQUFNLENBQUMsTUFBTSxHQUFHO0lBQ2QsSUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUM1QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJlZWpzLWxhYi8uL3NyYy9TdHVkeU5vZGVNYXRlcmlhbF9CdW1wLnRzPzAwODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzaCwgU2NlbmUsIFRvcnVzR2VvbWV0cnkgfSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7XG4gIE1lc2hCYXNpY05vZGVNYXRlcmlhbCxcbiAgbm9ybWFsTG9jYWwsXG4gIHBvc2l0aW9uTG9jYWwsXG4gIHVuaWZvcm0sXG4gIHZlYzMsXG4gIFNoYWRlck5vZGVPYmplY3QsXG4gIFVuaWZvcm1Ob2RlLFxufSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL25vZGVzL05vZGVzLmpzXCI7XG5pbXBvcnQgeyBDb21tb24gfSBmcm9tIFwiLi9Db21tb25cIjtcbmltcG9ydCB7IEdVSSB9IGZyb20gXCJsaWwtZ3VpXCI7XG5cbmV4cG9ydCBjbGFzcyBTdHVkeSB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVyA9IDY0MDtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBIID0gNDgwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHNjZW5lID0gQ29tbW9uLmluaXRTY2VuZSgpO1xuICAgIENvbW1vbi5pbml0TGlnaHQoc2NlbmUpO1xuICAgIGNvbnN0IGNhbWVyYSA9IENvbW1vbi5pbml0Q2FtZXJhKHNjZW5lLCBTdHVkeS5XLCBTdHVkeS5IKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gQ29tbW9uLmluaXRXZWJHUFVSZW5kZXJlcihTdHVkeS5XLCBTdHVkeS5IKTtcbiAgICBjb25zdCBjb250cm9sID0gQ29tbW9uLmluaXRDb250cm9sKGNhbWVyYSwgcmVuZGVyZXIpO1xuICAgIENvbW1vbi5pbml0SGVscGVyKHNjZW5lKTtcbiAgICB0aGlzLmluaXRPYmplY3Qoc2NlbmUpO1xuICAgIENvbW1vbi5yZW5kZXIoY29udHJvbCwgcmVuZGVyZXIsIHNjZW5lLCBjYW1lcmEpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0T2JqZWN0KHNjZW5lOiBTY2VuZSk6IHZvaWQge1xuICAgIGNvbnN0IGdlbyA9IG5ldyBUb3J1c0dlb21ldHJ5KDEwLCA0LCAxNiwgMTAwKTtcbiAgICBjb25zdCBtYXQgPSBuZXcgTWVzaEJhc2ljTm9kZU1hdGVyaWFsKCk7XG5cbiAgICBjb25zdCBidW1wID0gdW5pZm9ybSgxLjApO1xuXG4gICAgLy9wb3NpdGlvbkxvY2Fs44GMR0xTTOOBrnRyYW5zZm9ybWVk44Go5ZCM44GY44CB5Yqg5bel5YmN44Gu44K444Kq44Oh44OI44Oq5bqn5qiZXG4gICAgbWF0LnBvc2l0aW9uTm9kZSA9IHBvc2l0aW9uTG9jYWwuYWRkKG5vcm1hbExvY2FsLm11bCh2ZWMzKGJ1bXApKSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBNZXNoKGdlbywgbWF0KTtcbiAgICBzY2VuZS5hZGQobWVzaCk7XG5cbiAgICB0aGlzLmluaXRHVUkoYnVtcCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRHVUkodW5pZm9ybUJ1bXA6IFNoYWRlck5vZGVPYmplY3Q8VW5pZm9ybU5vZGU8bnVtYmVyPj4pOiB2b2lkIHtcbiAgICBjb25zdCBndWkgPSBuZXcgR1VJKCk7XG4gICAgY29uc3QgYnVtcE9iaiA9IHsgYnVtcDogdW5pZm9ybUJ1bXAudmFsdWUgfTtcbiAgICBndWkuYWRkKGJ1bXBPYmosIFwiYnVtcFwiLCAtMTAsIDEwLCAwLjEpLm9uQ2hhbmdlKCh2KSA9PiB7XG4gICAgICB1bmlmb3JtQnVtcC52YWx1ZSA9IHY7XG4gICAgfSk7XG4gIH1cbn1cblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgY29uc3Qgc3R1ZHkgPSBuZXcgU3R1ZHkoKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5191\n')}},__webpack_module_cache__={},webpackQueues,webpackExports,webpackError,resolveQueue,deferred;function __webpack_require__(e){var Q=__webpack_module_cache__[e];if(void 0!==Q)return Q.exports;var U=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(U.exports,U,U.exports,__webpack_require__),U.loaded=!0,U.exports}__webpack_require__.m=__webpack_modules__,webpackQueues="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",webpackExports="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",webpackError="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",resolveQueue=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},__webpack_require__.a=(e,Q,U)=>{var _;U&&((_=[]).d=-1);var B,F,n,r=new Set,s=e.exports,c=new Promise(((e,Q)=>{n=Q,F=e}));c[webpackExports]=s,c[webpackQueues]=e=>(_&&e(_),r.forEach(e),c.catch((e=>{}))),e.exports=c,Q((e=>{var Q;B=(e=>e.map((e=>{if(null!==e&&"object"==typeof e){if(e[webpackQueues])return e;if(e.then){var Q=[];Q.d=0,e.then((e=>{U[webpackExports]=e,resolveQueue(Q)}),(e=>{U[webpackError]=e,resolveQueue(Q)}));var U={};return U[webpackQueues]=e=>e(Q),U}}var _={};return _[webpackQueues]=e=>{},_[webpackExports]=e,_})))(e);var U=()=>B.map((e=>{if(e[webpackError])throw e[webpackError];return e[webpackExports]})),F=new Promise((e=>{(Q=()=>e(U)).r=0;var F=e=>e!==_&&!r.has(e)&&(r.add(e),e&&!e.d&&(Q.r++,e.push(Q)));B.map((e=>e[webpackQueues](F)))}));return Q.r?F:U()}),(e=>(e?n(c[webpackError]=e):F(s),resolveQueue(_)))),_&&_.d<0&&(_.d=0)},deferred=[],__webpack_require__.O=(e,Q,U,_)=>{if(!Q){var B=1/0;for(s=0;s<deferred.length;s++){for(var[Q,U,_]=deferred[s],F=!0,n=0;n<Q.length;n++)(!1&_||B>=_)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](Q[n])))?Q.splice(n--,1):(F=!1,_<B&&(B=_));if(F){deferred.splice(s--,1);var r=U();void 0!==r&&(e=r)}}return e}_=_||0;for(var s=deferred.length;s>0&&deferred[s-1][2]>_;s--)deferred[s]=deferred[s-1];deferred[s]=[Q,U,_]},__webpack_require__.n=e=>{var Q=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(Q,{a:Q}),Q},__webpack_require__.d=(e,Q)=>{for(var U in Q)__webpack_require__.o(Q,U)&&!__webpack_require__.o(e,U)&&Object.defineProperty(e,U,{enumerable:!0,get:Q[U]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,Q)=>Object.prototype.hasOwnProperty.call(e,Q),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),__webpack_require__.j=63,(()=>{var e={63:0};__webpack_require__.O.j=Q=>0===e[Q];var Q=(Q,U)=>{var _,B,[F,n,r]=U,s=0;if(F.some((Q=>0!==e[Q]))){for(_ in n)__webpack_require__.o(n,_)&&(__webpack_require__.m[_]=n[_]);if(r)var c=r(__webpack_require__)}for(Q&&Q(U);s<F.length;s++)B=F[s],__webpack_require__.o(e,B)&&e[B]&&e[B][0](),e[B]=0;return __webpack_require__.O(c)},U=self.webpackChunkthreejs_lab=self.webpackChunkthreejs_lab||[];U.forEach(Q.bind(null,0)),U.push=Q.bind(null,U.push.bind(U))})();var __webpack_exports__=__webpack_require__.O(void 0,[736],(()=>__webpack_require__(5191)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();