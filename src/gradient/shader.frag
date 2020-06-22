uniform float size;
uniform vec3 colorA;
uniform vec3 colorB;
varying vec3 vUv;

void main() {

    float y = vUv.y / size + 0.5;
    gl_FragColor = vec4(mix(colorA, colorB, y ), 1.0);

}