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

/***/ "./src/StudyDepthTestAndDepthWrite.ts":
/*!********************************************!*\
  !*** ./src/StudyDepthTestAndDepthWrite.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StudyDepthTestAndDepthWrite\": () => (/* binding */ StudyDepthTestAndDepthWrite)\n/* harmony export */ });\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Common */ \"./src/Common.ts\");\n\n\n\nclass StudyDepthTestAndDepthWrite {\n    constructor() {\n        this.scene = _Common__WEBPACK_IMPORTED_MODULE_2__.Common.initScene();\n        _Common__WEBPACK_IMPORTED_MODULE_2__.Common.initLight(this.scene);\n        const camera = _Common__WEBPACK_IMPORTED_MODULE_2__.Common.initCamera(this.scene, StudyDepthTestAndDepthWrite.W, StudyDepthTestAndDepthWrite.H);\n        const renderer = _Common__WEBPACK_IMPORTED_MODULE_2__.Common.initRenderer(StudyDepthTestAndDepthWrite.W, StudyDepthTestAndDepthWrite.H);\n        const control = _Common__WEBPACK_IMPORTED_MODULE_2__.Common.initControl(camera, renderer);\n        _Common__WEBPACK_IMPORTED_MODULE_2__.Common.initHelper(this.scene);\n        this.initObject(this.scene);\n        _Common__WEBPACK_IMPORTED_MODULE_2__.Common.render(control, renderer, this.scene, camera);\n        this.initGUI();\n    }\n    initObject(scene) {\n        const spot = new three__WEBPACK_IMPORTED_MODULE_1__.PointLight(0xffffff, 3, 0, 2);\n        spot.position.set(10, 20, 30);\n        scene.add(spot);\n        const helper = new three__WEBPACK_IMPORTED_MODULE_1__.PointLightHelper(spot);\n        scene.add(helper);\n        this.swapSphere(false);\n        this.switchSatelliteShift(false);\n    }\n    /**\n     * 中央の球体2つのシーンへの登録順のみを入れ替える。\n     * @param isSwap\n     */\n    swapSphere(isSwap) {\n        if (this.inner) {\n            this.inner.parent.remove(this.inner);\n            this.outer.parent.remove(this.outer);\n            this.inner = null;\n            this.outer = null;\n        }\n        const self = StudyDepthTestAndDepthWrite;\n        if (!isSwap) {\n            this.outer = self.initSphere(15, 0xff00ff, this.scene);\n            this.inner = self.initSphere(10, 0xffff00, this.scene);\n        }\n        else {\n            this.inner = self.initSphere(10, 0xffff00, this.scene);\n            this.outer = self.initSphere(15, 0xff00ff, this.scene);\n        }\n    }\n    static initSphere(r, color, scene) {\n        const geo = new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(r, 64, 64);\n        const mat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({\n            fog: scene.fog !== undefined,\n            transparent: true,\n            opacity: 0.5,\n            color: new three__WEBPACK_IMPORTED_MODULE_1__.Color(color),\n        });\n        const mesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(geo, mat);\n        scene.add(mesh);\n        return mesh;\n    }\n    switchDepthTest(val) {\n        const spheres = [this.outer, this.inner, this.satellite];\n        spheres.forEach((sphere) => {\n            sphere.material.depthTest = val;\n        });\n    }\n    switchDepthWrite(val) {\n        const spheres = [this.outer, this.inner, this.satellite];\n        spheres.forEach((sphere) => {\n            sphere.material.depthWrite = val;\n        });\n    }\n    switchSatelliteShift(isMeshPosition) {\n        if (this.satellite) {\n            this.satellite.parent.remove(this.satellite);\n            this.satellite = null;\n        }\n        const self = StudyDepthTestAndDepthWrite;\n        this.satellite = self.initSphere(5, 0xffffff, this.scene);\n        const satelliteX = 30;\n        if (isMeshPosition) {\n            this.satellite.position.x = satelliteX;\n        }\n        else {\n            this.satellite.geometry.translate(satelliteX, 0, 0);\n        }\n    }\n    initGUI() {\n        const prop = {\n            alpha: 0.5,\n            satelliteShiftIsMeshPosition: false,\n            depthTest: true,\n            depthWrite: true,\n        };\n        const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_0__.GUI();\n        //外部ボールがメッシュポジションか、ジオメトリシフトかで結果が変わる。\n        const meshFolder = gui.addFolder(\"Mesh\");\n        meshFolder.add(prop, \"alpha\", 0.0, 1.0).onChange((val) => {\n            const spheres = [this.outer, this.inner, this.satellite];\n            spheres.forEach((sphere) => {\n                sphere.material.opacity = val;\n            });\n        });\n        meshFolder.open();\n        const satelliteFolder = gui.addFolder(\"satellite\");\n        satelliteFolder\n            .add(prop, \"satelliteShiftIsMeshPosition\")\n            .onChange((val) => {\n            this.switchSatelliteShift(val);\n        });\n        satelliteFolder.open();\n        const depthFolder = gui.addFolder(\"depth\");\n        depthFolder.add(prop, \"depthTest\").onChange((val) => {\n            this.switchDepthTest(val);\n        });\n        depthFolder.add(prop, \"depthWrite\").onChange((val) => {\n            this.switchDepthWrite(val);\n        });\n        depthFolder.open();\n        const innerFolder = gui.addFolder(\"Inner Sphere\");\n        const innerParam = {\n            x: 0.0,\n        };\n        innerFolder.add(innerParam, \"x\", 0, 20).onChange((val) => {\n            this.inner.position.x = val;\n        });\n        innerFolder.open();\n        const renderOrderFolder = gui.addFolder(\"Render Order\");\n        const orders = {\n            inner: 0.0,\n            outer: 0.0,\n            satellite: 0.0,\n        };\n        const min = -3;\n        const max = 3;\n        const step = 1;\n        renderOrderFolder\n            .add(orders, \"inner\", min, max)\n            .step(step)\n            .onChange((val) => {\n            this.inner.renderOrder = val;\n        });\n        renderOrderFolder\n            .add(orders, \"outer\", min, max)\n            .step(step)\n            .onChange((val) => {\n            this.outer.renderOrder = val;\n        });\n        renderOrderFolder\n            .add(orders, \"satellite\", min, max)\n            .step(step)\n            .onChange((val) => {\n            this.satellite.renderOrder = val;\n        });\n        renderOrderFolder.open();\n        const sceneFolder = gui.addFolder(\"Scene\");\n        const sceneParam = {\n            SwapSphere: false,\n        };\n        sceneFolder.add(sceneParam, \"SwapSphere\").onChange((val) => {\n            this.swapSphere(val);\n            this.inner.position.x = innerParam.x;\n        });\n        sceneFolder.open();\n    }\n}\nStudyDepthTestAndDepthWrite.W = 640;\nStudyDepthTestAndDepthWrite.H = 480;\nwindow.onload = () => {\n    const study = new StudyDepthTestAndDepthWrite();\n};\n\n\n//# sourceURL=webpack://threejs-lab/./src/StudyDepthTestAndDepthWrite.ts?");

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
/******/ 			"StudyDepthTestAndDepthWrite": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/StudyDepthTestAndDepthWrite.ts","vendor"]
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