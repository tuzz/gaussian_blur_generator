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
  float offset1 = one_pixel * 1.49941611521993;
  float offset2 = one_pixel * 3.4986376021798367;
  float offset3 = one_pixel * 5.497859089139743;
  float offset4 = one_pixel * 7.497080576099649;
  float offset5 = one_pixel * 9.496302063059556;
  float offset6 = one_pixel * 11.495523550019463;
  float offset7 = one_pixel * 13.494745036979369;
  float offset8 = one_pixel * 15.493966523939276;
  float offset9 = one_pixel * 17.493188010899182;
  float offset10 = one_pixel * 19.49240949785909;
  float offset11 = one_pixel * 21.491630984818997;
  float offset12 = one_pixel * 23.4908524717789;
  float offset13 = one_pixel * 25.490073958738808;
  float offset14 = one_pixel * 27.489295445698716;
  float offset15 = one_pixel * 29.488516932658623;
  float offset16 = one_pixel * 31.48773841961853;
  float offset17 = one_pixel * 33.486959906578434;
  float offset18 = one_pixel * 35.486181393538345;
  float offset19 = one_pixel * 37.48540288049825;
  float offset20 = one_pixel * 39.48462436745815;
  float offset21 = one_pixel * 41.483845854418064;
  float offset22 = one_pixel * 43.48306734137797;
  float offset23 = one_pixel * 45.48228882833787;
  float offset24 = one_pixel * 47.48151031529778;
  float offset25 = one_pixel * 49.48073180225769;
  float offset26 = one_pixel * 51.4799532892176;
  float offset27 = one_pixel * 53.4791747761775;
  float offset28 = one_pixel * 55.478396263137405;
  float offset29 = one_pixel * 57.477617750097316;
  float offset30 = one_pixel * 59.47683923705722;
  float offset31 = one_pixel * 61.476060724017124;

  f_color = (
    0.0016796466329463044 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset31, coords.y)) +
    0.002027999116237829 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset30, coords.y)) +
    0.0024333692176280773 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset29, coords.y)) +
    0.0029016100972999656 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset28, coords.y)) +
    0.0034384385311574546 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset27, coords.y)) +
    0.00404925382541444 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset26, coords.y)) +
    0.00473893342663415 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset25, coords.y)) +
    0.005511609198954715 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset24, coords.y)) +
    0.0063704299652471465 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset23, coords.y)) +
    0.0073173175207766235 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset22, coords.y)) +
    0.008352724827403008 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset21, coords.y)) +
    0.009475406375021447 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset20, coords.y)) +
    0.010682211643494349 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset19, coords.y)) +
    0.011967913106226058 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset18, coords.y)) +
    0.013325080192478378 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset17, coords.y)) +
    0.014744009998103672 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset16, coords.y)) +
    0.016212724262197352 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset15, coords.y)) +
    0.017717040205760082 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset14, coords.y)) +
    0.01924072029507983 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset13, coords.y)) +
    0.02076570292838887 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset12, coords.y)) +
    0.02227241257354246 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset11, coords.y)) +
    0.02374014416962627 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset10, coords.y)) +
    0.02514751283981269 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset9, coords.y)) +
    0.026472956359477513 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset8, coords.y)) +
    0.02769527460196242 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset7, coords.y)) +
    0.028794187555304007 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset6, coords.y)) +
    0.02975089165378017 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset5, coords.y)) +
    0.030548593246925385 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset4, coords.y)) +
    0.03117299813360437 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset3, coords.y)) +
    0.03161273725759824 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset2, coords.y)) +
    0.031859710866498095 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset1, coords.y)) +
    0.015960878750837258 * texture(sampler2D(t_input, s_input), coords) +
    0.031859710866498095 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset1, coords.y)) +
    0.03161273725759824 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset2, coords.y)) +
    0.03117299813360437 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset3, coords.y)) +
    0.030548593246925385 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset4, coords.y)) +
    0.02975089165378017 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset5, coords.y)) +
    0.028794187555304007 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset6, coords.y)) +
    0.02769527460196242 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset7, coords.y)) +
    0.026472956359477513 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset8, coords.y)) +
    0.02514751283981269 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset9, coords.y)) +
    0.02374014416962627 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset10, coords.y)) +
    0.02227241257354246 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset11, coords.y)) +
    0.02076570292838887 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset12, coords.y)) +
    0.01924072029507983 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset13, coords.y)) +
    0.017717040205760082 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset14, coords.y)) +
    0.016212724262197352 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset15, coords.y)) +
    0.014744009998103672 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset16, coords.y)) +
    0.013325080192478378 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset17, coords.y)) +
    0.011967913106226058 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset18, coords.y)) +
    0.010682211643494349 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset19, coords.y)) +
    0.009475406375021447 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset20, coords.y)) +
    0.008352724827403008 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset21, coords.y)) +
    0.0073173175207766235 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset22, coords.y)) +
    0.0063704299652471465 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset23, coords.y)) +
    0.005511609198954715 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset24, coords.y)) +
    0.00473893342663415 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset25, coords.y)) +
    0.00404925382541444 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset26, coords.y)) +
    0.0034384385311574546 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset27, coords.y)) +
    0.0029016100972999656 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset28, coords.y)) +
    0.0024333692176280773 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset29, coords.y)) +
    0.002027999116237829 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset30, coords.y)) +
    0.0016796466329463044 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset31, coords.y))
  );
}
