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
/******/ 		"StudyDepthTestAndDepthWrite": 0
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
/******/ 	deferredModules.push(["./src/ts/StudyDepthTestAndDepthWrite.ts","vendor"]);
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

/***/ "./src/ts/StudyDepthTestAndDepthWrite.ts":
/*!***********************************************!*\
  !*** ./src/ts/StudyDepthTestAndDepthWrite.ts ***!
  \***********************************************/
/*! exports provided: StudyDepthTestAndDepthWrite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StudyDepthTestAndDepthWrite\", function() { return StudyDepthTestAndDepthWrite; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var ts_Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts/Common */ \"./src/ts/Common.ts\");\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n\n\n\nclass StudyDepthTestAndDepthWrite {\n    constructor() {\n        this.scene = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initScene();\n        ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initLight(this.scene);\n        const camera = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initCamera(this.scene, StudyDepthTestAndDepthWrite.W, StudyDepthTestAndDepthWrite.H);\n        const renderer = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initRenderer(StudyDepthTestAndDepthWrite.W, StudyDepthTestAndDepthWrite.H);\n        const control = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initControl(camera, renderer);\n        ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initHelper(this.scene);\n        this.initObject(this.scene);\n        ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].render(control, renderer, this.scene, camera);\n        this.initGUI();\n    }\n    initObject(scene) {\n        const spot = new three__WEBPACK_IMPORTED_MODULE_0__[\"PointLight\"](0xffffff, 3, 0, 2);\n        spot.position.set(10, 20, 30);\n        scene.add(spot);\n        const helper = new three__WEBPACK_IMPORTED_MODULE_0__[\"PointLightHelper\"](spot);\n        scene.add(helper);\n        this.swapSphere(false);\n        this.switchSatelliteShift(false);\n    }\n    /**\n     * 中央の球体2つのシーンへの登録順のみを入れ替える。\n     * @param isSwap\n     */\n    swapSphere(isSwap) {\n        if (this.inner) {\n            this.inner.parent.remove(this.inner);\n            this.outer.parent.remove(this.outer);\n            this.inner = null;\n            this.outer = null;\n        }\n        const self = StudyDepthTestAndDepthWrite;\n        if (!isSwap) {\n            this.outer = self.initSphere(15, 0xff00ff, this.scene);\n            this.inner = self.initSphere(10, 0xffff00, this.scene);\n        }\n        else {\n            this.inner = self.initSphere(10, 0xffff00, this.scene);\n            this.outer = self.initSphere(15, 0xff00ff, this.scene);\n        }\n    }\n    static initSphere(r, color, scene) {\n        const geo = new three__WEBPACK_IMPORTED_MODULE_0__[\"SphereGeometry\"](r, 64, 64);\n        const mat = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshPhongMaterial\"]({\n            fog: scene.fog !== undefined,\n            transparent: true,\n            opacity: 0.5,\n            color: new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](color)\n        });\n        const mesh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geo, mat);\n        scene.add(mesh);\n        return mesh;\n    }\n    switchDepthTest(val) {\n        const spheres = [this.outer, this.inner, this.satellite];\n        spheres.forEach(sphere => {\n            sphere.material.depthTest = val;\n        });\n    }\n    switchDepthWrite(val) {\n        const spheres = [this.outer, this.inner, this.satellite];\n        spheres.forEach(sphere => {\n            sphere.material.depthWrite = val;\n        });\n    }\n    switchSatelliteShift(isMeshPosition) {\n        if (this.satellite) {\n            this.satellite.parent.remove(this.satellite);\n            this.satellite = null;\n        }\n        const self = StudyDepthTestAndDepthWrite;\n        this.satellite = self.initSphere(5, 0xffffff, this.scene);\n        const satelliteX = 30;\n        if (isMeshPosition) {\n            this.satellite.position.x = satelliteX;\n        }\n        else {\n            this.satellite.geometry.translate(satelliteX, 0, 0);\n        }\n    }\n    initGUI() {\n        const prop = {\n            alpha: 0.5,\n            satelliteShiftIsMeshPosition: false,\n            depthTest: true,\n            depthWrite: true\n        };\n        const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_2__[\"GUI\"]();\n        //外部ボールがメッシュポジションか、ジオメトリシフトかで結果が変わる。\n        const meshFolder = gui.addFolder(\"Mesh\");\n        meshFolder.add(prop, \"alpha\", 0.0, 1.0).onChange(val => {\n            const spheres = [this.outer, this.inner, this.satellite];\n            spheres.forEach(sphere => {\n                sphere.material.opacity = val;\n            });\n        });\n        meshFolder.open();\n        const satelliteFolder = gui.addFolder(\"satellite\");\n        satelliteFolder.add(prop, \"satelliteShiftIsMeshPosition\").onChange(val => {\n            this.switchSatelliteShift(val);\n        });\n        satelliteFolder.open();\n        const depthFolder = gui.addFolder(\"depth\");\n        depthFolder.add(prop, \"depthTest\").onChange(val => {\n            this.switchDepthTest(val);\n        });\n        depthFolder.add(prop, \"depthWrite\").onChange(val => {\n            this.switchDepthWrite(val);\n        });\n        depthFolder.open();\n        const innerFolder = gui.addFolder(\"Inner Sphere\");\n        const innerParam = {\n            x: 0.0\n        };\n        innerFolder.add(innerParam, \"x\", 0, 20).onChange(val => {\n            this.inner.position.x = val;\n        });\n        innerFolder.open();\n        const renderOrderFolder = gui.addFolder(\"Render Order\");\n        const orders = {\n            inner: 0.0,\n            outer: 0.0,\n            satellite: 0.0\n        };\n        const min = -3;\n        const max = 3;\n        const step = 1;\n        renderOrderFolder\n            .add(orders, \"inner\", min, max)\n            .step(step)\n            .onChange(val => {\n            this.inner.renderOrder = val;\n        });\n        renderOrderFolder\n            .add(orders, \"outer\", min, max)\n            .step(step)\n            .onChange(val => {\n            this.outer.renderOrder = val;\n        });\n        renderOrderFolder\n            .add(orders, \"satellite\", min, max)\n            .step(step)\n            .onChange(val => {\n            this.satellite.renderOrder = val;\n        });\n        renderOrderFolder.open();\n        const sceneFolder = gui.addFolder(\"Scene\");\n        const sceneParam = {\n            SwapSphere: false\n        };\n        sceneFolder.add(sceneParam, \"SwapSphere\").onChange(val => {\n            this.swapSphere(val);\n            this.inner.position.x = innerParam.x;\n        });\n        sceneFolder.open();\n    }\n}\nStudyDepthTestAndDepthWrite.W = 640;\nStudyDepthTestAndDepthWrite.H = 480;\nwindow.onload = () => {\n    const study = new StudyDepthTestAndDepthWrite();\n};\n\n\n//# sourceURL=webpack:///./src/ts/StudyDepthTestAndDepthWrite.ts?");

/***/ })

/******/ });