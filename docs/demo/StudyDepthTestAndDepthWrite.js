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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/ 	__webpack_require__.p = "";
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
/******/ 	deferredModules.push(["./src/StudyDepthTestAndDepthWrite.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Common.ts":
/*!***********************!*\
  !*** ./src/Common.ts ***!
  \***********************/
/*! exports provided: Common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Common\", function() { return Common; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\n\nvar Common = /** @class */ (function () {\n    function Common() {\n    }\n    Common.initScene = function () {\n        var scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n        return scene;\n    };\n    Common.initLight = function (scene) {\n        var ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__[\"AmbientLight\"](0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    };\n    Common.initCamera = function (scene, W, H, near, far) {\n        if (near === void 0) { near = 1; }\n        if (far === void 0) { far = 400; }\n        var camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](45, W / H, near, far);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    };\n    Common.initControl = function (camera, render) {\n        var domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        var control = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__[\"OrbitControls\"](camera, domElement);\n        control.update();\n        return control;\n    };\n    Common.initRenderer = function (W, H, color, id, antialias) {\n        if (color === void 0) { color = 0x000000; }\n        if (id === void 0) { id = \"webgl-canvas\"; }\n        if (antialias === void 0) { antialias = true; }\n        var renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        return renderer;\n    };\n    Common.initHelper = function (scene) {\n        var axesHelper = new three__WEBPACK_IMPORTED_MODULE_0__[\"AxesHelper\"](30);\n        scene.add(axesHelper);\n    };\n    Common.render = function (control, renderer, scene, camera, onBeforeRender) {\n        var rendering = function () {\n            if (onBeforeRender) {\n                onBeforeRender();\n            }\n            control.update();\n            renderer.render(scene, camera);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    };\n    return Common;\n}());\n\n\n\n//# sourceURL=webpack:///./src/Common.ts?");

/***/ }),

/***/ "./src/StudyDepthTestAndDepthWrite.ts":
/*!********************************************!*\
  !*** ./src/StudyDepthTestAndDepthWrite.ts ***!
  \********************************************/
/*! exports provided: StudyDepthTestAndDepthWrite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StudyDepthTestAndDepthWrite\", function() { return StudyDepthTestAndDepthWrite; });\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Common */ \"./src/Common.ts\");\n\n\n\nvar StudyDepthTestAndDepthWrite = /** @class */ (function () {\n    function StudyDepthTestAndDepthWrite() {\n        this.scene = _Common__WEBPACK_IMPORTED_MODULE_2__[\"Common\"].initScene();\n        _Common__WEBPACK_IMPORTED_MODULE_2__[\"Common\"].initLight(this.scene);\n        var camera = _Common__WEBPACK_IMPORTED_MODULE_2__[\"Common\"].initCamera(this.scene, StudyDepthTestAndDepthWrite.W, StudyDepthTestAndDepthWrite.H);\n        var renderer = _Common__WEBPACK_IMPORTED_MODULE_2__[\"Common\"].initRenderer(StudyDepthTestAndDepthWrite.W, StudyDepthTestAndDepthWrite.H);\n        var control = _Common__WEBPACK_IMPORTED_MODULE_2__[\"Common\"].initControl(camera, renderer);\n        _Common__WEBPACK_IMPORTED_MODULE_2__[\"Common\"].initHelper(this.scene);\n        this.initObject(this.scene);\n        _Common__WEBPACK_IMPORTED_MODULE_2__[\"Common\"].render(control, renderer, this.scene, camera);\n        this.initGUI();\n    }\n    StudyDepthTestAndDepthWrite.prototype.initObject = function (scene) {\n        var spot = new three__WEBPACK_IMPORTED_MODULE_1__[\"PointLight\"](0xffffff, 3, 0, 2);\n        spot.position.set(10, 20, 30);\n        scene.add(spot);\n        var helper = new three__WEBPACK_IMPORTED_MODULE_1__[\"PointLightHelper\"](spot);\n        scene.add(helper);\n        this.swapSphere(false);\n        this.switchSatelliteShift(false);\n    };\n    /**\n     * 中央の球体2つのシーンへの登録順のみを入れ替える。\n     * @param isSwap\n     */\n    StudyDepthTestAndDepthWrite.prototype.swapSphere = function (isSwap) {\n        if (this.inner) {\n            this.inner.parent.remove(this.inner);\n            this.outer.parent.remove(this.outer);\n            this.inner = null;\n            this.outer = null;\n        }\n        var self = StudyDepthTestAndDepthWrite;\n        if (!isSwap) {\n            this.outer = self.initSphere(15, 0xff00ff, this.scene);\n            this.inner = self.initSphere(10, 0xffff00, this.scene);\n        }\n        else {\n            this.inner = self.initSphere(10, 0xffff00, this.scene);\n            this.outer = self.initSphere(15, 0xff00ff, this.scene);\n        }\n    };\n    StudyDepthTestAndDepthWrite.initSphere = function (r, color, scene) {\n        var geo = new three__WEBPACK_IMPORTED_MODULE_1__[\"SphereGeometry\"](r, 64, 64);\n        var mat = new three__WEBPACK_IMPORTED_MODULE_1__[\"MeshPhongMaterial\"]({\n            fog: scene.fog !== undefined,\n            transparent: true,\n            opacity: 0.5,\n            color: new three__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](color),\n        });\n        var mesh = new three__WEBPACK_IMPORTED_MODULE_1__[\"Mesh\"](geo, mat);\n        scene.add(mesh);\n        return mesh;\n    };\n    StudyDepthTestAndDepthWrite.prototype.switchDepthTest = function (val) {\n        var spheres = [this.outer, this.inner, this.satellite];\n        spheres.forEach(function (sphere) {\n            sphere.material.depthTest = val;\n        });\n    };\n    StudyDepthTestAndDepthWrite.prototype.switchDepthWrite = function (val) {\n        var spheres = [this.outer, this.inner, this.satellite];\n        spheres.forEach(function (sphere) {\n            sphere.material.depthWrite = val;\n        });\n    };\n    StudyDepthTestAndDepthWrite.prototype.switchSatelliteShift = function (isMeshPosition) {\n        if (this.satellite) {\n            this.satellite.parent.remove(this.satellite);\n            this.satellite = null;\n        }\n        var self = StudyDepthTestAndDepthWrite;\n        this.satellite = self.initSphere(5, 0xffffff, this.scene);\n        var satelliteX = 30;\n        if (isMeshPosition) {\n            this.satellite.position.x = satelliteX;\n        }\n        else {\n            this.satellite.geometry.translate(satelliteX, 0, 0);\n        }\n    };\n    StudyDepthTestAndDepthWrite.prototype.initGUI = function () {\n        var _this = this;\n        var prop = {\n            alpha: 0.5,\n            satelliteShiftIsMeshPosition: false,\n            depthTest: true,\n            depthWrite: true,\n        };\n        var gui = new dat_gui__WEBPACK_IMPORTED_MODULE_0__[\"GUI\"]();\n        //外部ボールがメッシュポジションか、ジオメトリシフトかで結果が変わる。\n        var meshFolder = gui.addFolder(\"Mesh\");\n        meshFolder.add(prop, \"alpha\", 0.0, 1.0).onChange(function (val) {\n            var spheres = [_this.outer, _this.inner, _this.satellite];\n            spheres.forEach(function (sphere) {\n                sphere.material.opacity = val;\n            });\n        });\n        meshFolder.open();\n        var satelliteFolder = gui.addFolder(\"satellite\");\n        satelliteFolder\n            .add(prop, \"satelliteShiftIsMeshPosition\")\n            .onChange(function (val) {\n            _this.switchSatelliteShift(val);\n        });\n        satelliteFolder.open();\n        var depthFolder = gui.addFolder(\"depth\");\n        depthFolder.add(prop, \"depthTest\").onChange(function (val) {\n            _this.switchDepthTest(val);\n        });\n        depthFolder.add(prop, \"depthWrite\").onChange(function (val) {\n            _this.switchDepthWrite(val);\n        });\n        depthFolder.open();\n        var innerFolder = gui.addFolder(\"Inner Sphere\");\n        var innerParam = {\n            x: 0.0,\n        };\n        innerFolder.add(innerParam, \"x\", 0, 20).onChange(function (val) {\n            _this.inner.position.x = val;\n        });\n        innerFolder.open();\n        var renderOrderFolder = gui.addFolder(\"Render Order\");\n        var orders = {\n            inner: 0.0,\n            outer: 0.0,\n            satellite: 0.0,\n        };\n        var min = -3;\n        var max = 3;\n        var step = 1;\n        renderOrderFolder\n            .add(orders, \"inner\", min, max)\n            .step(step)\n            .onChange(function (val) {\n            _this.inner.renderOrder = val;\n        });\n        renderOrderFolder\n            .add(orders, \"outer\", min, max)\n            .step(step)\n            .onChange(function (val) {\n            _this.outer.renderOrder = val;\n        });\n        renderOrderFolder\n            .add(orders, \"satellite\", min, max)\n            .step(step)\n            .onChange(function (val) {\n            _this.satellite.renderOrder = val;\n        });\n        renderOrderFolder.open();\n        var sceneFolder = gui.addFolder(\"Scene\");\n        var sceneParam = {\n            SwapSphere: false,\n        };\n        sceneFolder.add(sceneParam, \"SwapSphere\").onChange(function (val) {\n            _this.swapSphere(val);\n            _this.inner.position.x = innerParam.x;\n        });\n        sceneFolder.open();\n    };\n    StudyDepthTestAndDepthWrite.W = 640;\n    StudyDepthTestAndDepthWrite.H = 480;\n    return StudyDepthTestAndDepthWrite;\n}());\n\nwindow.onload = function () {\n    var study = new StudyDepthTestAndDepthWrite();\n};\n\n\n//# sourceURL=webpack:///./src/StudyDepthTestAndDepthWrite.ts?");

/***/ })

/******/ });