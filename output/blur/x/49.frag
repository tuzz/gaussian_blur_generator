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
  float offset1 = one_pixel * 1.499026606099935;
  float offset2 = one_pixel * 3.4977287475665153;
  float offset3 = one_pixel * 5.496430889033095;
  float offset4 = one_pixel * 7.495133030499676;
  float offset5 = one_pixel * 9.493835171966255;
  float offset6 = one_pixel * 11.492537313432836;
  float offset7 = one_pixel * 13.491239454899416;
  float offset8 = one_pixel * 15.489941596365997;
  float offset9 = one_pixel * 17.488643737832575;
  float offset10 = one_pixel * 19.487345879299156;
  float offset11 = one_pixel * 21.486048020765736;
  float offset12 = one_pixel * 23.484750162232316;
  float offset13 = one_pixel * 25.483452303698897;
  float offset14 = one_pixel * 27.482154445165477;
  float offset15 = one_pixel * 29.480856586632058;
  float offset16 = one_pixel * 31.479558728098638;
  float offset17 = one_pixel * 33.47826086956522;
  float offset18 = one_pixel * 35.4769630110318;
  float offset19 = one_pixel * 37.47566515249838;
  float offset20 = one_pixel * 39.47436729396496;
  float offset21 = one_pixel * 41.47306943543154;
  float offset22 = one_pixel * 43.47177157689812;
  float offset23 = one_pixel * 45.4704737183647;
  float offset24 = one_pixel * 47.46917585983128;

  f_color = (
    0.0022036532328353043 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset24, coords.y)) +
    0.002805705234184094 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset23, coords.y)) +
    0.0035352389891318897 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset22, coords.y)) +
    0.0044083373443707325 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset21, coords.y)) +
    0.005440157427549327 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset20, coords.y)) +
    0.006644005025940998 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset19, coords.y)) +
    0.008030294057711882 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset18, coords.y)) +
    0.009605435692336 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset17, coords.y)) +
    0.011370717310436408 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset16, coords.y)) +
    0.013321245106428438 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset15, coords.y)) +
    0.015445033923137164 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset14, coords.y)) +
    0.01772233211611239 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset13, coords.y)) +
    0.02012526640919037 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset12, coords.y)) +
    0.022617880868636687 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset11, coords.y)) +
    0.025156625057321906 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset10, coords.y)) +
    0.027691319764345662 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset9, coords.y)) +
    0.030166595990966584 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset8, coords.y)) +
    0.03252376652545605 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset7, coords.y)) +
    0.034703052559288114 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset6, coords.y)) +
    0.03664605388713732 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset5, coords.y)) +
    0.03829832382689958 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset4, coords.y)) +
    0.03961189224806447 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset3, coords.y)) +
    0.04054757438527574 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset2, coords.y)) +
    0.041076910709693396 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset1, coords.y)) +
    0.020605164615099005 * texture(sampler2D(t_input, s_input), coords) +
    0.041076910709693396 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset1, coords.y)) +
    0.04054757438527574 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset2, coords.y)) +
    0.03961189224806447 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset3, coords.y)) +
    0.03829832382689958 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset4, coords.y)) +
    0.03664605388713732 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset5, coords.y)) +
    0.034703052559288114 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset6, coords.y)) +
    0.03252376652545605 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset7, coords.y)) +
    0.030166595990966584 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset8, coords.y)) +
    0.027691319764345662 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset9, coords.y)) +
    0.025156625057321906 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset10, coords.y)) +
    0.022617880868636687 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset11, coords.y)) +
    0.02012526640919037 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset12, coords.y)) +
    0.01772233211611239 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset13, coords.y)) +
    0.015445033923137164 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset14, coords.y)) +
    0.013321245106428438 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset15, coords.y)) +
    0.011370717310436408 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset16, coords.y)) +
    0.009605435692336 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset17, coords.y)) +
    0.008030294057711882 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset18, coords.y)) +
    0.006644005025940998 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset19, coords.y)) +
    0.005440157427549327 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset20, coords.y)) +
    0.0044083373443707325 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset21, coords.y)) +
    0.0035352389891318897 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset22, coords.y)) +
    0.002805705234184094 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset23, coords.y)) +
    0.0022036532328353043 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset24, coords.y))
  );
}
