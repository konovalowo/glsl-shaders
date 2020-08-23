#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 uvMouse = u_mouse / u_resolution;
    vec2 toMouse = uvMouse - uv;
    float radius = pow(length(toMouse)*2.0, 0.2);
    vec3 lightCol = vec3(0.9, 0.7, 0.2);
    vec3 backCol = vec3(0.0);
    gl_FragColor = vec4(mix(lightCol, backCol, radius*(fract(u_time*10000.0)*0.1+1.0)*1.0), 1.0);
}