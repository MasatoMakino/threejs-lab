(()=>{var __webpack_modules__={6013:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";eval('\n// UNUSED EXPORTS: StudySimple\n\n// EXTERNAL MODULE: ./node_modules/three/build/three.module.js\nvar three_module = __webpack_require__(6075);\n// EXTERNAL MODULE: ./node_modules/three/examples/jsm/controls/OrbitControls.js\nvar OrbitControls = __webpack_require__(8012);\n;// CONCATENATED MODULE: ./src/Common.ts\n\n\nclass Common {\n    static initScene() {\n        const scene = new three_module.Scene();\n        return scene;\n    }\n    static initLight(scene) {\n        const ambientLight = new three_module.AmbientLight(0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    }\n    static initCamera(scene, W, H, near = 1, far = 400) {\n        const camera = new three_module.PerspectiveCamera(45, W / H, near, far);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    }\n    static initControl(camera, render) {\n        let domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        const control = new OrbitControls/* OrbitControls */.z(camera, domElement);\n        control.update();\n        return control;\n    }\n    static initRenderer(W, H, color = 0x000000, id = "webgl-canvas", antialias = true) {\n        const renderer = new three_module.WebGLRenderer({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        renderer.setClearColor(new three_module.Color(color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        console.log("three.js revision: ", three_module.REVISION);\n        return renderer;\n    }\n    static initHelper(scene) {\n        const axesHelper = new three_module.AxesHelper(30);\n        scene.add(axesHelper);\n    }\n    static render(control, renderer, scene, camera, onBeforeRender) {\n        const rendering = () => {\n            if (onBeforeRender) {\n                onBeforeRender();\n            }\n            control.update();\n            renderer.render(scene, camera);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n    static addRendererInfo() {\n        const info = document.createElement("div");\n        document.body.appendChild(info);\n        return info;\n    }\n    static updateRendererInfo(div, info) {\n        div.innerText = JSON.stringify(info);\n    }\n}\n\n// EXTERNAL MODULE: ./src/simple/shader.frag\nvar shader = __webpack_require__(3188);\nvar shader_default = /*#__PURE__*/__webpack_require__.n(shader);\n// EXTERNAL MODULE: ./src/simple/shader.vert\nvar simple_shader = __webpack_require__(6337);\nvar simple_shader_default = /*#__PURE__*/__webpack_require__.n(simple_shader);\n;// CONCATENATED MODULE: ./src/StudySimple.ts\n\n\n// @ts-ignore\n\n// @ts-ignore\n\nclass StudySimple {\n    constructor() {\n        const scene = Common.initScene();\n        Common.initLight(scene);\n        const camera = Common.initCamera(scene, StudySimple.W, StudySimple.H);\n        const renderer = Common.initRenderer(StudySimple.W, StudySimple.H);\n        const control = Common.initControl(camera, renderer);\n        Common.initHelper(scene);\n        this.initObject(scene);\n        Common.render(control, renderer, scene, camera);\n    }\n    initObject(scene) {\n        const geo = new three_module.PlaneGeometry(10, 10);\n        const mat = new three_module.ShaderMaterial({\n            vertexShader: (simple_shader_default()),\n            fragmentShader: (shader_default()),\n        });\n        const mesh = new three_module.Mesh(geo, mat);\n        scene.add(mesh);\n    }\n}\nStudySimple.W = 640;\nStudySimple.H = 480;\nwindow.onload = () => {\n    const study = new StudySimple();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU8sVUFBVSxDQUFDLEtBQVk7UUFDN0IsTUFBTSxHQUFHLEdBQUcsSUFBSSwwQkFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QyxNQUFNLEdBQUcsR0FBRyxJQUFJLDJCQUFjLENBQUM7WUFDN0IsWUFBWSxFQUFFLHlCQUFZO1lBQzFCLGNBQWMsRUFBRSxrQkFBYztTQUMvQixDQUFDLENBQUM7UUFDSCxNQUFNLElBQUksR0FBRyxJQUFJLGlCQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7QUF0QnNCLGFBQUMsR0FBRyxHQUFHLENBQUM7QUFDUixhQUFDLEdBQUcsR0FBRyxDQUFDO0FBd0JqQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtJQUNuQixNQUFNLEtBQUssR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0FBQ2xDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlanMtbGFiLy4vc3JjL0NvbW1vbi50cz83MzMwIiwid2VicGFjazovL3RocmVlanMtbGFiLy4vc3JjL1N0dWR5U2ltcGxlLnRzP2E4ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQW1iaWVudExpZ2h0LFxuICBBeGVzSGVscGVyLFxuICBDYW1lcmEsXG4gIENvbG9yLFxuICBQZXJzcGVjdGl2ZUNhbWVyYSxcbiAgU2NlbmUsXG4gIFdlYkdMUmVuZGVyZXIsXG4gIFJFVklTSU9OLFxufSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMuanNcIjtcblxuZXhwb3J0IGNsYXNzIENvbW1vbiB7XG4gIHB1YmxpYyBzdGF0aWMgaW5pdFNjZW5lKCkge1xuICAgIGNvbnN0IHNjZW5lID0gbmV3IFNjZW5lKCk7XG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0TGlnaHQoc2NlbmUpIHtcbiAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAxLjApO1xuICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuICAgIHJldHVybiBhbWJpZW50TGlnaHQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRDYW1lcmEoXG4gICAgc2NlbmUsXG4gICAgVyxcbiAgICBILFxuICAgIG5lYXIgPSAxLFxuICAgIGZhciA9IDQwMFxuICApOiBQZXJzcGVjdGl2ZUNhbWVyYSB7XG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCBXIC8gSCwgbmVhciwgZmFyKTtcbiAgICBjYW1lcmEucG9zaXRpb24uc2V0KDAsIDAsIDEwMCk7XG4gICAgY2FtZXJhLnVwZGF0ZU1hdHJpeFdvcmxkKGZhbHNlKTtcbiAgICBzY2VuZS5hZGQoY2FtZXJhKTtcbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0Q29udHJvbChjYW1lcmEsIHJlbmRlcjogV2ViR0xSZW5kZXJlcik6IE9yYml0Q29udHJvbHMge1xuICAgIGxldCBkb21FbGVtZW50O1xuICAgIGlmIChyZW5kZXIpIHtcbiAgICAgIGRvbUVsZW1lbnQgPSByZW5kZXIuZG9tRWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgY29udHJvbCA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgZG9tRWxlbWVudCk7XG4gICAgY29udHJvbC51cGRhdGUoKTtcbiAgICByZXR1cm4gY29udHJvbDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdFJlbmRlcmVyKFxuICAgIFc6IG51bWJlcixcbiAgICBIOiBudW1iZXIsXG4gICAgY29sb3I6IG51bWJlciA9IDB4MDAwMDAwLFxuICAgIGlkOiBzdHJpbmcgPSBcIndlYmdsLWNhbnZhc1wiLFxuICAgIGFudGlhbGlhczogYm9vbGVhbiA9IHRydWVcbiAgKSB7XG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgV2ViR0xSZW5kZXJlcih7XG4gICAgICBjYW52YXM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICAgIGFudGlhbGlhczogYW50aWFsaWFzLFxuICAgIH0pO1xuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IobmV3IENvbG9yKGNvbG9yKSk7XG4gICAgcmVuZGVyZXIuc2V0U2l6ZShXLCBIKTtcbiAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcbiAgICBjb25zb2xlLmxvZyhcInRocmVlLmpzIHJldmlzaW9uOiBcIiwgUkVWSVNJT04pO1xuICAgIHJldHVybiByZW5kZXJlcjtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdEhlbHBlcihzY2VuZTogU2NlbmUpOiB2b2lkIHtcbiAgICBjb25zdCBheGVzSGVscGVyID0gbmV3IEF4ZXNIZWxwZXIoMzApO1xuICAgIHNjZW5lLmFkZChheGVzSGVscGVyKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVuZGVyKFxuICAgIGNvbnRyb2w6IE9yYml0Q29udHJvbHMsXG4gICAgcmVuZGVyZXI6IFdlYkdMUmVuZGVyZXIsXG4gICAgc2NlbmU6IFNjZW5lLFxuICAgIGNhbWVyYTogQ2FtZXJhLFxuICAgIG9uQmVmb3JlUmVuZGVyPzogKCkgPT4gdm9pZFxuICApIHtcbiAgICBjb25zdCByZW5kZXJpbmcgPSAoKSA9PiB7XG4gICAgICBpZiAob25CZWZvcmVSZW5kZXIpIHtcbiAgICAgICAgb25CZWZvcmVSZW5kZXIoKTtcbiAgICAgIH1cbiAgICAgIGNvbnRyb2wudXBkYXRlKCk7XG4gICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyaW5nKTtcbiAgICB9O1xuICAgIHJlbmRlcmluZygpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhZGRSZW5kZXJlckluZm8oKTogSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gICAgcmV0dXJuIGluZm87XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHVwZGF0ZVJlbmRlcmVySW5mbyhkaXY6IEhUTUxEaXZFbGVtZW50LCBpbmZvOiBhbnkpOiB2b2lkIHtcbiAgICBkaXYuaW5uZXJUZXh0ID0gSlNPTi5zdHJpbmdpZnkoaW5mbyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1lc2gsIFBsYW5lR2VvbWV0cnksIFNjZW5lLCBTaGFkZXJNYXRlcmlhbCB9IGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgQ29tbW9uIH0gZnJvbSBcIi4vQ29tbW9uXCI7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgZnJhZ21lbnRTb3VyY2UgZnJvbSBcIi4vc2ltcGxlL3NoYWRlci5mcmFnXCI7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgdmVydGV4U291cmNlIGZyb20gXCIuL3NpbXBsZS9zaGFkZXIudmVydFwiO1xuXG5leHBvcnQgY2xhc3MgU3R1ZHlTaW1wbGUge1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFcgPSA2NDA7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSCA9IDQ4MDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBzY2VuZSA9IENvbW1vbi5pbml0U2NlbmUoKTtcbiAgICBDb21tb24uaW5pdExpZ2h0KHNjZW5lKTtcbiAgICBjb25zdCBjYW1lcmEgPSBDb21tb24uaW5pdENhbWVyYShzY2VuZSwgU3R1ZHlTaW1wbGUuVywgU3R1ZHlTaW1wbGUuSCk7XG4gICAgY29uc3QgcmVuZGVyZXIgPSBDb21tb24uaW5pdFJlbmRlcmVyKFN0dWR5U2ltcGxlLlcsIFN0dWR5U2ltcGxlLkgpO1xuICAgIGNvbnN0IGNvbnRyb2wgPSBDb21tb24uaW5pdENvbnRyb2woY2FtZXJhLCByZW5kZXJlcik7XG4gICAgQ29tbW9uLmluaXRIZWxwZXIoc2NlbmUpO1xuICAgIHRoaXMuaW5pdE9iamVjdChzY2VuZSk7XG4gICAgQ29tbW9uLnJlbmRlcihjb250cm9sLCByZW5kZXJlciwgc2NlbmUsIGNhbWVyYSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRPYmplY3Qoc2NlbmU6IFNjZW5lKTogdm9pZCB7XG4gICAgY29uc3QgZ2VvID0gbmV3IFBsYW5lR2VvbWV0cnkoMTAsIDEwKTtcbiAgICBjb25zdCBtYXQgPSBuZXcgU2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgdmVydGV4U2hhZGVyOiB2ZXJ0ZXhTb3VyY2UsXG4gICAgICBmcmFnbWVudFNoYWRlcjogZnJhZ21lbnRTb3VyY2UsXG4gICAgfSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBNZXNoKGdlbywgbWF0KTtcbiAgICBzY2VuZS5hZGQobWVzaCk7XG4gIH1cbn1cblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgY29uc3Qgc3R1ZHkgPSBuZXcgU3R1ZHlTaW1wbGUoKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6013\n')},3188:module=>{eval('module.exports = "void main() {\\n    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\\n}"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzE4OC5qcyIsIm1hcHBpbmdzIjoiQUFBQSwrQkFBK0IsOENBQThDLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJlZWpzLWxhYi8uL3NyYy9zaW1wbGUvc2hhZGVyLmZyYWc/ZjA2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwidm9pZCBtYWluKCkge1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCwgMC4wLCAwLjAsIDEuMCk7XFxufVwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3188\n')},6337:module=>{eval('module.exports = "void main() {\\n\\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\\n\\tvec4 mvPosition =  viewMatrix * worldPosition;\\n\\tgl_Position = projectionMatrix * mvPosition;\\n}"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjMzNy5qcyIsIm1hcHBpbmdzIjoiQUFBQSwrQkFBK0IsNkRBQTZELGtEQUFrRCxnREFBZ0QsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlanMtbGFiLy4vc3JjL3NpbXBsZS9zaGFkZXIudmVydD82ZDRlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCJ2b2lkIG1haW4oKSB7XFxuXFx0dmVjNCB3b3JsZFBvc2l0aW9uID0gbW9kZWxNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XFxuXFx0dmVjNCBtdlBvc2l0aW9uID0gIHZpZXdNYXRyaXggKiB3b3JsZFBvc2l0aW9uO1xcblxcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG12UG9zaXRpb247XFxufVwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6337\n')}},__webpack_module_cache__={},deferred;function __webpack_require__(Q){var e=__webpack_module_cache__[Q];if(void 0!==e)return e.exports;var F=__webpack_module_cache__[Q]={id:Q,loaded:!1,exports:{}};return __webpack_modules__[Q].call(F.exports,F,F.exports,__webpack_require__),F.loaded=!0,F.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(Q,e,F,U)=>{if(!e){var B=1/0;for(l=0;l<deferred.length;l++){for(var[e,F,U]=deferred[l],n=!0,s=0;s<e.length;s++)(!1&U||B>=U)&&Object.keys(__webpack_require__.O).every((Q=>__webpack_require__.O[Q](e[s])))?e.splice(s--,1):(n=!1,U<B&&(B=U));if(n){deferred.splice(l--,1);var c=F();void 0!==c&&(Q=c)}}return Q}U=U||0;for(var l=deferred.length;l>0&&deferred[l-1][2]>U;l--)deferred[l]=deferred[l-1];deferred[l]=[e,F,U]},__webpack_require__.n=Q=>{var e=Q&&Q.__esModule?()=>Q.default:()=>Q;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(Q,e)=>{for(var F in e)__webpack_require__.o(e,F)&&!__webpack_require__.o(Q,F)&&Object.defineProperty(Q,F,{enumerable:!0,get:e[F]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(Q){if("object"==typeof window)return window}}(),__webpack_require__.o=(Q,e)=>Object.prototype.hasOwnProperty.call(Q,e),__webpack_require__.r=Q=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},__webpack_require__.nmd=Q=>(Q.paths=[],Q.children||(Q.children=[]),Q),__webpack_require__.j=359,(()=>{var Q={359:0};__webpack_require__.O.j=e=>0===Q[e];var e=(e,F)=>{var U,B,[n,s,c]=F,l=0;if(n.some((e=>0!==Q[e]))){for(U in s)__webpack_require__.o(s,U)&&(__webpack_require__.m[U]=s[U]);if(c)var r=c(__webpack_require__)}for(e&&e(F);l<n.length;l++)B=n[l],__webpack_require__.o(Q,B)&&Q[B]&&Q[B][0](),Q[B]=0;return __webpack_require__.O(r)},F=self.webpackChunkthreejs_lab=self.webpackChunkthreejs_lab||[];F.forEach(e.bind(null,0)),F.push=e.bind(null,F.push.bind(F))})();var __webpack_exports__=__webpack_require__.O(void 0,[736],(()=>__webpack_require__(6013)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();