#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

mat2 matrix(){
    return mat2(1.0,1.0,
                0.0,1.0);
}

void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;
    float pct = 0.0;
    st = st *2.-3.;
    st = st * matrix();
    pct = step(0.1, distance(sin(st*96.0*cos(u_time)),vec2(0.5))
               *sin((u_time*0.5 + 0.5)*.5));

    vec3 backColor = vec3(0.361,0.415,0.415);
    vec3 foreColor = vec3(1.000,0.816,0.646);
    vec3 color = mix(foreColor, backColor, pct);

	gl_FragColor = vec4( color, 1.0 );
}
