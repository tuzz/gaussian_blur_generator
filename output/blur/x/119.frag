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

  f_color = (
    0.0008610360742891931 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset59, coords.y)) +
    0.0009518371910270467 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset58, coords.y)) +
    0.001050403589231514 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset57, coords.y)) +
    0.0011571827324651316 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset56, coords.y)) +
    0.0012726234681288404 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset55, coords.y)) +
    0.0013971729280396505 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset54, coords.y)) +
    0.001531273132693318 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset53, coords.y)) +
    0.0016753573064025545 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset52, coords.y)) +
    0.0018298459148545164 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset51, coords.y)) +
    0.001995142441243693 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset50, coords.y)) +
    0.002171628921958267 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset49, coords.y)) +
    0.0023596612677714637 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset48, coords.y)) +
    0.00255956440154815 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset47, coords.y)) +
    0.0027716272485470853 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset46, coords.y)) +
    0.0029960976204000374 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset45, coords.y)) +
    0.0032331770386939095 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset44, coords.y)) +
    0.003483015548679699 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset43, coords.y)) +
    0.003745706577887971 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset42, coords.y)) +
    0.004021281898248273 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset41, coords.y)) +
    0.004309706753593186 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset40, coords.y)) +
    0.004610875217082245 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset39, coords.y)) +
    0.004924605845016199 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset38, coords.y)) +
    0.005250637694643679 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset37, coords.y)) +
    0.005588626773813832 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset36, coords.y)) +
    0.005938142989633743 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset35, coords.y)) +
    0.006298667661594405 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset34, coords.y)) +
    0.0066695916618936596 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset33, coords.y)) +
    0.007050214241884803 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset32, coords.y)) +
    0.007439742598708393 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset31, coords.y)) +
    0.007837292230233994 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset30, coords.y)) +
    0.008241888119479065 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset29, coords.y)) +
    0.008652466781735025 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset28, coords.y)) +
    0.009067879198786854 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset27, coords.y)) +
    0.009486894654953523 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset26, coords.y)) +
    0.009908205479312315 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset25, coords.y)) +
    0.010330432687529085 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset24, coords.y)) +
    0.010752132505343612 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset23, coords.y)) +
    0.011171803744113796 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset22, coords.y)) +
    0.011587895987076088 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset21, coords.y)) +
    0.011998818533313114 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset20, coords.y)) +
    0.012402950035020168 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset19, coords.y)) +
    0.012798648752720292 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset18, coords.y)) +
    0.013184263342782415 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset17, coords.y)) +
    0.013558144082134151 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset16, coords.y)) +
    0.013918654426607193 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset15, coords.y)) +
    0.014264182792075013 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset14, coords.y)) +
    0.014593154441589835 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset13, coords.y)) +
    0.014904043357230778 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset12, coords.y)) +
    0.015195383972448032 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset11, coords.y)) +
    0.015465782639414595 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset10, coords.y)) +
    0.015713928706337397 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset9, coords.y)) +
    0.01593860508186411 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset8, coords.y)) +
    0.016138698167652517 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset7, coords.y)) +
    0.01631320704581686 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset6, coords.y)) +
    0.016461251815271628 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset5, coords.y)) +
    0.016582080979868696 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset4, coords.y)) +
    0.016675077801552175 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset3, coords.y)) +
    0.016739765543392963 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset2, coords.y)) +
    0.016775811540144243 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset1, coords.y)) +
    0.00839241762845202 * texture(sampler2D(t_input, s_input), coords) +
    0.016775811540144243 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset1, coords.y)) +
    0.016739765543392963 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset2, coords.y)) +
    0.016675077801552175 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset3, coords.y)) +
    0.016582080979868696 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset4, coords.y)) +
    0.016461251815271628 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset5, coords.y)) +
    0.01631320704581686 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset6, coords.y)) +
    0.016138698167652517 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset7, coords.y)) +
    0.01593860508186411 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset8, coords.y)) +
    0.015713928706337397 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset9, coords.y)) +
    0.015465782639414595 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset10, coords.y)) +
    0.015195383972448032 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset11, coords.y)) +
    0.014904043357230778 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset12, coords.y)) +
    0.014593154441589835 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset13, coords.y)) +
    0.014264182792075013 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset14, coords.y)) +
    0.013918654426607193 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset15, coords.y)) +
    0.013558144082134151 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset16, coords.y)) +
    0.013184263342782415 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset17, coords.y)) +
    0.012798648752720292 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset18, coords.y)) +
    0.012402950035020168 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset19, coords.y)) +
    0.011998818533313114 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset20, coords.y)) +
    0.011587895987076088 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset21, coords.y)) +
    0.011171803744113796 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset22, coords.y)) +
    0.010752132505343612 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset23, coords.y)) +
    0.010330432687529085 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset24, coords.y)) +
    0.009908205479312315 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset25, coords.y)) +
    0.009486894654953523 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset26, coords.y)) +
    0.009067879198786854 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset27, coords.y)) +
    0.008652466781735025 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset28, coords.y)) +
    0.008241888119479065 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset29, coords.y)) +
    0.007837292230233994 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset30, coords.y)) +
    0.007439742598708393 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset31, coords.y)) +
    0.007050214241884803 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset32, coords.y)) +
    0.0066695916618936596 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset33, coords.y)) +
    0.006298667661594405 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset34, coords.y)) +
    0.005938142989633743 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset35, coords.y)) +
    0.005588626773813832 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset36, coords.y)) +
    0.005250637694643679 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset37, coords.y)) +
    0.004924605845016199 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset38, coords.y)) +
    0.004610875217082245 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset39, coords.y)) +
    0.004309706753593186 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset40, coords.y)) +
    0.004021281898248273 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset41, coords.y)) +
    0.003745706577887971 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset42, coords.y)) +
    0.003483015548679699 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset43, coords.y)) +
    0.0032331770386939095 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset44, coords.y)) +
    0.0029960976204000374 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset45, coords.y)) +
    0.0027716272485470853 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset46, coords.y)) +
    0.00255956440154815 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset47, coords.y)) +
    0.0023596612677714637 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset48, coords.y)) +
    0.002171628921958267 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset49, coords.y)) +
    0.001995142441243693 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset50, coords.y)) +
    0.0018298459148545164 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset51, coords.y)) +
    0.0016753573064025545 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset52, coords.y)) +
    0.001531273132693318 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset53, coords.y)) +
    0.0013971729280396505 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset54, coords.y)) +
    0.0012726234681288404 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset55, coords.y)) +
    0.0011571827324651316 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset56, coords.y)) +
    0.001050403589231514 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset57, coords.y)) +
    0.0009518371910270467 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset58, coords.y)) +
    0.0008610360742891931 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset59, coords.y))
  );
}
