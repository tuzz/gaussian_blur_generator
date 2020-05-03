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
  float offset1 = one_pixel * 1.499867080194949;
  float offset2 = one_pixel * 3.4996898537882144;
  float offset3 = one_pixel * 5.49951262738148;
  float offset4 = one_pixel * 7.499335400974745;
  float offset5 = one_pixel * 9.499158174568011;
  float offset6 = one_pixel * 11.498980948161275;
  float offset7 = one_pixel * 13.498803721754541;
  float offset8 = one_pixel * 15.498626495347807;
  float offset9 = one_pixel * 17.498449268941073;
  float offset10 = one_pixel * 19.49827204253434;
  float offset11 = one_pixel * 21.498094816127605;
  float offset12 = one_pixel * 23.497917589720867;
  float offset13 = one_pixel * 25.497740363314133;
  float offset14 = one_pixel * 27.4975631369074;
  float offset15 = one_pixel * 29.497385910500665;
  float offset16 = one_pixel * 31.49720868409393;
  float offset17 = one_pixel * 33.49703145768719;
  float offset18 = one_pixel * 35.49685423128046;
  float offset19 = one_pixel * 37.496677004873725;
  float offset20 = one_pixel * 39.49649977846699;
  float offset21 = one_pixel * 41.496322552060256;
  float offset22 = one_pixel * 43.49614532565352;
  float offset23 = one_pixel * 45.49596809924679;
  float offset24 = one_pixel * 47.495790872840054;
  float offset25 = one_pixel * 49.49561364643332;
  float offset26 = one_pixel * 51.495436420026586;
  float offset27 = one_pixel * 53.49525919361985;
  float offset28 = one_pixel * 55.49508196721312;
  float offset29 = one_pixel * 57.49490474080638;
  float offset30 = one_pixel * 59.49472751439964;
  float offset31 = one_pixel * 61.49455028799291;
  float offset32 = one_pixel * 63.494373061586174;
  float offset33 = one_pixel * 65.49419583517944;
  float offset34 = one_pixel * 67.4940186087727;
  float offset35 = one_pixel * 69.49384138236597;
  float offset36 = one_pixel * 71.49366415595924;
  float offset37 = one_pixel * 73.4934869295525;
  float offset38 = one_pixel * 75.49330970314577;
  float offset39 = one_pixel * 77.49313247673904;
  float offset40 = one_pixel * 79.4929552503323;
  float offset41 = one_pixel * 81.49277802392557;
  float offset42 = one_pixel * 83.49260079751883;
  float offset43 = one_pixel * 85.4924235711121;
  float offset44 = one_pixel * 87.49224634470536;
  float offset45 = one_pixel * 89.49206911829863;
  float offset46 = one_pixel * 91.4918918918919;
  float offset47 = one_pixel * 93.49171466548516;
  float offset48 = one_pixel * 95.49153743907843;
  float offset49 = one_pixel * 97.4913602126717;
  float offset50 = one_pixel * 99.49118298626496;
  float offset51 = one_pixel * 101.49100575985823;
  float offset52 = one_pixel * 103.49082853345148;
  float offset53 = one_pixel * 105.49065130704474;
  float offset54 = one_pixel * 107.49047408063801;
  float offset55 = one_pixel * 109.49029685423127;
  float offset56 = one_pixel * 111.49011962782454;
  float offset57 = one_pixel * 113.4899424014178;
  float offset58 = one_pixel * 115.48976517501107;
  float offset59 = one_pixel * 117.48958794860434;
  float offset60 = one_pixel * 119.4894107221976;
  float offset61 = one_pixel * 121.48923349579087;
  float offset62 = one_pixel * 123.48905626938414;
  float offset63 = one_pixel * 125.4888790429774;
  float offset64 = one_pixel * 127.48870181657067;
  float offset65 = one_pixel * 129.48852459016393;

  gl_FragColor = (
    0.0007799310798628525 * texture2D(u_texture, vec2(coords.x, coords.y - offset65)) +
    0.0008543215182131151 * texture2D(u_texture, vec2(coords.x, coords.y - offset64)) +
    0.0009344809575517762 * texture2D(u_texture, vec2(coords.x, coords.y - offset63)) +
    0.0010207128185315962 * texture2D(u_texture, vec2(coords.x, coords.y - offset62)) +
    0.001113321750210678 * texture2D(u_texture, vec2(coords.x, coords.y - offset61)) +
    0.0012126119390434668 * texture2D(u_texture, vec2(coords.x, coords.y - offset60)) +
    0.0013188852667042072 * texture2D(u_texture, vec2(coords.x, coords.y - offset59)) +
    0.0014324393193872955 * texture2D(u_texture, vec2(coords.x, coords.y - offset58)) +
    0.0015535652530029628 * texture2D(u_texture, vec2(coords.x, coords.y - offset57)) +
    0.0016825455205664894 * texture2D(u_texture, vec2(coords.x, coords.y - offset56)) +
    0.0018196514700490477 * texture2D(u_texture, vec2(coords.x, coords.y - offset55)) +
    0.0019651408230000017 * texture2D(u_texture, vec2(coords.x, coords.y - offset54)) +
    0.0021192550463430366 * texture2D(u_texture, vec2(coords.x, coords.y - offset53)) +
    0.002282216631868425 * texture2D(u_texture, vec2(coords.x, coords.y - offset52)) +
    0.002454226300065193 * texture2D(u_texture, vec2(coords.x, coords.y - offset51)) +
    0.0026354601470319735 * texture2D(u_texture, vec2(coords.x, coords.y - offset50)) +
    0.0028260667552441466 * texture2D(u_texture, vec2(coords.x, coords.y - offset49)) +
    0.0030261642909061655 * texture2D(u_texture, vec2(coords.x, coords.y - offset48)) +
    0.003235837612449274 * texture2D(u_texture, vec2(coords.x, coords.y - offset47)) +
    0.0034551354164131395 * texture2D(u_texture, vec2(coords.x, coords.y - offset46)) +
    0.003684067448441826 * texture2D(u_texture, vec2(coords.x, coords.y - offset45)) +
    0.003922601808397164 * texture2D(u_texture, vec2(coords.x, coords.y - offset44)) +
    0.004170662379613734 * texture2D(u_texture, vec2(coords.x, coords.y - offset43)) +
    0.004428126413058819 * texture2D(u_texture, vec2(coords.x, coords.y - offset42)) +
    0.004694822297589123 * texture2D(u_texture, vec2(coords.x, coords.y - offset41)) +
    0.004970527547587948 * texture2D(u_texture, vec2(coords.x, coords.y - offset40)) +
    0.005254967038999046 * texture2D(u_texture, vec2(coords.x, coords.y - offset39)) +
    0.005547811524127742 * texture2D(u_texture, vec2(coords.x, coords.y - offset38)) +
    0.005848676454541439 * texture2D(u_texture, vec2(coords.x, coords.y - offset37)) +
    0.006157121139960752 * texture2D(u_texture, vec2(coords.x, coords.y - offset36)) +
    0.006472648269184617 * texture2D(u_texture, vec2(coords.x, coords.y - offset35)) +
    0.006794703816839228 * texture2D(u_texture, vec2(coords.x, coords.y - offset34)) +
    0.007122677357088595 * texture2D(u_texture, vec2(coords.x, coords.y - offset33)) +
    0.007455902802407414 * texture2D(u_texture, vec2(coords.x, coords.y - offset32)) +
    0.007793659582114301 * texture2D(u_texture, vec2(coords.x, coords.y - offset31)) +
    0.008135174271621354 * texture2D(u_texture, vec2(coords.x, coords.y - offset30)) +
    0.00847962267930662 * texture2D(u_texture, vec2(coords.x, coords.y - offset29)) +
    0.00882613239359746 * texture2D(u_texture, vec2(coords.x, coords.y - offset28)) +
    0.009173785788308944 * texture2D(u_texture, vec2(coords.x, coords.y - offset27)) +
    0.009521623479561392 * texture2D(u_texture, vec2(coords.x, coords.y - offset26)) +
    0.00986864822275866 * texture2D(u_texture, vec2(coords.x, coords.y - offset25)) +
    0.010213829233201651 * texture2D(u_texture, vec2(coords.x, coords.y - offset24)) +
    0.010556106909001052 * texture2D(u_texture, vec2(coords.x, coords.y - offset23)) +
    0.010894397930102653 * texture2D(u_texture, vec2(coords.x, coords.y - offset22)) +
    0.011227600702513408 * texture2D(u_texture, vec2(coords.x, coords.y - offset21)) +
    0.011554601112281836 * texture2D(u_texture, vec2(coords.x, coords.y - offset20)) +
    0.011874278549507998 * texture2D(u_texture, vec2(coords.x, coords.y - offset19)) +
    0.012185512158699669 * texture2D(u_texture, vec2(coords.x, coords.y - offset18)) +
    0.012487187268213676 * texture2D(u_texture, vec2(coords.x, coords.y - offset17)) +
    0.01277820194838224 * texture2D(u_texture, vec2(coords.x, coords.y - offset16)) +
    0.013057473645276567 * texture2D(u_texture, vec2(coords.x, coords.y - offset15)) +
    0.013323945834951015 * texture2D(u_texture, vec2(coords.x, coords.y - offset14)) +
    0.013576594641482274 * texture2D(u_texture, vec2(coords.x, coords.y - offset13)) +
    0.013814435361202063 * texture2D(u_texture, vec2(coords.x, coords.y - offset12)) +
    0.01403652883524525 * texture2D(u_texture, vec2(coords.x, coords.y - offset11)) +
    0.014241987612914368 * texture2D(u_texture, vec2(coords.x, coords.y - offset10)) +
    0.014429981849404838 * texture2D(u_texture, vec2(coords.x, coords.y - offset9)) +
    0.014599744883141001 * texture2D(u_texture, vec2(coords.x, coords.y - offset8)) +
    0.014750578440331027 * texture2D(u_texture, vec2(coords.x, coords.y - offset7)) +
    0.014881857417338206 * texture2D(u_texture, vec2(coords.x, coords.y - offset6)) +
    0.0149930341950578 * texture2D(u_texture, vec2(coords.x, coords.y - offset5)) +
    0.015083642443643982 * texture2D(u_texture, vec2(coords.x, coords.y - offset4)) +
    0.015153300380603342 * texture2D(u_texture, vec2(coords.x, coords.y - offset3)) +
    0.015201713450405361 * texture2D(u_texture, vec2(coords.x, coords.y - offset2)) +
    0.015228676399294207 * texture2D(u_texture, vec2(coords.x, coords.y - offset1)) +
    0.007617712332506988 * texture2D(u_texture, coords) +
    0.015228676399294207 * texture2D(u_texture, vec2(coords.x, coords.y + offset1)) +
    0.015201713450405361 * texture2D(u_texture, vec2(coords.x, coords.y + offset2)) +
    0.015153300380603342 * texture2D(u_texture, vec2(coords.x, coords.y + offset3)) +
    0.015083642443643982 * texture2D(u_texture, vec2(coords.x, coords.y + offset4)) +
    0.0149930341950578 * texture2D(u_texture, vec2(coords.x, coords.y + offset5)) +
    0.014881857417338206 * texture2D(u_texture, vec2(coords.x, coords.y + offset6)) +
    0.014750578440331027 * texture2D(u_texture, vec2(coords.x, coords.y + offset7)) +
    0.014599744883141001 * texture2D(u_texture, vec2(coords.x, coords.y + offset8)) +
    0.014429981849404838 * texture2D(u_texture, vec2(coords.x, coords.y + offset9)) +
    0.014241987612914368 * texture2D(u_texture, vec2(coords.x, coords.y + offset10)) +
    0.01403652883524525 * texture2D(u_texture, vec2(coords.x, coords.y + offset11)) +
    0.013814435361202063 * texture2D(u_texture, vec2(coords.x, coords.y + offset12)) +
    0.013576594641482274 * texture2D(u_texture, vec2(coords.x, coords.y + offset13)) +
    0.013323945834951015 * texture2D(u_texture, vec2(coords.x, coords.y + offset14)) +
    0.013057473645276567 * texture2D(u_texture, vec2(coords.x, coords.y + offset15)) +
    0.01277820194838224 * texture2D(u_texture, vec2(coords.x, coords.y + offset16)) +
    0.012487187268213676 * texture2D(u_texture, vec2(coords.x, coords.y + offset17)) +
    0.012185512158699669 * texture2D(u_texture, vec2(coords.x, coords.y + offset18)) +
    0.011874278549507998 * texture2D(u_texture, vec2(coords.x, coords.y + offset19)) +
    0.011554601112281836 * texture2D(u_texture, vec2(coords.x, coords.y + offset20)) +
    0.011227600702513408 * texture2D(u_texture, vec2(coords.x, coords.y + offset21)) +
    0.010894397930102653 * texture2D(u_texture, vec2(coords.x, coords.y + offset22)) +
    0.010556106909001052 * texture2D(u_texture, vec2(coords.x, coords.y + offset23)) +
    0.010213829233201651 * texture2D(u_texture, vec2(coords.x, coords.y + offset24)) +
    0.00986864822275866 * texture2D(u_texture, vec2(coords.x, coords.y + offset25)) +
    0.009521623479561392 * texture2D(u_texture, vec2(coords.x, coords.y + offset26)) +
    0.009173785788308944 * texture2D(u_texture, vec2(coords.x, coords.y + offset27)) +
    0.00882613239359746 * texture2D(u_texture, vec2(coords.x, coords.y + offset28)) +
    0.00847962267930662 * texture2D(u_texture, vec2(coords.x, coords.y + offset29)) +
    0.008135174271621354 * texture2D(u_texture, vec2(coords.x, coords.y + offset30)) +
    0.007793659582114301 * texture2D(u_texture, vec2(coords.x, coords.y + offset31)) +
    0.007455902802407414 * texture2D(u_texture, vec2(coords.x, coords.y + offset32)) +
    0.007122677357088595 * texture2D(u_texture, vec2(coords.x, coords.y + offset33)) +
    0.006794703816839228 * texture2D(u_texture, vec2(coords.x, coords.y + offset34)) +
    0.006472648269184617 * texture2D(u_texture, vec2(coords.x, coords.y + offset35)) +
    0.006157121139960752 * texture2D(u_texture, vec2(coords.x, coords.y + offset36)) +
    0.005848676454541439 * texture2D(u_texture, vec2(coords.x, coords.y + offset37)) +
    0.005547811524127742 * texture2D(u_texture, vec2(coords.x, coords.y + offset38)) +
    0.005254967038999046 * texture2D(u_texture, vec2(coords.x, coords.y + offset39)) +
    0.004970527547587948 * texture2D(u_texture, vec2(coords.x, coords.y + offset40)) +
    0.004694822297589123 * texture2D(u_texture, vec2(coords.x, coords.y + offset41)) +
    0.004428126413058819 * texture2D(u_texture, vec2(coords.x, coords.y + offset42)) +
    0.004170662379613734 * texture2D(u_texture, vec2(coords.x, coords.y + offset43)) +
    0.003922601808397164 * texture2D(u_texture, vec2(coords.x, coords.y + offset44)) +
    0.003684067448441826 * texture2D(u_texture, vec2(coords.x, coords.y + offset45)) +
    0.0034551354164131395 * texture2D(u_texture, vec2(coords.x, coords.y + offset46)) +
    0.003235837612449274 * texture2D(u_texture, vec2(coords.x, coords.y + offset47)) +
    0.0030261642909061655 * texture2D(u_texture, vec2(coords.x, coords.y + offset48)) +
    0.0028260667552441466 * texture2D(u_texture, vec2(coords.x, coords.y + offset49)) +
    0.0026354601470319735 * texture2D(u_texture, vec2(coords.x, coords.y + offset50)) +
    0.002454226300065193 * texture2D(u_texture, vec2(coords.x, coords.y + offset51)) +
    0.002282216631868425 * texture2D(u_texture, vec2(coords.x, coords.y + offset52)) +
    0.0021192550463430366 * texture2D(u_texture, vec2(coords.x, coords.y + offset53)) +
    0.0019651408230000017 * texture2D(u_texture, vec2(coords.x, coords.y + offset54)) +
    0.0018196514700490477 * texture2D(u_texture, vec2(coords.x, coords.y + offset55)) +
    0.0016825455205664894 * texture2D(u_texture, vec2(coords.x, coords.y + offset56)) +
    0.0015535652530029628 * texture2D(u_texture, vec2(coords.x, coords.y + offset57)) +
    0.0014324393193872955 * texture2D(u_texture, vec2(coords.x, coords.y + offset58)) +
    0.0013188852667042072 * texture2D(u_texture, vec2(coords.x, coords.y + offset59)) +
    0.0012126119390434668 * texture2D(u_texture, vec2(coords.x, coords.y + offset60)) +
    0.001113321750210678 * texture2D(u_texture, vec2(coords.x, coords.y + offset61)) +
    0.0010207128185315962 * texture2D(u_texture, vec2(coords.x, coords.y + offset62)) +
    0.0009344809575517762 * texture2D(u_texture, vec2(coords.x, coords.y + offset63)) +
    0.0008543215182131151 * texture2D(u_texture, vec2(coords.x, coords.y + offset64)) +
    0.0007799310798628525 * texture2D(u_texture, vec2(coords.x, coords.y + offset65))
  );
}
