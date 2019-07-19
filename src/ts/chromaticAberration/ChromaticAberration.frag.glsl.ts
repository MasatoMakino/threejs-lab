export default () => {
  return `
  
varying vec2 vUv;

uniform sampler2D tDiffuse;
//uniform float uPercent;
//uniform sampler2D uTex;

void main() {
  float shift = .01;

  float r = texture2D( tDiffuse, vUv + vec2( shift, 0.0 ) ).r;
  float g = texture2D( tDiffuse, vUv ).g;
  float b = texture2D( tDiffuse, vUv - vec2( shift, 0.0 ) ).b;

  gl_FragColor = vec4( r, g, b , 1.0 );
}
    
  `;
};
