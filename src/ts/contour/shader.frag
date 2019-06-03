uniform float bottom;
uniform float top;
uniform sampler2D texture;
varying vec3 vUv;

void main() {
    float y = vUv.y / (top - bottom) + 0.5;
    vec4 color = texture2D( texture, vec2(0.5, y) );
    if ( color.a < 0.3 ) discard;
    gl_FragColor = color;
}