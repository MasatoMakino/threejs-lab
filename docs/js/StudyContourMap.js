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
/******/ 		"StudyContourMap": 0
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
/******/ 	deferredModules.push(["./src/ts/StudyContourMap.ts","vendor"]);
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

/***/ "./src/ts/StudyContourMap.ts":
/*!***********************************!*\
  !*** ./src/ts/StudyContourMap.ts ***!
  \***********************************/
/*! exports provided: StudyContourMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StudyContourMap\", function() { return StudyContourMap; });\n/* harmony import */ var ts_Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts/Common */ \"./src/ts/Common.ts\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var ts_contour_vert_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts/contour/vert.ts */ \"./src/ts/contour/vert.ts\");\n/* harmony import */ var ts_contour_frag_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ts/contour/frag.ts */ \"./src/ts/contour/frag.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass StudyContourMap {\n    constructor() {\n        const scene = ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initScene();\n        scene.fog = new three__WEBPACK_IMPORTED_MODULE_1__[\"Fog\"](0x000000, 80, 120);\n        ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initLight(scene);\n        const camera = ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initCamera(scene, StudyContourMap.W, StudyContourMap.H);\n        const renderer = ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initRenderer(StudyContourMap.W, StudyContourMap.H);\n        const control = ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initControl(camera);\n        ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initHelper(scene);\n        this.initObject(scene);\n        ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].render(control, renderer, scene, camera);\n    }\n    initObject(scene) {\n        const spot = new three__WEBPACK_IMPORTED_MODULE_1__[\"PointLight\"](0xff00ff, 5, 0, 2);\n        scene.add(spot);\n        const helper = new three__WEBPACK_IMPORTED_MODULE_1__[\"PointLightHelper\"](spot);\n        scene.add(helper);\n        const size = 20.0;\n        const bottom = -10.0;\n        const top = 10.0;\n        const texture = new three__WEBPACK_IMPORTED_MODULE_1__[\"TextureLoader\"]().load(\"./textures/contour.png\", texture => {\n            mat.uniforms.texture.value = texture;\n        });\n        const geo = new three__WEBPACK_IMPORTED_MODULE_1__[\"BoxGeometry\"](size, size, size);\n        const uniforms = three__WEBPACK_IMPORTED_MODULE_1__[\"UniformsUtils\"].merge([\n            three__WEBPACK_IMPORTED_MODULE_1__[\"UniformsLib\"][\"fog\"],\n            three__WEBPACK_IMPORTED_MODULE_1__[\"UniformsLib\"][\"lights\"],\n            {\n                bottom: { type: \"float\", value: bottom },\n                top: { type: \"float\", value: top },\n                texture: { type: \"sampler2D\", value: texture }\n            }\n        ]);\n        const mat = new three__WEBPACK_IMPORTED_MODULE_1__[\"ShaderMaterial\"]({\n            uniforms: uniforms,\n            vertexShader: ts_contour_vert_ts__WEBPACK_IMPORTED_MODULE_2__[\"ContourVertexShader\"].get(),\n            fragmentShader: ts_contour_frag_ts__WEBPACK_IMPORTED_MODULE_3__[\"ContourFragmentShader\"].get(),\n            side: three__WEBPACK_IMPORTED_MODULE_1__[\"DoubleSide\"],\n            transparent: true,\n            lights: true,\n            fog: scene.fog !== undefined\n        });\n        const mesh = new three__WEBPACK_IMPORTED_MODULE_1__[\"Mesh\"](geo, mat);\n        scene.add(mesh);\n    }\n}\nStudyContourMap.W = 640;\nStudyContourMap.H = 480;\nwindow.onload = () => {\n    const study = new StudyContourMap();\n};\n\n\n//# sourceURL=webpack:///./src/ts/StudyContourMap.ts?");

/***/ }),

/***/ "./src/ts/contour/frag.ts":
/*!********************************!*\
  !*** ./src/ts/contour/frag.ts ***!
  \********************************/
/*! exports provided: ContourFragmentShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContourFragmentShader\", function() { return ContourFragmentShader; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nclass ContourFragmentShader {\n    static get() {\n        return `\n    uniform float bottom;\n    uniform float top;\n    uniform sampler2D texture;\n    varying vec3 vUv;\n    \n    ${three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderChunk\"][\"common\"]}\n    ${three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderChunk\"][\"fog_pars_fragment\"]}\n    \n    void main() {\n      float y = vUv.y / (top - bottom) + 0.5;\n      vec4 color = texture2D( texture, vec2(0.5, y) );\n      if ( color.a < 0.3 ) discard;\n      gl_FragColor = color;\n\n      ${three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderChunk\"][\"fog_fragment\"]}\n    }\n    `;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/contour/frag.ts?");

/***/ }),

/***/ "./src/ts/contour/vert.ts":
/*!********************************!*\
  !*** ./src/ts/contour/vert.ts ***!
  \********************************/
/*! exports provided: ContourVertexShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContourVertexShader\", function() { return ContourVertexShader; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nclass ContourVertexShader {\n    static get() {\n        return `\n\t  varying vec3 vUv;\n\t  ${three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderChunk\"][\"fog_pars_vertex\"]}\n\t        \n\t  void main() {\n\t\tvUv = position;\n\t\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\t\tvec4 mvPosition =  viewMatrix * worldPosition;\n\t\tgl_Position = projectionMatrix * mvPosition;\n\t\t\n\t\t${three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderChunk\"][\"fog_vertex\"]}\n\t  }\n\t`;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/contour/vert.ts?");

/***/ })

/******/ });