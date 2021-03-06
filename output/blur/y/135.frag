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
  float offset1 = one_pixel * 1.4998748853115356;
  float offset2 = one_pixel * 3.4997080657269164;
  float offset3 = one_pixel * 5.4995412461422974;
  float offset4 = one_pixel * 7.499374426557678;
  float offset5 = one_pixel * 9.499207606973059;
  float offset6 = one_pixel * 11.49904078738844;
  float offset7 = one_pixel * 13.49887396780382;
  float offset8 = one_pixel * 15.498707148219202;
  float offset9 = one_pixel * 17.498540328634583;
  float offset10 = one_pixel * 19.498373509049962;
  float offset11 = one_pixel * 21.498206689465345;
  float offset12 = one_pixel * 23.498039869880724;
  float offset13 = one_pixel * 25.497873050296104;
  float offset14 = one_pixel * 27.497706230711486;
  float offset15 = one_pixel * 29.497539411126866;
  float offset16 = one_pixel * 31.49737259154225;
  float offset17 = one_pixel * 33.49720577195763;
  float offset18 = one_pixel * 35.49703895237301;
  float offset19 = one_pixel * 37.49687213278839;
  float offset20 = one_pixel * 39.49670531320377;
  float offset21 = one_pixel * 41.49653849361915;
  float offset22 = one_pixel * 43.496371674034535;
  float offset23 = one_pixel * 45.496204854449914;
  float offset24 = one_pixel * 47.49603803486529;
  float offset25 = one_pixel * 49.49587121528067;
  float offset26 = one_pixel * 51.49570439569605;
  float offset27 = one_pixel * 53.49553757611144;
  float offset28 = one_pixel * 55.49537075652682;
  float offset29 = one_pixel * 57.4952039369422;
  float offset30 = one_pixel * 59.495037117357576;
  float offset31 = one_pixel * 61.494870297772955;
  float offset32 = one_pixel * 63.49470347818834;
  float offset33 = one_pixel * 65.49453665860372;
  float offset34 = one_pixel * 67.4943698390191;
  float offset35 = one_pixel * 69.49420301943448;
  float offset36 = one_pixel * 71.49403619984986;
  float offset37 = one_pixel * 73.49386938026524;
  float offset38 = one_pixel * 75.49370256068062;
  float offset39 = one_pixel * 77.49353574109601;
  float offset40 = one_pixel * 79.49336892151139;
  float offset41 = one_pixel * 81.49320210192677;
  float offset42 = one_pixel * 83.49303528234215;
  float offset43 = one_pixel * 85.49286846275753;
  float offset44 = one_pixel * 87.49270164317291;
  float offset45 = one_pixel * 89.49253482358829;
  float offset46 = one_pixel * 91.49236800400367;
  float offset47 = one_pixel * 93.49220118441905;
  float offset48 = one_pixel * 95.49203436483444;
  float offset49 = one_pixel * 97.49186754524982;
  float offset50 = one_pixel * 99.4917007256652;
  float offset51 = one_pixel * 101.49153390608058;
  float offset52 = one_pixel * 103.49136708649596;
  float offset53 = one_pixel * 105.49120026691133;
  float offset54 = one_pixel * 107.49103344732671;
  float offset55 = one_pixel * 109.4908666277421;
  float offset56 = one_pixel * 111.49069980815747;
  float offset57 = one_pixel * 113.49053298857285;
  float offset58 = one_pixel * 115.49036616898825;
  float offset59 = one_pixel * 117.49019934940362;
  float offset60 = one_pixel * 119.490032529819;
  float offset61 = one_pixel * 121.48986571023438;
  float offset62 = one_pixel * 123.48969889064976;
  float offset63 = one_pixel * 125.48953207106514;
  float offset64 = one_pixel * 127.48936525148052;
  float offset65 = one_pixel * 129.48919843189591;
  float offset66 = one_pixel * 131.4890316123113;
  float offset67 = one_pixel * 133.48886479272667;

  f_color = (
    0.0007559587430910369 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset67)) +
    0.0008258459112295952 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset66)) +
    0.0009009903309827841 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset65)) +
    0.0009816607457588799 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset64)) +
    0.0010681270535574602 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset63)) +
    0.0011606589074875516 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset62)) +
    0.001259524193811763 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset61)) +
    0.0013649873894360876 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset60)) +
    0.0014773078021051078 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset59)) +
    0.0015967376979821282 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset58)) +
    0.0017235203227823472 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset57)) +
    0.0018578878241718208 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset56)) +
    0.0020000590847310275 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset55)) +
    0.002150237476392912 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset54)) +
    0.0023086085488833153 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset53)) +
    0.002475337666297096 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset52)) +
    0.0026505676075150226 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset51)) +
    0.0028344161476826697 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset50)) +
    0.003026973639410028 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset49)) +
    0.0032283006136858195 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset48)) +
    0.003438425421709727 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset47)) +
    0.0036573419399050606 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset46)) +
    0.0038850073612604233 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset45)) +
    0.0041213400968391056 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset44)) +
    0.004366217811767793 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset43)) +
    0.004619475620251938 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset42)) +
    0.004880904464145974 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset41)) +
    0.0051502496993170626 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset40)) +
    0.005427209913468511 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset39)) +
    0.005711435998223968 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset38)) +
    0.006002530497109836 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset37)) +
    0.006300047249608689 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset36)) +
    0.006603491349692621 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset35)) +
    0.006912319435188029 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset34)) +
    0.007225940321982691 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset33)) +
    0.007543715994476455 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset32)) +
    0.007864962960817543 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset31)) +
    0.00818895397838042 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset30)) +
    0.008514920151655883 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset29)) +
    0.008842053401270878 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset28)) +
    0.009169509299269405 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset27)) +
    0.009496410262105204 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset26)) +
    0.009821849089062803 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset25)) +
    0.01014489283007943 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset24)) +
    0.010464586963231754 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset23)) +
    0.010779959858524665 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset22)) +
    0.011090027501121721 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset21)) +
    0.01139379844383518 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset20)) +
    0.01169027895559384 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset19)) +
    0.011978478329773893 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset18)) +
    0.012257414313753802 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset17)) +
    0.012526118618878163 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset16)) +
    0.012783642468223503 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset15)) +
    0.013029062138182161 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset14)) +
    0.013261484448945687 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset13)) +
    0.013480052158497747 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset12)) +
    0.013683949214733883 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset11)) +
    0.0138724058208211 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset10)) +
    0.014044703269897166 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset9)) +
    0.014200178506684162 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset8)) +
    0.014338228375543107 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset7)) +
    0.01445831351690985 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset6)) +
    0.014559961876903605 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset5)) +
    0.014642771798159357 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset4)) +
    0.014706414663569006 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset3)) +
    0.01475063706858292 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset2)) +
    0.014775262501978555 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset1)) +
    0.00739071266614254 * texture(sampler2D(t_input, s_input), coords) +
    0.014775262501978555 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset1)) +
    0.01475063706858292 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset2)) +
    0.014706414663569006 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset3)) +
    0.014642771798159357 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset4)) +
    0.014559961876903605 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset5)) +
    0.01445831351690985 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset6)) +
    0.014338228375543107 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset7)) +
    0.014200178506684162 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset8)) +
    0.014044703269897166 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset9)) +
    0.0138724058208211 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset10)) +
    0.013683949214733883 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset11)) +
    0.013480052158497747 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset12)) +
    0.013261484448945687 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset13)) +
    0.013029062138182161 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset14)) +
    0.012783642468223503 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset15)) +
    0.012526118618878163 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset16)) +
    0.012257414313753802 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset17)) +
    0.011978478329773893 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset18)) +
    0.01169027895559384 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset19)) +
    0.01139379844383518 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset20)) +
    0.011090027501121721 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset21)) +
    0.010779959858524665 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset22)) +
    0.010464586963231754 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset23)) +
    0.01014489283007943 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset24)) +
    0.009821849089062803 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset25)) +
    0.009496410262105204 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset26)) +
    0.009169509299269405 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset27)) +
    0.008842053401270878 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset28)) +
    0.008514920151655883 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset29)) +
    0.00818895397838042 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset30)) +
    0.007864962960817543 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset31)) +
    0.007543715994476455 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset32)) +
    0.007225940321982691 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset33)) +
    0.006912319435188029 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset34)) +
    0.006603491349692621 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset35)) +
    0.006300047249608689 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset36)) +
    0.006002530497109836 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset37)) +
    0.005711435998223968 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset38)) +
    0.005427209913468511 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset39)) +
    0.0051502496993170626 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset40)) +
    0.004880904464145974 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset41)) +
    0.004619475620251938 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset42)) +
    0.004366217811767793 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset43)) +
    0.0041213400968391056 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset44)) +
    0.0038850073612604233 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset45)) +
    0.0036573419399050606 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset46)) +
    0.003438425421709727 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset47)) +
    0.0032283006136858195 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset48)) +
    0.003026973639410028 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset49)) +
    0.0028344161476826697 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset50)) +
    0.0026505676075150226 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset51)) +
    0.002475337666297096 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset52)) +
    0.0023086085488833153 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset53)) +
    0.002150237476392912 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset54)) +
    0.0020000590847310275 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset55)) +
    0.0018578878241718208 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset56)) +
    0.0017235203227823472 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset57)) +
    0.0015967376979821282 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset58)) +
    0.0014773078021051078 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset59)) +
    0.0013649873894360876 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset60)) +
    0.001259524193811763 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset61)) +
    0.0011606589074875516 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset62)) +
    0.0010681270535574602 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset63)) +
    0.0009816607457588799 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset64)) +
    0.0009009903309827841 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset65)) +
    0.0008258459112295952 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset66)) +
    0.0007559587430910369 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset67))
  );
}
