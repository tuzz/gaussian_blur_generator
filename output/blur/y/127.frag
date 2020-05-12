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
  float offset1 = one_pixel * 1.499858503914725;
  float offset2 = one_pixel * 3.4996698424676915;
  float offset3 = one_pixel * 5.499481181020658;
  float offset4 = one_pixel * 7.4992925195736255;
  float offset5 = one_pixel * 9.499103858126592;
  float offset6 = one_pixel * 11.498915196679558;
  float offset7 = one_pixel * 13.498726535232525;
  float offset8 = one_pixel * 15.498537873785493;
  float offset9 = one_pixel * 17.498349212338457;
  float offset10 = one_pixel * 19.498160550891427;
  float offset11 = one_pixel * 21.497971889444393;
  float offset12 = one_pixel * 23.49778322799736;
  float offset13 = one_pixel * 25.497594566550326;
  float offset14 = one_pixel * 27.497405905103292;
  float offset15 = one_pixel * 29.49721724365626;
  float offset16 = one_pixel * 31.497028582209225;
  float offset17 = one_pixel * 33.49683992076219;
  float offset18 = one_pixel * 35.49665125931516;
  float offset19 = one_pixel * 37.496462597868124;
  float offset20 = one_pixel * 39.49627393642109;
  float offset21 = one_pixel * 41.49608527497406;
  float offset22 = one_pixel * 43.49589661352702;
  float offset23 = one_pixel * 45.49570795207999;
  float offset24 = one_pixel * 47.495519290632956;
  float offset25 = one_pixel * 49.49533062918593;
  float offset26 = one_pixel * 51.495141967738896;
  float offset27 = one_pixel * 53.49495330629186;
  float offset28 = one_pixel * 55.49476464484483;
  float offset29 = one_pixel * 57.494575983397795;
  float offset30 = one_pixel * 59.49438732195076;
  float offset31 = one_pixel * 61.49419866050373;
  float offset32 = one_pixel * 63.49400999905669;
  float offset33 = one_pixel * 65.49382133760966;
  float offset34 = one_pixel * 67.49363267616262;
  float offset35 = one_pixel * 69.49344401471559;
  float offset36 = one_pixel * 71.49325535326857;
  float offset37 = one_pixel * 73.49306669182153;
  float offset38 = one_pixel * 75.4928780303745;
  float offset39 = one_pixel * 77.49268936892746;
  float offset40 = one_pixel * 79.49250070748043;
  float offset41 = one_pixel * 81.49231204603339;
  float offset42 = one_pixel * 83.49212338458636;
  float offset43 = one_pixel * 85.49193472313932;
  float offset44 = one_pixel * 87.4917460616923;
  float offset45 = one_pixel * 89.49155740024526;
  float offset46 = one_pixel * 91.49136873879823;
  float offset47 = one_pixel * 93.49118007735119;
  float offset48 = one_pixel * 95.49099141590416;
  float offset49 = one_pixel * 97.49080275445712;
  float offset50 = one_pixel * 99.4906140930101;
  float offset51 = one_pixel * 101.49042543156305;
  float offset52 = one_pixel * 103.49023677011603;
  float offset53 = one_pixel * 105.49004810866899;
  float offset54 = one_pixel * 107.48985944722196;
  float offset55 = one_pixel * 109.48967078577493;
  float offset56 = one_pixel * 111.48948212432789;
  float offset57 = one_pixel * 113.48929346288087;
  float offset58 = one_pixel * 115.48910480143383;
  float offset59 = one_pixel * 117.4889161399868;
  float offset60 = one_pixel * 119.48872747853976;
  float offset61 = one_pixel * 121.48853881709273;
  float offset62 = one_pixel * 123.48835015564569;
  float offset63 = one_pixel * 125.48816149419866;

  gl_FragColor = (
    0.0008052237836133131 * texture2D(u_texture, vec2(coords.x, coords.y - offset63)) +
    0.0008845526609802283 * texture2D(u_texture, vec2(coords.x, coords.y - offset62)) +
    0.0009702307202315132 * texture2D(u_texture, vec2(coords.x, coords.y - offset61)) +
    0.0010626019045600025 * texture2D(u_texture, vec2(coords.x, coords.y - offset60)) +
    0.00116201145696954 * texture2D(u_texture, vec2(coords.x, coords.y - offset59)) +
    0.001268803864502038 * texture2D(u_texture, vec2(coords.x, coords.y - offset58)) +
    0.0013833206145954847 * texture2D(u_texture, vec2(coords.x, coords.y - offset57)) +
    0.001505897767234474 * texture2D(u_texture, vec2(coords.x, coords.y - offset56)) +
    0.0016368633489247568 * texture2D(u_texture, vec2(coords.x, coords.y - offset55)) +
    0.0017765345770347407 * texture2D(u_texture, vec2(coords.x, coords.y - offset54)) +
    0.0019252149256771497 * texture2D(u_texture, vec2(coords.x, coords.y - offset53)) +
    0.0020831910470265487 * texture2D(u_texture, vec2(coords.x, coords.y - offset52)) +
    0.0022507295647527866 * texture2D(u_texture, vec2(coords.x, coords.y - offset51)) +
    0.0024280737590625834 * texture2D(u_texture, vec2(coords.x, coords.y - offset50)) +
    0.002615440165644166 * texture2D(u_texture, vec2(coords.x, coords.y - offset49)) +
    0.0028130151135627025 * texture2D(u_texture, vec2(coords.x, coords.y - offset48)) +
    0.0030209512298145125 * texture2D(u_texture, vec2(coords.x, coords.y - offset47)) +
    0.003239363940770783 * texture2D(u_texture, vec2(coords.x, coords.y - offset46)) +
    0.0034683280030806314 * texture2D(u_texture, vec2(coords.x, coords.y - offset45)) +
    0.003707874098711918 * texture2D(u_texture, vec2(coords.x, coords.y - offset44)) +
    0.003957985530639458 * texture2D(u_texture, vec2(coords.x, coords.y - offset43)) +
    0.004218595057198193 * texture2D(u_texture, vec2(coords.x, coords.y - offset42)) +
    0.004489581904259297 * texture2D(u_texture, vec2(coords.x, coords.y - offset41)) +
    0.004770768995118496 * texture2D(u_texture, vec2(coords.x, coords.y - offset40)) +
    0.005061920438269865 * texture2D(u_texture, vec2(coords.x, coords.y - offset39)) +
    0.005362739313041445 * texture2D(u_texture, vec2(coords.x, coords.y - offset38)) +
    0.005672865792362583 * texture2D(u_texture, vec2(coords.x, coords.y - offset37)) +
    0.005991875640694632 * texture2D(u_texture, vec2(coords.x, coords.y - offset36)) +
    0.0063192791233710015 * texture2D(u_texture, vec2(coords.x, coords.y - offset35)) +
    0.0066545203612514885 * texture2D(u_texture, vec2(coords.x, coords.y - offset34)) +
    0.006996977161699534 * texture2D(u_texture, vec2(coords.x, coords.y - offset33)) +
    0.007345961353448219 * texture2D(u_texture, vec2(coords.x, coords.y - offset32)) +
    0.007700719648949135 * texture2D(u_texture, vec2(coords.x, coords.y - offset31)) +
    0.008060435053324546 * texture2D(u_texture, vec2(coords.x, coords.y - offset30)) +
    0.008424228834103509 * texture2D(u_texture, vec2(coords.x, coords.y - offset29)) +
    0.008791163060561808 * texture2D(u_texture, vec2(coords.x, coords.y - offset28)) +
    0.009160243715757486 * texture2D(u_texture, vec2(coords.x, coords.y - offset27)) +
    0.009530424378320478 * texture2D(u_texture, vec2(coords.x, coords.y - offset26)) +
    0.009900610464785797 * texture2D(u_texture, vec2(coords.x, coords.y - offset25)) +
    0.010269664016831527 * texture2D(u_texture, vec2(coords.x, coords.y - offset24)) +
    0.01063640901127732 * texture2D(u_texture, vec2(coords.x, coords.y - offset23)) +
    0.01099963716420334 * texture2D(u_texture, vec2(coords.x, coords.y - offset22)) +
    0.011358114194153305 * texture2D(u_texture, vec2(coords.x, coords.y - offset21)) +
    0.011710586503180978 * texture2D(u_texture, vec2(coords.x, coords.y - offset20)) +
    0.012055788228579258 * texture2D(u_texture, vec2(coords.x, coords.y - offset19)) +
    0.012392448612586884 * texture2D(u_texture, vec2(coords.x, coords.y - offset18)) +
    0.012719299632288072 * texture2D(u_texture, vec2(coords.x, coords.y - offset17)) +
    0.013035083827390307 * texture2D(u_texture, vec2(coords.x, coords.y - offset16)) +
    0.013338562259663475 * texture2D(u_texture, vec2(coords.x, coords.y - offset15)) +
    0.013628522534621419 * texture2D(u_texture, vec2(coords.x, coords.y - offset14)) +
    0.013903786813587678 * texture2D(u_texture, vec2(coords.x, coords.y - offset13)) +
    0.014163219742663545 * texture2D(u_texture, vec2(coords.x, coords.y - offset12)) +
    0.014405736224350598 * texture2D(u_texture, vec2(coords.x, coords.y - offset11)) +
    0.014630308957701187 * texture2D(u_texture, vec2(coords.x, coords.y - offset10)) +
    0.014835975673896 * texture2D(u_texture, vec2(coords.x, coords.y - offset9)) +
    0.015021845996081152 * texture2D(u_texture, vec2(coords.x, coords.y - offset8)) +
    0.015187107855128302 * texture2D(u_texture, vec2(coords.x, coords.y - offset7)) +
    0.015331033396685657 * texture2D(u_texture, vec2(coords.x, coords.y - offset6)) +
    0.015452984319428343 * texture2D(u_texture, vec2(coords.x, coords.y - offset5)) +
    0.015552416589742001 * texture2D(u_texture, vec2(coords.x, coords.y - offset4)) +
    0.0156288844841209 * texture2D(u_texture, vec2(coords.x, coords.y - offset3)) +
    0.015682043917255892 * texture2D(u_texture, vec2(coords.x, coords.y - offset2)) +
    0.015711655021043068 * texture2D(u_texture, vec2(coords.x, coords.y - offset1)) +
    0.0078595332992659 * texture2D(u_texture, coords) +
    0.015711655021043068 * texture2D(u_texture, vec2(coords.x, coords.y + offset1)) +
    0.015682043917255892 * texture2D(u_texture, vec2(coords.x, coords.y + offset2)) +
    0.0156288844841209 * texture2D(u_texture, vec2(coords.x, coords.y + offset3)) +
    0.015552416589742001 * texture2D(u_texture, vec2(coords.x, coords.y + offset4)) +
    0.015452984319428343 * texture2D(u_texture, vec2(coords.x, coords.y + offset5)) +
    0.015331033396685657 * texture2D(u_texture, vec2(coords.x, coords.y + offset6)) +
    0.015187107855128302 * texture2D(u_texture, vec2(coords.x, coords.y + offset7)) +
    0.015021845996081152 * texture2D(u_texture, vec2(coords.x, coords.y + offset8)) +
    0.014835975673896 * texture2D(u_texture, vec2(coords.x, coords.y + offset9)) +
    0.014630308957701187 * texture2D(u_texture, vec2(coords.x, coords.y + offset10)) +
    0.014405736224350598 * texture2D(u_texture, vec2(coords.x, coords.y + offset11)) +
    0.014163219742663545 * texture2D(u_texture, vec2(coords.x, coords.y + offset12)) +
    0.013903786813587678 * texture2D(u_texture, vec2(coords.x, coords.y + offset13)) +
    0.013628522534621419 * texture2D(u_texture, vec2(coords.x, coords.y + offset14)) +
    0.013338562259663475 * texture2D(u_texture, vec2(coords.x, coords.y + offset15)) +
    0.013035083827390307 * texture2D(u_texture, vec2(coords.x, coords.y + offset16)) +
    0.012719299632288072 * texture2D(u_texture, vec2(coords.x, coords.y + offset17)) +
    0.012392448612586884 * texture2D(u_texture, vec2(coords.x, coords.y + offset18)) +
    0.012055788228579258 * texture2D(u_texture, vec2(coords.x, coords.y + offset19)) +
    0.011710586503180978 * texture2D(u_texture, vec2(coords.x, coords.y + offset20)) +
    0.011358114194153305 * texture2D(u_texture, vec2(coords.x, coords.y + offset21)) +
    0.01099963716420334 * texture2D(u_texture, vec2(coords.x, coords.y + offset22)) +
    0.01063640901127732 * texture2D(u_texture, vec2(coords.x, coords.y + offset23)) +
    0.010269664016831527 * texture2D(u_texture, vec2(coords.x, coords.y + offset24)) +
    0.009900610464785797 * texture2D(u_texture, vec2(coords.x, coords.y + offset25)) +
    0.009530424378320478 * texture2D(u_texture, vec2(coords.x, coords.y + offset26)) +
    0.009160243715757486 * texture2D(u_texture, vec2(coords.x, coords.y + offset27)) +
    0.008791163060561808 * texture2D(u_texture, vec2(coords.x, coords.y + offset28)) +
    0.008424228834103509 * texture2D(u_texture, vec2(coords.x, coords.y + offset29)) +
    0.008060435053324546 * texture2D(u_texture, vec2(coords.x, coords.y + offset30)) +
    0.007700719648949135 * texture2D(u_texture, vec2(coords.x, coords.y + offset31)) +
    0.007345961353448219 * texture2D(u_texture, vec2(coords.x, coords.y + offset32)) +
    0.006996977161699534 * texture2D(u_texture, vec2(coords.x, coords.y + offset33)) +
    0.0066545203612514885 * texture2D(u_texture, vec2(coords.x, coords.y + offset34)) +
    0.0063192791233710015 * texture2D(u_texture, vec2(coords.x, coords.y + offset35)) +
    0.005991875640694632 * texture2D(u_texture, vec2(coords.x, coords.y + offset36)) +
    0.005672865792362583 * texture2D(u_texture, vec2(coords.x, coords.y + offset37)) +
    0.005362739313041445 * texture2D(u_texture, vec2(coords.x, coords.y + offset38)) +
    0.005061920438269865 * texture2D(u_texture, vec2(coords.x, coords.y + offset39)) +
    0.004770768995118496 * texture2D(u_texture, vec2(coords.x, coords.y + offset40)) +
    0.004489581904259297 * texture2D(u_texture, vec2(coords.x, coords.y + offset41)) +
    0.004218595057198193 * texture2D(u_texture, vec2(coords.x, coords.y + offset42)) +
    0.003957985530639458 * texture2D(u_texture, vec2(coords.x, coords.y + offset43)) +
    0.003707874098711918 * texture2D(u_texture, vec2(coords.x, coords.y + offset44)) +
    0.0034683280030806314 * texture2D(u_texture, vec2(coords.x, coords.y + offset45)) +
    0.003239363940770783 * texture2D(u_texture, vec2(coords.x, coords.y + offset46)) +
    0.0030209512298145125 * texture2D(u_texture, vec2(coords.x, coords.y + offset47)) +
    0.0028130151135627025 * texture2D(u_texture, vec2(coords.x, coords.y + offset48)) +
    0.002615440165644166 * texture2D(u_texture, vec2(coords.x, coords.y + offset49)) +
    0.0024280737590625834 * texture2D(u_texture, vec2(coords.x, coords.y + offset50)) +
    0.0022507295647527866 * texture2D(u_texture, vec2(coords.x, coords.y + offset51)) +
    0.0020831910470265487 * texture2D(u_texture, vec2(coords.x, coords.y + offset52)) +
    0.0019252149256771497 * texture2D(u_texture, vec2(coords.x, coords.y + offset53)) +
    0.0017765345770347407 * texture2D(u_texture, vec2(coords.x, coords.y + offset54)) +
    0.0016368633489247568 * texture2D(u_texture, vec2(coords.x, coords.y + offset55)) +
    0.001505897767234474 * texture2D(u_texture, vec2(coords.x, coords.y + offset56)) +
    0.0013833206145954847 * texture2D(u_texture, vec2(coords.x, coords.y + offset57)) +
    0.001268803864502038 * texture2D(u_texture, vec2(coords.x, coords.y + offset58)) +
    0.00116201145696954 * texture2D(u_texture, vec2(coords.x, coords.y + offset59)) +
    0.0010626019045600025 * texture2D(u_texture, vec2(coords.x, coords.y + offset60)) +
    0.0009702307202315132 * texture2D(u_texture, vec2(coords.x, coords.y + offset61)) +
    0.0008845526609802283 * texture2D(u_texture, vec2(coords.x, coords.y + offset62)) +
    0.0008052237836133131 * texture2D(u_texture, vec2(coords.x, coords.y + offset63))
  );
}
