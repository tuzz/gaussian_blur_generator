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
  float offset1 = one_pixel * 1.4998629010145326;
  float offset2 = one_pixel * 3.4996801023672424;
  float offset3 = one_pixel * 5.499497303719952;
  float offset4 = one_pixel * 7.499314505072663;
  float offset5 = one_pixel * 9.499131706425372;
  float offset6 = one_pixel * 11.498948907778082;
  float offset7 = one_pixel * 13.498766109130793;
  float offset8 = one_pixel * 15.498583310483502;
  float offset9 = one_pixel * 17.498400511836213;
  float offset10 = one_pixel * 19.49821771318892;
  float offset11 = one_pixel * 21.498034914541634;
  float offset12 = one_pixel * 23.497852115894343;
  float offset13 = one_pixel * 25.497669317247052;
  float offset14 = one_pixel * 27.49748651859976;
  float offset15 = one_pixel * 29.497303719952473;
  float offset16 = one_pixel * 31.497120921305182;
  float offset17 = one_pixel * 33.496938122657895;
  float offset18 = one_pixel * 35.4967553240106;
  float offset19 = one_pixel * 37.49657252536331;
  float offset20 = one_pixel * 39.496389726716025;
  float offset21 = one_pixel * 41.49620692806873;
  float offset22 = one_pixel * 43.49602412942144;
  float offset23 = one_pixel * 45.495841330774155;
  float offset24 = one_pixel * 47.49565853212686;
  float offset25 = one_pixel * 49.49547573347957;
  float offset26 = one_pixel * 51.495292934832285;
  float offset27 = one_pixel * 53.49511013618499;
  float offset28 = one_pixel * 55.4949273375377;
  float offset29 = one_pixel * 57.494744538890416;
  float offset30 = one_pixel * 59.49456174024312;
  float offset31 = one_pixel * 61.49437894159583;
  float offset32 = one_pixel * 63.49419614294854;
  float offset33 = one_pixel * 65.49401334430125;
  float offset34 = one_pixel * 67.49383054565396;
  float offset35 = one_pixel * 69.49364774700668;
  float offset36 = one_pixel * 71.49346494835939;
  float offset37 = one_pixel * 73.49328214971209;
  float offset38 = one_pixel * 75.4930993510648;
  float offset39 = one_pixel * 77.49291655241751;
  float offset40 = one_pixel * 79.49273375377022;
  float offset41 = one_pixel * 81.49255095512294;
  float offset42 = one_pixel * 83.49236815647564;
  float offset43 = one_pixel * 85.49218535782835;
  float offset44 = one_pixel * 87.49200255918106;
  float offset45 = one_pixel * 89.49181976053377;
  float offset46 = one_pixel * 91.49163696188648;
  float offset47 = one_pixel * 93.4914541632392;
  float offset48 = one_pixel * 95.4912713645919;
  float offset49 = one_pixel * 97.49108856594461;
  float offset50 = one_pixel * 99.49090576729732;
  float offset51 = one_pixel * 101.49072296865003;
  float offset52 = one_pixel * 103.49054017000275;
  float offset53 = one_pixel * 105.49035737135546;
  float offset54 = one_pixel * 107.49017457270816;
  float offset55 = one_pixel * 109.48999177406087;
  float offset56 = one_pixel * 111.48980897541358;
  float offset57 = one_pixel * 113.4896261767663;
  float offset58 = one_pixel * 115.489443378119;
  float offset59 = one_pixel * 117.48926057947172;
  float offset60 = one_pixel * 119.48907778082442;
  float offset61 = one_pixel * 121.48889498217713;
  float offset62 = one_pixel * 123.48871218352984;
  float offset63 = one_pixel * 125.48852938488255;
  float offset64 = one_pixel * 127.48834658623527;

  gl_FragColor = (
    0.0007924985255813082 * texture2D(u_texture, vec2(coords.x, coords.y - offset64)) +
    0.000869305655241366 * texture2D(u_texture, vec2(coords.x, coords.y - offset63)) +
    0.0009521626970568815 * texture2D(u_texture, vec2(coords.x, coords.y - offset62)) +
    0.0010413925056554144 * texture2D(u_texture, vec2(coords.x, coords.y - offset61)) +
    0.0011373191976021884 * texture2D(u_texture, vec2(coords.x, coords.y - offset60)) +
    0.001240266288390817 * texture2D(u_texture, vec2(coords.x, coords.y - offset59)) +
    0.0013505546610910139 * texture2D(u_texture, vec2(coords.x, coords.y - offset58)) +
    0.0014685003697650155 * texture2D(u_texture, vec2(coords.x, coords.y - offset57)) +
    0.0015944122828122195 * texture2D(u_texture, vec2(coords.x, coords.y - offset56)) +
    0.0017285895735714694 * texture2D(u_texture, vec2(coords.x, coords.y - offset55)) +
    0.00187131906778372 * texture2D(u_texture, vec2(coords.x, coords.y - offset54)) +
    0.002022872459872425 * texture2D(u_texture, vec2(coords.x, coords.y - offset53)) +
    0.0021835034124097147 * texture2D(u_texture, vec2(coords.x, coords.y - offset52)) +
    0.0023534445555750505 * texture2D(u_texture, vec2(coords.x, coords.y - offset51)) +
    0.002532904405848539 * texture2D(u_texture, vec2(coords.x, coords.y - offset50)) +
    0.0027220642255799893 * texture2D(u_texture, vec2(coords.x, coords.y - offset49)) +
    0.00292107484740134 * texture2D(u_texture, vec2(coords.x, coords.y - offset48)) +
    0.003130053489667001 * texture2D(u_texture, vec2(coords.x, coords.y - offset47)) +
    0.003349080591175146 * texture2D(u_texture, vec2(coords.x, coords.y - offset46)) +
    0.003578196695303867 * texture2D(u_texture, vec2(coords.x, coords.y - offset45)) +
    0.0038173994153497853 * texture2D(u_texture, vec2(coords.x, coords.y - offset44)) +
    0.004066640514244445 * texture2D(u_texture, vec2(coords.x, coords.y - offset43)) +
    0.00432582313290783 * texture2D(u_texture, vec2(coords.x, coords.y - offset42)) +
    0.004594799202243086 * texture2D(u_texture, vec2(coords.x, coords.y - offset41)) +
    0.004873367074148814 * texture2D(u_texture, vec2(coords.x, coords.y - offset40)) +
    0.0051612694068957155 * texture2D(u_texture, vec2(coords.x, coords.y - offset39)) +
    0.005458191339757262 * texture2D(u_texture, vec2(coords.x, coords.y - offset38)) +
    0.005763758990878817 * texture2D(u_texture, vec2(coords.x, coords.y - offset37)) +
    0.0060775383110011 * texture2D(u_texture, vec2(coords.x, coords.y - offset36)) +
    0.006399034323812697 * texture2D(u_texture, vec2(coords.x, coords.y - offset35)) +
    0.006727690781390042 * texture2D(u_texture, vec2(coords.x, coords.y - offset34)) +
    0.007062890260396102 * texture2D(u_texture, vec2(coords.x, coords.y - offset33)) +
    0.007403954721462616 * texture2D(u_texture, vec2(coords.x, coords.y - offset32)) +
    0.007750146550494293 * texture2D(u_texture, vec2(coords.x, coords.y - offset31)) +
    0.00810067009653358 * texture2D(u_texture, vec2(coords.x, coords.y - offset30)) +
    0.008454673716345798 * texture2D(u_texture, vec2(coords.x, coords.y - offset29)) +
    0.008811252331068236 * texture2D(u_texture, vec2(coords.x, coords.y - offset28)) +
    0.009169450495161914 * texture2D(u_texture, vec2(coords.x, coords.y - offset27)) +
    0.009528265972566502 * texture2D(u_texture, vec2(coords.x, coords.y - offset26)) +
    0.009886653809448427 * texture2D(u_texture, vec2(coords.x, coords.y - offset25)) +
    0.010243530887316268 * texture2D(u_texture, vec2(coords.x, coords.y - offset24)) +
    0.010597780934626681 * texture2D(u_texture, vec2(coords.x, coords.y - offset23)) +
    0.010948259969392884 * texture2D(u_texture, vec2(coords.x, coords.y - offset22)) +
    0.01129380213981249 * texture2D(u_texture, vec2(coords.x, coords.y - offset21)) +
    0.011633225924630092 * texture2D(u_texture, vec2(coords.x, coords.y - offset20)) +
    0.011965340649920065 * texture2D(u_texture, vec2(coords.x, coords.y - offset19)) +
    0.012288953274292828 * texture2D(u_texture, vec2(coords.x, coords.y - offset18)) +
    0.012602875390267073 * texture2D(u_texture, vec2(coords.x, coords.y - offset17)) +
    0.012905930385780848 * texture2D(u_texture, vec2(coords.x, coords.y - offset16)) +
    0.013196960706600511 * texture2D(u_texture, vec2(coords.x, coords.y - offset15)) +
    0.013474835157786698 * texture2D(u_texture, vec2(coords.x, coords.y - offset14)) +
    0.013738456180441089 * texture2D(u_texture, vec2(coords.x, coords.y - offset13)) +
    0.013986767038729326 * texture2D(u_texture, vec2(coords.x, coords.y - offset12)) +
    0.014218758851686423 * texture2D(u_texture, vec2(coords.x, coords.y - offset11)) +
    0.014433477404584259 * texture2D(u_texture, vec2(coords.x, coords.y - offset10)) +
    0.014630029675687847 * texture2D(u_texture, vec2(coords.x, coords.y - offset9)) +
    0.01480759001604889 * texture2D(u_texture, vec2(coords.x, coords.y - offset8)) +
    0.014965405922570814 * texture2D(u_texture, vec2(coords.x, coords.y - offset7)) +
    0.015102803347906972 * texture2D(u_texture, vec2(coords.x, coords.y - offset6)) +
    0.015219191494789622 * texture2D(u_texture, vec2(coords.x, coords.y - offset5)) +
    0.015314067047087411 * texture2D(u_texture, vec2(coords.x, coords.y - offset4)) +
    0.015387017795198979 * texture2D(u_texture, vec2(coords.x, coords.y - offset3)) +
    0.015437725619245864 * texture2D(u_texture, vec2(coords.x, coords.y - offset2)) +
    0.015465968799856622 * texture2D(u_texture, vec2(coords.x, coords.y - offset1)) +
    0.007736518864495795 * texture2D(u_texture, coords) +
    0.015465968799856622 * texture2D(u_texture, vec2(coords.x, coords.y + offset1)) +
    0.015437725619245864 * texture2D(u_texture, vec2(coords.x, coords.y + offset2)) +
    0.015387017795198979 * texture2D(u_texture, vec2(coords.x, coords.y + offset3)) +
    0.015314067047087411 * texture2D(u_texture, vec2(coords.x, coords.y + offset4)) +
    0.015219191494789622 * texture2D(u_texture, vec2(coords.x, coords.y + offset5)) +
    0.015102803347906972 * texture2D(u_texture, vec2(coords.x, coords.y + offset6)) +
    0.014965405922570814 * texture2D(u_texture, vec2(coords.x, coords.y + offset7)) +
    0.01480759001604889 * texture2D(u_texture, vec2(coords.x, coords.y + offset8)) +
    0.014630029675687847 * texture2D(u_texture, vec2(coords.x, coords.y + offset9)) +
    0.014433477404584259 * texture2D(u_texture, vec2(coords.x, coords.y + offset10)) +
    0.014218758851686423 * texture2D(u_texture, vec2(coords.x, coords.y + offset11)) +
    0.013986767038729326 * texture2D(u_texture, vec2(coords.x, coords.y + offset12)) +
    0.013738456180441089 * texture2D(u_texture, vec2(coords.x, coords.y + offset13)) +
    0.013474835157786698 * texture2D(u_texture, vec2(coords.x, coords.y + offset14)) +
    0.013196960706600511 * texture2D(u_texture, vec2(coords.x, coords.y + offset15)) +
    0.012905930385780848 * texture2D(u_texture, vec2(coords.x, coords.y + offset16)) +
    0.012602875390267073 * texture2D(u_texture, vec2(coords.x, coords.y + offset17)) +
    0.012288953274292828 * texture2D(u_texture, vec2(coords.x, coords.y + offset18)) +
    0.011965340649920065 * texture2D(u_texture, vec2(coords.x, coords.y + offset19)) +
    0.011633225924630092 * texture2D(u_texture, vec2(coords.x, coords.y + offset20)) +
    0.01129380213981249 * texture2D(u_texture, vec2(coords.x, coords.y + offset21)) +
    0.010948259969392884 * texture2D(u_texture, vec2(coords.x, coords.y + offset22)) +
    0.010597780934626681 * texture2D(u_texture, vec2(coords.x, coords.y + offset23)) +
    0.010243530887316268 * texture2D(u_texture, vec2(coords.x, coords.y + offset24)) +
    0.009886653809448427 * texture2D(u_texture, vec2(coords.x, coords.y + offset25)) +
    0.009528265972566502 * texture2D(u_texture, vec2(coords.x, coords.y + offset26)) +
    0.009169450495161914 * texture2D(u_texture, vec2(coords.x, coords.y + offset27)) +
    0.008811252331068236 * texture2D(u_texture, vec2(coords.x, coords.y + offset28)) +
    0.008454673716345798 * texture2D(u_texture, vec2(coords.x, coords.y + offset29)) +
    0.00810067009653358 * texture2D(u_texture, vec2(coords.x, coords.y + offset30)) +
    0.007750146550494293 * texture2D(u_texture, vec2(coords.x, coords.y + offset31)) +
    0.007403954721462616 * texture2D(u_texture, vec2(coords.x, coords.y + offset32)) +
    0.007062890260396102 * texture2D(u_texture, vec2(coords.x, coords.y + offset33)) +
    0.006727690781390042 * texture2D(u_texture, vec2(coords.x, coords.y + offset34)) +
    0.006399034323812697 * texture2D(u_texture, vec2(coords.x, coords.y + offset35)) +
    0.0060775383110011 * texture2D(u_texture, vec2(coords.x, coords.y + offset36)) +
    0.005763758990878817 * texture2D(u_texture, vec2(coords.x, coords.y + offset37)) +
    0.005458191339757262 * texture2D(u_texture, vec2(coords.x, coords.y + offset38)) +
    0.0051612694068957155 * texture2D(u_texture, vec2(coords.x, coords.y + offset39)) +
    0.004873367074148814 * texture2D(u_texture, vec2(coords.x, coords.y + offset40)) +
    0.004594799202243086 * texture2D(u_texture, vec2(coords.x, coords.y + offset41)) +
    0.00432582313290783 * texture2D(u_texture, vec2(coords.x, coords.y + offset42)) +
    0.004066640514244445 * texture2D(u_texture, vec2(coords.x, coords.y + offset43)) +
    0.0038173994153497853 * texture2D(u_texture, vec2(coords.x, coords.y + offset44)) +
    0.003578196695303867 * texture2D(u_texture, vec2(coords.x, coords.y + offset45)) +
    0.003349080591175146 * texture2D(u_texture, vec2(coords.x, coords.y + offset46)) +
    0.003130053489667001 * texture2D(u_texture, vec2(coords.x, coords.y + offset47)) +
    0.00292107484740134 * texture2D(u_texture, vec2(coords.x, coords.y + offset48)) +
    0.0027220642255799893 * texture2D(u_texture, vec2(coords.x, coords.y + offset49)) +
    0.002532904405848539 * texture2D(u_texture, vec2(coords.x, coords.y + offset50)) +
    0.0023534445555750505 * texture2D(u_texture, vec2(coords.x, coords.y + offset51)) +
    0.0021835034124097147 * texture2D(u_texture, vec2(coords.x, coords.y + offset52)) +
    0.002022872459872425 * texture2D(u_texture, vec2(coords.x, coords.y + offset53)) +
    0.00187131906778372 * texture2D(u_texture, vec2(coords.x, coords.y + offset54)) +
    0.0017285895735714694 * texture2D(u_texture, vec2(coords.x, coords.y + offset55)) +
    0.0015944122828122195 * texture2D(u_texture, vec2(coords.x, coords.y + offset56)) +
    0.0014685003697650155 * texture2D(u_texture, vec2(coords.x, coords.y + offset57)) +
    0.0013505546610910139 * texture2D(u_texture, vec2(coords.x, coords.y + offset58)) +
    0.001240266288390817 * texture2D(u_texture, vec2(coords.x, coords.y + offset59)) +
    0.0011373191976021884 * texture2D(u_texture, vec2(coords.x, coords.y + offset60)) +
    0.0010413925056554144 * texture2D(u_texture, vec2(coords.x, coords.y + offset61)) +
    0.0009521626970568815 * texture2D(u_texture, vec2(coords.x, coords.y + offset62)) +
    0.000869305655241366 * texture2D(u_texture, vec2(coords.x, coords.y + offset63)) +
    0.0007924985255813082 * texture2D(u_texture, vec2(coords.x, coords.y + offset64))
  );
}
