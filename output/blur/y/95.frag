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
  float offset1 = one_pixel * 1.4997458057956279;
  float offset2 = one_pixel * 3.4994068801897984;
  float offset3 = one_pixel * 5.4990679545839685;
  float offset4 = one_pixel * 7.498729028978139;
  float offset5 = one_pixel * 9.49839010337231;
  float offset6 = one_pixel * 11.498051177766481;
  float offset7 = one_pixel * 13.497712252160651;
  float offset8 = one_pixel * 15.497373326554822;
  float offset9 = one_pixel * 17.49703440094899;
  float offset10 = one_pixel * 19.496695475343163;
  float offset11 = one_pixel * 21.49635654973733;
  float offset12 = one_pixel * 23.496017624131504;
  float offset13 = one_pixel * 25.495678698525673;
  float offset14 = one_pixel * 27.495339772919845;
  float offset15 = one_pixel * 29.495000847314014;
  float offset16 = one_pixel * 31.494661921708186;
  float offset17 = one_pixel * 33.494322996102355;
  float offset18 = one_pixel * 35.49398407049652;
  float offset19 = one_pixel * 37.4936451448907;
  float offset20 = one_pixel * 39.49330621928487;
  float offset21 = one_pixel * 41.49296729367904;
  float offset22 = one_pixel * 43.492628368073206;
  float offset23 = one_pixel * 45.49228944246738;
  float offset24 = one_pixel * 47.49195051686155;
  float offset25 = one_pixel * 49.49161159125572;
  float offset26 = one_pixel * 51.49127266564989;
  float offset27 = one_pixel * 53.49093374004406;
  float offset28 = one_pixel * 55.49059481443823;
  float offset29 = one_pixel * 57.4902558888324;
  float offset30 = one_pixel * 59.48991696322657;
  float offset31 = one_pixel * 61.489578037620745;
  float offset32 = one_pixel * 63.489239112014914;
  float offset33 = one_pixel * 65.48890018640908;
  float offset34 = one_pixel * 67.48856126080325;
  float offset35 = one_pixel * 69.48822233519742;
  float offset36 = one_pixel * 71.48788340959159;
  float offset37 = one_pixel * 73.48754448398577;
  float offset38 = one_pixel * 75.48720555837994;
  float offset39 = one_pixel * 77.48686663277411;
  float offset40 = one_pixel * 79.48652770716828;
  float offset41 = one_pixel * 81.48618878156245;
  float offset42 = one_pixel * 83.48584985595662;
  float offset43 = one_pixel * 85.48551093035078;
  float offset44 = one_pixel * 87.48517200474495;
  float offset45 = one_pixel * 89.48483307913912;
  float offset46 = one_pixel * 91.4844941535333;
  float offset47 = one_pixel * 93.48415522792747;

  gl_FragColor = (
    0.0010883098119442087 * texture2D(u_texture, vec2(coords.x, coords.y - offset47)) +
    0.0012337374994926603 * texture2D(u_texture, vec2(coords.x, coords.y - offset46)) +
    0.0013948082396714118 * texture2D(u_texture, vec2(coords.x, coords.y - offset45)) +
    0.0015726345421461655 * texture2D(u_texture, vec2(coords.x, coords.y - offset44)) +
    0.0017683276267542966 * texture2D(u_texture, vec2(coords.x, coords.y - offset43)) +
    0.0019829844820901613 * texture2D(u_texture, vec2(coords.x, coords.y - offset42)) +
    0.002217673501171383 * texture2D(u_texture, vec2(coords.x, coords.y - offset41)) +
    0.0024734187646471926 * texture2D(u_texture, vec2(coords.x, coords.y - offset40)) +
    0.002751183077763256 * texture2D(u_texture, vec2(coords.x, coords.y - offset39)) +
    0.003051849904947751 * texture2D(u_texture, vec2(coords.x, coords.y - offset38)) +
    0.003376204384689393 * texture2D(u_texture, vec2(coords.x, coords.y - offset37)) +
    0.0037249136464776672 * texture2D(u_texture, vec2(coords.x, coords.y - offset36)) +
    0.00409850668999953 * texture2D(u_texture, vec2(coords.x, coords.y - offset35)) +
    0.004497354123476696 * texture2D(u_texture, vec2(coords.x, coords.y - offset34)) +
    0.004921648091858878 * texture2D(u_texture, vec2(coords.x, coords.y - offset33)) +
    0.005371382755398459 * texture2D(u_texture, vec2(coords.x, coords.y - offset32)) +
    0.005846335703752951 * texture2D(u_texture, vec2(coords.x, coords.y - offset31)) +
    0.0063460507090551165 * texture2D(u_texture, vec2(coords.x, coords.y - offset30)) +
    0.006869822232287217 * texture2D(u_texture, vec2(coords.x, coords.y - offset29)) +
    0.007416682099834078 * texture2D(u_texture, vec2(coords.x, coords.y - offset28)) +
    0.007985388760456166 * texture2D(u_texture, vec2(coords.x, coords.y - offset27)) +
    0.008574419516491634 * texture2D(u_texture, vec2(coords.x, coords.y - offset26)) +
    0.009181966096460456 * texture2D(u_texture, vec2(coords.x, coords.y - offset25)) +
    0.009805933899252339 * texture2D(u_texture, vec2(coords.x, coords.y - offset24)) +
    0.010443945192859473 * texture2D(u_texture, vec2(coords.x, coords.y - offset23)) +
    0.011093346493587506 * texture2D(u_texture, vec2(coords.x, coords.y - offset22)) +
    0.011751220285570888 * texture2D(u_texture, vec2(coords.x, coords.y - offset21)) +
    0.01241440116626405 * texture2D(u_texture, vec2(coords.x, coords.y - offset20)) +
    0.013079496422704175 * texture2D(u_texture, vec2(coords.x, coords.y - offset19)) +
    0.013742910957344 * texture2D(u_texture, vec2(coords.x, coords.y - offset18)) +
    0.014400876392975206 * texture2D(u_texture, vec2(coords.x, coords.y - offset17)) +
    0.015049484095745184 * texture2D(u_texture, vec2(coords.x, coords.y - offset16)) +
    0.01568472176570227 * texture2D(u_texture, vec2(coords.x, coords.y - offset15)) +
    0.01630251315796765 * texture2D(u_texture, vec2(coords.x, coords.y - offset14)) +
    0.016898760416832245 * texture2D(u_texture, vec2(coords.x, coords.y - offset13)) +
    0.017469388432078032 * texture2D(u_texture, vec2(coords.x, coords.y - offset12)) +
    0.018010390563775427 * texture2D(u_texture, vec2(coords.x, coords.y - offset11)) +
    0.018517875030678418 * texture2D(u_texture, vec2(coords.x, coords.y - offset10)) +
    0.01898811121984323 * texture2D(u_texture, vec2(coords.x, coords.y - offset9)) +
    0.019417575152638894 * texture2D(u_texture, vec2(coords.x, coords.y - offset8)) +
    0.019802993335938615 * texture2D(u_texture, vec2(coords.x, coords.y - offset7)) +
    0.020141384237610218 * texture2D(u_texture, vec2(coords.x, coords.y - offset6)) +
    0.020430096652654606 * texture2D(u_texture, vec2(coords.x, coords.y - offset5)) +
    0.020666844270207905 * texture2D(u_texture, vec2(coords.x, coords.y - offset4)) +
    0.020849735811401985 * texture2D(u_texture, vec2(coords.x, coords.y - offset3)) +
    0.02097730018259679 * texture2D(u_texture, vec2(coords.x, coords.y - offset2)) +
    0.0210485061761641 * texture2D(u_texture, vec2(coords.x, coords.y - offset1)) +
    0.010533172853480132 * texture2D(u_texture, coords) +
    0.0210485061761641 * texture2D(u_texture, vec2(coords.x, coords.y + offset1)) +
    0.02097730018259679 * texture2D(u_texture, vec2(coords.x, coords.y + offset2)) +
    0.020849735811401985 * texture2D(u_texture, vec2(coords.x, coords.y + offset3)) +
    0.020666844270207905 * texture2D(u_texture, vec2(coords.x, coords.y + offset4)) +
    0.020430096652654606 * texture2D(u_texture, vec2(coords.x, coords.y + offset5)) +
    0.020141384237610218 * texture2D(u_texture, vec2(coords.x, coords.y + offset6)) +
    0.019802993335938615 * texture2D(u_texture, vec2(coords.x, coords.y + offset7)) +
    0.019417575152638894 * texture2D(u_texture, vec2(coords.x, coords.y + offset8)) +
    0.01898811121984323 * texture2D(u_texture, vec2(coords.x, coords.y + offset9)) +
    0.018517875030678418 * texture2D(u_texture, vec2(coords.x, coords.y + offset10)) +
    0.018010390563775427 * texture2D(u_texture, vec2(coords.x, coords.y + offset11)) +
    0.017469388432078032 * texture2D(u_texture, vec2(coords.x, coords.y + offset12)) +
    0.016898760416832245 * texture2D(u_texture, vec2(coords.x, coords.y + offset13)) +
    0.01630251315796765 * texture2D(u_texture, vec2(coords.x, coords.y + offset14)) +
    0.01568472176570227 * texture2D(u_texture, vec2(coords.x, coords.y + offset15)) +
    0.015049484095745184 * texture2D(u_texture, vec2(coords.x, coords.y + offset16)) +
    0.014400876392975206 * texture2D(u_texture, vec2(coords.x, coords.y + offset17)) +
    0.013742910957344 * texture2D(u_texture, vec2(coords.x, coords.y + offset18)) +
    0.013079496422704175 * texture2D(u_texture, vec2(coords.x, coords.y + offset19)) +
    0.01241440116626405 * texture2D(u_texture, vec2(coords.x, coords.y + offset20)) +
    0.011751220285570888 * texture2D(u_texture, vec2(coords.x, coords.y + offset21)) +
    0.011093346493587506 * texture2D(u_texture, vec2(coords.x, coords.y + offset22)) +
    0.010443945192859473 * texture2D(u_texture, vec2(coords.x, coords.y + offset23)) +
    0.009805933899252339 * texture2D(u_texture, vec2(coords.x, coords.y + offset24)) +
    0.009181966096460456 * texture2D(u_texture, vec2(coords.x, coords.y + offset25)) +
    0.008574419516491634 * texture2D(u_texture, vec2(coords.x, coords.y + offset26)) +
    0.007985388760456166 * texture2D(u_texture, vec2(coords.x, coords.y + offset27)) +
    0.007416682099834078 * texture2D(u_texture, vec2(coords.x, coords.y + offset28)) +
    0.006869822232287217 * texture2D(u_texture, vec2(coords.x, coords.y + offset29)) +
    0.0063460507090551165 * texture2D(u_texture, vec2(coords.x, coords.y + offset30)) +
    0.005846335703752951 * texture2D(u_texture, vec2(coords.x, coords.y + offset31)) +
    0.005371382755398459 * texture2D(u_texture, vec2(coords.x, coords.y + offset32)) +
    0.004921648091858878 * texture2D(u_texture, vec2(coords.x, coords.y + offset33)) +
    0.004497354123476696 * texture2D(u_texture, vec2(coords.x, coords.y + offset34)) +
    0.00409850668999953 * texture2D(u_texture, vec2(coords.x, coords.y + offset35)) +
    0.0037249136464776672 * texture2D(u_texture, vec2(coords.x, coords.y + offset36)) +
    0.003376204384689393 * texture2D(u_texture, vec2(coords.x, coords.y + offset37)) +
    0.003051849904947751 * texture2D(u_texture, vec2(coords.x, coords.y + offset38)) +
    0.002751183077763256 * texture2D(u_texture, vec2(coords.x, coords.y + offset39)) +
    0.0024734187646471926 * texture2D(u_texture, vec2(coords.x, coords.y + offset40)) +
    0.002217673501171383 * texture2D(u_texture, vec2(coords.x, coords.y + offset41)) +
    0.0019829844820901613 * texture2D(u_texture, vec2(coords.x, coords.y + offset42)) +
    0.0017683276267542966 * texture2D(u_texture, vec2(coords.x, coords.y + offset43)) +
    0.0015726345421461655 * texture2D(u_texture, vec2(coords.x, coords.y + offset44)) +
    0.0013948082396714118 * texture2D(u_texture, vec2(coords.x, coords.y + offset45)) +
    0.0012337374994926603 * texture2D(u_texture, vec2(coords.x, coords.y + offset46)) +
    0.0010883098119442087 * texture2D(u_texture, vec2(coords.x, coords.y + offset47))
  );
}
