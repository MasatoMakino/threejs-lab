/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Common.ts":
/*!***********************!*\
  !*** ./src/Common.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Common\": () => (/* binding */ Common)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\n\nclass Common {\n    static initScene() {\n        const scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();\n        return scene;\n    }\n    static initLight(scene) {\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_1__.AmbientLight(0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    }\n    static initCamera(scene, W, H, near = 1, far = 400) {\n        const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(45, W / H, near, far);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    }\n    static initControl(camera, render) {\n        let domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        const control = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(camera, domElement);\n        control.update();\n        return control;\n    }\n    static initRenderer(W, H, color = 0x000000, id = \"webgl-canvas\", antialias = true) {\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_1__.Color(color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        return renderer;\n    }\n    static initHelper(scene) {\n        const axesHelper = new three__WEBPACK_IMPORTED_MODULE_1__.AxesHelper(30);\n        scene.add(axesHelper);\n    }\n    static render(control, renderer, scene, camera, onBeforeRender) {\n        const rendering = () => {\n            if (onBeforeRender) {\n                onBeforeRender();\n            }\n            control.update();\n            renderer.render(scene, camera);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n}\n\n\n//# sourceURL=webpack://threejs-lab/./src/Common.ts?");

/***/ }),

/***/ "./src/NebulaGUI.ts":
/*!**************************!*\
  !*** ./src/NebulaGUI.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NebulaGUI\": () => (/* binding */ NebulaGUI)\n/* harmony export */ });\nclass NebulaGUI {\n    /**\n     * emitterの座標制御\n     * @param gui\n     */\n    static initEmitterPosition(gui, emitters) {\n        const prop = {\n            x: emitters[0].position.x,\n            y: emitters[0].position.y,\n            z: emitters[0].position.z,\n        };\n        const changed = (val) => {\n            emitters.forEach((emt) => {\n                emt.position.x = prop.x;\n                emt.position.y = prop.y;\n                emt.position.z = prop.z;\n            });\n        };\n        const folder = gui.addFolder(\"Position\");\n        folder.add(prop, \"x\", -30.0, 30.0).onChange(changed);\n        folder.add(prop, \"y\", -30.0, 30.0).onChange(changed);\n        folder.add(prop, \"z\", -30.0, 30.0).onChange(changed);\n        folder.open();\n    }\n    /**\n     * パーティクル生成間隔の制御パネル\n     * @param gui\n     */\n    static initEmitterRate(gui, emitters) {\n        //spanクラスはmin, maxの２つの値をセットにした範囲を指定する型\n        const prop = {\n            numPanA: emitters[0].rate.numPan.a,\n            numPanB: emitters[0].rate.numPan.b,\n            timePan: emitters[0].rate.timePan.a,\n        };\n        const changed = (val) => {\n            emitters.forEach((emt) => {\n                emt.rate.numPan.a = prop.numPanA;\n                emt.rate.numPan.b = prop.numPanB;\n                emt.rate.timePan.a = prop.timePan;\n            });\n        };\n        /**\n         * 1回で射出されるパーティクルの数, min, max\n         */\n        const folder = gui.addFolder(\"Rate\");\n        folder.add(prop, \"numPanA\", 0.0, 30.0).step(1).onChange(changed);\n        folder.add(prop, \"numPanB\", 0.0, 30.0).step(1).onChange(changed);\n        folder.add(prop, \"timePan\", 0.01, 0.5).step(0.01).onChange(changed);\n        folder.open();\n    }\n    /**\n     * 射出した粒子の到達点および射出角度を制御するパネル\n     * @param gui\n     */\n    static initRange(gui, ranges) {\n        const prop = {\n            radiusMin: ranges[0].radiusPan.a,\n            radiusMax: ranges[0].radiusPan.b,\n            tha: ranges[0].tha,\n        };\n        const changed = (val) => {\n            ranges.forEach((range) => {\n                range.radiusPan.a = prop.radiusMin;\n                range.radiusPan.b = prop.radiusMax;\n                range.tha = prop.tha;\n            });\n        };\n        const folder = gui.addFolder(\"RadialVelocity\");\n        folder.add(prop, \"radiusMin\", 0.0, 45.0).step(0.1).onChange(changed);\n        folder.add(prop, \"radiusMax\", 0.0, 45.0).step(0.1).onChange(changed);\n        folder.add(prop, \"tha\", 0.0, Math.PI).step(0.1).onChange(changed);\n        folder.open();\n    }\n    /**\n     * Spriteのサイズを制御するパネル\n     * @param gui\n     */\n    static initRadius(gui, radiusInitializers) {\n        const prop = {\n            min: radiusInitializers[0].radius.a,\n            max: radiusInitializers[0].radius.b,\n        };\n        const changed = (val) => {\n            radiusInitializers.forEach((rad) => {\n                rad.radius.a = prop.min;\n                rad.radius.b = prop.max;\n            });\n        };\n        const folder = gui.addFolder(\"Initial Sprite Size\");\n        folder.add(prop, \"min\", 0.0, 45.0).step(0.1).onChange(changed);\n        folder.add(prop, \"max\", 0.0, 45.0).step(0.1).onChange(changed);\n        folder.open();\n    }\n    /**\n     * Spriteの寿命を制御するパネル\n     * @param gui\n     */\n    static initLife(gui, lifeInitializers) {\n        //spanクラスはmin, maxの２つの値をセットにした範囲を指定する型\n        const span = lifeInitializers[0].lifePan;\n        const prop = {\n            min: span.a,\n            max: span.b,\n        };\n        const changed = (val) => {\n            lifeInitializers.forEach((life) => {\n                life.lifePan.a = prop.min;\n                life.lifePan.b = prop.max;\n            });\n        };\n        const folder = gui.addFolder(\"Life\");\n        folder.add(prop, \"min\", 0.0, 12.0).step(0.1).onChange(changed);\n        folder.add(prop, \"max\", 0.0, 24.0).step(0.1).onChange(changed);\n        folder.open();\n    }\n    static initAlpha(gui, alphaBehaviours) {\n        const prop = {\n            start: alphaBehaviours[0].alphaA.a,\n            end: alphaBehaviours[0].alphaB.a,\n        };\n        const changed = (val) => {\n            alphaBehaviours.forEach((alpha) => {\n                alpha.alphaA.a = prop.start;\n                alpha.alphaA.b = prop.start;\n                alpha.alphaB.a = prop.end;\n                alpha.alphaB.b = prop.end;\n            });\n        };\n        const folder = gui.addFolder(\"Alpha\");\n        folder.add(prop, \"start\", 0.0, 1.0).step(0.1).onChange(changed);\n        folder.add(prop, \"end\", 0.0, 1.0).step(0.1).onChange(changed);\n        folder.open();\n    }\n    static initScale(gui, scaleBehaviours) {\n        const prop = {\n            start: scaleBehaviours[0].scaleA.a,\n            end: scaleBehaviours[0].scaleB.a,\n        };\n        const changed = (val) => {\n            scaleBehaviours.forEach((scale) => {\n                scale.scaleA.a = prop.start;\n                scale.scaleA.b = prop.start;\n                scale.scaleB.a = prop.end;\n                scale.scaleB.b = prop.end;\n            });\n        };\n        const folder = gui.addFolder(\"Scale\");\n        folder.add(prop, \"start\", 0.0, 3.0).step(0.1).onChange(changed);\n        folder.add(prop, \"end\", 0.0, 3.0).step(0.1).onChange(changed);\n        folder.open();\n    }\n    static initColor(gui, colors) {\n        const prop = {\n            start: colors[0].colorA.colors[0].getHex(),\n            end: colors[0].colorB.colors[0].getHex(),\n        };\n        const changed = () => {\n            colors.forEach((color) => {\n                color.colorA.colors[0].setHex(prop.start);\n                color.colorB.colors[0].setHex(prop.end);\n            });\n        };\n        const folder = gui.addFolder(\"Color\");\n        folder.addColor(prop, \"start\").onChange(changed);\n        folder.addColor(prop, \"end\").onChange(changed);\n        folder.open();\n    }\n}\n\n\n//# sourceURL=webpack://threejs-lab/./src/NebulaGUI.ts?");

/***/ }),

/***/ "./src/StudyNebulaFire.ts":
/*!********************************!*\
  !*** ./src/StudyNebulaFire.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Study\": () => (/* binding */ Study)\n/* harmony export */ });\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_nebula__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three-nebula */ \"./node_modules/three-nebula/build/esm/index.js\");\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Common */ \"./src/Common.ts\");\n/* harmony import */ var _nebulaFire_FireEmitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nebulaFire/FireEmitter */ \"./src/nebulaFire/FireEmitter.ts\");\n/* harmony import */ var _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NebulaGUI */ \"./src/NebulaGUI.ts\");\n\n\n\n\n\n\n/**\n * パーティクルエンジンを利用した炎の表現の作例。\n * https://www.youtube.com/watch?v=5Mw6NpSEb2o\n */\nclass Study {\n    constructor() {\n        const scene = _Common__WEBPACK_IMPORTED_MODULE_2__.Common.initScene();\n        _Common__WEBPACK_IMPORTED_MODULE_2__.Common.initLight(scene);\n        const camera = _Common__WEBPACK_IMPORTED_MODULE_2__.Common.initCamera(scene, Study.W, Study.H);\n        const renderer = _Common__WEBPACK_IMPORTED_MODULE_2__.Common.initRenderer(Study.W, Study.H);\n        const control = _Common__WEBPACK_IMPORTED_MODULE_2__.Common.initControl(camera, renderer);\n        _Common__WEBPACK_IMPORTED_MODULE_2__.Common.initHelper(scene);\n        this.initObject(scene);\n        _Common__WEBPACK_IMPORTED_MODULE_2__.Common.render(control, renderer, scene, camera, () => {\n            if (this.system) {\n                this.system.update();\n            }\n        });\n        this.initGUI();\n    }\n    initObject(scene) {\n        this.system = new three_nebula__WEBPACK_IMPORTED_MODULE_1__.default();\n        this.emitter = new _nebulaFire_FireEmitter__WEBPACK_IMPORTED_MODULE_3__.FireEmitter({\n            maps: [\n                \"./textures/fire01.png\",\n                \"./textures/fire02.png\",\n                \"./textures/fire03.png\",\n                \"./textures/fire04.png\",\n            ],\n        });\n        const renderer = new three_nebula__WEBPACK_IMPORTED_MODULE_1__.SpriteRenderer(scene, three__WEBPACK_IMPORTED_MODULE_5__);\n        this.system.addEmitter(this.emitter);\n        this.system.addRenderer(renderer);\n    }\n    initGUI() {\n        const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_0__.GUI();\n        const folder = gui.addFolder(\"Emitter\");\n        folder.open();\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__.NebulaGUI.initEmitterPosition(folder, [this.emitter]);\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__.NebulaGUI.initEmitterRate(folder, [this.emitter]);\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__.NebulaGUI.initRange(folder, [this.emitter.rangeInitializer]);\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__.NebulaGUI.initRadius(folder, [this.emitter.radiusInitializer]);\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__.NebulaGUI.initLife(folder, [this.emitter.lifeInitializer]);\n        const folderBehaviour = gui.addFolder(\"Behaviour\");\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__.NebulaGUI.initAlpha(folderBehaviour, [this.emitter.alphaBehaviour]);\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__.NebulaGUI.initScale(folderBehaviour, [this.emitter.scaleBehaviour]);\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__.NebulaGUI.initColor(folderBehaviour, [this.emitter.colorBehaviour]);\n        folderBehaviour.open();\n    }\n}\nStudy.W = 640;\nStudy.H = 480;\nwindow.onload = () => {\n    const study = new Study();\n};\n\n\n//# sourceURL=webpack://threejs-lab/./src/StudyNebulaFire.ts?");

/***/ }),

/***/ "./src/nebulaFire/FireEmitter.ts":
/*!***************************************!*\
  !*** ./src/nebulaFire/FireEmitter.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FireEmitter\": () => (/* binding */ FireEmitter),\n/* harmony export */   \"FireEmitterOption\": () => (/* binding */ FireEmitterOption)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_nebula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three-nebula */ \"./node_modules/three-nebula/build/esm/index.js\");\n\n\nclass FireEmitter extends three_nebula__WEBPACK_IMPORTED_MODULE_0__.Emitter {\n    constructor(option) {\n        super();\n        this.initEmitter(option);\n    }\n    get colorBehaviour() {\n        return this._color;\n    }\n    get scaleBehaviour() {\n        return this._scale;\n    }\n    get alphaBehaviour() {\n        return this._alpha;\n    }\n    get lifeInitializer() {\n        return this._life;\n    }\n    get radiusInitializer() {\n        return this._radius;\n    }\n    get rangeInitializer() {\n        return this._range;\n    }\n    initEmitter(option) {\n        this._range = new three_nebula__WEBPACK_IMPORTED_MODULE_0__.RadialVelocity(16, new three_nebula__WEBPACK_IMPORTED_MODULE_0__.Vector3D(0, 1, 0), 20);\n        this._radius = new three_nebula__WEBPACK_IMPORTED_MODULE_0__.Radius(8, 10);\n        this._life = new three_nebula__WEBPACK_IMPORTED_MODULE_0__.Life(4.0);\n        this._alpha = new three_nebula__WEBPACK_IMPORTED_MODULE_0__.Alpha(1.0, 1.0);\n        this._scale = new three_nebula__WEBPACK_IMPORTED_MODULE_0__.Scale(1.2, 0.6);\n        this._color = new three_nebula__WEBPACK_IMPORTED_MODULE_0__.Color(new three__WEBPACK_IMPORTED_MODULE_1__.Color(0x994422), new three__WEBPACK_IMPORTED_MODULE_1__.Color(0x110000));\n        this.initOnLoadedTexture(option);\n    }\n    initBody(urlArray) {\n        const loader = new three__WEBPACK_IMPORTED_MODULE_1__.TextureLoader();\n        const sprites = urlArray.map((url) => {\n            return new three__WEBPACK_IMPORTED_MODULE_1__.Sprite(new three__WEBPACK_IMPORTED_MODULE_1__.SpriteMaterial({\n                map: loader.load(url),\n                blending: three__WEBPACK_IMPORTED_MODULE_1__.AdditiveBlending,\n            }));\n        });\n        this._body = new three_nebula__WEBPACK_IMPORTED_MODULE_0__.Body(sprites);\n    }\n    initOnLoadedTexture(option) {\n        this.initBody(option.maps);\n        // @ts-ignore\n        this.setRate(new three_nebula__WEBPACK_IMPORTED_MODULE_0__.Rate(new three_nebula__WEBPACK_IMPORTED_MODULE_0__.Span(2, 7), 0.06))\n            .setInitializers([\n            new three_nebula__WEBPACK_IMPORTED_MODULE_0__.Position(new three_nebula__WEBPACK_IMPORTED_MODULE_0__.SphereZone(0, 0, 0.0, 6.0)),\n            this._radius,\n            this._life,\n            this._range,\n            this._body,\n        ])\n            .setBehaviours([this._alpha, this._scale, this._color])\n            .emit();\n        // @ts-ignore\n        this.position.y = -8;\n    }\n}\nclass FireEmitterOption {\n}\n\n\n//# sourceURL=webpack://threejs-lab/./src/nebulaFire/FireEmitter.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"StudyNebulaFire": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkthreejs_lab"] = self["webpackChunkthreejs_lab"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/StudyNebulaFire.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;