/**
 * 6角形シェーダー
 * {@link http://glslsandbox.com/e#55098}
 */

#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

varying vec3 meshPosition;
varying vec2 uvPosition;

//user settings
uniform vec3 color;
uniform float time;
uniform float hexScale;
uniform float speed;
uniform float raisedBottom;
uniform float waveFrequency;
uniform float wavePow;
uniform int direction;
uniform float gridWeight;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

float hexDist(vec2 p)
{
    p = abs(p);
    float d = dot(p, normalize(vec2(1.0, 1.73)));
    return max(d, p.x);
}

vec4 hexCoords(vec2 uv)
{
    vec2 r = vec2(1.0, 1.73);
    vec2 h = r * 0.5;
    vec2 a = mod(uv, r) - h;
    vec2 b = mod(uv - h, r) - h;

    vec2 gv = length(a) < length(b) ? a : b;
    vec2 id = uv - gv;

    float x = atan(gv.x, gv.y);
    float y = 0.5 - hexDist(gv);

    return vec4(x, y, id);
}

void main() {
    #include <clipping_planes_fragment>

    vec4 diffuseColor = vec4( diffuse, opacity );

    ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
    vec3 totalEmissiveRadiance = emissive;
    #include <logdepthbuf_fragment>

    //#include <map_fragment>
    //#include <color_fragment>
    vec4 hc = hexCoords( uvPosition * hexScale );

    float ntime = time * speed;
    //hc.wで縦方向、hc.zで横方向に、hc.zwで放射状に明滅
    float distance = hc.w;
    if( direction == 3){
        distance = hc.z;
    }
    float wavy = pow( sin( (length(distance * waveFrequency) - ntime) ), wavePow) + raisedBottom;

    float margin = min( gridWeight*0.33, 0.05 );
    float gridLine = smoothstep(gridWeight, gridWeight+margin, hc.y);
    float alpha = gridLine * wavy;
    vec3 cl = color * alpha;

    diffuseColor *= vec4(cl, alpha);

    #include <alphamap_fragment>
    #include <alphatest_fragment>
    #include <specularmap_fragment>
    #include <normal_fragment_begin>
    #include <normal_fragment_maps>
    #include <emissivemap_fragment>
    // accumulation
    #include <lights_phong_fragment>
    #include <lights_fragment_begin>
    #include <lights_fragment_maps>
    #include <lights_fragment_end>
    // modulation
    #include <aomap_fragment>
    vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
    #include <envmap_fragment>
    gl_FragColor = vec4( outgoingLight, diffuseColor.a );
    #include <tonemapping_fragment>
    #include <encodings_fragment>
    #include <fog_fragment>
    #include <premultiplied_alpha_fragment>
    #include <dithering_fragment>
}