#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);
    //st *= mat2(-0.8,1.,-.9,.9);
    vec2 pos = vec2(0.5)-st;

    float r = length(pos)*2.0;
    float a = atan(pos.y,pos.x);
    float l = sin(1.2*u_time)*.2 + 0.5;
    float f = abs(cos(a*12.2+u_time)*sin(a*8.+u_time))*l+.1;

    color = mix(vec3(1.5 - pow(r/2.0, .7), 
                     0.8 - pow(r/2.0, .9), 
                     0.9 - pow(r, .3)),
                vec3(0.15,0.05,0.25), 
                smoothstep(f, f+1.5,r));

    gl_FragColor = vec4(color, 1.0);
}