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
/******/ 		"StudyHexGrid": 0
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
/******/ 	deferredModules.push(["./src/ts/StudyHexGrid.ts","vendor"]);
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

/***/ "./src/ts/StudyHexGrid.ts":
/*!********************************!*\
  !*** ./src/ts/StudyHexGrid.ts ***!
  \********************************/
/*! exports provided: StudyHexGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StudyHexGrid\", function() { return StudyHexGrid; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var ts_Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts/Common */ \"./src/ts/Common.ts\");\n/* harmony import */ var ts_hexGrid_HexGridMaterial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts/hexGrid/HexGridMaterial */ \"./src/ts/hexGrid/HexGridMaterial.ts\");\n\n\n\nclass StudyHexGrid {\n    constructor() {\n        const scene = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initScene();\n        scene.fog = new three__WEBPACK_IMPORTED_MODULE_0__[\"Fog\"](0x000000, 80, 160);\n        ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initLight(scene);\n        const camera = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initCamera(scene, StudyHexGrid.W, StudyHexGrid.H);\n        const renderer = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initRenderer(StudyHexGrid.W, StudyHexGrid.H);\n        const control = ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initControl(camera, renderer);\n        ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initHelper(scene);\n        const mat = this.initObject(scene);\n        ts_Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].render(control, renderer, scene, camera, () => {\n            mat.time += 0.0333;\n        });\n    }\n    initObject(scene) {\n        const spot = new three__WEBPACK_IMPORTED_MODULE_0__[\"PointLight\"](0xffffff, 3, 0, 2);\n        spot.position.set(10, 20, 30);\n        scene.add(spot);\n        const helper = new three__WEBPACK_IMPORTED_MODULE_0__[\"PointLightHelper\"](spot);\n        scene.add(helper);\n        const geo = new three__WEBPACK_IMPORTED_MODULE_0__[\"SphereGeometry\"](10, 64, 64);\n        const mat = new ts_hexGrid_HexGridMaterial__WEBPACK_IMPORTED_MODULE_2__[\"HexGridMaterial\"]({\n            opacity: 0.5,\n            // side:DoubleSide,\n            fog: scene.fog !== undefined\n        });\n        mat.color = new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0xff6666);\n        // mat.alphaTest = 0.5;\n        // mat.glowColor = new Color(0x66ffff);\n        // mat.glowStrength = 0.5;\n        const mesh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geo, mat);\n        scene.add(mesh);\n        return mat;\n    }\n}\nStudyHexGrid.W = 640;\nStudyHexGrid.H = 480;\nwindow.onload = () => {\n    const study = new StudyHexGrid();\n};\n\n\n//# sourceURL=webpack:///./src/ts/StudyHexGrid.ts?");

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

/***/ "./src/ts/hexGrid/HexGridMaterial.ts":
/*!*******************************************!*\
  !*** ./src/ts/hexGrid/HexGridMaterial.ts ***!
  \*******************************************/
/*! exports provided: HexGridMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HexGridMaterial\", function() { return HexGridMaterial; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var ts_customPhongMaterial_CustomPhongMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts/customPhongMaterial/CustomPhongMaterial */ \"./src/ts/customPhongMaterial/CustomPhongMaterial.ts\");\n/* harmony import */ var _Shader_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shader.frag */ \"./src/ts/hexGrid/Shader.frag\");\n/* harmony import */ var _Shader_frag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Shader_frag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _customPhongMaterial_Shader_vert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPhongMaterial/Shader.vert */ \"./src/ts/customPhongMaterial/Shader.vert\");\n/* harmony import */ var _customPhongMaterial_Shader_vert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_customPhongMaterial_Shader_vert__WEBPACK_IMPORTED_MODULE_3__);\n/**\n * 地球儀用の緯度経度グリッド\n */\n\n\n// @ts-ignore\n\n// @ts-ignore\n\nclass HexGridMaterial extends ts_customPhongMaterial_CustomPhongMaterial__WEBPACK_IMPORTED_MODULE_1__[\"CustomPhongMaterial\"] {\n    constructor(parameters) {\n        super(_customPhongMaterial_Shader_vert__WEBPACK_IMPORTED_MODULE_3___default.a, _Shader_frag__WEBPACK_IMPORTED_MODULE_2___default.a, parameters);\n        this._color = new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0xffff00);\n        this._time = 0.0;\n    }\n    get time() {\n        return this._time;\n    }\n    set time(value) {\n        this._time = value;\n        if (this.uniforms && this.uniforms.time) {\n            this.uniforms.time.value = value;\n        }\n    }\n    get color() {\n        return this._color;\n    }\n    set color(value) {\n        this._color = value;\n        if (this.uniforms && this.uniforms.color) {\n            this.uniforms.color.value = value;\n        }\n    }\n    initUniforms() {\n        this.uniforms = three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsUtils\"].merge([\n            ts_customPhongMaterial_CustomPhongMaterial__WEBPACK_IMPORTED_MODULE_1__[\"CustomPhongMaterial\"].getBasicUniforms(),\n            {\n                color: { value: new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0xffffff) },\n                time: { value: 0.0 }\n            }\n        ]);\n    }\n    initDefaultSetting(parameters) {\n        super.initDefaultSetting(parameters);\n        if (parameters.transparent == null) {\n            this.transparent = true;\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/hexGrid/HexGridMaterial.ts?");

/***/ }),

/***/ "./src/ts/hexGrid/Shader.frag":
/*!************************************!*\
  !*** ./src/ts/hexGrid/Shader.frag ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/**\\n * 6角形シェーダー\\n * {@link http://glslsandbox.com/e#55098}\\n */\\n\\n#define PHONG\\n\\nuniform vec3 diffuse;\\nuniform vec3 emissive;\\nuniform vec3 specular;\\nuniform float shininess;\\n\\nvarying vec3 meshPosition;\\nvarying vec2 uvPosition;\\n\\nuniform float opacity;\\nuniform vec3 color;\\nuniform float time;\\n\\n#include <common>\\n#include <packing>\\n#include <dithering_pars_fragment>\\n#include <color_pars_fragment>\\n#include <uv_pars_fragment>\\n#include <uv2_pars_fragment>\\n#include <map_pars_fragment>\\n#include <alphamap_pars_fragment>\\n#include <aomap_pars_fragment>\\n#include <lightmap_pars_fragment>\\n#include <emissivemap_pars_fragment>\\n#include <envmap_pars_fragment>\\n#include <gradientmap_pars_fragment>\\n#include <fog_pars_fragment>\\n#include <bsdfs>\\n#include <lights_pars_begin>\\n#include <lights_phong_pars_fragment>\\n#include <shadowmap_pars_fragment>\\n#include <bumpmap_pars_fragment>\\n#include <normalmap_pars_fragment>\\n#include <specularmap_pars_fragment>\\n#include <logdepthbuf_pars_fragment>\\n#include <clipping_planes_pars_fragment>\\n\\nfloat hexDist(vec2 p)\\n{\\n    p = abs(p);\\n    float d = dot(p, normalize(vec2(1.0, 1.73)));\\n    return max(d, p.x);\\n}\\n\\nvec4 hexCoords(vec2 uv)\\n{\\n    vec2 r = vec2(1.0, 1.73);\\n    vec2 h = r * 0.5;\\n    vec2 a = mod(uv, r) - h;\\n    vec2 b = mod(uv - h, r) - h;\\n\\n    vec2 gv = length(a) < length(b) ? a : b;\\n    vec2 id = uv - gv;\\n\\n    float x = atan(gv.x, gv.y);\\n    float y = 0.5 - hexDist(gv);\\n\\n    return vec4(x, y, id);\\n}\\n\\n\\nvoid main() {\\n\\n\\n    #include <clipping_planes_fragment>\\n\\n    vec4 diffuseColor = vec4( diffuse, opacity );\\n\\n    ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\\n    vec3 totalEmissiveRadiance = emissive;\\n    #include <logdepthbuf_fragment>\\n\\n    //#include <map_fragment>\\n    //#include <color_fragment>\\n    float hexScale = 32.0;\\n    float speed = -0.5;\\n    float base = 0.001;\\n    float waveFrequency = 0.2;\\n    float waveDepth = 2.0;\\n\\n    vec4 hc = hexCoords( uvPosition * hexScale );\\n\\n    float ntime = time * speed;\\n    //hc.wで縦方向、hc.zで横方向に、hc.zwで放射状に明滅\\n    float wavy = pow( sin( (length(hc.w * waveFrequency) - ntime) ), waveDepth) + base;\\n\\n    float gridLine = smoothstep(0.03, 0.05, hc.y);\\n    float alpha = gridLine * wavy;\\n    vec3 cl = color * alpha;\\n\\n    diffuseColor *= vec4(cl, alpha);\\n\\n    #include <alphamap_fragment>\\n    #include <alphatest_fragment>\\n    #include <specularmap_fragment>\\n    #include <normal_fragment_begin>\\n    #include <normal_fragment_maps>\\n    #include <emissivemap_fragment>\\n    // accumulation\\n    #include <lights_phong_fragment>\\n    #include <lights_fragment_begin>\\n    #include <lights_fragment_maps>\\n    #include <lights_fragment_end>\\n    // modulation\\n    #include <aomap_fragment>\\n    vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\\n    #include <envmap_fragment>\\n    gl_FragColor = vec4( outgoingLight, diffuseColor.a );\\n    #include <tonemapping_fragment>\\n    #include <encodings_fragment>\\n    #include <fog_fragment>\\n    #include <premultiplied_alpha_fragment>\\n    #include <dithering_fragment>\\n}\"\n\n//# sourceURL=webpack:///./src/ts/hexGrid/Shader.frag?");

/***/ })

/******/ });