#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    float a = fract(u_time*0.1)*3.14*2.0;
    st *= mat2(cos(a), sin(a), -sin(a), cos(a));
    vec2 point = vec2(0.8,1.2);
    float rad = fract(distance(st, point)*3.0);
    vec3 color = vec3(0.7-rad,rad*0.8-.3,rad*0.8);

    gl_FragColor = vec4(color, 1.0);
}