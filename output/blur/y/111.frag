#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
#else
  precision mediump float;
#endif

uniform sampler2D u_texture;
uniform vec4 u_dimensions;

// Generated by https://github.com/tuzz/gaussian_blur_generator

void main() {
  vec2 coords = gl_FragCoord.xy / u_dimensions.xy;

  float one_pixel = u_dimensions.w;
  float offset1 = one_pixel * 1.499814379408489;
  float offset2 = one_pixel * 3.4995668852864745;
  float offset3 = one_pixel * 5.49931939116446;
  float offset4 = one_pixel * 7.4990718970424455;
  float offset5 = one_pixel * 9.49882440292043;
  float offset6 = one_pixel * 11.498576908798416;
  float offset7 = one_pixel * 13.498329414676402;
  float offset8 = one_pixel * 15.498081920554387;
  float offset9 = one_pixel * 17.497834426432373;
  float offset10 = one_pixel * 19.49758693231036;
  float offset11 = one_pixel * 21.497339438188344;
  float offset12 = one_pixel * 23.49709194406633;
  float offset13 = one_pixel * 25.496844449944312;
  float offset14 = one_pixel * 27.496596955822298;
  float offset15 = one_pixel * 29.496349461700284;
  float offset16 = one_pixel * 31.49610196757827;
  float offset17 = one_pixel * 33.495854473456255;
  float offset18 = one_pixel * 35.49560697933424;
  float offset19 = one_pixel * 37.49535948521223;
  float offset20 = one_pixel * 39.49511199109021;
  float offset21 = one_pixel * 41.4948644969682;
  float offset22 = one_pixel * 43.494617002846184;
  float offset23 = one_pixel * 45.49436950872417;
  float offset24 = one_pixel * 47.494122014602155;
  float offset25 = one_pixel * 49.49387452048014;
  float offset26 = one_pixel * 51.493627026358126;
  float offset27 = one_pixel * 53.49337953223611;
  float offset28 = one_pixel * 55.4931320381141;
  float offset29 = one_pixel * 57.49288454399208;
  float offset30 = one_pixel * 59.49263704987006;
  float offset31 = one_pixel * 61.49238955574805;
  float offset32 = one_pixel * 63.49214206162603;
  float offset33 = one_pixel * 65.49189456750402;
  float offset34 = one_pixel * 67.49164707338201;
  float offset35 = one_pixel * 69.49139957925999;
  float offset36 = one_pixel * 71.49115208513798;
  float offset37 = one_pixel * 73.49090459101596;
  float offset38 = one_pixel * 75.49065709689395;
  float offset39 = one_pixel * 77.49040960277193;
  float offset40 = one_pixel * 79.49016210864993;
  float offset41 = one_pixel * 81.4899146145279;
  float offset42 = one_pixel * 83.48966712040588;
  float offset43 = one_pixel * 85.48941962628388;
  float offset44 = one_pixel * 87.48917213216185;
  float offset45 = one_pixel * 89.48892463803985;
  float offset46 = one_pixel * 91.48867714391783;
  float offset47 = one_pixel * 93.48842964979582;
  float offset48 = one_pixel * 95.4881821556738;
  float offset49 = one_pixel * 97.48793466155179;
  float offset50 = one_pixel * 99.48768716742977;
  float offset51 = one_pixel * 101.48743967330776;
  float offset52 = one_pixel * 103.48719217918574;
  float offset53 = one_pixel * 105.48694468506373;
  float offset54 = one_pixel * 107.48669719094171;
  float offset55 = one_pixel * 109.4864496968197;

  gl_FragColor = (
    0.0009258655224231685 * texture2D(u_texture, vec2(coords.x, coords.y - offset55)) +
    0.0010308654589252328 * texture2D(u_texture, vec2(coords.x, coords.y - offset54)) +
    0.0011455015437863167 * texture2D(u_texture, vec2(coords.x, coords.y - offset53)) +
    0.001270366424464682 * texture2D(u_texture, vec2(coords.x, coords.y - offset52)) +
    0.0014060539809116028 * texture2D(u_texture, vec2(coords.x, coords.y - offset51)) +
    0.0015531545121624797 * texture2D(u_texture, vec2(coords.x, coords.y - offset50)) +
    0.0017122494414624331 * texture2D(u_texture, vec2(coords.x, coords.y - offset49)) +
    0.001883905554630987 * texture2D(u_texture, vec2(coords.x, coords.y - offset48)) +
    0.002068668794708987 * texture2D(u_texture, vec2(coords.x, coords.y - offset47)) +
    0.002267057644757403 * texture2D(u_texture, vec2(coords.x, coords.y - offset46)) +
    0.0024795561398778315 * texture2D(u_texture, vec2(coords.x, coords.y - offset45)) +
    0.002706606558964626 * texture2D(u_texture, vec2(coords.x, coords.y - offset44)) +
    0.0029486018562265336 * texture2D(u_texture, vec2(coords.x, coords.y - offset43)) +
    0.0032058779019627543 * texture2D(u_texture, vec2(coords.x, coords.y - offset42)) +
    0.0034787056112612594 * texture2D(u_texture, vec2(coords.x, coords.y - offset41)) +
    0.0037672830480110072 * texture2D(u_texture, vec2(coords.x, coords.y - offset40)) +
    0.004071727599681216 * texture2D(u_texture, vec2(coords.x, coords.y - offset39)) +
    0.004392068325512271 * texture2D(u_texture, vec2(coords.x, coords.y - offset38)) +
    0.004728238586876273 * texture2D(u_texture, vec2(coords.x, coords.y - offset37)) +
    0.005080069073397216 * texture2D(u_texture, vec2(coords.x, coords.y - offset36)) +
    0.005447281341777398 * texture2D(u_texture, vec2(coords.x, coords.y - offset35)) +
    0.005829481985978572 * texture2D(u_texture, vec2(coords.x, coords.y - offset34)) +
    0.006226157557294027 * texture2D(u_texture, vec2(coords.x, coords.y - offset33)) +
    0.0066366703507867225 * texture2D(u_texture, vec2(coords.x, coords.y - offset32)) +
    0.007060255170454122 * texture2D(u_texture, vec2(coords.x, coords.y - offset31)) +
    0.007496017179242149 * texture2D(u_texture, vec2(coords.x, coords.y - offset30)) +
    0.007942930931636857 * texture2D(u_texture, vec2(coords.x, coords.y - offset29)) +
    0.00839984067602295 * texture2D(u_texture, vec2(coords.x, coords.y - offset28)) +
    0.008865462001367343 * texture2D(u_texture, vec2(coords.x, coords.y - offset27)) +
    0.009338384888163877 * texture2D(u_texture, vec2(coords.x, coords.y - offset26)) +
    0.00981707820710896 * texture2D(u_texture, vec2(coords.x, coords.y - offset25)) +
    0.010299895690860327 * texture2D(u_texture, vec2(coords.x, coords.y - offset24)) +
    0.010785083384700122 * texture2D(u_texture, vec2(coords.x, coords.y - offset23)) +
    0.011270788561258219 * texture2D(u_texture, vec2(coords.x, coords.y - offset22)) +
    0.011755070062969787 * texture2D(u_texture, vec2(coords.x, coords.y - offset21)) +
    0.012235910013992197 * texture2D(u_texture, vec2(coords.x, coords.y - offset20)) +
    0.012711226821267272 * texture2D(u_texture, vec2(coords.x, coords.y - offset19)) +
    0.013178889362681676 * texture2D(u_texture, vec2(coords.x, coords.y - offset18)) +
    0.013636732239258646 * texture2D(u_texture, vec2(coords.x, coords.y - offset17)) +
    0.014082571948419132 * texture2D(u_texture, vec2(coords.x, coords.y - offset16)) +
    0.014514223816984723 * texture2D(u_texture, vec2(coords.x, coords.y - offset15)) +
    0.014929519516148484 * texture2D(u_texture, vec2(coords.x, coords.y - offset14)) +
    0.015326324966478564 * texture2D(u_texture, vec2(coords.x, coords.y - offset13)) +
    0.015702558429475898 * texture2D(u_texture, vec2(coords.x, coords.y - offset12)) +
    0.01605620857357218 * texture2D(u_texture, vec2(coords.x, coords.y - offset11)) +
    0.01638535229696937 * texture2D(u_texture, vec2(coords.x, coords.y - offset10)) +
    0.016688172087572457 * texture2D(u_texture, vec2(coords.x, coords.y - offset9)) +
    0.01696297270157713 * texture2D(u_texture, vec2(coords.x, coords.y - offset8)) +
    0.01720819694710081 * texture2D(u_texture, vec2(coords.x, coords.y - offset7)) +
    0.017422440367578028 * texture2D(u_texture, vec2(coords.x, coords.y - offset6)) +
    0.01760446463139856 * texture2D(u_texture, vec2(coords.x, coords.y - offset5)) +
    0.01775320944929762 * texture2D(u_texture, vec2(coords.x, coords.y - offset4)) +
    0.017867802859093774 * texture2D(u_texture, vec2(coords.x, coords.y - offset3)) +
    0.017947569738229655 * texture2D(u_texture, vec2(coords.x, coords.y - offset2)) +
    0.01799203842786197 * texture2D(u_texture, vec2(coords.x, coords.y - offset1)) +
    0.009001586470832282 * texture2D(u_texture, coords) +
    0.01799203842786197 * texture2D(u_texture, vec2(coords.x, coords.y + offset1)) +
    0.017947569738229655 * texture2D(u_texture, vec2(coords.x, coords.y + offset2)) +
    0.017867802859093774 * texture2D(u_texture, vec2(coords.x, coords.y + offset3)) +
    0.01775320944929762 * texture2D(u_texture, vec2(coords.x, coords.y + offset4)) +
    0.01760446463139856 * texture2D(u_texture, vec2(coords.x, coords.y + offset5)) +
    0.017422440367578028 * texture2D(u_texture, vec2(coords.x, coords.y + offset6)) +
    0.01720819694710081 * texture2D(u_texture, vec2(coords.x, coords.y + offset7)) +
    0.01696297270157713 * texture2D(u_texture, vec2(coords.x, coords.y + offset8)) +
    0.016688172087572457 * texture2D(u_texture, vec2(coords.x, coords.y + offset9)) +
    0.01638535229696937 * texture2D(u_texture, vec2(coords.x, coords.y + offset10)) +
    0.01605620857357218 * texture2D(u_texture, vec2(coords.x, coords.y + offset11)) +
    0.015702558429475898 * texture2D(u_texture, vec2(coords.x, coords.y + offset12)) +
    0.015326324966478564 * texture2D(u_texture, vec2(coords.x, coords.y + offset13)) +
    0.014929519516148484 * texture2D(u_texture, vec2(coords.x, coords.y + offset14)) +
    0.014514223816984723 * texture2D(u_texture, vec2(coords.x, coords.y + offset15)) +
    0.014082571948419132 * texture2D(u_texture, vec2(coords.x, coords.y + offset16)) +
    0.013636732239258646 * texture2D(u_texture, vec2(coords.x, coords.y + offset17)) +
    0.013178889362681676 * texture2D(u_texture, vec2(coords.x, coords.y + offset18)) +
    0.012711226821267272 * texture2D(u_texture, vec2(coords.x, coords.y + offset19)) +
    0.012235910013992197 * texture2D(u_texture, vec2(coords.x, coords.y + offset20)) +
    0.011755070062969787 * texture2D(u_texture, vec2(coords.x, coords.y + offset21)) +
    0.011270788561258219 * texture2D(u_texture, vec2(coords.x, coords.y + offset22)) +
    0.010785083384700122 * texture2D(u_texture, vec2(coords.x, coords.y + offset23)) +
    0.010299895690860327 * texture2D(u_texture, vec2(coords.x, coords.y + offset24)) +
    0.00981707820710896 * texture2D(u_texture, vec2(coords.x, coords.y + offset25)) +
    0.009338384888163877 * texture2D(u_texture, vec2(coords.x, coords.y + offset26)) +
    0.008865462001367343 * texture2D(u_texture, vec2(coords.x, coords.y + offset27)) +
    0.00839984067602295 * texture2D(u_texture, vec2(coords.x, coords.y + offset28)) +
    0.007942930931636857 * texture2D(u_texture, vec2(coords.x, coords.y + offset29)) +
    0.007496017179242149 * texture2D(u_texture, vec2(coords.x, coords.y + offset30)) +
    0.007060255170454122 * texture2D(u_texture, vec2(coords.x, coords.y + offset31)) +
    0.0066366703507867225 * texture2D(u_texture, vec2(coords.x, coords.y + offset32)) +
    0.006226157557294027 * texture2D(u_texture, vec2(coords.x, coords.y + offset33)) +
    0.005829481985978572 * texture2D(u_texture, vec2(coords.x, coords.y + offset34)) +
    0.005447281341777398 * texture2D(u_texture, vec2(coords.x, coords.y + offset35)) +
    0.005080069073397216 * texture2D(u_texture, vec2(coords.x, coords.y + offset36)) +
    0.004728238586876273 * texture2D(u_texture, vec2(coords.x, coords.y + offset37)) +
    0.004392068325512271 * texture2D(u_texture, vec2(coords.x, coords.y + offset38)) +
    0.004071727599681216 * texture2D(u_texture, vec2(coords.x, coords.y + offset39)) +
    0.0037672830480110072 * texture2D(u_texture, vec2(coords.x, coords.y + offset40)) +
    0.0034787056112612594 * texture2D(u_texture, vec2(coords.x, coords.y + offset41)) +
    0.0032058779019627543 * texture2D(u_texture, vec2(coords.x, coords.y + offset42)) +
    0.0029486018562265336 * texture2D(u_texture, vec2(coords.x, coords.y + offset43)) +
    0.002706606558964626 * texture2D(u_texture, vec2(coords.x, coords.y + offset44)) +
    0.0024795561398778315 * texture2D(u_texture, vec2(coords.x, coords.y + offset45)) +
    0.002267057644757403 * texture2D(u_texture, vec2(coords.x, coords.y + offset46)) +
    0.002068668794708987 * texture2D(u_texture, vec2(coords.x, coords.y + offset47)) +
    0.001883905554630987 * texture2D(u_texture, vec2(coords.x, coords.y + offset48)) +
    0.0017122494414624331 * texture2D(u_texture, vec2(coords.x, coords.y + offset49)) +
    0.0015531545121624797 * texture2D(u_texture, vec2(coords.x, coords.y + offset50)) +
    0.0014060539809116028 * texture2D(u_texture, vec2(coords.x, coords.y + offset51)) +
    0.001270366424464682 * texture2D(u_texture, vec2(coords.x, coords.y + offset52)) +
    0.0011455015437863167 * texture2D(u_texture, vec2(coords.x, coords.y + offset53)) +
    0.0010308654589252328 * texture2D(u_texture, vec2(coords.x, coords.y + offset54)) +
    0.0009258655224231685 * texture2D(u_texture, vec2(coords.x, coords.y + offset55))
  );
}
