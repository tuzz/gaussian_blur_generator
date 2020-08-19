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
  float offset1 = one_pixel * 1.4997754154813594;
  float offset2 = one_pixel * 3.4994759694565056;
  float offset3 = one_pixel * 5.499176523431651;
  float offset4 = one_pixel * 7.498877077406798;
  float offset5 = one_pixel * 9.498577631381943;
  float offset6 = one_pixel * 11.498278185357089;
  float offset7 = one_pixel * 13.497978739332236;
  float offset8 = one_pixel * 15.497679293307382;
  float offset9 = one_pixel * 17.497379847282527;
  float offset10 = one_pixel * 19.497080401257673;
  float offset11 = one_pixel * 21.49678095523282;
  float offset12 = one_pixel * 23.496481509207964;
  float offset13 = one_pixel * 25.49618206318311;
  float offset14 = one_pixel * 27.49588261715826;
  float offset15 = one_pixel * 29.495583171133404;
  float offset16 = one_pixel * 31.49528372510855;
  float offset17 = one_pixel * 33.494984279083695;
  float offset18 = one_pixel * 35.49468483305884;
  float offset19 = one_pixel * 37.49438538703399;
  float offset20 = one_pixel * 39.49408594100913;
  float offset21 = one_pixel * 41.49378649498428;
  float offset22 = one_pixel * 43.49348704895942;
  float offset23 = one_pixel * 45.49318760293457;
  float offset24 = one_pixel * 47.492888156909714;
  float offset25 = one_pixel * 49.49258871088486;
  float offset26 = one_pixel * 51.492289264860005;
  float offset27 = one_pixel * 53.49198981883516;
  float offset28 = one_pixel * 55.491690372810304;
  float offset29 = one_pixel * 57.49139092678545;
  float offset30 = one_pixel * 59.491091480760595;
  float offset31 = one_pixel * 61.49079203473574;
  float offset32 = one_pixel * 63.490492588710886;
  float offset33 = one_pixel * 65.49019314268602;
  float offset34 = one_pixel * 67.48989369666117;
  float offset35 = one_pixel * 69.48959425063633;
  float offset36 = one_pixel * 71.48929480461148;
  float offset37 = one_pixel * 73.48899535858662;
  float offset38 = one_pixel * 75.48869591256177;
  float offset39 = one_pixel * 77.48839646653691;
  float offset40 = one_pixel * 79.48809702051206;
  float offset41 = one_pixel * 81.4877975744872;
  float offset42 = one_pixel * 83.48749812846235;
  float offset43 = one_pixel * 85.4871986824375;
  float offset44 = one_pixel * 87.48689923641264;
  float offset45 = one_pixel * 89.48659979038779;
  float offset46 = one_pixel * 91.48630034436293;
  float offset47 = one_pixel * 93.48600089833808;
  float offset48 = one_pixel * 95.48570145231322;
  float offset49 = one_pixel * 97.48540200628837;
  float offset50 = one_pixel * 99.48510256026351;

  f_color = (
    0.0010213502312586694 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset50, coords.y)) +
    0.001149266369198209 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset49, coords.y)) +
    0.001290106582932305 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset48, coords.y)) +
    0.0014447390344961301 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset47, coords.y)) +
    0.0016140321465569713 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset46, coords.y)) +
    0.0017988458395521273 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset45, coords.y)) +
    0.002000021839410327 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset44, coords.y)) +
    0.002218373094060061 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset43, coords.y)) +
    0.0024546723570863524 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset42, coords.y)) +
    0.002709640018181092 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset41, coords.y)) +
    0.0029839312820858057 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset40, coords.y)) +
    0.003278122820135328 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset39, coords.y)) +
    0.0035926990408079837 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset38, coords.y)) +
    0.003928038147357247 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset37, coords.y)) +
    0.004284398171088704 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset36, coords.y)) +
    0.0046619031875752455 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset35, coords.y)) +
    0.005060529939480871 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset34, coords.y)) +
    0.005480095103099272 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset33, coords.y)) +
    0.005920243445636037 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset32, coords.y)) +
    0.006380437126137248 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset31, coords.y)) +
    0.00685994639431038 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset30, coords.y)) +
    0.007357841937885387 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset29, coords.y)) +
    0.007872989120302746 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset28, coords.y)) +
    0.00840404433617404 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset27, coords.y)) +
    0.008949453692041072 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset26, coords.y)) +
    0.009507454194493871 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset25, coords.y)) +
    0.010076077596867834 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset24, coords.y)) +
    0.010653157019841939 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset23, coords.y)) +
    0.011236336420765339 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset22, coords.y)) +
    0.011823082942053925 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset21, coords.y)) +
    0.012410702121262182 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset20, coords.y)) +
    0.012996355895313767 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset19, coords.y)) +
    0.013577083279838989 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset18, coords.y)) +
    0.01414982355267931 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset17, coords.y)) +
    0.014711441719501926 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset16, coords.y)) +
    0.015258755990282489 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset15, coords.y)) +
    0.015788566949329477 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset14, coords.y)) +
    0.01629768805968447 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset13, coords.y)) +
    0.016782977106228395 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset12, coords.y)) +
    0.01724136815165771 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset11, coords.y)) +
    0.01766990355655322 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset10, coords.y)) +
    0.018065765599789084 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset9, coords.y)) +
    0.01842630722909422 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset8, coords.y)) +
    0.018749081474065045 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset7, coords.y)) +
    0.019031869065516044 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset6, coords.y)) +
    0.019272703825705242 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset5, coords.y)) +
    0.01946989542342933 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset4, coords.y)) +
    0.019622049125773523 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset3, coords.y)) +
    0.01972808222374266 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset2, coords.y)) +
    0.019787236861215408 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset1, coords.y)) +
    0.009901026716929972 * texture(sampler2D(t_input, s_input), coords) +
    0.019787236861215408 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset1, coords.y)) +
    0.01972808222374266 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset2, coords.y)) +
    0.019622049125773523 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset3, coords.y)) +
    0.01946989542342933 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset4, coords.y)) +
    0.019272703825705242 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset5, coords.y)) +
    0.019031869065516044 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset6, coords.y)) +
    0.018749081474065045 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset7, coords.y)) +
    0.01842630722909422 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset8, coords.y)) +
    0.018065765599789084 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset9, coords.y)) +
    0.01766990355655322 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset10, coords.y)) +
    0.01724136815165771 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset11, coords.y)) +
    0.016782977106228395 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset12, coords.y)) +
    0.01629768805968447 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset13, coords.y)) +
    0.015788566949329477 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset14, coords.y)) +
    0.015258755990282489 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset15, coords.y)) +
    0.014711441719501926 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset16, coords.y)) +
    0.01414982355267931 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset17, coords.y)) +
    0.013577083279838989 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset18, coords.y)) +
    0.012996355895313767 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset19, coords.y)) +
    0.012410702121262182 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset20, coords.y)) +
    0.011823082942053925 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset21, coords.y)) +
    0.011236336420765339 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset22, coords.y)) +
    0.010653157019841939 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset23, coords.y)) +
    0.010076077596867834 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset24, coords.y)) +
    0.009507454194493871 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset25, coords.y)) +
    0.008949453692041072 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset26, coords.y)) +
    0.00840404433617404 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset27, coords.y)) +
    0.007872989120302746 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset28, coords.y)) +
    0.007357841937885387 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset29, coords.y)) +
    0.00685994639431038 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset30, coords.y)) +
    0.006380437126137248 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset31, coords.y)) +
    0.005920243445636037 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset32, coords.y)) +
    0.005480095103099272 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset33, coords.y)) +
    0.005060529939480871 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset34, coords.y)) +
    0.0046619031875752455 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset35, coords.y)) +
    0.004284398171088704 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset36, coords.y)) +
    0.003928038147357247 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset37, coords.y)) +
    0.0035926990408079837 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset38, coords.y)) +
    0.003278122820135328 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset39, coords.y)) +
    0.0029839312820858057 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset40, coords.y)) +
    0.002709640018181092 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset41, coords.y)) +
    0.0024546723570863524 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset42, coords.y)) +
    0.002218373094060061 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset43, coords.y)) +
    0.002000021839410327 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset44, coords.y)) +
    0.0017988458395521273 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset45, coords.y)) +
    0.0016140321465569713 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset46, coords.y)) +
    0.0014447390344961301 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset47, coords.y)) +
    0.001290106582932305 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset48, coords.y)) +
    0.001149266369198209 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset49, coords.y)) +
    0.0010213502312586694 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset50, coords.y))
  );
}
