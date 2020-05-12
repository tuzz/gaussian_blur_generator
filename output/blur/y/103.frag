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
  float offset1 = one_pixel * 1.4997840794587591;
  float offset2 = one_pixel * 3.4994961854037716;
  float offset3 = one_pixel * 5.499208291348784;
  float offset4 = one_pixel * 7.498920397293796;
  float offset5 = one_pixel * 9.498632503238808;
  float offset6 = one_pixel * 11.498344609183821;
  float offset7 = one_pixel * 13.498056715128833;
  float offset8 = one_pixel * 15.497768821073844;
  float offset9 = one_pixel * 17.497480927018856;
  float offset10 = one_pixel * 19.49719303296387;
  float offset11 = one_pixel * 21.496905138908883;
  float offset12 = one_pixel * 23.496617244853894;
  float offset13 = one_pixel * 25.496329350798906;
  float offset14 = one_pixel * 27.496041456743917;
  float offset15 = one_pixel * 29.49575356268893;
  float offset16 = one_pixel * 31.495465668633944;
  float offset17 = one_pixel * 33.495177774578956;
  float offset18 = one_pixel * 35.494889880523964;
  float offset19 = one_pixel * 37.49460198646898;
  float offset20 = one_pixel * 39.494314092413994;
  float offset21 = one_pixel * 41.494026198359;
  float offset22 = one_pixel * 43.49373830430402;
  float offset23 = one_pixel * 45.493450410249025;
  float offset24 = one_pixel * 47.49316251619404;
  float offset25 = one_pixel * 49.492874622139055;
  float offset26 = one_pixel * 51.49258672808406;
  float offset27 = one_pixel * 53.49229883402908;
  float offset28 = one_pixel * 55.49201093997409;
  float offset29 = one_pixel * 57.4917230459191;
  float offset30 = one_pixel * 59.49143515186412;
  float offset31 = one_pixel * 61.491147257809125;
  float offset32 = one_pixel * 63.49085936375414;
  float offset33 = one_pixel * 65.49057146969915;
  float offset34 = one_pixel * 67.49028357564416;
  float offset35 = one_pixel * 69.48999568158918;
  float offset36 = one_pixel * 71.48970778753419;
  float offset37 = one_pixel * 73.4894198934792;
  float offset38 = one_pixel * 75.48913199942422;
  float offset39 = one_pixel * 77.48884410536922;
  float offset40 = one_pixel * 79.48855621131423;
  float offset41 = one_pixel * 81.48826831725926;
  float offset42 = one_pixel * 83.48798042320426;
  float offset43 = one_pixel * 85.48769252914927;
  float offset44 = one_pixel * 87.48740463509428;
  float offset45 = one_pixel * 89.4871167410393;
  float offset46 = one_pixel * 91.48682884698431;
  float offset47 = one_pixel * 93.48654095292932;
  float offset48 = one_pixel * 95.48625305887434;
  float offset49 = one_pixel * 97.48596516481935;
  float offset50 = one_pixel * 99.48567727076436;
  float offset51 = one_pixel * 101.48538937670938;

  gl_FragColor = (
    0.0010000869278945898 * texture2D(u_texture, vec2(coords.x, coords.y - offset51)) +
    0.001122811689858283 * texture2D(u_texture, vec2(coords.x, coords.y - offset50)) +
    0.0012576945437606582 * texture2D(u_texture, vec2(coords.x, coords.y - offset49)) +
    0.0014055378239815467 * texture2D(u_texture, vec2(coords.x, coords.y - offset48)) +
    0.001567144485680195 * texture2D(u_texture, vec2(coords.x, coords.y - offset47)) +
    0.0017433103678820014 * texture2D(u_texture, vec2(coords.x, coords.y - offset46)) +
    0.0019348156448337878 * texture2D(u_texture, vec2(coords.x, coords.y - offset45)) +
    0.002142415496927343 * texture2D(u_texture, vec2(coords.x, coords.y - offset44)) +
    0.0023668300492845095 * texture2D(u_texture, vec2(coords.x, coords.y - offset43)) +
    0.0026087336438421634 * texture2D(u_texture, vec2(coords.x, coords.y - offset42)) +
    0.0028687435291912086 * texture2D(u_texture, vec2(coords.x, coords.y - offset41)) +
    0.0031474080711823287 * texture2D(u_texture, vec2(coords.x, coords.y - offset40)) +
    0.003445194606041519 * texture2D(u_texture, vec2(coords.x, coords.y - offset39)) +
    0.0037624770760311213 * texture2D(u_texture, vec2(coords.x, coords.y - offset38)) +
    0.004099523605106747 * texture2D(u_texture, vec2(coords.x, coords.y - offset37)) +
    0.004456484188094048 * texture2D(u_texture, vec2(coords.x, coords.y - offset36)) +
    0.00483337868116608 * texture2D(u_texture, vec2(coords.x, coords.y - offset35)) +
    0.005230085293364959 * texture2D(u_texture, vec2(coords.x, coords.y - offset34)) +
    0.005646329788114951 * texture2D(u_texture, vec2(coords.x, coords.y - offset33)) +
    0.006081675609676569 * texture2D(u_texture, vec2(coords.x, coords.y - offset32)) +
    0.006535515151889671 * texture2D(u_texture, vec2(coords.x, coords.y - offset31)) +
    0.007007062384996868 * texture2D(u_texture, vec2(coords.x, coords.y - offset30)) +
    0.007495347050541332 * texture2D(u_texture, vec2(coords.x, coords.y - offset29)) +
    0.007999210624088357 * texture2D(u_texture, vec2(coords.x, coords.y - offset28)) +
    0.008517304230710628 * texture2D(u_texture, vec2(coords.x, coords.y - offset27)) +
    0.009048088678785803 * texture2D(u_texture, vec2(coords.x, coords.y - offset26)) +
    0.009589836753771997 * texture2D(u_texture, vec2(coords.x, coords.y - offset25)) +
    0.01014063788545502 * texture2D(u_texture, vec2(coords.x, coords.y - offset24)) +
    0.010698405270019114 * texture2D(u_texture, vec2(coords.x, coords.y - offset23)) +
    0.01126088549261308 * texture2D(u_texture, vec2(coords.x, coords.y - offset22)) +
    0.011825670657409327 * texture2D(u_texture, vec2(coords.x, coords.y - offset21)) +
    0.01239021299113094 * texture2D(u_texture, vec2(coords.x, coords.y - offset20)) +
    0.01295184184338993 * texture2D(u_texture, vec2(coords.x, coords.y - offset19)) +
    0.013507782963755526 * texture2D(u_texture, vec2(coords.x, coords.y - offset18)) +
    0.014055179892133498 * texture2D(u_texture, vec2(coords.x, coords.y - offset17)) +
    0.01459111725670626 * texture2D(u_texture, vec2(coords.x, coords.y - offset16)) +
    0.01511264573329979 * texture2D(u_texture, vec2(coords.x, coords.y - offset15)) +
    0.015616808382544837 * texture2D(u_texture, vec2(coords.x, coords.y - offset14)) +
    0.016100668047496255 * texture2D(u_texture, vec2(coords.x, coords.y - offset13)) +
    0.01656133546532425 * texture2D(u_texture, vec2(coords.x, coords.y - offset12)) +
    0.01699599772307649 * texture2D(u_texture, vec2(coords.x, coords.y - offset11)) +
    0.01740194667001381 * texture2D(u_texture, vec2(coords.x, coords.y - offset10)) +
    0.017776606888207758 * texture2D(u_texture, vec2(coords.x, coords.y - offset9)) +
    0.01811756281938066 * texture2D(u_texture, vec2(coords.x, coords.y - offset8)) +
    0.018422584649640222 * texture2D(u_texture, vec2(coords.x, coords.y - offset7)) +
    0.018689652564918554 * texture2D(u_texture, vec2(coords.x, coords.y - offset6)) +
    0.018916979008506807 * texture2D(u_texture, vec2(coords.x, coords.y - offset5)) +
    0.019103028597844147 * texture2D(u_texture, vec2(coords.x, coords.y - offset4)) +
    0.019246535390266595 * texture2D(u_texture, vec2(coords.x, coords.y - offset3)) +
    0.019346517226175437 * texture2D(u_texture, vec2(coords.x, coords.y - offset2)) +
    0.019402286922324482 * texture2D(u_texture, vec2(coords.x, coords.y - offset1)) +
    0.009708127323335881 * texture2D(u_texture, coords) +
    0.019402286922324482 * texture2D(u_texture, vec2(coords.x, coords.y + offset1)) +
    0.019346517226175437 * texture2D(u_texture, vec2(coords.x, coords.y + offset2)) +
    0.019246535390266595 * texture2D(u_texture, vec2(coords.x, coords.y + offset3)) +
    0.019103028597844147 * texture2D(u_texture, vec2(coords.x, coords.y + offset4)) +
    0.018916979008506807 * texture2D(u_texture, vec2(coords.x, coords.y + offset5)) +
    0.018689652564918554 * texture2D(u_texture, vec2(coords.x, coords.y + offset6)) +
    0.018422584649640222 * texture2D(u_texture, vec2(coords.x, coords.y + offset7)) +
    0.01811756281938066 * texture2D(u_texture, vec2(coords.x, coords.y + offset8)) +
    0.017776606888207758 * texture2D(u_texture, vec2(coords.x, coords.y + offset9)) +
    0.01740194667001381 * texture2D(u_texture, vec2(coords.x, coords.y + offset10)) +
    0.01699599772307649 * texture2D(u_texture, vec2(coords.x, coords.y + offset11)) +
    0.01656133546532425 * texture2D(u_texture, vec2(coords.x, coords.y + offset12)) +
    0.016100668047496255 * texture2D(u_texture, vec2(coords.x, coords.y + offset13)) +
    0.015616808382544837 * texture2D(u_texture, vec2(coords.x, coords.y + offset14)) +
    0.01511264573329979 * texture2D(u_texture, vec2(coords.x, coords.y + offset15)) +
    0.01459111725670626 * texture2D(u_texture, vec2(coords.x, coords.y + offset16)) +
    0.014055179892133498 * texture2D(u_texture, vec2(coords.x, coords.y + offset17)) +
    0.013507782963755526 * texture2D(u_texture, vec2(coords.x, coords.y + offset18)) +
    0.01295184184338993 * texture2D(u_texture, vec2(coords.x, coords.y + offset19)) +
    0.01239021299113094 * texture2D(u_texture, vec2(coords.x, coords.y + offset20)) +
    0.011825670657409327 * texture2D(u_texture, vec2(coords.x, coords.y + offset21)) +
    0.01126088549261308 * texture2D(u_texture, vec2(coords.x, coords.y + offset22)) +
    0.010698405270019114 * texture2D(u_texture, vec2(coords.x, coords.y + offset23)) +
    0.01014063788545502 * texture2D(u_texture, vec2(coords.x, coords.y + offset24)) +
    0.009589836753771997 * texture2D(u_texture, vec2(coords.x, coords.y + offset25)) +
    0.009048088678785803 * texture2D(u_texture, vec2(coords.x, coords.y + offset26)) +
    0.008517304230710628 * texture2D(u_texture, vec2(coords.x, coords.y + offset27)) +
    0.007999210624088357 * texture2D(u_texture, vec2(coords.x, coords.y + offset28)) +
    0.007495347050541332 * texture2D(u_texture, vec2(coords.x, coords.y + offset29)) +
    0.007007062384996868 * texture2D(u_texture, vec2(coords.x, coords.y + offset30)) +
    0.006535515151889671 * texture2D(u_texture, vec2(coords.x, coords.y + offset31)) +
    0.006081675609676569 * texture2D(u_texture, vec2(coords.x, coords.y + offset32)) +
    0.005646329788114951 * texture2D(u_texture, vec2(coords.x, coords.y + offset33)) +
    0.005230085293364959 * texture2D(u_texture, vec2(coords.x, coords.y + offset34)) +
    0.00483337868116608 * texture2D(u_texture, vec2(coords.x, coords.y + offset35)) +
    0.004456484188094048 * texture2D(u_texture, vec2(coords.x, coords.y + offset36)) +
    0.004099523605106747 * texture2D(u_texture, vec2(coords.x, coords.y + offset37)) +
    0.0037624770760311213 * texture2D(u_texture, vec2(coords.x, coords.y + offset38)) +
    0.003445194606041519 * texture2D(u_texture, vec2(coords.x, coords.y + offset39)) +
    0.0031474080711823287 * texture2D(u_texture, vec2(coords.x, coords.y + offset40)) +
    0.0028687435291912086 * texture2D(u_texture, vec2(coords.x, coords.y + offset41)) +
    0.0026087336438421634 * texture2D(u_texture, vec2(coords.x, coords.y + offset42)) +
    0.0023668300492845095 * texture2D(u_texture, vec2(coords.x, coords.y + offset43)) +
    0.002142415496927343 * texture2D(u_texture, vec2(coords.x, coords.y + offset44)) +
    0.0019348156448337878 * texture2D(u_texture, vec2(coords.x, coords.y + offset45)) +
    0.0017433103678820014 * texture2D(u_texture, vec2(coords.x, coords.y + offset46)) +
    0.001567144485680195 * texture2D(u_texture, vec2(coords.x, coords.y + offset47)) +
    0.0014055378239815467 * texture2D(u_texture, vec2(coords.x, coords.y + offset48)) +
    0.0012576945437606582 * texture2D(u_texture, vec2(coords.x, coords.y + offset49)) +
    0.001122811689858283 * texture2D(u_texture, vec2(coords.x, coords.y + offset50)) +
    0.0010000869278945898 * texture2D(u_texture, vec2(coords.x, coords.y + offset51))
  );
}
