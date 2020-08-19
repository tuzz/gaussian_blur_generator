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
  float offset1 = one_pixel * 1.4998710786420284;
  float offset2 = one_pixel * 3.499699183498066;
  float offset3 = one_pixel * 5.499527288354104;
  float offset4 = one_pixel * 7.499355393210142;
  float offset5 = one_pixel * 9.499183498066179;
  float offset6 = one_pixel * 11.499011602922218;
  float offset7 = one_pixel * 13.498839707778256;
  float offset8 = one_pixel * 15.498667812634293;
  float offset9 = one_pixel * 17.49849591749033;
  float offset10 = one_pixel * 19.49832402234637;
  float offset11 = one_pixel * 21.498152127202406;
  float offset12 = one_pixel * 23.497980232058445;
  float offset13 = one_pixel * 25.49780833691448;
  float offset14 = one_pixel * 27.49763644177052;
  float offset15 = one_pixel * 29.497464546626556;
  float offset16 = one_pixel * 31.497292651482596;
  float offset17 = one_pixel * 33.49712075633863;
  float offset18 = one_pixel * 35.496948861194674;
  float offset19 = one_pixel * 37.49677696605071;
  float offset20 = one_pixel * 39.496605070906746;
  float offset21 = one_pixel * 41.49643317576278;
  float offset22 = one_pixel * 43.496261280618825;
  float offset23 = one_pixel * 45.49608938547486;
  float offset24 = one_pixel * 47.495917490330896;
  float offset25 = one_pixel * 49.49574559518694;
  float offset26 = one_pixel * 51.495573700042975;
  float offset27 = one_pixel * 53.49540180489901;
  float offset28 = one_pixel * 55.49522990975505;
  float offset29 = one_pixel * 57.49505801461109;
  float offset30 = one_pixel * 59.494886119467125;
  float offset31 = one_pixel * 61.49471422432316;
  float offset32 = one_pixel * 63.494542329179204;
  float offset33 = one_pixel * 65.49437043403523;
  float offset34 = one_pixel * 67.49419853889128;
  float offset35 = one_pixel * 69.49402664374732;
  float offset36 = one_pixel * 71.49385474860335;
  float offset37 = one_pixel * 73.49368285345939;
  float offset38 = one_pixel * 75.49351095831543;
  float offset39 = one_pixel * 77.49333906317146;
  float offset40 = one_pixel * 79.4931671680275;
  float offset41 = one_pixel * 81.49299527288355;
  float offset42 = one_pixel * 83.49282337773958;
  float offset43 = one_pixel * 85.49265148259562;
  float offset44 = one_pixel * 87.49247958745165;
  float offset45 = one_pixel * 89.49230769230769;
  float offset46 = one_pixel * 91.49213579716373;
  float offset47 = one_pixel * 93.49196390201976;
  float offset48 = one_pixel * 95.49179200687581;
  float offset49 = one_pixel * 97.49162011173185;
  float offset50 = one_pixel * 99.49144821658788;
  float offset51 = one_pixel * 101.49127632144392;
  float offset52 = one_pixel * 103.49110442629996;
  float offset53 = one_pixel * 105.49093253115599;
  float offset54 = one_pixel * 107.49076063601203;
  float offset55 = one_pixel * 109.49058874086808;
  float offset56 = one_pixel * 111.49041684572411;
  float offset57 = one_pixel * 113.49024495058015;
  float offset58 = one_pixel * 115.49007305543618;
  float offset59 = one_pixel * 117.48990116029222;
  float offset60 = one_pixel * 119.48972926514826;
  float offset61 = one_pixel * 121.48955737000429;
  float offset62 = one_pixel * 123.48938547486034;
  float offset63 = one_pixel * 125.48921357971638;
  float offset64 = one_pixel * 127.48904168457241;
  float offset65 = one_pixel * 129.48886978942843;
  float offset66 = one_pixel * 131.48869789428448;

  f_color = (
    0.0007678681692728306 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset66, coords.y)) +
    0.0008399603344241141 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset65, coords.y)) +
    0.0009175577779535369 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset64, coords.y)) +
    0.00100094589699849 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset63, coords.y)) +
    0.0010904112781961468 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset62, coords.y)) +
    0.0011862401604734727 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset61, coords.y)) +
    0.0012887167619057016 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset60, coords.y)) +
    0.0013981214728966645 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset59, coords.y)) +
    0.0015147289194743312 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset58, coords.y)) +
    0.0016388059021265977 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset57, coords.y)) +
    0.0017706092173126865 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset56, coords.y)) +
    0.0019103833705592418 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset55, coords.y)) +
    0.0020583581918698197 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset54, coords.y)) +
    0.0022147463660223844 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset53, coords.y)) +
    0.0023797408921800694 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset52, coords.y)) +
    0.002553512489072478 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset51, coords.y)) +
    0.0027362069637932003 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset50, coords.y)) +
    0.0029279425639778213 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset49, coords.y)) +
    0.0031288073347481554 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset48, coords.y)) +
    0.0033388565033049445 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset47, coords.y)) +
    0.003558109915394575 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset46, coords.y)) +
    0.0037865495490375747 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset45, coords.y)) +
    0.004024117131860292 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset44, coords.y)) +
    0.004270711889090026 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset43, coords.y)) +
    0.0045261884497331374 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset42, coords.y)) +
    0.0047903549386327056 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset41, coords.y)) +
    0.005062971281977006 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset40, coords.y)) +
    0.005343747753385186 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset39, coords.y)) +
    0.005632343786918559 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset38, coords.y)) +
    0.005928367082244996 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset37, coords.y)) +
    0.0062313730257145174 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset36, coords.y)) +
    0.0065408644492855215 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset35, coords.y)) +
    0.006856291747077 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset34, coords.y)) +
    0.007177053366821773 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset33, coords.y)) +
    0.0075024966906733475 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset32, coords.y)) +
    0.00783191931669406 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset31, coords.y)) +
    0.008164570748949426 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset30, coords.y)) +
    0.008499654500482918 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset29, coords.y)) +
    0.008836330609581333 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset28, coords.y)) +
    0.009173718565702942 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset27, coords.y)) +
    0.009510900637271946 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset26, coords.y)) +
    0.009846925589290574 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset25, coords.y)) +
    0.010180812774434729 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset24, coords.y)) +
    0.010511556577032833 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset23, coords.y)) +
    0.010838131185135009 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset22, coords.y)) +
    0.011159495661816236 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset21, coords.y)) +
    0.011474599282978046 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset20, coords.y)) +
    0.011782387105273675 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset19, coords.y)) +
    0.012081805724434272 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset18, coords.y)) +
    0.012371809181270028 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset17, coords.y)) +
    0.012651364970006998 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset16, coords.y)) +
    0.012919460101441857 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset15, coords.y)) +
    0.013175107171690969 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset14, coords.y)) +
    0.013417350386110395 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset13, coords.y)) +
    0.013645271487296167 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset12, coords.y)) +
    0.013857995535959584 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset11, coords.y)) +
    0.014054696493922979 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset10, coords.y)) +
    0.014234602559502705 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset9, coords.y)) +
    0.014397001207135055 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset8, coords.y)) +
    0.014541243885247333 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset7, coords.y)) +
    0.014666750329061534 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset6, coords.y)) +
    0.014773012448216202 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset5, coords.y)) +
    0.014859597752769335 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset4, coords.y)) +
    0.014926152285261405 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset3, coords.y)) +
    0.014972403031025356 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset2, coords.y)) +
    0.014998159783777424 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset1, coords.y)) +
    0.007502302973635537 * texture(sampler2D(t_input, s_input), coords) +
    0.014998159783777424 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset1, coords.y)) +
    0.014972403031025356 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset2, coords.y)) +
    0.014926152285261405 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset3, coords.y)) +
    0.014859597752769335 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset4, coords.y)) +
    0.014773012448216202 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset5, coords.y)) +
    0.014666750329061534 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset6, coords.y)) +
    0.014541243885247333 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset7, coords.y)) +
    0.014397001207135055 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset8, coords.y)) +
    0.014234602559502705 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset9, coords.y)) +
    0.014054696493922979 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset10, coords.y)) +
    0.013857995535959584 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset11, coords.y)) +
    0.013645271487296167 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset12, coords.y)) +
    0.013417350386110395 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset13, coords.y)) +
    0.013175107171690969 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset14, coords.y)) +
    0.012919460101441857 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset15, coords.y)) +
    0.012651364970006998 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset16, coords.y)) +
    0.012371809181270028 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset17, coords.y)) +
    0.012081805724434272 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset18, coords.y)) +
    0.011782387105273675 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset19, coords.y)) +
    0.011474599282978046 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset20, coords.y)) +
    0.011159495661816236 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset21, coords.y)) +
    0.010838131185135009 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset22, coords.y)) +
    0.010511556577032833 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset23, coords.y)) +
    0.010180812774434729 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset24, coords.y)) +
    0.009846925589290574 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset25, coords.y)) +
    0.009510900637271946 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset26, coords.y)) +
    0.009173718565702942 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset27, coords.y)) +
    0.008836330609581333 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset28, coords.y)) +
    0.008499654500482918 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset29, coords.y)) +
    0.008164570748949426 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset30, coords.y)) +
    0.00783191931669406 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset31, coords.y)) +
    0.0075024966906733475 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset32, coords.y)) +
    0.007177053366821773 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset33, coords.y)) +
    0.006856291747077 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset34, coords.y)) +
    0.0065408644492855215 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset35, coords.y)) +
    0.0062313730257145174 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset36, coords.y)) +
    0.005928367082244996 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset37, coords.y)) +
    0.005632343786918559 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset38, coords.y)) +
    0.005343747753385186 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset39, coords.y)) +
    0.005062971281977006 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset40, coords.y)) +
    0.0047903549386327056 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset41, coords.y)) +
    0.0045261884497331374 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset42, coords.y)) +
    0.004270711889090026 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset43, coords.y)) +
    0.004024117131860292 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset44, coords.y)) +
    0.0037865495490375747 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset45, coords.y)) +
    0.003558109915394575 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset46, coords.y)) +
    0.0033388565033049445 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset47, coords.y)) +
    0.0031288073347481554 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset48, coords.y)) +
    0.0029279425639778213 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset49, coords.y)) +
    0.0027362069637932003 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset50, coords.y)) +
    0.002553512489072478 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset51, coords.y)) +
    0.0023797408921800694 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset52, coords.y)) +
    0.0022147463660223844 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset53, coords.y)) +
    0.0020583581918698197 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset54, coords.y)) +
    0.0019103833705592418 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset55, coords.y)) +
    0.0017706092173126865 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset56, coords.y)) +
    0.0016388059021265977 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset57, coords.y)) +
    0.0015147289194743312 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset58, coords.y)) +
    0.0013981214728966645 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset59, coords.y)) +
    0.0012887167619057016 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset60, coords.y)) +
    0.0011862401604734727 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset61, coords.y)) +
    0.0010904112781961468 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset62, coords.y)) +
    0.00100094589699849 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset63, coords.y)) +
    0.0009175577779535369 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset64, coords.y)) +
    0.0008399603344241141 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset65, coords.y)) +
    0.0007678681692728306 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset66, coords.y))
  );
}
