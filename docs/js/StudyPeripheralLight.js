!function(e){function t(t){for(var r,o,a=t[0],u=t[1],c=t[2],d=0,h=[];d<a.length;d++)o=a[d],i[o]&&h.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);h.length;)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={9:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;s.push([36,0]),n()}({1:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(0),i=n(3);class s{static initScene(){return new r.Scene}static initLight(e){const t=new r.AmbientLight(16777215,1);return e.add(t),t}static initCamera(e,t,n){const i=new r.PerspectiveCamera(45,t/n,1,400);return i.position.set(0,0,100),i.updateMatrixWorld(!1),e.add(i),i}static initControl(e,t){let n;t&&(n=t.domElement);const r=new i.a(e,n);return r.update(),r}static initRenderer(e,t,n=0,i="webgl-canvas",s=!0){const o=new r.WebGLRenderer({canvas:document.getElementById(i),antialias:s});return o.setClearColor(new r.Color(n)),o.setSize(e,t),o.setPixelRatio(window.devicePixelRatio),o}static initHelper(e){const t=new r.AxesHelper(30);e.add(t)}static render(e,t,n,r,i){const s=()=>{i&&i(),e.update(),t.render(n,r),requestAnimationFrame(s)};s()}}},10:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(0),i=n(11),s=n(9);class o{constructor(e,t,n){this.composers=[],this.onRequestAnimationFrame=e=>{null==this.lastUpdateTimestamp&&(this.lastUpdateTimestamp=e);const t=e-this.lastUpdateTimestamp;this.onBeforeRequestAnimationFrame&&this.onBeforeRequestAnimationFrame(e),this.render(t),this.lastUpdateTimestamp=e,this.id=requestAnimationFrame(this.onRequestAnimationFrame)},this.renderer=n,this.scene=e,this.camera=t}getRenderPass(){return new i.a(this.scene,this.camera,void 0,void 0,void 0)}initComposer(e,t){const n=this.getRenderPass(),r=new s.a(t);return r.addPass(n),e.forEach(e=>{r.addPass(e)}),this.composers.push(r),r}start(){null==this.id&&(this.id=requestAnimationFrame(this.onRequestAnimationFrame))}stop(){null!=this.id&&(cancelAnimationFrame(this.id),this.lastUpdateTimestamp=null)}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,t),this.composers.forEach(n=>{n.setSize(e,t)})}getSize(){return this.renderer.getSize(new r.Vector2)}render(e){this.composers.forEach(t=>{t.render(e)})}}},14:function(e,t,n){"use strict";n.d(t,"a",function(){return r});class r{constructor(){this.vertexShader="\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }\n  ",this.initUniform()}initUniform(){this.uniforms={tDiffuse:{value:null}}}}},36:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),s=n(7),o=n(10),a=n(8),u=n(14),c=()=>"\n\nuniform sampler2D tDiffuse;\nuniform float rate;\nuniform float radiusInner;\nuniform float radiusOuter;\nuniform vec3 color;\nvarying vec2 vUv;\n\nvoid main() {\n  float distance = length( vUv - 0.5 )*2.0;\n  distance = smoothstep( radiusInner, radiusOuter, distance);  \n  float shift = rate * distance * 0.01;\n\n  vec4 original = texture2D( tDiffuse, vUv );\n  vec3 result = mix( original.rgb, color, shift);\n\n  gl_FragColor = vec4( result , original.a );\n}\n  ";class l extends u.a{constructor(){super(),this.fragmentShader=c()}initUniform(){super.initUniform(),this.uniforms=r.UniformsUtils.merge([this.uniforms,{rate:{value:5},radiusInner:{value:.75},radiusOuter:{value:Math.sqrt(2)},color:{value:new r.Color(0,0,0)}}])}}class d extends a.a{get rate(){return this.uniforms.rate.value}set rate(e){this.uniforms.rate.value=e}get radiusInner(){return this.uniforms.radiusInner.value}set radiusInner(e){this.uniforms.radiusInner.value=e}get radiusOuter(){return this.uniforms.radiusOuter.value}set radiusOuter(e){this.uniforms.radiusOuter.value=e}get color(){return this.uniforms.color.value}set color(e){this.uniforms.color.value=e}constructor(){super(new l)}}n.d(t,"Study",function(){return h});class h{constructor(){const e=i.a.initScene();e.fog=new r.Fog(16777215,80,160),i.a.initLight(e);const t=i.a.initCamera(e,h.W,h.H),n=i.a.initRenderer(h.W,h.H,16777215),s=i.a.initControl(t,n);i.a.initHelper(e),this.initObject(e),this.render=new o.a(e,t,n);const a=new d;this.render.initComposer([a],n),this.render.onBeforeRequestAnimationFrame=()=>{s.update()},this.render.start(),this.initGUI(a)}initObject(e){const t=new r.SphereGeometry(10,16,16),n=new r.MeshLambertMaterial({fog:void 0!==e.fog});n.color=new r.Color(16737894),this.center=new r.Mesh(t,n),e.add(this.center),this.satellite=new r.Mesh(t,n.clone()),this.satellite.position.set(30,0,0),e.add(this.satellite);const i=new r.Mesh(t,n);i.position.set(-30,0,0),e.add(i)}initGUI(e){const t=new s.a;this.initGUIEffect(t,e)}initGUIEffect(e,t){const n={color:t.color.getHex()},r=e.addFolder("PeripheralLightPass");r.add(t,"rate",0,10),r.add(t,"radiusInner",0,3),r.add(t,"radiusOuter",0,3),r.addColor(n,"color").onChange(e=>{t.color.setHex(e)}),r.open()}}h.W=640,h.H=480,window.onload=()=>{new h}}});