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
/******/ 		"StudyFXAA": 0
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
/******/ 	deferredModules.push(["./src/ts/StudyFXAA.ts","vendor"]);
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

/***/ "./src/ts/StudyFXAA.ts":
/*!*****************************!*\
  !*** ./src/ts/StudyFXAA.ts ***!
  \*****************************/
/*! exports provided: StudyFXAA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StudyFXAA\", function() { return StudyFXAA; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var ts_Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts/Common */ \"./src/ts/Common.ts\");\n/* harmony import */ var ts_earthGrid_EarthGridMaterial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts/earthGrid/EarthGridMaterial */ \"./src/ts/earthGrid/EarthGridMaterial.ts\");\n/* harmony import */ var ts_fxaa_FXAARenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ts/fxaa/FXAARenderer */ \"./src/ts/fxaa/FXAARenderer.ts\");\n\n\n\n\n\nclass StudyFXAA {\n    constructor() {\n        const scene = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initScene();\n        scene.fog = new three__WEBPACK_IMPORTED_MODULE_0__[\"Fog\"](0x000000, 80, 160);\n        ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initLight(scene);\n        const camera = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initCamera(scene, StudyFXAA.W, StudyFXAA.H);\n        const renderer = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initRenderer(StudyFXAA.W, StudyFXAA.H, 0, \"webgl-canvas\", false);\n        const control = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initControl(camera);\n        ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initHelper(scene);\n        this.initObject(scene);\n        this.fxaaRenderer = new ts_fxaa_FXAARenderer__WEBPACK_IMPORTED_MODULE_3__[\"FXAARenderer\"](scene, camera, renderer);\n        this.fxaaRenderer.onBeforeRequestAnimationFrame = () => {\n            control.update();\n        };\n        this.fxaaRenderer.start();\n    }\n    initObject(scene) {\n        const spot = new three__WEBPACK_IMPORTED_MODULE_0__[\"PointLight\"](0xffffff, 3, 0, 2);\n        spot.position.set(10, 20, 30);\n        scene.add(spot);\n        const helper = new three__WEBPACK_IMPORTED_MODULE_0__[\"PointLightHelper\"](spot);\n        scene.add(helper);\n        const geo = new three__WEBPACK_IMPORTED_MODULE_0__[\"SphereGeometry\"](10, 64, 64);\n        const mat = new ts_earthGrid_EarthGridMaterial__WEBPACK_IMPORTED_MODULE_2__[\"EarthGridMaterial\"]({\n            fog: scene.fog !== undefined\n        });\n        mat.color = new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0xff6666);\n        mat.lineWeight = 0.005;\n        const mesh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geo, mat);\n        scene.add(mesh);\n    }\n    switchAA() {\n        this.fxaaRenderer.isActive = !this.fxaaRenderer.isActive;\n    }\n    sizeUp() {\n        const size = this.fxaaRenderer.getSize();\n        this.fxaaRenderer.updateSize(size.width + 4, size.height + 4);\n    }\n    sizeDown() {\n        const size = this.fxaaRenderer.getSize();\n        this.fxaaRenderer.updateSize(size.width - 4, size.height - 4);\n    }\n}\nStudyFXAA.W = 640;\nStudyFXAA.H = 480;\nwindow.onload = () => {\n    const study = new StudyFXAA();\n    document.addEventListener(\"keydown\", event => {\n        const keyName = event.key;\n        switch (keyName) {\n            case \" \":\n                study.switchAA();\n                break;\n            case \"q\":\n                study.sizeUp();\n                break;\n            case \"a\":\n                study.sizeDown();\n                break;\n        }\n    }, false);\n};\n\n\n//# sourceURL=webpack:///./src/ts/StudyFXAA.ts?");

/***/ }),

/***/ "./src/ts/customPhongMaterial/CustomPhongMaterial.ts":
/*!***********************************************************!*\
  !*** ./src/ts/customPhongMaterial/CustomPhongMaterial.ts ***!
  \***********************************************************/
/*! exports provided: CustomPhongMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CustomPhongMaterial\", function() { return CustomPhongMaterial; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n\n\n\n/**\n * MeshPhongMaterialに準じるShaderMaterialクラス。\n * このクラスを継承するクラスで、任意のシェーダーを指定することで機能を変更可能とする。\n *\n * {@link https://github.com/mrdoob/three.js/blob/76c64b23d422dcfb36a28353f45b1effa1f68c5a/src/renderers/shaders/ShaderLib.js#L53}\n */\nclass CustomPhongMaterial extends three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderMaterial\"] {\n    /**\n     * MeshPhongMaterialに必要なuniformsを生成する。\n     */\n    static getBasicUniforms() {\n        return three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsUtils\"].merge([\n            three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].common,\n            three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].specularmap,\n            three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].envmap,\n            three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].aomap,\n            three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].lightmap,\n            three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].emissivemap,\n            three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].bumpmap,\n            three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].normalmap,\n            three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].displacementmap,\n            three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].gradientmap,\n            three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].fog,\n            three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].lights,\n            {\n                emissive: { value: new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0x000000) },\n                specular: { value: new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0x111111) },\n                shininess: { value: 30 }\n            }\n        ]);\n    }\n    /**\n     * コンストラクタ。\n     * @param vertexShader\n     * @param fragmentShader\n     * @param parameters\n     */\n    constructor(vertexShader, fragmentShader, parameters) {\n        super(parameters);\n        this.initUniforms();\n        this.vertexShader = vertexShader;\n        this.fragmentShader = fragmentShader;\n        this.initDefaultSetting(parameters);\n    }\n    /**\n     * uniformsを初期化する。\n     */\n    initUniforms() {\n        this.uniforms = three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsUtils\"].merge([\n            CustomPhongMaterial.getBasicUniforms(),\n            {}\n        ]);\n    }\n    /**\n     * 1.オプションで指定されなかったパラメーター値を補完する。\n     * 2.uniformsに代入する必要のあるパラメーターを明示的に代入する。\n     *\n     * @param parameters\n     */\n    initDefaultSetting(parameters) {\n        this.opacity = this._opacity;\n        this.lights = true; //FIXME シェーダーがエラーを起こすのでlights設定は強制でON\n    }\n    /*\n     * opacityなど、uniformsに反映しないと動作しないパラメーターを\n     * マテリアルのインスタンスに設定された段階で同期させる。\n     */\n    /**\n     * 透明度\n     */\n    get opacity() {\n        return this._opacity;\n    }\n    set opacity(value) {\n        if (value === undefined)\n            return;\n        this._opacity = value;\n        if (this.uniforms && this.uniforms.opacity) {\n            this.uniforms.opacity.value = value;\n        }\n    }\n    /**\n     * 放射光\n     */\n    get emissive() {\n        return this._emissive;\n    }\n    set emissive(value) {\n        this._emissive = value;\n        if (this.uniforms && this.uniforms.emissive) {\n            this.uniforms.emissive.value = value;\n        }\n    }\n    /**\n     * 発光状態のために、マテリアルの設定をまとめて変更する。\n     * {@link https://stackoverflow.com/questions/37647853/three-js-depthwrite-vs-depthtest-for-transparent-canvas-texture-map-on-three-p}\n     */\n    startGlow() {\n        this.alphaTest = 0.0;\n        this.depthWrite = false;\n        this.blending = three__WEBPACK_IMPORTED_MODULE_0__[\"AdditiveBlending\"];\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/customPhongMaterial/CustomPhongMaterial.ts?");

/***/ }),

/***/ "./src/ts/customPhongMaterial/Shader.vert":
/*!************************************************!*\
  !*** ./src/ts/customPhongMaterial/Shader.vert ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/**\\n * https://github.com/mrdoob/three.js/blob/dev/src/renderers/shaders/ShaderLib/meshphong_vert.glsl.js\\n */\\n\\n#define PHONG\\n\\nvarying vec3 vViewPosition;\\nvarying vec3 meshPosition;\\nvarying vec2 uvPosition;\\n\\n#ifndef FLAT_SHADED\\n\\nvarying vec3 vNormal;\\n\\n#endif\\n\\n#include <common>\\n#include <uv_pars_vertex>\\n#include <uv2_pars_vertex>\\n#include <displacementmap_pars_vertex>\\n#include <envmap_pars_vertex>\\n#include <color_pars_vertex>\\n#include <fog_pars_vertex>\\n#include <morphtarget_pars_vertex>\\n#include <skinning_pars_vertex>\\n#include <shadowmap_pars_vertex>\\n#include <logdepthbuf_pars_vertex>\\n#include <clipping_planes_pars_vertex>\\n\\nvoid main() {\\n    meshPosition = position;\\n    uvPosition = uv;\\n\\n    #include <uv_vertex>\\n    #include <uv2_vertex>\\n    #include <color_vertex>\\n\\n    #include <beginnormal_vertex>\\n    #include <morphnormal_vertex>\\n    #include <skinbase_vertex>\\n    #include <skinnormal_vertex>\\n    #include <defaultnormal_vertex>\\n\\n    #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\\n\\n    vNormal = normalize( transformedNormal );\\n\\n    #endif\\n\\n    #include <begin_vertex>\\n    #include <morphtarget_vertex>\\n    #include <skinning_vertex>\\n    #include <displacementmap_vertex>\\n    #include <project_vertex>\\n    #include <logdepthbuf_vertex>\\n    #include <clipping_planes_vertex>\\n\\n    vViewPosition = - mvPosition.xyz;\\n\\n    #include <worldpos_vertex>\\n    #include <envmap_vertex>\\n    #include <shadowmap_vertex>\\n    #include <fog_vertex>\\n\\n}\\n\"\n\n//# sourceURL=webpack:///./src/ts/customPhongMaterial/Shader.vert?");

/***/ }),

/***/ "./src/ts/earthGrid/EarthGridMaterial.ts":
/*!***********************************************!*\
  !*** ./src/ts/earthGrid/EarthGridMaterial.ts ***!
  \***********************************************/
/*! exports provided: EarthGridMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EarthGridMaterial\", function() { return EarthGridMaterial; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var ts_customPhongMaterial_CustomPhongMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts/customPhongMaterial/CustomPhongMaterial */ \"./src/ts/customPhongMaterial/CustomPhongMaterial.ts\");\n/* harmony import */ var _Shader_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shader.frag */ \"./src/ts/earthGrid/Shader.frag\");\n/* harmony import */ var _Shader_frag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Shader_frag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _customPhongMaterial_Shader_vert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPhongMaterial/Shader.vert */ \"./src/ts/customPhongMaterial/Shader.vert\");\n/* harmony import */ var _customPhongMaterial_Shader_vert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_customPhongMaterial_Shader_vert__WEBPACK_IMPORTED_MODULE_3__);\n/**\n * 地球儀用の緯度経度グリッド\n */\n\n\n// @ts-ignore\n\n// @ts-ignore\n\nclass EarthGridMaterial extends ts_customPhongMaterial_CustomPhongMaterial__WEBPACK_IMPORTED_MODULE_1__[\"CustomPhongMaterial\"] {\n    get lineWeight() {\n        return this._lineWeight;\n    }\n    set lineWeight(value) {\n        this._lineWeight = value;\n        if (this.uniforms && this.uniforms.lineWeight) {\n            this.uniforms.lineWeight.value = value;\n        }\n    }\n    get division() {\n        return this._division;\n    }\n    set division(value) {\n        this._division = value;\n        if (this.uniforms && this.uniforms.division) {\n            this.uniforms.division.value = value;\n        }\n    }\n    get glowPow() {\n        return this._glowPow;\n    }\n    set glowPow(value) {\n        this._glowPow = value;\n        if (this.uniforms && this.uniforms.glowPow) {\n            this.uniforms.glowPow.value = value;\n        }\n    }\n    get glowStrength() {\n        return this._glowStrength;\n    }\n    set glowStrength(value) {\n        this._glowStrength = value;\n        if (this.uniforms && this.uniforms.glowStrength) {\n            this.uniforms.glowStrength.value = value;\n        }\n    }\n    get color() {\n        return this._color;\n    }\n    set color(value) {\n        this._color = value;\n        console.log(this.uniforms);\n        if (this.uniforms && this.uniforms.color) {\n            this.uniforms.color.value = value;\n            console.log(this.uniforms.color);\n        }\n    }\n    get glowColor() {\n        return this._glowColor;\n    }\n    set glowColor(value) {\n        this._glowColor = value;\n        if (this.uniforms && this.uniforms.glowColor) {\n            this.uniforms.glowColor.value = value;\n        }\n    }\n    constructor(parameters) {\n        super(_customPhongMaterial_Shader_vert__WEBPACK_IMPORTED_MODULE_3___default.a, _Shader_frag__WEBPACK_IMPORTED_MODULE_2___default.a, parameters);\n    }\n    initUniforms() {\n        this.uniforms = three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsUtils\"].merge([\n            ts_customPhongMaterial_CustomPhongMaterial__WEBPACK_IMPORTED_MODULE_1__[\"CustomPhongMaterial\"].getBasicUniforms(),\n            {\n                lineWeight: { value: 0.005 },\n                division: { value: 8.0 },\n                glowPow: { value: 3.7 },\n                glowStrength: { value: 0.35 },\n                color: { value: new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0xffffff) },\n                glowColor: { value: new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0xffff00) }\n            }\n        ]);\n    }\n    initDefaultSetting(parameters) {\n        super.initDefaultSetting(parameters);\n        if (parameters.transparent == null) {\n            this.transparent = true;\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/earthGrid/EarthGridMaterial.ts?");

/***/ }),

/***/ "./src/ts/earthGrid/Shader.frag":
/*!**************************************!*\
  !*** ./src/ts/earthGrid/Shader.frag ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/**\\n * 地球儀用グリッド線シェーダー\\n * {@link http://glslsandbox.com/e#55098}\\n */\\n\\n#define PHONG\\n\\nuniform vec3 diffuse;\\nuniform vec3 emissive;\\nuniform vec3 specular;\\nuniform float shininess;\\n\\nvarying vec3 meshPosition;\\nvarying vec2 uvPosition;\\n\\nuniform float opacity;\\nuniform vec3 color;\\nuniform vec3 glowColor;\\n\\nuniform float lineWeight;\\nuniform float division;\\nuniform float glowPow;\\nuniform float glowStrength;\\n\\n#include <common>\\n#include <packing>\\n#include <dithering_pars_fragment>\\n#include <color_pars_fragment>\\n#include <uv_pars_fragment>\\n#include <uv2_pars_fragment>\\n#include <map_pars_fragment>\\n#include <alphamap_pars_fragment>\\n#include <aomap_pars_fragment>\\n#include <lightmap_pars_fragment>\\n#include <emissivemap_pars_fragment>\\n#include <envmap_pars_fragment>\\n#include <gradientmap_pars_fragment>\\n#include <fog_pars_fragment>\\n#include <bsdfs>\\n#include <lights_pars_begin>\\n#include <lights_phong_pars_fragment>\\n#include <shadowmap_pars_fragment>\\n#include <bumpmap_pars_fragment>\\n#include <normalmap_pars_fragment>\\n#include <specularmap_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\n\\nfloat stepLine( float alpha, float width, float gridNum ){\\n    float  step = width * gridNum * 0.5;\\n    if( alpha > 1.0 - step || alpha < step ){\\n        return 1.0;\\n    }\\n    return 0.0;\\n}\\n\\nfloat getGlow( float modVal, float width, float gridNum,  float glowPow ){\\n    float glow = cos( modVal * PI * 2.0 );\\n    glow = clamp( glow, 0.0, 1.0 );\\n    glow = pow( glow, glowPow ) ;\\n    return glow;\\n}\\n\\nfloat coverY(float y, float alpha, float division){\\n    if(y > (division-0.5)/division ){\\n        return 0.0;\\n    }else if( y < 0.5 / division){\\n        return 0.0;\\n    }\\n    return alpha;\\n}\\n\\nvoid main() {\\n    #include <clipping_planes_fragment>\\n\\n    vec4 diffuseColor = vec4( diffuse, opacity );\\n\\n    ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\\n    vec3 totalEmissiveRadiance = emissive;\\n    #include <logdepthbuf_fragment>\\n\\n    //#include <map_fragment>\\n    vec3 drawColor = glowColor;\\n    float modX = mod( uvPosition.x * division, 1.0);\\n    float modY = mod( uvPosition.y * division, 1.0);\\n\\n    /** グロー **/\\n    float alphaXGlow = getGlow( modX, lineWeight, division, glowPow );\\n    float alphaYGlow = getGlow( modY, lineWeight, division, glowPow );\\n    alphaYGlow = coverY( uvPosition.y, alphaYGlow, division);\\n    float alphaGlow = max( alphaXGlow, alphaYGlow );\\n    alphaGlow *= glowStrength;\\n\\n    /** 格子線 **/\\n    float alphaX = stepLine( modX, lineWeight, division);\\n    float alphaY = stepLine( modY, lineWeight, division);\\n    alphaY = coverY( uvPosition.y, alphaY, division);\\n    float alphaGrid = max(alphaX, alphaY);\\n    if( alphaGrid > 0.1 ){\\n        drawColor =  color;\\n    }\\n\\n    diffuseColor *= vec4( drawColor, max( alphaGlow,  alphaGrid));\\n\\n    //#include <color_fragment>\\n\\n    #include <alphamap_fragment>\\n    #include <alphatest_fragment>\\n    #include <specularmap_fragment>\\n    #include <normal_fragment_begin>\\n    #include <normal_fragment_maps>\\n    #include <emissivemap_fragment>\\n    // accumulation\\n    #include <lights_phong_fragment>\\n    #include <lights_fragment_begin>\\n    #include <lights_fragment_maps>\\n    #include <lights_fragment_end>\\n    // modulation\\n    #include <aomap_fragment>\\n    vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\\n    #include <envmap_fragment>\\n    gl_FragColor = vec4( outgoingLight, diffuseColor.a );\\n    #include <tonemapping_fragment>\\n    #include <encodings_fragment>\\n    #include <fog_fragment>\\n    #include <premultiplied_alpha_fragment>\\n    #include <dithering_fragment>\\n}\"\n\n//# sourceURL=webpack:///./src/ts/earthGrid/Shader.frag?");

/***/ }),

/***/ "./src/ts/fxaa/FXAARenderer.ts":
/*!*************************************!*\
  !*** ./src/ts/fxaa/FXAARenderer.ts ***!
  \*************************************/
/*! exports provided: FXAARenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FXAARenderer\", function() { return FXAARenderer; });\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var ts_fxaa_FXAAShaderPass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts/fxaa/FXAAShaderPass */ \"./src/ts/fxaa/FXAAShaderPass.ts\");\n/* harmony import */ var ts_postprocess_PostProcessRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts/postprocess/PostProcessRenderer */ \"./src/ts/postprocess/PostProcessRenderer.ts\");\n\n\n\nclass FXAARenderer extends ts_postprocess_PostProcessRenderer__WEBPACK_IMPORTED_MODULE_2__[\"PostProcessRenderer\"] {\n    constructor(scene, camera, renderer) {\n        super(scene, camera, renderer);\n        this.isActive = true;\n        this.fxaaPass = new ts_fxaa_FXAAShaderPass__WEBPACK_IMPORTED_MODULE_1__[\"FXAAShaderPass\"](renderer);\n        this.composer = this.initComposer(this.fxaaPass, scene, camera, renderer);\n    }\n    /**\n     * FXAAシェーダーを挟んだEffectComposerを初期化する。\n     * @param scene\n     * @param camera\n     * @param renderer\n     */\n    initComposer(fxaaPass, scene, camera, renderer) {\n        const renderPass = this.getRenderPass();\n        const composer = new three_examples_jsm_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_0__[\"EffectComposer\"](renderer);\n        composer.addPass(renderPass);\n        composer.addPass(fxaaPass);\n        return composer;\n    }\n    updateSize(w, h) {\n        super.updateSize(w, h);\n        this.composer.setSize(w, h);\n        this.fxaaPass.updateSize();\n    }\n    render(delta) {\n        if (this.composer && this.isActive) {\n            this.composer.render(delta);\n        }\n        else {\n            this.renderer.render(this.scene, this.camera);\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/fxaa/FXAARenderer.ts?");

/***/ }),

/***/ "./src/ts/fxaa/FXAAShaderPass.ts":
/*!***************************************!*\
  !*** ./src/ts/fxaa/FXAAShaderPass.ts ***!
  \***************************************/
/*! exports provided: FXAAShaderPass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FXAAShaderPass\", function() { return FXAAShaderPass; });\n/* harmony import */ var three_examples_jsm_postprocessing_ShaderPass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/postprocessing/ShaderPass */ \"./node_modules/three/examples/jsm/postprocessing/ShaderPass.js\");\n/* harmony import */ var three_examples_jsm_shaders_FXAAShader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/shaders/FXAAShader */ \"./node_modules/three/examples/jsm/shaders/FXAAShader.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n\n/**\n * FXAAShaderを組み込み済みのShaderPass\n */\nclass FXAAShaderPass extends three_examples_jsm_postprocessing_ShaderPass__WEBPACK_IMPORTED_MODULE_0__[\"ShaderPass\"] {\n    /**\n     * コンストラクタ\n     * @param renderer\n     */\n    constructor(renderer) {\n        super(three_examples_jsm_shaders_FXAAShader__WEBPACK_IMPORTED_MODULE_1__[\"FXAAShader\"]);\n        this.renderer = renderer;\n        this.updateSize();\n    }\n    /**\n     * レンダリングサイズを更新する。\n     * サイズはコンストラクタで指定されたWebGLRendererに追従する。\n     */\n    updateSize() {\n        const size = this.renderer.getSize(new three__WEBPACK_IMPORTED_MODULE_2__[\"Vector2\"]());\n        const pixelRatio = this.renderer.getPixelRatio();\n        const uniforms = this.material.uniforms;\n        uniforms.resolution.value.x = 1 / (size.width * pixelRatio);\n        uniforms.resolution.value.y = 1 / (size.height * pixelRatio);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/fxaa/FXAAShaderPass.ts?");

/***/ }),

/***/ "./src/ts/postprocess/PostProcessRenderer.ts":
/*!***************************************************!*\
  !*** ./src/ts/postprocess/PostProcessRenderer.ts ***!
  \***************************************************/
/*! exports provided: PostProcessRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostProcessRenderer\", function() { return PostProcessRenderer; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n\n\nclass PostProcessRenderer {\n    constructor(scene, camera, renderer) {\n        /**\n         * requestAnimationFrameハンドラ\n         * @param timestamp\n         */\n        this.onRequestAnimationFrame = (timestamp) => {\n            if (this.lastUpdateTimestamp == null) {\n                this.lastUpdateTimestamp = timestamp;\n            }\n            const delta = timestamp - this.lastUpdateTimestamp;\n            if (this.onBeforeRequestAnimationFrame) {\n                this.onBeforeRequestAnimationFrame(timestamp);\n            }\n            this.render(delta);\n            this.lastUpdateTimestamp = timestamp;\n            this.id = requestAnimationFrame(this.onRequestAnimationFrame);\n        };\n        this.renderer = renderer;\n        this.scene = scene;\n        this.camera = camera;\n    }\n    getRenderPass() {\n        return new three_examples_jsm_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_1__[\"RenderPass\"](this.scene, this.camera, undefined, undefined, undefined);\n    }\n    /**\n     * レンダリングを開始する。\n     */\n    start() {\n        if (this.id != null)\n            return;\n        this.id = requestAnimationFrame(this.onRequestAnimationFrame);\n    }\n    /**\n     * レンダリングを停止する。\n     */\n    stop() {\n        if (this.id == null)\n            return;\n        cancelAnimationFrame(this.id);\n        this.lastUpdateTimestamp = null;\n    }\n    updateSize(w, h) {\n        this.camera.aspect = w / h;\n        this.camera.updateProjectionMatrix();\n        this.renderer.setPixelRatio(window.devicePixelRatio);\n        this.renderer.setSize(w, h);\n    }\n    getSize() {\n        return this.renderer.getSize(new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]());\n    }\n    render(delta) {\n        // this.composer.render(delta);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/postprocess/PostProcessRenderer.ts?");

/***/ })

/******/ });