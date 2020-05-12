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
  float offset1 = one_pixel * 1.4998490793842438;
  float offset2 = one_pixel * 3.4996478518965692;
  float offset3 = one_pixel * 5.499446624408894;
  float offset4 = one_pixel * 7.49924539692122;
  float offset5 = one_pixel * 9.499044169433544;
  float offset6 = one_pixel * 11.49884294194587;
  float offset7 = one_pixel * 13.498641714458195;
  float offset8 = one_pixel * 15.49844048697052;
  float offset9 = one_pixel * 17.498239259482844;
  float offset10 = one_pixel * 19.498038031995172;
  float offset11 = one_pixel * 21.497836804507497;
  float offset12 = one_pixel * 23.49763557701982;
  float offset13 = one_pixel * 25.497434349532146;
  float offset14 = one_pixel * 27.49723312204447;
  float offset15 = one_pixel * 29.497031894556798;
  float offset16 = one_pixel * 31.496830667069123;
  float offset17 = one_pixel * 33.49662943958145;
  float offset18 = one_pixel * 35.496428212093775;
  float offset19 = one_pixel * 37.496226984606096;
  float offset20 = one_pixel * 39.496025757118424;
  float offset21 = one_pixel * 41.495824529630745;
  float offset22 = one_pixel * 43.49562330214307;
  float offset23 = one_pixel * 45.4954220746554;
  float offset24 = one_pixel * 47.49522084716772;
  float offset25 = one_pixel * 49.49501961968005;
  float offset26 = one_pixel * 51.49481839219237;
  float offset27 = one_pixel * 53.4946171647047;
  float offset28 = one_pixel * 55.49441593721702;
  float offset29 = one_pixel * 57.49421470972935;
  float offset30 = one_pixel * 59.49401348224168;
  float offset31 = one_pixel * 61.493812254754;
  float offset32 = one_pixel * 63.493611027266326;
  float offset33 = one_pixel * 65.49340979977865;
  float offset34 = one_pixel * 67.49320857229098;
  float offset35 = one_pixel * 69.4930073448033;
  float offset36 = one_pixel * 71.49280611731562;
  float offset37 = one_pixel * 73.49260488982794;
  float offset38 = one_pixel * 75.49240366234028;
  float offset39 = one_pixel * 77.4922024348526;
  float offset40 = one_pixel * 79.49200120736492;
  float offset41 = one_pixel * 81.49179997987726;
  float offset42 = one_pixel * 83.49159875238958;
  float offset43 = one_pixel * 85.4913975249019;
  float offset44 = one_pixel * 87.49119629741422;
  float offset45 = one_pixel * 89.49099506992656;
  float offset46 = one_pixel * 91.49079384243888;
  float offset47 = one_pixel * 93.4905926149512;
  float offset48 = one_pixel * 95.49039138746353;
  float offset49 = one_pixel * 97.49019015997585;
  float offset50 = one_pixel * 99.48998893248817;
  float offset51 = one_pixel * 101.48978770500051;
  float offset52 = one_pixel * 103.48958647751283;
  float offset53 = one_pixel * 105.48938525002515;
  float offset54 = one_pixel * 107.48918402253747;
  float offset55 = one_pixel * 109.48898279504981;
  float offset56 = one_pixel * 111.48878156756213;
  float offset57 = one_pixel * 113.48858034007445;
  float offset58 = one_pixel * 115.48837911258678;
  float offset59 = one_pixel * 117.4881778850991;
  float offset60 = one_pixel * 119.48797665761143;
  float offset61 = one_pixel * 121.48777543012376;

  gl_FragColor = (
    0.0008323417849659606 * texture2D(u_texture, vec2(coords.x, coords.y - offset61)) +
    0.000917125257785624 * texture2D(u_texture, vec2(coords.x, coords.y - offset60)) +
    0.0010089186285011332 * texture2D(u_texture, vec2(coords.x, coords.y - offset59)) +
    0.0011081133090088085 * texture2D(u_texture, vec2(coords.x, coords.y - offset58)) +
    0.0012151020619531054 * texture2D(u_texture, vec2(coords.x, coords.y - offset57)) +
    0.001330276485270952 * texture2D(u_texture, vec2(coords.x, coords.y - offset56)) +
    0.0014540242617128738 * texture2D(u_texture, vec2(coords.x, coords.y - offset55)) +
    0.0015867261784548805 * texture2D(u_texture, vec2(coords.x, coords.y - offset54)) +
    0.0017287529251104573 * texture2D(u_texture, vec2(coords.x, coords.y - offset53)) +
    0.0018804616818380315 * texture2D(u_texture, vec2(coords.x, coords.y - offset52)) +
    0.0020421925127826267 * texture2D(u_texture, vec2(coords.x, coords.y - offset51)) +
    0.002214264583752043 * texture2D(u_texture, vec2(coords.x, coords.y - offset50)) +
    0.0023969722267632243 * texture2D(u_texture, vec2(coords.x, coords.y - offset49)) +
    0.0025905808778536967 * texture2D(u_texture, vec2(coords.x, coords.y - offset48)) +
    0.0027953229182814798 * texture2D(u_texture, vec2(coords.x, coords.y - offset47)) +
    0.0030113934528760407 * texture2D(u_texture, vec2(coords.x, coords.y - offset46)) +
    0.003238946062790369 * texture2D(u_texture, vec2(coords.x, coords.y - offset45)) +
    0.0034780885731754752 * texture2D(u_texture, vec2(coords.x, coords.y - offset44)) +
    0.003728878879287053 * texture2D(u_texture, vec2(coords.x, coords.y - offset43)) +
    0.0039913208771729 * texture2D(u_texture, vec2(coords.x, coords.y - offset42)) +
    0.004265360547312627 * texture2D(u_texture, vec2(coords.x, coords.y - offset41)) +
    0.004550882241324027 * texture2D(u_texture, vec2(coords.x, coords.y - offset40)) +
    0.004847705223052003 * texture2D(u_texture, vec2(coords.x, coords.y - offset39)) +
    0.005155580515959869 * texture2D(u_texture, vec2(coords.x, coords.y - offset38)) +
    0.0054741881086985385 * texture2D(u_texture, vec2(coords.x, coords.y - offset37)) +
    0.005803134569993423 * texture2D(u_texture, vec2(coords.x, coords.y - offset36)) +
    0.0061419511225272 * texture2D(u_texture, vec2(coords.x, coords.y - offset35)) +
    0.006490092223284042 * texture2D(u_texture, vec2(coords.x, coords.y - offset34)) +
    0.006846934694843467 * texture2D(u_texture, vec2(coords.x, coords.y - offset33)) +
    0.0072117774483675175 * texture2D(u_texture, vec2(coords.x, coords.y - offset32)) +
    0.007583841834523641 * texture2D(u_texture, vec2(coords.x, coords.y - offset31)) +
    0.007962272653351147 * texture2D(u_texture, vec2(coords.x, coords.y - offset30)) +
    0.008346139848147941 * texture2D(u_texture, vec2(coords.x, coords.y - offset29)) +
    0.008734440901877078 * texture2D(u_texture, vec2(coords.x, coords.y - offset28)) +
    0.009126103947432965 * texture2D(u_texture, vec2(coords.x, coords.y - offset27)) +
    0.009519991595441382 * texture2D(u_texture, vec2(coords.x, coords.y - offset26)) +
    0.009914905475184579 * texture2D(u_texture, vec2(coords.x, coords.y - offset25)) +
    0.010309591475842329 * texture2D(u_texture, vec2(coords.x, coords.y - offset24)) +
    0.010702745666631423 * texture2D(u_texture, vec2(coords.x, coords.y - offset23)) +
    0.011093020865727988 * texture2D(u_texture, vec2(coords.x, coords.y - offset22)) +
    0.011479033819193287 * texture2D(u_texture, vec2(coords.x, coords.y - offset21)) +
    0.011859372942623698 * texture2D(u_texture, vec2(coords.x, coords.y - offset20)) +
    0.012232606570040746 * texture2D(u_texture, vec2(coords.x, coords.y - offset19)) +
    0.012597291646759205 * texture2D(u_texture, vec2(coords.x, coords.y - offset18)) +
    0.012951982795749821 * texture2D(u_texture, vec2(coords.x, coords.y - offset17)) +
    0.013295241680473113 * texture2D(u_texture, vec2(coords.x, coords.y - offset16)) +
    0.013625646581420053 * texture2D(u_texture, vec2(coords.x, coords.y - offset15)) +
    0.013941802098762696 * texture2D(u_texture, vec2(coords.x, coords.y - offset14)) +
    0.014242348889690198 * texture2D(u_texture, vec2(coords.x, coords.y - offset13)) +
    0.014525973346266622 * texture2D(u_texture, vec2(coords.x, coords.y - offset12)) +
    0.014791417118064375 * texture2D(u_texture, vec2(coords.x, coords.y - offset11)) +
    0.015037486383451974 * texture2D(u_texture, vec2(coords.x, coords.y - offset10)) +
    0.015263060774279578 * texture2D(u_texture, vec2(coords.x, coords.y - offset9)) +
    0.015467101860823295 * texture2D(u_texture, vec2(coords.x, coords.y - offset8)) +
    0.01564866110721275 * texture2D(u_texture, vec2(coords.x, coords.y - offset7)) +
    0.015806887212148533 * texture2D(u_texture, vec2(coords.x, coords.y - offset6)) +
    0.01594103275546924 * texture2D(u_texture, vec2(coords.x, coords.y - offset5)) +
    0.016050460077985076 * texture2D(u_texture, vec2(coords.x, coords.y - offset4)) +
    0.016134646329870186 * texture2D(u_texture, vec2(coords.x, coords.y - offset3)) +
    0.016193187631696224 * texture2D(u_texture, vec2(coords.x, coords.y - offset2)) +
    0.016225802301775404 * texture2D(u_texture, vec2(coords.x, coords.y - offset1)) +
    0.00811698315476801 * texture2D(u_texture, coords) +
    0.016225802301775404 * texture2D(u_texture, vec2(coords.x, coords.y + offset1)) +
    0.016193187631696224 * texture2D(u_texture, vec2(coords.x, coords.y + offset2)) +
    0.016134646329870186 * texture2D(u_texture, vec2(coords.x, coords.y + offset3)) +
    0.016050460077985076 * texture2D(u_texture, vec2(coords.x, coords.y + offset4)) +
    0.01594103275546924 * texture2D(u_texture, vec2(coords.x, coords.y + offset5)) +
    0.015806887212148533 * texture2D(u_texture, vec2(coords.x, coords.y + offset6)) +
    0.01564866110721275 * texture2D(u_texture, vec2(coords.x, coords.y + offset7)) +
    0.015467101860823295 * texture2D(u_texture, vec2(coords.x, coords.y + offset8)) +
    0.015263060774279578 * texture2D(u_texture, vec2(coords.x, coords.y + offset9)) +
    0.015037486383451974 * texture2D(u_texture, vec2(coords.x, coords.y + offset10)) +
    0.014791417118064375 * texture2D(u_texture, vec2(coords.x, coords.y + offset11)) +
    0.014525973346266622 * texture2D(u_texture, vec2(coords.x, coords.y + offset12)) +
    0.014242348889690198 * texture2D(u_texture, vec2(coords.x, coords.y + offset13)) +
    0.013941802098762696 * texture2D(u_texture, vec2(coords.x, coords.y + offset14)) +
    0.013625646581420053 * texture2D(u_texture, vec2(coords.x, coords.y + offset15)) +
    0.013295241680473113 * texture2D(u_texture, vec2(coords.x, coords.y + offset16)) +
    0.012951982795749821 * texture2D(u_texture, vec2(coords.x, coords.y + offset17)) +
    0.012597291646759205 * texture2D(u_texture, vec2(coords.x, coords.y + offset18)) +
    0.012232606570040746 * texture2D(u_texture, vec2(coords.x, coords.y + offset19)) +
    0.011859372942623698 * texture2D(u_texture, vec2(coords.x, coords.y + offset20)) +
    0.011479033819193287 * texture2D(u_texture, vec2(coords.x, coords.y + offset21)) +
    0.011093020865727988 * texture2D(u_texture, vec2(coords.x, coords.y + offset22)) +
    0.010702745666631423 * texture2D(u_texture, vec2(coords.x, coords.y + offset23)) +
    0.010309591475842329 * texture2D(u_texture, vec2(coords.x, coords.y + offset24)) +
    0.009914905475184579 * texture2D(u_texture, vec2(coords.x, coords.y + offset25)) +
    0.009519991595441382 * texture2D(u_texture, vec2(coords.x, coords.y + offset26)) +
    0.009126103947432965 * texture2D(u_texture, vec2(coords.x, coords.y + offset27)) +
    0.008734440901877078 * texture2D(u_texture, vec2(coords.x, coords.y + offset28)) +
    0.008346139848147941 * texture2D(u_texture, vec2(coords.x, coords.y + offset29)) +
    0.007962272653351147 * texture2D(u_texture, vec2(coords.x, coords.y + offset30)) +
    0.007583841834523641 * texture2D(u_texture, vec2(coords.x, coords.y + offset31)) +
    0.0072117774483675175 * texture2D(u_texture, vec2(coords.x, coords.y + offset32)) +
    0.006846934694843467 * texture2D(u_texture, vec2(coords.x, coords.y + offset33)) +
    0.006490092223284042 * texture2D(u_texture, vec2(coords.x, coords.y + offset34)) +
    0.0061419511225272 * texture2D(u_texture, vec2(coords.x, coords.y + offset35)) +
    0.005803134569993423 * texture2D(u_texture, vec2(coords.x, coords.y + offset36)) +
    0.0054741881086985385 * texture2D(u_texture, vec2(coords.x, coords.y + offset37)) +
    0.005155580515959869 * texture2D(u_texture, vec2(coords.x, coords.y + offset38)) +
    0.004847705223052003 * texture2D(u_texture, vec2(coords.x, coords.y + offset39)) +
    0.004550882241324027 * texture2D(u_texture, vec2(coords.x, coords.y + offset40)) +
    0.004265360547312627 * texture2D(u_texture, vec2(coords.x, coords.y + offset41)) +
    0.0039913208771729 * texture2D(u_texture, vec2(coords.x, coords.y + offset42)) +
    0.003728878879287053 * texture2D(u_texture, vec2(coords.x, coords.y + offset43)) +
    0.0034780885731754752 * texture2D(u_texture, vec2(coords.x, coords.y + offset44)) +
    0.003238946062790369 * texture2D(u_texture, vec2(coords.x, coords.y + offset45)) +
    0.0030113934528760407 * texture2D(u_texture, vec2(coords.x, coords.y + offset46)) +
    0.0027953229182814798 * texture2D(u_texture, vec2(coords.x, coords.y + offset47)) +
    0.0025905808778536967 * texture2D(u_texture, vec2(coords.x, coords.y + offset48)) +
    0.0023969722267632243 * texture2D(u_texture, vec2(coords.x, coords.y + offset49)) +
    0.002214264583752043 * texture2D(u_texture, vec2(coords.x, coords.y + offset50)) +
    0.0020421925127826267 * texture2D(u_texture, vec2(coords.x, coords.y + offset51)) +
    0.0018804616818380315 * texture2D(u_texture, vec2(coords.x, coords.y + offset52)) +
    0.0017287529251104573 * texture2D(u_texture, vec2(coords.x, coords.y + offset53)) +
    0.0015867261784548805 * texture2D(u_texture, vec2(coords.x, coords.y + offset54)) +
    0.0014540242617128738 * texture2D(u_texture, vec2(coords.x, coords.y + offset55)) +
    0.001330276485270952 * texture2D(u_texture, vec2(coords.x, coords.y + offset56)) +
    0.0012151020619531054 * texture2D(u_texture, vec2(coords.x, coords.y + offset57)) +
    0.0011081133090088085 * texture2D(u_texture, vec2(coords.x, coords.y + offset58)) +
    0.0010089186285011332 * texture2D(u_texture, vec2(coords.x, coords.y + offset59)) +
    0.000917125257785624 * texture2D(u_texture, vec2(coords.x, coords.y + offset60)) +
    0.0008323417849659606 * texture2D(u_texture, vec2(coords.x, coords.y + offset61))
  );
}
