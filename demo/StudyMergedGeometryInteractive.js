(()=>{"use strict";var __webpack_modules__={5017:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval('\n// UNUSED EXPORTS: StudyMergedGeometryInteractive\n\n// EXTERNAL MODULE: ./node_modules/three/build/three.module.js\nvar three_module = __webpack_require__(6075);\n// EXTERNAL MODULE: ./node_modules/three/examples/jsm/utils/BufferGeometryUtils.js\nvar BufferGeometryUtils = __webpack_require__(6993);\n// EXTERNAL MODULE: ./node_modules/three/examples/jsm/controls/OrbitControls.js\nvar OrbitControls = __webpack_require__(8012);\n;// CONCATENATED MODULE: ./src/Common.ts\n\n\nclass Common {\n    static initScene() {\n        const scene = new three_module.Scene();\n        return scene;\n    }\n    static initLight(scene) {\n        const ambientLight = new three_module.AmbientLight(0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    }\n    static initCamera(scene, W, H, near = 1, far = 400) {\n        const camera = new three_module.PerspectiveCamera(45, W / H, near, far);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    }\n    static initControl(camera, render) {\n        let domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        const control = new OrbitControls/* OrbitControls */.z(camera, domElement);\n        control.update();\n        return control;\n    }\n    static initRenderer(W, H, color = 0x000000, id = "webgl-canvas", antialias = true) {\n        const renderer = new three_module.WebGLRenderer({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        renderer.setClearColor(new three_module.Color(color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        console.log("three.js revision: ", three_module.REVISION);\n        return renderer;\n    }\n    static initHelper(scene) {\n        const axesHelper = new three_module.AxesHelper(30);\n        scene.add(axesHelper);\n    }\n    static render(control, renderer, scene, camera, onBeforeRender) {\n        const rendering = () => {\n            if (onBeforeRender) {\n                onBeforeRender();\n            }\n            control.update();\n            renderer.render(scene, camera);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n    static addRendererInfo() {\n        const info = document.createElement("div");\n        document.body.appendChild(info);\n        return info;\n    }\n    static updateRendererInfo(div, info) {\n        div.innerText = JSON.stringify(info);\n    }\n}\n\n// EXTERNAL MODULE: ./node_modules/three/examples/jsm/libs/stats.module.js\nvar stats_module = __webpack_require__(2304);\n;// CONCATENATED MODULE: ./src/MergedGeometryStudy.ts\n\n\n\nclass MergedGeometryStudy {\n    constructor() {\n        this.initStats();\n        const scene = Common.initScene();\n        const camera = Common.initCamera(scene, MergedGeometryStudy.W, MergedGeometryStudy.H);\n        this.renderer = Common.initRenderer(MergedGeometryStudy.W, MergedGeometryStudy.H);\n        const object = this.initMesh(scene);\n        const info = Common.addRendererInfo();\n        this.render(object, info, this.renderer, scene, camera);\n    }\n    initStats() {\n        this.stats = new stats_module/* default */.Z();\n        this.stats.showPanel(0);\n        document.body.appendChild(this.stats.dom);\n    }\n    initMesh(scene) {\n        // Override me\n        return new three_module.Group();\n    }\n    render(mergedMesh, infoContainer, renderer, scene, camera) {\n        const rendering = () => {\n            mergedMesh.rotation.x += 0.01;\n            mergedMesh.rotation.y += 0.01;\n            mergedMesh.rotation.z += 0.01;\n            this.stats.begin();\n            renderer.render(scene, camera);\n            this.stats.end();\n            Common.updateRendererInfo(infoContainer, renderer.info.render);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n}\nMergedGeometryStudy.W = 1280;\nMergedGeometryStudy.H = 800;\n\n;// CONCATENATED MODULE: ./src/StudyMergedGeometryInteractive.ts\n\n\n\n\nclass StudyMergedGeometryInteractive extends MergedGeometryStudy {\n    constructor() {\n        super();\n        this.raycaster = new three_module.Raycaster();\n        this.mousePoint = new three_module.Vector2();\n        this.onPointerMove = (e) => {\n            this.mousePoint.x =\n                (e.clientX / parseInt(this.renderer.domElement.style.width)) * 2 - 1;\n            this.mousePoint.y =\n                -(e.clientY / parseInt(this.renderer.domElement.style.height)) * 2 + 1;\n        };\n        document.addEventListener("pointermove", this.onPointerMove);\n    }\n    initMesh(scene) {\n        const geometryArray = [];\n        const size = 1;\n        const margin = 0.3;\n        const pitch = size + margin;\n        const numCube = 25;\n        const offset = (numCube * pitch) / 2;\n        const generateCube = (x, y, z, idCount) => {\n            const geometry = new three_module.BoxGeometry();\n            const positions = geometry.getAttribute("position");\n            const count = positions.count;\n            geometry.setAttribute("color", new three_module.BufferAttribute(new Float32Array(count * 4), 4));\n            geometry.setAttribute("originalColor", new three_module.BufferAttribute(new Float32Array(count * 4), 4));\n            geometry.setAttribute("mesh_id", new three_module.BufferAttribute(new Float32Array(count), 1));\n            const colors = geometry.getAttribute("color");\n            const originalColor = geometry.getAttribute("originalColor");\n            const idAttribute = geometry.getAttribute("mesh_id");\n            for (let i = 0; i < count; i++) {\n                positions.setXYZ(i, positions.getX(i) + x * pitch - offset, positions.getY(i) + y * pitch - offset, positions.getZ(i) + z * pitch - offset);\n                colors.setXYZW(i, x / numCube, y / numCube, z / numCube, 0.1);\n                originalColor.setXYZW(i, x / numCube, y / numCube, z / numCube, 0.1);\n                idAttribute.setX(i, idCount);\n            }\n            geometryArray.push(geometry);\n        };\n        let idCounter = 0;\n        for (let x = 0; x < numCube; x++) {\n            for (let y = 0; y < numCube; y++) {\n                for (let z = 0; z < numCube; z++) {\n                    generateCube(x, y, z, idCounter);\n                    idCounter++;\n                }\n            }\n        }\n        const mergedMesh = new three_module.Mesh((0,BufferGeometryUtils/* mergeGeometries */.n4)(geometryArray), new three_module.MeshBasicMaterial({ transparent: true, vertexColors: true }));\n        scene.add(mergedMesh);\n        return mergedMesh;\n    }\n    render(mergedMesh, infoContainer, renderer, scene, camera) {\n        const rendering = () => {\n            var _a, _b;\n            const speed = 0.01;\n            mergedMesh.rotation.x += speed;\n            mergedMesh.rotation.y += speed;\n            mergedMesh.rotation.z += speed;\n            mergedMesh.updateMatrix();\n            this.stats.begin();\n            (_a = this.raycaster) === null || _a === void 0 ? void 0 : _a.setFromCamera(this.mousePoint, camera);\n            const intersects = (_b = this.raycaster) === null || _b === void 0 ? void 0 : _b.intersectObject(mergedMesh, false);\n            if ((intersects === null || intersects === void 0 ? void 0 : intersects.length) > 0) {\n                this.updateIntersect(intersects[0], mergedMesh.geometry);\n            }\n            renderer.render(scene, camera);\n            this.stats.end();\n            Common.updateRendererInfo(infoContainer, renderer.info.render);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n    updateIntersect(intersect, geo) {\n        const idAttribute = geo.getAttribute("mesh_id");\n        const face = intersect.face;\n        const meshID = idAttribute.getX(face.a);\n        if (idAttribute.getX(face.a) !== idAttribute.getX(face.b) ||\n            idAttribute.getX(face.a) !== idAttribute.getX(face.c)) {\n            console.log(idAttribute.getX(face.a), idAttribute.getX(face.b), idAttribute.getX(face.c));\n        }\n        const colorAttribute = geo.getAttribute("color");\n        const originalColorAttribute = geo.getAttribute("originalColor");\n        const count = idAttribute.count;\n        for (let i = 0; i < count; i++) {\n            if (idAttribute.getX(i) === meshID) {\n                colorAttribute.setXYZW(i, 1, 1, 1, 1);\n            }\n            else {\n                colorAttribute.setXYZW(i, originalColorAttribute.getX(i), originalColorAttribute.getY(i), originalColorAttribute.getZ(i), originalColorAttribute.getW(i));\n            }\n        }\n        colorAttribute.needsUpdate = true;\n    }\n}\nStudyMergedGeometryInteractive.W = 1280;\nStudyMergedGeometryInteractive.H = 800;\nwindow.onload = () => {\n    const study = new StudyMergedGeometryInteractive();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTAxNy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBU2U7QUFDOEQ7QUFFdEUsTUFBTSxNQUFNO0lBQ1YsTUFBTSxDQUFDLFNBQVM7UUFDckIsTUFBTSxLQUFLLEdBQUcsSUFBSSxrQkFBSyxFQUFFLENBQUM7UUFDMUIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1FBQzNCLE1BQU0sWUFBWSxHQUFHLElBQUkseUJBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QixPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRU0sTUFBTSxDQUFDLFVBQVUsQ0FDdEIsS0FBSyxFQUNMLENBQUMsRUFDRCxDQUFDLEVBQ0QsSUFBSSxHQUFHLENBQUMsRUFDUixHQUFHLEdBQUcsR0FBRztRQUVULE1BQU0sTUFBTSxHQUFHLElBQUksOEJBQWlCLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQXFCO1FBQ3JELElBQUksVUFBVSxDQUFDO1FBQ2YsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUNYLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ2pDLENBQUM7UUFDRCxNQUFNLE9BQU8sR0FBRyxJQUFJLGtDQUFhLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqQixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRU0sTUFBTSxDQUFDLFlBQVksQ0FDeEIsQ0FBUyxFQUNULENBQVMsRUFDVCxRQUFnQixRQUFRLEVBQ3hCLEtBQWEsY0FBYyxFQUMzQixZQUFxQixJQUFJO1FBRXpCLE1BQU0sUUFBUSxHQUFHLElBQUksMEJBQWEsQ0FBQztZQUNqQyxNQUFNLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQXNCO1lBQ3hELFNBQVMsRUFBRSxTQUFTO1NBQ3JCLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxrQkFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDekMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLHFCQUFRLENBQUMsQ0FBQztRQUM3QyxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFZO1FBQ25DLE1BQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUNsQixPQUFzQixFQUN0QixRQUF1QixFQUN2QixLQUFZLEVBQ1osTUFBYyxFQUNkLGNBQTJCO1FBRTNCLE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtZQUNyQixJQUFJLGNBQWMsRUFBRSxDQUFDO2dCQUNuQixjQUFjLEVBQUUsQ0FBQztZQUNuQixDQUFDO1lBQ0QsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pCLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQztRQUNGLFNBQVMsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVNLE1BQU0sQ0FBQyxlQUFlO1FBQzNCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQW1CLEVBQUUsSUFBUztRQUM3RCxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGOzs7OztBQ2xHcUU7QUFDYjtBQUN2QjtBQUUzQixNQUFNLG1CQUFtQjtJQU05QjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FDOUIsS0FBSyxFQUNMLG1CQUFtQixDQUFDLENBQUMsRUFDckIsbUJBQW1CLENBQUMsQ0FBQyxDQUN0QixDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUNqQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQ3JCLG1CQUFtQixDQUFDLENBQUMsQ0FDdEIsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXRDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSwyQkFBSyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRVMsUUFBUSxDQUFDLEtBQVk7UUFDN0IsY0FBYztRQUNkLE9BQU8sSUFBSSxrQkFBSyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVNLE1BQU0sQ0FDWCxVQUFvQixFQUNwQixhQUE2QixFQUM3QixRQUF1QixFQUN2QixLQUFZLEVBQ1osTUFBYztRQUVkLE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtZQUNyQixVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7WUFDOUIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO1lBQzlCLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztZQUU5QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ25CLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFakIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9ELHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQztRQUNGLFNBQVMsRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7QUF4RHNCLHFCQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ1QscUJBQUMsR0FBRyxHQUFHLENBQUM7OztBQ1FsQjtBQUNtRTtBQUNoRDtBQUMwQjtBQUVyRCxNQUFNLDhCQUErQixTQUFRLG1CQUFtQjtJQU9yRTtRQUNFLEtBQUssRUFBRSxDQUFDO1FBSkEsY0FBUyxHQUFjLElBQUksc0JBQVMsRUFBRSxDQUFDO1FBQ3ZDLGVBQVUsR0FBWSxJQUFJLG9CQUFPLEVBQUUsQ0FBQztRQU90QyxrQkFBYSxHQUFHLENBQUMsQ0FBYSxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDO1FBUkEsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQVNTLFFBQVEsQ0FBQyxLQUFZO1FBQzdCLE1BQU0sYUFBYSxHQUFrQixFQUFFLENBQUM7UUFFeEMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ25CLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxNQUFNLENBQUM7UUFDNUIsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE1BQU0sTUFBTSxHQUFHLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyQyxNQUFNLFlBQVksR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLE9BQWUsRUFBRSxFQUFFO1lBQ3hFLE1BQU0sUUFBUSxHQUFHLElBQUksd0JBQVcsRUFBRSxDQUFDO1lBQ25DLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEQsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUM5QixRQUFRLENBQUMsWUFBWSxDQUNuQixPQUFPLEVBQ1AsSUFBSSw0QkFBZSxDQUFDLElBQUksWUFBWSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDcEQsQ0FBQztZQUNGLFFBQVEsQ0FBQyxZQUFZLENBQ25CLGVBQWUsRUFDZixJQUFJLDRCQUFlLENBQUMsSUFBSSxZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNwRCxDQUFDO1lBQ0YsUUFBUSxDQUFDLFlBQVksQ0FDbkIsU0FBUyxFQUNULElBQUksNEJBQWUsQ0FBQyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDaEQsQ0FBQztZQUVGLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3RCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXJELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDL0IsU0FBUyxDQUFDLE1BQU0sQ0FDZCxDQUFDLEVBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLE1BQU0sRUFDdEMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLE1BQU0sRUFDdEMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FDdkMsQ0FBQztnQkFDRixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDOUQsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3JFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQy9CLENBQUM7WUFDRCxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQztRQUVGLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ2pDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDakMsU0FBUyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBRUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxpQkFBSSxDQUN6QiwrQ0FBZSxDQUFDLGFBQWEsQ0FBQyxFQUM5QixJQUFJLDhCQUFpQixDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDakUsQ0FBQztRQUVGLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEIsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVNLE1BQU0sQ0FDWCxVQUFvQixFQUNwQixhQUE2QixFQUM3QixRQUF1QixFQUN2QixLQUFZLEVBQ1osTUFBYztRQUVkLE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTs7WUFDckIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ25CLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQztZQUMvQixVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7WUFDL0IsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDO1lBQy9CLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUUxQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRW5CLFVBQUksQ0FBQyxTQUFTLDBDQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZELE1BQU0sVUFBVSxHQUFHLFVBQUksQ0FBQyxTQUFTLDBDQUFFLGVBQWUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFdEUsSUFBSSxXQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsTUFBTSxJQUFHLENBQUMsRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRyxVQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JFLENBQUM7WUFFRCxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRWpCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvRCxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7UUFDRixTQUFTLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFTyxlQUFlLENBQUMsU0FBdUIsRUFBRSxHQUFtQjtRQUNsRSxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFZLENBQUM7UUFDcEMsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEMsSUFDRSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckQsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ3JELENBQUM7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUNULFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUN4QixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDeEIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ3pCLENBQUM7UUFDSixDQUFDO1FBRUQsTUFBTSxjQUFjLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxNQUFNLHNCQUFzQixHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDakUsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUVoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDL0IsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sRUFBRSxDQUFDO2dCQUNuQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QyxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sY0FBYyxDQUFDLE9BQU8sQ0FDcEIsQ0FBQyxFQUNELHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDOUIsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUM5QixzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQzlCLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDL0IsQ0FBQztZQUNKLENBQUM7UUFDSCxDQUFDO1FBQ0QsY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDcEMsQ0FBQzs7QUFuSnNCLGdDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ1QsZ0NBQUMsR0FBRyxHQUFHLENBQUM7QUFxSmpDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO0lBQ25CLE1BQU0sS0FBSyxHQUFHLElBQUksOEJBQThCLEVBQUUsQ0FBQztBQUNyRCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJlZWpzLWxhYi8uL3NyYy9Db21tb24udHM/NzMzMCIsIndlYnBhY2s6Ly90aHJlZWpzLWxhYi8uL3NyYy9NZXJnZWRHZW9tZXRyeVN0dWR5LnRzPzM0ZjciLCJ3ZWJwYWNrOi8vdGhyZWVqcy1sYWIvLi9zcmMvU3R1ZHlNZXJnZWRHZW9tZXRyeUludGVyYWN0aXZlLnRzPzY2Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQW1iaWVudExpZ2h0LFxuICBBeGVzSGVscGVyLFxuICBDYW1lcmEsXG4gIENvbG9yLFxuICBQZXJzcGVjdGl2ZUNhbWVyYSxcbiAgU2NlbmUsXG4gIFdlYkdMUmVuZGVyZXIsXG4gIFJFVklTSU9OLFxufSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMuanNcIjtcblxuZXhwb3J0IGNsYXNzIENvbW1vbiB7XG4gIHB1YmxpYyBzdGF0aWMgaW5pdFNjZW5lKCkge1xuICAgIGNvbnN0IHNjZW5lID0gbmV3IFNjZW5lKCk7XG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0TGlnaHQoc2NlbmUpIHtcbiAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAxLjApO1xuICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuICAgIHJldHVybiBhbWJpZW50TGlnaHQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRDYW1lcmEoXG4gICAgc2NlbmUsXG4gICAgVyxcbiAgICBILFxuICAgIG5lYXIgPSAxLFxuICAgIGZhciA9IDQwMFxuICApOiBQZXJzcGVjdGl2ZUNhbWVyYSB7XG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCBXIC8gSCwgbmVhciwgZmFyKTtcbiAgICBjYW1lcmEucG9zaXRpb24uc2V0KDAsIDAsIDEwMCk7XG4gICAgY2FtZXJhLnVwZGF0ZU1hdHJpeFdvcmxkKGZhbHNlKTtcbiAgICBzY2VuZS5hZGQoY2FtZXJhKTtcbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0Q29udHJvbChjYW1lcmEsIHJlbmRlcjogV2ViR0xSZW5kZXJlcik6IE9yYml0Q29udHJvbHMge1xuICAgIGxldCBkb21FbGVtZW50O1xuICAgIGlmIChyZW5kZXIpIHtcbiAgICAgIGRvbUVsZW1lbnQgPSByZW5kZXIuZG9tRWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgY29udHJvbCA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgZG9tRWxlbWVudCk7XG4gICAgY29udHJvbC51cGRhdGUoKTtcbiAgICByZXR1cm4gY29udHJvbDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdFJlbmRlcmVyKFxuICAgIFc6IG51bWJlcixcbiAgICBIOiBudW1iZXIsXG4gICAgY29sb3I6IG51bWJlciA9IDB4MDAwMDAwLFxuICAgIGlkOiBzdHJpbmcgPSBcIndlYmdsLWNhbnZhc1wiLFxuICAgIGFudGlhbGlhczogYm9vbGVhbiA9IHRydWVcbiAgKSB7XG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgV2ViR0xSZW5kZXJlcih7XG4gICAgICBjYW52YXM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICAgIGFudGlhbGlhczogYW50aWFsaWFzLFxuICAgIH0pO1xuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IobmV3IENvbG9yKGNvbG9yKSk7XG4gICAgcmVuZGVyZXIuc2V0U2l6ZShXLCBIKTtcbiAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcbiAgICBjb25zb2xlLmxvZyhcInRocmVlLmpzIHJldmlzaW9uOiBcIiwgUkVWSVNJT04pO1xuICAgIHJldHVybiByZW5kZXJlcjtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdEhlbHBlcihzY2VuZTogU2NlbmUpOiB2b2lkIHtcbiAgICBjb25zdCBheGVzSGVscGVyID0gbmV3IEF4ZXNIZWxwZXIoMzApO1xuICAgIHNjZW5lLmFkZChheGVzSGVscGVyKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVuZGVyKFxuICAgIGNvbnRyb2w6IE9yYml0Q29udHJvbHMsXG4gICAgcmVuZGVyZXI6IFdlYkdMUmVuZGVyZXIsXG4gICAgc2NlbmU6IFNjZW5lLFxuICAgIGNhbWVyYTogQ2FtZXJhLFxuICAgIG9uQmVmb3JlUmVuZGVyPzogKCkgPT4gdm9pZFxuICApIHtcbiAgICBjb25zdCByZW5kZXJpbmcgPSAoKSA9PiB7XG4gICAgICBpZiAob25CZWZvcmVSZW5kZXIpIHtcbiAgICAgICAgb25CZWZvcmVSZW5kZXIoKTtcbiAgICAgIH1cbiAgICAgIGNvbnRyb2wudXBkYXRlKCk7XG4gICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyaW5nKTtcbiAgICB9O1xuICAgIHJlbmRlcmluZygpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhZGRSZW5kZXJlckluZm8oKTogSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gICAgcmV0dXJuIGluZm87XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHVwZGF0ZVJlbmRlcmVySW5mbyhkaXY6IEhUTUxEaXZFbGVtZW50LCBpbmZvOiBhbnkpOiB2b2lkIHtcbiAgICBkaXYuaW5uZXJUZXh0ID0gSlNPTi5zdHJpbmdpZnkoaW5mbyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENhbWVyYSwgR3JvdXAsIE9iamVjdDNELCBTY2VuZSwgV2ViR0xSZW5kZXJlciB9IGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IFN0YXRzIGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbGlicy9zdGF0cy5tb2R1bGVcIjtcbmltcG9ydCB7IENvbW1vbiB9IGZyb20gXCIuL0NvbW1vblwiO1xuXG5leHBvcnQgY2xhc3MgTWVyZ2VkR2VvbWV0cnlTdHVkeSB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVyA9IDEyODA7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSCA9IDgwMDtcbiAgcHJvdGVjdGVkIHN0YXRzO1xuICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFdlYkdMUmVuZGVyZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0U3RhdHMoKTtcbiAgICBjb25zdCBzY2VuZSA9IENvbW1vbi5pbml0U2NlbmUoKTtcblxuICAgIGNvbnN0IGNhbWVyYSA9IENvbW1vbi5pbml0Q2FtZXJhKFxuICAgICAgc2NlbmUsXG4gICAgICBNZXJnZWRHZW9tZXRyeVN0dWR5LlcsXG4gICAgICBNZXJnZWRHZW9tZXRyeVN0dWR5LkhcbiAgICApO1xuICAgIHRoaXMucmVuZGVyZXIgPSBDb21tb24uaW5pdFJlbmRlcmVyKFxuICAgICAgTWVyZ2VkR2VvbWV0cnlTdHVkeS5XLFxuICAgICAgTWVyZ2VkR2VvbWV0cnlTdHVkeS5IXG4gICAgKTtcblxuICAgIGNvbnN0IG9iamVjdCA9IHRoaXMuaW5pdE1lc2goc2NlbmUpO1xuICAgIGNvbnN0IGluZm8gPSBDb21tb24uYWRkUmVuZGVyZXJJbmZvKCk7XG5cbiAgICB0aGlzLnJlbmRlcihvYmplY3QsIGluZm8sIHRoaXMucmVuZGVyZXIsIHNjZW5lLCBjYW1lcmEpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0U3RhdHMoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0cyA9IG5ldyBTdGF0cygpO1xuICAgIHRoaXMuc3RhdHMuc2hvd1BhbmVsKDApO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zdGF0cy5kb20pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRNZXNoKHNjZW5lOiBTY2VuZSk6IE9iamVjdDNEIHtcbiAgICAvLyBPdmVycmlkZSBtZVxuICAgIHJldHVybiBuZXcgR3JvdXAoKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoXG4gICAgbWVyZ2VkTWVzaDogT2JqZWN0M0QsXG4gICAgaW5mb0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQsXG4gICAgcmVuZGVyZXI6IFdlYkdMUmVuZGVyZXIsXG4gICAgc2NlbmU6IFNjZW5lLFxuICAgIGNhbWVyYTogQ2FtZXJhXG4gICkge1xuICAgIGNvbnN0IHJlbmRlcmluZyA9ICgpID0+IHtcbiAgICAgIG1lcmdlZE1lc2gucm90YXRpb24ueCArPSAwLjAxO1xuICAgICAgbWVyZ2VkTWVzaC5yb3RhdGlvbi55ICs9IDAuMDE7XG4gICAgICBtZXJnZWRNZXNoLnJvdGF0aW9uLnogKz0gMC4wMTtcblxuICAgICAgdGhpcy5zdGF0cy5iZWdpbigpO1xuICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgdGhpcy5zdGF0cy5lbmQoKTtcblxuICAgICAgQ29tbW9uLnVwZGF0ZVJlbmRlcmVySW5mbyhpbmZvQ29udGFpbmVyLCByZW5kZXJlci5pbmZvLnJlbmRlcik7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyaW5nKTtcbiAgICB9O1xuICAgIHJlbmRlcmluZygpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBCb3hHZW9tZXRyeSxcbiAgQnVmZmVyQXR0cmlidXRlLFxuICBCdWZmZXJHZW9tZXRyeSxcbiAgQ2FtZXJhLFxuICBGYWNlLFxuICBJbnRlcnNlY3Rpb24sXG4gIE1lc2gsXG4gIE1lc2hCYXNpY01hdGVyaWFsLFxuICBPYmplY3QzRCxcbiAgUmF5Y2FzdGVyLFxuICBTY2VuZSxcbiAgVmVjdG9yMixcbiAgV2ViR0xSZW5kZXJlcixcbn0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBtZXJnZUdlb21ldHJpZXMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3V0aWxzL0J1ZmZlckdlb21ldHJ5VXRpbHMuanNcIjtcbmltcG9ydCB7IENvbW1vbiB9IGZyb20gXCIuL0NvbW1vblwiO1xuaW1wb3J0IHsgTWVyZ2VkR2VvbWV0cnlTdHVkeSB9IGZyb20gXCIuL01lcmdlZEdlb21ldHJ5U3R1ZHlcIjtcblxuZXhwb3J0IGNsYXNzIFN0dWR5TWVyZ2VkR2VvbWV0cnlJbnRlcmFjdGl2ZSBleHRlbmRzIE1lcmdlZEdlb21ldHJ5U3R1ZHkge1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFcgPSAxMjgwO1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEggPSA4MDA7XG4gIHByb3RlY3RlZCBzdGF0cztcbiAgcHJvdGVjdGVkIHJheWNhc3RlcjogUmF5Y2FzdGVyID0gbmV3IFJheWNhc3RlcigpO1xuICBwcm90ZWN0ZWQgbW91c2VQb2ludDogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgdGhpcy5vblBvaW50ZXJNb3ZlKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Qb2ludGVyTW92ZSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgdGhpcy5tb3VzZVBvaW50LnggPVxuICAgICAgKGUuY2xpZW50WCAvIHBhcnNlSW50KHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS53aWR0aCkpICogMiAtIDE7XG4gICAgdGhpcy5tb3VzZVBvaW50LnkgPVxuICAgICAgLShlLmNsaWVudFkgLyBwYXJzZUludCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUuaGVpZ2h0KSkgKiAyICsgMTtcbiAgfTtcblxuICBwcm90ZWN0ZWQgaW5pdE1lc2goc2NlbmU6IFNjZW5lKTogTWVzaCB7XG4gICAgY29uc3QgZ2VvbWV0cnlBcnJheTogQm94R2VvbWV0cnlbXSA9IFtdO1xuXG4gICAgY29uc3Qgc2l6ZSA9IDE7XG4gICAgY29uc3QgbWFyZ2luID0gMC4zO1xuICAgIGNvbnN0IHBpdGNoID0gc2l6ZSArIG1hcmdpbjtcbiAgICBjb25zdCBudW1DdWJlID0gMjU7XG4gICAgY29uc3Qgb2Zmc2V0ID0gKG51bUN1YmUgKiBwaXRjaCkgLyAyO1xuXG4gICAgY29uc3QgZ2VuZXJhdGVDdWJlID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGlkQ291bnQ6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgQm94R2VvbWV0cnkoKTtcbiAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpO1xuICAgICAgY29uc3QgY291bnQgPSBwb3NpdGlvbnMuY291bnQ7XG4gICAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwiY29sb3JcIixcbiAgICAgICAgbmV3IEJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvdW50ICogNCksIDQpXG4gICAgICApO1xuICAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFxuICAgICAgICBcIm9yaWdpbmFsQ29sb3JcIixcbiAgICAgICAgbmV3IEJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvdW50ICogNCksIDQpXG4gICAgICApO1xuICAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFxuICAgICAgICBcIm1lc2hfaWRcIixcbiAgICAgICAgbmV3IEJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvdW50KSwgMSlcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGNvbG9ycyA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZShcImNvbG9yXCIpO1xuICAgICAgY29uc3Qgb3JpZ2luYWxDb2xvciA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZShcIm9yaWdpbmFsQ29sb3JcIik7XG4gICAgICBjb25zdCBpZEF0dHJpYnV0ZSA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZShcIm1lc2hfaWRcIik7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICBwb3NpdGlvbnMuc2V0WFlaKFxuICAgICAgICAgIGksXG4gICAgICAgICAgcG9zaXRpb25zLmdldFgoaSkgKyB4ICogcGl0Y2ggLSBvZmZzZXQsXG4gICAgICAgICAgcG9zaXRpb25zLmdldFkoaSkgKyB5ICogcGl0Y2ggLSBvZmZzZXQsXG4gICAgICAgICAgcG9zaXRpb25zLmdldFooaSkgKyB6ICogcGl0Y2ggLSBvZmZzZXRcbiAgICAgICAgKTtcbiAgICAgICAgY29sb3JzLnNldFhZWlcoaSwgeCAvIG51bUN1YmUsIHkgLyBudW1DdWJlLCB6IC8gbnVtQ3ViZSwgMC4xKTtcbiAgICAgICAgb3JpZ2luYWxDb2xvci5zZXRYWVpXKGksIHggLyBudW1DdWJlLCB5IC8gbnVtQ3ViZSwgeiAvIG51bUN1YmUsIDAuMSk7XG4gICAgICAgIGlkQXR0cmlidXRlLnNldFgoaSwgaWRDb3VudCk7XG4gICAgICB9XG4gICAgICBnZW9tZXRyeUFycmF5LnB1c2goZ2VvbWV0cnkpO1xuICAgIH07XG5cbiAgICBsZXQgaWRDb3VudGVyID0gMDtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG51bUN1YmU7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBudW1DdWJlOyB5KyspIHtcbiAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBudW1DdWJlOyB6KyspIHtcbiAgICAgICAgICBnZW5lcmF0ZUN1YmUoeCwgeSwgeiwgaWRDb3VudGVyKTtcbiAgICAgICAgICBpZENvdW50ZXIrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1lcmdlZE1lc2ggPSBuZXcgTWVzaChcbiAgICAgIG1lcmdlR2VvbWV0cmllcyhnZW9tZXRyeUFycmF5KSxcbiAgICAgIG5ldyBNZXNoQmFzaWNNYXRlcmlhbCh7IHRyYW5zcGFyZW50OiB0cnVlLCB2ZXJ0ZXhDb2xvcnM6IHRydWUgfSlcbiAgICApO1xuXG4gICAgc2NlbmUuYWRkKG1lcmdlZE1lc2gpO1xuICAgIHJldHVybiBtZXJnZWRNZXNoO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcihcbiAgICBtZXJnZWRNZXNoOiBPYmplY3QzRCxcbiAgICBpbmZvQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCxcbiAgICByZW5kZXJlcjogV2ViR0xSZW5kZXJlcixcbiAgICBzY2VuZTogU2NlbmUsXG4gICAgY2FtZXJhOiBDYW1lcmFcbiAgKSB7XG4gICAgY29uc3QgcmVuZGVyaW5nID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc3BlZWQgPSAwLjAxO1xuICAgICAgbWVyZ2VkTWVzaC5yb3RhdGlvbi54ICs9IHNwZWVkO1xuICAgICAgbWVyZ2VkTWVzaC5yb3RhdGlvbi55ICs9IHNwZWVkO1xuICAgICAgbWVyZ2VkTWVzaC5yb3RhdGlvbi56ICs9IHNwZWVkO1xuICAgICAgbWVyZ2VkTWVzaC51cGRhdGVNYXRyaXgoKTtcblxuICAgICAgdGhpcy5zdGF0cy5iZWdpbigpO1xuXG4gICAgICB0aGlzLnJheWNhc3Rlcj8uc2V0RnJvbUNhbWVyYSh0aGlzLm1vdXNlUG9pbnQsIGNhbWVyYSk7XG4gICAgICBjb25zdCBpbnRlcnNlY3RzID0gdGhpcy5yYXljYXN0ZXI/LmludGVyc2VjdE9iamVjdChtZXJnZWRNZXNoLCBmYWxzZSk7XG5cbiAgICAgIGlmIChpbnRlcnNlY3RzPy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSW50ZXJzZWN0KGludGVyc2VjdHNbMF0sIChtZXJnZWRNZXNoIGFzIE1lc2gpLmdlb21ldHJ5KTtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgdGhpcy5zdGF0cy5lbmQoKTtcblxuICAgICAgQ29tbW9uLnVwZGF0ZVJlbmRlcmVySW5mbyhpbmZvQ29udGFpbmVyLCByZW5kZXJlci5pbmZvLnJlbmRlcik7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyaW5nKTtcbiAgICB9O1xuICAgIHJlbmRlcmluZygpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVJbnRlcnNlY3QoaW50ZXJzZWN0OiBJbnRlcnNlY3Rpb24sIGdlbzogQnVmZmVyR2VvbWV0cnkpOiB2b2lkIHtcbiAgICBjb25zdCBpZEF0dHJpYnV0ZSA9IGdlby5nZXRBdHRyaWJ1dGUoXCJtZXNoX2lkXCIpO1xuICAgIGNvbnN0IGZhY2UgPSBpbnRlcnNlY3QuZmFjZSBhcyBGYWNlO1xuICAgIGNvbnN0IG1lc2hJRCA9IGlkQXR0cmlidXRlLmdldFgoZmFjZS5hKTtcblxuICAgIGlmIChcbiAgICAgIGlkQXR0cmlidXRlLmdldFgoZmFjZS5hKSAhPT0gaWRBdHRyaWJ1dGUuZ2V0WChmYWNlLmIpIHx8XG4gICAgICBpZEF0dHJpYnV0ZS5nZXRYKGZhY2UuYSkgIT09IGlkQXR0cmlidXRlLmdldFgoZmFjZS5jKVxuICAgICkge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIGlkQXR0cmlidXRlLmdldFgoZmFjZS5hKSxcbiAgICAgICAgaWRBdHRyaWJ1dGUuZ2V0WChmYWNlLmIpLFxuICAgICAgICBpZEF0dHJpYnV0ZS5nZXRYKGZhY2UuYylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgY29sb3JBdHRyaWJ1dGUgPSBnZW8uZ2V0QXR0cmlidXRlKFwiY29sb3JcIik7XG4gICAgY29uc3Qgb3JpZ2luYWxDb2xvckF0dHJpYnV0ZSA9IGdlby5nZXRBdHRyaWJ1dGUoXCJvcmlnaW5hbENvbG9yXCIpO1xuICAgIGNvbnN0IGNvdW50ID0gaWRBdHRyaWJ1dGUuY291bnQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIGlmIChpZEF0dHJpYnV0ZS5nZXRYKGkpID09PSBtZXNoSUQpIHtcbiAgICAgICAgY29sb3JBdHRyaWJ1dGUuc2V0WFlaVyhpLCAxLCAxLCAxLCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbG9yQXR0cmlidXRlLnNldFhZWlcoXG4gICAgICAgICAgaSxcbiAgICAgICAgICBvcmlnaW5hbENvbG9yQXR0cmlidXRlLmdldFgoaSksXG4gICAgICAgICAgb3JpZ2luYWxDb2xvckF0dHJpYnV0ZS5nZXRZKGkpLFxuICAgICAgICAgIG9yaWdpbmFsQ29sb3JBdHRyaWJ1dGUuZ2V0WihpKSxcbiAgICAgICAgICBvcmlnaW5hbENvbG9yQXR0cmlidXRlLmdldFcoaSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29sb3JBdHRyaWJ1dGUubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IHN0dWR5ID0gbmV3IFN0dWR5TWVyZ2VkR2VvbWV0cnlJbnRlcmFjdGl2ZSgpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5017\n')}},__webpack_module_cache__={},deferred;function __webpack_require__(Q){var U=__webpack_module_cache__[Q];if(void 0!==U)return U.exports;var F=__webpack_module_cache__[Q]={id:Q,loaded:!1,exports:{}};return __webpack_modules__[Q].call(F.exports,F,F.exports,__webpack_require__),F.loaded=!0,F.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(Q,U,F,B)=>{if(!U){var e=1/0;for(c=0;c<deferred.length;c++){for(var[U,F,B]=deferred[c],s=!0,t=0;t<U.length;t++)(!1&B||e>=B)&&Object.keys(__webpack_require__.O).every((Q=>__webpack_require__.O[Q](U[t])))?U.splice(t--,1):(s=!1,B<e&&(e=B));if(s){deferred.splice(c--,1);var n=F();void 0!==n&&(Q=n)}}return Q}B=B||0;for(var c=deferred.length;c>0&&deferred[c-1][2]>B;c--)deferred[c]=deferred[c-1];deferred[c]=[U,F,B]},__webpack_require__.n=Q=>{var U=Q&&Q.__esModule?()=>Q.default:()=>Q;return __webpack_require__.d(U,{a:U}),U},__webpack_require__.d=(Q,U)=>{for(var F in U)__webpack_require__.o(U,F)&&!__webpack_require__.o(Q,F)&&Object.defineProperty(Q,F,{enumerable:!0,get:U[F]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(Q){if("object"==typeof window)return window}}(),__webpack_require__.o=(Q,U)=>Object.prototype.hasOwnProperty.call(Q,U),__webpack_require__.r=Q=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},__webpack_require__.nmd=Q=>(Q.paths=[],Q.children||(Q.children=[]),Q),__webpack_require__.j=317,(()=>{var Q={317:0};__webpack_require__.O.j=U=>0===Q[U];var U=(U,F)=>{var B,e,[s,t,n]=F,c=0;if(s.some((U=>0!==Q[U]))){for(B in t)__webpack_require__.o(t,B)&&(__webpack_require__.m[B]=t[B]);if(n)var g=n(__webpack_require__)}for(U&&U(F);c<s.length;c++)e=s[c],__webpack_require__.o(Q,e)&&Q[e]&&Q[e][0](),Q[e]=0;return __webpack_require__.O(g)},F=self.webpackChunkthreejs_lab=self.webpackChunkthreejs_lab||[];F.forEach(U.bind(null,0)),F.push=U.bind(null,F.push.bind(F))})();var __webpack_exports__=__webpack_require__.O(void 0,[736],(()=>__webpack_require__(5017)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();