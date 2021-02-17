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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Common\": () => (/* binding */ Common)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\n\nclass Common {\n    static initScene() {\n        const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n        return scene;\n    }\n    static initLight(scene) {\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    }\n    static initCamera(scene, W, H, near = 1, far = 400) {\n        const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(45, W / H, near, far);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    }\n    static initControl(camera, render) {\n        let domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        const control = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__.OrbitControls(camera, domElement);\n        control.update();\n        return control;\n    }\n    static initRenderer(W, H, color = 0x000000, id = \"webgl-canvas\", antialias = true) {\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__.Color(color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        return renderer;\n    }\n    static initHelper(scene) {\n        const axesHelper = new three__WEBPACK_IMPORTED_MODULE_0__.AxesHelper(30);\n        scene.add(axesHelper);\n    }\n    static render(control, renderer, scene, camera, onBeforeRender) {\n        const rendering = () => {\n            if (onBeforeRender) {\n                onBeforeRender();\n            }\n            control.update();\n            renderer.render(scene, camera);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n}\n\n\n//# sourceURL=webpack://threejs-lab/./src/Common.ts?");

/***/ }),

/***/ "./src/NebulaGUI.ts":
/*!**************************!*\
  !*** ./src/NebulaGUI.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NebulaGUI\": () => (/* binding */ NebulaGUI)\n/* harmony export */ });\nclass NebulaGUI {\n    /**\n     * emitterの座標制御\n     * @param gui\n     */\n    static initEmitterPosition(gui, emitters) {\n        const prop = {\n            x: emitters[0].position.x,\n            y: emitters[0].position.y,\n            z: emitters[0].position.z,\n        };\n        const changed = (val) => {\n            emitters.forEach((emt) => {\n                emt.position.x = prop.x;\n                emt.position.y = prop.y;\n                emt.position.z = prop.z;\n            });\n        };\n        const folder = gui.addFolder(\"Position\");\n        folder.add(prop, \"x\", -30.0, 30.0).onChange(changed);\n        folder.add(prop, \"y\", -30.0, 30.0).onChange(changed);\n        folder.add(prop, \"z\", -30.0, 30.0).onChange(changed);\n        folder.open();\n    }\n    /**\n     * パーティクル生成間隔の制御パネル\n     * @param gui\n     */\n    static initEmitterRate(gui, emitters) {\n        //spanクラスはmin, maxの２つの値をセットにした範囲を指定する型\n        const prop = {\n            numPanA: emitters[0].rate.numPan.a,\n            numPanB: emitters[0].rate.numPan.b,\n            timePan: emitters[0].rate.timePan.a,\n        };\n        const changed = (val) => {\n            emitters.forEach((emt) => {\n                emt.rate.numPan.a = prop.numPanA;\n                emt.rate.numPan.b = prop.numPanB;\n                emt.rate.timePan.a = prop.timePan;\n            });\n        };\n        /**\n         * 1回で射出されるパーティクルの数, min, max\n         */\n        const folder = gui.addFolder(\"Rate\");\n        folder.add(prop, \"numPanA\", 0.0, 30.0).step(1).onChange(changed);\n        folder.add(prop, \"numPanB\", 0.0, 30.0).step(1).onChange(changed);\n        folder.add(prop, \"timePan\", 0.01, 0.5).step(0.01).onChange(changed);\n        folder.open();\n    }\n    /**\n     * 射出した粒子の到達点および射出角度を制御するパネル\n     * @param gui\n     */\n    static initRange(gui, ranges) {\n        const prop = {\n            radiusMin: ranges[0].radiusPan.a,\n            radiusMax: ranges[0].radiusPan.b,\n            tha: ranges[0].tha,\n        };\n        const changed = (val) => {\n            ranges.forEach((range) => {\n                range.radiusPan.a = prop.radiusMin;\n                range.radiusPan.b = prop.radiusMax;\n                range.tha = prop.tha;\n            });\n        };\n        const folder = gui.addFolder(\"RadialVelocity\");\n        folder.add(prop, \"radiusMin\", 0.0, 45.0).step(0.1).onChange(changed);\n        folder.add(prop, \"radiusMax\", 0.0, 45.0).step(0.1).onChange(changed);\n        folder.add(prop, \"tha\", 0.0, Math.PI).step(0.1).onChange(changed);\n        folder.open();\n    }\n    /**\n     * Spriteのサイズを制御するパネル\n     * @param gui\n     */\n    static initRadius(gui, radiusInitializers) {\n        const prop = {\n            min: radiusInitializers[0].radius.a,\n            max: radiusInitializers[0].radius.b,\n        };\n        const changed = (val) => {\n            radiusInitializers.forEach((rad) => {\n                rad.radius.a = prop.min;\n                rad.radius.b = prop.max;\n            });\n        };\n        const folder = gui.addFolder(\"Initial Sprite Size\");\n        folder.add(prop, \"min\", 0.0, 45.0).step(0.1).onChange(changed);\n        folder.add(prop, \"max\", 0.0, 45.0).step(0.1).onChange(changed);\n        folder.open();\n    }\n    /**\n     * Spriteの寿命を制御するパネル\n     * @param gui\n     */\n    static initLife(gui, lifeInitializers) {\n        //spanクラスはmin, maxの２つの値をセットにした範囲を指定する型\n        const span = lifeInitializers[0].lifePan;\n        const prop = {\n            min: span.a,\n            max: span.b,\n        };\n        const changed = (val) => {\n            lifeInitializers.forEach((life) => {\n                life.lifePan.a = prop.min;\n                life.lifePan.b = prop.max;\n            });\n        };\n        const folder = gui.addFolder(\"Life\");\n        folder.add(prop, \"min\", 0.0, 12.0).step(0.1).onChange(changed);\n        folder.add(prop, \"max\", 0.0, 24.0).step(0.1).onChange(changed);\n        folder.open();\n    }\n    static initAlpha(gui, alphaBehaviours) {\n        const prop = {\n            start: alphaBehaviours[0].alphaA.a,\n            end: alphaBehaviours[0].alphaB.a,\n        };\n        const changed = (val) => {\n            alphaBehaviours.forEach((alpha) => {\n                alpha.alphaA.a = prop.start;\n                alpha.alphaA.b = prop.start;\n                alpha.alphaB.a = prop.end;\n                alpha.alphaB.b = prop.end;\n            });\n        };\n        const folder = gui.addFolder(\"Alpha\");\n        folder.add(prop, \"start\", 0.0, 1.0).step(0.1).onChange(changed);\n        folder.add(prop, \"end\", 0.0, 1.0).step(0.1).onChange(changed);\n        folder.open();\n    }\n    static initScale(gui, scaleBehaviours) {\n        const prop = {\n            start: scaleBehaviours[0].scaleA.a,\n            end: scaleBehaviours[0].scaleB.a,\n        };\n        const changed = (val) => {\n            scaleBehaviours.forEach((scale) => {\n                scale.scaleA.a = prop.start;\n                scale.scaleA.b = prop.start;\n                scale.scaleB.a = prop.end;\n                scale.scaleB.b = prop.end;\n            });\n        };\n        const folder = gui.addFolder(\"Scale\");\n        folder.add(prop, \"start\", 0.0, 3.0).step(0.1).onChange(changed);\n        folder.add(prop, \"end\", 0.0, 3.0).step(0.1).onChange(changed);\n        folder.open();\n    }\n    static initColor(gui, colors) {\n        const prop = {\n            start: colors[0].colorA.colors[0].getHex(),\n            end: colors[0].colorB.colors[0].getHex(),\n        };\n        const changed = () => {\n            colors.forEach((color) => {\n                color.colorA.colors[0].setHex(prop.start);\n                color.colorB.colors[0].setHex(prop.end);\n            });\n        };\n        const folder = gui.addFolder(\"Color\");\n        folder.addColor(prop, \"start\").onChange(changed);\n        folder.addColor(prop, \"end\").onChange(changed);\n        folder.open();\n    }\n}\n\n\n//# sourceURL=webpack://threejs-lab/./src/NebulaGUI.ts?");

/***/ }),

/***/ "./src/StudyNebulaSky.ts":
/*!*******************************!*\
  !*** ./src/StudyNebulaSky.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Study\": () => (/* binding */ Study)\n/* harmony export */ });\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_nebula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three-nebula */ \"./node_modules/three-nebula/build/esm/index.js\");\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Common */ \"./src/Common.ts\");\n/* harmony import */ var _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NebulaGUI */ \"./src/NebulaGUI.ts\");\n\n\n\n\n\n\n/**\n * パーティクルエンジンによる雲表現の習作\n *\n * SkyBox textures : Three.js\n * https://github.com/mrdoob/three.js/tree/master/examples/textures/cube/skybox\n *\n * Cloud textures : textures4photoshop\n * http://www.textures4photoshop.com/tex/clouds-and-sky/free-clouds-sky-overlay-png-for-photoshop.aspx\n */\nclass Study {\n    constructor() {\n        const scene = _Common__WEBPACK_IMPORTED_MODULE_3__.Common.initScene();\n        this.initSkyBox(scene);\n        _Common__WEBPACK_IMPORTED_MODULE_3__.Common.initLight(scene);\n        scene.fog = new three__WEBPACK_IMPORTED_MODULE_1__.Fog(0x998877, 60, 3000);\n        const camera = _Common__WEBPACK_IMPORTED_MODULE_3__.Common.initCamera(scene, Study.W, Study.H, 1, 3000);\n        const renderer = _Common__WEBPACK_IMPORTED_MODULE_3__.Common.initRenderer(Study.W, Study.H);\n        const control = _Common__WEBPACK_IMPORTED_MODULE_3__.Common.initControl(camera, renderer);\n        _Common__WEBPACK_IMPORTED_MODULE_3__.Common.initHelper(scene);\n        this.initObject(scene);\n        _Common__WEBPACK_IMPORTED_MODULE_3__.Common.render(control, renderer, scene, camera, () => {\n            //this.system.update();\n        });\n        this.initGUI();\n    }\n    initSkyBox(scene) {\n        const cubeLoader = new three__WEBPACK_IMPORTED_MODULE_1__.CubeTextureLoader();\n        cubeLoader.setPath(\"./textures/skybox/\");\n        const cubeTexture = cubeLoader.load([\n            \"px.jpg\",\n            \"nx.jpg\",\n            \"py.jpg\",\n            \"ny.jpg\",\n            \"pz.jpg\",\n            \"nz.jpg\",\n        ]);\n        scene.background = cubeTexture;\n    }\n    initObject(scene) {\n        this.system = new three_nebula__WEBPACK_IMPORTED_MODULE_2__.default();\n        this.emitter = new three_nebula__WEBPACK_IMPORTED_MODULE_2__.Emitter();\n        const renderer = new three_nebula__WEBPACK_IMPORTED_MODULE_2__.SpriteRenderer(scene, three__WEBPACK_IMPORTED_MODULE_1__);\n        this.range = new three_nebula__WEBPACK_IMPORTED_MODULE_2__.RadialVelocity(8, new three_nebula__WEBPACK_IMPORTED_MODULE_2__.Vector3D(0, 1, 0), 75);\n        this.radius = new three_nebula__WEBPACK_IMPORTED_MODULE_2__.Radius(30, 40);\n        this.life = new three_nebula__WEBPACK_IMPORTED_MODULE_2__.Life(20);\n        const loader = new three__WEBPACK_IMPORTED_MODULE_1__.TextureLoader();\n        const urlArray = [\n            \"./textures/cloud/cloud01.png\",\n            \"./textures/cloud/cloud02.png\",\n            \"./textures/cloud/cloud03.png\",\n            \"./textures/cloud/cloud04.png\",\n        ];\n        const sprites = urlArray.map((url) => {\n            return new three__WEBPACK_IMPORTED_MODULE_1__.Sprite(new three__WEBPACK_IMPORTED_MODULE_1__.SpriteMaterial({\n                map: loader.load(url),\n                transparent: true,\n                fog: scene.fog !== undefined,\n            }));\n        });\n        const body = new three_nebula__WEBPACK_IMPORTED_MODULE_2__.Body(sprites);\n        this.alpha = new three_nebula__WEBPACK_IMPORTED_MODULE_2__.Alpha(0.75, 0.0);\n        this.scale = new three_nebula__WEBPACK_IMPORTED_MODULE_2__.Scale(1.0, 2.0);\n        this.color = new three_nebula__WEBPACK_IMPORTED_MODULE_2__.Color(new three__WEBPACK_IMPORTED_MODULE_1__.Color(0xbbb4aa), new three__WEBPACK_IMPORTED_MODULE_1__.Color(0xccc4bb));\n        this.emitter\n            .setRate(new three_nebula__WEBPACK_IMPORTED_MODULE_2__.Rate(new three_nebula__WEBPACK_IMPORTED_MODULE_2__.Span(1, 2), 0.33))\n            .setInitializers([\n            new three_nebula__WEBPACK_IMPORTED_MODULE_2__.Position(new three_nebula__WEBPACK_IMPORTED_MODULE_2__.SphereZone(0, 0, 0, 16.0)),\n            new three_nebula__WEBPACK_IMPORTED_MODULE_2__.Mass(1),\n            this.radius,\n            this.life,\n            this.range,\n            body,\n        ])\n            .setBehaviours([this.alpha, this.scale, this.color])\n            .emit();\n        this.emitter.position.y = -16.0;\n        this.system.addEmitter(this.emitter).addRenderer(renderer);\n        //nフレーム分先行してパーティクルの生成を行う。\n        for (let i = 0; i < 300; i++) {\n            this.emitter.update(0.033);\n        }\n    }\n    initBody() { }\n    initGUI() {\n        const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_0__.GUI();\n        const folder = gui.addFolder(\"Emitter\");\n        folder.open();\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__.NebulaGUI.initEmitterPosition(folder, [this.emitter]);\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__.NebulaGUI.initEmitterRate(folder, [this.emitter]);\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__.NebulaGUI.initRange(folder, [this.range]);\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__.NebulaGUI.initRadius(folder, [this.radius]);\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__.NebulaGUI.initLife(folder, [this.life]);\n        const folderBehaviour = gui.addFolder(\"Behaviour\");\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__.NebulaGUI.initAlpha(folderBehaviour, [this.alpha]);\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__.NebulaGUI.initScale(folderBehaviour, [this.scale]);\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__.NebulaGUI.initColor(folderBehaviour, [this.color]);\n        folderBehaviour.open();\n    }\n}\nStudy.W = 640;\nStudy.H = 480;\nwindow.onload = () => {\n    const study = new Study();\n};\n\n\n//# sourceURL=webpack://threejs-lab/./src/StudyNebulaSky.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
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
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"StudyNebulaSky": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/StudyNebulaSky.ts","vendor"]
/******/ 		];
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
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkthreejs_lab"] = self["webpackChunkthreejs_lab"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;