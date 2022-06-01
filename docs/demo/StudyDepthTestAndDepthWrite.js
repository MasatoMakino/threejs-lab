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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Common\": () => (/* binding */ Common)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\n\nclass Common {\n    static initScene() {\n        const scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();\n        return scene;\n    }\n    static initLight(scene) {\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_1__.AmbientLight(0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    }\n    static initCamera(scene, W, H, near = 1, far = 400) {\n        const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(45, W / H, near, far);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    }\n    static initControl(camera, render) {\n        let domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        const control = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(camera, domElement);\n        control.update();\n        return control;\n    }\n    static initRenderer(W, H, color = 0x000000, id = \"webgl-canvas\", antialias = true) {\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_1__.Color(color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        return renderer;\n    }\n    static initHelper(scene) {\n        const axesHelper = new three__WEBPACK_IMPORTED_MODULE_1__.AxesHelper(30);\n        scene.add(axesHelper);\n    }\n    static render(control, renderer, scene, camera, onBeforeRender) {\n        const rendering = () => {\n            if (onBeforeRender) {\n                onBeforeRender();\n            }\n            control.update();\n            renderer.render(scene, camera);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n    static addRendererInfo() {\n        const info = document.createElement(\"div\");\n        document.body.appendChild(info);\n        return info;\n    }\n    static updateRendererInfo(div, info) {\n        div.innerText = JSON.stringify(info);\n    }\n}\n\n\n//# sourceURL=webpack://threejs-lab/./src/Common.ts?");

/***/ }),

/***/ "./src/StudyDepthTestAndDepthWrite.ts":
/*!********************************************!*\
  !*** ./src/StudyDepthTestAndDepthWrite.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StudyDepthTestAndDepthWrite\": () => (/* binding */ StudyDepthTestAndDepthWrite)\n/* harmony export */ });\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Common */ \"./src/Common.ts\");\n\n\n\nclass StudyDepthTestAndDepthWrite {\n    constructor() {\n        this.scene = _Common__WEBPACK_IMPORTED_MODULE_1__.Common.initScene();\n        _Common__WEBPACK_IMPORTED_MODULE_1__.Common.initLight(this.scene);\n        const camera = _Common__WEBPACK_IMPORTED_MODULE_1__.Common.initCamera(this.scene, StudyDepthTestAndDepthWrite.W, StudyDepthTestAndDepthWrite.H);\n        const renderer = _Common__WEBPACK_IMPORTED_MODULE_1__.Common.initRenderer(StudyDepthTestAndDepthWrite.W, StudyDepthTestAndDepthWrite.H);\n        const control = _Common__WEBPACK_IMPORTED_MODULE_1__.Common.initControl(camera, renderer);\n        _Common__WEBPACK_IMPORTED_MODULE_1__.Common.initHelper(this.scene);\n        this.initObject(this.scene);\n        _Common__WEBPACK_IMPORTED_MODULE_1__.Common.render(control, renderer, this.scene, camera);\n        this.initGUI();\n    }\n    initObject(scene) {\n        const spot = new three__WEBPACK_IMPORTED_MODULE_2__.PointLight(0xffffff, 3, 0, 2);\n        spot.position.set(10, 20, 30);\n        scene.add(spot);\n        const helper = new three__WEBPACK_IMPORTED_MODULE_2__.PointLightHelper(spot);\n        scene.add(helper);\n        this.swapSphere(false);\n        this.switchSatelliteShift(false);\n    }\n    /**\n     * 中央の球体2つのシーンへの登録順のみを入れ替える。\n     * @param isSwap\n     */\n    swapSphere(isSwap) {\n        if (this.inner) {\n            this.inner.parent.remove(this.inner);\n            this.outer.parent.remove(this.outer);\n            this.inner = null;\n            this.outer = null;\n        }\n        const self = StudyDepthTestAndDepthWrite;\n        if (!isSwap) {\n            this.outer = self.initSphere(15, 0xff00ff, this.scene);\n            this.inner = self.initSphere(10, 0xffff00, this.scene);\n        }\n        else {\n            this.inner = self.initSphere(10, 0xffff00, this.scene);\n            this.outer = self.initSphere(15, 0xff00ff, this.scene);\n        }\n    }\n    static initSphere(r, color, scene) {\n        const geo = new three__WEBPACK_IMPORTED_MODULE_2__.SphereGeometry(r, 64, 64);\n        const mat = new three__WEBPACK_IMPORTED_MODULE_2__.MeshPhongMaterial({\n            fog: scene.fog !== undefined,\n            transparent: true,\n            opacity: 0.5,\n            color: new three__WEBPACK_IMPORTED_MODULE_2__.Color(color),\n        });\n        const mesh = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geo, mat);\n        scene.add(mesh);\n        return mesh;\n    }\n    switchDepthTest(val) {\n        const spheres = [this.outer, this.inner, this.satellite];\n        spheres.forEach((sphere) => {\n            sphere.material.depthTest = val;\n        });\n    }\n    switchDepthWrite(val) {\n        const spheres = [this.outer, this.inner, this.satellite];\n        spheres.forEach((sphere) => {\n            sphere.material.depthWrite = val;\n        });\n    }\n    switchSatelliteShift(isMeshPosition) {\n        if (this.satellite) {\n            this.satellite.parent.remove(this.satellite);\n            this.satellite = null;\n        }\n        const self = StudyDepthTestAndDepthWrite;\n        this.satellite = self.initSphere(5, 0xffffff, this.scene);\n        const satelliteX = 30;\n        if (isMeshPosition) {\n            this.satellite.position.x = satelliteX;\n        }\n        else {\n            this.satellite.geometry.translate(satelliteX, 0, 0);\n        }\n    }\n    initGUI() {\n        const prop = {\n            alpha: 0.5,\n            satelliteShiftIsMeshPosition: false,\n            depthTest: true,\n            depthWrite: true,\n        };\n        const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_0__.GUI();\n        //外部ボールがメッシュポジションか、ジオメトリシフトかで結果が変わる。\n        const meshFolder = gui.addFolder(\"Mesh\");\n        meshFolder.add(prop, \"alpha\", 0.0, 1.0).onChange((val) => {\n            const spheres = [this.outer, this.inner, this.satellite];\n            spheres.forEach((sphere) => {\n                sphere.material.opacity = val;\n            });\n        });\n        meshFolder.open();\n        const satelliteFolder = gui.addFolder(\"satellite\");\n        satelliteFolder\n            .add(prop, \"satelliteShiftIsMeshPosition\")\n            .onChange((val) => {\n            this.switchSatelliteShift(val);\n        });\n        satelliteFolder.open();\n        const depthFolder = gui.addFolder(\"depth\");\n        depthFolder.add(prop, \"depthTest\").onChange((val) => {\n            this.switchDepthTest(val);\n        });\n        depthFolder.add(prop, \"depthWrite\").onChange((val) => {\n            this.switchDepthWrite(val);\n        });\n        depthFolder.open();\n        const innerFolder = gui.addFolder(\"Inner Sphere\");\n        const innerParam = {\n            x: 0.0,\n        };\n        innerFolder.add(innerParam, \"x\", 0, 20).onChange((val) => {\n            this.inner.position.x = val;\n        });\n        innerFolder.open();\n        const renderOrderFolder = gui.addFolder(\"Render Order\");\n        const orders = {\n            inner: 0.0,\n            outer: 0.0,\n            satellite: 0.0,\n        };\n        const min = -3;\n        const max = 3;\n        const step = 1;\n        renderOrderFolder\n            .add(orders, \"inner\", min, max)\n            .step(step)\n            .onChange((val) => {\n            this.inner.renderOrder = val;\n        });\n        renderOrderFolder\n            .add(orders, \"outer\", min, max)\n            .step(step)\n            .onChange((val) => {\n            this.outer.renderOrder = val;\n        });\n        renderOrderFolder\n            .add(orders, \"satellite\", min, max)\n            .step(step)\n            .onChange((val) => {\n            this.satellite.renderOrder = val;\n        });\n        renderOrderFolder.open();\n        const sceneFolder = gui.addFolder(\"Scene\");\n        const sceneParam = {\n            SwapSphere: false,\n        };\n        sceneFolder.add(sceneParam, \"SwapSphere\").onChange((val) => {\n            this.swapSphere(val);\n            this.inner.position.x = innerParam.x;\n        });\n        sceneFolder.open();\n    }\n}\nStudyDepthTestAndDepthWrite.W = 640;\nStudyDepthTestAndDepthWrite.H = 480;\nwindow.onload = () => {\n    const study = new StudyDepthTestAndDepthWrite();\n};\n\n\n//# sourceURL=webpack://threejs-lab/./src/StudyDepthTestAndDepthWrite.ts?");

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
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
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
/******/ 			"StudyDepthTestAndDepthWrite": 0
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
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/StudyDepthTestAndDepthWrite.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;