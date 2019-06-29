/**
 * 地球儀用グリッド線シェーダー
 * {@link http://glslsandbox.com/e#55098}
 */

#define PHONG

#include <mesh_phong_uniform>

varying vec2 uvPosition;

uniform vec3 gridColor;
uniform vec3 glowColor;
uniform float lineLimit;
uniform float division;
uniform float glowPow;
uniform float glowStrength;

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

float stepLine( float alpha, float width ){
    float glow = cos( alpha * PI * 2.0 );
    float blur = (1.0-width)*0.5;
    glow = smoothstep( width, width+blur, glow );
    return glow;
}

float getGlow( float modVal, float glowPow ){
    float glow = cos( modVal * PI * 2.0 );
    glow = clamp( glow, 0.0, 1.0 );
    glow = pow( glow, glowPow ) ;
    return glow;
}

float coverY(float y, float alpha, float division){
    if(y > (division-0.5)/division ){
        return 0.0;
    }else if( y < 0.5 / division){
        return 0.0;
    }
    return alpha;
}

void main() {
    #include <clipping_planes_fragment>

    #include <mesh_phong_diffuse_color>

    #include <logdepthbuf_fragment>

    //#include <map_fragment>
    vec3 drawColor = glowColor;
    float modX = mod( uvPosition.x * division, 1.0);
    float modY = mod( uvPosition.y * division, 1.0);

    /** グロー **/
    float alphaXGlow = getGlow( modX, glowPow );
    float alphaYGlow = getGlow( modY, glowPow );
    alphaYGlow = coverY( uvPosition.y, alphaYGlow, division);
    float alphaGlow = max( alphaXGlow, alphaYGlow );
    alphaGlow *= glowStrength;

    /** 格子線 **/
    float alphaX = stepLine( modX, lineLimit);
    float alphaY = stepLine( modY, lineLimit);
    alphaY = coverY( uvPosition.y, alphaY, division);
    float alphaGrid = max(alphaX, alphaY);

    drawColor = mix( glowColor, gridColor, alphaGrid );
    diffuseColor *= vec4( drawColor, max( alphaGlow,  alphaGrid));

    //#include <color_fragment>

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