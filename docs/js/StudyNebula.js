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
/******/ 		"StudyNebula": 0
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
/******/ 	deferredModules.push(["./src/ts/StudyNebula.ts","vendor"]);
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

/***/ "./src/ts/StudyNebula.ts":
/*!*******************************!*\
  !*** ./src/ts/StudyNebula.ts ***!
  \*******************************/
/*! exports provided: Study */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Study\", function() { return Study; });\n/* harmony import */ var ts_Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts/Common */ \"./src/ts/Common.ts\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_nebula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three-nebula */ \"./node_modules/three-nebula/build/three-nebula.js\");\n/* harmony import */ var three_nebula__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three_nebula__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n\n\n\n\n\nclass Study {\n    constructor() {\n        const scene = ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initScene();\n        ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initLight(scene);\n        const camera = ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initCamera(scene, Study.W, Study.H);\n        const renderer = ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initRenderer(Study.W, Study.H);\n        const control = ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initControl(camera, renderer);\n        ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initHelper(scene);\n        this.initObject(scene);\n        ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].render(control, renderer, scene, camera, () => {\n            if (this.system) {\n                this.system.update();\n            }\n        });\n        this.initGUI();\n    }\n    initObject(scene) {\n        this.system = new three_nebula__WEBPACK_IMPORTED_MODULE_2___default.a();\n        this.emitter = new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Emitter\"]();\n        const renderer = new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"SpriteRenderer\"](scene, three__WEBPACK_IMPORTED_MODULE_1__);\n        this.range = new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"RadialVelocity\"](45, new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Vector3D\"](0, 1, 0), 180);\n        this.radius = new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Radius\"](6, 12);\n        this.emitter\n            .setRate(new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Rate\"](new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Span\"](4, 16), 0.1))\n            .setInitializers([\n            new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Position\"](new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"PointZone\"](0, 0)),\n            new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Mass\"](1),\n            this.radius,\n            new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Life\"](6),\n            this.range\n        ])\n            .setBehaviours([\n            new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Alpha\"](1, 0),\n            new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Scale\"](0.1, 1.0),\n            new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Color\"](new three__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](0x00ff00), new three__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](0x00ff00))\n        ])\n            .emit();\n        this.system.addEmitter(this.emitter).addRenderer(renderer);\n    }\n    initGUI() {\n        const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_3__[\"GUI\"]();\n        const folder = gui.addFolder(\"Emitter\");\n        folder.open();\n        this.initGUIEmitter(folder);\n        this.initGUIRate(folder);\n        this.initGUIRange(folder);\n        this.initGUIRadius(folder);\n        this.initGUIInitializers(folder);\n        const folderBehaviour = gui.addFolder(\"Behaviour\");\n        folderBehaviour.open();\n    }\n    /**\n     * emitterの座標制御\n     * @param gui\n     */\n    initGUIEmitter(gui) {\n        const folder = gui.addFolder(\"Position\");\n        folder.add(this.emitter.position, \"x\", -30.0, 30.0);\n        folder.add(this.emitter.position, \"y\", -30.0, 30.0);\n        folder.add(this.emitter.position, \"z\", -30.0, 30.0);\n        folder.open();\n    }\n    /**\n     * パーティクル生成間隔の制御パネル\n     * @param gui\n     */\n    initGUIRate(gui) {\n        //spanクラスはmin, maxの２つの値をセットにした範囲を指定する型\n        const prop = {\n            numPanA: this.emitter.rate.numPan.a,\n            numPanB: this.emitter.rate.numPan.b,\n            timePan: this.emitter.rate.timePan.a\n        };\n        /**\n         * 1回で射出されるパーティクルの数, min, max\n         */\n        const folder = gui.addFolder(\"Rate\");\n        folder\n            .add(prop, \"numPanA\", 0.0, 30.0)\n            .step(1)\n            .onChange(val => {\n            this.emitter.rate.numPan.a = val;\n        });\n        folder\n            .add(prop, \"numPanB\", 0.0, 30.0)\n            .step(1)\n            .onChange(val => {\n            this.emitter.rate.numPan.b = val;\n        });\n        folder\n            .add(prop, \"timePan\", 0.01, 0.5)\n            .step(0.01)\n            .onChange(val => {\n            this.emitter.rate.timePan.a = val;\n        });\n        folder.open();\n    }\n    /**\n     * 射出した粒子の到達点および射出角度を制御するパネル\n     * @param gui\n     */\n    initGUIRange(gui) {\n        //spanクラスはmin, maxの２つの値をセットにした範囲を指定する型\n        const prop = {\n            radiusMin: this.range.radiusPan.a,\n            radiusMax: this.range.radiusPan.b,\n            tha: this.range.tha\n        };\n        const folder = gui.addFolder(\"RadialVelocity\");\n        folder\n            .add(prop, \"radiusMin\", 0.0, 45.0)\n            .step(0.1)\n            .onChange(val => {\n            this.range.radiusPan.a = val;\n        });\n        folder\n            .add(prop, \"radiusMax\", 0.0, 45.0)\n            .step(0.1)\n            .onChange(val => {\n            this.range.radiusPan.b = val;\n        });\n        folder\n            .add(prop, \"tha\", 0.0, Math.PI)\n            .step(0.1)\n            .onChange(val => {\n            this.range.tha = val;\n        });\n        folder.open();\n    }\n    /**\n     * Spriteのサイズを制御するパネル\n     * @param gui\n     */\n    initGUIRadius(gui) {\n        //spanクラスはmin, maxの２つの値をセットにした範囲を指定する型\n        const prop = {\n            min: this.radius.radius.a,\n            max: this.radius.radius.b\n        };\n        const folder = gui.addFolder(\"Initial Sprite Size\");\n        folder\n            .add(prop, \"min\", 0.0, 45.0)\n            .step(0.1)\n            .onChange(val => {\n            this.radius.radius.a = val;\n        });\n        folder\n            .add(prop, \"max\", 0.0, 45.0)\n            .step(0.1)\n            .onChange(val => {\n            this.radius.radius.b = val;\n        });\n        folder.open();\n    }\n    initGUIInitializers(gui) {\n        console.log(this.emitter.initializers);\n    }\n}\nStudy.W = 640;\nStudy.H = 480;\nwindow.onload = () => {\n    const study = new Study();\n};\n\n\n//# sourceURL=webpack:///./src/ts/StudyNebula.ts?");

/***/ })

/******/ });