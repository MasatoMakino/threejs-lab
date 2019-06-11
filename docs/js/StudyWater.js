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
/******/ 	deferredModules.push(["./src/ts/StudyWater.ts","vendor"]);
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

/***/ "./src/ts/StudyWater.ts":
/*!******************************!*\
  !*** ./src/ts/StudyWater.ts ***!
  \******************************/
/*! exports provided: StudyWater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StudyWater\", function() { return StudyWater; });\n/* harmony import */ var ts_Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts/Common */ \"./src/ts/Common.ts\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var ts_water_Water__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts/water/Water */ \"./src/ts/water/Water.ts\");\n/* harmony import */ var ts_water_WaterOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ts/water/WaterOptions */ \"./src/ts/water/WaterOptions.ts\");\n\n\n\n\n\n\nclass StudyWater {\n    constructor() {\n        const scene = ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initScene();\n        ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initLight(scene);\n        const camera = ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initCamera(scene, StudyWater.W, StudyWater.H);\n        const renderer = ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initRenderer(StudyWater.W, StudyWater.H, 0x999999);\n        const control = ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initControl(camera);\n        ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initHelper(scene);\n        this.initObject(scene);\n        ts_Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].render(control, renderer, scene, camera);\n    }\n    initObject(scene) {\n        const light = new three__WEBPACK_IMPORTED_MODULE_1__[\"DirectionalLight\"](0xffffff, 1.0);\n        light.position.set(80.707, 80.707, 0);\n        scene.add(light);\n        const helper = new three__WEBPACK_IMPORTED_MODULE_1__[\"DirectionalLightHelper\"](light, 15);\n        scene.add(helper);\n        const waterGeometry = new three__WEBPACK_IMPORTED_MODULE_1__[\"PlaneBufferGeometry\"](10000, 10000);\n        const option = {\n            normalSampler: \"textures/waternormals.jpg\",\n            alpha: 1.0,\n            waterColor: 0x001e0f,\n            distortionScale: 3.7,\n            fog: scene.fog !== undefined\n        };\n        ts_water_WaterOptions__WEBPACK_IMPORTED_MODULE_3__[\"WaterOptionsUtil\"].updateSun(option, light);\n        console.log(option);\n        this.water = new ts_water_Water__WEBPACK_IMPORTED_MODULE_2__[\"Water\"](waterGeometry, option);\n        // this.water.updateSun( light );\n        scene.add(this.water);\n    }\n}\nStudyWater.W = 640;\nStudyWater.H = 480;\nwindow.onload = () => {\n    const study = new StudyWater();\n};\n\n\n//# sourceURL=webpack:///./src/ts/StudyWater.ts?");

/***/ }),

/***/ "./src/ts/water/Water.ts":
/*!*******************************!*\
  !*** ./src/ts/water/Water.ts ***!
  \*******************************/
/*! exports provided: Water */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Water\", function() { return Water; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var ts_water_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts/water/vert */ \"./src/ts/water/vert.ts\");\n/* harmony import */ var ts_water_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts/water/frag */ \"./src/ts/water/frag.ts\");\n/* harmony import */ var ts_water_WaterOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ts/water/WaterOptions */ \"./src/ts/water/WaterOptions.ts\");\n/**\n * @author jbouny / https://github.com/jbouny\n *\n * Work based on :\n * @author Slayvin / http://slayvin.net : Flat mirror for three.js\n * @author Stemkoski / http://www.adelphi.edu/~stemkoski : An implementation of water shader based on the flat mirror\n * @author Jonas Wagner / http://29a.ch/ && http://29a.ch/slides/2012/webglwater/ : Water shader explanations in WebGL\n */\n\n\n\n\n\nclass Water extends three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"] {\n    constructor(geometry, options) {\n        super(geometry);\n        this.mirrorPlane = new three__WEBPACK_IMPORTED_MODULE_0__[\"Plane\"]();\n        this.normal = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"]();\n        this.mirrorWorldPosition = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"]();\n        this.cameraWorldPosition = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"]();\n        this.rotationMatrix = new three__WEBPACK_IMPORTED_MODULE_0__[\"Matrix4\"]();\n        this.lookAtPosition = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0, 0, -1);\n        this.clipPlane = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector4\"]();\n        this.view = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"]();\n        this.target = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"]();\n        this.mirrorCamera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"]();\n        this.onBeforeRenderHandler = (renderer, scene, camera) => {\n            this.mirrorWorldPosition.setFromMatrixPosition(this.matrixWorld);\n            this.cameraWorldPosition.setFromMatrixPosition(camera.matrixWorld);\n            this.rotationMatrix.extractRotation(this.matrixWorld);\n            this.normal.set(0, 0, 1);\n            this.normal.applyMatrix4(this.rotationMatrix);\n            this.view.subVectors(this.mirrorWorldPosition, this.cameraWorldPosition);\n            // Avoid rendering when mirror is facing away\n            if (this.view.dot(this.normal) > 0)\n                return;\n            this.view.reflect(this.normal).negate();\n            this.view.add(this.mirrorWorldPosition);\n            this.rotationMatrix.extractRotation(camera.matrixWorld);\n            this.lookAtPosition.set(0, 0, -1);\n            this.lookAtPosition.applyMatrix4(this.rotationMatrix);\n            this.lookAtPosition.add(this.cameraWorldPosition);\n            this.target.subVectors(this.mirrorWorldPosition, this.lookAtPosition);\n            this.target.reflect(this.normal).negate();\n            this.target.add(this.mirrorWorldPosition);\n            this.updateMirrorCamera(camera);\n            this.updateTextureMatrix();\n            this.updateMirrorPlane(camera, this.options);\n            this.options.eye.setFromMatrixPosition(camera.matrixWorld);\n            this.render(renderer, scene);\n        };\n        this.textureMatrix = new three__WEBPACK_IMPORTED_MODULE_0__[\"Matrix4\"]();\n        this.q = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector4\"]();\n        /**\n         * uniformsのtime変数を加算する。\n         * requestAnimationFrameから呼び出される。\n         *\n         * @param timestamp\n         */\n        this.onRequestAnimationFrame = (timestamp) => {\n            if (!this.currentTimeStamp)\n                this.currentTimeStamp = timestamp;\n            const delta = timestamp - this.currentTimeStamp;\n            this.material.uniforms.time.value += delta / 3000;\n            this.requestID = requestAnimationFrame(this.onRequestAnimationFrame);\n            this.currentTimeStamp = timestamp;\n        };\n        this.options = ts_water_WaterOptions__WEBPACK_IMPORTED_MODULE_3__[\"WaterOptionsUtil\"].initOption(options);\n        this.initRenderTarget(this.options);\n        const mat = this.initShader(this.options);\n        this.material = mat;\n        this.rotation.x = -Math.PI / 2;\n        this.onBeforeRender = this.onBeforeRenderHandler;\n        this.requestID = requestAnimationFrame(this.onRequestAnimationFrame);\n    }\n    initRenderTarget(options) {\n        const parameters = {\n            minFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"LinearFilter\"],\n            magFilter: three__WEBPACK_IMPORTED_MODULE_0__[\"LinearFilter\"],\n            format: three__WEBPACK_IMPORTED_MODULE_0__[\"RGBFormat\"],\n            stencilBuffer: false\n        };\n        this.renderTarget = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderTarget\"](options.textureWidth, options.textureHeight, parameters);\n        if (!three__WEBPACK_IMPORTED_MODULE_0__[\"Math\"].isPowerOfTwo(options.textureWidth) ||\n            !three__WEBPACK_IMPORTED_MODULE_0__[\"Math\"].isPowerOfTwo(options.textureHeight)) {\n            this.renderTarget.texture.generateMipmaps = false;\n        }\n    }\n    initShader(options) {\n        const uniforms = three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsUtils\"].merge([\n            three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"][\"fog\"],\n            three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"][\"lights\"],\n            {\n                normalSampler: { value: null },\n                mirrorSampler: { value: null },\n                alpha: { value: 1.0 },\n                time: { value: 0.0 },\n                size: { value: 1.0 },\n                distortionScale: { value: 20.0 },\n                textureMatrix: { value: new three__WEBPACK_IMPORTED_MODULE_0__[\"Matrix4\"]() },\n                sunColor: { value: new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0x7f7f7f) },\n                sunDirection: { value: new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0.70707, 0.70707, 0) },\n                eye: { value: new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"]() },\n                waterColor: { value: new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0x555555) }\n            }\n        ]);\n        const material = new three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderMaterial\"]({\n            fragmentShader: ts_water_frag__WEBPACK_IMPORTED_MODULE_2__[\"WaterFragmentShader\"].get(),\n            vertexShader: ts_water_vert__WEBPACK_IMPORTED_MODULE_1__[\"WaterVertexShader\"].get(),\n            uniforms: uniforms,\n            transparent: true,\n            lights: true,\n            side: options.side,\n            fog: options.fog\n        });\n        material.uniforms.mirrorSampler.value = this.renderTarget.texture;\n        material.uniforms.textureMatrix.value = this.textureMatrix;\n        material.uniforms.alpha.value = options.alpha;\n        material.uniforms.time.value = options.time;\n        material.uniforms.normalSampler.value = options.normalSampler;\n        material.uniforms.sunColor.value = options.sunColor;\n        material.uniforms.waterColor.value = options.waterColor;\n        material.uniforms.sunDirection.value = options.sunDirection;\n        material.uniforms.distortionScale.value = options.distortionScale;\n        material.uniforms.eye.value = options.eye;\n        return material;\n    }\n    /**\n     * 受け取ったライトを元に反射光の状態を更新する。\n     * @param light\n     */\n    updateSun(light) {\n        this.options.sunDirection = light.position.clone().normalize();\n        this.options.sunColor = light.color.clone();\n        (this.material).uniforms.sunDirection.value = this.options.sunDirection;\n        (this.material).uniforms.sunColor.value = this.options.sunColor;\n    }\n    updateMirrorCamera(camera) {\n        this.mirrorCamera.position.copy(this.view);\n        this.mirrorCamera.up.set(0, 1, 0);\n        this.mirrorCamera.up.applyMatrix4(this.rotationMatrix);\n        this.mirrorCamera.up.reflect(this.normal);\n        this.mirrorCamera.lookAt(this.target);\n        this.mirrorCamera.far = camera.far; // Used in WebGLBackground\n        this.mirrorCamera.updateMatrixWorld(true);\n        this.mirrorCamera.projectionMatrix.copy(camera.projectionMatrix);\n    }\n    updateTextureMatrix() {\n        // Update the texture matrix\n        this.textureMatrix.set(0.5, 0.0, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0, 1.0);\n        this.textureMatrix.multiply(this.mirrorCamera.projectionMatrix);\n        this.textureMatrix.multiply(this.mirrorCamera.matrixWorldInverse);\n    }\n    updateMirrorPlane(camera, options) {\n        // Now update projection matrix with new clip plane, implementing code from: http://www.terathon.com/code/oblique.html\n        // Paper explaining this technique: http://www.terathon.com/lengyel/Lengyel-Oblique.pdf\n        this.mirrorPlane.setFromNormalAndCoplanarPoint(this.normal, this.mirrorWorldPosition);\n        this.mirrorPlane.applyMatrix4(this.mirrorCamera.matrixWorldInverse);\n        this.clipPlane.set(this.mirrorPlane.normal.x, this.mirrorPlane.normal.y, this.mirrorPlane.normal.z, this.mirrorPlane.constant);\n        const projectionMatrix = this.mirrorCamera.projectionMatrix;\n        Water.updateQ(this.q, projectionMatrix, this.clipPlane);\n        // Calculate the scaled plane vector\n        this.clipPlane.multiplyScalar(2.0 / this.clipPlane.dot(this.q));\n        // Replacing the third row of the projection matrix\n        projectionMatrix.elements[2] = this.clipPlane.x;\n        projectionMatrix.elements[6] = this.clipPlane.y;\n        projectionMatrix.elements[10] = this.clipPlane.z + 1.0 - options.clipBias;\n        projectionMatrix.elements[14] = this.clipPlane.w;\n    }\n    static updateQ(q, projectionMatrix, clipPlane) {\n        q.x =\n            (Math.sign(clipPlane.x) + projectionMatrix.elements[8]) /\n                projectionMatrix.elements[0];\n        q.y =\n            (Math.sign(clipPlane.y) + projectionMatrix.elements[9]) /\n                projectionMatrix.elements[5];\n        q.z = -1.0;\n        q.w = (1.0 + projectionMatrix.elements[10]) / projectionMatrix.elements[14];\n    }\n    render(renderer, scene) {\n        /** 設定を一助保存 **/\n        const currentRenderTarget = renderer.getRenderTarget();\n        const currentVrEnabled = renderer.vr.enabled;\n        const currentShadowAutoUpdate = renderer.shadowMap.autoUpdate;\n        this.visible = false;\n        renderer.vr.enabled = false; // Avoid camera modification and recursion\n        renderer.shadowMap.autoUpdate = false; // Avoid re-computing shadows\n        renderer.setRenderTarget(this.renderTarget);\n        renderer.clear();\n        renderer.render(scene, this.mirrorCamera);\n        this.visible = true;\n        /** 設定を元に戻す **/\n        renderer.vr.enabled = currentVrEnabled;\n        renderer.shadowMap.autoUpdate = currentShadowAutoUpdate;\n        renderer.setRenderTarget(currentRenderTarget);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/water/Water.ts?");

/***/ }),

/***/ "./src/ts/water/WaterOptions.ts":
/*!**************************************!*\
  !*** ./src/ts/water/WaterOptions.ts ***!
  \**************************************/
/*! exports provided: WaterOptionsUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WaterOptionsUtil\", function() { return WaterOptionsUtil; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n\n\n/**\n * WaterOptionsの操作を行うユーティリティークラス\n */\nclass WaterOptionsUtil {\n    /**\n     * 初期化を行う。省略されたオプションをデフォルト値で補う。\n     * @param options\n     */\n    static initOption(options) {\n        options = options || {};\n        if (options.textureWidth == null) {\n            options.textureWidth = 512;\n        }\n        if (options.textureHeight == null) {\n            options.textureHeight = 512;\n        }\n        options.clipBias = options.clipBias !== undefined ? options.clipBias : 0.0;\n        options.alpha = options.alpha !== undefined ? options.alpha : 1.0;\n        options.time = options.time !== undefined ? options.time : 0.0;\n        if (options.normalSampler == null) {\n            options.normalSampler = null;\n        }\n        else if (typeof options.normalSampler === \"string\") {\n            options.normalSampler = new three__WEBPACK_IMPORTED_MODULE_0__[\"TextureLoader\"]().load(options.normalSampler, function (texture) {\n                texture.wrapS = texture.wrapT = three__WEBPACK_IMPORTED_MODULE_0__[\"RepeatWrapping\"];\n            });\n        }\n        options.sunDirection =\n            options.sunDirection !== undefined\n                ? options.sunDirection\n                : new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0.70707, 0.70707, 0.0);\n        options.sunColor = new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](options.sunColor !== undefined ? options.sunColor : 0xffffff);\n        options.waterColor = new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](options.waterColor !== undefined ? options.waterColor : 0x7f7f7f);\n        options.eye =\n            options.eye !== undefined ? options.eye : new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0, 0, 0);\n        options.distortionScale =\n            options.distortionScale !== undefined ? options.distortionScale : 20.0;\n        options.side = options.side !== undefined ? options.side : three__WEBPACK_IMPORTED_MODULE_0__[\"FrontSide\"];\n        options.fog = options.fog !== undefined ? options.fog : false;\n        return options;\n    }\n    /**\n     * ライトオブジェクトから位置と色を取り出し、オプションに追記する。\n     * @param options\n     * @param light\n     */\n    static updateSun(options, light) {\n        options.sunDirection = light.position.clone().normalize();\n        options.sunColor = light.color.clone();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/water/WaterOptions.ts?");

/***/ }),

/***/ "./src/ts/water/frag.ts":
/*!******************************!*\
  !*** ./src/ts/water/frag.ts ***!
  \******************************/
/*! exports provided: WaterFragmentShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WaterFragmentShader\", function() { return WaterFragmentShader; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nclass WaterFragmentShader {\n    static get() {\n        return [\n            \"uniform sampler2D mirrorSampler;\",\n            \"uniform float alpha;\",\n            \"uniform float time;\",\n            \"uniform float size;\",\n            \"uniform float distortionScale;\",\n            \"uniform sampler2D normalSampler;\",\n            \"uniform vec3 sunColor;\",\n            \"uniform vec3 sunDirection;\",\n            \"uniform vec3 eye;\",\n            \"uniform vec3 waterColor;\",\n            \"varying vec4 mirrorCoord;\",\n            \"varying vec4 worldPosition;\",\n            \"vec4 getNoise( vec2 uv ) {\",\n            \"\tvec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);\",\n            \"\tvec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );\",\n            \"\tvec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );\",\n            \"\tvec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );\",\n            \"\tvec4 noise = texture2D( normalSampler, uv0 ) +\",\n            \"\t\ttexture2D( normalSampler, uv1 ) +\",\n            \"\t\ttexture2D( normalSampler, uv2 ) +\",\n            \"\t\ttexture2D( normalSampler, uv3 );\",\n            \"\treturn noise * 0.5 - 1.0;\",\n            \"}\",\n            \"void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {\",\n            \"\tvec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );\",\n            \"\tfloat direction = max( 0.0, dot( eyeDirection, reflection ) );\",\n            \"\tspecularColor += pow( direction, shiny ) * sunColor * spec;\",\n            \"\tdiffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;\",\n            \"}\",\n            three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderChunk\"][\"common\"],\n            three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderChunk\"][\"packing\"],\n            three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderChunk\"][\"bsdfs\"],\n            three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderChunk\"][\"fog_pars_fragment\"],\n            three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderChunk\"][\"lights_pars_begin\"],\n            three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderChunk\"][\"shadowmap_pars_fragment\"],\n            three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderChunk\"][\"shadowmask_pars_fragment\"],\n            \"void main() {\",\n            \"\tvec4 noise = getNoise( worldPosition.xz * size );\",\n            \"\tvec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );\",\n            \"\tvec3 diffuseLight = vec3(0.0);\",\n            \"\tvec3 specularLight = vec3(0.0);\",\n            \"\tvec3 worldToEye = eye-worldPosition.xyz;\",\n            \"\tvec3 eyeDirection = normalize( worldToEye );\",\n            \"\tsunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );\",\n            \"\tfloat distance = length(worldToEye);\",\n            \"\tvec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;\",\n            \"\tvec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );\",\n            \"\tfloat theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );\",\n            \"\tfloat rf0 = 0.3;\",\n            \"\tfloat reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );\",\n            \"\tvec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;\",\n            \"\tvec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);\",\n            \"\tvec3 outgoingLight = albedo;\",\n            \"\tgl_FragColor = vec4( outgoingLight, alpha );\",\n            three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderChunk\"][\"tonemapping_fragment\"],\n            three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderChunk\"][\"fog_fragment\"],\n            \"}\"\n        ].join(\"\\n\");\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/water/frag.ts?");

/***/ }),

/***/ "./src/ts/water/vert.ts":
/*!******************************!*\
  !*** ./src/ts/water/vert.ts ***!
  \******************************/
/*! exports provided: WaterVertexShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WaterVertexShader\", function() { return WaterVertexShader; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nclass WaterVertexShader {\n    static get() {\n        return [\n            \"uniform mat4 textureMatrix;\",\n            \"uniform float time;\",\n            \"varying vec4 mirrorCoord;\",\n            \"varying vec4 worldPosition;\",\n            three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderChunk\"][\"fog_pars_vertex\"],\n            three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderChunk\"][\"shadowmap_pars_vertex\"],\n            \"void main() {\",\n            \"\t mirrorCoord = modelMatrix * vec4( position, 1.0 );\",\n            \"\t worldPosition = mirrorCoord.xyzw;\",\n            \"\t mirrorCoord = textureMatrix * mirrorCoord;\",\n            \"\t vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );\",\n            \"\t gl_Position = projectionMatrix * mvPosition;\",\n            three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderChunk\"][\"fog_vertex\"],\n            three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderChunk\"][\"shadowmap_vertex\"],\n            \"}\"\n        ].join(\"\\n\");\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/water/vert.ts?");

/***/ })

/******/ });