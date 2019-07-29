/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"StudyPeripheralLight": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/ts/StudyPeripheralLight.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/Common.ts":
/*!**************************!*\
  !*** ./src/ts/Common.ts ***!
  \**************************/
/*! exports provided: Common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Common\", function() { return Common; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\n\nclass Common {\n    static initScene() {\n        const scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n        return scene;\n    }\n    static initLight(scene) {\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__[\"AmbientLight\"](0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    }\n    static initCamera(scene, W, H) {\n        const camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](45, W / H, 1, 400);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    }\n    static initControl(camera, render) {\n        let domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        const control = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__[\"OrbitControls\"](camera, domElement);\n        control.update();\n        return control;\n    }\n    static initRenderer(W, H, color = 0x000000, id = \"webgl-canvas\", antialias = true) {\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({\n            canvas: document.getElementById(id),\n            antialias: antialias\n        });\n        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        return renderer;\n    }\n    static initHelper(scene) {\n        const axesHelper = new three__WEBPACK_IMPORTED_MODULE_0__[\"AxesHelper\"](30);\n        scene.add(axesHelper);\n    }\n    static render(control, renderer, scene, camera, onBeforeRender) {\n        const rendering = () => {\n            if (onBeforeRender) {\n                onBeforeRender();\n            }\n            control.update();\n            renderer.render(scene, camera);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/Common.ts?");

/***/ }),

/***/ "./src/ts/StudyPeripheralLight.ts":
/*!****************************************!*\
  !*** ./src/ts/StudyPeripheralLight.ts ***!
  \****************************************/
/*! exports provided: Study */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Study\", function() { return Study; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var ts_Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts/Common */ \"./src/ts/Common.ts\");\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n/* harmony import */ var ts_postprocess_PostProcessRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ts/postprocess/PostProcessRenderer */ \"./src/ts/postprocess/PostProcessRenderer.ts\");\n/* harmony import */ var ts_peripheralLight_PeripheralLightPass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts/peripheralLight/PeripheralLightPass */ \"./src/ts/peripheralLight/PeripheralLightPass.ts\");\n\n\n\n\n\nclass Study {\n    constructor() {\n        const scene = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initScene();\n        scene.fog = new three__WEBPACK_IMPORTED_MODULE_0__[\"Fog\"](0xffffff, 80, 160);\n        ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initLight(scene);\n        const camera = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initCamera(scene, Study.W, Study.H);\n        const renderer = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initRenderer(Study.W, Study.H, 0xffffff);\n        const control = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initControl(camera, renderer);\n        ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initHelper(scene);\n        this.initObject(scene);\n        this.render = new ts_postprocess_PostProcessRenderer__WEBPACK_IMPORTED_MODULE_3__[\"PostProcessRenderer\"](scene, camera, renderer);\n        const pass = new ts_peripheralLight_PeripheralLightPass__WEBPACK_IMPORTED_MODULE_4__[\"PeripheralLightPass\"]();\n        this.render.initComposer([pass], renderer);\n        this.render.onBeforeRequestAnimationFrame = () => {\n            control.update();\n        };\n        this.render.start();\n        this.initGUI(pass);\n    }\n    initObject(scene) {\n        const geo = new three__WEBPACK_IMPORTED_MODULE_0__[\"SphereGeometry\"](10, 16, 16);\n        const mat = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshLambertMaterial\"]({\n            fog: scene.fog !== undefined\n        });\n        mat.color = new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0xff6666);\n        this.center = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geo, mat);\n        scene.add(this.center);\n        this.satellite = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geo, mat.clone());\n        this.satellite.position.set(30, 0, 0);\n        scene.add(this.satellite);\n        const satellite02 = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geo, mat);\n        satellite02.position.set(-30, 0, 0);\n        scene.add(satellite02);\n    }\n    initGUI(pass) {\n        const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_2__[\"GUI\"]();\n        this.initGUIEffect(gui, pass);\n    }\n    initGUIEffect(gui, pass) {\n        const prop = {\n            color: pass.color.getHex()\n        };\n        const folder = gui.addFolder(\"PeripheralLightPass\");\n        folder.add(pass, \"rate\", 0.0, 10.0);\n        folder.add(pass, \"radiusInner\", 0.0, 3.0);\n        folder.add(pass, \"radiusOuter\", 0.0, 3.0);\n        folder.addColor(prop, \"color\").onChange(val => {\n            pass.color.setHex(val);\n        });\n        folder.open();\n    }\n}\nStudy.W = 640;\nStudy.H = 480;\nwindow.onload = () => {\n    const study = new Study();\n};\n\n\n//# sourceURL=webpack:///./src/ts/StudyPeripheralLight.ts?");

/***/ }),

/***/ "./src/ts/peripheralLight/PeripheralLight.frag.glsl.ts":
/*!*************************************************************!*\
  !*** ./src/ts/peripheralLight/PeripheralLight.frag.glsl.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    return `\n\nuniform sampler2D tDiffuse;\nuniform float rate;\nuniform float radiusInner;\nuniform float radiusOuter;\nuniform vec3 color;\nvarying vec2 vUv;\n\nvoid main() {\n  float distance = length( vUv - 0.5 )*2.0;\n  distance = smoothstep( radiusInner, radiusOuter, distance);  \n  float shift = rate * distance * 0.01;\n\n  vec4 original = texture2D( tDiffuse, vUv );\n  vec3 result = mix( original.rgb, color, shift);\n\n  gl_FragColor = vec4( result , original.a );\n}\n  `;\n});\n\n\n//# sourceURL=webpack:///./src/ts/peripheralLight/PeripheralLight.frag.glsl.ts?");

/***/ }),

/***/ "./src/ts/peripheralLight/PeripheralLightPass.ts":
/*!*******************************************************!*\
  !*** ./src/ts/peripheralLight/PeripheralLightPass.ts ***!
  \*******************************************************/
/*! exports provided: PeripheralLightPass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PeripheralLightPass\", function() { return PeripheralLightPass; });\n/* harmony import */ var three_examples_jsm_postprocessing_ShaderPass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/postprocessing/ShaderPass */ \"./node_modules/three/examples/jsm/postprocessing/ShaderPass.js\");\n/* harmony import */ var _PeripheralLightShader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PeripheralLightShader */ \"./src/ts/peripheralLight/PeripheralLightShader.ts\");\n\n\n/**\n * 周辺光量の減光を表現するフィルタ。\n */\nclass PeripheralLightPass extends three_examples_jsm_postprocessing_ShaderPass__WEBPACK_IMPORTED_MODULE_0__[\"ShaderPass\"] {\n    get rate() {\n        return this.uniforms[\"rate\"].value;\n    }\n    set rate(value) {\n        this.uniforms[\"rate\"].value = value;\n    }\n    get radiusInner() {\n        return this.uniforms[\"radiusInner\"].value;\n    }\n    set radiusInner(value) {\n        this.uniforms[\"radiusInner\"].value = value;\n    }\n    get radiusOuter() {\n        return this.uniforms[\"radiusOuter\"].value;\n    }\n    set radiusOuter(value) {\n        this.uniforms[\"radiusOuter\"].value = value;\n    }\n    get color() {\n        return this.uniforms[\"color\"].value;\n    }\n    set color(value) {\n        this.uniforms[\"color\"].value = value;\n    }\n    constructor() {\n        super(new _PeripheralLightShader__WEBPACK_IMPORTED_MODULE_1__[\"PeripheralLightShader\"]());\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/peripheralLight/PeripheralLightPass.ts?");

/***/ }),

/***/ "./src/ts/peripheralLight/PeripheralLightShader.ts":
/*!*********************************************************!*\
  !*** ./src/ts/peripheralLight/PeripheralLightShader.ts ***!
  \*********************************************************/
/*! exports provided: PeripheralLightShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PeripheralLightShader\", function() { return PeripheralLightShader; });\n/* harmony import */ var ts_postprocess_PostProcessShader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts/postprocess/PostProcessShader */ \"./src/ts/postprocess/PostProcessShader.ts\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _PeripheralLight_frag_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PeripheralLight.frag.glsl */ \"./src/ts/peripheralLight/PeripheralLight.frag.glsl.ts\");\n\n\n\n\nclass PeripheralLightShader extends ts_postprocess_PostProcessShader__WEBPACK_IMPORTED_MODULE_0__[\"PostProcessShader\"] {\n    constructor() {\n        super();\n        this.fragmentShader = Object(_PeripheralLight_frag_glsl__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    }\n    initUniform() {\n        super.initUniform();\n        this.uniforms = three__WEBPACK_IMPORTED_MODULE_1__[\"UniformsUtils\"].merge([\n            this.uniforms,\n            {\n                rate: { value: 5.0 },\n                radiusInner: { value: 0.75 },\n                radiusOuter: { value: Math.sqrt(2.0) },\n                color: { value: new three__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](0, 0, 0) }\n            }\n        ]);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/peripheralLight/PeripheralLightShader.ts?");

/***/ }),

/***/ "./src/ts/postprocess/PostProcessRenderer.ts":
/*!***************************************************!*\
  !*** ./src/ts/postprocess/PostProcessRenderer.ts ***!
  \***************************************************/
/*! exports provided: PostProcessRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostProcessRenderer\", function() { return PostProcessRenderer; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n\n\n\nclass PostProcessRenderer {\n    constructor(scene, camera, renderer) {\n        this.composers = [];\n        /**\n         * requestAnimationFrameハンドラ\n         * @param timestamp\n         */\n        this.onRequestAnimationFrame = (timestamp) => {\n            if (this.lastUpdateTimestamp == null) {\n                this.lastUpdateTimestamp = timestamp;\n            }\n            const delta = timestamp - this.lastUpdateTimestamp;\n            if (this.onBeforeRequestAnimationFrame) {\n                this.onBeforeRequestAnimationFrame(timestamp);\n            }\n            this.render(delta);\n            this.lastUpdateTimestamp = timestamp;\n            this.id = requestAnimationFrame(this.onRequestAnimationFrame);\n        };\n        this.renderer = renderer;\n        this.scene = scene;\n        this.camera = camera;\n    }\n    getRenderPass() {\n        return new three_examples_jsm_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_1__[\"RenderPass\"](this.scene, this.camera, undefined, undefined, undefined);\n    }\n    /**\n     * シェーダーパスを挟んだEffectComposerを初期化する。\n     * @param renderer\n     */\n    initComposer(passes, renderer) {\n        const renderPass = this.getRenderPass();\n        const composer = new three_examples_jsm_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_2__[\"EffectComposer\"](renderer);\n        composer.addPass(renderPass);\n        passes.forEach(p => {\n            composer.addPass(p);\n        });\n        this.composers.push(composer);\n        return composer;\n    }\n    /**\n     * レンダリングを開始する。\n     */\n    start() {\n        if (this.id != null)\n            return;\n        this.id = requestAnimationFrame(this.onRequestAnimationFrame);\n    }\n    /**\n     * レンダリングを停止する。\n     */\n    stop() {\n        if (this.id == null)\n            return;\n        cancelAnimationFrame(this.id);\n        this.lastUpdateTimestamp = null;\n    }\n    setSize(w, h) {\n        this.camera.aspect = w / h;\n        this.camera.updateProjectionMatrix();\n        this.renderer.setPixelRatio(window.devicePixelRatio);\n        this.renderer.setSize(w, h);\n        this.composers.forEach(composer => {\n            composer.setSize(w, h);\n        });\n    }\n    getSize() {\n        return this.renderer.getSize(new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]());\n    }\n    render(delta) {\n        this.composers.forEach(composer => {\n            composer.render(delta);\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/postprocess/PostProcessRenderer.ts?");

/***/ }),

/***/ "./src/ts/postprocess/PostProcessShader.ts":
/*!*************************************************!*\
  !*** ./src/ts/postprocess/PostProcessShader.ts ***!
  \*************************************************/
/*! exports provided: PostProcessShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostProcessShader\", function() { return PostProcessShader; });\n/**\n * EffectComposer用のShaderオブジェクトに必要な要素を定義したクラス。\n */\nclass PostProcessShader {\n    constructor() {\n        this.vertexShader = `\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }\n  `;\n        this.initUniform();\n    }\n    initUniform() {\n        this.uniforms = {\n            tDiffuse: { value: null }\n        };\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/postprocess/PostProcessShader.ts?");

/***/ })

/******/ });