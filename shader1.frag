#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359
#define E 2.71828182846

uniform float u_time;
uniform vec2 u_resolution;

float plot(float val, float y){
    return smoothstep(val - 0.01, val, y) - smoothstep(val, val + 0.01, y);
}

void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv.x -= 0.5;
    float scale = 3.0;
    uv = uv*scale;
    float y = uv.x*uv.x;
    float plotval = plot(y, uv.y);

    vec4 plotColor = vec4(3.0, 1.0, 0.0, 1.0);
    vec4 backColor = vec4(0.6*abs(sin(u_time)), 0.2, y*0.5, 1.0);
    gl_FragColor = plotval*plotColor + (1.0 - plotval)*backColor;
}