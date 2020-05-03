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
  float offset1 = one_pixel * 1.4980595084087969;
  float offset2 = one_pixel * 3.4954721862871927;
  float offset3 = one_pixel * 5.492884864165589;
  float offset4 = one_pixel * 7.490297542043985;
  float offset5 = one_pixel * 9.48771021992238;
  float offset6 = one_pixel * 11.485122897800776;
  float offset7 = one_pixel * 13.482535575679172;
  float offset8 = one_pixel * 15.479948253557568;
  float offset9 = one_pixel * 17.477360931435964;
  float offset10 = one_pixel * 19.474773609314358;
  float offset11 = one_pixel * 21.472186287192756;
  float offset12 = one_pixel * 23.46959896507115;
  float offset13 = one_pixel * 25.467011642949547;
  float offset14 = one_pixel * 27.464424320827945;
  float offset15 = one_pixel * 29.46183699870634;
  float offset16 = one_pixel * 31.459249676584736;
  float offset17 = one_pixel * 33.456662354463134;

  gl_FragColor = (
    0.003187367794741433 * texture2D(u_texture, vec2(coords.x - offset17, coords.y)) +
    0.004463380158499223 * texture2D(u_texture, vec2(coords.x - offset16, coords.y)) +
    0.006121502076506511 * texture2D(u_texture, vec2(coords.x - offset15, coords.y)) +
    0.008222842147555158 * texture2D(u_texture, vec2(coords.x - offset14, coords.y)) +
    0.010818390243715574 * texture2D(u_texture, vec2(coords.x - offset13, coords.y)) +
    0.0139407611277175 * texture2D(u_texture, vec2(coords.x - offset12, coords.y)) +
    0.01759541045842953 * texture2D(u_texture, vec2(coords.x - offset11, coords.y)) +
    0.02175238217927796 * texture2D(u_texture, vec2(coords.x - offset10, coords.y)) +
    0.026339874232198326 * texture2D(u_texture, vec2(coords.x - offset9, coords.y)) +
    0.03124096746188296 * texture2D(u_texture, vec2(coords.x - offset8, coords.y)) +
    0.03629469310725631 * texture2D(u_texture, vec2(coords.x - offset7, coords.y)) +
    0.04130219622044996 * texture2D(u_texture, vec2(coords.x - offset6, coords.y)) +
    0.04603811456634416 * texture2D(u_texture, vec2(coords.x - offset5, coords.y)) +
    0.05026651785168121 * texture2D(u_texture, vec2(coords.x - offset4, coords.y)) +
    0.053759967931965885 * texture2D(u_texture, vec2(coords.x - offset3, coords.y)) +
    0.05631961645365382 * texture2D(u_texture, vec2(coords.x - offset2, coords.y)) +
    0.05779389212786675 * texture2D(u_texture, vec2(coords.x - offset1, coords.y)) +
    0.029084247720515453 * texture2D(u_texture, coords) +
    0.05779389212786675 * texture2D(u_texture, vec2(coords.x + offset1, coords.y)) +
    0.05631961645365382 * texture2D(u_texture, vec2(coords.x + offset2, coords.y)) +
    0.053759967931965885 * texture2D(u_texture, vec2(coords.x + offset3, coords.y)) +
    0.05026651785168121 * texture2D(u_texture, vec2(coords.x + offset4, coords.y)) +
    0.04603811456634416 * texture2D(u_texture, vec2(coords.x + offset5, coords.y)) +
    0.04130219622044996 * texture2D(u_texture, vec2(coords.x + offset6, coords.y)) +
    0.03629469310725631 * texture2D(u_texture, vec2(coords.x + offset7, coords.y)) +
    0.03124096746188296 * texture2D(u_texture, vec2(coords.x + offset8, coords.y)) +
    0.026339874232198326 * texture2D(u_texture, vec2(coords.x + offset9, coords.y)) +
    0.02175238217927796 * texture2D(u_texture, vec2(coords.x + offset10, coords.y)) +
    0.01759541045842953 * texture2D(u_texture, vec2(coords.x + offset11, coords.y)) +
    0.0139407611277175 * texture2D(u_texture, vec2(coords.x + offset12, coords.y)) +
    0.010818390243715574 * texture2D(u_texture, vec2(coords.x + offset13, coords.y)) +
    0.008222842147555158 * texture2D(u_texture, vec2(coords.x + offset14, coords.y)) +
    0.006121502076506511 * texture2D(u_texture, vec2(coords.x + offset15, coords.y)) +
    0.004463380158499223 * texture2D(u_texture, vec2(coords.x + offset16, coords.y)) +
    0.003187367794741433 * texture2D(u_texture, vec2(coords.x + offset17, coords.y))
  );
}
