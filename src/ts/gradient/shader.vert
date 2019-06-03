varying vec3 vUv;

void main() {
	vUv = position;
	vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
	vec4 mvPosition =  viewMatrix * worldPosition;
	gl_Position = projectionMatrix * mvPosition;
}