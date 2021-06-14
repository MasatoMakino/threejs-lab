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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Common\": () => (/* binding */ Common)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\n\nclass Common {\n    static initScene() {\n        const scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();\n        return scene;\n    }\n    static initLight(scene) {\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_1__.AmbientLight(0xffffff, 1.0);\n        scene.add(ambientLight);\n        return ambientLight;\n    }\n    static initCamera(scene, W, H, near = 1, far = 400) {\n        const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(45, W / H, near, far);\n        camera.position.set(0, 0, 100);\n        camera.updateMatrixWorld(false);\n        scene.add(camera);\n        return camera;\n    }\n    static initControl(camera, render) {\n        let domElement;\n        if (render) {\n            domElement = render.domElement;\n        }\n        const control = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(camera, domElement);\n        control.update();\n        return control;\n    }\n    static initRenderer(W, H, color = 0x000000, id = \"webgl-canvas\", antialias = true) {\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({\n            canvas: document.getElementById(id),\n            antialias: antialias,\n        });\n        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_1__.Color(color));\n        renderer.setSize(W, H);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        return renderer;\n    }\n    static initHelper(scene) {\n        const axesHelper = new three__WEBPACK_IMPORTED_MODULE_1__.AxesHelper(30);\n        scene.add(axesHelper);\n    }\n    static render(control, renderer, scene, camera, onBeforeRender) {\n        const rendering = () => {\n            if (onBeforeRender) {\n                onBeforeRender();\n            }\n            control.update();\n            renderer.render(scene, camera);\n            requestAnimationFrame(rendering);\n        };\n        rendering();\n    }\n}\n\n\n//# sourceURL=webpack://threejs-lab/./src/Common.ts?");

/***/ }),

/***/ "./src/CommonGUI.ts":
/*!**************************!*\
  !*** ./src/CommonGUI.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CommonGUI\": () => (/* binding */ CommonGUI)\n/* harmony export */ });\nclass CommonGUI {\n    static initColorGUI(folder, mat, propName = \"color\") {\n        const prop = {};\n        const targetColor = mat[propName];\n        prop[propName] = targetColor.getHex();\n        folder.addColor(prop, propName).onChange((val) => {\n            targetColor.setHex(val);\n        });\n    }\n    static initMaterialGUI(gui, mat, folderName = \"Material\") {\n        const folder = gui.addFolder(folderName);\n        this.initMaterialFolder(folder, mat);\n        if (mat.hasOwnProperty(\"emissive\")) {\n            this.initColorGUI(folder, mat, \"emissive\");\n        }\n        folder.open();\n        return folder;\n    }\n    static initMaterialFolder(folder, mat) {\n        this.initColorGUI(folder, mat);\n        folder.add(mat, \"transparent\");\n        folder.add(mat, \"opacity\", 0.0, 1.0);\n    }\n}\n\n\n//# sourceURL=webpack://threejs-lab/./src/CommonGUI.ts?");

/***/ }),

/***/ "./src/StudyLoopAnimation.ts":
/*!***********************************!*\
  !*** ./src/StudyLoopAnimation.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Study\": () => (/* binding */ Study)\n/* harmony export */ });\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _clippingSurface_ClippingSurface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clippingSurface/ClippingSurface */ \"./src/clippingSurface/ClippingSurface.ts\");\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Common */ \"./src/Common.ts\");\n/* harmony import */ var _CommonGUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommonGUI */ \"./src/CommonGUI.ts\");\n\n\n\n\n\nclass Study {\n    constructor() {\n        const scene = _Common__WEBPACK_IMPORTED_MODULE_2__.Common.initScene();\n        scene.fog = new three__WEBPACK_IMPORTED_MODULE_4__.Fog(0x000000, 160, 320);\n        _Common__WEBPACK_IMPORTED_MODULE_2__.Common.initLight(scene);\n        const camera = _Common__WEBPACK_IMPORTED_MODULE_2__.Common.initCamera(scene, Study.W, Study.H);\n        const renderer = _Common__WEBPACK_IMPORTED_MODULE_2__.Common.initRenderer(Study.W, Study.H);\n        renderer.localClippingEnabled = true;\n        const control = _Common__WEBPACK_IMPORTED_MODULE_2__.Common.initControl(camera, renderer);\n        const surface = this.initObject(scene);\n        this.initGUI(surface);\n        _Common__WEBPACK_IMPORTED_MODULE_2__.Common.render(control, renderer, scene, camera, () => {\n            surface.rotation.x += 0.03;\n            surface.updatePlane();\n        });\n    }\n    initObject(scene) {\n        const spot = new three__WEBPACK_IMPORTED_MODULE_4__.PointLight(0xffffff, 3, 0, 2);\n        spot.position.set(10, 20, 30);\n        scene.add(spot);\n        const helper = new three__WEBPACK_IMPORTED_MODULE_4__.PointLightHelper(spot);\n        scene.add(helper);\n        const geo = new three__WEBPACK_IMPORTED_MODULE_4__.TorusKnotBufferGeometry(10, 3, 64, 32);\n        const plane = new three__WEBPACK_IMPORTED_MODULE_4__.Plane(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, -1), 0);\n        const surface = new _clippingSurface_ClippingSurface__WEBPACK_IMPORTED_MODULE_1__.ClippingSurface(plane, geo, {\n            planeMaterial: new three__WEBPACK_IMPORTED_MODULE_4__.MeshBasicMaterial({\n                color: new three__WEBPACK_IMPORTED_MODULE_4__.Color(0xffffff),\n            }),\n        });\n        scene.add(surface);\n        return surface;\n    }\n    initGUI(surface) {\n        const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_0__.GUI();\n        _CommonGUI__WEBPACK_IMPORTED_MODULE_3__.CommonGUI.initMaterialGUI(gui, surface.planeObject.material, \"Clipping Surface\");\n        const frontFaceFolder = _CommonGUI__WEBPACK_IMPORTED_MODULE_3__.CommonGUI.initMaterialGUI(gui, surface.frontFace.material, \"FrontFace\");\n        frontFaceFolder.add(surface.frontFace, \"visible\");\n    }\n}\nStudy.W = 640;\nStudy.H = 480;\nwindow.onload = () => {\n    const study = new Study();\n};\n\n\n//# sourceURL=webpack://threejs-lab/./src/StudyLoopAnimation.ts?");

/***/ }),

/***/ "./src/clippingSurface/ClippingSurface.ts":
/*!************************************************!*\
  !*** ./src/clippingSurface/ClippingSurface.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ClippingSurface\": () => (/* binding */ ClippingSurface)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n/**\n * ClippingPlaneにより切断したジオメトリの、切断面を描画するためのクラスです。\n *\n * 注意 : onBeforeRender関数やRenderループ内でstencilGroupの座標、スケール、回転を変更した場合、変更後にupdatePlane関数を明示的に呼び出してください。planeObjectの更新が行われず、表示が崩れます。\n */\nclass ClippingSurface extends three__WEBPACK_IMPORTED_MODULE_0__.Group {\n    /**\n     *コンストラクタ\n     * @param clippingPlane 表示される切断面\n     * @param geometry クリップされるジオメトリ\n     * @param option\n     */\n    constructor(clippingPlane, geometry, option) {\n        super();\n        /**\n         * planeObjectにplaneの座標をコピーする\n         */\n        this.updatePlane = () => {\n            this.plane.coplanarPoint(this.planeObject.position);\n            this.planeObject.lookAt(this.planeObject.position.x - this.plane.normal.x, this.planeObject.position.y - this.plane.normal.y, this.planeObject.position.z - this.plane.normal.z);\n        };\n        option = ClippingSurfaceOption.init(option, clippingPlane);\n        this.plane = clippingPlane;\n        const i = option.allPlanes.indexOf(clippingPlane);\n        this.stencilGroup = ClippingSurfaceUtil.createPlaneStencilGroup(geometry, clippingPlane, i + 1);\n        this.add(this.stencilGroup);\n        this.planeObject = ClippingSurface.createPlane(geometry, clippingPlane, option.allPlanes, i, option.planeMaterial);\n        this.planeObject.onBeforeRender = this.updatePlane;\n        this.add(this.planeObject);\n        this.frontFace = ClippingSurfaceUtil.initFrontFaceMesh(option.allPlanes, geometry, option.frontFaceMaterial);\n        this.stencilGroup.add(this.frontFace);\n        this.frontFace.visible = option.visibleSurface;\n    }\n    /**\n     * 着色用のプレーンジオメトリを生成する。\n     * @param geo\n     * @param clippingPlane\n     * @param otherPlanes\n     * @param index\n     * @param mat\n     */\n    static createPlane(geo, clippingPlane, otherPlanes, index, mat) {\n        geo.computeBoundingSphere();\n        const rad = geo.boundingSphere.radius;\n        const planeGeom = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneBufferGeometry(rad * 2, rad * 2);\n        if (mat == null) {\n            mat = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({\n                color: 0xe91e63,\n                metalness: 0.1,\n                roughness: 0.75,\n            });\n        }\n        ClippingSurfaceUtil.overrideStencilMaterial(mat, clippingPlane, otherPlanes);\n        //プレーンジオメトリオブジェクトを生成。\n        const po = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(planeGeom, mat);\n        po.onAfterRender = function (renderer) {\n            renderer.clearStencil();\n        };\n        po.renderOrder = index + 1.1;\n        return po;\n    }\n    //@ts-ignore : TODO update\n    get rotation() {\n        return this.stencilGroup.rotation;\n    }\n    //@ts-ignore : TODO update\n    set rotation(val) {\n        this.stencilGroup.rotation.copy(val);\n    }\n}\nclass ClippingSurfaceUtil {\n    /**\n     * ステンシル設定がされたFrontFace, BackFaceのグループを生成する。\n     * @param geometry\n     * @param plane\n     * @param renderOrder\n     */\n    static createPlaneStencilGroup(geometry, plane, renderOrder) {\n        const group = new three__WEBPACK_IMPORTED_MODULE_0__.Group();\n        const base = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial();\n        base.depthWrite = false;\n        base.depthTest = false;\n        base.colorWrite = false;\n        base.stencilWrite = true;\n        base.stencilFunc = three__WEBPACK_IMPORTED_MODULE_0__.AlwaysStencilFunc;\n        // back faces\n        const backMesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, this.getStencilMat(base, three__WEBPACK_IMPORTED_MODULE_0__.BackSide, plane, three__WEBPACK_IMPORTED_MODULE_0__.IncrementWrapStencilOp));\n        backMesh.renderOrder = renderOrder;\n        group.add(backMesh);\n        // front faces\n        const frontMesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, this.getStencilMat(base, three__WEBPACK_IMPORTED_MODULE_0__.FrontSide, plane, three__WEBPACK_IMPORTED_MODULE_0__.DecrementWrapStencilOp));\n        frontMesh.renderOrder = renderOrder;\n        group.add(frontMesh);\n        return group;\n    }\n    /**\n     * マテリアルにstencilFail時の処理を一括で指定する。\n     * @param mat\n     * @param val\n     */\n    static setStencilOp(mat, val) {\n        mat.stencilFail = val;\n        mat.stencilZFail = val;\n        mat.stencilZPass = val;\n    }\n    /**\n     * ステンシルグループ用のマテリアルを生成する。\n     * @param base\n     * @param side\n     * @param plane\n     * @param stencilOp\n     */\n    static getStencilMat(base, side, plane, stencilOp) {\n        const mat = base.clone();\n        mat.side = side;\n        mat.clippingPlanes = [plane];\n        ClippingSurfaceUtil.setStencilOp(mat, stencilOp);\n        return mat;\n    }\n    /**\n     * planeObject用マテリアルに必須となる設定を、既存のマテリアルに対して上書きする。\n     * @param mat\n     * @param clippingPlane\n     * @param otherPlanes\n     */\n    static overrideStencilMaterial(mat, clippingPlane, otherPlanes) {\n        mat.clippingPlanes = otherPlanes.filter((p) => p !== clippingPlane);\n        mat.stencilWrite = true;\n        mat.stencilRef = 0;\n        mat.stencilFunc = three__WEBPACK_IMPORTED_MODULE_0__.NotEqualStencilFunc;\n        ClippingSurfaceUtil.setStencilOp(mat, three__WEBPACK_IMPORTED_MODULE_0__.ReplaceStencilOp);\n    }\n    /**\n     * 切り取られたジオメトリの表面を生成する\n     * @param planes\n     * @param geometry\n     * @param mat\n     */\n    static initFrontFaceMesh(planes, geometry, mat) {\n        if (mat == null) {\n            mat = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({\n                color: 0xffc107,\n                metalness: 0.1,\n                roughness: 0.75,\n            });\n        }\n        this.overrideFrontFaceMaterial(mat, planes);\n        const clippedColorFront = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, mat);\n        clippedColorFront.renderOrder = planes.length * 2;\n        return clippedColorFront;\n    }\n    static overrideFrontFaceMaterial(mat, planes) {\n        mat.clippingPlanes = planes;\n    }\n}\nclass ClippingSurfaceOption {\n    static init(option, plane) {\n        if (option == null)\n            option = {};\n        if (option.allPlanes == null || option.allPlanes.length === 0) {\n            option.allPlanes = [plane];\n        }\n        if (option.visibleSurface == null) {\n            option.visibleSurface = false;\n        }\n        return option;\n    }\n}\n\n\n//# sourceURL=webpack://threejs-lab/./src/clippingSurface/ClippingSurface.ts?");

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
/******/ 					result = fn();
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
/******/ 			"StudyLoopAnimation": 0
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
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/StudyLoopAnimation.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;