!function(t){function e(e){for(var a,r,s=e[0],d=e[1],c=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);for(l&&l(e);p.length;)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var d=n[s];0!==i[d]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={9:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=d;o.push([32,0]),n()}({1:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var a=n(0),i=n(4);class o{static initScene(){return new a.Scene}static initLight(t){const e=new a.AmbientLight(16777215,1);return t.add(e),e}static initCamera(t,e,n,i=1,o=400){const r=new a.PerspectiveCamera(45,e/n,i,o);return r.position.set(0,0,100),r.updateMatrixWorld(!1),t.add(r),r}static initControl(t,e){let n;e&&(n=e.domElement);const a=new i.a(t,n);return a.update(),a}static initRenderer(t,e,n=0,i="webgl-canvas",o=!0){const r=new a.WebGLRenderer({canvas:document.getElementById(i),antialias:o});return r.setClearColor(new a.Color(n)),r.setSize(t,e),r.setPixelRatio(window.devicePixelRatio),r}static initHelper(t){const e=new a.AxesHelper(30);t.add(e)}static render(t,e,n,a,i){const o=()=>{i&&i(),t.update(),e.render(n,a),requestAnimationFrame(o)};o()}}},3:function(t,e,n){"use strict";n.d(e,"a",function(){return a});class a{static initEmitterPosition(t,e){const n={x:e[0].position.x,y:e[0].position.y,z:e[0].position.z},a=t=>{e.forEach(t=>{t.position.x=n.x,t.position.y=n.y,t.position.z=n.z})},i=t.addFolder("Position");i.add(n,"x",-30,30).onChange(a),i.add(n,"y",-30,30).onChange(a),i.add(n,"z",-30,30).onChange(a),i.open()}static initEmitterRate(t,e){const n={numPanA:e[0].rate.numPan.a,numPanB:e[0].rate.numPan.b,timePan:e[0].rate.timePan.a},a=t=>{e.forEach(t=>{t.rate.numPan.a=n.numPanA,t.rate.numPan.b=n.numPanB,t.rate.timePan.a=n.timePan})},i=t.addFolder("Rate");i.add(n,"numPanA",0,30).step(1).onChange(a),i.add(n,"numPanB",0,30).step(1).onChange(a),i.add(n,"timePan",.01,.5).step(.01).onChange(a),i.open()}static initRange(t,e){const n={radiusMin:e[0].radiusPan.a,radiusMax:e[0].radiusPan.b,tha:e[0].tha},a=t=>{e.forEach(t=>{t.radiusPan.a=n.radiusMin,t.radiusPan.b=n.radiusMax,t.tha=n.tha})},i=t.addFolder("RadialVelocity");i.add(n,"radiusMin",0,45).step(.1).onChange(a),i.add(n,"radiusMax",0,45).step(.1).onChange(a),i.add(n,"tha",0,Math.PI).step(.1).onChange(a),i.open()}static initRadius(t,e){const n={min:e[0].radius.a,max:e[0].radius.b},a=t=>{e.forEach(t=>{t.radius.a=n.min,t.radius.b=n.max})},i=t.addFolder("Initial Sprite Size");i.add(n,"min",0,45).step(.1).onChange(a),i.add(n,"max",0,45).step(.1).onChange(a),i.open()}static initLife(t,e){const n=e[0].lifePan,a={min:n.a,max:n.b},i=t=>{e.forEach(t=>{t.lifePan.a=a.min,t.lifePan.b=a.max})},o=t.addFolder("Life");o.add(a,"min",0,12).step(.1).onChange(i),o.add(a,"max",0,24).step(.1).onChange(i),o.open()}static initAlpha(t,e){const n={start:e[0].alphaA.a,end:e[0].alphaB.a},a=t=>{e.forEach(t=>{t.alphaA.a=n.start,t.alphaA.b=n.start,t.alphaB.a=n.end,t.alphaB.b=n.end})},i=t.addFolder("Alpha");i.add(n,"start",0,1).step(.1).onChange(a),i.add(n,"end",0,1).step(.1).onChange(a),i.open()}static initScale(t,e){const n={start:e[0].scaleA.a,end:e[0].scaleB.a},a=t=>{e.forEach(t=>{t.scaleA.a=n.start,t.scaleA.b=n.start,t.scaleB.a=n.end,t.scaleB.b=n.end})},i=t.addFolder("Scale");i.add(n,"start",0,3).step(.1).onChange(a),i.add(n,"end",0,3).step(.1).onChange(a),i.open()}static initColor(t,e){const n={start:e[0].colorA.colors[0].getHex(),end:e[0].colorB.colors[0].getHex()},a=()=>{e.forEach(t=>{t.colorA.colors[0].setHex(n.start),t.colorB.colors[0].setHex(n.end)})},i=t.addFolder("Color");i.addColor(n,"start").onChange(a),i.addColor(n,"end").onChange(a),i.open()}}},32:function(t,e,n){"use strict";n.r(e),n.d(e,"Study",function(){return c});var a=n(1),i=n(3),o=n(0),r=n(2),s=n.n(r),d=n(6);class c{constructor(){const t=a.a.initScene();this.initSkyBox(t),a.a.initLight(t),t.fog=new o.Fog(10061943,60,3e3);const e=a.a.initCamera(t,c.W,c.H,1,3e3),n=a.a.initRenderer(c.W,c.H),i=a.a.initControl(e,n);a.a.initHelper(t),this.initObject(t),a.a.render(i,n,t,e,()=>{}),this.initGUI()}initSkyBox(t){const e=new o.CubeTextureLoader;e.setPath("./textures/skybox/");const n=e.load(["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"]);t.background=n}initObject(t){this.system=new s.a,this.emitter=new r.Emitter;const e=new r.SpriteRenderer(t,o);this.range=new r.RadialVelocity(8,new r.Vector3D(0,1,0),75),this.radius=new r.Radius(30,40),this.life=new r.Life(20);const n=new o.TextureLoader,a=["./textures/cloud/cloud01.png","./textures/cloud/cloud02.png","./textures/cloud/cloud03.png","./textures/cloud/cloud04.png"].map(e=>new o.Sprite(new o.SpriteMaterial({map:n.load(e),transparent:!0,fog:void 0!==t.fog}))),i=new r.Body(a);this.alpha=new r.Alpha(.75,0),this.scale=new r.Scale(1,2),this.color=new r.Color(new o.Color(12301482),new o.Color(13419707)),this.emitter.setRate(new r.Rate(new r.Span(1,2),.33)).setInitializers([new r.Position(new r.SphereZone(0,0,0,16)),new r.Mass(1),this.radius,this.life,this.range,i]).setBehaviours([this.alpha,this.scale,this.color]).emit(),this.emitter.position.y=-16,this.system.addEmitter(this.emitter).addRenderer(e);for(let t=0;t<300;t++)this.emitter.update(.033)}initBody(){}initGUI(){const t=new d.a,e=t.addFolder("Emitter");e.open(),i.a.initEmitterPosition(e,[this.emitter]),i.a.initEmitterRate(e,[this.emitter]),i.a.initRange(e,[this.range]),i.a.initRadius(e,[this.radius]),i.a.initLife(e,[this.life]);const n=t.addFolder("Behaviour");i.a.initAlpha(n,[this.alpha]),i.a.initScale(n,[this.scale]),i.a.initColor(n,[this.color]),n.open()}}c.W=640,c.H=480,window.onload=()=>{new c}}});