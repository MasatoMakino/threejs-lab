(()=>{"use strict";var __webpack_modules__={7513:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval('\n// UNUSED EXPORTS: StudyMergedGeometry\n\n// EXTERNAL MODULE: ./node_modules/three/build/three.module.js\nvar three_module = __webpack_require__(6753);\n// EXTERNAL MODULE: ./node_modules/three/examples/jsm/utils/BufferGeometryUtils.js\nvar BufferGeometryUtils = __webpack_require__(1426);\n// EXTERNAL MODULE: ./node_modules/three/examples/jsm/libs/stats.module.js\nvar stats_module = __webpack_require__(4533);\n// EXTERNAL MODULE: ./node_modules/three/examples/jsm/controls/OrbitControls.js\nvar OrbitControls = __webpack_require__(3580);\n;// CONCATENATED MODULE: ./src/Common.ts\n\n\nclass Common {\n    static initScene() {\n        const scene = new three_module.Scene();\n        return scene;\n    }\n    static initLight(scene) {\n        const ambientLight = new three_module.AmbientLight(0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    }\n    static initCamera(scene, W, H, near = 1, far = 400) {\n        const camera = new three_module.PerspectiveCamera(45, W / H, near, far);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    }\n    static initControl(camera, render) {\n        let domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        const control = new OrbitControls/* OrbitControls */.N(camera, domElement);\n        control.update();\n        return control;\n    }\n    static initRenderer(W, H, color = 0x000000, id = "webgl-canvas", antialias = true) {\n        const renderer = new three_module.WebGLRenderer({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        this.initRendererSettings(renderer, color, W, H);\n        return renderer;\n    }\n    static initRendererSettings(renderer, color, W, H) {\n        renderer.setClearColor(new three_module.Color(color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        console.log("three.js revision: ", three_module.REVISION);\n    }\n    static initHelper(scene) {\n        const axesHelper = new three_module.AxesHelper(30);\n        scene.add(axesHelper);\n    }\n    static render(control, renderer, scene, camera, onBeforeRender) {\n        const rendering = () => {\n            if (onBeforeRender) {\n                onBeforeRender();\n            }\n            control.update();\n            renderer.render(scene, camera);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n    static addRendererInfo() {\n        const info = document.createElement("div");\n        document.body.appendChild(info);\n        return info;\n    }\n    static updateRendererInfo(div, info) {\n        div.innerText = JSON.stringify(info);\n    }\n}\n\n;// CONCATENATED MODULE: ./src/MergedGeometryStudy.ts\n\n\n\nclass MergedGeometryStudy {\n    constructor() {\n        this.initStats();\n        const scene = Common.initScene();\n        const camera = Common.initCamera(scene, MergedGeometryStudy.W, MergedGeometryStudy.H);\n        this.renderer = Common.initRenderer(MergedGeometryStudy.W, MergedGeometryStudy.H);\n        const object = this.initMesh(scene);\n        const info = Common.addRendererInfo();\n        this.render(object, info, this.renderer, scene, camera);\n    }\n    initStats() {\n        this.stats = new stats_module/* default */.A();\n        this.stats.showPanel(0);\n        document.body.appendChild(this.stats.dom);\n    }\n    initMesh(scene) {\n        // Override me\n        return new three_module.Group();\n    }\n    render(mergedMesh, infoContainer, renderer, scene, camera) {\n        const rendering = () => {\n            mergedMesh.rotation.x += 0.01;\n            mergedMesh.rotation.y += 0.01;\n            mergedMesh.rotation.z += 0.01;\n            this.stats.begin();\n            renderer.render(scene, camera);\n            this.stats.end();\n            Common.updateRendererInfo(infoContainer, renderer.info.render);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n}\nMergedGeometryStudy.W = 1280;\nMergedGeometryStudy.H = 800;\n\n;// CONCATENATED MODULE: ./src/StudyMergedGeometry.ts\n\n\n\nclass StudyMergedGeometry extends MergedGeometryStudy {\n    initMesh(scene) {\n        const geometryArray = [];\n        const size = 1;\n        const margin = 0.3;\n        const pitch = size + margin;\n        const numCube = 40;\n        const offset = (numCube * pitch) / 2;\n        const generateCube = (x, y, z) => {\n            const geometry = new three_module.BoxGeometry();\n            const positions = geometry.getAttribute("position");\n            const count = positions.count;\n            geometry.setAttribute("color", new three_module.BufferAttribute(new Float32Array(count * 4), 4));\n            const colors = geometry.getAttribute("color");\n            for (let i = 0; i < count; i++) {\n                positions.setXYZ(i, positions.getX(i) + x * pitch - offset, positions.getY(i) + y * pitch - offset, positions.getZ(i) + z * pitch - offset);\n                colors.setXYZW(i, x / numCube, y / numCube, z / numCube, 0.05);\n            }\n            geometryArray.push(geometry);\n        };\n        for (let x = 0; x < numCube; x++) {\n            for (let y = 0; y < numCube; y++) {\n                for (let z = 0; z < numCube; z++) {\n                    generateCube(x, y, z);\n                }\n            }\n        }\n        const mergedMesh = new three_module.Mesh((0,BufferGeometryUtils/* mergeGeometries */.pP)(geometryArray), new three_module.MeshBasicMaterial({\n            transparent: true,\n            vertexColors: true,\n            depthTest: false,\n            depthWrite: false,\n        }));\n        scene.add(mergedMesh);\n        return mergedMesh;\n    }\n}\nStudyMergedGeometry.W = 1280;\nStudyMergedGeometry.H = 800;\nwindow.onload = () => {\n    const study = new StudyMergedGeometry();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzUxMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTZTtBQUM4RDtBQUV0RSxNQUFNLE1BQU07SUFDVixNQUFNLENBQUMsU0FBUztRQUNyQixNQUFNLEtBQUssR0FBRyxJQUFJLGtCQUFLLEVBQUUsQ0FBQztRQUMxQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUs7UUFDM0IsTUFBTSxZQUFZLEdBQUcsSUFBSSx5QkFBWSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyRCxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFTSxNQUFNLENBQUMsVUFBVSxDQUN0QixLQUFZLEVBQ1osQ0FBUyxFQUNULENBQVMsRUFDVCxJQUFJLEdBQUcsQ0FBQyxFQUNSLEdBQUcsR0FBRyxHQUFHO1FBRVQsTUFBTSxNQUFNLEdBQUcsSUFBSSw4QkFBaUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQVcsQ0FDdkIsTUFBYyxFQUNkLE1BQXFCO1FBRXJCLElBQUksVUFBVSxDQUFDO1FBQ2YsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUNYLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ2pDLENBQUM7UUFDRCxNQUFNLE9BQU8sR0FBRyxJQUFJLGtDQUFhLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqQixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRU0sTUFBTSxDQUFDLFlBQVksQ0FDeEIsQ0FBUyxFQUNULENBQVMsRUFDVCxRQUFnQixRQUFRLEVBQ3hCLEtBQWEsY0FBYyxFQUMzQixZQUFxQixJQUFJO1FBRXpCLE1BQU0sUUFBUSxHQUFHLElBQUksMEJBQWEsQ0FBQztZQUNqQyxNQUFNLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQXNCO1lBQ3hELFNBQVMsRUFBRSxTQUFTO1NBQ3JCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRU8sTUFBTSxDQUFDLG9CQUFvQixDQUNqQyxRQUF1QixFQUN2QixLQUFhLEVBQ2IsQ0FBUyxFQUNULENBQVM7UUFFVCxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksa0JBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxxQkFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBWTtRQUNuQyxNQUFNLFVBQVUsR0FBRyxJQUFJLHVCQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FDbEIsT0FBc0IsRUFDdEIsUUFBdUIsRUFDdkIsS0FBWSxFQUNaLE1BQWMsRUFDZCxjQUEyQjtRQUUzQixNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDckIsSUFBSSxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsY0FBYyxFQUFFLENBQUM7WUFDbkIsQ0FBQztZQUNELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqQixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMvQixxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7UUFDRixTQUFTLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFTSxNQUFNLENBQUMsZUFBZTtRQUMzQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFtQixFQUFFLElBQVM7UUFDN0QsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjs7O0FDOUdxRTtBQUNWO0FBQzFCO0FBRTNCLE1BQU0sbUJBQW1CO0lBTTlCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUM5QixLQUFLLEVBQ0wsbUJBQW1CLENBQUMsQ0FBQyxFQUNyQixtQkFBbUIsQ0FBQyxDQUFDLENBQ3RCLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQ2pDLG1CQUFtQixDQUFDLENBQUMsRUFDckIsbUJBQW1CLENBQUMsQ0FBQyxDQUN0QixDQUFDO1FBRUYsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLDJCQUFLLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFUyxRQUFRLENBQUMsS0FBWTtRQUM3QixjQUFjO1FBQ2QsT0FBTyxJQUFJLGtCQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU0sTUFBTSxDQUNYLFVBQW9CLEVBQ3BCLGFBQTZCLEVBQzdCLFFBQXVCLEVBQ3ZCLEtBQVksRUFDWixNQUFjO1FBRWQsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFO1lBQ3JCLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztZQUM5QixVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7WUFDOUIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO1lBRTlCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbkIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUVqQixNQUFNLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0QscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDO1FBQ0YsU0FBUyxFQUFFLENBQUM7SUFDZCxDQUFDOztBQXhEc0IscUJBQUMsR0FBRyxJQUFJLENBQUM7QUFDVCxxQkFBQyxHQUFHLEdBQUcsQ0FBQzs7O0FDQWxCO0FBQ21FO0FBQ3RCO0FBRXJELE1BQU0sbUJBQW9CLFNBQVEsbUJBQW1CO0lBS2hELFFBQVEsQ0FBQyxLQUFZO1FBQzdCLE1BQU0sYUFBYSxHQUFrQixFQUFFLENBQUM7UUFFeEMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ25CLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxNQUFNLENBQUM7UUFDNUIsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE1BQU0sTUFBTSxHQUFHLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyQyxNQUFNLFlBQVksR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQUU7WUFDdkQsTUFBTSxRQUFRLEdBQUcsSUFBSSx3QkFBVyxFQUFFLENBQUM7WUFDbkMsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwRCxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQzlCLFFBQVEsQ0FBQyxZQUFZLENBQ25CLE9BQU8sRUFDUCxJQUFJLDRCQUFlLENBQUMsSUFBSSxZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNwRCxDQUFDO1lBRUYsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQy9CLFNBQVMsQ0FBQyxNQUFNLENBQ2QsQ0FBQyxFQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxNQUFNLEVBQ3RDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxNQUFNLEVBQ3RDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxNQUFNLENBQ3ZDLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakUsQ0FBQztZQUNELGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDO1FBRUYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUNqQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBRUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxpQkFBSSxDQUN6QiwrQ0FBZSxDQUFDLGFBQWEsQ0FBQyxFQUM5QixJQUFJLDhCQUFpQixDQUFDO1lBQ3BCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FDSCxDQUFDO1FBRUYsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QixPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOztBQXZEc0IscUJBQUMsR0FBRyxJQUFJLENBQUM7QUFDVCxxQkFBQyxHQUFHLEdBQUcsQ0FBQztBQXlEakMsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7SUFDbkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO0FBQzFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlanMtbGFiLy4vc3JjL0NvbW1vbi50cz83MzMwIiwid2VicGFjazovL3RocmVlanMtbGFiLy4vc3JjL01lcmdlZEdlb21ldHJ5U3R1ZHkudHM/MzRmNyIsIndlYnBhY2s6Ly90aHJlZWpzLWxhYi8uL3NyYy9TdHVkeU1lcmdlZEdlb21ldHJ5LnRzPzg1NWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQW1iaWVudExpZ2h0LFxuICBBeGVzSGVscGVyLFxuICBDYW1lcmEsXG4gIENvbG9yLFxuICBQZXJzcGVjdGl2ZUNhbWVyYSxcbiAgU2NlbmUsXG4gIFdlYkdMUmVuZGVyZXIsXG4gIFJFVklTSU9OLFxufSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMuanNcIjtcblxuZXhwb3J0IGNsYXNzIENvbW1vbiB7XG4gIHB1YmxpYyBzdGF0aWMgaW5pdFNjZW5lKCkge1xuICAgIGNvbnN0IHNjZW5lID0gbmV3IFNjZW5lKCk7XG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0TGlnaHQoc2NlbmUpIHtcbiAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAxLjApO1xuICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuICAgIHJldHVybiBhbWJpZW50TGlnaHQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRDYW1lcmEoXG4gICAgc2NlbmU6IFNjZW5lLFxuICAgIFc6IG51bWJlcixcbiAgICBIOiBudW1iZXIsXG4gICAgbmVhciA9IDEsXG4gICAgZmFyID0gNDAwXG4gICk6IFBlcnNwZWN0aXZlQ2FtZXJhIHtcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgUGVyc3BlY3RpdmVDYW1lcmEoNDUsIFcgLyBILCBuZWFyLCBmYXIpO1xuICAgIGNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMCwgMTAwKTtcbiAgICBjYW1lcmEudXBkYXRlTWF0cml4V29ybGQoZmFsc2UpO1xuICAgIHNjZW5lLmFkZChjYW1lcmEpO1xuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRDb250cm9sKFxuICAgIGNhbWVyYTogQ2FtZXJhLFxuICAgIHJlbmRlcjogV2ViR0xSZW5kZXJlclxuICApOiBPcmJpdENvbnRyb2xzIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcbiAgICBpZiAocmVuZGVyKSB7XG4gICAgICBkb21FbGVtZW50ID0gcmVuZGVyLmRvbUVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRyb2wgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIGRvbUVsZW1lbnQpO1xuICAgIGNvbnRyb2wudXBkYXRlKCk7XG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRSZW5kZXJlcihcbiAgICBXOiBudW1iZXIsXG4gICAgSDogbnVtYmVyLFxuICAgIGNvbG9yOiBudW1iZXIgPSAweDAwMDAwMCxcbiAgICBpZDogc3RyaW5nID0gXCJ3ZWJnbC1jYW52YXNcIixcbiAgICBhbnRpYWxpYXM6IGJvb2xlYW4gPSB0cnVlXG4gICkge1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFdlYkdMUmVuZGVyZXIoe1xuICAgICAgY2FudmFzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTENhbnZhc0VsZW1lbnQsXG4gICAgICBhbnRpYWxpYXM6IGFudGlhbGlhcyxcbiAgICB9KTtcbiAgICB0aGlzLmluaXRSZW5kZXJlclNldHRpbmdzKHJlbmRlcmVyLCBjb2xvciwgVywgSCk7XG4gICAgcmV0dXJuIHJlbmRlcmVyO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgaW5pdFJlbmRlcmVyU2V0dGluZ3MoXG4gICAgcmVuZGVyZXI6IFdlYkdMUmVuZGVyZXIsXG4gICAgY29sb3I6IG51bWJlcixcbiAgICBXOiBudW1iZXIsXG4gICAgSDogbnVtYmVyXG4gICkge1xuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IobmV3IENvbG9yKGNvbG9yKSk7XG4gICAgcmVuZGVyZXIuc2V0U2l6ZShXLCBIKTtcbiAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcbiAgICBjb25zb2xlLmxvZyhcInRocmVlLmpzIHJldmlzaW9uOiBcIiwgUkVWSVNJT04pO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0SGVscGVyKHNjZW5lOiBTY2VuZSk6IHZvaWQge1xuICAgIGNvbnN0IGF4ZXNIZWxwZXIgPSBuZXcgQXhlc0hlbHBlcigzMCk7XG4gICAgc2NlbmUuYWRkKGF4ZXNIZWxwZXIpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyByZW5kZXIoXG4gICAgY29udHJvbDogT3JiaXRDb250cm9scyxcbiAgICByZW5kZXJlcjogV2ViR0xSZW5kZXJlcixcbiAgICBzY2VuZTogU2NlbmUsXG4gICAgY2FtZXJhOiBDYW1lcmEsXG4gICAgb25CZWZvcmVSZW5kZXI/OiAoKSA9PiB2b2lkXG4gICkge1xuICAgIGNvbnN0IHJlbmRlcmluZyA9ICgpID0+IHtcbiAgICAgIGlmIChvbkJlZm9yZVJlbmRlcikge1xuICAgICAgICBvbkJlZm9yZVJlbmRlcigpO1xuICAgICAgfVxuICAgICAgY29udHJvbC51cGRhdGUoKTtcbiAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJpbmcpO1xuICAgIH07XG4gICAgcmVuZGVyaW5nKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFkZFJlbmRlcmVySW5mbygpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICByZXR1cm4gaW5mbztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdXBkYXRlUmVuZGVyZXJJbmZvKGRpdjogSFRNTERpdkVsZW1lbnQsIGluZm86IGFueSk6IHZvaWQge1xuICAgIGRpdi5pbm5lclRleHQgPSBKU09OLnN0cmluZ2lmeShpbmZvKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2FtZXJhLCBHcm91cCwgT2JqZWN0M0QsIFNjZW5lLCBXZWJHTFJlbmRlcmVyIH0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgU3RhdHMgZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9saWJzL3N0YXRzLm1vZHVsZS5qc1wiO1xuaW1wb3J0IHsgQ29tbW9uIH0gZnJvbSBcIi4vQ29tbW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBNZXJnZWRHZW9tZXRyeVN0dWR5IHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBXID0gMTI4MDtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBIID0gODAwO1xuICBwcm90ZWN0ZWQgc3RhdHM7XG4gIHByb3RlY3RlZCByZW5kZXJlcjogV2ViR0xSZW5kZXJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRTdGF0cygpO1xuICAgIGNvbnN0IHNjZW5lID0gQ29tbW9uLmluaXRTY2VuZSgpO1xuXG4gICAgY29uc3QgY2FtZXJhID0gQ29tbW9uLmluaXRDYW1lcmEoXG4gICAgICBzY2VuZSxcbiAgICAgIE1lcmdlZEdlb21ldHJ5U3R1ZHkuVyxcbiAgICAgIE1lcmdlZEdlb21ldHJ5U3R1ZHkuSFxuICAgICk7XG4gICAgdGhpcy5yZW5kZXJlciA9IENvbW1vbi5pbml0UmVuZGVyZXIoXG4gICAgICBNZXJnZWRHZW9tZXRyeVN0dWR5LlcsXG4gICAgICBNZXJnZWRHZW9tZXRyeVN0dWR5LkhcbiAgICApO1xuXG4gICAgY29uc3Qgb2JqZWN0ID0gdGhpcy5pbml0TWVzaChzY2VuZSk7XG4gICAgY29uc3QgaW5mbyA9IENvbW1vbi5hZGRSZW5kZXJlckluZm8oKTtcblxuICAgIHRoaXMucmVuZGVyKG9iamVjdCwgaW5mbywgdGhpcy5yZW5kZXJlciwgc2NlbmUsIGNhbWVyYSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRTdGF0cygpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRzID0gbmV3IFN0YXRzKCk7XG4gICAgdGhpcy5zdGF0cy5zaG93UGFuZWwoMCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnN0YXRzLmRvbSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5pdE1lc2goc2NlbmU6IFNjZW5lKTogT2JqZWN0M0Qge1xuICAgIC8vIE92ZXJyaWRlIG1lXG4gICAgcmV0dXJuIG5ldyBHcm91cCgpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcihcbiAgICBtZXJnZWRNZXNoOiBPYmplY3QzRCxcbiAgICBpbmZvQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCxcbiAgICByZW5kZXJlcjogV2ViR0xSZW5kZXJlcixcbiAgICBzY2VuZTogU2NlbmUsXG4gICAgY2FtZXJhOiBDYW1lcmFcbiAgKSB7XG4gICAgY29uc3QgcmVuZGVyaW5nID0gKCkgPT4ge1xuICAgICAgbWVyZ2VkTWVzaC5yb3RhdGlvbi54ICs9IDAuMDE7XG4gICAgICBtZXJnZWRNZXNoLnJvdGF0aW9uLnkgKz0gMC4wMTtcbiAgICAgIG1lcmdlZE1lc2gucm90YXRpb24ueiArPSAwLjAxO1xuXG4gICAgICB0aGlzLnN0YXRzLmJlZ2luKCk7XG4gICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgICB0aGlzLnN0YXRzLmVuZCgpO1xuXG4gICAgICBDb21tb24udXBkYXRlUmVuZGVyZXJJbmZvKGluZm9Db250YWluZXIsIHJlbmRlcmVyLmluZm8ucmVuZGVyKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJpbmcpO1xuICAgIH07XG4gICAgcmVuZGVyaW5nKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEJveEdlb21ldHJ5LFxuICBCdWZmZXJBdHRyaWJ1dGUsXG4gIE1lc2gsXG4gIE1lc2hCYXNpY01hdGVyaWFsLFxuICBTY2VuZSxcbn0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBtZXJnZUdlb21ldHJpZXMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3V0aWxzL0J1ZmZlckdlb21ldHJ5VXRpbHMuanNcIjtcbmltcG9ydCB7IE1lcmdlZEdlb21ldHJ5U3R1ZHkgfSBmcm9tIFwiLi9NZXJnZWRHZW9tZXRyeVN0dWR5XCI7XG5cbmV4cG9ydCBjbGFzcyBTdHVkeU1lcmdlZEdlb21ldHJ5IGV4dGVuZHMgTWVyZ2VkR2VvbWV0cnlTdHVkeSB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVyA9IDEyODA7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSCA9IDgwMDtcbiAgcHJvdGVjdGVkIHN0YXRzO1xuXG4gIHByb3RlY3RlZCBpbml0TWVzaChzY2VuZTogU2NlbmUpOiBNZXNoIHtcbiAgICBjb25zdCBnZW9tZXRyeUFycmF5OiBCb3hHZW9tZXRyeVtdID0gW107XG5cbiAgICBjb25zdCBzaXplID0gMTtcbiAgICBjb25zdCBtYXJnaW4gPSAwLjM7XG4gICAgY29uc3QgcGl0Y2ggPSBzaXplICsgbWFyZ2luO1xuICAgIGNvbnN0IG51bUN1YmUgPSA0MDtcbiAgICBjb25zdCBvZmZzZXQgPSAobnVtQ3ViZSAqIHBpdGNoKSAvIDI7XG5cbiAgICBjb25zdCBnZW5lcmF0ZUN1YmUgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgQm94R2VvbWV0cnkoKTtcbiAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpO1xuICAgICAgY29uc3QgY291bnQgPSBwb3NpdGlvbnMuY291bnQ7XG4gICAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwiY29sb3JcIixcbiAgICAgICAgbmV3IEJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvdW50ICogNCksIDQpXG4gICAgICApO1xuXG4gICAgICBjb25zdCBjb2xvcnMgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoXCJjb2xvclwiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICBwb3NpdGlvbnMuc2V0WFlaKFxuICAgICAgICAgIGksXG4gICAgICAgICAgcG9zaXRpb25zLmdldFgoaSkgKyB4ICogcGl0Y2ggLSBvZmZzZXQsXG4gICAgICAgICAgcG9zaXRpb25zLmdldFkoaSkgKyB5ICogcGl0Y2ggLSBvZmZzZXQsXG4gICAgICAgICAgcG9zaXRpb25zLmdldFooaSkgKyB6ICogcGl0Y2ggLSBvZmZzZXRcbiAgICAgICAgKTtcbiAgICAgICAgY29sb3JzLnNldFhZWlcoaSwgeCAvIG51bUN1YmUsIHkgLyBudW1DdWJlLCB6IC8gbnVtQ3ViZSwgMC4wNSk7XG4gICAgICB9XG4gICAgICBnZW9tZXRyeUFycmF5LnB1c2goZ2VvbWV0cnkpO1xuICAgIH07XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG51bUN1YmU7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBudW1DdWJlOyB5KyspIHtcbiAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBudW1DdWJlOyB6KyspIHtcbiAgICAgICAgICBnZW5lcmF0ZUN1YmUoeCwgeSwgeik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtZXJnZWRNZXNoID0gbmV3IE1lc2goXG4gICAgICBtZXJnZUdlb21ldHJpZXMoZ2VvbWV0cnlBcnJheSksXG4gICAgICBuZXcgTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgICAgdmVydGV4Q29sb3JzOiB0cnVlLFxuICAgICAgICBkZXB0aFRlc3Q6IGZhbHNlLFxuICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHNjZW5lLmFkZChtZXJnZWRNZXNoKTtcbiAgICByZXR1cm4gbWVyZ2VkTWVzaDtcbiAgfVxufVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBjb25zdCBzdHVkeSA9IG5ldyBTdHVkeU1lcmdlZEdlb21ldHJ5KCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7513\n')}},__webpack_module_cache__={},deferred;function __webpack_require__(Q){var U=__webpack_module_cache__[Q];if(void 0!==U)return U.exports;var F=__webpack_module_cache__[Q]={id:Q,loaded:!1,exports:{}};return __webpack_modules__[Q].call(F.exports,F,F.exports,__webpack_require__),F.loaded=!0,F.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(Q,U,F,B)=>{if(!U){var e=1/0;for(t=0;t<deferred.length;t++){for(var[U,F,B]=deferred[t],s=!0,n=0;n<U.length;n++)(!1&B||e>=B)&&Object.keys(__webpack_require__.O).every((Q=>__webpack_require__.O[Q](U[n])))?U.splice(n--,1):(s=!1,B<e&&(e=B));if(s){deferred.splice(t--,1);var c=F();void 0!==c&&(Q=c)}}return Q}B=B||0;for(var t=deferred.length;t>0&&deferred[t-1][2]>B;t--)deferred[t]=deferred[t-1];deferred[t]=[U,F,B]},__webpack_require__.n=Q=>{var U=Q&&Q.__esModule?()=>Q.default:()=>Q;return __webpack_require__.d(U,{a:U}),U},__webpack_require__.d=(Q,U)=>{for(var F in U)__webpack_require__.o(U,F)&&!__webpack_require__.o(Q,F)&&Object.defineProperty(Q,F,{enumerable:!0,get:U[F]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(Q){if("object"==typeof window)return window}}(),__webpack_require__.o=(Q,U)=>Object.prototype.hasOwnProperty.call(Q,U),__webpack_require__.r=Q=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},__webpack_require__.nmd=Q=>(Q.paths=[],Q.children||(Q.children=[]),Q),__webpack_require__.j=710,(()=>{var Q={710:0};__webpack_require__.O.j=U=>0===Q[U];var U=(U,F)=>{var B,e,[s,n,c]=F,t=0;if(s.some((U=>0!==Q[U]))){for(B in n)__webpack_require__.o(n,B)&&(__webpack_require__.m[B]=n[B]);if(c)var g=c(__webpack_require__)}for(U&&U(F);t<s.length;t++)e=s[t],__webpack_require__.o(Q,e)&&Q[e]&&Q[e][0](),Q[e]=0;return __webpack_require__.O(g)},F=self.webpackChunkthreejs_lab=self.webpackChunkthreejs_lab||[];F.forEach(U.bind(null,0)),F.push=U.bind(null,F.push.bind(F))})();var __webpack_exports__=__webpack_require__.O(void 0,[121],(()=>__webpack_require__(7513)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();