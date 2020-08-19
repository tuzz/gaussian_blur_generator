#version 310 es

precision mediump float;
precision mediump sampler;

layout(set=0, binding=0) uniform _0 { vec4 u_scaling; };

layout(set=0, binding=1) uniform texture2D t_input;
layout(set=0, binding=2) uniform sampler s_input;

layout(location=0) out vec4 f_color;

// Generated by https://github.com/tuzz/gaussian_blur_generator

void main() {
  vec2 coords = gl_FragCoord.xy * u_scaling.xy;

  float one_pixel = u_scaling.x;
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

  f_color = (
    0.0024178160572103776 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset22, coords.y)) +
    0.0031442885686314157 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset21, coords.y)) +
    0.004038664589562254 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset20, coords.y)) +
    0.0051235562871088805 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset19, coords.y)) +
    0.0064198599284415216 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset18, coords.y)) +
    0.007945144225355175 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset17, coords.y)) +
    0.009711850353387907 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset16, coords.y)) +
    0.01172540388136133 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset15, coords.y)) +
    0.013982371507407304 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset14, coords.y)) +
    0.01646882146650448 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset13, coords.y)) +
    0.019159061101050156 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset12, coords.y)) +
    0.022014924215205414 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset11, coords.y)) +
    0.024985761518253886 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset10, coords.y)) +
    0.028009248626345115 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset9, coords.y)) +
    0.031013069027084166 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset8, coords.y)) +
    0.0339174579873553 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset7, coords.y)) +
    0.036638513894824004 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset6, coords.y)) +
    0.039092104132570325 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset5, coords.y)) +
    0.04119812241858555 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset4, coords.y)) +
    0.042884802514688146 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset3, coords.y)) +
    0.04409276677512139 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset2, coords.y)) +
    0.04477849199820629 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset1, coords.y)) +
    0.022475797851479237 * texture(sampler2D(t_input, s_input), coords) +
    0.04477849199820629 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset1, coords.y)) +
    0.04409276677512139 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset2, coords.y)) +
    0.042884802514688146 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset3, coords.y)) +
    0.04119812241858555 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset4, coords.y)) +
    0.039092104132570325 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset5, coords.y)) +
    0.036638513894824004 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset6, coords.y)) +
    0.0339174579873553 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset7, coords.y)) +
    0.031013069027084166 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset8, coords.y)) +
    0.028009248626345115 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset9, coords.y)) +
    0.024985761518253886 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset10, coords.y)) +
    0.022014924215205414 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset11, coords.y)) +
    0.019159061101050156 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset12, coords.y)) +
    0.01646882146650448 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset13, coords.y)) +
    0.013982371507407304 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset14, coords.y)) +
    0.01172540388136133 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset15, coords.y)) +
    0.009711850353387907 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset16, coords.y)) +
    0.007945144225355175 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset17, coords.y)) +
    0.0064198599284415216 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset18, coords.y)) +
    0.0051235562871088805 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset19, coords.y)) +
    0.004038664589562254 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset20, coords.y)) +
    0.0031442885686314157 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset21, coords.y)) +
    0.0024178160572103776 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset22, coords.y))
  );
}
