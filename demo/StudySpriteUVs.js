(()=>{"use strict";var __webpack_modules__={634:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval('\n// UNUSED EXPORTS: Study\n\n// EXTERNAL MODULE: ./node_modules/lil-gui/dist/lil-gui.esm.js\nvar lil_gui_esm = __webpack_require__(7429);\n// EXTERNAL MODULE: ./node_modules/three/build/three.module.js\nvar three_module = __webpack_require__(6075);\n// EXTERNAL MODULE: ./node_modules/three/examples/jsm/controls/OrbitControls.js\nvar OrbitControls = __webpack_require__(8012);\n;// CONCATENATED MODULE: ./src/Common.ts\n\n\nclass Common {\n    static initScene() {\n        const scene = new three_module.Scene();\n        return scene;\n    }\n    static initLight(scene) {\n        const ambientLight = new three_module.AmbientLight(0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    }\n    static initCamera(scene, W, H, near = 1, far = 400) {\n        const camera = new three_module.PerspectiveCamera(45, W / H, near, far);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    }\n    static initControl(camera, render) {\n        let domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        const control = new OrbitControls/* OrbitControls */.z(camera, domElement);\n        control.update();\n        return control;\n    }\n    static initRenderer(W, H, color = 0x000000, id = "webgl-canvas", antialias = true) {\n        const renderer = new three_module.WebGLRenderer({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        renderer.setClearColor(new three_module.Color(color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        return renderer;\n    }\n    static initHelper(scene) {\n        const axesHelper = new three_module.AxesHelper(30);\n        scene.add(axesHelper);\n    }\n    static render(control, renderer, scene, camera, onBeforeRender) {\n        const rendering = () => {\n            if (onBeforeRender) {\n                onBeforeRender();\n            }\n            control.update();\n            renderer.render(scene, camera);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n    static addRendererInfo() {\n        const info = document.createElement("div");\n        document.body.appendChild(info);\n        return info;\n    }\n    static updateRendererInfo(div, info) {\n        div.innerText = JSON.stringify(info);\n    }\n}\n\n;// CONCATENATED MODULE: ./src/CommonGUI.ts\nclass CommonGUI {\n    static initColorGUI(folder, mat, propName = "color") {\n        const prop = {};\n        const targetColor = mat[propName];\n        prop[propName] = targetColor.getHex();\n        folder.addColor(prop, propName).onChange((val) => {\n            targetColor.setHex(val);\n        });\n    }\n    static initMaterialGUI(gui, mat, folderName = "Material") {\n        const folder = gui.addFolder(folderName);\n        this.initMaterialFolder(folder, mat);\n        if (mat.hasOwnProperty("emissive")) {\n            this.initColorGUI(folder, mat, "emissive");\n        }\n        folder.open();\n        return folder;\n    }\n    static initMaterialFolder(folder, mat) {\n        this.initColorGUI(folder, mat);\n        folder.add(mat, "transparent");\n        folder.add(mat, "opacity", 0.0, 1.0);\n    }\n    static initPlaneUVGUI(gui, geo) {\n        const uvArea = this.initUVArea();\n        const updateUV = () => {\n            const uv = geo.getAttribute("uv");\n            uv.setXY(0, uvArea.x1, uvArea.y2);\n            uv.setXY(1, uvArea.x2, uvArea.y2);\n            uv.setXY(2, uvArea.x1, uvArea.y1);\n            uv.setXY(3, uvArea.x2, uvArea.y1);\n            uv.needsUpdate = true;\n        };\n        this.initUVGUI(gui, uvArea, updateUV);\n    }\n    static initSpriteUVGUI(gui, geo) {\n        const uvArea = this.initUVArea();\n        const updateUV = () => {\n            const uv = geo.getAttribute("uv");\n            uv.setXY(0, uvArea.x1, uvArea.y1);\n            uv.setXY(1, uvArea.x2, uvArea.y1);\n            uv.setXY(2, uvArea.x2, uvArea.y2);\n            uv.setXY(3, uvArea.x1, uvArea.y2);\n            uv.needsUpdate = true;\n        };\n        this.initUVGUI(gui, uvArea, updateUV);\n    }\n    static initUVArea() {\n        return {\n            x1: 0.0,\n            y1: 0.0,\n            x2: 1.0,\n            y2: 1.0,\n        };\n    }\n    static initUVGUI(gui, uvArea, updateUV) {\n        gui.add(uvArea, "x1", 0.0, 1.0).onChange(updateUV);\n        gui.add(uvArea, "y1", 0.0, 1.0).onChange(updateUV);\n        gui.add(uvArea, "x2", 0.0, 1.0).onChange(updateUV);\n        gui.add(uvArea, "y2", 0.0, 1.0).onChange(updateUV);\n    }\n}\n\n;// CONCATENATED MODULE: ./src/StudySpriteUVs.ts\n\n\n\n\nclass Study {\n    constructor() {\n        const scene = Common.initScene();\n        Common.initLight(scene);\n        const camera = Common.initCamera(scene, Study.W, Study.H);\n        const renderer = Common.initRenderer(Study.W, Study.H);\n        const control = Common.initControl(camera, renderer);\n        Common.initHelper(scene);\n        this.initObject(scene);\n        Common.render(control, renderer, scene, camera);\n    }\n    initObject(scene) {\n        const loader = new three_module.TextureLoader();\n        const texture = loader.load("./textures/uv_grid_opengl.jpg");\n        const mat = new three_module.SpriteMaterial({ map: texture });\n        const sprite = new three_module.Sprite(mat);\n        sprite.scale.set(10, 10, 1);\n        scene.add(sprite);\n        const gui = new lil_gui_esm/* default */.ZP();\n        CommonGUI.initSpriteUVGUI(gui, sprite.geometry);\n    }\n}\nStudy.W = 640;\nStudy.H = 480;\nwindow.onload = () => {\n    const study = new Study();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVPLFVBQVUsQ0FBQyxLQUFZO1FBQzdCLE1BQU0sTUFBTSxHQUFHLElBQUksMEJBQWEsRUFBRSxDQUFDO1FBQ25DLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUM3RCxNQUFNLEdBQUcsR0FBRyxJQUFJLDJCQUFjLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUVqRCxNQUFNLE1BQU0sR0FBRyxJQUFJLG1CQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxCLE1BQU0sR0FBRyxHQUFHLElBQUksMkJBQUcsRUFBRSxDQUFDO1FBQ3RCLFNBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDOztBQXpCc0IsT0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNSLE9BQUMsR0FBRyxHQUFHLENBQUM7QUEyQmpDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO0lBQ25CLE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7QUFDNUIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWVqcy1sYWIvLi9zcmMvQ29tbW9uLnRzPzczMzAiLCJ3ZWJwYWNrOi8vdGhyZWVqcy1sYWIvLi9zcmMvQ29tbW9uR1VJLnRzPzFhYTEiLCJ3ZWJwYWNrOi8vdGhyZWVqcy1sYWIvLi9zcmMvU3R1ZHlTcHJpdGVVVnMudHM/MDRkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBbWJpZW50TGlnaHQsXG4gIEF4ZXNIZWxwZXIsXG4gIENhbWVyYSxcbiAgQ29sb3IsXG4gIFBlcnNwZWN0aXZlQ2FtZXJhLFxuICBTY2VuZSxcbiAgV2ViR0xSZW5kZXJlcixcbn0gZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzXCI7XG5cbmV4cG9ydCBjbGFzcyBDb21tb24ge1xuICBwdWJsaWMgc3RhdGljIGluaXRTY2VuZSgpIHtcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBTY2VuZSgpO1xuICAgIHJldHVybiBzY2VuZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdExpZ2h0KHNjZW5lKSB7XG4gICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IEFtYmllbnRMaWdodCgweGZmZmZmZiwgMS4wKTtcbiAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcbiAgICByZXR1cm4gYW1iaWVudExpZ2h0O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0Q2FtZXJhKFxuICAgIHNjZW5lLFxuICAgIFcsXG4gICAgSCxcbiAgICBuZWFyID0gMSxcbiAgICBmYXIgPSA0MDBcbiAgKTogUGVyc3BlY3RpdmVDYW1lcmEge1xuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYSg0NSwgVyAvIEgsIG5lYXIsIGZhcik7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnNldCgwLCAwLCAxMDApO1xuICAgIGNhbWVyYS51cGRhdGVNYXRyaXhXb3JsZChmYWxzZSk7XG4gICAgc2NlbmUuYWRkKGNhbWVyYSk7XG4gICAgcmV0dXJuIGNhbWVyYTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdENvbnRyb2woY2FtZXJhLCByZW5kZXI6IFdlYkdMUmVuZGVyZXIpOiBPcmJpdENvbnRyb2xzIHtcbiAgICBsZXQgZG9tRWxlbWVudDtcbiAgICBpZiAocmVuZGVyKSB7XG4gICAgICBkb21FbGVtZW50ID0gcmVuZGVyLmRvbUVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRyb2wgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIGRvbUVsZW1lbnQpO1xuICAgIGNvbnRyb2wudXBkYXRlKCk7XG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRSZW5kZXJlcihcbiAgICBXOiBudW1iZXIsXG4gICAgSDogbnVtYmVyLFxuICAgIGNvbG9yOiBudW1iZXIgPSAweDAwMDAwMCxcbiAgICBpZDogc3RyaW5nID0gXCJ3ZWJnbC1jYW52YXNcIixcbiAgICBhbnRpYWxpYXM6IGJvb2xlYW4gPSB0cnVlXG4gICkge1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFdlYkdMUmVuZGVyZXIoe1xuICAgICAgY2FudmFzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTENhbnZhc0VsZW1lbnQsXG4gICAgICBhbnRpYWxpYXM6IGFudGlhbGlhcyxcbiAgICB9KTtcbiAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKG5ldyBDb2xvcihjb2xvcikpO1xuICAgIHJlbmRlcmVyLnNldFNpemUoVywgSCk7XG4gICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgcmV0dXJuIHJlbmRlcmVyO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0SGVscGVyKHNjZW5lOiBTY2VuZSk6IHZvaWQge1xuICAgIGNvbnN0IGF4ZXNIZWxwZXIgPSBuZXcgQXhlc0hlbHBlcigzMCk7XG4gICAgc2NlbmUuYWRkKGF4ZXNIZWxwZXIpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyByZW5kZXIoXG4gICAgY29udHJvbDogT3JiaXRDb250cm9scyxcbiAgICByZW5kZXJlcjogV2ViR0xSZW5kZXJlcixcbiAgICBzY2VuZTogU2NlbmUsXG4gICAgY2FtZXJhOiBDYW1lcmEsXG4gICAgb25CZWZvcmVSZW5kZXI/OiAoKSA9PiB2b2lkXG4gICkge1xuICAgIGNvbnN0IHJlbmRlcmluZyA9ICgpID0+IHtcbiAgICAgIGlmIChvbkJlZm9yZVJlbmRlcikge1xuICAgICAgICBvbkJlZm9yZVJlbmRlcigpO1xuICAgICAgfVxuICAgICAgY29udHJvbC51cGRhdGUoKTtcbiAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJpbmcpO1xuICAgIH07XG4gICAgcmVuZGVyaW5nKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFkZFJlbmRlcmVySW5mbygpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICByZXR1cm4gaW5mbztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdXBkYXRlUmVuZGVyZXJJbmZvKGRpdjogSFRNTERpdkVsZW1lbnQsIGluZm86IGFueSk6IHZvaWQge1xuICAgIGRpdi5pbm5lclRleHQgPSBKU09OLnN0cmluZ2lmeShpbmZvKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgR1VJIH0gZnJvbSBcImxpbC1ndWlcIjtcbmltcG9ydCB7IEJ1ZmZlckdlb21ldHJ5LCBNYXRlcmlhbCB9IGZyb20gXCJ0aHJlZVwiO1xuXG5leHBvcnQgY2xhc3MgQ29tbW9uR1VJIHtcbiAgc3RhdGljIGluaXRDb2xvckdVSShcbiAgICBmb2xkZXIsXG4gICAgbWF0OiBNYXRlcmlhbCB8IE1hdGVyaWFsW10sXG4gICAgcHJvcE5hbWUgPSBcImNvbG9yXCJcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgcHJvcCA9IHt9O1xuICAgIGNvbnN0IHRhcmdldENvbG9yID0gbWF0W3Byb3BOYW1lXTtcbiAgICBwcm9wW3Byb3BOYW1lXSA9IHRhcmdldENvbG9yLmdldEhleCgpO1xuICAgIGZvbGRlci5hZGRDb2xvcihwcm9wLCBwcm9wTmFtZSkub25DaGFuZ2UoKHZhbCkgPT4ge1xuICAgICAgdGFyZ2V0Q29sb3Iuc2V0SGV4KHZhbCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgaW5pdE1hdGVyaWFsR1VJKFxuICAgIGd1aSxcbiAgICBtYXQ6IE1hdGVyaWFsIHwgTWF0ZXJpYWxbXSxcbiAgICBmb2xkZXJOYW1lID0gXCJNYXRlcmlhbFwiXG4gICk6IEdVSSB7XG4gICAgY29uc3QgZm9sZGVyID0gZ3VpLmFkZEZvbGRlcihmb2xkZXJOYW1lKTtcbiAgICB0aGlzLmluaXRNYXRlcmlhbEZvbGRlcihmb2xkZXIsIG1hdCk7XG4gICAgaWYgKG1hdC5oYXNPd25Qcm9wZXJ0eShcImVtaXNzaXZlXCIpKSB7XG4gICAgICB0aGlzLmluaXRDb2xvckdVSShmb2xkZXIsIG1hdCwgXCJlbWlzc2l2ZVwiKTtcbiAgICB9XG4gICAgZm9sZGVyLm9wZW4oKTtcbiAgICByZXR1cm4gZm9sZGVyO1xuICB9XG5cbiAgc3RhdGljIGluaXRNYXRlcmlhbEZvbGRlcihmb2xkZXIsIG1hdDogTWF0ZXJpYWwgfCBNYXRlcmlhbFtdKTogdm9pZCB7XG4gICAgdGhpcy5pbml0Q29sb3JHVUkoZm9sZGVyLCBtYXQpO1xuICAgIGZvbGRlci5hZGQobWF0LCBcInRyYW5zcGFyZW50XCIpO1xuICAgIGZvbGRlci5hZGQobWF0LCBcIm9wYWNpdHlcIiwgMC4wLCAxLjApO1xuICB9XG5cbiAgc3RhdGljIGluaXRQbGFuZVVWR1VJKGd1aTogR1VJLCBnZW86IEJ1ZmZlckdlb21ldHJ5KTogdm9pZCB7XG4gICAgY29uc3QgdXZBcmVhID0gdGhpcy5pbml0VVZBcmVhKCk7XG5cbiAgICBjb25zdCB1cGRhdGVVViA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHV2ID0gZ2VvLmdldEF0dHJpYnV0ZShcInV2XCIpO1xuICAgICAgdXYuc2V0WFkoMCwgdXZBcmVhLngxLCB1dkFyZWEueTIpO1xuICAgICAgdXYuc2V0WFkoMSwgdXZBcmVhLngyLCB1dkFyZWEueTIpO1xuICAgICAgdXYuc2V0WFkoMiwgdXZBcmVhLngxLCB1dkFyZWEueTEpO1xuICAgICAgdXYuc2V0WFkoMywgdXZBcmVhLngyLCB1dkFyZWEueTEpO1xuICAgICAgdXYubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH07XG5cbiAgICB0aGlzLmluaXRVVkdVSShndWksIHV2QXJlYSwgdXBkYXRlVVYpO1xuICB9XG5cbiAgc3RhdGljIGluaXRTcHJpdGVVVkdVSShndWk6IEdVSSwgZ2VvOiBCdWZmZXJHZW9tZXRyeSk6IHZvaWQge1xuICAgIGNvbnN0IHV2QXJlYSA9IHRoaXMuaW5pdFVWQXJlYSgpO1xuXG4gICAgY29uc3QgdXBkYXRlVVYgPSAoKSA9PiB7XG4gICAgICBjb25zdCB1diA9IGdlby5nZXRBdHRyaWJ1dGUoXCJ1dlwiKTtcbiAgICAgIHV2LnNldFhZKDAsIHV2QXJlYS54MSwgdXZBcmVhLnkxKTtcbiAgICAgIHV2LnNldFhZKDEsIHV2QXJlYS54MiwgdXZBcmVhLnkxKTtcbiAgICAgIHV2LnNldFhZKDIsIHV2QXJlYS54MiwgdXZBcmVhLnkyKTtcbiAgICAgIHV2LnNldFhZKDMsIHV2QXJlYS54MSwgdXZBcmVhLnkyKTtcbiAgICAgIHV2Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgdGhpcy5pbml0VVZHVUkoZ3VpLCB1dkFyZWEsIHVwZGF0ZVVWKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0VVZBcmVhKCk6IFVWQXJlYSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHgxOiAwLjAsXG4gICAgICB5MTogMC4wLFxuICAgICAgeDI6IDEuMCxcbiAgICAgIHkyOiAxLjAsXG4gICAgfTtcbiAgfVxuICBzdGF0aWMgaW5pdFVWR1VJKGd1aTogR1VJLCB1dkFyZWE6IFVWQXJlYSwgdXBkYXRlVVY6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBndWkuYWRkKHV2QXJlYSwgXCJ4MVwiLCAwLjAsIDEuMCkub25DaGFuZ2UodXBkYXRlVVYpO1xuICAgIGd1aS5hZGQodXZBcmVhLCBcInkxXCIsIDAuMCwgMS4wKS5vbkNoYW5nZSh1cGRhdGVVVik7XG4gICAgZ3VpLmFkZCh1dkFyZWEsIFwieDJcIiwgMC4wLCAxLjApLm9uQ2hhbmdlKHVwZGF0ZVVWKTtcbiAgICBndWkuYWRkKHV2QXJlYSwgXCJ5MlwiLCAwLjAsIDEuMCkub25DaGFuZ2UodXBkYXRlVVYpO1xuICB9XG59XG5cbmludGVyZmFjZSBVVkFyZWEge1xuICB4MTogbnVtYmVyO1xuICB5MTogbnVtYmVyO1xuICB4MjogbnVtYmVyO1xuICB5MjogbnVtYmVyO1xufVxuIiwiaW1wb3J0IEdVSSBmcm9tIFwibGlsLWd1aVwiO1xuaW1wb3J0IHsgU2NlbmUsIFNwcml0ZSwgU3ByaXRlTWF0ZXJpYWwsIFRleHR1cmVMb2FkZXIgfSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IENvbW1vbiB9IGZyb20gXCIuL0NvbW1vblwiO1xuaW1wb3J0IHsgQ29tbW9uR1VJIH0gZnJvbSBcIi4vQ29tbW9uR1VJXCI7XG5cbmV4cG9ydCBjbGFzcyBTdHVkeSB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVyA9IDY0MDtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBIID0gNDgwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHNjZW5lID0gQ29tbW9uLmluaXRTY2VuZSgpO1xuICAgIENvbW1vbi5pbml0TGlnaHQoc2NlbmUpO1xuICAgIGNvbnN0IGNhbWVyYSA9IENvbW1vbi5pbml0Q2FtZXJhKHNjZW5lLCBTdHVkeS5XLCBTdHVkeS5IKTtcbiAgICBjb25zdCByZW5kZXJlciA9IENvbW1vbi5pbml0UmVuZGVyZXIoU3R1ZHkuVywgU3R1ZHkuSCk7XG4gICAgY29uc3QgY29udHJvbCA9IENvbW1vbi5pbml0Q29udHJvbChjYW1lcmEsIHJlbmRlcmVyKTtcbiAgICBDb21tb24uaW5pdEhlbHBlcihzY2VuZSk7XG4gICAgdGhpcy5pbml0T2JqZWN0KHNjZW5lKTtcbiAgICBDb21tb24ucmVuZGVyKGNvbnRyb2wsIHJlbmRlcmVyLCBzY2VuZSwgY2FtZXJhKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdE9iamVjdChzY2VuZTogU2NlbmUpOiB2b2lkIHtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgVGV4dHVyZUxvYWRlcigpO1xuICAgIGNvbnN0IHRleHR1cmUgPSBsb2FkZXIubG9hZChcIi4vdGV4dHVyZXMvdXZfZ3JpZF9vcGVuZ2wuanBnXCIpO1xuICAgIGNvbnN0IG1hdCA9IG5ldyBTcHJpdGVNYXRlcmlhbCh7IG1hcDogdGV4dHVyZSB9KTtcblxuICAgIGNvbnN0IHNwcml0ZSA9IG5ldyBTcHJpdGUobWF0KTtcbiAgICBzcHJpdGUuc2NhbGUuc2V0KDEwLCAxMCwgMSk7XG4gICAgc2NlbmUuYWRkKHNwcml0ZSk7XG5cbiAgICBjb25zdCBndWkgPSBuZXcgR1VJKCk7XG4gICAgQ29tbW9uR1VJLmluaXRTcHJpdGVVVkdVSShndWksIHNwcml0ZS5nZW9tZXRyeSk7XG4gIH1cbn1cblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgY29uc3Qgc3R1ZHkgPSBuZXcgU3R1ZHkoKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///634\n')}},__webpack_module_cache__={},deferred;function __webpack_require__(Q){var U=__webpack_module_cache__[Q];if(void 0!==U)return U.exports;var F=__webpack_module_cache__[Q]={id:Q,loaded:!1,exports:{}};return __webpack_modules__[Q].call(F.exports,F,F.exports,__webpack_require__),F.loaded=!0,F.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(Q,U,F,B)=>{if(!U){var e=1/0;for(x=0;x<deferred.length;x++){for(var[U,F,B]=deferred[x],s=!0,n=0;n<U.length;n++)(!1&B||e>=B)&&Object.keys(__webpack_require__.O).every((Q=>__webpack_require__.O[Q](U[n])))?U.splice(n--,1):(s=!1,B<e&&(e=B));if(s){deferred.splice(x--,1);var c=F();void 0!==c&&(Q=c)}}return Q}B=B||0;for(var x=deferred.length;x>0&&deferred[x-1][2]>B;x--)deferred[x]=deferred[x-1];deferred[x]=[U,F,B]},__webpack_require__.n=Q=>{var U=Q&&Q.__esModule?()=>Q.default:()=>Q;return __webpack_require__.d(U,{a:U}),U},__webpack_require__.d=(Q,U)=>{for(var F in U)__webpack_require__.o(U,F)&&!__webpack_require__.o(Q,F)&&Object.defineProperty(Q,F,{enumerable:!0,get:U[F]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(Q){if("object"==typeof window)return window}}(),__webpack_require__.o=(Q,U)=>Object.prototype.hasOwnProperty.call(Q,U),__webpack_require__.r=Q=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},__webpack_require__.nmd=Q=>(Q.paths=[],Q.children||(Q.children=[]),Q),__webpack_require__.j=923,(()=>{var Q={923:0};__webpack_require__.O.j=U=>0===Q[U];var U=(U,F)=>{var B,e,[s,n,c]=F,x=0;if(s.some((U=>0!==Q[U]))){for(B in n)__webpack_require__.o(n,B)&&(__webpack_require__.m[B]=n[B]);if(c)var t=c(__webpack_require__)}for(U&&U(F);x<s.length;x++)e=s[x],__webpack_require__.o(Q,e)&&Q[e]&&Q[e][0](),Q[e]=0;return __webpack_require__.O(t)},F=self.webpackChunkthreejs_lab=self.webpackChunkthreejs_lab||[];F.forEach(U.bind(null,0)),F.push=U.bind(null,F.push.bind(F))})();var __webpack_exports__=__webpack_require__.O(void 0,[736],(()=>__webpack_require__(634)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();