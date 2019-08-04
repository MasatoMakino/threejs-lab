!function(e){function t(t){for(var i,o,a=t[0],h=t[1],l=t[2],c=0,p=[];c<a.length;c++)o=a[c],r[o]&&p.push(r[o][0]),r[o]=0;for(i in h)Object.prototype.hasOwnProperty.call(h,i)&&(e[i]=h[i]);for(d&&d(t);p.length;)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,a=1;a<n.length;a++){var h=n[a];0!==r[h]&&(i=!1)}i&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={5:0},s=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],h=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=h;s.push([29,0]),n()}({1:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n(0),r=n(3);class s{static initScene(){return new i.Scene}static initLight(e){const t=new i.AmbientLight(16777215,1);return e.add(t),t}static initCamera(e,t,n){const r=new i.PerspectiveCamera(45,t/n,1,400);return r.position.set(0,0,100),r.updateMatrixWorld(!1),e.add(r),r}static initControl(e,t){let n;t&&(n=t.domElement);const i=new r.a(e,n);return i.update(),i}static initRenderer(e,t,n=0,r="webgl-canvas",s=!0){const o=new i.WebGLRenderer({canvas:document.getElementById(r),antialias:s});return o.setClearColor(new i.Color(n)),o.setSize(e,t),o.setPixelRatio(window.devicePixelRatio),o}static initHelper(e){const t=new i.AxesHelper(30);e.add(t)}static render(e,t,n,i,r){const s=()=>{r&&r(),e.update(),t.render(n,i),requestAnimationFrame(s)};s()}}},29:function(e,t,n){"use strict";n.r(t),n.d(t,"StudyDepthTestAndDepthWrite",function(){return o});var i=n(0),r=n(1),s=n(7);class o{constructor(){this.scene=r.a.initScene(),r.a.initLight(this.scene);const e=r.a.initCamera(this.scene,o.W,o.H),t=r.a.initRenderer(o.W,o.H),n=r.a.initControl(e,t);r.a.initHelper(this.scene),this.initObject(this.scene),r.a.render(n,t,this.scene,e),this.initGUI()}initObject(e){const t=new i.PointLight(16777215,3,0,2);t.position.set(10,20,30),e.add(t);const n=new i.PointLightHelper(t);e.add(n),this.swapSphere(!1),this.switchSatelliteShift(!1)}swapSphere(e){this.inner&&(this.inner.parent.remove(this.inner),this.outer.parent.remove(this.outer),this.inner=null,this.outer=null);const t=o;e?(this.inner=t.initSphere(10,16776960,this.scene),this.outer=t.initSphere(15,16711935,this.scene)):(this.outer=t.initSphere(15,16711935,this.scene),this.inner=t.initSphere(10,16776960,this.scene))}static initSphere(e,t,n){const r=new i.SphereGeometry(e,64,64),s=new i.MeshPhongMaterial({fog:void 0!==n.fog,transparent:!0,opacity:.5,color:new i.Color(t)}),o=new i.Mesh(r,s);return n.add(o),o}switchDepthTest(e){[this.outer,this.inner,this.satellite].forEach(t=>{t.material.depthTest=e})}switchDepthWrite(e){[this.outer,this.inner,this.satellite].forEach(t=>{t.material.depthWrite=e})}switchSatelliteShift(e){this.satellite&&(this.satellite.parent.remove(this.satellite),this.satellite=null);const t=o;this.satellite=t.initSphere(5,16777215,this.scene);e?this.satellite.position.x=30:this.satellite.geometry.translate(30,0,0)}initGUI(){const e={alpha:.5,satelliteShiftIsMeshPosition:!1,depthTest:!0,depthWrite:!0},t=new s.a,n=t.addFolder("Mesh");n.add(e,"alpha",0,1).onChange(e=>{[this.outer,this.inner,this.satellite].forEach(t=>{t.material.opacity=e})}),n.open();const i=t.addFolder("satellite");i.add(e,"satelliteShiftIsMeshPosition").onChange(e=>{this.switchSatelliteShift(e)}),i.open();const r=t.addFolder("depth");r.add(e,"depthTest").onChange(e=>{this.switchDepthTest(e)}),r.add(e,"depthWrite").onChange(e=>{this.switchDepthWrite(e)}),r.open();const o=t.addFolder("Inner Sphere"),a={x:0};o.add(a,"x",0,20).onChange(e=>{this.inner.position.x=e}),o.open();const h=t.addFolder("Render Order"),l={inner:0,outer:0,satellite:0};h.add(l,"inner",-3,3).step(1).onChange(e=>{this.inner.renderOrder=e}),h.add(l,"outer",-3,3).step(1).onChange(e=>{this.outer.renderOrder=e}),h.add(l,"satellite",-3,3).step(1).onChange(e=>{this.satellite.renderOrder=e}),h.open();const d=t.addFolder("Scene");d.add({SwapSphere:!1},"SwapSphere").onChange(e=>{this.swapSphere(e),this.inner.position.x=a.x}),d.open()}}o.W=640,o.H=480,window.onload=()=>{new o}}});