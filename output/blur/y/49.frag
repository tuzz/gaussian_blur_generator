#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
#else
  precision mediump float;
#endif

uniform sampler2D u_texture;
uniform vec4 u_scaling;

// Generated by https://github.com/tuzz/gaussian_blur_generator

void main() {
  vec2 coords = gl_FragCoord.xy * u_scaling.xy;

  float one_pixel = u_scaling.y;
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

  gl_FragColor = (
    0.0022036532328353043 * texture2D(u_texture, vec2(coords.x, coords.y - offset24)) +
    0.002805705234184094 * texture2D(u_texture, vec2(coords.x, coords.y - offset23)) +
    0.0035352389891318897 * texture2D(u_texture, vec2(coords.x, coords.y - offset22)) +
    0.0044083373443707325 * texture2D(u_texture, vec2(coords.x, coords.y - offset21)) +
    0.005440157427549327 * texture2D(u_texture, vec2(coords.x, coords.y - offset20)) +
    0.006644005025940998 * texture2D(u_texture, vec2(coords.x, coords.y - offset19)) +
    0.008030294057711882 * texture2D(u_texture, vec2(coords.x, coords.y - offset18)) +
    0.009605435692336 * texture2D(u_texture, vec2(coords.x, coords.y - offset17)) +
    0.011370717310436408 * texture2D(u_texture, vec2(coords.x, coords.y - offset16)) +
    0.013321245106428438 * texture2D(u_texture, vec2(coords.x, coords.y - offset15)) +
    0.015445033923137164 * texture2D(u_texture, vec2(coords.x, coords.y - offset14)) +
    0.01772233211611239 * texture2D(u_texture, vec2(coords.x, coords.y - offset13)) +
    0.02012526640919037 * texture2D(u_texture, vec2(coords.x, coords.y - offset12)) +
    0.022617880868636687 * texture2D(u_texture, vec2(coords.x, coords.y - offset11)) +
    0.025156625057321906 * texture2D(u_texture, vec2(coords.x, coords.y - offset10)) +
    0.027691319764345662 * texture2D(u_texture, vec2(coords.x, coords.y - offset9)) +
    0.030166595990966584 * texture2D(u_texture, vec2(coords.x, coords.y - offset8)) +
    0.03252376652545605 * texture2D(u_texture, vec2(coords.x, coords.y - offset7)) +
    0.034703052559288114 * texture2D(u_texture, vec2(coords.x, coords.y - offset6)) +
    0.03664605388713732 * texture2D(u_texture, vec2(coords.x, coords.y - offset5)) +
    0.03829832382689958 * texture2D(u_texture, vec2(coords.x, coords.y - offset4)) +
    0.03961189224806447 * texture2D(u_texture, vec2(coords.x, coords.y - offset3)) +
    0.04054757438527574 * texture2D(u_texture, vec2(coords.x, coords.y - offset2)) +
    0.041076910709693396 * texture2D(u_texture, vec2(coords.x, coords.y - offset1)) +
    0.020605164615099005 * texture2D(u_texture, coords) +
    0.041076910709693396 * texture2D(u_texture, vec2(coords.x, coords.y + offset1)) +
    0.04054757438527574 * texture2D(u_texture, vec2(coords.x, coords.y + offset2)) +
    0.03961189224806447 * texture2D(u_texture, vec2(coords.x, coords.y + offset3)) +
    0.03829832382689958 * texture2D(u_texture, vec2(coords.x, coords.y + offset4)) +
    0.03664605388713732 * texture2D(u_texture, vec2(coords.x, coords.y + offset5)) +
    0.034703052559288114 * texture2D(u_texture, vec2(coords.x, coords.y + offset6)) +
    0.03252376652545605 * texture2D(u_texture, vec2(coords.x, coords.y + offset7)) +
    0.030166595990966584 * texture2D(u_texture, vec2(coords.x, coords.y + offset8)) +
    0.027691319764345662 * texture2D(u_texture, vec2(coords.x, coords.y + offset9)) +
    0.025156625057321906 * texture2D(u_texture, vec2(coords.x, coords.y + offset10)) +
    0.022617880868636687 * texture2D(u_texture, vec2(coords.x, coords.y + offset11)) +
    0.02012526640919037 * texture2D(u_texture, vec2(coords.x, coords.y + offset12)) +
    0.01772233211611239 * texture2D(u_texture, vec2(coords.x, coords.y + offset13)) +
    0.015445033923137164 * texture2D(u_texture, vec2(coords.x, coords.y + offset14)) +
    0.013321245106428438 * texture2D(u_texture, vec2(coords.x, coords.y + offset15)) +
    0.011370717310436408 * texture2D(u_texture, vec2(coords.x, coords.y + offset16)) +
    0.009605435692336 * texture2D(u_texture, vec2(coords.x, coords.y + offset17)) +
    0.008030294057711882 * texture2D(u_texture, vec2(coords.x, coords.y + offset18)) +
    0.006644005025940998 * texture2D(u_texture, vec2(coords.x, coords.y + offset19)) +
    0.005440157427549327 * texture2D(u_texture, vec2(coords.x, coords.y + offset20)) +
    0.0044083373443707325 * texture2D(u_texture, vec2(coords.x, coords.y + offset21)) +
    0.0035352389891318897 * texture2D(u_texture, vec2(coords.x, coords.y + offset22)) +
    0.002805705234184094 * texture2D(u_texture, vec2(coords.x, coords.y + offset23)) +
    0.0022036532328353043 * texture2D(u_texture, vec2(coords.x, coords.y + offset24))
  );
}
