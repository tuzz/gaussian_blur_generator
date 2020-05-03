#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
#else
  precision mediump float;
#endif

uniform sampler2D u_texture;
uniform vec4 u_dimensions;

// Generated by https://github.com/tuzz/gaussian_blur_generator

void main() {
  vec2 coords = gl_FragCoord.xy / u_dimensions.xy;

  float one_pixel = u_dimensions.z;
  float offset1 = one_pixel * 1.4848484848484849;
  float offset2 = one_pixel * 3.4646464646464645;
  float offset3 = one_pixel * 5.444444444444445;
  float offset4 = one_pixel * 7.424242424242424;
  float offset5 = one_pixel * 9.404040404040405;
  float offset6 = one_pixel * 11.383838383838384;

  gl_FragColor = (
    0.01121809948984034 * texture2D(u_texture, vec2(coords.x - offset6, coords.y)) +
    0.02631938726462541 * texture2D(u_texture, vec2(coords.x - offset5, coords.y)) +
    0.05230252219485956 * texture2D(u_texture, vec2(coords.x - offset4, coords.y)) +
    0.08823977317441423 * texture2D(u_texture, vec2(coords.x - offset3, coords.y)) +
    0.12660489194589866 * texture2D(u_texture, vec2(coords.x - offset2, coords.y)) +
    0.15466448679206415 * texture2D(u_texture, vec2(coords.x - offset1, coords.y)) +
    0.08130167827659526 * texture2D(u_texture, coords) +
    0.15466448679206415 * texture2D(u_texture, vec2(coords.x + offset1, coords.y)) +
    0.12660489194589866 * texture2D(u_texture, vec2(coords.x + offset2, coords.y)) +
    0.08823977317441423 * texture2D(u_texture, vec2(coords.x + offset3, coords.y)) +
    0.05230252219485956 * texture2D(u_texture, vec2(coords.x + offset4, coords.y)) +
    0.02631938726462541 * texture2D(u_texture, vec2(coords.x + offset5, coords.y)) +
    0.01121809948984034 * texture2D(u_texture, vec2(coords.x + offset6, coords.y))
  );
}
