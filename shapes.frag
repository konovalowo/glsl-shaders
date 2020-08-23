#ifdef GL_ES
precision mediump float;
#endif

float Circle(in vec2 st, vec2 center, float r){
    return smoothstep(r, r+0.005, distance(st,center));
}

void main(){
    
}
