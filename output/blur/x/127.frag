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

  float one_pixel = u_dimensions.z;
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
    0.0008052237836133131 * texture2D(u_texture, vec2(coords.x - offset63, coords.y)) +
    0.0008845526609802283 * texture2D(u_texture, vec2(coords.x - offset62, coords.y)) +
    0.0009702307202315132 * texture2D(u_texture, vec2(coords.x - offset61, coords.y)) +
    0.0010626019045600025 * texture2D(u_texture, vec2(coords.x - offset60, coords.y)) +
    0.00116201145696954 * texture2D(u_texture, vec2(coords.x - offset59, coords.y)) +
    0.001268803864502038 * texture2D(u_texture, vec2(coords.x - offset58, coords.y)) +
    0.0013833206145954847 * texture2D(u_texture, vec2(coords.x - offset57, coords.y)) +
    0.001505897767234474 * texture2D(u_texture, vec2(coords.x - offset56, coords.y)) +
    0.0016368633489247568 * texture2D(u_texture, vec2(coords.x - offset55, coords.y)) +
    0.0017765345770347407 * texture2D(u_texture, vec2(coords.x - offset54, coords.y)) +
    0.0019252149256771497 * texture2D(u_texture, vec2(coords.x - offset53, coords.y)) +
    0.0020831910470265487 * texture2D(u_texture, vec2(coords.x - offset52, coords.y)) +
    0.0022507295647527866 * texture2D(u_texture, vec2(coords.x - offset51, coords.y)) +
    0.0024280737590625834 * texture2D(u_texture, vec2(coords.x - offset50, coords.y)) +
    0.002615440165644166 * texture2D(u_texture, vec2(coords.x - offset49, coords.y)) +
    0.0028130151135627025 * texture2D(u_texture, vec2(coords.x - offset48, coords.y)) +
    0.0030209512298145125 * texture2D(u_texture, vec2(coords.x - offset47, coords.y)) +
    0.003239363940770783 * texture2D(u_texture, vec2(coords.x - offset46, coords.y)) +
    0.0034683280030806314 * texture2D(u_texture, vec2(coords.x - offset45, coords.y)) +
    0.003707874098711918 * texture2D(u_texture, vec2(coords.x - offset44, coords.y)) +
    0.003957985530639458 * texture2D(u_texture, vec2(coords.x - offset43, coords.y)) +
    0.004218595057198193 * texture2D(u_texture, vec2(coords.x - offset42, coords.y)) +
    0.004489581904259297 * texture2D(u_texture, vec2(coords.x - offset41, coords.y)) +
    0.004770768995118496 * texture2D(u_texture, vec2(coords.x - offset40, coords.y)) +
    0.005061920438269865 * texture2D(u_texture, vec2(coords.x - offset39, coords.y)) +
    0.005362739313041445 * texture2D(u_texture, vec2(coords.x - offset38, coords.y)) +
    0.005672865792362583 * texture2D(u_texture, vec2(coords.x - offset37, coords.y)) +
    0.005991875640694632 * texture2D(u_texture, vec2(coords.x - offset36, coords.y)) +
    0.0063192791233710015 * texture2D(u_texture, vec2(coords.x - offset35, coords.y)) +
    0.0066545203612514885 * texture2D(u_texture, vec2(coords.x - offset34, coords.y)) +
    0.006996977161699534 * texture2D(u_texture, vec2(coords.x - offset33, coords.y)) +
    0.007345961353448219 * texture2D(u_texture, vec2(coords.x - offset32, coords.y)) +
    0.007700719648949135 * texture2D(u_texture, vec2(coords.x - offset31, coords.y)) +
    0.008060435053324546 * texture2D(u_texture, vec2(coords.x - offset30, coords.y)) +
    0.008424228834103509 * texture2D(u_texture, vec2(coords.x - offset29, coords.y)) +
    0.008791163060561808 * texture2D(u_texture, vec2(coords.x - offset28, coords.y)) +
    0.009160243715757486 * texture2D(u_texture, vec2(coords.x - offset27, coords.y)) +
    0.009530424378320478 * texture2D(u_texture, vec2(coords.x - offset26, coords.y)) +
    0.009900610464785797 * texture2D(u_texture, vec2(coords.x - offset25, coords.y)) +
    0.010269664016831527 * texture2D(u_texture, vec2(coords.x - offset24, coords.y)) +
    0.01063640901127732 * texture2D(u_texture, vec2(coords.x - offset23, coords.y)) +
    0.01099963716420334 * texture2D(u_texture, vec2(coords.x - offset22, coords.y)) +
    0.011358114194153305 * texture2D(u_texture, vec2(coords.x - offset21, coords.y)) +
    0.011710586503180978 * texture2D(u_texture, vec2(coords.x - offset20, coords.y)) +
    0.012055788228579258 * texture2D(u_texture, vec2(coords.x - offset19, coords.y)) +
    0.012392448612586884 * texture2D(u_texture, vec2(coords.x - offset18, coords.y)) +
    0.012719299632288072 * texture2D(u_texture, vec2(coords.x - offset17, coords.y)) +
    0.013035083827390307 * texture2D(u_texture, vec2(coords.x - offset16, coords.y)) +
    0.013338562259663475 * texture2D(u_texture, vec2(coords.x - offset15, coords.y)) +
    0.013628522534621419 * texture2D(u_texture, vec2(coords.x - offset14, coords.y)) +
    0.013903786813587678 * texture2D(u_texture, vec2(coords.x - offset13, coords.y)) +
    0.014163219742663545 * texture2D(u_texture, vec2(coords.x - offset12, coords.y)) +
    0.014405736224350598 * texture2D(u_texture, vec2(coords.x - offset11, coords.y)) +
    0.014630308957701187 * texture2D(u_texture, vec2(coords.x - offset10, coords.y)) +
    0.014835975673896 * texture2D(u_texture, vec2(coords.x - offset9, coords.y)) +
    0.015021845996081152 * texture2D(u_texture, vec2(coords.x - offset8, coords.y)) +
    0.015187107855128302 * texture2D(u_texture, vec2(coords.x - offset7, coords.y)) +
    0.015331033396685657 * texture2D(u_texture, vec2(coords.x - offset6, coords.y)) +
    0.015452984319428343 * texture2D(u_texture, vec2(coords.x - offset5, coords.y)) +
    0.015552416589742001 * texture2D(u_texture, vec2(coords.x - offset4, coords.y)) +
    0.0156288844841209 * texture2D(u_texture, vec2(coords.x - offset3, coords.y)) +
    0.015682043917255892 * texture2D(u_texture, vec2(coords.x - offset2, coords.y)) +
    0.015711655021043068 * texture2D(u_texture, vec2(coords.x - offset1, coords.y)) +
    0.0078595332992659 * texture2D(u_texture, coords) +
    0.015711655021043068 * texture2D(u_texture, vec2(coords.x + offset1, coords.y)) +
    0.015682043917255892 * texture2D(u_texture, vec2(coords.x + offset2, coords.y)) +
    0.0156288844841209 * texture2D(u_texture, vec2(coords.x + offset3, coords.y)) +
    0.015552416589742001 * texture2D(u_texture, vec2(coords.x + offset4, coords.y)) +
    0.015452984319428343 * texture2D(u_texture, vec2(coords.x + offset5, coords.y)) +
    0.015331033396685657 * texture2D(u_texture, vec2(coords.x + offset6, coords.y)) +
    0.015187107855128302 * texture2D(u_texture, vec2(coords.x + offset7, coords.y)) +
    0.015021845996081152 * texture2D(u_texture, vec2(coords.x + offset8, coords.y)) +
    0.014835975673896 * texture2D(u_texture, vec2(coords.x + offset9, coords.y)) +
    0.014630308957701187 * texture2D(u_texture, vec2(coords.x + offset10, coords.y)) +
    0.014405736224350598 * texture2D(u_texture, vec2(coords.x + offset11, coords.y)) +
    0.014163219742663545 * texture2D(u_texture, vec2(coords.x + offset12, coords.y)) +
    0.013903786813587678 * texture2D(u_texture, vec2(coords.x + offset13, coords.y)) +
    0.013628522534621419 * texture2D(u_texture, vec2(coords.x + offset14, coords.y)) +
    0.013338562259663475 * texture2D(u_texture, vec2(coords.x + offset15, coords.y)) +
    0.013035083827390307 * texture2D(u_texture, vec2(coords.x + offset16, coords.y)) +
    0.012719299632288072 * texture2D(u_texture, vec2(coords.x + offset17, coords.y)) +
    0.012392448612586884 * texture2D(u_texture, vec2(coords.x + offset18, coords.y)) +
    0.012055788228579258 * texture2D(u_texture, vec2(coords.x + offset19, coords.y)) +
    0.011710586503180978 * texture2D(u_texture, vec2(coords.x + offset20, coords.y)) +
    0.011358114194153305 * texture2D(u_texture, vec2(coords.x + offset21, coords.y)) +
    0.01099963716420334 * texture2D(u_texture, vec2(coords.x + offset22, coords.y)) +
    0.01063640901127732 * texture2D(u_texture, vec2(coords.x + offset23, coords.y)) +
    0.010269664016831527 * texture2D(u_texture, vec2(coords.x + offset24, coords.y)) +
    0.009900610464785797 * texture2D(u_texture, vec2(coords.x + offset25, coords.y)) +
    0.009530424378320478 * texture2D(u_texture, vec2(coords.x + offset26, coords.y)) +
    0.009160243715757486 * texture2D(u_texture, vec2(coords.x + offset27, coords.y)) +
    0.008791163060561808 * texture2D(u_texture, vec2(coords.x + offset28, coords.y)) +
    0.008424228834103509 * texture2D(u_texture, vec2(coords.x + offset29, coords.y)) +
    0.008060435053324546 * texture2D(u_texture, vec2(coords.x + offset30, coords.y)) +
    0.007700719648949135 * texture2D(u_texture, vec2(coords.x + offset31, coords.y)) +
    0.007345961353448219 * texture2D(u_texture, vec2(coords.x + offset32, coords.y)) +
    0.006996977161699534 * texture2D(u_texture, vec2(coords.x + offset33, coords.y)) +
    0.0066545203612514885 * texture2D(u_texture, vec2(coords.x + offset34, coords.y)) +
    0.0063192791233710015 * texture2D(u_texture, vec2(coords.x + offset35, coords.y)) +
    0.005991875640694632 * texture2D(u_texture, vec2(coords.x + offset36, coords.y)) +
    0.005672865792362583 * texture2D(u_texture, vec2(coords.x + offset37, coords.y)) +
    0.005362739313041445 * texture2D(u_texture, vec2(coords.x + offset38, coords.y)) +
    0.005061920438269865 * texture2D(u_texture, vec2(coords.x + offset39, coords.y)) +
    0.004770768995118496 * texture2D(u_texture, vec2(coords.x + offset40, coords.y)) +
    0.004489581904259297 * texture2D(u_texture, vec2(coords.x + offset41, coords.y)) +
    0.004218595057198193 * texture2D(u_texture, vec2(coords.x + offset42, coords.y)) +
    0.003957985530639458 * texture2D(u_texture, vec2(coords.x + offset43, coords.y)) +
    0.003707874098711918 * texture2D(u_texture, vec2(coords.x + offset44, coords.y)) +
    0.0034683280030806314 * texture2D(u_texture, vec2(coords.x + offset45, coords.y)) +
    0.003239363940770783 * texture2D(u_texture, vec2(coords.x + offset46, coords.y)) +
    0.0030209512298145125 * texture2D(u_texture, vec2(coords.x + offset47, coords.y)) +
    0.0028130151135627025 * texture2D(u_texture, vec2(coords.x + offset48, coords.y)) +
    0.002615440165644166 * texture2D(u_texture, vec2(coords.x + offset49, coords.y)) +
    0.0024280737590625834 * texture2D(u_texture, vec2(coords.x + offset50, coords.y)) +
    0.0022507295647527866 * texture2D(u_texture, vec2(coords.x + offset51, coords.y)) +
    0.0020831910470265487 * texture2D(u_texture, vec2(coords.x + offset52, coords.y)) +
    0.0019252149256771497 * texture2D(u_texture, vec2(coords.x + offset53, coords.y)) +
    0.0017765345770347407 * texture2D(u_texture, vec2(coords.x + offset54, coords.y)) +
    0.0016368633489247568 * texture2D(u_texture, vec2(coords.x + offset55, coords.y)) +
    0.001505897767234474 * texture2D(u_texture, vec2(coords.x + offset56, coords.y)) +
    0.0013833206145954847 * texture2D(u_texture, vec2(coords.x + offset57, coords.y)) +
    0.001268803864502038 * texture2D(u_texture, vec2(coords.x + offset58, coords.y)) +
    0.00116201145696954 * texture2D(u_texture, vec2(coords.x + offset59, coords.y)) +
    0.0010626019045600025 * texture2D(u_texture, vec2(coords.x + offset60, coords.y)) +
    0.0009702307202315132 * texture2D(u_texture, vec2(coords.x + offset61, coords.y)) +
    0.0008845526609802283 * texture2D(u_texture, vec2(coords.x + offset62, coords.y)) +
    0.0008052237836133131 * texture2D(u_texture, vec2(coords.x + offset63, coords.y))
  );
}
