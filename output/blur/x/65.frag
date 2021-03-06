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
  float offset1 = one_pixel * 1.4994519546949214;
  float offset2 = one_pixel * 3.498721227621483;
  float offset3 = one_pixel * 5.497990500548045;
  float offset4 = one_pixel * 7.497259773474608;
  float offset5 = one_pixel * 9.49652904640117;
  float offset6 = one_pixel * 11.495798319327731;
  float offset7 = one_pixel * 13.495067592254292;
  float offset8 = one_pixel * 15.494336865180856;
  float offset9 = one_pixel * 17.493606138107417;
  float offset10 = one_pixel * 19.492875411033978;
  float offset11 = one_pixel * 21.49214468396054;
  float offset12 = one_pixel * 23.491413956887104;
  float offset13 = one_pixel * 25.490683229813666;
  float offset14 = one_pixel * 27.489952502740227;
  float offset15 = one_pixel * 29.48922177566679;
  float offset16 = one_pixel * 31.48849104859335;
  float offset17 = one_pixel * 33.487760321519914;
  float offset18 = one_pixel * 35.487029594446476;
  float offset19 = one_pixel * 37.48629886737304;
  float offset20 = one_pixel * 39.4855681402996;
  float offset21 = one_pixel * 41.48483741322616;
  float offset22 = one_pixel * 43.48410668615272;
  float offset23 = one_pixel * 45.48337595907928;
  float offset24 = one_pixel * 47.482645232005844;
  float offset25 = one_pixel * 49.481914504932405;
  float offset26 = one_pixel * 51.481183777858966;
  float offset27 = one_pixel * 53.480453050785535;
  float offset28 = one_pixel * 55.479722323712096;
  float offset29 = one_pixel * 57.47899159663866;
  float offset30 = one_pixel * 59.47826086956522;
  float offset31 = one_pixel * 61.47753014249178;
  float offset32 = one_pixel * 63.47679941541834;

  f_color = (
    0.0016241587089336424 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset32, coords.y)) +
    0.0019498102648345104 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset31, coords.y)) +
    0.00232709025838606 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset30, coords.y)) +
    0.002761159033991734 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset29, coords.y)) +
    0.003257071182536097 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset28, coords.y)) +
    0.003819627587591012 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset27, coords.y)) +
    0.004453208521945213 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset26, coords.y)) +
    0.005161590727530263 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset25, coords.y)) +
    0.005947752631369097 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset24, coords.y)) +
    0.006813673070484824 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset23, coords.y)) +
    0.007760130051139149 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset22, coords.y)) +
    0.008786507076626511 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset21, coords.y)) +
    0.009890615364427872 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset20, coords.y)) +
    0.011068540761026546 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset19, coords.y)) +
    0.012314524281720581 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset18, coords.y)) +
    0.013620884897115814 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset17, coords.y)) +
    0.01497799242018096 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset16, coords.y)) +
    0.016374297103993248 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset15, coords.y)) +
    0.017796420854275286 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset14, coords.y)) +
    0.01922931283590732 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset13, coords.y)) +
    0.020656469782209207 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset12, coords.y)) +
    0.02206021860153585 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset11, coords.y)) +
    0.023422056043366158 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset10, coords.y)) +
    0.024723037379292497 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset9, coords.y)) +
    0.025944203426783167 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset8, coords.y)) +
    0.02706703294952755 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset7, coords.y)) +
    0.028073905652302826 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset6, coords.y)) +
    0.02894855977574113 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset5, coords.y)) +
    0.029676527783327272 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset4, coords.y)) +
    0.03024553387893338 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset3, coords.y)) +
    0.03064583811547355 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset2, coords.y)) +
    0.030870513626071523 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset1, coords.y)) +
    0.015463470702840307 * texture(sampler2D(t_input, s_input), coords) +
    0.030870513626071523 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset1, coords.y)) +
    0.03064583811547355 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset2, coords.y)) +
    0.03024553387893338 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset3, coords.y)) +
    0.029676527783327272 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset4, coords.y)) +
    0.02894855977574113 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset5, coords.y)) +
    0.028073905652302826 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset6, coords.y)) +
    0.02706703294952755 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset7, coords.y)) +
    0.025944203426783167 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset8, coords.y)) +
    0.024723037379292497 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset9, coords.y)) +
    0.023422056043366158 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset10, coords.y)) +
    0.02206021860153585 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset11, coords.y)) +
    0.020656469782209207 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset12, coords.y)) +
    0.01922931283590732 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset13, coords.y)) +
    0.017796420854275286 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset14, coords.y)) +
    0.016374297103993248 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset15, coords.y)) +
    0.01497799242018096 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset16, coords.y)) +
    0.013620884897115814 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset17, coords.y)) +
    0.012314524281720581 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset18, coords.y)) +
    0.011068540761026546 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset19, coords.y)) +
    0.009890615364427872 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset20, coords.y)) +
    0.008786507076626511 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset21, coords.y)) +
    0.007760130051139149 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset22, coords.y)) +
    0.006813673070484824 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset23, coords.y)) +
    0.005947752631369097 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset24, coords.y)) +
    0.005161590727530263 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset25, coords.y)) +
    0.004453208521945213 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset26, coords.y)) +
    0.003819627587591012 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset27, coords.y)) +
    0.003257071182536097 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset28, coords.y)) +
    0.002761159033991734 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset29, coords.y)) +
    0.00232709025838606 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset30, coords.y)) +
    0.0019498102648345104 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset31, coords.y)) +
    0.0016241587089336424 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset32, coords.y))
  );
}
