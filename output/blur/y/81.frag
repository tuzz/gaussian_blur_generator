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
  float offset1 = one_pixel * 1.4996491228070175;
  float offset2 = one_pixel * 3.4991812865497076;
  float offset3 = one_pixel * 5.4987134502923976;
  float offset4 = one_pixel * 7.4982456140350875;
  float offset5 = one_pixel * 9.497777777777777;
  float offset6 = one_pixel * 11.497309941520468;
  float offset7 = one_pixel * 13.496842105263157;
  float offset8 = one_pixel * 15.496374269005848;
  float offset9 = one_pixel * 17.495906432748537;
  float offset10 = one_pixel * 19.49543859649123;
  float offset11 = one_pixel * 21.49497076023392;
  float offset12 = one_pixel * 23.494502923976608;
  float offset13 = one_pixel * 25.494035087719297;
  float offset14 = one_pixel * 27.49356725146199;
  float offset15 = one_pixel * 29.49309941520468;
  float offset16 = one_pixel * 31.492631578947368;
  float offset17 = one_pixel * 33.49216374269006;
  float offset18 = one_pixel * 35.491695906432746;
  float offset19 = one_pixel * 37.49122807017544;
  float offset20 = one_pixel * 39.49076023391813;
  float offset21 = one_pixel * 41.49029239766082;
  float offset22 = one_pixel * 43.48982456140351;
  float offset23 = one_pixel * 45.4893567251462;
  float offset24 = one_pixel * 47.48888888888889;
  float offset25 = one_pixel * 49.48842105263158;
  float offset26 = one_pixel * 51.48795321637427;
  float offset27 = one_pixel * 53.48748538011696;
  float offset28 = one_pixel * 55.48701754385965;
  float offset29 = one_pixel * 57.486549707602336;
  float offset30 = one_pixel * 59.48608187134503;
  float offset31 = one_pixel * 61.48561403508772;
  float offset32 = one_pixel * 63.48514619883041;
  float offset33 = one_pixel * 65.4846783625731;
  float offset34 = one_pixel * 67.48421052631579;
  float offset35 = one_pixel * 69.48374269005848;
  float offset36 = one_pixel * 71.48327485380116;
  float offset37 = one_pixel * 73.48280701754386;
  float offset38 = one_pixel * 75.48233918128655;
  float offset39 = one_pixel * 77.48187134502923;
  float offset40 = one_pixel * 79.48140350877193;

  gl_FragColor = (
    0.0012863740058577477 * texture2D(u_texture, vec2(coords.x, coords.y - offset40)) +
    0.0014899755359860723 * texture2D(u_texture, vec2(coords.x, coords.y - offset39)) +
    0.0017193481755607837 * texture2D(u_texture, vec2(coords.x, coords.y - offset38)) +
    0.001976612091615428 * texture2D(u_texture, vec2(coords.x, coords.y - offset37)) +
    0.0022638731613137835 * texture2D(u_texture, vec2(coords.x, coords.y - offset36)) +
    0.002583187108990843 * texture2D(u_texture, vec2(coords.x, coords.y - offset35)) +
    0.002936519369830555 * texture2D(u_texture, vec2(coords.x, coords.y - offset34)) +
    0.003325701021993816 * texture2D(u_texture, vec2(coords.x, coords.y - offset33)) +
    0.0037523812874204676 * texture2D(u_texture, vec2(coords.x, coords.y - offset32)) +
    0.0042179772662783825 * texture2D(u_texture, vec2(coords.x, coords.y - offset31)) +
    0.0047236217361107625 * texture2D(u_texture, vec2(coords.x, coords.y - offset30)) +
    0.005270110008394572 * texture2D(u_texture, vec2(coords.x, coords.y - offset29)) +
    0.0058578469861407505 * texture2D(u_texture, vec2(coords.x, coords.y - offset28)) +
    0.00648679569962898 * texture2D(u_texture, vec2(coords.x, coords.y - offset27)) +
    0.007156428706524193 * texture2D(u_texture, vec2(coords.x, coords.y - offset26)) +
    0.007865683820755065 * texture2D(u_texture, vec2(coords.x, coords.y - offset25)) +
    0.008612925675377985 * texture2D(u_texture, vec2(coords.x, coords.y - offset24)) +
    0.009395914622700301 * texture2D(u_texture, vec2(coords.x, coords.y - offset23)) +
    0.010211784425776393 * texture2D(u_texture, vec2(coords.x, coords.y - offset22)) +
    0.011057030095990981 * texture2D(u_texture, vec2(coords.x, coords.y - offset21)) +
    0.011927507080435839 * texture2D(u_texture, vec2(coords.x, coords.y - offset20)) +
    0.01281844280067624 * texture2D(u_texture, vec2(coords.x, coords.y - offset19)) +
    0.013724461293828538 * texture2D(u_texture, vec2(coords.x, coords.y - offset18)) +
    0.01463962141226706 * texture2D(u_texture, vec2(coords.x, coords.y - offset17)) +
    0.015557468706464503 * texture2D(u_texture, vec2(coords.x, coords.y - offset16)) +
    0.016471100755124785 * texture2D(u_texture, vec2(coords.x, coords.y - offset15)) +
    0.017373245328314406 * texture2D(u_texture, vec2(coords.x, coords.y - offset14)) +
    0.01825635038459097 * texture2D(u_texture, vec2(coords.x, coords.y - offset13)) +
    0.019112684525045328 * texture2D(u_texture, vec2(coords.x, coords.y - offset12)) +
    0.019934446169145935 * texture2D(u_texture, vec2(coords.x, coords.y - offset11)) +
    0.020713879392748828 * texture2D(u_texture, vec2(coords.x, coords.y - offset10)) +
    0.021443394090516016 * texture2D(u_texture, vec2(coords.x, coords.y - offset9)) +
    0.02211568790505776 * texture2D(u_texture, vec2(coords.x, coords.y - offset8)) +
    0.022723867213505985 * texture2D(u_texture, vec2(coords.x, coords.y - offset7)) +
    0.02326156438690509 * texture2D(u_texture, vec2(coords.x, coords.y - offset6)) +
    0.023723048544161445 * texture2D(u_texture, vec2(coords.x, coords.y - offset5)) +
    0.024103327112814803 * texture2D(u_texture, vec2(coords.x, coords.y - offset4)) +
    0.024398235682976516 * texture2D(u_texture, vec2(coords.x, coords.y - offset3)) +
    0.02460451389465168 * texture2D(u_texture, vec2(coords.x, coords.y - offset2)) +
    0.024719865425466715 * texture2D(u_texture, vec2(coords.x, coords.y - offset1)) +
    0.012374394186107399 * texture2D(u_texture, coords) +
    0.024719865425466715 * texture2D(u_texture, vec2(coords.x, coords.y + offset1)) +
    0.02460451389465168 * texture2D(u_texture, vec2(coords.x, coords.y + offset2)) +
    0.024398235682976516 * texture2D(u_texture, vec2(coords.x, coords.y + offset3)) +
    0.024103327112814803 * texture2D(u_texture, vec2(coords.x, coords.y + offset4)) +
    0.023723048544161445 * texture2D(u_texture, vec2(coords.x, coords.y + offset5)) +
    0.02326156438690509 * texture2D(u_texture, vec2(coords.x, coords.y + offset6)) +
    0.022723867213505985 * texture2D(u_texture, vec2(coords.x, coords.y + offset7)) +
    0.02211568790505776 * texture2D(u_texture, vec2(coords.x, coords.y + offset8)) +
    0.021443394090516016 * texture2D(u_texture, vec2(coords.x, coords.y + offset9)) +
    0.020713879392748828 * texture2D(u_texture, vec2(coords.x, coords.y + offset10)) +
    0.019934446169145935 * texture2D(u_texture, vec2(coords.x, coords.y + offset11)) +
    0.019112684525045328 * texture2D(u_texture, vec2(coords.x, coords.y + offset12)) +
    0.01825635038459097 * texture2D(u_texture, vec2(coords.x, coords.y + offset13)) +
    0.017373245328314406 * texture2D(u_texture, vec2(coords.x, coords.y + offset14)) +
    0.016471100755124785 * texture2D(u_texture, vec2(coords.x, coords.y + offset15)) +
    0.015557468706464503 * texture2D(u_texture, vec2(coords.x, coords.y + offset16)) +
    0.01463962141226706 * texture2D(u_texture, vec2(coords.x, coords.y + offset17)) +
    0.013724461293828538 * texture2D(u_texture, vec2(coords.x, coords.y + offset18)) +
    0.01281844280067624 * texture2D(u_texture, vec2(coords.x, coords.y + offset19)) +
    0.011927507080435839 * texture2D(u_texture, vec2(coords.x, coords.y + offset20)) +
    0.011057030095990981 * texture2D(u_texture, vec2(coords.x, coords.y + offset21)) +
    0.010211784425776393 * texture2D(u_texture, vec2(coords.x, coords.y + offset22)) +
    0.009395914622700301 * texture2D(u_texture, vec2(coords.x, coords.y + offset23)) +
    0.008612925675377985 * texture2D(u_texture, vec2(coords.x, coords.y + offset24)) +
    0.007865683820755065 * texture2D(u_texture, vec2(coords.x, coords.y + offset25)) +
    0.007156428706524193 * texture2D(u_texture, vec2(coords.x, coords.y + offset26)) +
    0.00648679569962898 * texture2D(u_texture, vec2(coords.x, coords.y + offset27)) +
    0.0058578469861407505 * texture2D(u_texture, vec2(coords.x, coords.y + offset28)) +
    0.005270110008394572 * texture2D(u_texture, vec2(coords.x, coords.y + offset29)) +
    0.0047236217361107625 * texture2D(u_texture, vec2(coords.x, coords.y + offset30)) +
    0.0042179772662783825 * texture2D(u_texture, vec2(coords.x, coords.y + offset31)) +
    0.0037523812874204676 * texture2D(u_texture, vec2(coords.x, coords.y + offset32)) +
    0.003325701021993816 * texture2D(u_texture, vec2(coords.x, coords.y + offset33)) +
    0.002936519369830555 * texture2D(u_texture, vec2(coords.x, coords.y + offset34)) +
    0.002583187108990843 * texture2D(u_texture, vec2(coords.x, coords.y + offset35)) +
    0.0022638731613137835 * texture2D(u_texture, vec2(coords.x, coords.y + offset36)) +
    0.001976612091615428 * texture2D(u_texture, vec2(coords.x, coords.y + offset37)) +
    0.0017193481755607837 * texture2D(u_texture, vec2(coords.x, coords.y + offset38)) +
    0.0014899755359860723 * texture2D(u_texture, vec2(coords.x, coords.y + offset39)) +
    0.0012863740058577477 * texture2D(u_texture, vec2(coords.x, coords.y + offset40))
  );
}
