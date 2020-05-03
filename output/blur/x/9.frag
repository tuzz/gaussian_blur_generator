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
  float offset1 = one_pixel * 1.4666666666666666;
  float offset2 = one_pixel * 3.422222222222222;
  float offset3 = one_pixel * 5.377777777777778;
  float offset4 = one_pixel * 7.333333333333333;

  gl_FragColor = (
    0.01979265894569135 * texture2D(u_texture, vec2(coords.x - offset4, coords.y)) +
    0.0633074017748216 * texture2D(u_texture, vec2(coords.x - offset3, coords.y)) +
    0.13994267760750037 * texture2D(u_texture, vec2(coords.x - offset2, coords.y)) +
    0.21657795344017916 * texture2D(u_texture, vec2(coords.x - offset1, coords.y)) +
    0.12075861646361505 * texture2D(u_texture, coords) +
    0.21657795344017916 * texture2D(u_texture, vec2(coords.x + offset1, coords.y)) +
    0.13994267760750037 * texture2D(u_texture, vec2(coords.x + offset2, coords.y)) +
    0.0633074017748216 * texture2D(u_texture, vec2(coords.x + offset3, coords.y)) +
    0.01979265894569135 * texture2D(u_texture, vec2(coords.x + offset4, coords.y))
  );
}