(()=>{"use strict";var e,t={7788:(e,t,n)=>{var r=n(6075),i=n(8012);class o{static initScene(){return new r.Scene}static initLight(e){const t=new r.AmbientLight(16777215,1);return e.add(t),t}static initCamera(e,t,n,i=1,o=400){const a=new r.PerspectiveCamera(45,t/n,i,o);return a.position.set(0,0,100),a.updateMatrixWorld(!1),e.add(a),a}static initControl(e,t){let n;t&&(n=t.domElement);const r=new i.z(e,n);return r.update(),r}static initRenderer(e,t,n=0,i="webgl-canvas",o=!0){const a=new r.WebGLRenderer({canvas:document.getElementById(i),antialias:o});return a.setClearColor(new r.Color(n)),a.setSize(e,t),a.setPixelRatio(window.devicePixelRatio),a}static initHelper(e){const t=new r.AxesHelper(30);e.add(t)}static render(e,t,n,r,i){const o=()=>{i&&i(),e.update(),t.render(n,r),requestAnimationFrame(o)};o()}static addRendererInfo(){const e=document.createElement("div");return document.body.appendChild(e),e}static updateRendererInfo(e,t){e.innerText=JSON.stringify(t)}}var a=n(2304);class s{constructor(){this.initStats();const e=o.initScene(),t=o.initCamera(e,s.W,s.H);this.renderer=o.initRenderer(s.W,s.H);const n=this.initMesh(e),r=o.addRendererInfo();this.render(n,r,this.renderer,e,t)}initStats(){this.stats=(0,a.Z)(),this.stats.showPanel(0),document.body.appendChild(this.stats.dom)}initMesh(e){return new r.Group}render(e,t,n,r,i){const a=()=>{e.rotation.x+=.01,e.rotation.y+=.01,e.rotation.z+=.01,this.stats.begin(),n.render(r,i),this.stats.end(),o.updateRendererInfo(t,n.info.render),requestAnimationFrame(a)};a()}}s.W=1280,s.H=800;class d extends s{initMesh(e){const t=new r.Group,n=16.25,i=new r.BoxGeometry(1,1,1),o=new r.MeshBasicMaterial({opacity:.5,transparent:!0}),a=(e,a,s)=>{const d=new r.Mesh(i,o);d.position.set(1.3*e-n,1.3*a-n,1.3*s-n),t.add(d)};for(let e=0;e<25;e++)for(let t=0;t<25;t++)for(let n=0;n<25;n++)a(e,t,n);return e.add(t),t}}window.onload=()=>{new d}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=t,e=[],r.O=(t,n,i,o)=>{if(!n){var a=1/0;for(l=0;l<e.length;l++){for(var[n,i,o]=e[l],s=!0,d=0;d<n.length;d++)(!1&o||a>=o)&&Object.keys(r.O).every((e=>r.O[e](n[d])))?n.splice(d--,1):(s=!1,o<a&&(a=o));if(s){e.splice(l--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,i,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.j=737,(()=>{var e={737:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var i,o,[a,s,d]=n,c=0;if(a.some((t=>0!==e[t]))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(d)var l=d(r)}for(t&&t(n);c<a.length;c++)o=a[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(l)},n=self.webpackChunkthreejs_lab=self.webpackChunkthreejs_lab||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=r.O(void 0,[736],(()=>r(7788)));i=r.O(i)})();