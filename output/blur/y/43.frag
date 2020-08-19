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

  float one_pixel = u_scaling.y;
  float offset1 = one_pixel * 1.4987277353689568;
  float offset2 = one_pixel * 3.497031382527566;
  float offset3 = one_pixel * 5.495335029686175;
  float offset4 = one_pixel * 7.493638676844784;
  float offset5 = one_pixel * 9.491942324003393;
  float offset6 = one_pixel * 11.490245971162002;
  float offset7 = one_pixel * 13.488549618320612;
  float offset8 = one_pixel * 15.486853265479219;
  float offset9 = one_pixel * 17.48515691263783;
  float offset10 = one_pixel * 19.483460559796438;
  float offset11 = one_pixel * 21.481764206955045;
  float offset12 = one_pixel * 23.480067854113656;
  float offset13 = one_pixel * 25.478371501272264;
  float offset14 = one_pixel * 27.476675148430875;
  float offset15 = one_pixel * 29.474978795589482;
  float offset16 = one_pixel * 31.47328244274809;
  float offset17 = one_pixel * 33.4715860899067;
  float offset18 = one_pixel * 35.46988973706531;
  float offset19 = one_pixel * 37.468193384223916;
  float offset20 = one_pixel * 39.46649703138253;
  float offset21 = one_pixel * 41.46480067854114;

  f_color = (
    0.002535853224343265 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset21)) +
    0.003338558477473682 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset20)) +
    0.004335893439148301 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset19)) +
    0.005555019377901262 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset18)) +
    0.007020732248951623 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset17)) +
    0.00875329263547759 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset16)) +
    0.010766013067057188 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset15)) +
    0.013062757057802825 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset14)) +
    0.015635552323775982 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset13)) +
    0.01846255640570702 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset12)) +
    0.02150662869482147 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset11)) +
    0.02471475219944782 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset10)) +
    0.028018507361621564 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset9)) +
    0.03133572852981618 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset8)) +
    0.03457337536040286 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset7)) +
    0.03763153495312948 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset6)) +
    0.04040834823446635 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset5)) +
    0.0428055407322436 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset4)) +
    0.044734148649583694 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset3)) +
    0.046119979455740395 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset2)) +
    0.046908341468247405 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset1)) +
    0.023553772205680893 * texture(sampler2D(t_input, s_input), coords) +
    0.046908341468247405 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset1)) +
    0.046119979455740395 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset2)) +
    0.044734148649583694 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset3)) +
    0.0428055407322436 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset4)) +
    0.04040834823446635 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset5)) +
    0.03763153495312948 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset6)) +
    0.03457337536040286 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset7)) +
    0.03133572852981618 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset8)) +
    0.028018507361621564 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset9)) +
    0.02471475219944782 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset10)) +
    0.02150662869482147 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset11)) +
    0.01846255640570702 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset12)) +
    0.015635552323775982 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset13)) +
    0.013062757057802825 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset14)) +
    0.010766013067057188 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset15)) +
    0.00875329263547759 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset16)) +
    0.007020732248951623 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset17)) +
    0.005555019377901262 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset18)) +
    0.004335893439148301 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset19)) +
    0.003338558477473682 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset20)) +
    0.002535853224343265 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset21))
  );
}
