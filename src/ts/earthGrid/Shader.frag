/**
 * 地球儀用グリッド線シェーダー
 * {@link http://glslsandbox.com/e#55098}
 */

#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;

varying vec3 meshPosition;
varying vec2 uvPosition;

uniform float opacity;
uniform vec3 color;
uniform vec3 glowColor;

uniform float lineWeight;
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

float stepLine( float alpha, float width, float gridNum ){
    float  step = width * gridNum * 0.5;
    if( alpha > 1.0 - step || alpha < step ){
        return 1.0;
    }
    return 0.0;
}

float getGlow( float modVal, float width, float gridNum,  float glowPow ){
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

    vec4 diffuseColor = vec4( diffuse, opacity );

    ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
    vec3 totalEmissiveRadiance = emissive;
    #include <logdepthbuf_fragment>

    //#include <map_fragment>
    vec3 drawColor = glowColor;
    float modX = mod( uvPosition.x * division, 1.0);
    float modY = mod( uvPosition.y * division, 1.0);

    /** グロー **/
    float alphaXGlow = getGlow( modX, lineWeight, division, glowPow );
    float alphaYGlow = getGlow( modY, lineWeight, division, glowPow );
    alphaYGlow = coverY( uvPosition.y, alphaYGlow, division);
    float alphaGlow = max( alphaXGlow, alphaYGlow );
    alphaGlow *= glowStrength;

    /** 格子線 **/
    float alphaX = stepLine( modX, lineWeight, division);
    float alphaY = stepLine( modY, lineWeight, division);
    alphaY = coverY( uvPosition.y, alphaY, division);
    float alphaGrid = max(alphaX, alphaY);
    if( alphaGrid > 0.1 ){
        drawColor =  color;
    }

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