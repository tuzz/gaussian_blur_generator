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
  float offset1 = one_pixel * 1.499820938283395;
  float offset2 = one_pixel * 3.4995821893279215;
  float offset3 = one_pixel * 5.499343440372448;
  float offset4 = one_pixel * 7.499104691416975;
  float offset5 = one_pixel * 9.498865942461501;
  float offset6 = one_pixel * 11.498627193506028;
  float offset7 = one_pixel * 13.498388444550555;
  float offset8 = one_pixel * 15.498149695595082;
  float offset9 = one_pixel * 17.497910946639607;
  float offset10 = one_pixel * 19.497672197684135;
  float offset11 = one_pixel * 21.49743344872866;
  float offset12 = one_pixel * 23.49719469977319;
  float offset13 = one_pixel * 25.496955950817714;
  float offset14 = one_pixel * 27.496717201862243;
  float offset15 = one_pixel * 29.496478452906768;
  float offset16 = one_pixel * 31.496239703951296;
  float offset17 = one_pixel * 33.49600095499582;
  float offset18 = one_pixel * 35.49576220604035;
  float offset19 = one_pixel * 37.49552345708488;
  float offset20 = one_pixel * 39.495284708129404;
  float offset21 = one_pixel * 41.49504595917393;
  float offset22 = one_pixel * 43.494807210218454;
  float offset23 = one_pixel * 45.49456846126298;
  float offset24 = one_pixel * 47.49432971230751;
  float offset25 = one_pixel * 49.494090963352036;
  float offset26 = one_pixel * 51.49385221439656;
  float offset27 = one_pixel * 53.493613465441086;
  float offset28 = one_pixel * 55.49337471648562;
  float offset29 = one_pixel * 57.493135967530144;
  float offset30 = one_pixel * 59.49289721857467;
  float offset31 = one_pixel * 61.492658469619194;
  float offset32 = one_pixel * 63.49241972066372;
  float offset33 = one_pixel * 65.49218097170825;
  float offset34 = one_pixel * 67.49194222275277;
  float offset35 = one_pixel * 69.4917034737973;
  float offset36 = one_pixel * 71.49146472484183;
  float offset37 = one_pixel * 73.49122597588635;
  float offset38 = one_pixel * 75.49098722693088;
  float offset39 = one_pixel * 77.49074847797542;
  float offset40 = one_pixel * 79.49050972901993;
  float offset41 = one_pixel * 81.49027098006447;
  float offset42 = one_pixel * 83.49003223110898;
  float offset43 = one_pixel * 85.48979348215352;
  float offset44 = one_pixel * 87.48955473319805;
  float offset45 = one_pixel * 89.48931598424257;
  float offset46 = one_pixel * 91.4890772352871;
  float offset47 = one_pixel * 93.48883848633162;
  float offset48 = one_pixel * 95.48859973737615;
  float offset49 = one_pixel * 97.48836098842068;
  float offset50 = one_pixel * 99.4881222394652;
  float offset51 = one_pixel * 101.48788349050973;
  float offset52 = one_pixel * 103.48764474155425;
  float offset53 = one_pixel * 105.48740599259878;
  float offset54 = one_pixel * 107.48716724364331;
  float offset55 = one_pixel * 109.48692849468783;
  float offset56 = one_pixel * 111.48668974573236;

  f_color = (
    0.0009087569087350045 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset56)) +
    0.001009910062665175 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset55)) +
    0.0011201797216531992 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset54)) +
    0.0012401173027233958 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset53)) +
    0.0013702755269727439 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset52)) +
    0.0015112041207351384 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset51)) +
    0.0016634450916199449 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset50)) +
    0.0018275275916743673 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset49)) +
    0.002003962386976615 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset48)) +
    0.0021932359604397325 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset47)) +
    0.002395804282401946 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset46)) +
    0.0026120862915905477 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset45)) +
    0.0028424571371497734 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset44)) +
    0.0030872412404822614 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset43)) +
    0.0033467052435199977 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset42)) +
    0.0036210509175557105 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset41)) +
    0.003910408113763832 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset40)) +
    0.0042148278428514084 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset39)) +
    0.004534275576732686 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset38)) +
    0.004868624869548322 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset37)) +
    0.005217651398589419 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset36)) +
    0.0055810275275867925 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset35)) +
    0.0059583174952505666 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset34)) +
    0.006348973330776769 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset33)) +
    0.006752331595181258 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset32)) +
    0.007167611042708547 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset31)) +
    0.007593911290155542 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset30)) +
    0.008030212573741822 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset29)) +
    0.00847537666317812 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset28)) +
    0.008928148990898846 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset27)) +
    0.009387162041135905 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset26)) +
    0.00985094002876074 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset25)) +
    0.01031790488178656 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset24)) +
    0.010786383524315633 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset23)) +
    0.011254616438781924 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset22)) +
    0.011720767467850403 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset21)) +
    0.012182934797588727 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset20)) +
    0.012639163044841285 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset19)) +
    0.013087456353439537 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset18)) +
    0.013525792386312846 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset17)) +
    0.013952137084056716 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset16)) +
    0.014364460045399605 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset15)) +
    0.014760750371599412 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset14)) +
    0.015139032805388785 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset13)) +
    0.015497383985937882 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset12)) +
    0.01583394863464242 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset11)) +
    0.01614695548256012 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset10)) +
    0.016434732749150603 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset9)) +
    0.01669572298371154 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset8)) +
    0.016928497085583607 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset7)) +
    0.017131767326797782 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset6)) +
    0.017304399211284734 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset5)) +
    0.01744542201792462 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset4)) +
    0.01755403789039951 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset3)) +
    0.01762962935478291 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset2)) +
    0.017671765165776156 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset1)) +
    0.008841157484661126 * texture(sampler2D(t_input, s_input), coords) +
    0.017671765165776156 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset1)) +
    0.01762962935478291 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset2)) +
    0.01755403789039951 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset3)) +
    0.01744542201792462 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset4)) +
    0.017304399211284734 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset5)) +
    0.017131767326797782 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset6)) +
    0.016928497085583607 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset7)) +
    0.01669572298371154 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset8)) +
    0.016434732749150603 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset9)) +
    0.01614695548256012 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset10)) +
    0.01583394863464242 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset11)) +
    0.015497383985937882 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset12)) +
    0.015139032805388785 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset13)) +
    0.014760750371599412 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset14)) +
    0.014364460045399605 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset15)) +
    0.013952137084056716 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset16)) +
    0.013525792386312846 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset17)) +
    0.013087456353439537 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset18)) +
    0.012639163044841285 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset19)) +
    0.012182934797588727 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset20)) +
    0.011720767467850403 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset21)) +
    0.011254616438781924 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset22)) +
    0.010786383524315633 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset23)) +
    0.01031790488178656 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset24)) +
    0.00985094002876074 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset25)) +
    0.009387162041135905 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset26)) +
    0.008928148990898846 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset27)) +
    0.00847537666317812 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset28)) +
    0.008030212573741822 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset29)) +
    0.007593911290155542 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset30)) +
    0.007167611042708547 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset31)) +
    0.006752331595181258 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset32)) +
    0.006348973330776769 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset33)) +
    0.0059583174952505666 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset34)) +
    0.0055810275275867925 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset35)) +
    0.005217651398589419 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset36)) +
    0.004868624869548322 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset37)) +
    0.004534275576732686 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset38)) +
    0.0042148278428514084 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset39)) +
    0.003910408113763832 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset40)) +
    0.0036210509175557105 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset41)) +
    0.0033467052435199977 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset42)) +
    0.0030872412404822614 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset43)) +
    0.0028424571371497734 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset44)) +
    0.0026120862915905477 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset45)) +
    0.002395804282401946 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset46)) +
    0.0021932359604397325 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset47)) +
    0.002003962386976615 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset48)) +
    0.0018275275916743673 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset49)) +
    0.0016634450916199449 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset50)) +
    0.0015112041207351384 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset51)) +
    0.0013702755269727439 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset52)) +
    0.0012401173027233958 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset53)) +
    0.0011201797216531992 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset54)) +
    0.001009910062665175 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset55)) +
    0.0009087569087350045 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset56))
  );
}
