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
  float offset1 = one_pixel * 1.499838657631494;
  float offset2 = one_pixel * 3.499623534473486;
  float offset3 = one_pixel * 5.499408411315478;
  float offset4 = one_pixel * 7.49919328815747;
  float offset5 = one_pixel * 9.498978164999462;
  float offset6 = one_pixel * 11.498763041841455;
  float offset7 = one_pixel * 13.498547918683446;
  float offset8 = one_pixel * 15.498332795525439;
  float offset9 = one_pixel * 17.49811767236743;
  float offset10 = one_pixel * 19.49790254920942;
  float offset11 = one_pixel * 21.497687426051414;
  float offset12 = one_pixel * 23.497472302893406;
  float offset13 = one_pixel * 25.4972571797354;
  float offset14 = one_pixel * 27.497042056577392;
  float offset15 = one_pixel * 29.49682693341938;
  float offset16 = one_pixel * 31.496611810261374;
  float offset17 = one_pixel * 33.49639668710336;
  float offset18 = one_pixel * 35.496181563945356;
  float offset19 = one_pixel * 37.49596644078735;
  float offset20 = one_pixel * 39.49575131762934;
  float offset21 = one_pixel * 41.495536194471335;
  float offset22 = one_pixel * 43.49532107131333;
  float offset23 = one_pixel * 45.49510594815532;
  float offset24 = one_pixel * 47.49489082499731;
  float offset25 = one_pixel * 49.494675701839306;
  float offset26 = one_pixel * 51.4944605786813;
  float offset27 = one_pixel * 53.494245455523284;
  float offset28 = one_pixel * 55.49403033236528;
  float offset29 = one_pixel * 57.49381520920727;
  float offset30 = one_pixel * 59.49360008604926;
  float offset31 = one_pixel * 61.493384962891255;
  float offset32 = one_pixel * 63.49316983973325;
  float offset33 = one_pixel * 65.49295471657524;
  float offset34 = one_pixel * 67.49273959341723;
  float offset35 = one_pixel * 69.49252447025923;
  float offset36 = one_pixel * 71.49230934710121;
  float offset37 = one_pixel * 73.49209422394321;
  float offset38 = one_pixel * 75.4918791007852;
  float offset39 = one_pixel * 77.4916639776272;
  float offset40 = one_pixel * 79.49144885446918;
  float offset41 = one_pixel * 81.49123373131117;
  float offset42 = one_pixel * 83.49101860815317;
  float offset43 = one_pixel * 85.49080348499515;
  float offset44 = one_pixel * 87.49058836183715;
  float offset45 = one_pixel * 89.49037323867914;
  float offset46 = one_pixel * 91.49015811552114;
  float offset47 = one_pixel * 93.48994299236313;
  float offset48 = one_pixel * 95.48972786920513;
  float offset49 = one_pixel * 97.48951274604711;
  float offset50 = one_pixel * 99.4892976228891;
  float offset51 = one_pixel * 101.4890824997311;
  float offset52 = one_pixel * 103.48886737657308;
  float offset53 = one_pixel * 105.48865225341508;
  float offset54 = one_pixel * 107.48843713025707;
  float offset55 = one_pixel * 109.48822200709907;
  float offset56 = one_pixel * 111.48800688394105;
  float offset57 = one_pixel * 113.48779176078305;
  float offset58 = one_pixel * 115.48757663762504;
  float offset59 = one_pixel * 117.48736151446703;

  gl_FragColor = (
    0.0008610360742891931 * texture2D(u_texture, vec2(coords.x, coords.y - offset59)) +
    0.0009518371910270467 * texture2D(u_texture, vec2(coords.x, coords.y - offset58)) +
    0.001050403589231514 * texture2D(u_texture, vec2(coords.x, coords.y - offset57)) +
    0.0011571827324651316 * texture2D(u_texture, vec2(coords.x, coords.y - offset56)) +
    0.0012726234681288404 * texture2D(u_texture, vec2(coords.x, coords.y - offset55)) +
    0.0013971729280396505 * texture2D(u_texture, vec2(coords.x, coords.y - offset54)) +
    0.001531273132693318 * texture2D(u_texture, vec2(coords.x, coords.y - offset53)) +
    0.0016753573064025545 * texture2D(u_texture, vec2(coords.x, coords.y - offset52)) +
    0.0018298459148545164 * texture2D(u_texture, vec2(coords.x, coords.y - offset51)) +
    0.001995142441243693 * texture2D(u_texture, vec2(coords.x, coords.y - offset50)) +
    0.002171628921958267 * texture2D(u_texture, vec2(coords.x, coords.y - offset49)) +
    0.0023596612677714637 * texture2D(u_texture, vec2(coords.x, coords.y - offset48)) +
    0.00255956440154815 * texture2D(u_texture, vec2(coords.x, coords.y - offset47)) +
    0.0027716272485470853 * texture2D(u_texture, vec2(coords.x, coords.y - offset46)) +
    0.0029960976204000374 * texture2D(u_texture, vec2(coords.x, coords.y - offset45)) +
    0.0032331770386939095 * texture2D(u_texture, vec2(coords.x, coords.y - offset44)) +
    0.003483015548679699 * texture2D(u_texture, vec2(coords.x, coords.y - offset43)) +
    0.003745706577887971 * texture2D(u_texture, vec2(coords.x, coords.y - offset42)) +
    0.004021281898248273 * texture2D(u_texture, vec2(coords.x, coords.y - offset41)) +
    0.004309706753593186 * texture2D(u_texture, vec2(coords.x, coords.y - offset40)) +
    0.004610875217082245 * texture2D(u_texture, vec2(coords.x, coords.y - offset39)) +
    0.004924605845016199 * texture2D(u_texture, vec2(coords.x, coords.y - offset38)) +
    0.005250637694643679 * texture2D(u_texture, vec2(coords.x, coords.y - offset37)) +
    0.005588626773813832 * texture2D(u_texture, vec2(coords.x, coords.y - offset36)) +
    0.005938142989633743 * texture2D(u_texture, vec2(coords.x, coords.y - offset35)) +
    0.006298667661594405 * texture2D(u_texture, vec2(coords.x, coords.y - offset34)) +
    0.0066695916618936596 * texture2D(u_texture, vec2(coords.x, coords.y - offset33)) +
    0.007050214241884803 * texture2D(u_texture, vec2(coords.x, coords.y - offset32)) +
    0.007439742598708393 * texture2D(u_texture, vec2(coords.x, coords.y - offset31)) +
    0.007837292230233994 * texture2D(u_texture, vec2(coords.x, coords.y - offset30)) +
    0.008241888119479065 * texture2D(u_texture, vec2(coords.x, coords.y - offset29)) +
    0.008652466781735025 * texture2D(u_texture, vec2(coords.x, coords.y - offset28)) +
    0.009067879198786854 * texture2D(u_texture, vec2(coords.x, coords.y - offset27)) +
    0.009486894654953523 * texture2D(u_texture, vec2(coords.x, coords.y - offset26)) +
    0.009908205479312315 * texture2D(u_texture, vec2(coords.x, coords.y - offset25)) +
    0.010330432687529085 * texture2D(u_texture, vec2(coords.x, coords.y - offset24)) +
    0.010752132505343612 * texture2D(u_texture, vec2(coords.x, coords.y - offset23)) +
    0.011171803744113796 * texture2D(u_texture, vec2(coords.x, coords.y - offset22)) +
    0.011587895987076088 * texture2D(u_texture, vec2(coords.x, coords.y - offset21)) +
    0.011998818533313114 * texture2D(u_texture, vec2(coords.x, coords.y - offset20)) +
    0.012402950035020168 * texture2D(u_texture, vec2(coords.x, coords.y - offset19)) +
    0.012798648752720292 * texture2D(u_texture, vec2(coords.x, coords.y - offset18)) +
    0.013184263342782415 * texture2D(u_texture, vec2(coords.x, coords.y - offset17)) +
    0.013558144082134151 * texture2D(u_texture, vec2(coords.x, coords.y - offset16)) +
    0.013918654426607193 * texture2D(u_texture, vec2(coords.x, coords.y - offset15)) +
    0.014264182792075013 * texture2D(u_texture, vec2(coords.x, coords.y - offset14)) +
    0.014593154441589835 * texture2D(u_texture, vec2(coords.x, coords.y - offset13)) +
    0.014904043357230778 * texture2D(u_texture, vec2(coords.x, coords.y - offset12)) +
    0.015195383972448032 * texture2D(u_texture, vec2(coords.x, coords.y - offset11)) +
    0.015465782639414595 * texture2D(u_texture, vec2(coords.x, coords.y - offset10)) +
    0.015713928706337397 * texture2D(u_texture, vec2(coords.x, coords.y - offset9)) +
    0.01593860508186411 * texture2D(u_texture, vec2(coords.x, coords.y - offset8)) +
    0.016138698167652517 * texture2D(u_texture, vec2(coords.x, coords.y - offset7)) +
    0.01631320704581686 * texture2D(u_texture, vec2(coords.x, coords.y - offset6)) +
    0.016461251815271628 * texture2D(u_texture, vec2(coords.x, coords.y - offset5)) +
    0.016582080979868696 * texture2D(u_texture, vec2(coords.x, coords.y - offset4)) +
    0.016675077801552175 * texture2D(u_texture, vec2(coords.x, coords.y - offset3)) +
    0.016739765543392963 * texture2D(u_texture, vec2(coords.x, coords.y - offset2)) +
    0.016775811540144243 * texture2D(u_texture, vec2(coords.x, coords.y - offset1)) +
    0.00839241762845202 * texture2D(u_texture, coords) +
    0.016775811540144243 * texture2D(u_texture, vec2(coords.x, coords.y + offset1)) +
    0.016739765543392963 * texture2D(u_texture, vec2(coords.x, coords.y + offset2)) +
    0.016675077801552175 * texture2D(u_texture, vec2(coords.x, coords.y + offset3)) +
    0.016582080979868696 * texture2D(u_texture, vec2(coords.x, coords.y + offset4)) +
    0.016461251815271628 * texture2D(u_texture, vec2(coords.x, coords.y + offset5)) +
    0.01631320704581686 * texture2D(u_texture, vec2(coords.x, coords.y + offset6)) +
    0.016138698167652517 * texture2D(u_texture, vec2(coords.x, coords.y + offset7)) +
    0.01593860508186411 * texture2D(u_texture, vec2(coords.x, coords.y + offset8)) +
    0.015713928706337397 * texture2D(u_texture, vec2(coords.x, coords.y + offset9)) +
    0.015465782639414595 * texture2D(u_texture, vec2(coords.x, coords.y + offset10)) +
    0.015195383972448032 * texture2D(u_texture, vec2(coords.x, coords.y + offset11)) +
    0.014904043357230778 * texture2D(u_texture, vec2(coords.x, coords.y + offset12)) +
    0.014593154441589835 * texture2D(u_texture, vec2(coords.x, coords.y + offset13)) +
    0.014264182792075013 * texture2D(u_texture, vec2(coords.x, coords.y + offset14)) +
    0.013918654426607193 * texture2D(u_texture, vec2(coords.x, coords.y + offset15)) +
    0.013558144082134151 * texture2D(u_texture, vec2(coords.x, coords.y + offset16)) +
    0.013184263342782415 * texture2D(u_texture, vec2(coords.x, coords.y + offset17)) +
    0.012798648752720292 * texture2D(u_texture, vec2(coords.x, coords.y + offset18)) +
    0.012402950035020168 * texture2D(u_texture, vec2(coords.x, coords.y + offset19)) +
    0.011998818533313114 * texture2D(u_texture, vec2(coords.x, coords.y + offset20)) +
    0.011587895987076088 * texture2D(u_texture, vec2(coords.x, coords.y + offset21)) +
    0.011171803744113796 * texture2D(u_texture, vec2(coords.x, coords.y + offset22)) +
    0.010752132505343612 * texture2D(u_texture, vec2(coords.x, coords.y + offset23)) +
    0.010330432687529085 * texture2D(u_texture, vec2(coords.x, coords.y + offset24)) +
    0.009908205479312315 * texture2D(u_texture, vec2(coords.x, coords.y + offset25)) +
    0.009486894654953523 * texture2D(u_texture, vec2(coords.x, coords.y + offset26)) +
    0.009067879198786854 * texture2D(u_texture, vec2(coords.x, coords.y + offset27)) +
    0.008652466781735025 * texture2D(u_texture, vec2(coords.x, coords.y + offset28)) +
    0.008241888119479065 * texture2D(u_texture, vec2(coords.x, coords.y + offset29)) +
    0.007837292230233994 * texture2D(u_texture, vec2(coords.x, coords.y + offset30)) +
    0.007439742598708393 * texture2D(u_texture, vec2(coords.x, coords.y + offset31)) +
    0.007050214241884803 * texture2D(u_texture, vec2(coords.x, coords.y + offset32)) +
    0.0066695916618936596 * texture2D(u_texture, vec2(coords.x, coords.y + offset33)) +
    0.006298667661594405 * texture2D(u_texture, vec2(coords.x, coords.y + offset34)) +
    0.005938142989633743 * texture2D(u_texture, vec2(coords.x, coords.y + offset35)) +
    0.005588626773813832 * texture2D(u_texture, vec2(coords.x, coords.y + offset36)) +
    0.005250637694643679 * texture2D(u_texture, vec2(coords.x, coords.y + offset37)) +
    0.004924605845016199 * texture2D(u_texture, vec2(coords.x, coords.y + offset38)) +
    0.004610875217082245 * texture2D(u_texture, vec2(coords.x, coords.y + offset39)) +
    0.004309706753593186 * texture2D(u_texture, vec2(coords.x, coords.y + offset40)) +
    0.004021281898248273 * texture2D(u_texture, vec2(coords.x, coords.y + offset41)) +
    0.003745706577887971 * texture2D(u_texture, vec2(coords.x, coords.y + offset42)) +
    0.003483015548679699 * texture2D(u_texture, vec2(coords.x, coords.y + offset43)) +
    0.0032331770386939095 * texture2D(u_texture, vec2(coords.x, coords.y + offset44)) +
    0.0029960976204000374 * texture2D(u_texture, vec2(coords.x, coords.y + offset45)) +
    0.0027716272485470853 * texture2D(u_texture, vec2(coords.x, coords.y + offset46)) +
    0.00255956440154815 * texture2D(u_texture, vec2(coords.x, coords.y + offset47)) +
    0.0023596612677714637 * texture2D(u_texture, vec2(coords.x, coords.y + offset48)) +
    0.002171628921958267 * texture2D(u_texture, vec2(coords.x, coords.y + offset49)) +
    0.001995142441243693 * texture2D(u_texture, vec2(coords.x, coords.y + offset50)) +
    0.0018298459148545164 * texture2D(u_texture, vec2(coords.x, coords.y + offset51)) +
    0.0016753573064025545 * texture2D(u_texture, vec2(coords.x, coords.y + offset52)) +
    0.001531273132693318 * texture2D(u_texture, vec2(coords.x, coords.y + offset53)) +
    0.0013971729280396505 * texture2D(u_texture, vec2(coords.x, coords.y + offset54)) +
    0.0012726234681288404 * texture2D(u_texture, vec2(coords.x, coords.y + offset55)) +
    0.0011571827324651316 * texture2D(u_texture, vec2(coords.x, coords.y + offset56)) +
    0.001050403589231514 * texture2D(u_texture, vec2(coords.x, coords.y + offset57)) +
    0.0009518371910270467 * texture2D(u_texture, vec2(coords.x, coords.y + offset58)) +
    0.0008610360742891931 * texture2D(u_texture, vec2(coords.x, coords.y + offset59))
  );
}
