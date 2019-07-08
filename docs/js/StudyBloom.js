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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Common\", function() { return Common; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\n\nclass Common {\n    static initScene() {\n        const scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n        return scene;\n    }\n    static initLight(scene) {\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__[\"AmbientLight\"](0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    }\n    static initCamera(scene, W, H) {\n        const camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](45, W / H, 1, 400);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    }\n    static initControl(camera, render) {\n        let domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        const control = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__[\"OrbitControls\"](camera, domElement);\n        control.update();\n        return control;\n    }\n    static initRenderer(W, H, color = 0x000000, id = \"webgl-canvas\", antialias = true) {\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({\n            canvas: document.getElementById(id),\n            antialias: antialias\n        });\n        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        return renderer;\n    }\n    static initHelper(scene) {\n        const axesHelper = new three__WEBPACK_IMPORTED_MODULE_0__[\"AxesHelper\"](30);\n        scene.add(axesHelper);\n    }\n    static render(control, renderer, scene, camera, onBeforeRender) {\n        const rendering = () => {\n            if (onBeforeRender) {\n                onBeforeRender();\n            }\n            control.update();\n            renderer.render(scene, camera);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/Common.ts?");

/***/ }),

/***/ "./src/ts/StudyBloom.ts":
/*!******************************!*\
  !*** ./src/ts/StudyBloom.ts ***!
  \******************************/
/*! exports provided: StudyBloom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StudyBloom\", function() { return StudyBloom; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var ts_Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts/Common */ \"./src/ts/Common.ts\");\n/* harmony import */ var ts_bloom_BloomRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts/bloom/BloomRenderer */ \"./src/ts/bloom/BloomRenderer.ts\");\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n\n\n\n\nclass StudyBloom {\n    constructor() {\n        const scene = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initScene();\n        scene.fog = new three__WEBPACK_IMPORTED_MODULE_0__[\"Fog\"](0x000000, 80, 160);\n        ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initLight(scene);\n        const camera = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initCamera(scene, StudyBloom.W, StudyBloom.H);\n        const renderer = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initRenderer(StudyBloom.W, StudyBloom.H);\n        const control = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initControl(camera, renderer);\n        ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initHelper(scene);\n        this.initObject(scene);\n        this.bloomRenderer = new ts_bloom_BloomRenderer__WEBPACK_IMPORTED_MODULE_2__[\"BloomRenderer\"](scene, camera, renderer);\n        this.bloomRenderer.onBeforeRequestAnimationFrame = () => {\n            control.update();\n        };\n        this.bloomRenderer.threshold = 0.4;\n        this.bloomRenderer.start();\n        this.initGUI();\n    }\n    initObject(scene) {\n        const spot = new three__WEBPACK_IMPORTED_MODULE_0__[\"PointLight\"](0xffffff, 3, 0, 2);\n        spot.position.set(0, 0, 0);\n        scene.add(spot);\n        const helper = new three__WEBPACK_IMPORTED_MODULE_0__[\"PointLightHelper\"](spot, 2, 0);\n        scene.add(helper);\n        const geo = new three__WEBPACK_IMPORTED_MODULE_0__[\"SphereGeometry\"](10, 32, 32);\n        const mat = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshLambertMaterial\"]({\n            fog: scene.fog !== undefined\n        });\n        mat.color = new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0xff6666);\n        this.center = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geo, mat);\n        this.center.layers.enable(ts_bloom_BloomRenderer__WEBPACK_IMPORTED_MODULE_2__[\"BloomRenderer\"].BLOOM);\n        scene.add(this.center);\n        this.satellite = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geo, mat.clone());\n        this.satellite.position.set(30, 0, 0);\n        scene.add(this.satellite);\n        const satellite02 = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geo, mat);\n        satellite02.position.set(-30, 0, 0);\n        scene.add(satellite02);\n    }\n    initGUI() {\n        const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_3__[\"GUI\"]();\n        this.initGULBloom(gui);\n        this.initGUISatellite(gui);\n        this.initRenderGUI(gui);\n    }\n    initGULBloom(gui) {\n        const prop = {\n            bloomCenter: true,\n            bloomSatellite: false\n        };\n        const switchBloom = (target, isBloom) => {\n            if (isBloom) {\n                target.layers.enable(ts_bloom_BloomRenderer__WEBPACK_IMPORTED_MODULE_2__[\"BloomRenderer\"].BLOOM);\n            }\n            else {\n                target.layers.disable(ts_bloom_BloomRenderer__WEBPACK_IMPORTED_MODULE_2__[\"BloomRenderer\"].BLOOM);\n            }\n        };\n        const folder = gui.addFolder(\"bloom\");\n        folder.add(prop, \"bloomCenter\").onChange(val => {\n            switchBloom(this.center, val);\n        });\n        folder.add(prop, \"bloomSatellite\").onChange(val => {\n            switchBloom(this.satellite, val);\n        });\n        folder.open();\n    }\n    initGUISatellite(gui) {\n        const folder = gui.addFolder(\"Satellite\");\n        folder.add(this.satellite.material, \"transparent\");\n        folder.add(this.satellite.material, \"opacity\", 0.0, 1.0);\n        folder.open();\n    }\n    initRenderGUI(gui) {\n        const folder = gui.addFolder(\"renderer\");\n        folder.add(this.bloomRenderer, \"threshold\", 0.0, 1.0);\n        folder.add(this.bloomRenderer, \"strength\", 0.0, 4.0);\n        folder.add(this.bloomRenderer, \"radius\", 0.0, 1.0);\n        folder.open();\n    }\n    sizeUp() {\n        const size = this.bloomRenderer.getSize();\n        this.bloomRenderer.setSize(size.width + 4, size.height + 4);\n    }\n    sizeDown() {\n        const size = this.bloomRenderer.getSize();\n        this.bloomRenderer.setSize(size.width - 4, size.height - 4);\n    }\n}\nStudyBloom.W = 640;\nStudyBloom.H = 480;\nwindow.onload = () => {\n    const study = new StudyBloom();\n    document.addEventListener(\"keydown\", event => {\n        const keyName = event.key;\n        switch (keyName) {\n            case \"q\":\n                study.sizeUp();\n                break;\n            case \"a\":\n                study.sizeDown();\n                break;\n        }\n    }, false);\n};\n\n\n//# sourceURL=webpack:///./src/ts/StudyBloom.ts?");

/***/ }),

/***/ "./src/ts/bloom/BloomComposer.ts":
/*!***************************************!*\
  !*** ./src/ts/bloom/BloomComposer.ts ***!
  \***************************************/
/*! exports provided: BloomComposer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BloomComposer\", function() { return BloomComposer; });\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_UnrealBloomPass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n\nclass BloomComposer extends three_examples_jsm_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_0__[\"EffectComposer\"] {\n    constructor(renderer, renderPass) {\n        super(renderer);\n        const size = renderer.getSize(new three__WEBPACK_IMPORTED_MODULE_2__[\"Vector2\"]());\n        this.bloomPass = new three_examples_jsm_postprocessing_UnrealBloomPass__WEBPACK_IMPORTED_MODULE_1__[\"UnrealBloomPass\"](size, 1.5, 0.4, 0.4);\n        // @ts-ignore\n        this.renderToScreen = false;\n        this.addPass(renderPass);\n        this.addPass(this.bloomPass);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/bloom/BloomComposer.ts?");

/***/ }),

/***/ "./src/ts/bloom/BloomRenderer.ts":
/*!***************************************!*\
  !*** ./src/ts/bloom/BloomRenderer.ts ***!
  \***************************************/
/*! exports provided: BloomRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BloomRenderer\", function() { return BloomRenderer; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var ts_bloom_BloomComposer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts/bloom/BloomComposer */ \"./src/ts/bloom/BloomComposer.ts\");\n/* harmony import */ var ts_bloom_mix_MixComposer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts/bloom/mix/MixComposer */ \"./src/ts/bloom/mix/MixComposer.ts\");\n/* harmony import */ var ts_postprocess_PostProcessRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ts/postprocess/PostProcessRenderer */ \"./src/ts/postprocess/PostProcessRenderer.ts\");\n\n\n\n\n/**\n * Bloomレンダリングを行うクラス。\n * Bloomのオフスクリーンレンダリング、通常レンダリングとの合成、FXAAアンチエイリアスを連続して行う。\n * FXAAアンチエイリアス処理はMixShaderPass内で行われる。\n * {@link https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_unreal_bloom_selective.html reference}\n */\nclass BloomRenderer extends ts_postprocess_PostProcessRenderer__WEBPACK_IMPORTED_MODULE_3__[\"PostProcessRenderer\"] {\n    constructor(scene, camera, renderer) {\n        super(scene, camera, renderer);\n        /**\n         * bloomをマスクするオブジェクトの表示を切り替える。\n         * @param obj\n         */\n        this.darkenNonBloomed = (obj) => {\n            if (!this.isDarken(obj))\n                return;\n            if (obj.userData.materialStorage == null) {\n                obj.userData.materialStorage = new MaterialStorage();\n            }\n            const storage = obj.userData.materialStorage;\n            storage.updateMaterial(obj.material);\n            obj.material = storage.darken;\n        };\n        /**\n         * bloomマスクを元のマテリアルに戻す。\n         * @param obj\n         */\n        this.restoreMaterial = (obj) => {\n            if (!this.isDarken(obj))\n                return;\n            obj.material = obj.userData.materialStorage.original;\n        };\n        const renderPass = this.getRenderPass();\n        this.layers = new three__WEBPACK_IMPORTED_MODULE_0__[\"Layers\"]();\n        this.layers.set(BloomRenderer.BLOOM);\n        this.bloom = new ts_bloom_BloomComposer__WEBPACK_IMPORTED_MODULE_1__[\"BloomComposer\"](renderer, renderPass);\n        this.mix = new ts_bloom_mix_MixComposer__WEBPACK_IMPORTED_MODULE_2__[\"MixComposer\"](renderer, renderPass, this.bloom);\n    }\n    setSize(w, h) {\n        super.setSize(w, h);\n        this.mix.setSize(w, h);\n        this.bloom.setSize(w, h);\n    }\n    render(delta) {\n        this.scene.traverse(this.darkenNonBloomed);\n        this.bloom.render(delta);\n        this.scene.traverse(this.restoreMaterial);\n        this.mix.render(delta);\n    }\n    /**\n     * そのオブジェクトがbloomマスクの対象か否かを判定する。\n     * @param obj\n     */\n    isDarken(obj) {\n        if (obj.isMesh == null && obj.isLine == null)\n            return false;\n        if (this.layers.test(obj.layers))\n            return false;\n        return true;\n    }\n    /*\n     * BloomPassのプロパティを隠蔽するため、アクセサをBloomRenderer側に用意。\n     */\n    set threshold(value) {\n        this.bloom.bloomPass.threshold = value;\n    }\n    get threshold() {\n        return this.bloom.bloomPass.threshold;\n    }\n    set strength(value) {\n        this.bloom.bloomPass.strength = value;\n    }\n    get strength() {\n        return this.bloom.bloomPass.strength;\n    }\n    set radius(value) {\n        if (value > 1.0) {\n            console.warn(\"Bloomの半径が1を超えています。1以上ではメッシュにアウトラインが発生します。\", value);\n        }\n        this.bloom.bloomPass.radius = value;\n    }\n    get radius() {\n        return this.bloom.bloomPass.radius;\n    }\n}\nBloomRenderer.ENTIRE = 0;\nBloomRenderer.BLOOM = 30;\n/**\n * Bloom設定に応じて、オリジナルのマテリアルを格納するためのオブジェクト。\n * Object3D.userData.materialStorageに格納される。\n */\nclass MaterialStorage {\n    updateMaterial(original) {\n        this.original = original;\n        if (this.darken == null || this.darken.type !== this.original.type) {\n            this.darken = this.original.clone();\n        }\n        else {\n            this.darken.copy(this.original);\n        }\n        if (this.darken[\"color\"] != null) {\n            this.darken[\"color\"].setHex(0);\n        }\n        if (this.darken[\"shininess\"] != null) {\n            this.darken[\"shininess\"] = 0;\n        }\n        if (this.darken[\"specular\"] != null) {\n            this.darken[\"specular\"].setHex(0);\n        }\n        if (this.darken[\"emissive\"] != null) {\n            this.darken[\"emissive\"].setHex(0);\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/bloom/BloomRenderer.ts?");

/***/ }),

/***/ "./src/ts/bloom/mix/MixComposer.ts":
/*!*****************************************!*\
  !*** ./src/ts/bloom/mix/MixComposer.ts ***!
  \*****************************************/
/*! exports provided: MixComposer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MixComposer\", function() { return MixComposer; });\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var ts_bloom_mix_MixShaderPass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts/bloom/mix/MixShaderPass */ \"./src/ts/bloom/mix/MixShaderPass.ts\");\n/* harmony import */ var ts_fxaa_FXAAShaderPass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts/fxaa/FXAAShaderPass */ \"./src/ts/fxaa/FXAAShaderPass.ts\");\n\n\n\nclass MixComposer extends three_examples_jsm_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_0__[\"EffectComposer\"] {\n    constructor(renderer, renderPass, targetComposer) {\n        super(renderer);\n        this.addPass(renderPass);\n        this.addPass(new ts_bloom_mix_MixShaderPass__WEBPACK_IMPORTED_MODULE_1__[\"MixShaderPass\"](targetComposer));\n        this.fxaaPass = new ts_fxaa_FXAAShaderPass__WEBPACK_IMPORTED_MODULE_2__[\"FXAAShaderPass\"](renderer);\n        this.addPass(this.fxaaPass);\n    }\n    setSize(width, height) {\n        super.setSize(width, height);\n        this.fxaaPass.updateSize();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/bloom/mix/MixComposer.ts?");

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

/***/ "./src/ts/fxaa/FXAAShaderPass.ts":
/*!***************************************!*\
  !*** ./src/ts/fxaa/FXAAShaderPass.ts ***!
  \***************************************/
/*! exports provided: FXAAShaderPass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FXAAShaderPass\", function() { return FXAAShaderPass; });\n/* harmony import */ var three_examples_jsm_postprocessing_ShaderPass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/postprocessing/ShaderPass */ \"./node_modules/three/examples/jsm/postprocessing/ShaderPass.js\");\n/* harmony import */ var three_examples_jsm_shaders_FXAAShader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/shaders/FXAAShader */ \"./node_modules/three/examples/jsm/shaders/FXAAShader.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n\n/**\n * FXAAShaderを組み込み済みのShaderPass\n */\nclass FXAAShaderPass extends three_examples_jsm_postprocessing_ShaderPass__WEBPACK_IMPORTED_MODULE_0__[\"ShaderPass\"] {\n    /**\n     * コンストラクタ\n     * @param renderer\n     */\n    constructor(renderer) {\n        super(three_examples_jsm_shaders_FXAAShader__WEBPACK_IMPORTED_MODULE_1__[\"FXAAShader\"]);\n        this.renderer = renderer;\n        this.updateSize();\n    }\n    /**\n     * レンダリングサイズを更新する。\n     * サイズはコンストラクタで指定されたWebGLRendererに追従する。\n     */\n    updateSize() {\n        const size = this.renderer.getSize(new three__WEBPACK_IMPORTED_MODULE_2__[\"Vector2\"]());\n        const pixelRatio = this.renderer.getPixelRatio();\n        this.setSize(size.width * pixelRatio, size.height * pixelRatio);\n    }\n    setSize(width, height) {\n        super.setSize(width, height);\n        const uniforms = this.material.uniforms;\n        uniforms.resolution.value.x = 1 / width;\n        uniforms.resolution.value.y = 1 / height;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/fxaa/FXAAShaderPass.ts?");

/***/ }),

/***/ "./src/ts/postprocess/PostProcessRenderer.ts":
/*!***************************************************!*\
  !*** ./src/ts/postprocess/PostProcessRenderer.ts ***!
  \***************************************************/
/*! exports provided: PostProcessRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostProcessRenderer\", function() { return PostProcessRenderer; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n\n\n\nclass PostProcessRenderer {\n    constructor(scene, camera, renderer) {\n        /**\n         * requestAnimationFrameハンドラ\n         * @param timestamp\n         */\n        this.onRequestAnimationFrame = (timestamp) => {\n            if (this.lastUpdateTimestamp == null) {\n                this.lastUpdateTimestamp = timestamp;\n            }\n            const delta = timestamp - this.lastUpdateTimestamp;\n            if (this.onBeforeRequestAnimationFrame) {\n                this.onBeforeRequestAnimationFrame(timestamp);\n            }\n            this.render(delta);\n            this.lastUpdateTimestamp = timestamp;\n            this.id = requestAnimationFrame(this.onRequestAnimationFrame);\n        };\n        this.renderer = renderer;\n        this.scene = scene;\n        this.camera = camera;\n    }\n    getRenderPass() {\n        return new three_examples_jsm_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_1__[\"RenderPass\"](this.scene, this.camera, undefined, undefined, undefined);\n    }\n    /**\n     * シェーダーパスを挟んだEffectComposerを初期化する。\n     * @param renderer\n     */\n    initComposer(passes, renderer) {\n        const renderPass = this.getRenderPass();\n        const composer = new three_examples_jsm_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_2__[\"EffectComposer\"](renderer);\n        composer.addPass(renderPass);\n        passes.forEach(p => {\n            composer.addPass(p);\n        });\n        return composer;\n    }\n    /**\n     * レンダリングを開始する。\n     */\n    start() {\n        if (this.id != null)\n            return;\n        this.id = requestAnimationFrame(this.onRequestAnimationFrame);\n    }\n    /**\n     * レンダリングを停止する。\n     */\n    stop() {\n        if (this.id == null)\n            return;\n        cancelAnimationFrame(this.id);\n        this.lastUpdateTimestamp = null;\n    }\n    setSize(w, h) {\n        this.camera.aspect = w / h;\n        this.camera.updateProjectionMatrix();\n        this.renderer.setPixelRatio(window.devicePixelRatio);\n        this.renderer.setSize(w, h);\n        if (this.composer != null) {\n            this.composer.setSize(w, h);\n        }\n    }\n    getSize() {\n        return this.renderer.getSize(new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]());\n    }\n    render(delta) {\n        // this.composer.render(delta);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/postprocess/PostProcessRenderer.ts?");

/***/ })

/******/ });