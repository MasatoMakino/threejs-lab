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
/******/ 		"StudyLoopAnimation": 0
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
/******/ 	deferredModules.push(["./src/StudyLoopAnimation.ts","vendor"]);
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

/***/ "./src/CommonGUI.ts":
/*!**************************!*\
  !*** ./src/CommonGUI.ts ***!
  \**************************/
/*! exports provided: CommonGUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CommonGUI\", function() { return CommonGUI; });\nvar CommonGUI = /** @class */ (function () {\n    function CommonGUI() {\n    }\n    CommonGUI.initColorGUI = function (folder, mat, propName) {\n        if (propName === void 0) { propName = \"color\"; }\n        var prop = {};\n        var targetColor = mat[propName];\n        prop[propName] = targetColor.getHex();\n        folder.addColor(prop, propName).onChange(function (val) {\n            targetColor.setHex(val);\n        });\n    };\n    CommonGUI.initMaterialGUI = function (gui, mat, folderName) {\n        if (folderName === void 0) { folderName = \"Material\"; }\n        var folder = gui.addFolder(folderName);\n        this.initMaterialFolder(folder, mat);\n        if (mat.hasOwnProperty(\"emissive\")) {\n            this.initColorGUI(folder, mat, \"emissive\");\n        }\n        folder.open();\n        return folder;\n    };\n    CommonGUI.initMaterialFolder = function (folder, mat) {\n        this.initColorGUI(folder, mat);\n        folder.add(mat, \"transparent\");\n        folder.add(mat, \"opacity\", 0.0, 1.0);\n    };\n    return CommonGUI;\n}());\n\n\n\n//# sourceURL=webpack:///./src/CommonGUI.ts?");

/***/ }),

/***/ "./src/StudyLoopAnimation.ts":
/*!***********************************!*\
  !*** ./src/StudyLoopAnimation.ts ***!
  \***********************************/
/*! exports provided: Study */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Study\", function() { return Study; });\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _clippingSurface_ClippingSurface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clippingSurface/ClippingSurface */ \"./src/clippingSurface/ClippingSurface.ts\");\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Common */ \"./src/Common.ts\");\n/* harmony import */ var _CommonGUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommonGUI */ \"./src/CommonGUI.ts\");\n\n\n\n\n\nvar Study = /** @class */ (function () {\n    function Study() {\n        var scene = _Common__WEBPACK_IMPORTED_MODULE_3__[\"Common\"].initScene();\n        scene.fog = new three__WEBPACK_IMPORTED_MODULE_1__[\"Fog\"](0x000000, 160, 320);\n        _Common__WEBPACK_IMPORTED_MODULE_3__[\"Common\"].initLight(scene);\n        var camera = _Common__WEBPACK_IMPORTED_MODULE_3__[\"Common\"].initCamera(scene, Study.W, Study.H);\n        var renderer = _Common__WEBPACK_IMPORTED_MODULE_3__[\"Common\"].initRenderer(Study.W, Study.H);\n        renderer.localClippingEnabled = true;\n        var control = _Common__WEBPACK_IMPORTED_MODULE_3__[\"Common\"].initControl(camera, renderer);\n        var surface = this.initObject(scene);\n        this.initGUI(surface);\n        _Common__WEBPACK_IMPORTED_MODULE_3__[\"Common\"].render(control, renderer, scene, camera, function () {\n            surface.rotation.x += 0.03;\n            surface.updatePlane();\n        });\n    }\n    Study.prototype.initObject = function (scene) {\n        var spot = new three__WEBPACK_IMPORTED_MODULE_1__[\"PointLight\"](0xffffff, 3, 0, 2);\n        spot.position.set(10, 20, 30);\n        scene.add(spot);\n        var helper = new three__WEBPACK_IMPORTED_MODULE_1__[\"PointLightHelper\"](spot);\n        scene.add(helper);\n        var geo = new three__WEBPACK_IMPORTED_MODULE_1__[\"TorusKnotBufferGeometry\"](10, 3, 64, 32);\n        var plane = new three__WEBPACK_IMPORTED_MODULE_1__[\"Plane\"](new three__WEBPACK_IMPORTED_MODULE_1__[\"Vector3\"](0, 0, -1), 0);\n        var surface = new _clippingSurface_ClippingSurface__WEBPACK_IMPORTED_MODULE_2__[\"ClippingSurface\"](plane, geo, {\n            planeMaterial: new three__WEBPACK_IMPORTED_MODULE_1__[\"MeshBasicMaterial\"]({\n                color: new three__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](0xffffff),\n            }),\n        });\n        scene.add(surface);\n        return surface;\n    };\n    Study.prototype.initGUI = function (surface) {\n        var gui = new dat_gui__WEBPACK_IMPORTED_MODULE_0__[\"GUI\"]();\n        _CommonGUI__WEBPACK_IMPORTED_MODULE_4__[\"CommonGUI\"].initMaterialGUI(gui, surface.planeObject.material, \"Clipping Surface\");\n        var frontFaceFolder = _CommonGUI__WEBPACK_IMPORTED_MODULE_4__[\"CommonGUI\"].initMaterialGUI(gui, surface.frontFace.material, \"FrontFace\");\n        frontFaceFolder.add(surface.frontFace, \"visible\");\n    };\n    Study.W = 640;\n    Study.H = 480;\n    return Study;\n}());\n\nwindow.onload = function () {\n    var study = new Study();\n};\n\n\n//# sourceURL=webpack:///./src/StudyLoopAnimation.ts?");

/***/ }),

/***/ "./src/clippingSurface/ClippingSurface.ts":
/*!************************************************!*\
  !*** ./src/clippingSurface/ClippingSurface.ts ***!
  \************************************************/
/*! exports provided: ClippingSurface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ClippingSurface\", function() { return ClippingSurface; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n/**\n * ClippingPlaneにより切断したジオメトリの、切断面を描画するためのクラスです。\n *\n * 注意 : onBeforeRender関数やRenderループ内でstencilGroupの座標、スケール、回転を変更した場合、変更後にupdatePlane関数を明示的に呼び出してください。planeObjectの更新が行われず、表示が崩れます。\n */\nvar ClippingSurface = /** @class */ (function (_super) {\n    __extends(ClippingSurface, _super);\n    /**\n     *コンストラクタ\n     * @param clippingPlane 表示される切断面\n     * @param allPlanes このジオメトリに影響する全ての切断面。clippingPlaneをさらにクリップするのに使用する。\n     * @param geometry クリップされるジオメトリ\n     * @param option\n     */\n    function ClippingSurface(clippingPlane, geometry, option) {\n        var _this = _super.call(this) || this;\n        /**\n         * planeObjectにplaneの座標をコピーする\n         */\n        _this.updatePlane = function () {\n            _this.plane.coplanarPoint(_this.planeObject.position);\n            _this.planeObject.lookAt(_this.planeObject.position.x - _this.plane.normal.x, _this.planeObject.position.y - _this.plane.normal.y, _this.planeObject.position.z - _this.plane.normal.z);\n        };\n        option = ClippingSurfaceOption.init(option, clippingPlane);\n        _this.plane = clippingPlane;\n        var i = option.allPlanes.indexOf(clippingPlane);\n        _this.stencilGroup = ClippingSurfaceUtil.createPlaneStencilGroup(geometry, clippingPlane, i + 1);\n        _this.add(_this.stencilGroup);\n        _this.planeObject = ClippingSurface.createPlane(geometry, clippingPlane, option.allPlanes, i, option.planeMaterial);\n        _this.planeObject.onBeforeRender = _this.updatePlane;\n        _this.add(_this.planeObject);\n        _this.frontFace = ClippingSurfaceUtil.initFrontFaceMesh(option.allPlanes, geometry, option.frontFaceMaterial);\n        _this.stencilGroup.add(_this.frontFace);\n        _this.frontFace.visible = option.visibleSurface;\n        return _this;\n    }\n    /**\n     * 着色用のプレーンジオメトリを生成する。\n     * @param clippingPlane\n     * @param otherPlanes\n     * @param index\n     */\n    ClippingSurface.createPlane = function (geo, clippingPlane, otherPlanes, index, mat) {\n        geo.computeBoundingSphere();\n        var rad = geo.boundingSphere.radius;\n        var planeGeom = new three__WEBPACK_IMPORTED_MODULE_0__[\"PlaneBufferGeometry\"](rad * 2, rad * 2);\n        if (mat == null) {\n            mat = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshStandardMaterial\"]({\n                color: 0xe91e63,\n                metalness: 0.1,\n                roughness: 0.75,\n            });\n        }\n        ClippingSurfaceUtil.overrideStencilMaterial(mat, clippingPlane, otherPlanes);\n        //プレーンジオメトリオブジェクトを生成。\n        var po = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](planeGeom, mat);\n        po.onAfterRender = function (renderer) {\n            renderer.clearStencil();\n        };\n        po.renderOrder = index + 1.1;\n        return po;\n    };\n    Object.defineProperty(ClippingSurface.prototype, \"rotation\", {\n        get: function () {\n            return this.stencilGroup.rotation;\n        },\n        set: function (val) {\n            this.stencilGroup.rotation.copy(val);\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return ClippingSurface;\n}(three__WEBPACK_IMPORTED_MODULE_0__[\"Group\"]));\n\nvar ClippingSurfaceUtil = /** @class */ (function () {\n    function ClippingSurfaceUtil() {\n    }\n    /**\n     * ステンシル設定がされたFrontFace, BackFaceのグループを生成する。\n     * @param geometry\n     * @param plane\n     * @param renderOrder\n     */\n    ClippingSurfaceUtil.createPlaneStencilGroup = function (geometry, plane, renderOrder) {\n        var group = new three__WEBPACK_IMPORTED_MODULE_0__[\"Group\"]();\n        var base = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshBasicMaterial\"]();\n        base.depthWrite = false;\n        base.depthTest = false;\n        base.colorWrite = false;\n        base.stencilWrite = true;\n        base.stencilFunc = three__WEBPACK_IMPORTED_MODULE_0__[\"AlwaysStencilFunc\"];\n        // back faces\n        var backMesh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geometry, this.getStencilMat(base, three__WEBPACK_IMPORTED_MODULE_0__[\"BackSide\"], plane, three__WEBPACK_IMPORTED_MODULE_0__[\"IncrementWrapStencilOp\"]));\n        backMesh.renderOrder = renderOrder;\n        group.add(backMesh);\n        // front faces\n        var frontMesh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geometry, this.getStencilMat(base, three__WEBPACK_IMPORTED_MODULE_0__[\"FrontSide\"], plane, three__WEBPACK_IMPORTED_MODULE_0__[\"DecrementWrapStencilOp\"]));\n        frontMesh.renderOrder = renderOrder;\n        group.add(frontMesh);\n        return group;\n    };\n    /**\n     * マテリアルにstencilFail時の処理を一括で指定する。\n     * @param mat\n     * @param val\n     */\n    ClippingSurfaceUtil.setStencilOp = function (mat, val) {\n        mat.stencilFail = val;\n        mat.stencilZFail = val;\n        mat.stencilZPass = val;\n    };\n    /**\n     * ステンシルグループ用のマテリアルを生成する。\n     * @param base\n     * @param side\n     * @param plane\n     * @param stencilOp\n     */\n    ClippingSurfaceUtil.getStencilMat = function (base, side, plane, stencilOp) {\n        var mat = base.clone();\n        mat.side = side;\n        mat.clippingPlanes = [plane];\n        ClippingSurfaceUtil.setStencilOp(mat, stencilOp);\n        return mat;\n    };\n    /**\n     * planeObject用マテリアルに必須となる設定を、既存のマテリアルに対して上書きする。\n     * @param mat\n     * @param clippingPlane\n     * @param otherPlanes\n     */\n    ClippingSurfaceUtil.overrideStencilMaterial = function (mat, clippingPlane, otherPlanes) {\n        mat.clippingPlanes = otherPlanes.filter(function (p) { return p !== clippingPlane; });\n        mat.stencilWrite = true;\n        mat.stencilRef = 0;\n        mat.stencilFunc = three__WEBPACK_IMPORTED_MODULE_0__[\"NotEqualStencilFunc\"];\n        ClippingSurfaceUtil.setStencilOp(mat, three__WEBPACK_IMPORTED_MODULE_0__[\"ReplaceStencilOp\"]);\n    };\n    /**\n     * 切り取られたジオメトリの表面を生成する\n     * @param planes\n     * @param geometry\n     * @param mat\n     */\n    ClippingSurfaceUtil.initFrontFaceMesh = function (planes, geometry, mat) {\n        if (mat == null) {\n            mat = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshStandardMaterial\"]({\n                color: 0xffc107,\n                metalness: 0.1,\n                roughness: 0.75,\n            });\n        }\n        this.overrideFrontFaceMaterial(mat, planes);\n        var clippedColorFront = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geometry, mat);\n        clippedColorFront.renderOrder = planes.length * 2;\n        return clippedColorFront;\n    };\n    ClippingSurfaceUtil.overrideFrontFaceMaterial = function (mat, planes) {\n        mat.clippingPlanes = planes;\n    };\n    return ClippingSurfaceUtil;\n}());\nvar ClippingSurfaceOption = /** @class */ (function () {\n    function ClippingSurfaceOption() {\n    }\n    ClippingSurfaceOption.init = function (option, plane) {\n        if (option == null)\n            option = {};\n        if (option.allPlanes == null || option.allPlanes.length === 0) {\n            option.allPlanes = [plane];\n        }\n        if (option.visibleSurface == null) {\n            option.visibleSurface = false;\n        }\n        return option;\n    };\n    return ClippingSurfaceOption;\n}());\n\n\n//# sourceURL=webpack:///./src/clippingSurface/ClippingSurface.ts?");

/***/ })

/******/ });