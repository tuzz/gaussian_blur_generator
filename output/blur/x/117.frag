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

  float one_pixel = u_scaling.x;
  float offset1 = one_pixel * 1.4998330550918197;
  float offset2 = one_pixel * 3.4996104618809127;
  float offset3 = one_pixel * 5.499387868670006;
  float offset4 = one_pixel * 7.499165275459099;
  float offset5 = one_pixel * 9.498942682248192;
  float offset6 = one_pixel * 11.498720089037285;
  float offset7 = one_pixel * 13.498497495826378;
  float offset8 = one_pixel * 15.49827490261547;
  float offset9 = one_pixel * 17.498052309404564;
  float offset10 = one_pixel * 19.497829716193657;
  float offset11 = one_pixel * 21.49760712298275;
  float offset12 = one_pixel * 23.497384529771843;
  float offset13 = one_pixel * 25.497161936560936;
  float offset14 = one_pixel * 27.49693934335003;
  float offset15 = one_pixel * 29.49671675013912;
  float offset16 = one_pixel * 31.496494156928215;
  float offset17 = one_pixel * 33.49627156371731;
  float offset18 = one_pixel * 35.4960489705064;
  float offset19 = one_pixel * 37.495826377295494;
  float offset20 = one_pixel * 39.49560378408459;
  float offset21 = one_pixel * 41.49538119087368;
  float offset22 = one_pixel * 43.49515859766277;
  float offset23 = one_pixel * 45.494936004451866;
  float offset24 = one_pixel * 47.49471341124096;
  float offset25 = one_pixel * 49.49449081803005;
  float offset26 = one_pixel * 51.494268224819145;
  float offset27 = one_pixel * 53.49404563160824;
  float offset28 = one_pixel * 55.49382303839733;
  float offset29 = one_pixel * 57.49360044518642;
  float offset30 = one_pixel * 59.49337785197552;
  float offset31 = one_pixel * 61.49315525876461;
  float offset32 = one_pixel * 63.4929326655537;
  float offset33 = one_pixel * 65.49271007234279;
  float offset34 = one_pixel * 67.49248747913188;
  float offset35 = one_pixel * 69.49226488592097;
  float offset36 = one_pixel * 71.49204229271007;
  float offset37 = one_pixel * 73.49181969949916;
  float offset38 = one_pixel * 75.49159710628825;
  float offset39 = one_pixel * 77.49137451307735;
  float offset40 = one_pixel * 79.49115191986644;
  float offset41 = one_pixel * 81.49092932665553;
  float offset42 = one_pixel * 83.49070673344463;
  float offset43 = one_pixel * 85.49048414023372;
  float offset44 = one_pixel * 87.49026154702281;
  float offset45 = one_pixel * 89.4900389538119;
  float offset46 = one_pixel * 91.489816360601;
  float offset47 = one_pixel * 93.48959376739009;
  float offset48 = one_pixel * 95.48937117417918;
  float offset49 = one_pixel * 97.48914858096828;
  float offset50 = one_pixel * 99.48892598775737;
  float offset51 = one_pixel * 101.48870339454646;
  float offset52 = one_pixel * 103.48848080133556;
  float offset53 = one_pixel * 105.48825820812465;
  float offset54 = one_pixel * 107.48803561491374;
  float offset55 = one_pixel * 109.48781302170283;
  float offset56 = one_pixel * 111.48759042849193;
  float offset57 = one_pixel * 113.48736783528102;
  float offset58 = one_pixel * 115.48714524207011;

  gl_FragColor = (
    0.0008763744899247174 * texture2D(u_texture, vec2(coords.x - offset58, coords.y)) +
    0.0009704422757136834 * texture2D(u_texture, vec2(coords.x - offset57, coords.y)) +
    0.0010726941497333818 * texture2D(u_texture, vec2(coords.x - offset56, coords.y)) +
    0.0011836092704297 * texture2D(u_texture, vec2(coords.x - offset55, coords.y)) +
    0.0013036681712625014 * texture2D(u_texture, vec2(coords.x - offset54, coords.y)) +
    0.001433349310892883 * texture2D(u_texture, vec2(coords.x - offset53, coords.y)) +
    0.0015731252898363592 * texture2D(u_texture, vec2(coords.x - offset52, coords.y)) +
    0.0017234587421488005 * texture2D(u_texture, vec2(coords.x - offset51, coords.y)) +
    0.0018847979158117553 * texture2D(u_texture, vec2(coords.x - offset50, coords.y)) +
    0.0020575719608862744 * texture2D(u_texture, vec2(coords.x - offset49, coords.y)) +
    0.0022421859501488032 * texture2D(u_texture, vec2(coords.x - offset48, coords.y)) +
    0.0024390156627379445 * texture2D(u_texture, vec2(coords.x - offset47, coords.y)) +
    0.0026484021672458138 * texture2D(u_texture, vec2(coords.x - offset46, coords.y)) +
    0.0028706462465919675 * texture2D(u_texture, vec2(coords.x - offset45, coords.y)) +
    0.00310600271282285 * texture2D(u_texture, vec2(coords.x - offset44, coords.y)) +
    0.0033546746655798232 * texture2D(u_texture, vec2(coords.x - offset43, coords.y)) +
    0.0036168077532630427 * texture2D(u_texture, vec2(coords.x - offset42, coords.y)) +
    0.003892484500772006 * texture2D(u_texture, vec2(coords.x - offset41, coords.y)) +
    0.004181718772010197 * texture2D(u_texture, vec2(coords.x - offset40, coords.y)) +
    0.004484450438985066 * texture2D(u_texture, vec2(coords.x - offset39, coords.y)) +
    0.004800540332202833 * texture2D(u_texture, vec2(coords.x - offset38, coords.y)) +
    0.005129765549042982 * texture2D(u_texture, vec2(coords.x - offset37, coords.y)) +
    0.005471815197800636 * texture2D(u_texture, vec2(coords.x - offset36, coords.y)) +
    0.005826286655017693 * texture2D(u_texture, vec2(coords.x - offset35, coords.y)) +
    0.006192682412510591 * texture2D(u_texture, vec2(coords.x - offset34, coords.y)) +
    0.006570407588084252 * texture2D(u_texture, vec2(coords.x - offset33, coords.y)) +
    0.00695876817025678 * texture2D(u_texture, vec2(coords.x - offset32, coords.y)) +
    0.007356970062386614 * texture2D(u_texture, vec2(coords.x - offset31, coords.y)) +
    0.007764118985393366 * texture2D(u_texture, vec2(coords.x - offset30, coords.y)) +
    0.008179221290819518 * texture2D(u_texture, vec2(coords.x - offset29, coords.y)) +
    0.008601185727340255 * texture2D(u_texture, vec2(coords.x - offset28, coords.y)) +
    0.009028826194065597 * texture2D(u_texture, vec2(coords.x - offset27, coords.y)) +
    0.00946086550318997 * texture2D(u_texture, vec2(coords.x - offset26, coords.y)) +
    0.009895940162850596 * texture2D(u_texture, vec2(coords.x - offset25, coords.y)) +
    0.01033260617860204 * texture2D(u_texture, vec2(coords.x - offset24, coords.y)) +
    0.010769345858865109 * texture2D(u_texture, vec2(coords.x - offset23, coords.y)) +
    0.011204575596249045 * texture2D(u_texture, vec2(coords.x - offset22, coords.y)) +
    0.011636654582976986 * texture2D(u_texture, vec2(coords.x - offset21, coords.y)) +
    0.012063894404979998 * texture2D(u_texture, vec2(coords.x - offset20, coords.y)) +
    0.012484569445787845 * texture2D(u_texture, vec2(coords.x - offset19, coords.y)) +
    0.0128969280183633 * texture2D(u_texture, vec2(coords.x - offset18, coords.y)) +
    0.01329920413073079 * texture2D(u_texture, vec2(coords.x - offset17, coords.y)) +
    0.013689629779865268 * texture2D(u_texture, vec2(coords.x - offset16, coords.y)) +
    0.014066447658051196 * texture2D(u_texture, vec2(coords.x - offset15, coords.y)) +
    0.014427924146998942 * texture2D(u_texture, vec2(coords.x - offset14, coords.y)) +
    0.014772362467604789 * texture2D(u_texture, vec2(coords.x - offset13, coords.y)) +
    0.01509811584752656 * texture2D(u_texture, vec2(coords.x - offset12, coords.y)) +
    0.015403600564860506 * texture2D(u_texture, vec2(coords.x - offset11, coords.y)) +
    0.01568730872425762 * texture2D(u_texture, vec2(coords.x - offset10, coords.y)) +
    0.015947820621888806 * texture2D(u_texture, vec2(coords.x - offset9, coords.y)) +
    0.016183816557803023 * texture2D(u_texture, vec2(coords.x - offset8, coords.y)) +
    0.016394087958430104 * texture2D(u_texture, vec2(coords.x - offset7, coords.y)) +
    0.016577547678232232 * texture2D(u_texture, vec2(coords.x - offset6, coords.y)) +
    0.016733239357740234 * texture2D(u_texture, vec2(coords.x - offset5, coords.y)) +
    0.016860345725321295 * texture2D(u_texture, vec2(coords.x - offset4, coords.y)) +
    0.016958195741876802 * texture2D(u_texture, vec2(coords.x - offset3, coords.y)) +
    0.017026270501093555 * texture2D(u_texture, vec2(coords.x - offset2, coords.y)) +
    0.017064207812668656 * texture2D(u_texture, vec2(coords.x - offset1, coords.y)) +
    0.008536852722932088 * texture2D(u_texture, coords) +
    0.017064207812668656 * texture2D(u_texture, vec2(coords.x + offset1, coords.y)) +
    0.017026270501093555 * texture2D(u_texture, vec2(coords.x + offset2, coords.y)) +
    0.016958195741876802 * texture2D(u_texture, vec2(coords.x + offset3, coords.y)) +
    0.016860345725321295 * texture2D(u_texture, vec2(coords.x + offset4, coords.y)) +
    0.016733239357740234 * texture2D(u_texture, vec2(coords.x + offset5, coords.y)) +
    0.016577547678232232 * texture2D(u_texture, vec2(coords.x + offset6, coords.y)) +
    0.016394087958430104 * texture2D(u_texture, vec2(coords.x + offset7, coords.y)) +
    0.016183816557803023 * texture2D(u_texture, vec2(coords.x + offset8, coords.y)) +
    0.015947820621888806 * texture2D(u_texture, vec2(coords.x + offset9, coords.y)) +
    0.01568730872425762 * texture2D(u_texture, vec2(coords.x + offset10, coords.y)) +
    0.015403600564860506 * texture2D(u_texture, vec2(coords.x + offset11, coords.y)) +
    0.01509811584752656 * texture2D(u_texture, vec2(coords.x + offset12, coords.y)) +
    0.014772362467604789 * texture2D(u_texture, vec2(coords.x + offset13, coords.y)) +
    0.014427924146998942 * texture2D(u_texture, vec2(coords.x + offset14, coords.y)) +
    0.014066447658051196 * texture2D(u_texture, vec2(coords.x + offset15, coords.y)) +
    0.013689629779865268 * texture2D(u_texture, vec2(coords.x + offset16, coords.y)) +
    0.01329920413073079 * texture2D(u_texture, vec2(coords.x + offset17, coords.y)) +
    0.0128969280183633 * texture2D(u_texture, vec2(coords.x + offset18, coords.y)) +
    0.012484569445787845 * texture2D(u_texture, vec2(coords.x + offset19, coords.y)) +
    0.012063894404979998 * texture2D(u_texture, vec2(coords.x + offset20, coords.y)) +
    0.011636654582976986 * texture2D(u_texture, vec2(coords.x + offset21, coords.y)) +
    0.011204575596249045 * texture2D(u_texture, vec2(coords.x + offset22, coords.y)) +
    0.010769345858865109 * texture2D(u_texture, vec2(coords.x + offset23, coords.y)) +
    0.01033260617860204 * texture2D(u_texture, vec2(coords.x + offset24, coords.y)) +
    0.009895940162850596 * texture2D(u_texture, vec2(coords.x + offset25, coords.y)) +
    0.00946086550318997 * texture2D(u_texture, vec2(coords.x + offset26, coords.y)) +
    0.009028826194065597 * texture2D(u_texture, vec2(coords.x + offset27, coords.y)) +
    0.008601185727340255 * texture2D(u_texture, vec2(coords.x + offset28, coords.y)) +
    0.008179221290819518 * texture2D(u_texture, vec2(coords.x + offset29, coords.y)) +
    0.007764118985393366 * texture2D(u_texture, vec2(coords.x + offset30, coords.y)) +
    0.007356970062386614 * texture2D(u_texture, vec2(coords.x + offset31, coords.y)) +
    0.00695876817025678 * texture2D(u_texture, vec2(coords.x + offset32, coords.y)) +
    0.006570407588084252 * texture2D(u_texture, vec2(coords.x + offset33, coords.y)) +
    0.006192682412510591 * texture2D(u_texture, vec2(coords.x + offset34, coords.y)) +
    0.005826286655017693 * texture2D(u_texture, vec2(coords.x + offset35, coords.y)) +
    0.005471815197800636 * texture2D(u_texture, vec2(coords.x + offset36, coords.y)) +
    0.005129765549042982 * texture2D(u_texture, vec2(coords.x + offset37, coords.y)) +
    0.004800540332202833 * texture2D(u_texture, vec2(coords.x + offset38, coords.y)) +
    0.004484450438985066 * texture2D(u_texture, vec2(coords.x + offset39, coords.y)) +
    0.004181718772010197 * texture2D(u_texture, vec2(coords.x + offset40, coords.y)) +
    0.003892484500772006 * texture2D(u_texture, vec2(coords.x + offset41, coords.y)) +
    0.0036168077532630427 * texture2D(u_texture, vec2(coords.x + offset42, coords.y)) +
    0.0033546746655798232 * texture2D(u_texture, vec2(coords.x + offset43, coords.y)) +
    0.00310600271282285 * texture2D(u_texture, vec2(coords.x + offset44, coords.y)) +
    0.0028706462465919675 * texture2D(u_texture, vec2(coords.x + offset45, coords.y)) +
    0.0026484021672458138 * texture2D(u_texture, vec2(coords.x + offset46, coords.y)) +
    0.0024390156627379445 * texture2D(u_texture, vec2(coords.x + offset47, coords.y)) +
    0.0022421859501488032 * texture2D(u_texture, vec2(coords.x + offset48, coords.y)) +
    0.0020575719608862744 * texture2D(u_texture, vec2(coords.x + offset49, coords.y)) +
    0.0018847979158117553 * texture2D(u_texture, vec2(coords.x + offset50, coords.y)) +
    0.0017234587421488005 * texture2D(u_texture, vec2(coords.x + offset51, coords.y)) +
    0.0015731252898363592 * texture2D(u_texture, vec2(coords.x + offset52, coords.y)) +
    0.001433349310892883 * texture2D(u_texture, vec2(coords.x + offset53, coords.y)) +
    0.0013036681712625014 * texture2D(u_texture, vec2(coords.x + offset54, coords.y)) +
    0.0011836092704297 * texture2D(u_texture, vec2(coords.x + offset55, coords.y)) +
    0.0010726941497333818 * texture2D(u_texture, vec2(coords.x + offset56, coords.y)) +
    0.0009704422757136834 * texture2D(u_texture, vec2(coords.x + offset57, coords.y)) +
    0.0008763744899247174 * texture2D(u_texture, vec2(coords.x + offset58, coords.y))
  );
}
