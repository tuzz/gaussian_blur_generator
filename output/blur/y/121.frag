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
  float offset1 = one_pixel * 1.4998439937597503;
  float offset2 = one_pixel * 3.4996359854394177;
  float offset3 = one_pixel * 5.499427977119085;
  float offset4 = one_pixel * 7.4992199687987515;
  float offset5 = one_pixel * 9.49901196047842;
  float offset6 = one_pixel * 11.498803952158086;
  float offset7 = one_pixel * 13.498595943837753;
  float offset8 = one_pixel * 15.498387935517421;
  float offset9 = one_pixel * 17.49817992719709;
  float offset10 = one_pixel * 19.497971918876754;
  float offset11 = one_pixel * 21.497763910556422;
  float offset12 = one_pixel * 23.49755590223609;
  float offset13 = one_pixel * 25.497347893915755;
  float offset14 = one_pixel * 27.497139885595423;
  float offset15 = one_pixel * 29.49693187727509;
  float offset16 = one_pixel * 31.49672386895476;
  float offset17 = one_pixel * 33.496515860634425;
  float offset18 = one_pixel * 35.49630785231409;
  float offset19 = one_pixel * 37.49609984399376;
  float offset20 = one_pixel * 39.495891835673426;
  float offset21 = one_pixel * 41.49568382735309;
  float offset22 = one_pixel * 43.49547581903276;
  float offset23 = one_pixel * 45.49526781071243;
  float offset24 = one_pixel * 47.4950598023921;
  float offset25 = one_pixel * 49.494851794071764;
  float offset26 = one_pixel * 51.49464378575143;
  float offset27 = one_pixel * 53.4944357774311;
  float offset28 = one_pixel * 55.494227769110765;
  float offset29 = one_pixel * 57.49401976079043;
  float offset30 = one_pixel * 59.4938117524701;
  float offset31 = one_pixel * 61.493603744149766;
  float offset32 = one_pixel * 63.49339573582943;
  float offset33 = one_pixel * 65.4931877275091;
  float offset34 = one_pixel * 67.49297971918877;
  float offset35 = one_pixel * 69.49277171086844;
  float offset36 = one_pixel * 71.4925637025481;
  float offset37 = one_pixel * 73.49235569422777;
  float offset38 = one_pixel * 75.49214768590744;
  float offset39 = one_pixel * 77.4919396775871;
  float offset40 = one_pixel * 79.49173166926677;
  float offset41 = one_pixel * 81.49152366094644;
  float offset42 = one_pixel * 83.4913156526261;
  float offset43 = one_pixel * 85.49110764430577;
  float offset44 = one_pixel * 87.49089963598544;
  float offset45 = one_pixel * 89.4906916276651;
  float offset46 = one_pixel * 91.49048361934477;
  float offset47 = one_pixel * 93.49027561102444;
  float offset48 = one_pixel * 95.4900676027041;
  float offset49 = one_pixel * 97.48985959438377;
  float offset50 = one_pixel * 99.48965158606345;
  float offset51 = one_pixel * 101.4894435777431;
  float offset52 = one_pixel * 103.48923556942277;
  float offset53 = one_pixel * 105.48902756110245;
  float offset54 = one_pixel * 107.48881955278212;
  float offset55 = one_pixel * 109.48861154446178;
  float offset56 = one_pixel * 111.48840353614145;
  float offset57 = one_pixel * 113.48819552782112;
  float offset58 = one_pixel * 115.48798751950078;
  float offset59 = one_pixel * 117.48777951118045;
  float offset60 = one_pixel * 119.48757150286012;

  f_color = (
    0.0008463746869578714 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset60)) +
    0.0009340853494656184 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset59)) +
    0.001029170675462503 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset58)) +
    0.0011320489568748225 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset57)) +
    0.001243139859838683 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset56)) +
    0.0013628616349660248 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset55)) +
    0.0014916280639281773 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset54)) +
    0.00162984514841151 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset53)) +
    0.0017779075512248982 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset52)) +
    0.0019361948032859892 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset51)) +
    0.0021050672943420806 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset50)) +
    0.0022848620695442618 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset49)) +
    0.002475888458336052 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset48)) +
    0.002678423566479549 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset47)) +
    0.0028927076663567957 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset46)) +
    0.0031189395248804484 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset45)) +
    0.0033572717123506518 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset44)) +
    0.0036078059393260774 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset43)) +
    0.0038705884719565206 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset42)) +
    0.004145605679172041 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset41)) +
    0.004432779767560391 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset40)) +
    0.004731964761614135 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset39)) +
    0.005042942788219612 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset38)) +
    0.005365420724725987 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset37)) +
    0.0056990272696161425 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset36)) +
    0.006043310493653557 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset35)) +
    0.006397735927363033 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset34)) +
    0.006761685237793057 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset33)) +
    0.007134455543692233 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset32)) +
    0.007515259413514974 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset31)) +
    0.007903225585071361 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset30)) +
    0.008297400439187903 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset29)) +
    0.008696750252501398 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset28)) +
    0.009100164246535227 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset27)) +
    0.009506458441590041 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset26)) +
    0.009914380314818401 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset25)) +
    0.010322614252258807 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset24)) +
    0.01072978777470498 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset23)) +
    0.011134478507218706 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset22)) +
    0.011535221852004866 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset21)) +
    0.0119305193144089 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset20)) +
    0.012318847422126168 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset19)) +
    0.012698667168488395 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset18)) +
    0.013068433902070735 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset17)) +
    0.013426607576996423 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset16)) +
    0.013771663271348987 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset15)) +
    0.014102101875168593 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset14)) +
    0.014416460844730333 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset13)) +
    0.014713324916282846 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset12)) +
    0.014991336670252382 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset11)) +
    0.015249206836156447 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset10)) +
    0.015485724229166515 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset9)) +
    0.015699765211431925 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset8)) +
    0.015890302574922955 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset7)) +
    0.016056413747642117 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset6)) +
    0.016197288231535798 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset5)) +
    0.016312234188236224 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset4)) +
    0.016400684097776407 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset3)) +
    0.01646219942552648 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset2)) +
    0.016496474243657442 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset1)) +
    0.00825252709053707 * texture(sampler2D(t_input, s_input), coords) +
    0.016496474243657442 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset1)) +
    0.01646219942552648 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset2)) +
    0.016400684097776407 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset3)) +
    0.016312234188236224 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset4)) +
    0.016197288231535798 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset5)) +
    0.016056413747642117 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset6)) +
    0.015890302574922955 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset7)) +
    0.015699765211431925 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset8)) +
    0.015485724229166515 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset9)) +
    0.015249206836156447 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset10)) +
    0.014991336670252382 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset11)) +
    0.014713324916282846 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset12)) +
    0.014416460844730333 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset13)) +
    0.014102101875168593 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset14)) +
    0.013771663271348987 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset15)) +
    0.013426607576996423 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset16)) +
    0.013068433902070735 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset17)) +
    0.012698667168488395 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset18)) +
    0.012318847422126168 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset19)) +
    0.0119305193144089 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset20)) +
    0.011535221852004866 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset21)) +
    0.011134478507218706 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset22)) +
    0.01072978777470498 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset23)) +
    0.010322614252258807 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset24)) +
    0.009914380314818401 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset25)) +
    0.009506458441590041 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset26)) +
    0.009100164246535227 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset27)) +
    0.008696750252501398 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset28)) +
    0.008297400439187903 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset29)) +
    0.007903225585071361 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset30)) +
    0.007515259413514974 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset31)) +
    0.007134455543692233 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset32)) +
    0.006761685237793057 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset33)) +
    0.006397735927363033 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset34)) +
    0.006043310493653557 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset35)) +
    0.0056990272696161425 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset36)) +
    0.005365420724725987 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset37)) +
    0.005042942788219612 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset38)) +
    0.004731964761614135 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset39)) +
    0.004432779767560391 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset40)) +
    0.004145605679172041 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset41)) +
    0.0038705884719565206 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset42)) +
    0.0036078059393260774 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset43)) +
    0.0033572717123506518 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset44)) +
    0.0031189395248804484 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset45)) +
    0.0028927076663567957 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset46)) +
    0.002678423566479549 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset47)) +
    0.002475888458336052 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset48)) +
    0.0022848620695442618 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset49)) +
    0.0021050672943420806 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset50)) +
    0.0019361948032859892 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset51)) +
    0.0017779075512248982 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset52)) +
    0.00162984514841151 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset53)) +
    0.0014916280639281773 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset54)) +
    0.0013628616349660248 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset55)) +
    0.001243139859838683 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset56)) +
    0.0011320489568748225 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset57)) +
    0.001029170675462503 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset58)) +
    0.0009340853494656184 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset59)) +
    0.0008463746869578714 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset60))
  );
}
