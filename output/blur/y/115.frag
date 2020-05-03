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
  float offset1 = one_pixel * 1.49982716902869;
  float offset2 = one_pixel * 3.4995967277336097;
  float offset3 = one_pixel * 5.49936628643853;
  float offset4 = one_pixel * 7.499135845143449;
  float offset5 = one_pixel * 9.49890540384837;
  float offset6 = one_pixel * 11.49867496255329;
  float offset7 = one_pixel * 13.49844452125821;
  float offset8 = one_pixel * 15.49821407996313;
  float offset9 = one_pixel * 17.49798363866805;
  float offset10 = one_pixel * 19.49775319737297;
  float offset11 = one_pixel * 21.49752275607789;
  float offset12 = one_pixel * 23.497292314782808;
  float offset13 = one_pixel * 25.49706187348773;
  float offset14 = one_pixel * 27.49683143219265;
  float offset15 = one_pixel * 29.49660099089757;
  float offset16 = one_pixel * 31.49637054960249;
  float offset17 = one_pixel * 33.49614010830741;
  float offset18 = one_pixel * 35.49590966701233;
  float offset19 = one_pixel * 37.49567922571725;
  float offset20 = one_pixel * 39.495448784422166;
  float offset21 = one_pixel * 41.495218343127085;
  float offset22 = one_pixel * 43.49498790183201;
  float offset23 = one_pixel * 45.49475746053693;
  float offset24 = one_pixel * 47.49452701924185;
  float offset25 = one_pixel * 49.49429657794677;
  float offset26 = one_pixel * 51.49406613665169;
  float offset27 = one_pixel * 53.49383569535661;
  float offset28 = one_pixel * 55.49360525406153;
  float offset29 = one_pixel * 57.49337481276645;
  float offset30 = one_pixel * 59.49314437147137;
  float offset31 = one_pixel * 61.492913930176286;
  float offset32 = one_pixel * 63.492683488881205;
  float offset33 = one_pixel * 65.49245304758612;
  float offset34 = one_pixel * 67.49222260629105;
  float offset35 = one_pixel * 69.49199216499596;
  float offset36 = one_pixel * 71.49176172370089;
  float offset37 = one_pixel * 73.4915312824058;
  float offset38 = one_pixel * 75.49130084111073;
  float offset39 = one_pixel * 77.49107039981564;
  float offset40 = one_pixel * 79.49083995852057;
  float offset41 = one_pixel * 81.4906095172255;
  float offset42 = one_pixel * 83.4903790759304;
  float offset43 = one_pixel * 85.49014863463533;
  float offset44 = one_pixel * 87.48991819334024;
  float offset45 = one_pixel * 89.48968775204517;
  float offset46 = one_pixel * 91.48945731075008;
  float offset47 = one_pixel * 93.48922686945501;
  float offset48 = one_pixel * 95.48899642815992;
  float offset49 = one_pixel * 97.48876598686485;
  float offset50 = one_pixel * 99.48853554556976;
  float offset51 = one_pixel * 101.48830510427469;
  float offset52 = one_pixel * 103.4880746629796;
  float offset53 = one_pixel * 105.48784422168453;
  float offset54 = one_pixel * 107.48761378038945;
  float offset55 = one_pixel * 109.48738333909436;
  float offset56 = one_pixel * 111.48715289779929;
  float offset57 = one_pixel * 113.4869224565042;

  gl_FragColor = (
    0.0008924436326114333 * texture2D(u_texture, vec2(coords.x, coords.y - offset57)) +
    0.0009899685996314692 * texture2D(u_texture, vec2(coords.x, coords.y - offset56)) +
    0.0010961272444776795 * texture2D(u_texture, vec2(coords.x, coords.y - offset55)) +
    0.0012114332021141753 * texture2D(u_texture, vec2(coords.x, coords.y - offset54)) +
    0.0013364014494064243 * texture2D(u_texture, vec2(coords.x, coords.y - offset53)) +
    0.0014715444580252557 * texture2D(u_texture, vec2(coords.x, coords.y - offset52)) +
    0.0016173679712945669 * texture2D(u_texture, vec2(coords.x, coords.y - offset51)) +
    0.0017743664152225916 * texture2D(u_texture, vec2(coords.x, coords.y - offset50)) +
    0.0019430179599461393 * texture2D(u_texture, vec2(coords.x, coords.y - offset49)) +
    0.002123779254160737 * texture2D(u_texture, vec2(coords.x, coords.y - offset48)) +
    0.0023170798617324043 * texture2D(u_texture, vec2(coords.x, coords.y - offset47)) +
    0.002523316436501361 * texture2D(u_texture, vec2(coords.x, coords.y - offset46)) +
    0.0027428466781946902 * texture2D(u_texture, vec2(coords.x, coords.y - offset45)) +
    0.00297598311925295 * texture2D(u_texture, vec2(coords.x, coords.y - offset44)) +
    0.0032229867991242123 * texture2D(u_texture, vec2(coords.x, coords.y - offset43)) +
    0.0034840608890588363 * texture2D(u_texture, vec2(coords.x, coords.y - offset42)) +
    0.003759344336514157 * texture2D(u_texture, vec2(coords.x, coords.y - offset41)) +
    0.004048905603810686 * texture2D(u_texture, vec2(coords.x, coords.y - offset40)) +
    0.0043527365805296255 * texture2D(u_texture, vec2(coords.x, coords.y - offset39)) +
    0.004670746753166033 * texture2D(u_texture, vec2(coords.x, coords.y - offset38)) +
    0.0050027577186179195 * texture2D(u_texture, vec2(coords.x, coords.y - offset37)) +
    0.005348498130071643 * texture2D(u_texture, vec2(coords.x, coords.y - offset36)) +
    0.005707599164621802 * texture2D(u_texture, vec2(coords.x, coords.y - offset35)) +
    0.006079590601437294 * texture2D(u_texture, vec2(coords.x, coords.y - offset34)) +
    0.006463897597369423 * texture2D(u_texture, vec2(coords.x, coords.y - offset33)) +
    0.006859838243528674 * texture2D(u_texture, vec2(coords.x, coords.y - offset32)) +
    0.007266621981492612 * texture2D(u_texture, vec2(coords.x, coords.y - offset31)) +
    0.007683348951432858 * texture2D(u_texture, vec2(coords.x, coords.y - offset30)) +
    0.008109010336576164 * texture2D(u_texture, vec2(coords.x, coords.y - offset29)) +
    0.008542489759084459 * texture2D(u_texture, vec2(coords.x, coords.y - offset28)) +
    0.00898256577172255 * texture2D(u_texture, vec2(coords.x, coords.y - offset27)) +
    0.009427915477681686 * texture2D(u_texture, vec2(coords.x, coords.y - offset26)) +
    0.009877119297774066 * texture2D(u_texture, vec2(coords.x, coords.y - offset25)) +
    0.010328666890068491 * texture2D(u_texture, vec2(coords.x, coords.y - offset24)) +
    0.010780964212088627 * texture2D(u_texture, vec2(coords.x, coords.y - offset23)) +
    0.011232341700155751 * texture2D(u_texture, vec2(coords.x, coords.y - offset22)) +
    0.011681063524561847 * texture2D(u_texture, vec2(coords.x, coords.y - offset21)) +
    0.012125337863258728 * texture2D(u_texture, vec2(coords.x, coords.y - offset20)) +
    0.012563328120910615 * texture2D(u_texture, vec2(coords.x, coords.y - offset19)) +
    0.01299316500475526 * texture2D(u_texture, vec2(coords.x, coords.y - offset18)) +
    0.013412959354030371 * texture2D(u_texture, vec2(coords.x, coords.y - offset17)) +
    0.013820815606022817 * texture2D(u_texture, vec2(coords.x, coords.y - offset16)) +
    0.014214845769355321 * texture2D(u_texture, vec2(coords.x, coords.y - offset15)) +
    0.014593183764192611 * texture2D(u_texture, vec2(coords.x, coords.y - offset14)) +
    0.014953999979859942 * texture2D(u_texture, vec2(coords.x, coords.y - offset13)) +
    0.015295515893130674 * texture2D(u_texture, vec2(coords.x, coords.y - offset12)) +
    0.01561601858533491 * texture2D(u_texture, vec2(coords.x, coords.y - offset11)) +
    0.015913874993612128 * texture2D(u_texture, vec2(coords.x, coords.y - offset10)) +
    0.01618754573118329 * texture2D(u_texture, vec2(coords.x, coords.y - offset9)) +
    0.01643559831351565 * texture2D(u_texture, vec2(coords.x, coords.y - offset8)) +
    0.01665671963171683 * texture2D(u_texture, vec2(coords.x, coords.y - offset7)) +
    0.016849727521398187 * texture2D(u_texture, vec2(coords.x, coords.y - offset6)) +
    0.01701358128452001 * texture2D(u_texture, vec2(coords.x, coords.y - offset5)) +
    0.017147391033256642 * texture2D(u_texture, vec2(coords.x, coords.y - offset4)) +
    0.017250425738538504 * texture2D(u_texture, vec2(coords.x, coords.y - offset3)) +
    0.017322119881439897 * texture2D(u_texture, vec2(coords.x, coords.y - offset2)) +
    0.017362078622748293 * texture2D(u_texture, vec2(coords.x, coords.y - offset1)) +
    0.008686041408316044 * texture2D(u_texture, coords) +
    0.017362078622748293 * texture2D(u_texture, vec2(coords.x, coords.y + offset1)) +
    0.017322119881439897 * texture2D(u_texture, vec2(coords.x, coords.y + offset2)) +
    0.017250425738538504 * texture2D(u_texture, vec2(coords.x, coords.y + offset3)) +
    0.017147391033256642 * texture2D(u_texture, vec2(coords.x, coords.y + offset4)) +
    0.01701358128452001 * texture2D(u_texture, vec2(coords.x, coords.y + offset5)) +
    0.016849727521398187 * texture2D(u_texture, vec2(coords.x, coords.y + offset6)) +
    0.01665671963171683 * texture2D(u_texture, vec2(coords.x, coords.y + offset7)) +
    0.01643559831351565 * texture2D(u_texture, vec2(coords.x, coords.y + offset8)) +
    0.01618754573118329 * texture2D(u_texture, vec2(coords.x, coords.y + offset9)) +
    0.015913874993612128 * texture2D(u_texture, vec2(coords.x, coords.y + offset10)) +
    0.01561601858533491 * texture2D(u_texture, vec2(coords.x, coords.y + offset11)) +
    0.015295515893130674 * texture2D(u_texture, vec2(coords.x, coords.y + offset12)) +
    0.014953999979859942 * texture2D(u_texture, vec2(coords.x, coords.y + offset13)) +
    0.014593183764192611 * texture2D(u_texture, vec2(coords.x, coords.y + offset14)) +
    0.014214845769355321 * texture2D(u_texture, vec2(coords.x, coords.y + offset15)) +
    0.013820815606022817 * texture2D(u_texture, vec2(coords.x, coords.y + offset16)) +
    0.013412959354030371 * texture2D(u_texture, vec2(coords.x, coords.y + offset17)) +
    0.01299316500475526 * texture2D(u_texture, vec2(coords.x, coords.y + offset18)) +
    0.012563328120910615 * texture2D(u_texture, vec2(coords.x, coords.y + offset19)) +
    0.012125337863258728 * texture2D(u_texture, vec2(coords.x, coords.y + offset20)) +
    0.011681063524561847 * texture2D(u_texture, vec2(coords.x, coords.y + offset21)) +
    0.011232341700155751 * texture2D(u_texture, vec2(coords.x, coords.y + offset22)) +
    0.010780964212088627 * texture2D(u_texture, vec2(coords.x, coords.y + offset23)) +
    0.010328666890068491 * texture2D(u_texture, vec2(coords.x, coords.y + offset24)) +
    0.009877119297774066 * texture2D(u_texture, vec2(coords.x, coords.y + offset25)) +
    0.009427915477681686 * texture2D(u_texture, vec2(coords.x, coords.y + offset26)) +
    0.00898256577172255 * texture2D(u_texture, vec2(coords.x, coords.y + offset27)) +
    0.008542489759084459 * texture2D(u_texture, vec2(coords.x, coords.y + offset28)) +
    0.008109010336576164 * texture2D(u_texture, vec2(coords.x, coords.y + offset29)) +
    0.007683348951432858 * texture2D(u_texture, vec2(coords.x, coords.y + offset30)) +
    0.007266621981492612 * texture2D(u_texture, vec2(coords.x, coords.y + offset31)) +
    0.006859838243528674 * texture2D(u_texture, vec2(coords.x, coords.y + offset32)) +
    0.006463897597369423 * texture2D(u_texture, vec2(coords.x, coords.y + offset33)) +
    0.006079590601437294 * texture2D(u_texture, vec2(coords.x, coords.y + offset34)) +
    0.005707599164621802 * texture2D(u_texture, vec2(coords.x, coords.y + offset35)) +
    0.005348498130071643 * texture2D(u_texture, vec2(coords.x, coords.y + offset36)) +
    0.0050027577186179195 * texture2D(u_texture, vec2(coords.x, coords.y + offset37)) +
    0.004670746753166033 * texture2D(u_texture, vec2(coords.x, coords.y + offset38)) +
    0.0043527365805296255 * texture2D(u_texture, vec2(coords.x, coords.y + offset39)) +
    0.004048905603810686 * texture2D(u_texture, vec2(coords.x, coords.y + offset40)) +
    0.003759344336514157 * texture2D(u_texture, vec2(coords.x, coords.y + offset41)) +
    0.0034840608890588363 * texture2D(u_texture, vec2(coords.x, coords.y + offset42)) +
    0.0032229867991242123 * texture2D(u_texture, vec2(coords.x, coords.y + offset43)) +
    0.00297598311925295 * texture2D(u_texture, vec2(coords.x, coords.y + offset44)) +
    0.0027428466781946902 * texture2D(u_texture, vec2(coords.x, coords.y + offset45)) +
    0.002523316436501361 * texture2D(u_texture, vec2(coords.x, coords.y + offset46)) +
    0.0023170798617324043 * texture2D(u_texture, vec2(coords.x, coords.y + offset47)) +
    0.002123779254160737 * texture2D(u_texture, vec2(coords.x, coords.y + offset48)) +
    0.0019430179599461393 * texture2D(u_texture, vec2(coords.x, coords.y + offset49)) +
    0.0017743664152225916 * texture2D(u_texture, vec2(coords.x, coords.y + offset50)) +
    0.0016173679712945669 * texture2D(u_texture, vec2(coords.x, coords.y + offset51)) +
    0.0014715444580252557 * texture2D(u_texture, vec2(coords.x, coords.y + offset52)) +
    0.0013364014494064243 * texture2D(u_texture, vec2(coords.x, coords.y + offset53)) +
    0.0012114332021141753 * texture2D(u_texture, vec2(coords.x, coords.y + offset54)) +
    0.0010961272444776795 * texture2D(u_texture, vec2(coords.x, coords.y + offset55)) +
    0.0009899685996314692 * texture2D(u_texture, vec2(coords.x, coords.y + offset56)) +
    0.0008924436326114333 * texture2D(u_texture, vec2(coords.x, coords.y + offset57))
  );
}
