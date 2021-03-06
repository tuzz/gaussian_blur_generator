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

  f_color = (
    0.0007924985255813082 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset64, coords.y)) +
    0.000869305655241366 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset63, coords.y)) +
    0.0009521626970568815 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset62, coords.y)) +
    0.0010413925056554144 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset61, coords.y)) +
    0.0011373191976021884 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset60, coords.y)) +
    0.001240266288390817 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset59, coords.y)) +
    0.0013505546610910139 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset58, coords.y)) +
    0.0014685003697650155 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset57, coords.y)) +
    0.0015944122828122195 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset56, coords.y)) +
    0.0017285895735714694 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset55, coords.y)) +
    0.00187131906778372 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset54, coords.y)) +
    0.002022872459872425 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset53, coords.y)) +
    0.0021835034124097147 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset52, coords.y)) +
    0.0023534445555750505 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset51, coords.y)) +
    0.002532904405848539 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset50, coords.y)) +
    0.0027220642255799893 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset49, coords.y)) +
    0.00292107484740134 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset48, coords.y)) +
    0.003130053489667001 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset47, coords.y)) +
    0.003349080591175146 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset46, coords.y)) +
    0.003578196695303867 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset45, coords.y)) +
    0.0038173994153497853 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset44, coords.y)) +
    0.004066640514244445 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset43, coords.y)) +
    0.00432582313290783 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset42, coords.y)) +
    0.004594799202243086 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset41, coords.y)) +
    0.004873367074148814 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset40, coords.y)) +
    0.0051612694068957155 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset39, coords.y)) +
    0.005458191339757262 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset38, coords.y)) +
    0.005763758990878817 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset37, coords.y)) +
    0.0060775383110011 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset36, coords.y)) +
    0.006399034323812697 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset35, coords.y)) +
    0.006727690781390042 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset34, coords.y)) +
    0.007062890260396102 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset33, coords.y)) +
    0.007403954721462616 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset32, coords.y)) +
    0.007750146550494293 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset31, coords.y)) +
    0.00810067009653358 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset30, coords.y)) +
    0.008454673716345798 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset29, coords.y)) +
    0.008811252331068236 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset28, coords.y)) +
    0.009169450495161914 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset27, coords.y)) +
    0.009528265972566502 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset26, coords.y)) +
    0.009886653809448427 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset25, coords.y)) +
    0.010243530887316268 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset24, coords.y)) +
    0.010597780934626681 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset23, coords.y)) +
    0.010948259969392884 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset22, coords.y)) +
    0.01129380213981249 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset21, coords.y)) +
    0.011633225924630092 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset20, coords.y)) +
    0.011965340649920065 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset19, coords.y)) +
    0.012288953274292828 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset18, coords.y)) +
    0.012602875390267073 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset17, coords.y)) +
    0.012905930385780848 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset16, coords.y)) +
    0.013196960706600511 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset15, coords.y)) +
    0.013474835157786698 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset14, coords.y)) +
    0.013738456180441089 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset13, coords.y)) +
    0.013986767038729326 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset12, coords.y)) +
    0.014218758851686423 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset11, coords.y)) +
    0.014433477404584259 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset10, coords.y)) +
    0.014630029675687847 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset9, coords.y)) +
    0.01480759001604889 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset8, coords.y)) +
    0.014965405922570814 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset7, coords.y)) +
    0.015102803347906972 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset6, coords.y)) +
    0.015219191494789622 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset5, coords.y)) +
    0.015314067047087411 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset4, coords.y)) +
    0.015387017795198979 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset3, coords.y)) +
    0.015437725619245864 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset2, coords.y)) +
    0.015465968799856622 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset1, coords.y)) +
    0.007736518864495795 * texture(sampler2D(t_input, s_input), coords) +
    0.015465968799856622 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset1, coords.y)) +
    0.015437725619245864 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset2, coords.y)) +
    0.015387017795198979 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset3, coords.y)) +
    0.015314067047087411 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset4, coords.y)) +
    0.015219191494789622 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset5, coords.y)) +
    0.015102803347906972 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset6, coords.y)) +
    0.014965405922570814 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset7, coords.y)) +
    0.01480759001604889 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset8, coords.y)) +
    0.014630029675687847 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset9, coords.y)) +
    0.014433477404584259 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset10, coords.y)) +
    0.014218758851686423 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset11, coords.y)) +
    0.013986767038729326 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset12, coords.y)) +
    0.013738456180441089 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset13, coords.y)) +
    0.013474835157786698 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset14, coords.y)) +
    0.013196960706600511 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset15, coords.y)) +
    0.012905930385780848 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset16, coords.y)) +
    0.012602875390267073 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset17, coords.y)) +
    0.012288953274292828 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset18, coords.y)) +
    0.011965340649920065 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset19, coords.y)) +
    0.011633225924630092 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset20, coords.y)) +
    0.01129380213981249 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset21, coords.y)) +
    0.010948259969392884 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset22, coords.y)) +
    0.010597780934626681 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset23, coords.y)) +
    0.010243530887316268 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset24, coords.y)) +
    0.009886653809448427 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset25, coords.y)) +
    0.009528265972566502 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset26, coords.y)) +
    0.009169450495161914 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset27, coords.y)) +
    0.008811252331068236 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset28, coords.y)) +
    0.008454673716345798 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset29, coords.y)) +
    0.00810067009653358 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset30, coords.y)) +
    0.007750146550494293 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset31, coords.y)) +
    0.007403954721462616 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset32, coords.y)) +
    0.007062890260396102 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset33, coords.y)) +
    0.006727690781390042 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset34, coords.y)) +
    0.006399034323812697 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset35, coords.y)) +
    0.0060775383110011 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset36, coords.y)) +
    0.005763758990878817 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset37, coords.y)) +
    0.005458191339757262 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset38, coords.y)) +
    0.0051612694068957155 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset39, coords.y)) +
    0.004873367074148814 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset40, coords.y)) +
    0.004594799202243086 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset41, coords.y)) +
    0.00432582313290783 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset42, coords.y)) +
    0.004066640514244445 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset43, coords.y)) +
    0.0038173994153497853 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset44, coords.y)) +
    0.003578196695303867 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset45, coords.y)) +
    0.003349080591175146 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset46, coords.y)) +
    0.003130053489667001 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset47, coords.y)) +
    0.00292107484740134 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset48, coords.y)) +
    0.0027220642255799893 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset49, coords.y)) +
    0.002532904405848539 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset50, coords.y)) +
    0.0023534445555750505 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset51, coords.y)) +
    0.0021835034124097147 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset52, coords.y)) +
    0.002022872459872425 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset53, coords.y)) +
    0.00187131906778372 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset54, coords.y)) +
    0.0017285895735714694 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset55, coords.y)) +
    0.0015944122828122195 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset56, coords.y)) +
    0.0014685003697650155 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset57, coords.y)) +
    0.0013505546610910139 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset58, coords.y)) +
    0.001240266288390817 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset59, coords.y)) +
    0.0011373191976021884 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset60, coords.y)) +
    0.0010413925056554144 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset61, coords.y)) +
    0.0009521626970568815 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset62, coords.y)) +
    0.000869305655241366 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset63, coords.y)) +
    0.0007924985255813082 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset64, coords.y))
  );
}
