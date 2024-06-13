(()=>{"use strict";var __webpack_modules__={1040:(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   G: () => (/* binding */ Common)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6075);\n/* harmony import */ var three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5481);\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8012);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__]);\nthree_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nvar Common = /** @class */ (function () {\n    function Common() {\n    }\n    Common.initScene = function () {\n        var scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        return scene;\n    };\n    Common.initLight = function (scene) {\n        var ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    };\n    Common.initCamera = function (scene, W, H, near, far) {\n        if (near === void 0) { near = 1; }\n        if (far === void 0) { far = 400; }\n        var camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(45, W / H, near, far);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    };\n    Common.initControl = function (camera, render) {\n        var domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        var control = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__/* .OrbitControls */ .z(camera, domElement);\n        control.update();\n        return control;\n    };\n    Common.initRenderer = function (W, H, color, id, antialias) {\n        if (color === void 0) { color = 0x000000; }\n        if (id === void 0) { id = "webgl-canvas"; }\n        if (antialias === void 0) { antialias = true; }\n        var renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        this.initRendererSettings(renderer, color, W, H);\n        return renderer;\n    };\n    Common.initWebGPURenderer = function (W, H, color, id, antialias) {\n        if (color === void 0) { color = 0x000000; }\n        if (id === void 0) { id = "webgl-canvas"; }\n        if (antialias === void 0) { antialias = true; }\n        var renderer = new three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        this.initRendererSettings(renderer, color, W, H);\n        return renderer;\n    };\n    Common.initRendererSettings = function (renderer, color, W, H) {\n        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__.Color(color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        console.log("three.js revision: ", three__WEBPACK_IMPORTED_MODULE_0__.REVISION);\n    };\n    Common.initHelper = function (scene) {\n        var axesHelper = new three__WEBPACK_IMPORTED_MODULE_0__.AxesHelper(30);\n        scene.add(axesHelper);\n    };\n    Common.render = function (control, renderer, scene, camera, onBeforeRender) {\n        var rendering = function () {\n            if (onBeforeRender) {\n                onBeforeRender();\n            }\n            control.update();\n            if (renderer instanceof three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z) {\n                renderer.renderAsync(scene, camera);\n            }\n            else {\n                renderer.render(scene, camera);\n            }\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    };\n    Common.addRendererInfo = function () {\n        var info = document.createElement("div");\n        document.body.appendChild(info);\n        return info;\n    };\n    Common.updateRendererInfo = function (div, info) {\n        div.innerText = JSON.stringify(info);\n    };\n    return Common;\n}());\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlanMtbGFiLy4vc3JjL0NvbW1vbi50cz83MzMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFtYmllbnRMaWdodCxcbiAgQXhlc0hlbHBlcixcbiAgQ2FtZXJhLFxuICBDb2xvcixcbiAgUGVyc3BlY3RpdmVDYW1lcmEsXG4gIFNjZW5lLFxuICBXZWJHTFJlbmRlcmVyLFxuICBSRVZJU0lPTixcbn0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgV2ViR1BVUmVuZGVyZXIgZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9yZW5kZXJlcnMvd2ViZ3B1L1dlYkdQVVJlbmRlcmVyLmpzXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBDb21tb24ge1xuICBwdWJsaWMgc3RhdGljIGluaXRTY2VuZSgpIHtcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBTY2VuZSgpO1xuICAgIHJldHVybiBzY2VuZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdExpZ2h0KHNjZW5lKSB7XG4gICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IEFtYmllbnRMaWdodCgweGZmZmZmZiwgMS4wKTtcbiAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcbiAgICByZXR1cm4gYW1iaWVudExpZ2h0O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0Q2FtZXJhKFxuICAgIHNjZW5lOiBTY2VuZSxcbiAgICBXOiBudW1iZXIsXG4gICAgSDogbnVtYmVyLFxuICAgIG5lYXIgPSAxLFxuICAgIGZhciA9IDQwMFxuICApOiBQZXJzcGVjdGl2ZUNhbWVyYSB7XG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCBXIC8gSCwgbmVhciwgZmFyKTtcbiAgICBjYW1lcmEucG9zaXRpb24uc2V0KDAsIDAsIDEwMCk7XG4gICAgY2FtZXJhLnVwZGF0ZU1hdHJpeFdvcmxkKGZhbHNlKTtcbiAgICBzY2VuZS5hZGQoY2FtZXJhKTtcbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0Q29udHJvbChcbiAgICBjYW1lcmE6IENhbWVyYSxcbiAgICByZW5kZXI6IFdlYkdMUmVuZGVyZXIgfCBXZWJHUFVSZW5kZXJlclxuICApOiBPcmJpdENvbnRyb2xzIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcbiAgICBpZiAocmVuZGVyKSB7XG4gICAgICBkb21FbGVtZW50ID0gcmVuZGVyLmRvbUVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRyb2wgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIGRvbUVsZW1lbnQpO1xuICAgIGNvbnRyb2wudXBkYXRlKCk7XG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRSZW5kZXJlcihcbiAgICBXOiBudW1iZXIsXG4gICAgSDogbnVtYmVyLFxuICAgIGNvbG9yOiBudW1iZXIgPSAweDAwMDAwMCxcbiAgICBpZDogc3RyaW5nID0gXCJ3ZWJnbC1jYW52YXNcIixcbiAgICBhbnRpYWxpYXM6IGJvb2xlYW4gPSB0cnVlXG4gICkge1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFdlYkdMUmVuZGVyZXIoe1xuICAgICAgY2FudmFzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTENhbnZhc0VsZW1lbnQsXG4gICAgICBhbnRpYWxpYXM6IGFudGlhbGlhcyxcbiAgICB9KTtcbiAgICB0aGlzLmluaXRSZW5kZXJlclNldHRpbmdzKHJlbmRlcmVyLCBjb2xvciwgVywgSCk7XG4gICAgcmV0dXJuIHJlbmRlcmVyO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0V2ViR1BVUmVuZGVyZXIoXG4gICAgVzogbnVtYmVyLFxuICAgIEg6IG51bWJlcixcbiAgICBjb2xvcjogbnVtYmVyID0gMHgwMDAwMDAsXG4gICAgaWQ6IHN0cmluZyA9IFwid2ViZ2wtY2FudmFzXCIsXG4gICAgYW50aWFsaWFzOiBib29sZWFuID0gdHJ1ZVxuICApIHtcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBXZWJHUFVSZW5kZXJlcih7XG4gICAgICBjYW52YXM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICAgIGFudGlhbGlhczogYW50aWFsaWFzLFxuICAgIH0pO1xuICAgIHRoaXMuaW5pdFJlbmRlcmVyU2V0dGluZ3MocmVuZGVyZXIsIGNvbG9yLCBXLCBIKTtcbiAgICByZXR1cm4gcmVuZGVyZXI7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBpbml0UmVuZGVyZXJTZXR0aW5ncyhcbiAgICByZW5kZXJlcjogV2ViR0xSZW5kZXJlciB8IFdlYkdQVVJlbmRlcmVyLFxuICAgIGNvbG9yOiBudW1iZXIsXG4gICAgVzogbnVtYmVyLFxuICAgIEg6IG51bWJlclxuICApIHtcbiAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKG5ldyBDb2xvcihjb2xvcikpO1xuICAgIHJlbmRlcmVyLnNldFNpemUoVywgSCk7XG4gICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgY29uc29sZS5sb2coXCJ0aHJlZS5qcyByZXZpc2lvbjogXCIsIFJFVklTSU9OKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdEhlbHBlcihzY2VuZTogU2NlbmUpOiB2b2lkIHtcbiAgICBjb25zdCBheGVzSGVscGVyID0gbmV3IEF4ZXNIZWxwZXIoMzApO1xuICAgIHNjZW5lLmFkZChheGVzSGVscGVyKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVuZGVyKFxuICAgIGNvbnRyb2w6IE9yYml0Q29udHJvbHMsXG4gICAgcmVuZGVyZXI6IFdlYkdMUmVuZGVyZXIgfCBXZWJHUFVSZW5kZXJlcixcbiAgICBzY2VuZTogU2NlbmUsXG4gICAgY2FtZXJhOiBDYW1lcmEsXG4gICAgb25CZWZvcmVSZW5kZXI/OiAoKSA9PiB2b2lkXG4gICkge1xuICAgIGNvbnN0IHJlbmRlcmluZyA9ICgpID0+IHtcbiAgICAgIGlmIChvbkJlZm9yZVJlbmRlcikge1xuICAgICAgICBvbkJlZm9yZVJlbmRlcigpO1xuICAgICAgfVxuICAgICAgY29udHJvbC51cGRhdGUoKTtcbiAgICAgIGlmIChyZW5kZXJlciBpbnN0YW5jZW9mIFdlYkdQVVJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlckFzeW5jKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgfVxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcmluZyk7XG4gICAgfTtcbiAgICByZW5kZXJpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYWRkUmVuZGVyZXJJbmZvKCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluZm8pO1xuICAgIHJldHVybiBpbmZvO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB1cGRhdGVSZW5kZXJlckluZm8oZGl2OiBIVE1MRGl2RWxlbWVudCwgaW5mbzogYW55KTogdm9pZCB7XG4gICAgZGl2LmlubmVyVGV4dCA9IEpTT04uc3RyaW5naWZ5KGluZm8pO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1040\n')},8515:(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n/* unused harmony export StudyNodeBasic */\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6075);\n/* harmony import */ var three_examples_jsm_nodes_Nodes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3764);\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1040);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Common__WEBPACK_IMPORTED_MODULE_1__]);\n_Common__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n/**\n * アトリビュートの設定と取り出しのサンプル\n */\nvar StudyNodeBasic = /** @class */ (function () {\n    function StudyNodeBasic() {\n        var scene = _Common__WEBPACK_IMPORTED_MODULE_1__/* .Common */ .G.initScene();\n        _Common__WEBPACK_IMPORTED_MODULE_1__/* .Common */ .G.initLight(scene);\n        var camera = _Common__WEBPACK_IMPORTED_MODULE_1__/* .Common */ .G.initCamera(scene, StudyNodeBasic.W, StudyNodeBasic.H);\n        var renderer = _Common__WEBPACK_IMPORTED_MODULE_1__/* .Common */ .G.initWebGPURenderer(StudyNodeBasic.W, StudyNodeBasic.H);\n        var control = _Common__WEBPACK_IMPORTED_MODULE_1__/* .Common */ .G.initControl(camera, renderer);\n        _Common__WEBPACK_IMPORTED_MODULE_1__/* .Common */ .G.initHelper(scene);\n        this.initObject(scene);\n        _Common__WEBPACK_IMPORTED_MODULE_1__/* .Common */ .G.render(control, renderer, scene, camera);\n    }\n    StudyNodeBasic.prototype.initObject = function (scene) {\n        var geo = new three__WEBPACK_IMPORTED_MODULE_2__.PlaneGeometry(10, 10);\n        var customAttribute = new three__WEBPACK_IMPORTED_MODULE_2__.BufferAttribute(new Float32Array(geo.attributes.position.array), 3);\n        customAttribute.setXYZ(0, 0, 0, 0);\n        customAttribute.setXYZ(1, 1, 0, 0);\n        customAttribute.setXYZ(2, 0, 1, 0);\n        customAttribute.setXYZ(3, 1, 1, 1);\n        geo.setAttribute("customColorAttribute", customAttribute);\n        var mat = new three_examples_jsm_nodes_Nodes_js__WEBPACK_IMPORTED_MODULE_0__/* .MeshBasicNodeMaterial */ .AEy();\n        mat.colorNode = (0,three_examples_jsm_nodes_Nodes_js__WEBPACK_IMPORTED_MODULE_0__/* .color */ .$_Y)((0,three_examples_jsm_nodes_Nodes_js__WEBPACK_IMPORTED_MODULE_0__/* .attribute */ .A1o)("customColorAttribute"));\n        var mesh = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geo, mat);\n        scene.add(mesh);\n    };\n    StudyNodeBasic.W = 640;\n    StudyNodeBasic.H = 480;\n    return StudyNodeBasic;\n}());\n\nwindow.onload = function () {\n    var study = new StudyNodeBasic();\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODUxNS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJFO0FBS2hDO0FBQ1Q7QUFFbEM7O0dBRUc7QUFDSDtJQUlFO1FBQ0UsSUFBTSxLQUFLLEdBQUcsb0RBQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQyxvREFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFNLE1BQU0sR0FBRyxvREFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFNUUsSUFBTSxRQUFRLEdBQUcsb0RBQU0sQ0FBQyxrQkFBa0IsQ0FDeEMsY0FBYyxDQUFDLENBQUMsRUFDaEIsY0FBYyxDQUFDLENBQUMsQ0FDakIsQ0FBQztRQUNGLElBQU0sT0FBTyxHQUFHLG9EQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNyRCxvREFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLG9EQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTyxtQ0FBVSxHQUFsQixVQUFtQixLQUFZO1FBQzdCLElBQU0sR0FBRyxHQUFHLElBQUksZ0RBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEMsSUFBTSxlQUFlLEdBQUcsSUFBSSxrREFBZSxDQUN6QyxJQUFJLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFDL0MsQ0FBQyxDQUNGLENBQUM7UUFDRixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25DLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRW5DLEdBQUcsQ0FBQyxZQUFZLENBQUMsc0JBQXNCLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFMUQsSUFBTSxHQUFHLEdBQUcsSUFBSSwrRkFBcUIsRUFBRSxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsbUZBQUssQ0FBQyx1RkFBUyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFNLElBQUksR0FBRyxJQUFJLHVDQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQW5Dc0IsZ0JBQUMsR0FBRyxHQUFHLENBQUM7SUFDUixnQkFBQyxHQUFHLEdBQUcsQ0FBQztJQW1DakMscUJBQUM7Q0FBQTtBQXJDMEI7QUF1QzNCLE1BQU0sQ0FBQyxNQUFNLEdBQUc7SUFDZCxJQUFNLEtBQUssR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO0FBQ3JDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlanMtbGFiLy4vc3JjL1N0dWR5Tm9kZU1hdGVyaWFsX0F0dHJpYnV0ZS50cz80NGEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc2gsIFBsYW5lR2VvbWV0cnksIFNjZW5lLCBCdWZmZXJBdHRyaWJ1dGUsIENvbG9yIH0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQge1xuICBNZXNoQmFzaWNOb2RlTWF0ZXJpYWwsXG4gIGNvbG9yLFxuICBhdHRyaWJ1dGUsXG59IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbm9kZXMvTm9kZXMuanNcIjtcbmltcG9ydCB7IENvbW1vbiB9IGZyb20gXCIuL0NvbW1vblwiO1xuXG4vKipcbiAqIOOCouODiOODquODk+ODpeODvOODiOOBruioreWumuOBqOWPluOCiuWHuuOBl+OBruOCteODs+ODl+ODq1xuICovXG5leHBvcnQgY2xhc3MgU3R1ZHlOb2RlQmFzaWMge1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFcgPSA2NDA7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSCA9IDQ4MDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBzY2VuZSA9IENvbW1vbi5pbml0U2NlbmUoKTtcbiAgICBDb21tb24uaW5pdExpZ2h0KHNjZW5lKTtcbiAgICBjb25zdCBjYW1lcmEgPSBDb21tb24uaW5pdENhbWVyYShzY2VuZSwgU3R1ZHlOb2RlQmFzaWMuVywgU3R1ZHlOb2RlQmFzaWMuSCk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IENvbW1vbi5pbml0V2ViR1BVUmVuZGVyZXIoXG4gICAgICBTdHVkeU5vZGVCYXNpYy5XLFxuICAgICAgU3R1ZHlOb2RlQmFzaWMuSFxuICAgICk7XG4gICAgY29uc3QgY29udHJvbCA9IENvbW1vbi5pbml0Q29udHJvbChjYW1lcmEsIHJlbmRlcmVyKTtcbiAgICBDb21tb24uaW5pdEhlbHBlcihzY2VuZSk7XG4gICAgdGhpcy5pbml0T2JqZWN0KHNjZW5lKTtcbiAgICBDb21tb24ucmVuZGVyKGNvbnRyb2wsIHJlbmRlcmVyLCBzY2VuZSwgY2FtZXJhKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdE9iamVjdChzY2VuZTogU2NlbmUpOiB2b2lkIHtcbiAgICBjb25zdCBnZW8gPSBuZXcgUGxhbmVHZW9tZXRyeSgxMCwgMTApO1xuICAgIGNvbnN0IGN1c3RvbUF0dHJpYnV0ZSA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoXG4gICAgICBuZXcgRmxvYXQzMkFycmF5KGdlby5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5KSxcbiAgICAgIDNcbiAgICApO1xuICAgIGN1c3RvbUF0dHJpYnV0ZS5zZXRYWVooMCwgMCwgMCwgMCk7XG4gICAgY3VzdG9tQXR0cmlidXRlLnNldFhZWigxLCAxLCAwLCAwKTtcbiAgICBjdXN0b21BdHRyaWJ1dGUuc2V0WFlaKDIsIDAsIDEsIDApO1xuICAgIGN1c3RvbUF0dHJpYnV0ZS5zZXRYWVooMywgMSwgMSwgMSk7XG5cbiAgICBnZW8uc2V0QXR0cmlidXRlKFwiY3VzdG9tQ29sb3JBdHRyaWJ1dGVcIiwgY3VzdG9tQXR0cmlidXRlKTtcblxuICAgIGNvbnN0IG1hdCA9IG5ldyBNZXNoQmFzaWNOb2RlTWF0ZXJpYWwoKTtcbiAgICBtYXQuY29sb3JOb2RlID0gY29sb3IoYXR0cmlidXRlKFwiY3VzdG9tQ29sb3JBdHRyaWJ1dGVcIikpO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgTWVzaChnZW8sIG1hdCk7XG4gICAgc2NlbmUuYWRkKG1lc2gpO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IHN0dWR5ID0gbmV3IFN0dWR5Tm9kZUJhc2ljKCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8515\n')}},__webpack_module_cache__={},webpackQueues,webpackExports,webpackError,resolveQueue,deferred;function __webpack_require__(e){var Q=__webpack_module_cache__[e];if(void 0!==Q)return Q.exports;var U=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(U.exports,U,U.exports,__webpack_require__),U.loaded=!0,U.exports}__webpack_require__.m=__webpack_modules__,webpackQueues="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",webpackExports="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",webpackError="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",resolveQueue=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},__webpack_require__.a=(e,Q,U)=>{var B;U&&((B=[]).d=-1);var F,_,n,r=new Set,s=e.exports,c=new Promise(((e,Q)=>{n=Q,_=e}));c[webpackExports]=s,c[webpackQueues]=e=>(B&&e(B),r.forEach(e),c.catch((e=>{}))),e.exports=c,Q((e=>{var Q;F=(e=>e.map((e=>{if(null!==e&&"object"==typeof e){if(e[webpackQueues])return e;if(e.then){var Q=[];Q.d=0,e.then((e=>{U[webpackExports]=e,resolveQueue(Q)}),(e=>{U[webpackError]=e,resolveQueue(Q)}));var U={};return U[webpackQueues]=e=>e(Q),U}}var B={};return B[webpackQueues]=e=>{},B[webpackExports]=e,B})))(e);var U=()=>F.map((e=>{if(e[webpackError])throw e[webpackError];return e[webpackExports]})),_=new Promise((e=>{(Q=()=>e(U)).r=0;var _=e=>e!==B&&!r.has(e)&&(r.add(e),e&&!e.d&&(Q.r++,e.push(Q)));F.map((e=>e[webpackQueues](_)))}));return Q.r?_:U()}),(e=>(e?n(c[webpackError]=e):_(s),resolveQueue(B)))),B&&B.d<0&&(B.d=0)},deferred=[],__webpack_require__.O=(e,Q,U,B)=>{if(!Q){var F=1/0;for(s=0;s<deferred.length;s++){for(var[Q,U,B]=deferred[s],_=!0,n=0;n<Q.length;n++)(!1&B||F>=B)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](Q[n])))?Q.splice(n--,1):(_=!1,B<F&&(F=B));if(_){deferred.splice(s--,1);var r=U();void 0!==r&&(e=r)}}return e}B=B||0;for(var s=deferred.length;s>0&&deferred[s-1][2]>B;s--)deferred[s]=deferred[s-1];deferred[s]=[Q,U,B]},__webpack_require__.n=e=>{var Q=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(Q,{a:Q}),Q},__webpack_require__.d=(e,Q)=>{for(var U in Q)__webpack_require__.o(Q,U)&&!__webpack_require__.o(e,U)&&Object.defineProperty(e,U,{enumerable:!0,get:Q[U]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,Q)=>Object.prototype.hasOwnProperty.call(e,Q),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),__webpack_require__.j=157,(()=>{var e={157:0};__webpack_require__.O.j=Q=>0===e[Q];var Q=(Q,U)=>{var B,F,[_,n,r]=U,s=0;if(_.some((Q=>0!==e[Q]))){for(B in n)__webpack_require__.o(n,B)&&(__webpack_require__.m[B]=n[B]);if(r)var c=r(__webpack_require__)}for(Q&&Q(U);s<_.length;s++)F=_[s],__webpack_require__.o(e,F)&&e[F]&&e[F][0](),e[F]=0;return __webpack_require__.O(c)},U=self.webpackChunkthreejs_lab=self.webpackChunkthreejs_lab||[];U.forEach(Q.bind(null,0)),U.push=Q.bind(null,U.push.bind(U))})();var __webpack_exports__=__webpack_require__.O(void 0,[736],(()=>__webpack_require__(8515)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();