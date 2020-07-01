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
/******/ 		"StudyNebulaSky": 0
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
/******/ 	deferredModules.push(["./src/StudyNebulaSky.ts","vendor"]);
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

/***/ "./src/NebulaGUI.ts":
/*!**************************!*\
  !*** ./src/NebulaGUI.ts ***!
  \**************************/
/*! exports provided: NebulaGUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NebulaGUI\", function() { return NebulaGUI; });\nvar NebulaGUI = /** @class */ (function () {\n    function NebulaGUI() {\n    }\n    /**\n     * emitterの座標制御\n     * @param gui\n     */\n    NebulaGUI.initEmitterPosition = function (gui, emitters) {\n        var prop = {\n            x: emitters[0].position.x,\n            y: emitters[0].position.y,\n            z: emitters[0].position.z,\n        };\n        var changed = function (val) {\n            emitters.forEach(function (emt) {\n                emt.position.x = prop.x;\n                emt.position.y = prop.y;\n                emt.position.z = prop.z;\n            });\n        };\n        var folder = gui.addFolder(\"Position\");\n        folder.add(prop, \"x\", -30.0, 30.0).onChange(changed);\n        folder.add(prop, \"y\", -30.0, 30.0).onChange(changed);\n        folder.add(prop, \"z\", -30.0, 30.0).onChange(changed);\n        folder.open();\n    };\n    /**\n     * パーティクル生成間隔の制御パネル\n     * @param gui\n     */\n    NebulaGUI.initEmitterRate = function (gui, emitters) {\n        //spanクラスはmin, maxの２つの値をセットにした範囲を指定する型\n        var prop = {\n            numPanA: emitters[0].rate.numPan.a,\n            numPanB: emitters[0].rate.numPan.b,\n            timePan: emitters[0].rate.timePan.a,\n        };\n        var changed = function (val) {\n            emitters.forEach(function (emt) {\n                emt.rate.numPan.a = prop.numPanA;\n                emt.rate.numPan.b = prop.numPanB;\n                emt.rate.timePan.a = prop.timePan;\n            });\n        };\n        /**\n         * 1回で射出されるパーティクルの数, min, max\n         */\n        var folder = gui.addFolder(\"Rate\");\n        folder.add(prop, \"numPanA\", 0.0, 30.0).step(1).onChange(changed);\n        folder.add(prop, \"numPanB\", 0.0, 30.0).step(1).onChange(changed);\n        folder.add(prop, \"timePan\", 0.01, 0.5).step(0.01).onChange(changed);\n        folder.open();\n    };\n    /**\n     * 射出した粒子の到達点および射出角度を制御するパネル\n     * @param gui\n     */\n    NebulaGUI.initRange = function (gui, ranges) {\n        var prop = {\n            radiusMin: ranges[0].radiusPan.a,\n            radiusMax: ranges[0].radiusPan.b,\n            tha: ranges[0].tha,\n        };\n        var changed = function (val) {\n            ranges.forEach(function (range) {\n                range.radiusPan.a = prop.radiusMin;\n                range.radiusPan.b = prop.radiusMax;\n                range.tha = prop.tha;\n            });\n        };\n        var folder = gui.addFolder(\"RadialVelocity\");\n        folder.add(prop, \"radiusMin\", 0.0, 45.0).step(0.1).onChange(changed);\n        folder.add(prop, \"radiusMax\", 0.0, 45.0).step(0.1).onChange(changed);\n        folder.add(prop, \"tha\", 0.0, Math.PI).step(0.1).onChange(changed);\n        folder.open();\n    };\n    /**\n     * Spriteのサイズを制御するパネル\n     * @param gui\n     */\n    NebulaGUI.initRadius = function (gui, radiusInitializers) {\n        var prop = {\n            min: radiusInitializers[0].radius.a,\n            max: radiusInitializers[0].radius.b,\n        };\n        var changed = function (val) {\n            radiusInitializers.forEach(function (rad) {\n                rad.radius.a = prop.min;\n                rad.radius.b = prop.max;\n            });\n        };\n        var folder = gui.addFolder(\"Initial Sprite Size\");\n        folder.add(prop, \"min\", 0.0, 45.0).step(0.1).onChange(changed);\n        folder.add(prop, \"max\", 0.0, 45.0).step(0.1).onChange(changed);\n        folder.open();\n    };\n    /**\n     * Spriteの寿命を制御するパネル\n     * @param gui\n     */\n    NebulaGUI.initLife = function (gui, lifeInitializers) {\n        //spanクラスはmin, maxの２つの値をセットにした範囲を指定する型\n        var span = lifeInitializers[0].lifePan;\n        var prop = {\n            min: span.a,\n            max: span.b,\n        };\n        var changed = function (val) {\n            lifeInitializers.forEach(function (life) {\n                life.lifePan.a = prop.min;\n                life.lifePan.b = prop.max;\n            });\n        };\n        var folder = gui.addFolder(\"Life\");\n        folder.add(prop, \"min\", 0.0, 12.0).step(0.1).onChange(changed);\n        folder.add(prop, \"max\", 0.0, 24.0).step(0.1).onChange(changed);\n        folder.open();\n    };\n    NebulaGUI.initAlpha = function (gui, alphaBehaviours) {\n        var prop = {\n            start: alphaBehaviours[0].alphaA.a,\n            end: alphaBehaviours[0].alphaB.a,\n        };\n        var changed = function (val) {\n            alphaBehaviours.forEach(function (alpha) {\n                alpha.alphaA.a = prop.start;\n                alpha.alphaA.b = prop.start;\n                alpha.alphaB.a = prop.end;\n                alpha.alphaB.b = prop.end;\n            });\n        };\n        var folder = gui.addFolder(\"Alpha\");\n        folder.add(prop, \"start\", 0.0, 1.0).step(0.1).onChange(changed);\n        folder.add(prop, \"end\", 0.0, 1.0).step(0.1).onChange(changed);\n        folder.open();\n    };\n    NebulaGUI.initScale = function (gui, scaleBehaviours) {\n        var prop = {\n            start: scaleBehaviours[0].scaleA.a,\n            end: scaleBehaviours[0].scaleB.a,\n        };\n        var changed = function (val) {\n            scaleBehaviours.forEach(function (scale) {\n                scale.scaleA.a = prop.start;\n                scale.scaleA.b = prop.start;\n                scale.scaleB.a = prop.end;\n                scale.scaleB.b = prop.end;\n            });\n        };\n        var folder = gui.addFolder(\"Scale\");\n        folder.add(prop, \"start\", 0.0, 3.0).step(0.1).onChange(changed);\n        folder.add(prop, \"end\", 0.0, 3.0).step(0.1).onChange(changed);\n        folder.open();\n    };\n    NebulaGUI.initColor = function (gui, colors) {\n        var prop = {\n            start: colors[0].colorA.colors[0].getHex(),\n            end: colors[0].colorB.colors[0].getHex(),\n        };\n        var changed = function () {\n            colors.forEach(function (color) {\n                color.colorA.colors[0].setHex(prop.start);\n                color.colorB.colors[0].setHex(prop.end);\n            });\n        };\n        var folder = gui.addFolder(\"Color\");\n        folder.addColor(prop, \"start\").onChange(changed);\n        folder.addColor(prop, \"end\").onChange(changed);\n        folder.open();\n    };\n    return NebulaGUI;\n}());\n\n\n\n//# sourceURL=webpack:///./src/NebulaGUI.ts?");

/***/ }),

/***/ "./src/StudyNebulaSky.ts":
/*!*******************************!*\
  !*** ./src/StudyNebulaSky.ts ***!
  \*******************************/
/*! exports provided: Study */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Study\", function() { return Study; });\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_nebula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three-nebula */ \"./node_modules/three-nebula/build/three-nebula.js\");\n/* harmony import */ var three_nebula__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three_nebula__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Common */ \"./src/Common.ts\");\n/* harmony import */ var _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NebulaGUI */ \"./src/NebulaGUI.ts\");\n\n\n\n\n\n\n/**\n * パーティクルエンジンによる雲表現の習作\n *\n * SkyBox textures : Three.js\n * https://github.com/mrdoob/three.js/tree/master/examples/textures/cube/skybox\n *\n * Cloud textures : textures4photoshop\n * http://www.textures4photoshop.com/tex/clouds-and-sky/free-clouds-sky-overlay-png-for-photoshop.aspx\n */\nvar Study = /** @class */ (function () {\n    function Study() {\n        var scene = _Common__WEBPACK_IMPORTED_MODULE_3__[\"Common\"].initScene();\n        this.initSkyBox(scene);\n        _Common__WEBPACK_IMPORTED_MODULE_3__[\"Common\"].initLight(scene);\n        scene.fog = new three__WEBPACK_IMPORTED_MODULE_1__[\"Fog\"](0x998877, 60, 3000);\n        var camera = _Common__WEBPACK_IMPORTED_MODULE_3__[\"Common\"].initCamera(scene, Study.W, Study.H, 1, 3000);\n        var renderer = _Common__WEBPACK_IMPORTED_MODULE_3__[\"Common\"].initRenderer(Study.W, Study.H);\n        var control = _Common__WEBPACK_IMPORTED_MODULE_3__[\"Common\"].initControl(camera, renderer);\n        _Common__WEBPACK_IMPORTED_MODULE_3__[\"Common\"].initHelper(scene);\n        this.initObject(scene);\n        _Common__WEBPACK_IMPORTED_MODULE_3__[\"Common\"].render(control, renderer, scene, camera, function () {\n            //this.system.update();\n        });\n        this.initGUI();\n    }\n    Study.prototype.initSkyBox = function (scene) {\n        var cubeLoader = new three__WEBPACK_IMPORTED_MODULE_1__[\"CubeTextureLoader\"]();\n        cubeLoader.setPath(\"./textures/skybox/\");\n        var cubeTexture = cubeLoader.load([\n            \"px.jpg\",\n            \"nx.jpg\",\n            \"py.jpg\",\n            \"ny.jpg\",\n            \"pz.jpg\",\n            \"nz.jpg\",\n        ]);\n        scene.background = cubeTexture;\n    };\n    Study.prototype.initObject = function (scene) {\n        this.system = new three_nebula__WEBPACK_IMPORTED_MODULE_2___default.a();\n        this.emitter = new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Emitter\"]();\n        var renderer = new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"SpriteRenderer\"](scene, three__WEBPACK_IMPORTED_MODULE_1__);\n        this.range = new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"RadialVelocity\"](8, new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Vector3D\"](0, 1, 0), 75);\n        this.radius = new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Radius\"](30, 40);\n        this.life = new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Life\"](20);\n        var loader = new three__WEBPACK_IMPORTED_MODULE_1__[\"TextureLoader\"]();\n        var urlArray = [\n            \"./textures/cloud/cloud01.png\",\n            \"./textures/cloud/cloud02.png\",\n            \"./textures/cloud/cloud03.png\",\n            \"./textures/cloud/cloud04.png\",\n        ];\n        var sprites = urlArray.map(function (url) {\n            return new three__WEBPACK_IMPORTED_MODULE_1__[\"Sprite\"](new three__WEBPACK_IMPORTED_MODULE_1__[\"SpriteMaterial\"]({\n                map: loader.load(url),\n                transparent: true,\n                fog: scene.fog !== undefined,\n            }));\n        });\n        var body = new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Body\"](sprites);\n        this.alpha = new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Alpha\"](0.75, 0.0);\n        this.scale = new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Scale\"](1.0, 2.0);\n        this.color = new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Color\"](new three__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](0xbbb4aa), new three__WEBPACK_IMPORTED_MODULE_1__[\"Color\"](0xccc4bb));\n        this.emitter\n            .setRate(new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Rate\"](new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Span\"](1, 2), 0.33))\n            .setInitializers([\n            new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Position\"](new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"SphereZone\"](0, 0, 0, 16.0)),\n            new three_nebula__WEBPACK_IMPORTED_MODULE_2__[\"Mass\"](1),\n            this.radius,\n            this.life,\n            this.range,\n            body,\n        ])\n            .setBehaviours([this.alpha, this.scale, this.color])\n            .emit();\n        this.emitter.position.y = -16.0;\n        this.system.addEmitter(this.emitter).addRenderer(renderer);\n        //nフレーム分先行してパーティクルの生成を行う。\n        for (var i = 0; i < 300; i++) {\n            this.emitter.update(0.033);\n        }\n    };\n    Study.prototype.initBody = function () { };\n    Study.prototype.initGUI = function () {\n        var gui = new dat_gui__WEBPACK_IMPORTED_MODULE_0__[\"GUI\"]();\n        var folder = gui.addFolder(\"Emitter\");\n        folder.open();\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__[\"NebulaGUI\"].initEmitterPosition(folder, [this.emitter]);\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__[\"NebulaGUI\"].initEmitterRate(folder, [this.emitter]);\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__[\"NebulaGUI\"].initRange(folder, [this.range]);\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__[\"NebulaGUI\"].initRadius(folder, [this.radius]);\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__[\"NebulaGUI\"].initLife(folder, [this.life]);\n        var folderBehaviour = gui.addFolder(\"Behaviour\");\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__[\"NebulaGUI\"].initAlpha(folderBehaviour, [this.alpha]);\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__[\"NebulaGUI\"].initScale(folderBehaviour, [this.scale]);\n        _NebulaGUI__WEBPACK_IMPORTED_MODULE_4__[\"NebulaGUI\"].initColor(folderBehaviour, [this.color]);\n        folderBehaviour.open();\n    };\n    Study.W = 640;\n    Study.H = 480;\n    return Study;\n}());\n\nwindow.onload = function () {\n    var study = new Study();\n};\n\n\n//# sourceURL=webpack:///./src/StudyNebulaSky.ts?");

/***/ })

/******/ });