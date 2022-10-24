(()=>{"use strict";var e,t={5017:(e,t,r)=>{var n=r(6075),i=r(6993),o=r(8012);class s{static initScene(){return new n.Scene}static initLight(e){const t=new n.AmbientLight(16777215,1);return e.add(t),t}static initCamera(e,t,r,i=1,o=400){const s=new n.PerspectiveCamera(45,t/r,i,o);return s.position.set(0,0,100),s.updateMatrixWorld(!1),e.add(s),s}static initControl(e,t){let r;t&&(r=t.domElement);const n=new o.z(e,r);return n.update(),n}static initRenderer(e,t,r=0,i="webgl-canvas",o=!0){const s=new n.WebGLRenderer({canvas:document.getElementById(i),antialias:o});return s.setClearColor(new n.Color(r)),s.setSize(e,t),s.setPixelRatio(window.devicePixelRatio),s}static initHelper(e){const t=new n.AxesHelper(30);e.add(t)}static render(e,t,r,n,i){const o=()=>{i&&i(),e.update(),t.render(r,n),requestAnimationFrame(o)};o()}static addRendererInfo(){const e=document.createElement("div");return document.body.appendChild(e),e}static updateRendererInfo(e,t){e.innerText=JSON.stringify(t)}}var a=r(2304);class d{constructor(){this.initStats();const e=s.initScene(),t=s.initCamera(e,d.W,d.H);this.renderer=s.initRenderer(d.W,d.H);const r=this.initMesh(e),n=s.addRendererInfo();this.render(r,n,this.renderer,e,t)}initStats(){this.stats=(0,a.Z)(),this.stats.showPanel(0),document.body.appendChild(this.stats.dom)}initMesh(e){return new n.Group}render(e,t,r,n,i){const o=()=>{e.rotation.x+=.01,e.rotation.y+=.01,e.rotation.z+=.01,this.stats.begin(),r.render(n,i),this.stats.end(),s.updateRendererInfo(t,r.info.render),requestAnimationFrame(o)};o()}}d.W=1280,d.H=800;class c extends d{constructor(){super(),this.raycaster=new n.Raycaster,this.mousePoint=new n.Vector2,this.onPointerMove=e=>{this.mousePoint.x=e.clientX/parseInt(this.renderer.domElement.style.width)*2-1,this.mousePoint.y=-e.clientY/parseInt(this.renderer.domElement.style.height)*2+1},document.addEventListener("pointermove",this.onPointerMove)}initMesh(e){const t=[],r=25,o=16.25,s=(e,i,s,a)=>{const d=new n.BoxGeometry,c=d.getAttribute("position"),l=c.count;d.setAttribute("color",new n.BufferAttribute(new Float32Array(4*l),4)),d.setAttribute("originalColor",new n.BufferAttribute(new Float32Array(4*l),4)),d.setAttribute("mesh_id",new n.BufferAttribute(new Float32Array(l),1));const u=d.getAttribute("color"),h=d.getAttribute("originalColor"),f=d.getAttribute("mesh_id");for(let t=0;t<l;t++)c.setXYZ(t,c.getX(t)+1.3*e-o,c.getY(t)+1.3*i-o,c.getZ(t)+1.3*s-o),u.setXYZW(t,e/r,i/r,s/r,.1),h.setXYZW(t,e/r,i/r,s/r,.1),f.setX(t,a);t.push(d)};let a=0;for(let e=0;e<r;e++)for(let t=0;t<r;t++)for(let n=0;n<r;n++)s(e,t,n,a),a++;const d=new n.Mesh((0,i.qf)(t),new n.MeshBasicMaterial({transparent:!0,vertexColors:!0}));return e.add(d),d}render(e,t,r,n,i){const o=()=>{var a,d;const c=.01;e.rotation.x+=c,e.rotation.y+=c,e.rotation.z+=c,e.updateMatrix(),this.stats.begin(),null===(a=this.raycaster)||void 0===a||a.setFromCamera(this.mousePoint,i);const l=null===(d=this.raycaster)||void 0===d?void 0:d.intersectObject(e,!1);(null==l?void 0:l.length)>0&&this.updateIntersect(l[0],e.geometry),r.render(n,i),this.stats.end(),s.updateRendererInfo(t,r.info.render),requestAnimationFrame(o)};o()}updateIntersect(e,t){const r=t.getAttribute("mesh_id"),n=r.getX(e.face.a);r.getX(e.face.a)===r.getX(e.face.b)&&r.getX(e.face.a)===r.getX(e.face.c)||console.log(r.getX(e.face.a),r.getX(e.face.b),r.getX(e.face.c));const i=t.getAttribute("color"),o=t.getAttribute("originalColor"),s=r.count;for(let e=0;e<s;e++)r.getX(e)===n?i.setXYZW(e,1,1,1,1):i.setXYZW(e,o.getX(e),o.getY(e),o.getZ(e),o.getW(e));i.needsUpdate=!0}}c.W=1280,c.H=800,window.onload=()=>{new c}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=t,e=[],n.O=(t,r,i,o)=>{if(!r){var s=1/0;for(l=0;l<e.length;l++){for(var[r,i,o]=e[l],a=!0,d=0;d<r.length;d++)(!1&o||s>=o)&&Object.keys(n.O).every((e=>n.O[e](r[d])))?r.splice(d--,1):(a=!1,o<s&&(s=o));if(a){e.splice(l--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,i,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.j=317,(()=>{var e={317:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var i,o,[s,a,d]=r,c=0;if(s.some((t=>0!==e[t]))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(d)var l=d(n)}for(t&&t(r);c<s.length;c++)o=s[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self.webpackChunkthreejs_lab=self.webpackChunkthreejs_lab||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=n.O(void 0,[736],(()=>n(5017)));i=n.O(i)})();