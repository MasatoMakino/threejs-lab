/**
 * ハーフトーンシェーダー
 */

#define PHONG

#include <mesh_phong_uniform>

//varying
varying vec2 uvPosition;

//user settings
uniform float time;
uniform float division;
uniform float divisionScaleX;
uniform bool isAnimate;
uniform float raisedBottom;
uniform float waveFrequency;
uniform float wavePow;
uniform int direction;
uniform float radius;
uniform bool hasMaskTexture;
uniform sampler2D maskTexture;

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

void main() {
    #include <clipping_planes_fragment>

    #include <mesh_phong_diffuse_color>

    #include <logdepthbuf_fragment>

    //#include <map_fragment>
    //#include <color_fragment>

    vec2 uv =
          uvPosition
        * vec2( division * divisionScaleX, division);

    //hex angle
    vec2 r = normalize(vec2(1.0, 1.73));
    vec2 halfR = r * 0.5;

    vec2 p1 = mod(uv, r) - halfR;
    vec2 p2 = mod(uv - halfR, r) - halfR;

    vec2 localPos = length(p1) < length(p2) ? p1 : p2;

    vec2 id = uv - localPos;
    #include <wavy_animation_chunk>

    float mask = 1.0;
    if( hasMaskTexture ){
        vec2 uVm = id / vec2( division * divisionScaleX, division);
        mask = texture2D( maskTexture, uVm ).r;
    }

    float ln = length(localPos);
    float current = 1.0 - ( ln * 4.0 / radius / mask );
    current = clamp( current, 0.0, 1.0 );

    float alpha = smoothstep ( 0.0, 0.1, current );

    diffuseColor.a *= alpha;

    #include <mesh_phong_switching_alpha_map>
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