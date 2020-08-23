#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float Circle(in vec2 st, vec2 center, float r){
    return smoothstep(r, r+0.005, distance(st,center));
}

void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;
    float pct = 0.0;

    pct = Circle(st, vec2(0.5), 0.3+0.1*(pow(sin(u_time*3.0)*0.5 + 0.5 , 1000.0)));

    vec3 backColor = vec3(0.606,0.084,0.315+st.y);
    vec3 foreColor = vec3(1.0,0.216+st.y,0.546);
    vec3 color = mix(foreColor, backColor, pct);

	gl_FragColor = vec4( color, 1.0 );
}
