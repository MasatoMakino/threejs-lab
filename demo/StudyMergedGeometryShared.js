(()=>{"use strict";var __webpack_modules__={1040:(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   G: () => (/* binding */ Common)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6075);\n/* harmony import */ var three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5481);\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8012);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__]);\nthree_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nclass Common {\n    static initScene() {\n        const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        return scene;\n    }\n    static initLight(scene) {\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    }\n    static initCamera(scene, W, H, near = 1, far = 400) {\n        const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(45, W / H, near, far);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    }\n    static initControl(camera, render) {\n        let domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        const control = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__/* .OrbitControls */ .z(camera, domElement);\n        control.update();\n        return control;\n    }\n    static initRenderer(W, H, color = 0x000000, id = "webgl-canvas", antialias = true) {\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__.Color(color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        console.log("three.js revision: ", three__WEBPACK_IMPORTED_MODULE_0__.REVISION);\n        return renderer;\n    }\n    static initHelper(scene) {\n        const axesHelper = new three__WEBPACK_IMPORTED_MODULE_0__.AxesHelper(30);\n        scene.add(axesHelper);\n    }\n    static render(control, renderer, scene, camera, onBeforeRender) {\n        const rendering = () => {\n            if (onBeforeRender) {\n                onBeforeRender();\n            }\n            control.update();\n            if (renderer instanceof three_examples_jsm_renderers_webgpu_WebGPURenderer_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z) {\n                renderer.renderAsync(scene, camera);\n            }\n            else {\n                renderer.render(scene, camera);\n            }\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n    static addRendererInfo() {\n        const info = document.createElement("div");\n        document.body.appendChild(info);\n        return info;\n    }\n    static updateRendererInfo(div, info) {\n        div.innerText = JSON.stringify(info);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN2QyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN0QyxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDakMsQ0FBQztZQUNELHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQztRQUNGLFNBQVMsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVNLE1BQU0sQ0FBQyxlQUFlO1FBQzNCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQW1CLEVBQUUsSUFBUztRQUM3RCxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWVqcy1sYWIvLi9zcmMvQ29tbW9uLnRzPzczMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQW1iaWVudExpZ2h0LFxuICBBeGVzSGVscGVyLFxuICBDYW1lcmEsXG4gIENvbG9yLFxuICBQZXJzcGVjdGl2ZUNhbWVyYSxcbiAgU2NlbmUsXG4gIFdlYkdMUmVuZGVyZXIsXG4gIFJFVklTSU9OLFxufSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCBXZWJHUFVSZW5kZXJlciBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3JlbmRlcmVycy93ZWJncHUvV2ViR1BVUmVuZGVyZXIuanNcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMuanNcIjtcblxuZXhwb3J0IGNsYXNzIENvbW1vbiB7XG4gIHB1YmxpYyBzdGF0aWMgaW5pdFNjZW5lKCkge1xuICAgIGNvbnN0IHNjZW5lID0gbmV3IFNjZW5lKCk7XG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0TGlnaHQoc2NlbmUpIHtcbiAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAxLjApO1xuICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuICAgIHJldHVybiBhbWJpZW50TGlnaHQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRDYW1lcmEoXG4gICAgc2NlbmU6IFNjZW5lLFxuICAgIFc6IG51bWJlcixcbiAgICBIOiBudW1iZXIsXG4gICAgbmVhciA9IDEsXG4gICAgZmFyID0gNDAwXG4gICk6IFBlcnNwZWN0aXZlQ2FtZXJhIHtcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgUGVyc3BlY3RpdmVDYW1lcmEoNDUsIFcgLyBILCBuZWFyLCBmYXIpO1xuICAgIGNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMCwgMTAwKTtcbiAgICBjYW1lcmEudXBkYXRlTWF0cml4V29ybGQoZmFsc2UpO1xuICAgIHNjZW5lLmFkZChjYW1lcmEpO1xuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRDb250cm9sKFxuICAgIGNhbWVyYTogQ2FtZXJhLFxuICAgIHJlbmRlcjogV2ViR0xSZW5kZXJlciB8IFdlYkdQVVJlbmRlcmVyXG4gICk6IE9yYml0Q29udHJvbHMge1xuICAgIGxldCBkb21FbGVtZW50O1xuICAgIGlmIChyZW5kZXIpIHtcbiAgICAgIGRvbUVsZW1lbnQgPSByZW5kZXIuZG9tRWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgY29udHJvbCA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgZG9tRWxlbWVudCk7XG4gICAgY29udHJvbC51cGRhdGUoKTtcbiAgICByZXR1cm4gY29udHJvbDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdFJlbmRlcmVyKFxuICAgIFc6IG51bWJlcixcbiAgICBIOiBudW1iZXIsXG4gICAgY29sb3I6IG51bWJlciA9IDB4MDAwMDAwLFxuICAgIGlkOiBzdHJpbmcgPSBcIndlYmdsLWNhbnZhc1wiLFxuICAgIGFudGlhbGlhczogYm9vbGVhbiA9IHRydWVcbiAgKSB7XG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgV2ViR0xSZW5kZXJlcih7XG4gICAgICBjYW52YXM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICAgIGFudGlhbGlhczogYW50aWFsaWFzLFxuICAgIH0pO1xuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IobmV3IENvbG9yKGNvbG9yKSk7XG4gICAgcmVuZGVyZXIuc2V0U2l6ZShXLCBIKTtcbiAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcbiAgICBjb25zb2xlLmxvZyhcInRocmVlLmpzIHJldmlzaW9uOiBcIiwgUkVWSVNJT04pO1xuICAgIHJldHVybiByZW5kZXJlcjtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdEhlbHBlcihzY2VuZTogU2NlbmUpOiB2b2lkIHtcbiAgICBjb25zdCBheGVzSGVscGVyID0gbmV3IEF4ZXNIZWxwZXIoMzApO1xuICAgIHNjZW5lLmFkZChheGVzSGVscGVyKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVuZGVyKFxuICAgIGNvbnRyb2w6IE9yYml0Q29udHJvbHMsXG4gICAgcmVuZGVyZXI6IFdlYkdMUmVuZGVyZXIgfCBXZWJHUFVSZW5kZXJlcixcbiAgICBzY2VuZTogU2NlbmUsXG4gICAgY2FtZXJhOiBDYW1lcmEsXG4gICAgb25CZWZvcmVSZW5kZXI/OiAoKSA9PiB2b2lkXG4gICkge1xuICAgIGNvbnN0IHJlbmRlcmluZyA9ICgpID0+IHtcbiAgICAgIGlmIChvbkJlZm9yZVJlbmRlcikge1xuICAgICAgICBvbkJlZm9yZVJlbmRlcigpO1xuICAgICAgfVxuICAgICAgY29udHJvbC51cGRhdGUoKTtcbiAgICAgIGlmIChyZW5kZXJlciBpbnN0YW5jZW9mIFdlYkdQVVJlbmRlcmVyKSB7XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlckFzeW5jKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgfVxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcmluZyk7XG4gICAgfTtcbiAgICByZW5kZXJpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYWRkUmVuZGVyZXJJbmZvKCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluZm8pO1xuICAgIHJldHVybiBpbmZvO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB1cGRhdGVSZW5kZXJlckluZm8oZGl2OiBIVE1MRGl2RWxlbWVudCwgaW5mbzogYW55KTogdm9pZCB7XG4gICAgZGl2LmlubmVyVGV4dCA9IEpTT04uc3RyaW5naWZ5KGluZm8pO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1040\n')},8971:(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   A: () => (/* binding */ MergedGeometryStudy)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6075);\n/* harmony import */ var three_examples_jsm_libs_stats_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2304);\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1040);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Common__WEBPACK_IMPORTED_MODULE_0__]);\n_Common__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nclass MergedGeometryStudy {\n    constructor() {\n        this.initStats();\n        const scene = _Common__WEBPACK_IMPORTED_MODULE_0__/* .Common */ .G.initScene();\n        const camera = _Common__WEBPACK_IMPORTED_MODULE_0__/* .Common */ .G.initCamera(scene, MergedGeometryStudy.W, MergedGeometryStudy.H);\n        this.renderer = _Common__WEBPACK_IMPORTED_MODULE_0__/* .Common */ .G.initRenderer(MergedGeometryStudy.W, MergedGeometryStudy.H);\n        const object = this.initMesh(scene);\n        const info = _Common__WEBPACK_IMPORTED_MODULE_0__/* .Common */ .G.addRendererInfo();\n        this.render(object, info, this.renderer, scene, camera);\n    }\n    initStats() {\n        this.stats = new three_examples_jsm_libs_stats_module__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z();\n        this.stats.showPanel(0);\n        document.body.appendChild(this.stats.dom);\n    }\n    initMesh(scene) {\n        // Override me\n        return new three__WEBPACK_IMPORTED_MODULE_2__.Group();\n    }\n    render(mergedMesh, infoContainer, renderer, scene, camera) {\n        const rendering = () => {\n            mergedMesh.rotation.x += 0.01;\n            mergedMesh.rotation.y += 0.01;\n            mergedMesh.rotation.z += 0.01;\n            this.stats.begin();\n            renderer.render(scene, camera);\n            this.stats.end();\n            _Common__WEBPACK_IMPORTED_MODULE_0__/* .Common */ .G.updateRendererInfo(infoContainer, renderer.info.render);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n}\nMergedGeometryStudy.W = 1280;\nMergedGeometryStudy.H = 800;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODk3MS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0U7QUFDYjtBQUN2QjtBQUUzQixNQUFNLG1CQUFtQjtJQU05QjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixNQUFNLEtBQUssR0FBRyxvREFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpDLE1BQU0sTUFBTSxHQUFHLG9EQUFNLENBQUMsVUFBVSxDQUM5QixLQUFLLEVBQ0wsbUJBQW1CLENBQUMsQ0FBQyxFQUNyQixtQkFBbUIsQ0FBQyxDQUFDLENBQ3RCLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxHQUFHLG9EQUFNLENBQUMsWUFBWSxDQUNqQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQ3JCLG1CQUFtQixDQUFDLENBQUMsQ0FDdEIsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsTUFBTSxJQUFJLEdBQUcsb0RBQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV0QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVPLFNBQVM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUkscUZBQUssRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVTLFFBQVEsQ0FBQyxLQUFZO1FBQzdCLGNBQWM7UUFDZCxPQUFPLElBQUksd0NBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxNQUFNLENBQ1gsVUFBb0IsRUFDcEIsYUFBNkIsRUFDN0IsUUFBdUIsRUFDdkIsS0FBWSxFQUNaLE1BQWM7UUFFZCxNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDckIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO1lBQzlCLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztZQUM5QixVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7WUFFOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNuQixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRWpCLG9EQUFNLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0QscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDO1FBQ0YsU0FBUyxFQUFFLENBQUM7SUFDZCxDQUFDOztBQXhEc0IscUJBQUMsR0FBRyxJQUFJLENBQUM7QUFDVCxxQkFBQyxHQUFHLEdBQUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlanMtbGFiLy4vc3JjL01lcmdlZEdlb21ldHJ5U3R1ZHkudHM/MzRmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmEsIEdyb3VwLCBPYmplY3QzRCwgU2NlbmUsIFdlYkdMUmVuZGVyZXIgfSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCBTdGF0cyBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xpYnMvc3RhdHMubW9kdWxlXCI7XG5pbXBvcnQgeyBDb21tb24gfSBmcm9tIFwiLi9Db21tb25cIjtcblxuZXhwb3J0IGNsYXNzIE1lcmdlZEdlb21ldHJ5U3R1ZHkge1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFcgPSAxMjgwO1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEggPSA4MDA7XG4gIHByb3RlY3RlZCBzdGF0cztcbiAgcHJvdGVjdGVkIHJlbmRlcmVyOiBXZWJHTFJlbmRlcmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdFN0YXRzKCk7XG4gICAgY29uc3Qgc2NlbmUgPSBDb21tb24uaW5pdFNjZW5lKCk7XG5cbiAgICBjb25zdCBjYW1lcmEgPSBDb21tb24uaW5pdENhbWVyYShcbiAgICAgIHNjZW5lLFxuICAgICAgTWVyZ2VkR2VvbWV0cnlTdHVkeS5XLFxuICAgICAgTWVyZ2VkR2VvbWV0cnlTdHVkeS5IXG4gICAgKTtcbiAgICB0aGlzLnJlbmRlcmVyID0gQ29tbW9uLmluaXRSZW5kZXJlcihcbiAgICAgIE1lcmdlZEdlb21ldHJ5U3R1ZHkuVyxcbiAgICAgIE1lcmdlZEdlb21ldHJ5U3R1ZHkuSFxuICAgICk7XG5cbiAgICBjb25zdCBvYmplY3QgPSB0aGlzLmluaXRNZXNoKHNjZW5lKTtcbiAgICBjb25zdCBpbmZvID0gQ29tbW9uLmFkZFJlbmRlcmVySW5mbygpO1xuXG4gICAgdGhpcy5yZW5kZXIob2JqZWN0LCBpbmZvLCB0aGlzLnJlbmRlcmVyLCBzY2VuZSwgY2FtZXJhKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFN0YXRzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdHMgPSBuZXcgU3RhdHMoKTtcbiAgICB0aGlzLnN0YXRzLnNob3dQYW5lbCgwKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc3RhdHMuZG9tKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0TWVzaChzY2VuZTogU2NlbmUpOiBPYmplY3QzRCB7XG4gICAgLy8gT3ZlcnJpZGUgbWVcbiAgICByZXR1cm4gbmV3IEdyb3VwKCk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKFxuICAgIG1lcmdlZE1lc2g6IE9iamVjdDNELFxuICAgIGluZm9Db250YWluZXI6IEhUTUxEaXZFbGVtZW50LFxuICAgIHJlbmRlcmVyOiBXZWJHTFJlbmRlcmVyLFxuICAgIHNjZW5lOiBTY2VuZSxcbiAgICBjYW1lcmE6IENhbWVyYVxuICApIHtcbiAgICBjb25zdCByZW5kZXJpbmcgPSAoKSA9PiB7XG4gICAgICBtZXJnZWRNZXNoLnJvdGF0aW9uLnggKz0gMC4wMTtcbiAgICAgIG1lcmdlZE1lc2gucm90YXRpb24ueSArPSAwLjAxO1xuICAgICAgbWVyZ2VkTWVzaC5yb3RhdGlvbi56ICs9IDAuMDE7XG5cbiAgICAgIHRoaXMuc3RhdHMuYmVnaW4oKTtcbiAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICAgIHRoaXMuc3RhdHMuZW5kKCk7XG5cbiAgICAgIENvbW1vbi51cGRhdGVSZW5kZXJlckluZm8oaW5mb0NvbnRhaW5lciwgcmVuZGVyZXIuaW5mby5yZW5kZXIpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcmluZyk7XG4gICAgfTtcbiAgICByZW5kZXJpbmcoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8971\n')},4187:(module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n/* unused harmony export StudyMergedGeometryShared */\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6075);\n/* harmony import */ var _MergedGeometryStudy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8971);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MergedGeometryStudy__WEBPACK_IMPORTED_MODULE_0__]);\n_MergedGeometryStudy__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nclass StudyMergedGeometryShared extends _MergedGeometryStudy__WEBPACK_IMPORTED_MODULE_0__/* .MergedGeometryStudy */ .A {\n    initMesh(scene) {\n        const group = new three__WEBPACK_IMPORTED_MODULE_1__.Group();\n        const size = 1;\n        const margin = 0.3;\n        const pitch = size + margin;\n        const numCube = 25;\n        const offset = (numCube * pitch) / 2;\n        const geometry = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(size, size, size);\n        const material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({\n            opacity: 0.5,\n            transparent: true,\n        });\n        const generateCube = (x, y, z) => {\n            const mesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(geometry, material);\n            mesh.position.set(x * pitch - offset, y * pitch - offset, z * pitch - offset);\n            group.add(mesh);\n        };\n        for (let x = 0; x < numCube; x++) {\n            for (let y = 0; y < numCube; y++) {\n                for (let z = 0; z < numCube; z++) {\n                    generateCube(x, y, z);\n                }\n            }\n        }\n        scene.add(group);\n        return group;\n    }\n}\nwindow.onload = () => {\n    const study = new StudyMergedGeometryShared();\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDE4Ny5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkU7QUFDZjtBQUVyRCxNQUFNLHlCQUEwQixTQUFRLDhFQUFtQjtJQUN0RCxRQUFRLENBQUMsS0FBWTtRQUM3QixNQUFNLEtBQUssR0FBRyxJQUFJLHdDQUFLLEVBQUUsQ0FBQztRQUUxQixNQUFNLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUM1QixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkIsTUFBTSxNQUFNLEdBQUcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXJDLE1BQU0sUUFBUSxHQUFHLElBQUksOENBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25ELE1BQU0sUUFBUSxHQUFHLElBQUksb0RBQWlCLENBQUM7WUFDckMsT0FBTyxFQUFFLEdBQUc7WUFDWixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7UUFFSCxNQUFNLFlBQVksR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQUU7WUFDdkQsTUFBTSxJQUFJLEdBQUcsSUFBSSx1Q0FBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDZixDQUFDLEdBQUcsS0FBSyxHQUFHLE1BQU0sRUFDbEIsQ0FBQyxHQUFHLEtBQUssR0FBRyxNQUFNLEVBQ2xCLENBQUMsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUNuQixDQUFDO1lBQ0YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUM7UUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ2pDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFFRCxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGO0FBRUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7SUFDbkIsTUFBTSxLQUFLLEdBQUcsSUFBSSx5QkFBeUIsRUFBRSxDQUFDO0FBQ2hELENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlanMtbGFiLy4vc3JjL1N0dWR5TWVyZ2VkR2VvbWV0cnlTaGFyZWQudHM/MDIxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3hHZW9tZXRyeSwgR3JvdXAsIE1lc2gsIE1lc2hCYXNpY01hdGVyaWFsLCBTY2VuZSB9IGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgTWVyZ2VkR2VvbWV0cnlTdHVkeSB9IGZyb20gXCIuL01lcmdlZEdlb21ldHJ5U3R1ZHlcIjtcblxuZXhwb3J0IGNsYXNzIFN0dWR5TWVyZ2VkR2VvbWV0cnlTaGFyZWQgZXh0ZW5kcyBNZXJnZWRHZW9tZXRyeVN0dWR5IHtcbiAgcHJvdGVjdGVkIGluaXRNZXNoKHNjZW5lOiBTY2VuZSk6IEdyb3VwIHtcbiAgICBjb25zdCBncm91cCA9IG5ldyBHcm91cCgpO1xuXG4gICAgY29uc3Qgc2l6ZSA9IDE7XG4gICAgY29uc3QgbWFyZ2luID0gMC4zO1xuICAgIGNvbnN0IHBpdGNoID0gc2l6ZSArIG1hcmdpbjtcbiAgICBjb25zdCBudW1DdWJlID0gMjU7XG4gICAgY29uc3Qgb2Zmc2V0ID0gKG51bUN1YmUgKiBwaXRjaCkgLyAyO1xuXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgQm94R2VvbWV0cnkoc2l6ZSwgc2l6ZSwgc2l6ZSk7XG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgfSk7XG5cbiAgICBjb25zdCBnZW5lcmF0ZUN1YmUgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgbWVzaCA9IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgICBtZXNoLnBvc2l0aW9uLnNldChcbiAgICAgICAgeCAqIHBpdGNoIC0gb2Zmc2V0LFxuICAgICAgICB5ICogcGl0Y2ggLSBvZmZzZXQsXG4gICAgICAgIHogKiBwaXRjaCAtIG9mZnNldFxuICAgICAgKTtcbiAgICAgIGdyb3VwLmFkZChtZXNoKTtcbiAgICB9O1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgbnVtQ3ViZTsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG51bUN1YmU7IHkrKykge1xuICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IG51bUN1YmU7IHorKykge1xuICAgICAgICAgIGdlbmVyYXRlQ3ViZSh4LCB5LCB6KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNjZW5lLmFkZChncm91cCk7XG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IHN0dWR5ID0gbmV3IFN0dWR5TWVyZ2VkR2VvbWV0cnlTaGFyZWQoKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4187\n")}},__webpack_module_cache__={},webpackQueues,webpackExports,webpackError,resolveQueue,deferred;function __webpack_require__(e){var Q=__webpack_module_cache__[e];if(void 0!==Q)return Q.exports;var U=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(U.exports,U,U.exports,__webpack_require__),U.loaded=!0,U.exports}__webpack_require__.m=__webpack_modules__,webpackQueues="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",webpackExports="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",webpackError="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",resolveQueue=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},__webpack_require__.a=(e,Q,U)=>{var F;U&&((F=[]).d=-1);var B,_,n,c=new Set,s=e.exports,r=new Promise(((e,Q)=>{n=Q,_=e}));r[webpackExports]=s,r[webpackQueues]=e=>(F&&e(F),c.forEach(e),r.catch((e=>{}))),e.exports=r,Q((e=>{var Q;B=(e=>e.map((e=>{if(null!==e&&"object"==typeof e){if(e[webpackQueues])return e;if(e.then){var Q=[];Q.d=0,e.then((e=>{U[webpackExports]=e,resolveQueue(Q)}),(e=>{U[webpackError]=e,resolveQueue(Q)}));var U={};return U[webpackQueues]=e=>e(Q),U}}var F={};return F[webpackQueues]=e=>{},F[webpackExports]=e,F})))(e);var U=()=>B.map((e=>{if(e[webpackError])throw e[webpackError];return e[webpackExports]})),_=new Promise((e=>{(Q=()=>e(U)).r=0;var _=e=>e!==F&&!c.has(e)&&(c.add(e),e&&!e.d&&(Q.r++,e.push(Q)));B.map((e=>e[webpackQueues](_)))}));return Q.r?_:U()}),(e=>(e?n(r[webpackError]=e):_(s),resolveQueue(F)))),F&&F.d<0&&(F.d=0)},deferred=[],__webpack_require__.O=(e,Q,U,F)=>{if(!Q){var B=1/0;for(s=0;s<deferred.length;s++){for(var[Q,U,F]=deferred[s],_=!0,n=0;n<Q.length;n++)(!1&F||B>=F)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](Q[n])))?Q.splice(n--,1):(_=!1,F<B&&(B=F));if(_){deferred.splice(s--,1);var c=U();void 0!==c&&(e=c)}}return e}F=F||0;for(var s=deferred.length;s>0&&deferred[s-1][2]>F;s--)deferred[s]=deferred[s-1];deferred[s]=[Q,U,F]},__webpack_require__.n=e=>{var Q=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(Q,{a:Q}),Q},__webpack_require__.d=(e,Q)=>{for(var U in Q)__webpack_require__.o(Q,U)&&!__webpack_require__.o(e,U)&&Object.defineProperty(e,U,{enumerable:!0,get:Q[U]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,Q)=>Object.prototype.hasOwnProperty.call(e,Q),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),__webpack_require__.j=737,(()=>{var e={737:0};__webpack_require__.O.j=Q=>0===e[Q];var Q=(Q,U)=>{var F,B,[_,n,c]=U,s=0;if(_.some((Q=>0!==e[Q]))){for(F in n)__webpack_require__.o(n,F)&&(__webpack_require__.m[F]=n[F]);if(c)var r=c(__webpack_require__)}for(Q&&Q(U);s<_.length;s++)B=_[s],__webpack_require__.o(e,B)&&e[B]&&e[B][0](),e[B]=0;return __webpack_require__.O(r)},U=self.webpackChunkthreejs_lab=self.webpackChunkthreejs_lab||[];U.forEach(Q.bind(null,0)),U.push=Q.bind(null,U.push.bind(U))})();var __webpack_exports__=__webpack_require__.O(void 0,[736],(()=>__webpack_require__(4187)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();