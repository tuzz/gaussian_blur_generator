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

  float one_pixel = u_dimensions.w;
  float offset1 = one_pixel * 1.4988416988416988;
  float offset2 = one_pixel * 3.497297297297297;
  float offset3 = one_pixel * 5.495752895752895;
  float offset4 = one_pixel * 7.494208494208494;
  float offset5 = one_pixel * 9.492664092664093;
  float offset6 = one_pixel * 11.49111969111969;
  float offset7 = one_pixel * 13.48957528957529;
  float offset8 = one_pixel * 15.488030888030888;
  float offset9 = one_pixel * 17.486486486486488;
  float offset10 = one_pixel * 19.484942084942084;
  float offset11 = one_pixel * 21.483397683397683;
  float offset12 = one_pixel * 23.481853281853283;
  float offset13 = one_pixel * 25.48030888030888;
  float offset14 = one_pixel * 27.47876447876448;
  float offset15 = one_pixel * 29.47722007722008;
  float offset16 = one_pixel * 31.475675675675674;
  float offset17 = one_pixel * 33.474131274131274;
  float offset18 = one_pixel * 35.472586872586874;
  float offset19 = one_pixel * 37.47104247104247;
  float offset20 = one_pixel * 39.46949806949807;
  float offset21 = one_pixel * 41.467953667953665;
  float offset22 = one_pixel * 43.466409266409265;

  gl_FragColor = (
    0.0024178160572103776 * texture2D(u_texture, vec2(coords.x, coords.y - offset22)) +
    0.0031442885686314157 * texture2D(u_texture, vec2(coords.x, coords.y - offset21)) +
    0.004038664589562254 * texture2D(u_texture, vec2(coords.x, coords.y - offset20)) +
    0.0051235562871088805 * texture2D(u_texture, vec2(coords.x, coords.y - offset19)) +
    0.0064198599284415216 * texture2D(u_texture, vec2(coords.x, coords.y - offset18)) +
    0.007945144225355175 * texture2D(u_texture, vec2(coords.x, coords.y - offset17)) +
    0.009711850353387907 * texture2D(u_texture, vec2(coords.x, coords.y - offset16)) +
    0.01172540388136133 * texture2D(u_texture, vec2(coords.x, coords.y - offset15)) +
    0.013982371507407304 * texture2D(u_texture, vec2(coords.x, coords.y - offset14)) +
    0.01646882146650448 * texture2D(u_texture, vec2(coords.x, coords.y - offset13)) +
    0.019159061101050156 * texture2D(u_texture, vec2(coords.x, coords.y - offset12)) +
    0.022014924215205414 * texture2D(u_texture, vec2(coords.x, coords.y - offset11)) +
    0.024985761518253886 * texture2D(u_texture, vec2(coords.x, coords.y - offset10)) +
    0.028009248626345115 * texture2D(u_texture, vec2(coords.x, coords.y - offset9)) +
    0.031013069027084166 * texture2D(u_texture, vec2(coords.x, coords.y - offset8)) +
    0.0339174579873553 * texture2D(u_texture, vec2(coords.x, coords.y - offset7)) +
    0.036638513894824004 * texture2D(u_texture, vec2(coords.x, coords.y - offset6)) +
    0.039092104132570325 * texture2D(u_texture, vec2(coords.x, coords.y - offset5)) +
    0.04119812241858555 * texture2D(u_texture, vec2(coords.x, coords.y - offset4)) +
    0.042884802514688146 * texture2D(u_texture, vec2(coords.x, coords.y - offset3)) +
    0.04409276677512139 * texture2D(u_texture, vec2(coords.x, coords.y - offset2)) +
    0.04477849199820629 * texture2D(u_texture, vec2(coords.x, coords.y - offset1)) +
    0.022475797851479237 * texture2D(u_texture, coords) +
    0.04477849199820629 * texture2D(u_texture, vec2(coords.x, coords.y + offset1)) +
    0.04409276677512139 * texture2D(u_texture, vec2(coords.x, coords.y + offset2)) +
    0.042884802514688146 * texture2D(u_texture, vec2(coords.x, coords.y + offset3)) +
    0.04119812241858555 * texture2D(u_texture, vec2(coords.x, coords.y + offset4)) +
    0.039092104132570325 * texture2D(u_texture, vec2(coords.x, coords.y + offset5)) +
    0.036638513894824004 * texture2D(u_texture, vec2(coords.x, coords.y + offset6)) +
    0.0339174579873553 * texture2D(u_texture, vec2(coords.x, coords.y + offset7)) +
    0.031013069027084166 * texture2D(u_texture, vec2(coords.x, coords.y + offset8)) +
    0.028009248626345115 * texture2D(u_texture, vec2(coords.x, coords.y + offset9)) +
    0.024985761518253886 * texture2D(u_texture, vec2(coords.x, coords.y + offset10)) +
    0.022014924215205414 * texture2D(u_texture, vec2(coords.x, coords.y + offset11)) +
    0.019159061101050156 * texture2D(u_texture, vec2(coords.x, coords.y + offset12)) +
    0.01646882146650448 * texture2D(u_texture, vec2(coords.x, coords.y + offset13)) +
    0.013982371507407304 * texture2D(u_texture, vec2(coords.x, coords.y + offset14)) +
    0.01172540388136133 * texture2D(u_texture, vec2(coords.x, coords.y + offset15)) +
    0.009711850353387907 * texture2D(u_texture, vec2(coords.x, coords.y + offset16)) +
    0.007945144225355175 * texture2D(u_texture, vec2(coords.x, coords.y + offset17)) +
    0.0064198599284415216 * texture2D(u_texture, vec2(coords.x, coords.y + offset18)) +
    0.0051235562871088805 * texture2D(u_texture, vec2(coords.x, coords.y + offset19)) +
    0.004038664589562254 * texture2D(u_texture, vec2(coords.x, coords.y + offset20)) +
    0.0031442885686314157 * texture2D(u_texture, vec2(coords.x, coords.y + offset21)) +
    0.0024178160572103776 * texture2D(u_texture, vec2(coords.x, coords.y + offset22))
  );
}
