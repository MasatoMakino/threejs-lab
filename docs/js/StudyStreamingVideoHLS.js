!function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(d&&d(t);p.length;)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={12:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=s;o.push([34,0]),n()}({1:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(0),i=n(4);class o{static initScene(){return new r.Scene}static initLight(e){const t=new r.AmbientLight(16777215,1);return e.add(t),t}static initCamera(e,t,n,i=1,o=400){const a=new r.PerspectiveCamera(45,t/n,i,o);return a.position.set(0,0,100),a.updateMatrixWorld(!1),e.add(a),a}static initControl(e,t){let n;t&&(n=t.domElement);const r=new i.a(e,n);return r.update(),r}static initRenderer(e,t,n=0,i="webgl-canvas",o=!0){const a=new r.WebGLRenderer({canvas:document.getElementById(i),antialias:o});return a.setClearColor(new r.Color(n)),a.setSize(e,t),a.setPixelRatio(window.devicePixelRatio),a}static initHelper(e){const t=new r.AxesHelper(30);e.add(t)}static render(e,t,n,r,i){const o=()=>{i&&i(),e.update(),t.render(n,r),requestAnimationFrame(o)};o()}}},34:function(e,t,n){"use strict";n.r(t),n.d(t,"StudyStreamingVideoHLS",function(){return a});var r=n(0),i=n(1),o=n(15);class a{constructor(){const e=i.a.initScene();e.fog=new r.Fog(0,80,160),i.a.initLight(e);const t=i.a.initCamera(e,a.W,a.H),n=i.a.initRenderer(a.W,a.H),o=i.a.initControl(t,n);i.a.initHelper(e);const c=this.initVideo();this.initObject(e,c),i.a.render(o,n,e,t)}initVideo(){const e=document.createElement("video");e.width=320,o.DefaultConfig.capLevelToPlayerSize=!0,e.muted=!0,e.setAttribute("playsinline","");const t="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8";if(o.isSupported()){const n=new o;n.loadSource(t),n.attachMedia(e),n.on(o.Events.MANIFEST_PARSED,function(){e.play()})}else e.canPlayType("application/vnd.apple.mpegurl")&&(e.src=t,e.addEventListener("loadedmetadata",()=>{e.play()}));return e}initObject(e,t){const n=new r.PointLight(16777215,3,0,2);n.position.set(10,20,30),e.add(n);const i=new r.PointLightHelper(n);e.add(i);const o=new r.PlaneBufferGeometry(64,36),a=new r.MeshBasicMaterial({map:new r.VideoTexture(t),fog:void 0!==e.fog}),c=new r.Mesh(o,a);return a.map.needsUpdate=!0,e.add(c),a.map}}a.W=640,a.H=480,window.onload=()=>{new a}}});