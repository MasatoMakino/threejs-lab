(()=>{"use strict";var __webpack_modules__={7513:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval('\n// UNUSED EXPORTS: StudyMergedGeometry\n\n// EXTERNAL MODULE: ./node_modules/three/build/three.module.js\nvar three_module = __webpack_require__(6753);\n// EXTERNAL MODULE: ./node_modules/three/examples/jsm/utils/BufferGeometryUtils.js\nvar BufferGeometryUtils = __webpack_require__(1426);\n// EXTERNAL MODULE: ./node_modules/three/examples/jsm/libs/stats.module.js\nvar stats_module = __webpack_require__(4533);\n// EXTERNAL MODULE: ./node_modules/three/examples/jsm/controls/OrbitControls.js\nvar OrbitControls = __webpack_require__(3580);\n;// CONCATENATED MODULE: ./src/Common.ts\n\n\nvar Common = /** @class */ (function () {\n    function Common() {\n    }\n    Common.initScene = function () {\n        var scene = new three_module.Scene();\n        return scene;\n    };\n    Common.initLight = function (scene) {\n        var ambientLight = new three_module.AmbientLight(0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    };\n    Common.initCamera = function (scene, W, H, near, far) {\n        if (near === void 0) { near = 1; }\n        if (far === void 0) { far = 400; }\n        var camera = new three_module.PerspectiveCamera(45, W / H, near, far);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    };\n    Common.initControl = function (camera, render) {\n        var domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        var control = new OrbitControls/* OrbitControls */.N(camera, domElement);\n        control.update();\n        return control;\n    };\n    Common.initRenderer = function (W, H, color, id, antialias) {\n        if (color === void 0) { color = 0x000000; }\n        if (id === void 0) { id = "webgl-canvas"; }\n        if (antialias === void 0) { antialias = true; }\n        var renderer = new three_module.WebGLRenderer({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        this.initRendererSettings(renderer, color, W, H);\n        return renderer;\n    };\n    Common.initRendererSettings = function (renderer, color, W, H) {\n        renderer.setClearColor(new three_module.Color(color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        console.log("three.js revision: ", three_module.REVISION);\n    };\n    Common.initHelper = function (scene) {\n        var axesHelper = new three_module.AxesHelper(30);\n        scene.add(axesHelper);\n    };\n    Common.render = function (control, renderer, scene, camera, onBeforeRender) {\n        var rendering = function () {\n            if (onBeforeRender) {\n                onBeforeRender();\n            }\n            control.update();\n            renderer.render(scene, camera);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    };\n    Common.addRendererInfo = function () {\n        var info = document.createElement("div");\n        document.body.appendChild(info);\n        return info;\n    };\n    Common.updateRendererInfo = function (div, info) {\n        div.innerText = JSON.stringify(info);\n    };\n    return Common;\n}());\n\n\n;// CONCATENATED MODULE: ./src/MergedGeometryStudy.ts\n\n\n\nvar MergedGeometryStudy = /** @class */ (function () {\n    function MergedGeometryStudy() {\n        this.initStats();\n        var scene = Common.initScene();\n        var camera = Common.initCamera(scene, MergedGeometryStudy.W, MergedGeometryStudy.H);\n        this.renderer = Common.initRenderer(MergedGeometryStudy.W, MergedGeometryStudy.H);\n        var object = this.initMesh(scene);\n        var info = Common.addRendererInfo();\n        this.render(object, info, this.renderer, scene, camera);\n    }\n    MergedGeometryStudy.prototype.initStats = function () {\n        this.stats = new stats_module/* default */.A();\n        this.stats.showPanel(0);\n        document.body.appendChild(this.stats.dom);\n    };\n    MergedGeometryStudy.prototype.initMesh = function (scene) {\n        // Override me\n        return new three_module.Group();\n    };\n    MergedGeometryStudy.prototype.render = function (mergedMesh, infoContainer, renderer, scene, camera) {\n        var _this = this;\n        var rendering = function () {\n            mergedMesh.rotation.x += 0.01;\n            mergedMesh.rotation.y += 0.01;\n            mergedMesh.rotation.z += 0.01;\n            _this.stats.begin();\n            renderer.render(scene, camera);\n            _this.stats.end();\n            Common.updateRendererInfo(infoContainer, renderer.info.render);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    };\n    MergedGeometryStudy.W = 1280;\n    MergedGeometryStudy.H = 800;\n    return MergedGeometryStudy;\n}());\n\n\n;// CONCATENATED MODULE: ./src/StudyMergedGeometry.ts\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== "function" && b !== null)\n            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\nvar StudyMergedGeometry = /** @class */ (function (_super) {\n    __extends(StudyMergedGeometry, _super);\n    function StudyMergedGeometry() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    StudyMergedGeometry.prototype.initMesh = function (scene) {\n        var geometryArray = [];\n        var size = 1;\n        var margin = 0.3;\n        var pitch = size + margin;\n        var numCube = 40;\n        var offset = (numCube * pitch) / 2;\n        var generateCube = function (x, y, z) {\n            var geometry = new three_module.BoxGeometry();\n            var positions = geometry.getAttribute("position");\n            var count = positions.count;\n            geometry.setAttribute("color", new three_module.BufferAttribute(new Float32Array(count * 4), 4));\n            var colors = geometry.getAttribute("color");\n            for (var i = 0; i < count; i++) {\n                positions.setXYZ(i, positions.getX(i) + x * pitch - offset, positions.getY(i) + y * pitch - offset, positions.getZ(i) + z * pitch - offset);\n                colors.setXYZW(i, x / numCube, y / numCube, z / numCube, 0.05);\n            }\n            geometryArray.push(geometry);\n        };\n        for (var x = 0; x < numCube; x++) {\n            for (var y = 0; y < numCube; y++) {\n                for (var z = 0; z < numCube; z++) {\n                    generateCube(x, y, z);\n                }\n            }\n        }\n        var mergedMesh = new three_module.Mesh((0,BufferGeometryUtils/* mergeGeometries */.pP)(geometryArray), new three_module.MeshBasicMaterial({\n            transparent: true,\n            vertexColors: true,\n            depthTest: false,\n            depthWrite: false,\n        }));\n        scene.add(mergedMesh);\n        return mergedMesh;\n    };\n    StudyMergedGeometry.W = 1280;\n    StudyMergedGeometry.H = 800;\n    return StudyMergedGeometry;\n}(MergedGeometryStudy));\n\nwindow.onload = function () {\n    var study = new StudyMergedGeometry();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEIsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQXZEc0IscUJBQUMsR0FBRyxJQUFJLENBQUM7SUFDVCxxQkFBQyxHQUFHLEdBQUcsQ0FBQztJQXVEakMsMEJBQUM7Q0FBQSxDQXpEd0MsbUJBQW1CLEdBeUQzRDtBQXpEK0I7QUEyRGhDLE1BQU0sQ0FBQyxNQUFNLEdBQUc7SUFDZCxJQUFNLEtBQUssR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUM7QUFDMUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWVqcy1sYWIvLi9zcmMvQ29tbW9uLnRzPzczMzAiLCJ3ZWJwYWNrOi8vdGhyZWVqcy1sYWIvLi9zcmMvTWVyZ2VkR2VvbWV0cnlTdHVkeS50cz8zNGY3Iiwid2VicGFjazovL3RocmVlanMtbGFiLy4vc3JjL1N0dWR5TWVyZ2VkR2VvbWV0cnkudHM/ODU1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBbWJpZW50TGlnaHQsXG4gIEF4ZXNIZWxwZXIsXG4gIENhbWVyYSxcbiAgQ29sb3IsXG4gIFBlcnNwZWN0aXZlQ2FtZXJhLFxuICBTY2VuZSxcbiAgV2ViR0xSZW5kZXJlcixcbiAgUkVWSVNJT04sXG59IGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQ29tbW9uIHtcbiAgcHVibGljIHN0YXRpYyBpbml0U2NlbmUoKSB7XG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgU2NlbmUoKTtcbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRMaWdodChzY2VuZSkge1xuICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBBbWJpZW50TGlnaHQoMHhmZmZmZmYsIDEuMCk7XG4gICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XG4gICAgcmV0dXJuIGFtYmllbnRMaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdENhbWVyYShcbiAgICBzY2VuZTogU2NlbmUsXG4gICAgVzogbnVtYmVyLFxuICAgIEg6IG51bWJlcixcbiAgICBuZWFyID0gMSxcbiAgICBmYXIgPSA0MDBcbiAgKTogUGVyc3BlY3RpdmVDYW1lcmEge1xuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYSg0NSwgVyAvIEgsIG5lYXIsIGZhcik7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnNldCgwLCAwLCAxMDApO1xuICAgIGNhbWVyYS51cGRhdGVNYXRyaXhXb3JsZChmYWxzZSk7XG4gICAgc2NlbmUuYWRkKGNhbWVyYSk7XG4gICAgcmV0dXJuIGNhbWVyYTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdENvbnRyb2woXG4gICAgY2FtZXJhOiBDYW1lcmEsXG4gICAgcmVuZGVyOiBXZWJHTFJlbmRlcmVyXG4gICk6IE9yYml0Q29udHJvbHMge1xuICAgIGxldCBkb21FbGVtZW50O1xuICAgIGlmIChyZW5kZXIpIHtcbiAgICAgIGRvbUVsZW1lbnQgPSByZW5kZXIuZG9tRWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgY29udHJvbCA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgZG9tRWxlbWVudCk7XG4gICAgY29udHJvbC51cGRhdGUoKTtcbiAgICByZXR1cm4gY29udHJvbDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdFJlbmRlcmVyKFxuICAgIFc6IG51bWJlcixcbiAgICBIOiBudW1iZXIsXG4gICAgY29sb3I6IG51bWJlciA9IDB4MDAwMDAwLFxuICAgIGlkOiBzdHJpbmcgPSBcIndlYmdsLWNhbnZhc1wiLFxuICAgIGFudGlhbGlhczogYm9vbGVhbiA9IHRydWVcbiAgKSB7XG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgV2ViR0xSZW5kZXJlcih7XG4gICAgICBjYW52YXM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICAgIGFudGlhbGlhczogYW50aWFsaWFzLFxuICAgIH0pO1xuICAgIHRoaXMuaW5pdFJlbmRlcmVyU2V0dGluZ3MocmVuZGVyZXIsIGNvbG9yLCBXLCBIKTtcbiAgICByZXR1cm4gcmVuZGVyZXI7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBpbml0UmVuZGVyZXJTZXR0aW5ncyhcbiAgICByZW5kZXJlcjogV2ViR0xSZW5kZXJlcixcbiAgICBjb2xvcjogbnVtYmVyLFxuICAgIFc6IG51bWJlcixcbiAgICBIOiBudW1iZXJcbiAgKSB7XG4gICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvcihuZXcgQ29sb3IoY29sb3IpKTtcbiAgICByZW5kZXJlci5zZXRTaXplKFcsIEgpO1xuICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuICAgIGNvbnNvbGUubG9nKFwidGhyZWUuanMgcmV2aXNpb246IFwiLCBSRVZJU0lPTik7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRIZWxwZXIoc2NlbmU6IFNjZW5lKTogdm9pZCB7XG4gICAgY29uc3QgYXhlc0hlbHBlciA9IG5ldyBBeGVzSGVscGVyKDMwKTtcbiAgICBzY2VuZS5hZGQoYXhlc0hlbHBlcik7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlbmRlcihcbiAgICBjb250cm9sOiBPcmJpdENvbnRyb2xzLFxuICAgIHJlbmRlcmVyOiBXZWJHTFJlbmRlcmVyLFxuICAgIHNjZW5lOiBTY2VuZSxcbiAgICBjYW1lcmE6IENhbWVyYSxcbiAgICBvbkJlZm9yZVJlbmRlcj86ICgpID0+IHZvaWRcbiAgKSB7XG4gICAgY29uc3QgcmVuZGVyaW5nID0gKCkgPT4ge1xuICAgICAgaWYgKG9uQmVmb3JlUmVuZGVyKSB7XG4gICAgICAgIG9uQmVmb3JlUmVuZGVyKCk7XG4gICAgICB9XG4gICAgICBjb250cm9sLnVwZGF0ZSgpO1xuICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcmluZyk7XG4gICAgfTtcbiAgICByZW5kZXJpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYWRkUmVuZGVyZXJJbmZvKCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluZm8pO1xuICAgIHJldHVybiBpbmZvO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB1cGRhdGVSZW5kZXJlckluZm8oZGl2OiBIVE1MRGl2RWxlbWVudCwgaW5mbzogYW55KTogdm9pZCB7XG4gICAgZGl2LmlubmVyVGV4dCA9IEpTT04uc3RyaW5naWZ5KGluZm8pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDYW1lcmEsIEdyb3VwLCBPYmplY3QzRCwgU2NlbmUsIFdlYkdMUmVuZGVyZXIgfSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCBTdGF0cyBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xpYnMvc3RhdHMubW9kdWxlLmpzXCI7XG5pbXBvcnQgeyBDb21tb24gfSBmcm9tIFwiLi9Db21tb25cIjtcblxuZXhwb3J0IGNsYXNzIE1lcmdlZEdlb21ldHJ5U3R1ZHkge1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFcgPSAxMjgwO1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEggPSA4MDA7XG4gIHByb3RlY3RlZCBzdGF0cztcbiAgcHJvdGVjdGVkIHJlbmRlcmVyOiBXZWJHTFJlbmRlcmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdFN0YXRzKCk7XG4gICAgY29uc3Qgc2NlbmUgPSBDb21tb24uaW5pdFNjZW5lKCk7XG5cbiAgICBjb25zdCBjYW1lcmEgPSBDb21tb24uaW5pdENhbWVyYShcbiAgICAgIHNjZW5lLFxuICAgICAgTWVyZ2VkR2VvbWV0cnlTdHVkeS5XLFxuICAgICAgTWVyZ2VkR2VvbWV0cnlTdHVkeS5IXG4gICAgKTtcbiAgICB0aGlzLnJlbmRlcmVyID0gQ29tbW9uLmluaXRSZW5kZXJlcihcbiAgICAgIE1lcmdlZEdlb21ldHJ5U3R1ZHkuVyxcbiAgICAgIE1lcmdlZEdlb21ldHJ5U3R1ZHkuSFxuICAgICk7XG5cbiAgICBjb25zdCBvYmplY3QgPSB0aGlzLmluaXRNZXNoKHNjZW5lKTtcbiAgICBjb25zdCBpbmZvID0gQ29tbW9uLmFkZFJlbmRlcmVySW5mbygpO1xuXG4gICAgdGhpcy5yZW5kZXIob2JqZWN0LCBpbmZvLCB0aGlzLnJlbmRlcmVyLCBzY2VuZSwgY2FtZXJhKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFN0YXRzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdHMgPSBuZXcgU3RhdHMoKTtcbiAgICB0aGlzLnN0YXRzLnNob3dQYW5lbCgwKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc3RhdHMuZG9tKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0TWVzaChzY2VuZTogU2NlbmUpOiBPYmplY3QzRCB7XG4gICAgLy8gT3ZlcnJpZGUgbWVcbiAgICByZXR1cm4gbmV3IEdyb3VwKCk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKFxuICAgIG1lcmdlZE1lc2g6IE9iamVjdDNELFxuICAgIGluZm9Db250YWluZXI6IEhUTUxEaXZFbGVtZW50LFxuICAgIHJlbmRlcmVyOiBXZWJHTFJlbmRlcmVyLFxuICAgIHNjZW5lOiBTY2VuZSxcbiAgICBjYW1lcmE6IENhbWVyYVxuICApIHtcbiAgICBjb25zdCByZW5kZXJpbmcgPSAoKSA9PiB7XG4gICAgICBtZXJnZWRNZXNoLnJvdGF0aW9uLnggKz0gMC4wMTtcbiAgICAgIG1lcmdlZE1lc2gucm90YXRpb24ueSArPSAwLjAxO1xuICAgICAgbWVyZ2VkTWVzaC5yb3RhdGlvbi56ICs9IDAuMDE7XG5cbiAgICAgIHRoaXMuc3RhdHMuYmVnaW4oKTtcbiAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICAgIHRoaXMuc3RhdHMuZW5kKCk7XG5cbiAgICAgIENvbW1vbi51cGRhdGVSZW5kZXJlckluZm8oaW5mb0NvbnRhaW5lciwgcmVuZGVyZXIuaW5mby5yZW5kZXIpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcmluZyk7XG4gICAgfTtcbiAgICByZW5kZXJpbmcoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQm94R2VvbWV0cnksXG4gIEJ1ZmZlckF0dHJpYnV0ZSxcbiAgTWVzaCxcbiAgTWVzaEJhc2ljTWF0ZXJpYWwsXG4gIFNjZW5lLFxufSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IG1lcmdlR2VvbWV0cmllcyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vdXRpbHMvQnVmZmVyR2VvbWV0cnlVdGlscy5qc1wiO1xuaW1wb3J0IHsgTWVyZ2VkR2VvbWV0cnlTdHVkeSB9IGZyb20gXCIuL01lcmdlZEdlb21ldHJ5U3R1ZHlcIjtcblxuZXhwb3J0IGNsYXNzIFN0dWR5TWVyZ2VkR2VvbWV0cnkgZXh0ZW5kcyBNZXJnZWRHZW9tZXRyeVN0dWR5IHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBXID0gMTI4MDtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBIID0gODAwO1xuICBwcm90ZWN0ZWQgc3RhdHM7XG5cbiAgcHJvdGVjdGVkIGluaXRNZXNoKHNjZW5lOiBTY2VuZSk6IE1lc2gge1xuICAgIGNvbnN0IGdlb21ldHJ5QXJyYXk6IEJveEdlb21ldHJ5W10gPSBbXTtcblxuICAgIGNvbnN0IHNpemUgPSAxO1xuICAgIGNvbnN0IG1hcmdpbiA9IDAuMztcbiAgICBjb25zdCBwaXRjaCA9IHNpemUgKyBtYXJnaW47XG4gICAgY29uc3QgbnVtQ3ViZSA9IDQwO1xuICAgIGNvbnN0IG9mZnNldCA9IChudW1DdWJlICogcGl0Y2gpIC8gMjtcblxuICAgIGNvbnN0IGdlbmVyYXRlQ3ViZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBCb3hHZW9tZXRyeSgpO1xuICAgICAgY29uc3QgcG9zaXRpb25zID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIik7XG4gICAgICBjb25zdCBjb3VudCA9IHBvc2l0aW9ucy5jb3VudDtcbiAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJjb2xvclwiLFxuICAgICAgICBuZXcgQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY291bnQgKiA0KSwgNClcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGNvbG9ycyA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZShcImNvbG9yXCIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9ucy5zZXRYWVooXG4gICAgICAgICAgaSxcbiAgICAgICAgICBwb3NpdGlvbnMuZ2V0WChpKSArIHggKiBwaXRjaCAtIG9mZnNldCxcbiAgICAgICAgICBwb3NpdGlvbnMuZ2V0WShpKSArIHkgKiBwaXRjaCAtIG9mZnNldCxcbiAgICAgICAgICBwb3NpdGlvbnMuZ2V0WihpKSArIHogKiBwaXRjaCAtIG9mZnNldFxuICAgICAgICApO1xuICAgICAgICBjb2xvcnMuc2V0WFlaVyhpLCB4IC8gbnVtQ3ViZSwgeSAvIG51bUN1YmUsIHogLyBudW1DdWJlLCAwLjA1KTtcbiAgICAgIH1cbiAgICAgIGdlb21ldHJ5QXJyYXkucHVzaChnZW9tZXRyeSk7XG4gICAgfTtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgbnVtQ3ViZTsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG51bUN1YmU7IHkrKykge1xuICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IG51bUN1YmU7IHorKykge1xuICAgICAgICAgIGdlbmVyYXRlQ3ViZSh4LCB5LCB6KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1lcmdlZE1lc2ggPSBuZXcgTWVzaChcbiAgICAgIG1lcmdlR2VvbWV0cmllcyhnZW9tZXRyeUFycmF5KSxcbiAgICAgIG5ldyBNZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgICB2ZXJ0ZXhDb2xvcnM6IHRydWUsXG4gICAgICAgIGRlcHRoVGVzdDogZmFsc2UsXG4gICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgc2NlbmUuYWRkKG1lcmdlZE1lc2gpO1xuICAgIHJldHVybiBtZXJnZWRNZXNoO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IHN0dWR5ID0gbmV3IFN0dWR5TWVyZ2VkR2VvbWV0cnkoKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7513\n')}},__webpack_module_cache__={},deferred;function __webpack_require__(Q){var U=__webpack_module_cache__[Q];if(void 0!==U)return U.exports;var e=__webpack_module_cache__[Q]={id:Q,loaded:!1,exports:{}};return __webpack_modules__[Q].call(e.exports,e,e.exports,__webpack_require__),e.loaded=!0,e.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(Q,U,e,F)=>{if(!U){var B=1/0;for(c=0;c<deferred.length;c++){for(var[U,e,F]=deferred[c],n=!0,t=0;t<U.length;t++)(!1&F||B>=F)&&Object.keys(__webpack_require__.O).every((Q=>__webpack_require__.O[Q](U[t])))?U.splice(t--,1):(n=!1,F<B&&(B=F));if(n){deferred.splice(c--,1);var s=e();void 0!==s&&(Q=s)}}return Q}F=F||0;for(var c=deferred.length;c>0&&deferred[c-1][2]>F;c--)deferred[c]=deferred[c-1];deferred[c]=[U,e,F]},__webpack_require__.n=Q=>{var U=Q&&Q.__esModule?()=>Q.default:()=>Q;return __webpack_require__.d(U,{a:U}),U},__webpack_require__.d=(Q,U)=>{for(var e in U)__webpack_require__.o(U,e)&&!__webpack_require__.o(Q,e)&&Object.defineProperty(Q,e,{enumerable:!0,get:U[e]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(Q){if("object"==typeof window)return window}}(),__webpack_require__.o=(Q,U)=>Object.prototype.hasOwnProperty.call(Q,U),__webpack_require__.r=Q=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},__webpack_require__.nmd=Q=>(Q.paths=[],Q.children||(Q.children=[]),Q),__webpack_require__.j=710,(()=>{var Q={710:0};__webpack_require__.O.j=U=>0===Q[U];var U=(U,e)=>{var F,B,[n,t,s]=e,c=0;if(n.some((U=>0!==Q[U]))){for(F in t)__webpack_require__.o(t,F)&&(__webpack_require__.m[F]=t[F]);if(s)var r=s(__webpack_require__)}for(U&&U(e);c<n.length;c++)B=n[c],__webpack_require__.o(Q,B)&&Q[B]&&Q[B][0](),Q[B]=0;return __webpack_require__.O(r)},e=self.webpackChunkthreejs_lab=self.webpackChunkthreejs_lab||[];e.forEach(U.bind(null,0)),e.push=U.bind(null,e.push.bind(e))})();var __webpack_exports__=__webpack_require__.O(void 0,[121],(()=>__webpack_require__(7513)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();