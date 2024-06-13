(()=>{"use strict";var __webpack_modules__={1040:(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   G: () => (/* binding */ Common)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6075);\n/* harmony import */ var three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5481);\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8012);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__]);\nthree_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nvar Common = /** @class */ (function () {\n    function Common() {\n    }\n    Common.initScene = function () {\n        var scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        return scene;\n    };\n    Common.initLight = function (scene) {\n        var ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    };\n    Common.initCamera = function (scene, W, H, near, far) {\n        if (near === void 0) { near = 1; }\n        if (far === void 0) { far = 400; }\n        var camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(45, W / H, near, far);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    };\n    Common.initControl = function (camera, render) {\n        var domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        var control = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__/* .OrbitControls */ .z(camera, domElement);\n        control.update();\n        return control;\n    };\n    Common.initRenderer = function (W, H, color, id, antialias) {\n        if (color === void 0) { color = 0x000000; }\n        if (id === void 0) { id = "webgl-canvas"; }\n        if (antialias === void 0) { antialias = true; }\n        var renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        this.initRendererSettings(renderer, color, W, H);\n        return renderer;\n    };\n    Common.initWebGPURenderer = function (W, H, color, id, antialias) {\n        if (color === void 0) { color = 0x000000; }\n        if (id === void 0) { id = "webgl-canvas"; }\n        if (antialias === void 0) { antialias = true; }\n        var renderer = new three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        this.initRendererSettings(renderer, color, W, H);\n        return renderer;\n    };\n    Common.initRendererSettings = function (renderer, color, W, H) {\n        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__.Color(color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        console.log("three.js revision: ", three__WEBPACK_IMPORTED_MODULE_0__.REVISION);\n    };\n    Common.initHelper = function (scene) {\n        var axesHelper = new three__WEBPACK_IMPORTED_MODULE_0__.AxesHelper(30);\n        scene.add(axesHelper);\n    };\n    Common.render = function (control, renderer, scene, camera, onBeforeRender) {\n        var rendering = function () {\n            if (onBeforeRender) {\n                onBeforeRender();\n            }\n            control.update();\n            if (renderer instanceof three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z) {\n                renderer.renderAsync(scene, camera);\n            }\n            else {\n                renderer.render(scene, camera);\n            }\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    };\n    Common.addRendererInfo = function () {\n        var info = document.createElement("div");\n        document.body.appendChild(info);\n        return info;\n    };\n    Common.updateRendererInfo = function (div, info) {\n        div.innerText = JSON.stringify(info);\n    };\n    return Common;\n}());\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlanMtbGFiLy4vc3JjL0NvbW1vbi50cz83MzMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFtYmllbnRMaWdodCxcbiAgQXhlc0hlbHBlcixcbiAgQ2FtZXJhLFxuICBDb2xvcixcbiAgUGVyc3BlY3RpdmVDYW1lcmEsXG4gIFNjZW5lLFxuICBXZWJHTFJlbmRlcmVyLFxuICBSRVZJU0lPTixcbn0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgV2ViR1BVUmVuZGVyZXIgZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9yZW5kZXJlcnMvd2ViZ3B1L1dlYkdQVVJlbmRlcmVyLmpzXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBDb21tb24ge1xuICBwdWJsaWMgc3RhdGljIGluaXRTY2VuZSgpIHtcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBTY2VuZSgpO1xuICAgIHJldHVybiBzY2VuZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdExpZ2h0KHNjZW5lKSB7XG4gICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IEFtYmllbnRMaWdodCgweGZmZmZmZiwgMS4wKTtcbiAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcbiAgICByZXR1cm4gYW1iaWVudExpZ2h0O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0Q2FtZXJhKFxuICAgIHNjZW5lOiBTY2VuZSxcbiAgICBXOiBudW1iZXIsXG4gICAgSDogbnVtYmVyLFxuICAgIG5lYXIgPSAxLFxuICAgIGZhciA9IDQwMFxuICApOiBQZXJzcGVjdGl2ZUNhbWVyYSB7XG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCBXIC8gSCwgbmVhciwgZmFyKTtcbiAgICBjYW1lcmEucG9zaXRpb24uc2V0KDAsIDAsIDEwMCk7XG4gICAgY2FtZXJhLnVwZGF0ZU1hdHJpeFdvcmxkKGZhbHNlKTtcbiAgICBzY2VuZS5hZGQoY2FtZXJhKTtcbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0Q29udHJvbChcbiAgICBjYW1lcmE6IENhbWVyYSxcbiAgICByZW5kZXI6IFdlYkdMUmVuZGVyZXIgfCBXZWJHUFVSZW5kZXJlclxuICApOiBPcmJpdENvbnRyb2xzIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcbiAgICBpZiAocmVuZGVyKSB7XG4gICAgICBkb21FbGVtZW50ID0gcmVuZGVyLmRvbUVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRyb2wgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIGRvbUVsZW1lbnQpO1xuICAgIGNvbnRyb2wudXBkYXRlKCk7XG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRSZW5kZXJlcihcbiAgICBXOiBudW1iZXIsXG4gICAgSDogbnVtYmVyLFxuICAgIGNvbG9yOiBudW1iZXIgPSAweDAwMDAwMCxcbiAgICBpZDogc3RyaW5nID0gXCJ3ZWJnbC1jYW52YXNcIixcbiAgICBhbnRpYWxpYXM6IGJvb2xlYW4gPSB0cnVlXG4gICkge1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFdlYkdMUmVuZGVyZXIoe1xuICAgICAgY2FudmFzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTENhbnZhc0VsZW1lbnQsXG4gICAgICBhbnRpYWxpYXM6IGFudGlhbGlhcyxcbiAgICB9KTtcbiAgICB0aGlzLmluaXRSZW5kZXJlclNldHRpbmdzKHJlbmRlcmVyLCBjb2xvciwgVywgSCk7XG4gICAgcmV0dXJuIHJlbmRlcmVyO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0V2ViR1BVUmVuZGVyZXIoXG4gICAgVzogbnVtYmVyLFxuICAgIEg6IG51bWJlcixcbiAgICBjb2xvcjogbnVtYmVyID0gMHgwMDAwMDAsXG4gICAgaWQ6IHN0cmluZyA9IFwid2ViZ2wtY2FudmFzXCIsXG4gICAgYW50aWFsaWFzOiBib29sZWFuID0gdHJ1ZVxuICApIHtcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBXZWJHUFVSZW5kZXJlcih7XG4gICAgICBjYW52YXM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICAgIGFudGlhbGlhczogYW50aWFsaWFzLFxuICAgIH0pO1xuICAgIHRoaXMuaW5pdFJlbmRlcmVyU2V0dGluZ3MocmVuZGVyZXIsIGNvbG9yLCBXLCBIKTtcbiAgICByZXR1cm4gcmVuZGVyZXI7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBpbml0UmVuZGVyZXJTZXR0aW5ncyhcbiAgICByZW5kZXJlcjogV2ViR0xSZW5kZXJlciB8IFdlYkdQVVJlbmRlcmVyLFxuICAgIGNvbG9yOiBudW1iZXIsXG4gICAgVzogbnVtYmVyLFxuICAgIEg6IG51bWJlclxuICApIHtcbiAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKG5ldyBDb2xvcihjb2xvcikpO1xuICAgIHJlbmRlcmVyLnNldFNpemUoVywgSCk7XG4gICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgY29uc29sZS5sb2coXCJ0aHJlZS5qcyByZXZpc2lvbjogXCIsIFJFVklTSU9OKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdEhlbHBlcihzY2VuZTogU2NlbmUpOiB2b2lkIHtcbiAgICBjb25zdCBheGVzSGVscGVyID0gbmV3IEF4ZXNIZWxwZXIoMzApO1xuICAgIHNjZW5lLmFkZChheGVzSGVscGVyKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVuZGVyKFxuICAgIGNvbnRyb2w6IE9yYml0Q29udHJvbHMsXG4gICAgcmVuZGVyZXI6IFdlYkdMUmVuZGVyZXIgfCBXZWJHUFVSZW5kZXJlcixcbiAgICBzY2VuZTogU2NlbmUsXG4gICAgY2FtZXJhOiBDYW1lcmEsXG4gICAgb25CZWZvcmVSZW5kZXI/OiAoKSA9PiB2b2lkXG4gICkge1xuICAgIGNvbnN0IHJlbmRlcmluZyA9ICgpID0+IHtcbiAgICAgIGlmIChvbkJlZm9yZVJlbmRlcikge1xuICAgICAgICBvbkJlZm9yZVJlbmRlcigpO1xuICAgICAgfVxuICAgICAgY29udHJvbC51cGRhdGUoKTtcbiAgICAgIGlmIChyZW5kZXJlciBpbnN0YW5jZW9mIFdlYkdQVVJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlckFzeW5jKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgfVxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcmluZyk7XG4gICAgfTtcbiAgICByZW5kZXJpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYWRkUmVuZGVyZXJJbmZvKCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluZm8pO1xuICAgIHJldHVybiBpbmZvO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB1cGRhdGVSZW5kZXJlckluZm8oZGl2OiBIVE1MRGl2RWxlbWVudCwgaW5mbzogYW55KTogdm9pZCB7XG4gICAgZGl2LmlubmVyVGV4dCA9IEpTT04uc3RyaW5naWZ5KGluZm8pO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1040\n')},8971:(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   A: () => (/* binding */ MergedGeometryStudy)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6075);\n/* harmony import */ var three_examples_jsm_libs_stats_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2304);\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1040);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Common__WEBPACK_IMPORTED_MODULE_0__]);\n_Common__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nvar MergedGeometryStudy = /** @class */ (function () {\n    function MergedGeometryStudy() {\n        this.initStats();\n        var scene = _Common__WEBPACK_IMPORTED_MODULE_0__/* .Common */ .G.initScene();\n        var camera = _Common__WEBPACK_IMPORTED_MODULE_0__/* .Common */ .G.initCamera(scene, MergedGeometryStudy.W, MergedGeometryStudy.H);\n        this.renderer = _Common__WEBPACK_IMPORTED_MODULE_0__/* .Common */ .G.initRenderer(MergedGeometryStudy.W, MergedGeometryStudy.H);\n        var object = this.initMesh(scene);\n        var info = _Common__WEBPACK_IMPORTED_MODULE_0__/* .Common */ .G.addRendererInfo();\n        this.render(object, info, this.renderer, scene, camera);\n    }\n    MergedGeometryStudy.prototype.initStats = function () {\n        this.stats = new three_examples_jsm_libs_stats_module_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z();\n        this.stats.showPanel(0);\n        document.body.appendChild(this.stats.dom);\n    };\n    MergedGeometryStudy.prototype.initMesh = function (scene) {\n        // Override me\n        return new three__WEBPACK_IMPORTED_MODULE_2__.Group();\n    };\n    MergedGeometryStudy.prototype.render = function (mergedMesh, infoContainer, renderer, scene, camera) {\n        var _this = this;\n        var rendering = function () {\n            mergedMesh.rotation.x += 0.01;\n            mergedMesh.rotation.y += 0.01;\n            mergedMesh.rotation.z += 0.01;\n            _this.stats.begin();\n            renderer.render(scene, camera);\n            _this.stats.end();\n            _Common__WEBPACK_IMPORTED_MODULE_0__/* .Common */ .G.updateRendererInfo(infoContainer, renderer.info.render);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    };\n    MergedGeometryStudy.W = 1280;\n    MergedGeometryStudy.H = 800;\n    return MergedGeometryStudy;\n}());\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODk3MS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0U7QUFDVjtBQUMxQjtBQUVsQztJQU1FO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQU0sS0FBSyxHQUFHLG9EQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakMsSUFBTSxNQUFNLEdBQUcsb0RBQU0sQ0FBQyxVQUFVLENBQzlCLEtBQUssRUFDTCxtQkFBbUIsQ0FBQyxDQUFDLEVBQ3JCLG1CQUFtQixDQUFDLENBQUMsQ0FDdEIsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsb0RBQU0sQ0FBQyxZQUFZLENBQ2pDLG1CQUFtQixDQUFDLENBQUMsRUFDckIsbUJBQW1CLENBQUMsQ0FBQyxDQUN0QixDQUFDO1FBRUYsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxJQUFNLElBQUksR0FBRyxvREFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXRDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU8sdUNBQVMsR0FBakI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksd0ZBQUssRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVTLHNDQUFRLEdBQWxCLFVBQW1CLEtBQVk7UUFDN0IsY0FBYztRQUNkLE9BQU8sSUFBSSx3Q0FBSyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVNLG9DQUFNLEdBQWIsVUFDRSxVQUFvQixFQUNwQixhQUE2QixFQUM3QixRQUF1QixFQUN2QixLQUFZLEVBQ1osTUFBYztRQUxoQixpQkFvQkM7UUFiQyxJQUFNLFNBQVMsR0FBRztZQUNoQixVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7WUFDOUIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO1lBQzlCLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztZQUU5QixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ25CLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFakIsb0RBQU0sQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvRCxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7UUFDRixTQUFTLEVBQUUsQ0FBQztJQUNkLENBQUM7SUF4RHNCLHFCQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ1QscUJBQUMsR0FBRyxHQUFHLENBQUM7SUF3RGpDLDBCQUFDO0NBQUE7QUExRCtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWVqcy1sYWIvLi9zcmMvTWVyZ2VkR2VvbWV0cnlTdHVkeS50cz8zNGY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYSwgR3JvdXAsIE9iamVjdDNELCBTY2VuZSwgV2ViR0xSZW5kZXJlciB9IGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IFN0YXRzIGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbGlicy9zdGF0cy5tb2R1bGUuanNcIjtcbmltcG9ydCB7IENvbW1vbiB9IGZyb20gXCIuL0NvbW1vblwiO1xuXG5leHBvcnQgY2xhc3MgTWVyZ2VkR2VvbWV0cnlTdHVkeSB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVyA9IDEyODA7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSCA9IDgwMDtcbiAgcHJvdGVjdGVkIHN0YXRzO1xuICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFdlYkdMUmVuZGVyZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0U3RhdHMoKTtcbiAgICBjb25zdCBzY2VuZSA9IENvbW1vbi5pbml0U2NlbmUoKTtcblxuICAgIGNvbnN0IGNhbWVyYSA9IENvbW1vbi5pbml0Q2FtZXJhKFxuICAgICAgc2NlbmUsXG4gICAgICBNZXJnZWRHZW9tZXRyeVN0dWR5LlcsXG4gICAgICBNZXJnZWRHZW9tZXRyeVN0dWR5LkhcbiAgICApO1xuICAgIHRoaXMucmVuZGVyZXIgPSBDb21tb24uaW5pdFJlbmRlcmVyKFxuICAgICAgTWVyZ2VkR2VvbWV0cnlTdHVkeS5XLFxuICAgICAgTWVyZ2VkR2VvbWV0cnlTdHVkeS5IXG4gICAgKTtcblxuICAgIGNvbnN0IG9iamVjdCA9IHRoaXMuaW5pdE1lc2goc2NlbmUpO1xuICAgIGNvbnN0IGluZm8gPSBDb21tb24uYWRkUmVuZGVyZXJJbmZvKCk7XG5cbiAgICB0aGlzLnJlbmRlcihvYmplY3QsIGluZm8sIHRoaXMucmVuZGVyZXIsIHNjZW5lLCBjYW1lcmEpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0U3RhdHMoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0cyA9IG5ldyBTdGF0cygpO1xuICAgIHRoaXMuc3RhdHMuc2hvd1BhbmVsKDApO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zdGF0cy5kb20pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRNZXNoKHNjZW5lOiBTY2VuZSk6IE9iamVjdDNEIHtcbiAgICAvLyBPdmVycmlkZSBtZVxuICAgIHJldHVybiBuZXcgR3JvdXAoKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoXG4gICAgbWVyZ2VkTWVzaDogT2JqZWN0M0QsXG4gICAgaW5mb0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQsXG4gICAgcmVuZGVyZXI6IFdlYkdMUmVuZGVyZXIsXG4gICAgc2NlbmU6IFNjZW5lLFxuICAgIGNhbWVyYTogQ2FtZXJhXG4gICkge1xuICAgIGNvbnN0IHJlbmRlcmluZyA9ICgpID0+IHtcbiAgICAgIG1lcmdlZE1lc2gucm90YXRpb24ueCArPSAwLjAxO1xuICAgICAgbWVyZ2VkTWVzaC5yb3RhdGlvbi55ICs9IDAuMDE7XG4gICAgICBtZXJnZWRNZXNoLnJvdGF0aW9uLnogKz0gMC4wMTtcblxuICAgICAgdGhpcy5zdGF0cy5iZWdpbigpO1xuICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgdGhpcy5zdGF0cy5lbmQoKTtcblxuICAgICAgQ29tbW9uLnVwZGF0ZVJlbmRlcmVySW5mbyhpbmZvQ29udGFpbmVyLCByZW5kZXJlci5pbmZvLnJlbmRlcik7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyaW5nKTtcbiAgICB9O1xuICAgIHJlbmRlcmluZygpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8971\n')},305:(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n/* unused harmony export StudyMergedGeometry */\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6075);\n/* harmony import */ var three_examples_jsm_utils_BufferGeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6993);\n/* harmony import */ var _MergedGeometryStudy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8971);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MergedGeometryStudy__WEBPACK_IMPORTED_MODULE_0__]);\n_MergedGeometryStudy__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== "function" && b !== null)\n            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\nvar StudyMergedGeometry = /** @class */ (function (_super) {\n    __extends(StudyMergedGeometry, _super);\n    function StudyMergedGeometry() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    StudyMergedGeometry.prototype.initMesh = function (scene) {\n        var geometryArray = [];\n        var size = 1;\n        var margin = 0.3;\n        var pitch = size + margin;\n        var numCube = 40;\n        var offset = (numCube * pitch) / 2;\n        var generateCube = function (x, y, z) {\n            var geometry = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry();\n            var positions = geometry.getAttribute("position");\n            var count = positions.count;\n            geometry.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(new Float32Array(count * 4), 4));\n            var colors = geometry.getAttribute("color");\n            for (var i = 0; i < count; i++) {\n                positions.setXYZ(i, positions.getX(i) + x * pitch - offset, positions.getY(i) + y * pitch - offset, positions.getZ(i) + z * pitch - offset);\n                colors.setXYZW(i, x / numCube, y / numCube, z / numCube, 0.05);\n            }\n            geometryArray.push(geometry);\n        };\n        for (var x = 0; x < numCube; x++) {\n            for (var y = 0; y < numCube; y++) {\n                for (var z = 0; z < numCube; z++) {\n                    generateCube(x, y, z);\n                }\n            }\n        }\n        var mergedMesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh((0,three_examples_jsm_utils_BufferGeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .mergeGeometries */ .n4)(geometryArray), new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({\n            transparent: true,\n            vertexColors: true,\n            depthTest: false,\n            depthWrite: false,\n        }));\n        scene.add(mergedMesh);\n        return mergedMesh;\n    };\n    StudyMergedGeometry.W = 1280;\n    StudyMergedGeometry.H = 800;\n    return StudyMergedGeometry;\n}(_MergedGeometryStudy__WEBPACK_IMPORTED_MODULE_0__/* .MergedGeometryStudy */ .A));\n\nwindow.onload = function () {\n    var study = new StudyMergedGeometry();\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixxQkFBQyxHQUFHLElBQUksQ0FBQztJQUNULHFCQUFDLEdBQUcsR0FBRyxDQUFDO0lBdURqQywwQkFBQztDQUFBLENBekR3Qyw4RUFBbUIsR0F5RDNEO0FBekQrQjtBQTJEaEMsTUFBTSxDQUFDLE1BQU0sR0FBRztJQUNkLElBQU0sS0FBSyxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztBQUMxQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJlZWpzLWxhYi8uL3NyYy9TdHVkeU1lcmdlZEdlb21ldHJ5LnRzPzg1NWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94R2VvbWV0cnksXG4gIEJ1ZmZlckF0dHJpYnV0ZSxcbiAgTWVzaCxcbiAgTWVzaEJhc2ljTWF0ZXJpYWwsXG4gIFNjZW5lLFxufSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IG1lcmdlR2VvbWV0cmllcyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vdXRpbHMvQnVmZmVyR2VvbWV0cnlVdGlscy5qc1wiO1xuaW1wb3J0IHsgTWVyZ2VkR2VvbWV0cnlTdHVkeSB9IGZyb20gXCIuL01lcmdlZEdlb21ldHJ5U3R1ZHlcIjtcblxuZXhwb3J0IGNsYXNzIFN0dWR5TWVyZ2VkR2VvbWV0cnkgZXh0ZW5kcyBNZXJnZWRHZW9tZXRyeVN0dWR5IHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBXID0gMTI4MDtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBIID0gODAwO1xuICBwcm90ZWN0ZWQgc3RhdHM7XG5cbiAgcHJvdGVjdGVkIGluaXRNZXNoKHNjZW5lOiBTY2VuZSk6IE1lc2gge1xuICAgIGNvbnN0IGdlb21ldHJ5QXJyYXk6IEJveEdlb21ldHJ5W10gPSBbXTtcblxuICAgIGNvbnN0IHNpemUgPSAxO1xuICAgIGNvbnN0IG1hcmdpbiA9IDAuMztcbiAgICBjb25zdCBwaXRjaCA9IHNpemUgKyBtYXJnaW47XG4gICAgY29uc3QgbnVtQ3ViZSA9IDQwO1xuICAgIGNvbnN0IG9mZnNldCA9IChudW1DdWJlICogcGl0Y2gpIC8gMjtcblxuICAgIGNvbnN0IGdlbmVyYXRlQ3ViZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBCb3hHZW9tZXRyeSgpO1xuICAgICAgY29uc3QgcG9zaXRpb25zID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIik7XG4gICAgICBjb25zdCBjb3VudCA9IHBvc2l0aW9ucy5jb3VudDtcbiAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJjb2xvclwiLFxuICAgICAgICBuZXcgQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY291bnQgKiA0KSwgNClcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGNvbG9ycyA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZShcImNvbG9yXCIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9ucy5zZXRYWVooXG4gICAgICAgICAgaSxcbiAgICAgICAgICBwb3NpdGlvbnMuZ2V0WChpKSArIHggKiBwaXRjaCAtIG9mZnNldCxcbiAgICAgICAgICBwb3NpdGlvbnMuZ2V0WShpKSArIHkgKiBwaXRjaCAtIG9mZnNldCxcbiAgICAgICAgICBwb3NpdGlvbnMuZ2V0WihpKSArIHogKiBwaXRjaCAtIG9mZnNldFxuICAgICAgICApO1xuICAgICAgICBjb2xvcnMuc2V0WFlaVyhpLCB4IC8gbnVtQ3ViZSwgeSAvIG51bUN1YmUsIHogLyBudW1DdWJlLCAwLjA1KTtcbiAgICAgIH1cbiAgICAgIGdlb21ldHJ5QXJyYXkucHVzaChnZW9tZXRyeSk7XG4gICAgfTtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgbnVtQ3ViZTsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG51bUN1YmU7IHkrKykge1xuICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IG51bUN1YmU7IHorKykge1xuICAgICAgICAgIGdlbmVyYXRlQ3ViZSh4LCB5LCB6KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1lcmdlZE1lc2ggPSBuZXcgTWVzaChcbiAgICAgIG1lcmdlR2VvbWV0cmllcyhnZW9tZXRyeUFycmF5KSxcbiAgICAgIG5ldyBNZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgICB2ZXJ0ZXhDb2xvcnM6IHRydWUsXG4gICAgICAgIGRlcHRoVGVzdDogZmFsc2UsXG4gICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgc2NlbmUuYWRkKG1lcmdlZE1lc2gpO1xuICAgIHJldHVybiBtZXJnZWRNZXNoO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IHN0dWR5ID0gbmV3IFN0dWR5TWVyZ2VkR2VvbWV0cnkoKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///305\n')}},__webpack_module_cache__={},webpackQueues,webpackExports,webpackError,resolveQueue,deferred;function __webpack_require__(e){var Q=__webpack_module_cache__[e];if(void 0!==Q)return Q.exports;var U=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(U.exports,U,U.exports,__webpack_require__),U.loaded=!0,U.exports}__webpack_require__.m=__webpack_modules__,webpackQueues="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",webpackExports="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",webpackError="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",resolveQueue=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},__webpack_require__.a=(e,Q,U)=>{var F;U&&((F=[]).d=-1);var B,n,_,r=new Set,s=e.exports,c=new Promise(((e,Q)=>{_=Q,n=e}));c[webpackExports]=s,c[webpackQueues]=e=>(F&&e(F),r.forEach(e),c.catch((e=>{}))),e.exports=c,Q((e=>{var Q;B=(e=>e.map((e=>{if(null!==e&&"object"==typeof e){if(e[webpackQueues])return e;if(e.then){var Q=[];Q.d=0,e.then((e=>{U[webpackExports]=e,resolveQueue(Q)}),(e=>{U[webpackError]=e,resolveQueue(Q)}));var U={};return U[webpackQueues]=e=>e(Q),U}}var F={};return F[webpackQueues]=e=>{},F[webpackExports]=e,F})))(e);var U=()=>B.map((e=>{if(e[webpackError])throw e[webpackError];return e[webpackExports]})),n=new Promise((e=>{(Q=()=>e(U)).r=0;var n=e=>e!==F&&!r.has(e)&&(r.add(e),e&&!e.d&&(Q.r++,e.push(Q)));B.map((e=>e[webpackQueues](n)))}));return Q.r?n:U()}),(e=>(e?_(c[webpackError]=e):n(s),resolveQueue(F)))),F&&F.d<0&&(F.d=0)},deferred=[],__webpack_require__.O=(e,Q,U,F)=>{if(!Q){var B=1/0;for(s=0;s<deferred.length;s++){for(var[Q,U,F]=deferred[s],n=!0,_=0;_<Q.length;_++)(!1&F||B>=F)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](Q[_])))?Q.splice(_--,1):(n=!1,F<B&&(B=F));if(n){deferred.splice(s--,1);var r=U();void 0!==r&&(e=r)}}return e}F=F||0;for(var s=deferred.length;s>0&&deferred[s-1][2]>F;s--)deferred[s]=deferred[s-1];deferred[s]=[Q,U,F]},__webpack_require__.n=e=>{var Q=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(Q,{a:Q}),Q},__webpack_require__.d=(e,Q)=>{for(var U in Q)__webpack_require__.o(Q,U)&&!__webpack_require__.o(e,U)&&Object.defineProperty(e,U,{enumerable:!0,get:Q[U]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,Q)=>Object.prototype.hasOwnProperty.call(e,Q),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),__webpack_require__.j=928,(()=>{var e={928:0};__webpack_require__.O.j=Q=>0===e[Q];var Q=(Q,U)=>{var F,B,[n,_,r]=U,s=0;if(n.some((Q=>0!==e[Q]))){for(F in _)__webpack_require__.o(_,F)&&(__webpack_require__.m[F]=_[F]);if(r)var c=r(__webpack_require__)}for(Q&&Q(U);s<n.length;s++)B=n[s],__webpack_require__.o(e,B)&&e[B]&&e[B][0](),e[B]=0;return __webpack_require__.O(c)},U=self.webpackChunkthreejs_lab=self.webpackChunkthreejs_lab||[];U.forEach(Q.bind(null,0)),U.push=Q.bind(null,U.push.bind(U))})();var __webpack_exports__=__webpack_require__.O(void 0,[736],(()=>__webpack_require__(305)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();