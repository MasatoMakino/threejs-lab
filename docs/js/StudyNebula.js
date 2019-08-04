!function(t){function e(e){for(var a,o,s=e[0],d=e[1],c=e[2],u=0,h=[];u<s.length;u++)o=s[u],i[o]&&h.push(i[o][0]),i[o]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);for(l&&l(e);h.length;)h.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var d=n[s];0!==i[d]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={7:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=d;r.push([31,0]),n()}({1:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var a=n(0),i=n(3);class r{static initScene(){return new a.Scene}static initLight(t){const e=new a.AmbientLight(16777215,1);return t.add(e),e}static initCamera(t,e,n){const i=new a.PerspectiveCamera(45,e/n,1,400);return i.position.set(0,0,100),i.updateMatrixWorld(!1),t.add(i),i}static initControl(t,e){let n;e&&(n=e.domElement);const a=new i.a(t,n);return a.update(),a}static initRenderer(t,e,n=0,i="webgl-canvas",r=!0){const o=new a.WebGLRenderer({canvas:document.getElementById(i),antialias:r});return o.setClearColor(new a.Color(n)),o.setSize(t,e),o.setPixelRatio(window.devicePixelRatio),o}static initHelper(t){const e=new a.AxesHelper(30);t.add(e)}static render(t,e,n,a,i){const r=()=>{i&&i(),t.update(),e.render(n,a),requestAnimationFrame(r)};r()}}},31:function(t,e,n){"use strict";n.r(e),n.d(e,"Study",function(){return c});var a=n(1),i=n(0),r=n(2),o=n.n(r),s=n(7),d=n(5);class c{constructor(){const t=a.a.initScene();a.a.initLight(t);const e=a.a.initCamera(t,c.W,c.H),n=a.a.initRenderer(c.W,c.H),i=a.a.initControl(e,n);a.a.initHelper(t),this.initObject(t),a.a.render(i,n,t,e,()=>{this.system&&this.system.update()}),this.initGUI()}initObject(t){this.system=new o.a,this.emitter=new r.Emitter;const e=new r.SpriteRenderer(t,i);this.range=new r.RadialVelocity(45,new r.Vector3D(0,1,0),180),this.radius=new r.Radius(6,12),this.life=new r.Life(6),this.alpha=new r.Alpha(1,0),this.scale=new r.Scale(.1,1),this.color=new r.Color(new i.Color(65280),new i.Color(65280)),this.emitter.setRate(new r.Rate(new r.Span(4,16),.1)).setInitializers([new r.Position(new r.PointZone(0,0)),new r.Mass(1),this.radius,this.life,this.range]).setBehaviours([this.alpha,this.scale,this.color]).emit(),this.system.addEmitter(this.emitter).addRenderer(e)}initGUI(){const t=new s.a,e=t.addFolder("Emitter");e.open(),d.a.initEmitterPosition(e,[this.emitter]),d.a.initEmitterRate(e,[this.emitter]),d.a.initRange(e,[this.range]),d.a.initRadius(e,[this.radius]),d.a.initLife(e,[this.life]);const n=t.addFolder("Behaviour");d.a.initAlpha(n,[this.alpha]),d.a.initScale(n,[this.scale]),d.a.initColor(n,[this.color]),n.open()}}c.W=640,c.H=480,window.onload=()=>{new c}},5:function(t,e,n){"use strict";n.d(e,"a",function(){return a});class a{static initEmitterPosition(t,e){const n={x:e[0].position.x,y:e[0].position.y,z:e[0].position.z},a=t=>{e.forEach(t=>{t.position.x=n.x,t.position.y=n.y,t.position.z=n.z})},i=t.addFolder("Position");i.add(n,"x",-30,30).onChange(a),i.add(n,"y",-30,30).onChange(a),i.add(n,"z",-30,30).onChange(a),i.open()}static initEmitterRate(t,e){const n={numPanA:e[0].rate.numPan.a,numPanB:e[0].rate.numPan.b,timePan:e[0].rate.timePan.a},a=t=>{e.forEach(t=>{t.rate.numPan.a=n.numPanA,t.rate.numPan.b=n.numPanB,t.rate.timePan.a=n.timePan})},i=t.addFolder("Rate");i.add(n,"numPanA",0,30).step(1).onChange(a),i.add(n,"numPanB",0,30).step(1).onChange(a),i.add(n,"timePan",.01,.5).step(.01).onChange(a),i.open()}static initRange(t,e){const n={radiusMin:e[0].radiusPan.a,radiusMax:e[0].radiusPan.b,tha:e[0].tha},a=t=>{e.forEach(t=>{t.radiusPan.a=n.radiusMin,t.radiusPan.b=n.radiusMax,t.tha=n.tha})},i=t.addFolder("RadialVelocity");i.add(n,"radiusMin",0,45).step(.1).onChange(a),i.add(n,"radiusMax",0,45).step(.1).onChange(a),i.add(n,"tha",0,Math.PI).step(.1).onChange(a),i.open()}static initRadius(t,e){const n={min:e[0].radius.a,max:e[0].radius.b},a=t=>{e.forEach(t=>{t.radius.a=n.min,t.radius.b=n.max})},i=t.addFolder("Initial Sprite Size");i.add(n,"min",0,45).step(.1).onChange(a),i.add(n,"max",0,45).step(.1).onChange(a),i.open()}static initLife(t,e){const n=e[0].lifePan,a={min:n.a,max:n.b},i=t=>{e.forEach(t=>{t.lifePan.a=a.min,t.lifePan.b=a.max})},r=t.addFolder("Life");r.add(a,"min",0,12).step(.1).onChange(i),r.add(a,"max",0,24).step(.1).onChange(i),r.open()}static initAlpha(t,e){const n={start:e[0].alphaA.a,end:e[0].alphaB.a},a=t=>{e.forEach(t=>{t.alphaA.a=n.start,t.alphaA.b=n.start,t.alphaB.a=n.end,t.alphaB.b=n.end})},i=t.addFolder("Alpha");i.add(n,"start",0,1).step(.1).onChange(a),i.add(n,"end",0,1).step(.1).onChange(a),i.open()}static initScale(t,e){const n={start:e[0].scaleA.a,end:e[0].scaleB.a},a=t=>{e.forEach(t=>{t.scaleA.a=n.start,t.scaleA.b=n.start,t.scaleB.a=n.end,t.scaleB.b=n.end})},i=t.addFolder("Scale");i.add(n,"start",0,3).step(.1).onChange(a),i.add(n,"end",0,3).step(.1).onChange(a),i.open()}static initColor(t,e){const n={start:e[0].colorA.colors[0].getHex(),end:e[0].colorB.colors[0].getHex()},a=()=>{e.forEach(t=>{t.colorA.colors[0].setHex(n.start),t.colorB.colors[0].setHex(n.end)})},i=t.addFolder("Color");i.addColor(n,"start").onChange(a),i.addColor(n,"end").onChange(a),i.open()}}}});