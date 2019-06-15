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
/******/ 		"StudyBloom": 0
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
/******/ 	deferredModules.push(["./src/ts/StudyBloom.ts","vendor"]);
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Common\", function() { return Common; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\n\nclass Common {\n    static initScene() {\n        const scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n        return scene;\n    }\n    static initLight(scene) {\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__[\"AmbientLight\"](0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    }\n    static initCamera(scene, W, H) {\n        const camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](45, W / H, 1, 400);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    }\n    static initControl(camera, render) {\n        let domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        const control = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__[\"OrbitControls\"](camera, domElement);\n        control.update();\n        return control;\n    }\n    static initRenderer(W, H, color = 0x000000, id = \"webgl-canvas\", antialias = true) {\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({\n            canvas: document.getElementById(id),\n            antialias: antialias\n        });\n        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        return renderer;\n    }\n    static initHelper(scene) {\n        const axesHelper = new three__WEBPACK_IMPORTED_MODULE_0__[\"AxesHelper\"](30);\n        scene.add(axesHelper);\n    }\n    static render(control, renderer, scene, camera) {\n        const rendering = () => {\n            control.update();\n            renderer.render(scene, camera);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/Common.ts?");

/***/ }),

/***/ "./src/ts/StudyBloom.ts":
/*!******************************!*\
  !*** ./src/ts/StudyBloom.ts ***!
  \******************************/
/*! exports provided: StudyBloom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StudyBloom\", function() { return StudyBloom; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var ts_Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts/Common */ \"./src/ts/Common.ts\");\n/* harmony import */ var ts_bloom_BloomRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts/bloom/BloomRenderer */ \"./src/ts/bloom/BloomRenderer.ts\");\n\n\n\n\n\nclass StudyBloom {\n    constructor() {\n        const scene = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initScene();\n        scene.fog = new three__WEBPACK_IMPORTED_MODULE_0__[\"Fog\"](0x000000, 80, 160);\n        ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initLight(scene);\n        const camera = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initCamera(scene, StudyBloom.W, StudyBloom.H);\n        const renderer = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initRenderer(StudyBloom.W, StudyBloom.H);\n        const control = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initControl(camera, renderer);\n        ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initHelper(scene);\n        this.initObject(scene);\n        this.bloomRenderer = new ts_bloom_BloomRenderer__WEBPACK_IMPORTED_MODULE_2__[\"BloomRenderer\"](scene, camera, renderer);\n        this.bloomRenderer.onBeforeRequestAnimationFrame = () => {\n            control.update();\n        };\n        this.bloomRenderer.start();\n    }\n    initObject(scene) {\n        const spot = new three__WEBPACK_IMPORTED_MODULE_0__[\"PointLight\"](0xffffff, 3, 0, 2);\n        spot.position.set(10, 20, 30);\n        scene.add(spot);\n        const helper = new three__WEBPACK_IMPORTED_MODULE_0__[\"PointLightHelper\"](spot);\n        scene.add(helper);\n        const geo = new three__WEBPACK_IMPORTED_MODULE_0__[\"SphereGeometry\"](10, 64, 64);\n        const mat = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshLambertMaterial\"]({\n            fog: scene.fog !== undefined\n        });\n        mat.color = new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0xff6666);\n        const mesh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geo, mat);\n        scene.add(mesh);\n    }\n}\nStudyBloom.W = 640;\nStudyBloom.H = 480;\nwindow.onload = () => {\n    const study = new StudyBloom();\n};\n\n\n//# sourceURL=webpack:///./src/ts/StudyBloom.ts?");

/***/ }),

/***/ "./src/ts/bloom/BloomComposer.ts":
/*!***************************************!*\
  !*** ./src/ts/bloom/BloomComposer.ts ***!
  \***************************************/
/*! exports provided: BloomComposer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BloomComposer\", function() { return BloomComposer; });\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_UnrealBloomPass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n\nclass BloomComposer extends three_examples_jsm_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_0__[\"EffectComposer\"] {\n    constructor(renderer, renderPass) {\n        super(renderer);\n        const size = renderer.getSize(new three__WEBPACK_IMPORTED_MODULE_2__[\"Vector2\"]());\n        this.bloomPass = new three_examples_jsm_postprocessing_UnrealBloomPass__WEBPACK_IMPORTED_MODULE_1__[\"UnrealBloomPass\"](size, 1.0, 0.6, 0.2);\n        // @ts-ignore\n        this.renderToScreen = false;\n        this.addPass(renderPass);\n        this.addPass(this.bloomPass);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/bloom/BloomComposer.ts?");

/***/ }),

/***/ "./src/ts/bloom/BloomRenderer.ts":
/*!***************************************!*\
  !*** ./src/ts/bloom/BloomRenderer.ts ***!
  \***************************************/
/*! exports provided: BloomRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BloomRenderer\", function() { return BloomRenderer; });\n/* harmony import */ var ts_bloom_BloomComposer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts/bloom/BloomComposer */ \"./src/ts/bloom/BloomComposer.ts\");\n/* harmony import */ var ts_bloom_mix_MixComposer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts/bloom/mix/MixComposer */ \"./src/ts/bloom/mix/MixComposer.ts\");\n/* harmony import */ var ts_postprocess_PostProcessRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts/postprocess/PostProcessRenderer */ \"./src/ts/postprocess/PostProcessRenderer.ts\");\n\n\n\nclass BloomRenderer extends ts_postprocess_PostProcessRenderer__WEBPACK_IMPORTED_MODULE_2__[\"PostProcessRenderer\"] {\n    constructor(scene, camera, renderer) {\n        super(scene, camera, renderer);\n        const renderScene = this.getRenderPass();\n        this.bloom = new ts_bloom_BloomComposer__WEBPACK_IMPORTED_MODULE_0__[\"BloomComposer\"](renderer, renderScene);\n        this.mix = new ts_bloom_mix_MixComposer__WEBPACK_IMPORTED_MODULE_1__[\"MixComposer\"](renderer, renderScene, this.bloom);\n    }\n    render(delta) {\n        //TODO render()\n        // this.scene.traverse(darkenNonBloomed);\n        this.bloom.render(delta);\n        // this.scene.traverse(restoreMaterial);\n        this.mix.render(delta);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/bloom/BloomRenderer.ts?");

/***/ }),

/***/ "./src/ts/bloom/mix/MixComposer.ts":
/*!*****************************************!*\
  !*** ./src/ts/bloom/mix/MixComposer.ts ***!
  \*****************************************/
/*! exports provided: MixComposer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MixComposer\", function() { return MixComposer; });\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var ts_bloom_mix_MixShaderPass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts/bloom/mix/MixShaderPass */ \"./src/ts/bloom/mix/MixShaderPass.ts\");\n\n\nclass MixComposer extends three_examples_jsm_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_0__[\"EffectComposer\"] {\n    constructor(renderer, renderPass, targetComposer) {\n        super(renderer);\n        this.addPass(renderPass);\n        this.addPass(new ts_bloom_mix_MixShaderPass__WEBPACK_IMPORTED_MODULE_1__[\"MixShaderPass\"](targetComposer));\n        //TODO : add FXAA Shader Pass\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/bloom/mix/MixComposer.ts?");

/***/ }),

/***/ "./src/ts/bloom/mix/MixShaderPass.ts":
/*!*******************************************!*\
  !*** ./src/ts/bloom/mix/MixShaderPass.ts ***!
  \*******************************************/
/*! exports provided: MixShaderPass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MixShaderPass\", function() { return MixShaderPass; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_ShaderPass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/postprocessing/ShaderPass */ \"./node_modules/three/examples/jsm/postprocessing/ShaderPass.js\");\n/* harmony import */ var _mix_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mix.frag */ \"./src/ts/bloom/mix/mix.frag\");\n/* harmony import */ var _mix_frag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mix_frag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mix_vert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mix.vert */ \"./src/ts/bloom/mix/mix.vert\");\n/* harmony import */ var _mix_vert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mix_vert__WEBPACK_IMPORTED_MODULE_3__);\n\n\n// @ts-ignore\n\n// @ts-ignore\n\n/**\n * 他のエフェクトコンポーザーの描画結果を受け取り、自身のレンダリング結果に乗算するShaderPass\n */\nclass MixShaderPass extends three_examples_jsm_postprocessing_ShaderPass__WEBPACK_IMPORTED_MODULE_1__[\"ShaderPass\"] {\n    constructor(targetComposer) {\n        super(new three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderMaterial\"]({\n            uniforms: {\n                baseTexture: { value: null },\n                bloomTexture: { value: targetComposer.renderTarget2.texture }\n            },\n            vertexShader: _mix_vert__WEBPACK_IMPORTED_MODULE_3___default.a,\n            fragmentShader: _mix_frag__WEBPACK_IMPORTED_MODULE_2___default.a,\n            defines: {}\n        }), MixShaderPass.TEXTURE_ID);\n        this.needsSwap = true;\n    }\n}\nMixShaderPass.TEXTURE_ID = \"baseTexture\";\n\n\n//# sourceURL=webpack:///./src/ts/bloom/mix/MixShaderPass.ts?");

/***/ }),

/***/ "./src/ts/bloom/mix/mix.frag":
/*!***********************************!*\
  !*** ./src/ts/bloom/mix/mix.frag ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"uniform sampler2D baseTexture;\\nuniform sampler2D bloomTexture;\\nvarying vec2 vUv;\\nvec4 getTexture( sampler2D texture ) {\\n    return mapTexelToLinear( texture2D( texture , vUv ) );\\n}\\nvoid main() {\\n    gl_FragColor = ( getTexture( baseTexture ) + vec4( 1.0 ) * getTexture( bloomTexture ) );\\n}\"\n\n//# sourceURL=webpack:///./src/ts/bloom/mix/mix.frag?");

/***/ }),

/***/ "./src/ts/bloom/mix/mix.vert":
/*!***********************************!*\
  !*** ./src/ts/bloom/mix/mix.vert ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"varying vec2 vUv;\\nvoid main() {\\n    vUv = uv;\\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\\n}\"\n\n//# sourceURL=webpack:///./src/ts/bloom/mix/mix.vert?");

/***/ }),

/***/ "./src/ts/postprocess/PostProcessRenderer.ts":
/*!***************************************************!*\
  !*** ./src/ts/postprocess/PostProcessRenderer.ts ***!
  \***************************************************/
/*! exports provided: PostProcessRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostProcessRenderer\", function() { return PostProcessRenderer; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n\n\nclass PostProcessRenderer {\n    constructor(scene, camera, renderer) {\n        /**\n         * requestAnimationFrameハンドラ\n         * @param timestamp\n         */\n        this.onRequestAnimationFrame = (timestamp) => {\n            if (this.lastUpdateTimestamp == null) {\n                this.lastUpdateTimestamp = timestamp;\n            }\n            const delta = timestamp - this.lastUpdateTimestamp;\n            if (this.onBeforeRequestAnimationFrame) {\n                this.onBeforeRequestAnimationFrame(timestamp);\n            }\n            this.render(delta);\n            this.lastUpdateTimestamp = timestamp;\n            this.id = requestAnimationFrame(this.onRequestAnimationFrame);\n        };\n        this.renderer = renderer;\n        this.scene = scene;\n        this.camera = camera;\n    }\n    getRenderPass() {\n        return new three_examples_jsm_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_1__[\"RenderPass\"](this.scene, this.camera, undefined, undefined, undefined);\n    }\n    /**\n     * レンダリングを開始する。\n     */\n    start() {\n        if (this.id != null)\n            return;\n        this.id = requestAnimationFrame(this.onRequestAnimationFrame);\n    }\n    /**\n     * レンダリングを停止する。\n     */\n    stop() {\n        if (this.id == null)\n            return;\n        cancelAnimationFrame(this.id);\n        this.lastUpdateTimestamp = null;\n    }\n    updateSize(w, h) {\n        this.camera.aspect = w / h;\n        this.camera.updateProjectionMatrix();\n        this.renderer.setPixelRatio(window.devicePixelRatio);\n        this.renderer.setSize(w, h);\n    }\n    getSize() {\n        return this.renderer.getSize(new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]());\n    }\n    render(delta) {\n        // this.composer.render(delta);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/postprocess/PostProcessRenderer.ts?");

/***/ })

/******/ });