(()=>{"use strict";var e,t={2187:(e,t,n)=>{var r=n(8694),i=n(5637),s=n(6075),o=n(8012);class a{static initScene(){return new s.Scene}static initLight(e){const t=new s.AmbientLight(16777215,1);return e.add(t),t}static initCamera(e,t,n,r=1,i=400){const o=new s.PerspectiveCamera(45,t/n,r,i);return o.position.set(0,0,100),o.updateMatrixWorld(!1),e.add(o),o}static initControl(e,t){let n;t&&(n=t.domElement);const r=new o.z(e,n);return r.update(),r}static initRenderer(e,t,n=0,r="webgl-canvas",i=!0){const o=new s.WebGLRenderer({canvas:document.getElementById(r),antialias:i});return o.setClearColor(new s.Color(n)),o.setSize(e,t),o.setPixelRatio(window.devicePixelRatio),o}static initHelper(e){const t=new s.AxesHelper(30);e.add(t)}static render(e,t,n,r,i){const s=()=>{i&&i(),e.update(),t.render(n,r),requestAnimationFrame(s)};s()}static addRendererInfo(){const e=document.createElement("div");return document.body.appendChild(e),e}static updateRendererInfo(e,t){e.innerText=JSON.stringify(t)}}class d{constructor(){this.initStats(),this.initGUI();const e=a.initScene();e.fog=new s.Fog(0,80,160),a.initLight(e);const t=a.initCamera(e,d.W,d.H),n=a.initRenderer(d.W,d.H),r=a.initControl(t,n);a.initHelper(e),this.initPointLight(e),this.initMesh(e),this.refreshGeometry(),this.render(r,n,e,t)}initStats(){this.stats=new i.Z,this.stats.showPanel(1),document.body.appendChild(this.stats.dom),this.geoStats=this.stats.addPanel(new i.Z.Panel("ms, geo init","#ff8","#221"))}initGUI(){this.params={isBufferGeometry:!0,updateGeometry:!0};const e=new r.XS;e.add(this.params,"isBufferGeometry").onChange((()=>{this.refreshGeometry()})),e.add(this.params,"updateGeometry").onChange((()=>{this.refreshGeometry()}))}initPointLight(e){const t=new s.PointLight(16777215,3,0,2);t.position.set(10,20,30),e.add(t);const n=new s.PointLightHelper(t);e.add(n)}initMesh(e){this.mat=new s.MeshLambertMaterial,this.mat.color=new s.Color(16737894),this.mesh=new s.Mesh,this.mesh.material=this.mat,e.add(this.mesh)}refreshGeometry(){const e=performance.now(),t=Math.pow(2,8);let n;this.params.isBufferGeometry,n=new s.SphereGeometry(10,t,t),this.mesh.geometry=n;const r=performance.now();this.geoStats.update(r-e,1e3)}render(e,t,n,r){const i=()=>{this.stats.begin(),e.update(),this.params.updateGeometry&&this.refreshGeometry(),t.render(n,r),this.stats.end(),requestAnimationFrame(i)};i()}}d.W=640,d.H=480,window.onload=()=>{new d}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}r.m=t,e=[],r.O=(t,n,i,s)=>{if(!n){var o=1/0;for(l=0;l<e.length;l++){for(var[n,i,s]=e[l],a=!0,d=0;d<n.length;d++)(!1&s||o>=s)&&Object.keys(r.O).every((e=>r.O[e](n[d])))?n.splice(d--,1):(a=!1,s<o&&(o=s));if(a){e.splice(l--,1);var h=i();void 0!==h&&(t=h)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[n,i,s]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.j=452,(()=>{var e={452:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var i,s,[o,a,d]=n,h=0;if(o.some((t=>0!==e[t]))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(d)var l=d(r)}for(t&&t(n);h<o.length;h++)s=o[h],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(l)},n=self.webpackChunkthreejs_lab=self.webpackChunkthreejs_lab||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=r.O(void 0,[736],(()=>r(2187)));i=r.O(i)})();