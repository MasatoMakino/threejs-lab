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
/******/ 		"StudyWater": 0
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
/******/ 	deferredModules.push(["./src/StudyWater.ts","vendor"]);
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

/***/ "./src/StudyWater.ts":
/*!***************************!*\
  !*** ./src/StudyWater.ts ***!
  \***************************/
/*! exports provided: StudyWater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StudyWater\", function() { return StudyWater; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Common */ \"./src/Common.ts\");\n/* harmony import */ var _water_WaterMesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./water/WaterMesh */ \"./src/water/WaterMesh.ts\");\n\n\n\nvar StudyWater = /** @class */ (function () {\n    function StudyWater() {\n        var scene = _Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initScene();\n        _Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initLight(scene);\n        var camera = _Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initCamera(scene, StudyWater.W, StudyWater.H);\n        camera.position.set(0, 20, 100);\n        var renderer = _Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initRenderer(StudyWater.W, StudyWater.H, 0x999999);\n        var control = _Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initControl(camera, renderer);\n        _Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initHelper(scene);\n        this.initObject(scene);\n        _Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].render(control, renderer, scene, camera);\n    }\n    StudyWater.prototype.initObject = function (scene) {\n        var light = new three__WEBPACK_IMPORTED_MODULE_0__[\"DirectionalLight\"](0xffffff, 1.0);\n        light.position.set(80.707, 80.707, 0);\n        scene.add(light);\n        var helper = new three__WEBPACK_IMPORTED_MODULE_0__[\"DirectionalLightHelper\"](light, 15);\n        scene.add(helper);\n        var waterGeometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"PlaneBufferGeometry\"](10000, 10000);\n        var option = {\n            waterNormals: _water_WaterMesh__WEBPACK_IMPORTED_MODULE_2__[\"WaterMesh\"].loadNormalSampler(\"textures/waternormals.jpg\"),\n            // alpha: 1.0,\n            // waterColor: 0x001e0f,\n            // distortionScale: 3.7,\n            fog: scene.fog !== undefined,\n        };\n        _water_WaterMesh__WEBPACK_IMPORTED_MODULE_2__[\"WaterMesh\"].updateSunOption(option, light);\n        this.water = new _water_WaterMesh__WEBPACK_IMPORTED_MODULE_2__[\"WaterMesh\"](waterGeometry, option);\n        scene.add(this.water);\n    };\n    StudyWater.W = 640;\n    StudyWater.H = 480;\n    return StudyWater;\n}());\n\nwindow.onload = function () {\n    var study = new StudyWater();\n};\n\n\n//# sourceURL=webpack:///./src/StudyWater.ts?");

/***/ }),

/***/ "./src/water/WaterMesh.ts":
/*!********************************!*\
  !*** ./src/water/WaterMesh.ts ***!
  \********************************/
/*! exports provided: WaterMesh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WaterMesh\", function() { return WaterMesh; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_objects_Water__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/objects/Water */ \"./node_modules/three/examples/jsm/objects/Water.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\nvar WaterMesh = /** @class */ (function (_super) {\n    __extends(WaterMesh, _super);\n    function WaterMesh(geometry, options) {\n        var _this = _super.call(this, geometry, options) || this;\n        /**\n         * uniformsのtime変数を加算する。\n         * requestAnimationFrameから呼び出される。\n         *\n         * @param timestamp\n         */\n        _this.onRequestAnimationFrame = function (timestamp) {\n            if (!_this.currentTimeStamp)\n                _this.currentTimeStamp = timestamp;\n            var delta = timestamp - _this.currentTimeStamp;\n            _this.material.uniforms.time.value += delta / 3000;\n            _this.requestID = requestAnimationFrame(_this.onRequestAnimationFrame);\n            _this.currentTimeStamp = timestamp;\n        };\n        _this.option = options;\n        _this.rotation.x = -Math.PI / 2;\n        _this.requestID = requestAnimationFrame(_this.onRequestAnimationFrame);\n        return _this;\n    }\n    /**\n     * 受け取ったライトを元に反射光の状態を更新する。\n     * @param light\n     */\n    WaterMesh.prototype.updateSun = function (light) {\n        WaterMesh.updateSunOption(this.option, light);\n        var mat = this.material;\n        mat.uniforms.sunDirection.value = this.option.sunDirection;\n        mat.uniforms.sunColor.value = this.option.sunColor;\n    };\n    /**\n     * ライトオブジェクトから位置と色を取り出し、オプションに追記する。\n     * @param options\n     * @param light\n     */\n    WaterMesh.updateSunOption = function (options, light) {\n        options.sunDirection = light.position.clone().normalize();\n        options.sunColor = light.color.clone();\n    };\n    /**\n     * ノーマルマップの読み込みと設定を行う。\n     * @param url\n     */\n    WaterMesh.loadNormalSampler = function (url) {\n        return new three__WEBPACK_IMPORTED_MODULE_0__[\"TextureLoader\"]().load(url, function (texture) {\n            texture.wrapS = texture.wrapT = three__WEBPACK_IMPORTED_MODULE_0__[\"RepeatWrapping\"];\n        });\n    };\n    return WaterMesh;\n}(three_examples_jsm_objects_Water__WEBPACK_IMPORTED_MODULE_1__[\"Water\"]));\n\n\n\n//# sourceURL=webpack:///./src/water/WaterMesh.ts?");

/***/ })

/******/ });