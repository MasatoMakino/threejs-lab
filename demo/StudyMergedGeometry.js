(()=>{"use strict";var __webpack_modules__={7390:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval('\n// UNUSED EXPORTS: StudyMergedGeometry\n\n// EXTERNAL MODULE: ./node_modules/three/build/three.module.js\nvar three_module = __webpack_require__(6075);\n// EXTERNAL MODULE: ./node_modules/three/examples/jsm/utils/BufferGeometryUtils.js\nvar BufferGeometryUtils = __webpack_require__(6993);\n// EXTERNAL MODULE: ./node_modules/three/examples/jsm/libs/stats.module.js\nvar stats_module = __webpack_require__(2304);\n// EXTERNAL MODULE: ./node_modules/three/examples/jsm/controls/OrbitControls.js\nvar OrbitControls = __webpack_require__(8012);\n;// CONCATENATED MODULE: ./src/Common.ts\n\n\nclass Common {\n    static initScene() {\n        const scene = new three_module.Scene();\n        return scene;\n    }\n    static initLight(scene) {\n        const ambientLight = new three_module.AmbientLight(0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    }\n    static initCamera(scene, W, H, near = 1, far = 400) {\n        const camera = new three_module.PerspectiveCamera(45, W / H, near, far);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    }\n    static initControl(camera, render) {\n        let domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        const control = new OrbitControls/* OrbitControls */.z(camera, domElement);\n        control.update();\n        return control;\n    }\n    static initRenderer(W, H, color = 0x000000, id = "webgl-canvas", antialias = true) {\n        const renderer = new three_module.WebGLRenderer({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        renderer.setClearColor(new three_module.Color(color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        return renderer;\n    }\n    static initHelper(scene) {\n        const axesHelper = new three_module.AxesHelper(30);\n        scene.add(axesHelper);\n    }\n    static render(control, renderer, scene, camera, onBeforeRender) {\n        const rendering = () => {\n            if (onBeforeRender) {\n                onBeforeRender();\n            }\n            control.update();\n            renderer.render(scene, camera);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n    static addRendererInfo() {\n        const info = document.createElement("div");\n        document.body.appendChild(info);\n        return info;\n    }\n    static updateRendererInfo(div, info) {\n        div.innerText = JSON.stringify(info);\n    }\n}\n\n;// CONCATENATED MODULE: ./src/MergedGeometryStudy.ts\n\n\n\nclass MergedGeometryStudy {\n    constructor() {\n        this.initStats();\n        const scene = Common.initScene();\n        const camera = Common.initCamera(scene, MergedGeometryStudy.W, MergedGeometryStudy.H);\n        this.renderer = Common.initRenderer(MergedGeometryStudy.W, MergedGeometryStudy.H);\n        const object = this.initMesh(scene);\n        const info = Common.addRendererInfo();\n        this.render(object, info, this.renderer, scene, camera);\n    }\n    initStats() {\n        this.stats = new stats_module/* default */.Z();\n        this.stats.showPanel(0);\n        document.body.appendChild(this.stats.dom);\n    }\n    initMesh(scene) {\n        // Override me\n        return new three_module.Group();\n    }\n    render(mergedMesh, infoContainer, renderer, scene, camera) {\n        const rendering = () => {\n            mergedMesh.rotation.x += 0.01;\n            mergedMesh.rotation.y += 0.01;\n            mergedMesh.rotation.z += 0.01;\n            this.stats.begin();\n            renderer.render(scene, camera);\n            this.stats.end();\n            Common.updateRendererInfo(infoContainer, renderer.info.render);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n}\nMergedGeometryStudy.W = 1280;\nMergedGeometryStudy.H = 800;\n\n;// CONCATENATED MODULE: ./src/StudyMergedGeometry.ts\n\n\n\nclass StudyMergedGeometry extends MergedGeometryStudy {\n    initMesh(scene) {\n        const geometryArray = [];\n        const size = 1;\n        const margin = 0.3;\n        const pitch = size + margin;\n        const numCube = 40;\n        const offset = (numCube * pitch) / 2;\n        const generateCube = (x, y, z) => {\n            const geometry = new three_module.BoxGeometry();\n            const positions = geometry.getAttribute("position");\n            const count = positions.count;\n            geometry.setAttribute("color", new three_module.BufferAttribute(new Float32Array(count * 4), 4));\n            const colors = geometry.getAttribute("color");\n            for (let i = 0; i < count; i++) {\n                positions.setXYZ(i, positions.getX(i) + x * pitch - offset, positions.getY(i) + y * pitch - offset, positions.getZ(i) + z * pitch - offset);\n                colors.setXYZW(i, x / numCube, y / numCube, z / numCube, 0.05);\n            }\n            geometryArray.push(geometry);\n        };\n        for (let x = 0; x < numCube; x++) {\n            for (let y = 0; y < numCube; y++) {\n                for (let z = 0; z < numCube; z++) {\n                    generateCube(x, y, z);\n                }\n            }\n        }\n        const mergedMesh = new three_module.Mesh((0,BufferGeometryUtils/* mergeGeometries */.n4)(geometryArray), new three_module.MeshBasicMaterial({\n            transparent: true,\n            vertexColors: true,\n            depthTest: false,\n            depthWrite: false,\n        }));\n        scene.add(mergedMesh);\n        return mergedMesh;\n    }\n}\nStudyMergedGeometry.W = 1280;\nStudyMergedGeometry.H = 800;\nwindow.onload = () => {\n    const study = new StudyMergedGeometry();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cz83MzMwIiwid2VicGFjazovL3RocmVlanMtbGFiLy4vc3JjL01lcmdlZEdlb21ldHJ5U3R1ZHkudHM/MzRmNyIsIndlYnBhY2s6Ly90aHJlZWpzLWxhYi8uL3NyYy9TdHVkeU1lcmdlZEdlb21ldHJ5LnRzPzg1NWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQW1iaWVudExpZ2h0LFxuICBBeGVzSGVscGVyLFxuICBDYW1lcmEsXG4gIENvbG9yLFxuICBQZXJzcGVjdGl2ZUNhbWVyYSxcbiAgU2NlbmUsXG4gIFdlYkdMUmVuZGVyZXIsXG59IGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9sc1wiO1xuXG5leHBvcnQgY2xhc3MgQ29tbW9uIHtcbiAgcHVibGljIHN0YXRpYyBpbml0U2NlbmUoKSB7XG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgU2NlbmUoKTtcbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRMaWdodChzY2VuZSkge1xuICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBBbWJpZW50TGlnaHQoMHhmZmZmZmYsIDEuMCk7XG4gICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XG4gICAgcmV0dXJuIGFtYmllbnRMaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdENhbWVyYShcbiAgICBzY2VuZSxcbiAgICBXLFxuICAgIEgsXG4gICAgbmVhciA9IDEsXG4gICAgZmFyID0gNDAwXG4gICk6IFBlcnNwZWN0aXZlQ2FtZXJhIHtcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgUGVyc3BlY3RpdmVDYW1lcmEoNDUsIFcgLyBILCBuZWFyLCBmYXIpO1xuICAgIGNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMCwgMTAwKTtcbiAgICBjYW1lcmEudXBkYXRlTWF0cml4V29ybGQoZmFsc2UpO1xuICAgIHNjZW5lLmFkZChjYW1lcmEpO1xuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRDb250cm9sKGNhbWVyYSwgcmVuZGVyOiBXZWJHTFJlbmRlcmVyKTogT3JiaXRDb250cm9scyB7XG4gICAgbGV0IGRvbUVsZW1lbnQ7XG4gICAgaWYgKHJlbmRlcikge1xuICAgICAgZG9tRWxlbWVudCA9IHJlbmRlci5kb21FbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCBjb250cm9sID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCBkb21FbGVtZW50KTtcbiAgICBjb250cm9sLnVwZGF0ZSgpO1xuICAgIHJldHVybiBjb250cm9sO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0UmVuZGVyZXIoXG4gICAgVzogbnVtYmVyLFxuICAgIEg6IG51bWJlcixcbiAgICBjb2xvcjogbnVtYmVyID0gMHgwMDAwMDAsXG4gICAgaWQ6IHN0cmluZyA9IFwid2ViZ2wtY2FudmFzXCIsXG4gICAgYW50aWFsaWFzOiBib29sZWFuID0gdHJ1ZVxuICApIHtcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBXZWJHTFJlbmRlcmVyKHtcbiAgICAgIGNhbnZhczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpIGFzIEhUTUxDYW52YXNFbGVtZW50LFxuICAgICAgYW50aWFsaWFzOiBhbnRpYWxpYXMsXG4gICAgfSk7XG4gICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvcihuZXcgQ29sb3IoY29sb3IpKTtcbiAgICByZW5kZXJlci5zZXRTaXplKFcsIEgpO1xuICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuICAgIHJldHVybiByZW5kZXJlcjtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdEhlbHBlcihzY2VuZTogU2NlbmUpOiB2b2lkIHtcbiAgICBjb25zdCBheGVzSGVscGVyID0gbmV3IEF4ZXNIZWxwZXIoMzApO1xuICAgIHNjZW5lLmFkZChheGVzSGVscGVyKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVuZGVyKFxuICAgIGNvbnRyb2w6IE9yYml0Q29udHJvbHMsXG4gICAgcmVuZGVyZXI6IFdlYkdMUmVuZGVyZXIsXG4gICAgc2NlbmU6IFNjZW5lLFxuICAgIGNhbWVyYTogQ2FtZXJhLFxuICAgIG9uQmVmb3JlUmVuZGVyPzogKCkgPT4gdm9pZFxuICApIHtcbiAgICBjb25zdCByZW5kZXJpbmcgPSAoKSA9PiB7XG4gICAgICBpZiAob25CZWZvcmVSZW5kZXIpIHtcbiAgICAgICAgb25CZWZvcmVSZW5kZXIoKTtcbiAgICAgIH1cbiAgICAgIGNvbnRyb2wudXBkYXRlKCk7XG4gICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyaW5nKTtcbiAgICB9O1xuICAgIHJlbmRlcmluZygpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhZGRSZW5kZXJlckluZm8oKTogSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gICAgcmV0dXJuIGluZm87XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHVwZGF0ZVJlbmRlcmVySW5mbyhkaXY6IEhUTUxEaXZFbGVtZW50LCBpbmZvOiBhbnkpOiB2b2lkIHtcbiAgICBkaXYuaW5uZXJUZXh0ID0gSlNPTi5zdHJpbmdpZnkoaW5mbyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENhbWVyYSwgR3JvdXAsIE9iamVjdDNELCBTY2VuZSwgV2ViR0xSZW5kZXJlciB9IGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IFN0YXRzIGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbGlicy9zdGF0cy5tb2R1bGVcIjtcbmltcG9ydCB7IENvbW1vbiB9IGZyb20gXCIuL0NvbW1vblwiO1xuXG5leHBvcnQgY2xhc3MgTWVyZ2VkR2VvbWV0cnlTdHVkeSB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVyA9IDEyODA7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSCA9IDgwMDtcbiAgcHJvdGVjdGVkIHN0YXRzO1xuICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFdlYkdMUmVuZGVyZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0U3RhdHMoKTtcbiAgICBjb25zdCBzY2VuZSA9IENvbW1vbi5pbml0U2NlbmUoKTtcblxuICAgIGNvbnN0IGNhbWVyYSA9IENvbW1vbi5pbml0Q2FtZXJhKFxuICAgICAgc2NlbmUsXG4gICAgICBNZXJnZWRHZW9tZXRyeVN0dWR5LlcsXG4gICAgICBNZXJnZWRHZW9tZXRyeVN0dWR5LkhcbiAgICApO1xuICAgIHRoaXMucmVuZGVyZXIgPSBDb21tb24uaW5pdFJlbmRlcmVyKFxuICAgICAgTWVyZ2VkR2VvbWV0cnlTdHVkeS5XLFxuICAgICAgTWVyZ2VkR2VvbWV0cnlTdHVkeS5IXG4gICAgKTtcblxuICAgIGNvbnN0IG9iamVjdCA9IHRoaXMuaW5pdE1lc2goc2NlbmUpO1xuICAgIGNvbnN0IGluZm8gPSBDb21tb24uYWRkUmVuZGVyZXJJbmZvKCk7XG5cbiAgICB0aGlzLnJlbmRlcihvYmplY3QsIGluZm8sIHRoaXMucmVuZGVyZXIsIHNjZW5lLCBjYW1lcmEpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0U3RhdHMoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0cyA9IG5ldyBTdGF0cygpO1xuICAgIHRoaXMuc3RhdHMuc2hvd1BhbmVsKDApO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zdGF0cy5kb20pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRNZXNoKHNjZW5lOiBTY2VuZSk6IE9iamVjdDNEIHtcbiAgICAvLyBPdmVycmlkZSBtZVxuICAgIHJldHVybiBuZXcgR3JvdXAoKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoXG4gICAgbWVyZ2VkTWVzaDogT2JqZWN0M0QsXG4gICAgaW5mb0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQsXG4gICAgcmVuZGVyZXI6IFdlYkdMUmVuZGVyZXIsXG4gICAgc2NlbmU6IFNjZW5lLFxuICAgIGNhbWVyYTogQ2FtZXJhXG4gICkge1xuICAgIGNvbnN0IHJlbmRlcmluZyA9ICgpID0+IHtcbiAgICAgIG1lcmdlZE1lc2gucm90YXRpb24ueCArPSAwLjAxO1xuICAgICAgbWVyZ2VkTWVzaC5yb3RhdGlvbi55ICs9IDAuMDE7XG4gICAgICBtZXJnZWRNZXNoLnJvdGF0aW9uLnogKz0gMC4wMTtcblxuICAgICAgdGhpcy5zdGF0cy5iZWdpbigpO1xuICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgdGhpcy5zdGF0cy5lbmQoKTtcblxuICAgICAgQ29tbW9uLnVwZGF0ZVJlbmRlcmVySW5mbyhpbmZvQ29udGFpbmVyLCByZW5kZXJlci5pbmZvLnJlbmRlcik7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyaW5nKTtcbiAgICB9O1xuICAgIHJlbmRlcmluZygpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBCb3hHZW9tZXRyeSxcbiAgQnVmZmVyQXR0cmlidXRlLFxuICBNZXNoLFxuICBNZXNoQmFzaWNNYXRlcmlhbCxcbiAgU2NlbmUsXG59IGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHtcbiAgbWVyZ2VCdWZmZXJHZW9tZXRyaWVzLFxuICBtZXJnZUdlb21ldHJpZXMsXG59IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vdXRpbHMvQnVmZmVyR2VvbWV0cnlVdGlscy5qc1wiO1xuaW1wb3J0IHsgTWVyZ2VkR2VvbWV0cnlTdHVkeSB9IGZyb20gXCIuL01lcmdlZEdlb21ldHJ5U3R1ZHlcIjtcblxuZXhwb3J0IGNsYXNzIFN0dWR5TWVyZ2VkR2VvbWV0cnkgZXh0ZW5kcyBNZXJnZWRHZW9tZXRyeVN0dWR5IHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBXID0gMTI4MDtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBIID0gODAwO1xuICBwcm90ZWN0ZWQgc3RhdHM7XG5cbiAgcHJvdGVjdGVkIGluaXRNZXNoKHNjZW5lOiBTY2VuZSk6IE1lc2gge1xuICAgIGNvbnN0IGdlb21ldHJ5QXJyYXk6IEJveEdlb21ldHJ5W10gPSBbXTtcblxuICAgIGNvbnN0IHNpemUgPSAxO1xuICAgIGNvbnN0IG1hcmdpbiA9IDAuMztcbiAgICBjb25zdCBwaXRjaCA9IHNpemUgKyBtYXJnaW47XG4gICAgY29uc3QgbnVtQ3ViZSA9IDQwO1xuICAgIGNvbnN0IG9mZnNldCA9IChudW1DdWJlICogcGl0Y2gpIC8gMjtcblxuICAgIGNvbnN0IGdlbmVyYXRlQ3ViZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBCb3hHZW9tZXRyeSgpO1xuICAgICAgY29uc3QgcG9zaXRpb25zID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIik7XG4gICAgICBjb25zdCBjb3VudCA9IHBvc2l0aW9ucy5jb3VudDtcbiAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJjb2xvclwiLFxuICAgICAgICBuZXcgQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY291bnQgKiA0KSwgNClcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGNvbG9ycyA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZShcImNvbG9yXCIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9ucy5zZXRYWVooXG4gICAgICAgICAgaSxcbiAgICAgICAgICBwb3NpdGlvbnMuZ2V0WChpKSArIHggKiBwaXRjaCAtIG9mZnNldCxcbiAgICAgICAgICBwb3NpdGlvbnMuZ2V0WShpKSArIHkgKiBwaXRjaCAtIG9mZnNldCxcbiAgICAgICAgICBwb3NpdGlvbnMuZ2V0WihpKSArIHogKiBwaXRjaCAtIG9mZnNldFxuICAgICAgICApO1xuICAgICAgICBjb2xvcnMuc2V0WFlaVyhpLCB4IC8gbnVtQ3ViZSwgeSAvIG51bUN1YmUsIHogLyBudW1DdWJlLCAwLjA1KTtcbiAgICAgIH1cbiAgICAgIGdlb21ldHJ5QXJyYXkucHVzaChnZW9tZXRyeSk7XG4gICAgfTtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgbnVtQ3ViZTsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG51bUN1YmU7IHkrKykge1xuICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IG51bUN1YmU7IHorKykge1xuICAgICAgICAgIGdlbmVyYXRlQ3ViZSh4LCB5LCB6KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1lcmdlZE1lc2ggPSBuZXcgTWVzaChcbiAgICAgIG1lcmdlR2VvbWV0cmllcyhnZW9tZXRyeUFycmF5KSxcbiAgICAgIG5ldyBNZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgICB2ZXJ0ZXhDb2xvcnM6IHRydWUsXG4gICAgICAgIGRlcHRoVGVzdDogZmFsc2UsXG4gICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgc2NlbmUuYWRkKG1lcmdlZE1lc2gpO1xuICAgIHJldHVybiBtZXJnZWRNZXNoO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IHN0dWR5ID0gbmV3IFN0dWR5TWVyZ2VkR2VvbWV0cnkoKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7390\n')}},__webpack_module_cache__={},deferred;function __webpack_require__(Q){var U=__webpack_module_cache__[Q];if(void 0!==U)return U.exports;var F=__webpack_module_cache__[Q]={id:Q,loaded:!1,exports:{}};return __webpack_modules__[Q].call(F.exports,F,F.exports,__webpack_require__),F.loaded=!0,F.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(Q,U,F,B)=>{if(!U){var e=1/0;for(c=0;c<deferred.length;c++){for(var[U,F,B]=deferred[c],s=!0,n=0;n<U.length;n++)(!1&B||e>=B)&&Object.keys(__webpack_require__.O).every((Q=>__webpack_require__.O[Q](U[n])))?U.splice(n--,1):(s=!1,B<e&&(e=B));if(s){deferred.splice(c--,1);var t=F();void 0!==t&&(Q=t)}}return Q}B=B||0;for(var c=deferred.length;c>0&&deferred[c-1][2]>B;c--)deferred[c]=deferred[c-1];deferred[c]=[U,F,B]},__webpack_require__.n=Q=>{var U=Q&&Q.__esModule?()=>Q.default:()=>Q;return __webpack_require__.d(U,{a:U}),U},__webpack_require__.d=(Q,U)=>{for(var F in U)__webpack_require__.o(U,F)&&!__webpack_require__.o(Q,F)&&Object.defineProperty(Q,F,{enumerable:!0,get:U[F]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(Q){if("object"==typeof window)return window}}(),__webpack_require__.o=(Q,U)=>Object.prototype.hasOwnProperty.call(Q,U),__webpack_require__.r=Q=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},__webpack_require__.nmd=Q=>(Q.paths=[],Q.children||(Q.children=[]),Q),__webpack_require__.j=928,(()=>{var Q={928:0};__webpack_require__.O.j=U=>0===Q[U];var U=(U,F)=>{var B,e,[s,n,t]=F,c=0;if(s.some((U=>0!==Q[U]))){for(B in n)__webpack_require__.o(n,B)&&(__webpack_require__.m[B]=n[B]);if(t)var I=t(__webpack_require__)}for(U&&U(F);c<s.length;c++)e=s[c],__webpack_require__.o(Q,e)&&Q[e]&&Q[e][0](),Q[e]=0;return __webpack_require__.O(I)},F=self.webpackChunkthreejs_lab=self.webpackChunkthreejs_lab||[];F.forEach(U.bind(null,0)),F.push=U.bind(null,F.push.bind(F))})();var __webpack_exports__=__webpack_require__.O(void 0,[736],(()=>__webpack_require__(7390)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();