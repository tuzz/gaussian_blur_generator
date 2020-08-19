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
  float offset1 = one_pixel * 1.4998074207215304;
  float offset2 = one_pixel * 3.4995506483502377;
  float offset3 = one_pixel * 5.499293875978944;
  float offset4 = one_pixel * 7.499037103607652;
  float offset5 = one_pixel * 9.49878033123636;
  float offset6 = one_pixel * 11.498523558865067;
  float offset7 = one_pixel * 13.498266786493772;
  float offset8 = one_pixel * 15.49801001412248;
  float offset9 = one_pixel * 17.497753241751187;
  float offset10 = one_pixel * 19.497496469379893;
  float offset11 = one_pixel * 21.497239697008602;
  float offset12 = one_pixel * 23.496982924637308;
  float offset13 = one_pixel * 25.496726152266017;
  float offset14 = one_pixel * 27.496469379894723;
  float offset15 = one_pixel * 29.49621260752343;
  float offset16 = one_pixel * 31.495955835152138;
  float offset17 = one_pixel * 33.495699062780844;
  float offset18 = one_pixel * 35.49544229040955;
  float offset19 = one_pixel * 37.49518551803826;
  float offset20 = one_pixel * 39.49492874566697;
  float offset21 = one_pixel * 41.494671973295674;
  float offset22 = one_pixel * 43.49441520092438;
  float offset23 = one_pixel * 45.494158428553085;
  float offset24 = one_pixel * 47.4939016561818;
  float offset25 = one_pixel * 49.493644883810504;
  float offset26 = one_pixel * 51.49338811143921;
  float offset27 = one_pixel * 53.493131339067915;
  float offset28 = one_pixel * 55.49287456669662;
  float offset29 = one_pixel * 57.492617794325334;
  float offset30 = one_pixel * 59.49236102195404;
  float offset31 = one_pixel * 61.492104249582745;
  float offset32 = one_pixel * 63.49184747721145;
  float offset33 = one_pixel * 65.49159070484016;
  float offset34 = one_pixel * 67.49133393246886;
  float offset35 = one_pixel * 69.49107716009757;
  float offset36 = one_pixel * 71.49082038772627;
  float offset37 = one_pixel * 73.49056361535499;
  float offset38 = one_pixel * 75.4903068429837;
  float offset39 = one_pixel * 77.4900500706124;
  float offset40 = one_pixel * 79.48979329824111;
  float offset41 = one_pixel * 81.48953652586982;
  float offset42 = one_pixel * 83.48927975349852;
  float offset43 = one_pixel * 85.48902298112723;
  float offset44 = one_pixel * 87.48876620875593;
  float offset45 = one_pixel * 89.48850943638465;
  float offset46 = one_pixel * 91.48825266401336;
  float offset47 = one_pixel * 93.48799589164206;
  float offset48 = one_pixel * 95.48773911927077;
  float offset49 = one_pixel * 97.48748234689947;
  float offset50 = one_pixel * 99.48722557452818;
  float offset51 = one_pixel * 101.4869688021569;
  float offset52 = one_pixel * 103.4867120297856;
  float offset53 = one_pixel * 105.4864552574143;
  float offset54 = one_pixel * 107.486198485043;

  f_color = (
    0.0009432267076705671 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset54)) +
    0.0010522699044108492 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset53)) +
    0.0011715087873693313 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset52)) +
    0.0013015813503899755 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset51)) +
    0.0014431267391375592 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset50)) +
    0.001596779849704486 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset49)) +
    0.0017631653803771878 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset48)) +
    0.0019428913542333154 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset47)) +
    0.002136542140127819 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset46)) +
    0.0023446710100882605 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset45)) +
    0.002567792282035103 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset44)) +
    0.002806373107904881 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset43)) +
    0.0030608249784941513 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset42)) +
    0.0033314950274504515 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset41)) +
    0.0036186572275862606 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset40)) +
    0.003922503582842292 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset39)) +
    0.004243135428527039 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset38)) +
    0.004580554960655604 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset37)) +
    0.004934657122048725 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset36)) +
    0.005305221978086074 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset35)) +
    0.005691907718403468 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset34)) +
    0.0060942444221685176 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset33)) +
    0.0065116287236776 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset32)) +
    0.00694331951173567 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset31)) +
    0.007388434790495666 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset30)) +
    0.007845949821077204 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset29)) +
    0.00831469665233548 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset28)) +
    0.00879336513564499 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset27)) +
    0.00928050550258925 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset26)) +
    0.009774532566155606 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset25)) +
    0.01027373158562943 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset24)) +
    0.01077626581312817 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset23)) +
    0.011280185715929595 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset22)) +
    0.011783439843797133 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset21)) +
    0.012283887284799528 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset20)) +
    0.012779311627109281 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset19)) +
    0.013267436318420742 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset18)) +
    0.013745941289448565 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset17)) +
    0.014212480683953248 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset16)) +
    0.014664701515392141 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset15)) +
    0.015100263050096673 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset14)) +
    0.015516856699287975 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset13)) +
    0.01591222618768445 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset12)) +
    0.01628418775529791 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset11)) +
    0.01663065014157297 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset10)) +
    0.016949634097542136 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset9)) +
    0.017239291172317043 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset8)) +
    0.017497921525102232 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset7)) +
    0.017723990523005856 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset6)) +
    0.017916143898147417 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset5)) +
    0.018073221254755144 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset4)) +
    0.01819426773784961 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset3)) +
    0.018278543699389006 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset2)) +
    0.01832553222499596 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset1)) +
    0.00916864918384881 * texture(sampler2D(t_input, s_input), coords) +
    0.01832553222499596 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset1)) +
    0.018278543699389006 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset2)) +
    0.01819426773784961 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset3)) +
    0.018073221254755144 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset4)) +
    0.017916143898147417 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset5)) +
    0.017723990523005856 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset6)) +
    0.017497921525102232 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset7)) +
    0.017239291172317043 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset8)) +
    0.016949634097542136 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset9)) +
    0.01663065014157297 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset10)) +
    0.01628418775529791 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset11)) +
    0.01591222618768445 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset12)) +
    0.015516856699287975 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset13)) +
    0.015100263050096673 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset14)) +
    0.014664701515392141 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset15)) +
    0.014212480683953248 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset16)) +
    0.013745941289448565 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset17)) +
    0.013267436318420742 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset18)) +
    0.012779311627109281 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset19)) +
    0.012283887284799528 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset20)) +
    0.011783439843797133 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset21)) +
    0.011280185715929595 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset22)) +
    0.01077626581312817 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset23)) +
    0.01027373158562943 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset24)) +
    0.009774532566155606 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset25)) +
    0.00928050550258925 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset26)) +
    0.00879336513564499 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset27)) +
    0.00831469665233548 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset28)) +
    0.007845949821077204 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset29)) +
    0.007388434790495666 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset30)) +
    0.00694331951173567 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset31)) +
    0.0065116287236776 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset32)) +
    0.0060942444221685176 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset33)) +
    0.005691907718403468 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset34)) +
    0.005305221978086074 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset35)) +
    0.004934657122048725 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset36)) +
    0.004580554960655604 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset37)) +
    0.004243135428527039 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset38)) +
    0.003922503582842292 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset39)) +
    0.0036186572275862606 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset40)) +
    0.0033314950274504515 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset41)) +
    0.0030608249784941513 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset42)) +
    0.002806373107904881 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset43)) +
    0.002567792282035103 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset44)) +
    0.0023446710100882605 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset45)) +
    0.002136542140127819 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset46)) +
    0.0019428913542333154 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset47)) +
    0.0017631653803771878 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset48)) +
    0.001596779849704486 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset49)) +
    0.0014431267391375592 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset50)) +
    0.0013015813503899755 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset51)) +
    0.0011715087873693313 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset52)) +
    0.0010522699044108492 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset53)) +
    0.0009432267076705671 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset54))
  );
}
