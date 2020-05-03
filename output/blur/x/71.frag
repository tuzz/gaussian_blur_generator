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
  float offset1 = one_pixel * 1.4995417048579285;
  float offset2 = one_pixel * 3.4989306446685;
  float offset3 = one_pixel * 5.498319584479071;
  float offset4 = one_pixel * 7.497708524289642;
  float offset5 = one_pixel * 9.497097464100214;
  float offset6 = one_pixel * 11.496486403910785;
  float offset7 = one_pixel * 13.495875343721357;
  float offset8 = one_pixel * 15.495264283531927;
  float offset9 = one_pixel * 17.4946532233425;
  float offset10 = one_pixel * 19.494042163153072;
  float offset11 = one_pixel * 21.49343110296364;
  float offset12 = one_pixel * 23.492820042774213;
  float offset13 = one_pixel * 25.492208982584785;
  float offset14 = one_pixel * 27.491597922395357;
  float offset15 = one_pixel * 29.490986862205926;
  float offset16 = one_pixel * 31.490375802016498;
  float offset17 = one_pixel * 33.48976474182707;
  float offset18 = one_pixel * 35.48915368163764;
  float offset19 = one_pixel * 37.48854262144821;
  float offset20 = one_pixel * 39.48793156125878;
  float offset21 = one_pixel * 41.487320501069355;
  float offset22 = one_pixel * 43.48670944087993;
  float offset23 = one_pixel * 45.4860983806905;
  float offset24 = one_pixel * 47.48548732050107;
  float offset25 = one_pixel * 49.484876260311644;
  float offset26 = one_pixel * 51.48426520012221;
  float offset27 = one_pixel * 53.48365413993278;
  float offset28 = one_pixel * 55.483043079743354;
  float offset29 = one_pixel * 57.482432019553926;
  float offset30 = one_pixel * 59.4818209593645;
  float offset31 = one_pixel * 61.48120989917507;
  float offset32 = one_pixel * 63.48059883898564;
  float offset33 = one_pixel * 65.47998777879621;
  float offset34 = one_pixel * 67.47937671860679;
  float offset35 = one_pixel * 69.47876565841736;

  gl_FragColor = (
    0.001477762812025868 * texture2D(u_texture, vec2(coords.x - offset35, coords.y)) +
    0.0017471860018340045 * texture2D(u_texture, vec2(coords.x - offset34, coords.y)) +
    0.0020556422842986613 * texture2D(u_texture, vec2(coords.x - offset33, coords.y)) +
    0.0024067453839188434 * texture2D(u_texture, vec2(coords.x - offset32, coords.y)) +
    0.002804059092141262 * texture2D(u_texture, vec2(coords.x - offset31, coords.y)) +
    0.003251013578100647 * texture2D(u_texture, vec2(coords.x - offset30, coords.y)) +
    0.003750811206832023 * texture2D(u_texture, vec2(coords.x - offset29, coords.y)) +
    0.004306323106727935 * texture2D(u_texture, vec2(coords.x - offset28, coords.y)) +
    0.004919978267800731 * texture2D(u_texture, vec2(coords.x - offset27, coords.y)) +
    0.005593647503183684 * texture2D(u_texture, vec2(coords.x - offset26, coords.y)) +
    0.006328525144131359 * texture2D(u_texture, vec2(coords.x - offset25, coords.y)) +
    0.007125011836418759 * texture2D(u_texture, vec2(coords.x - offset24, coords.y)) +
    0.007982602234442412 * texture2D(u_texture, vec2(coords.x - offset23, coords.y)) +
    0.008899781718919584 * texture2D(u_texture, vec2(coords.x - offset22, coords.y)) +
    0.009873936466369122 * texture2D(u_texture, vec2(coords.x - offset21, coords.y)) +
    0.01090128124788392 * texture2D(u_texture, vec2(coords.x - offset20, coords.y)) +
    0.011976809210068138 * texture2D(u_texture, vec2(coords.x - offset19, coords.y)) +
    0.013094267577816697 * texture2D(u_texture, vec2(coords.x - offset18, coords.y)) +
    0.014246162710240163 * texture2D(u_texture, vec2(coords.x - offset17, coords.y)) +
    0.015423797240101728 * texture2D(u_texture, vec2(coords.x - offset16, coords.y)) +
    0.01661734114631903 * texture2D(u_texture, vec2(coords.x - offset15, coords.y)) +
    0.017815937571450894 * texture2D(u_texture, vec2(coords.x - offset14, coords.y)) +
    0.019007843034773046 * texture2D(u_texture, vec2(coords.x - offset13, coords.y)) +
    0.020180600448826858 * texture2D(u_texture, vec2(coords.x - offset12, coords.y)) +
    0.0213212420730536 * texture2D(u_texture, vec2(coords.x - offset11, coords.y)) +
    0.02241651828757592 * texture2D(u_texture, vec2(coords.x - offset10, coords.y)) +
    0.02345314690140245 * texture2D(u_texture, vec2(coords.x - offset9, coords.y)) +
    0.024418076680125127 * texture2D(u_texture, vec2(coords.x - offset8, coords.y)) +
    0.025298757942948898 * texture2D(u_texture, vec2(coords.x - offset7, coords.y)) +
    0.026083412485438617 * texture2D(u_texture, vec2(coords.x - offset6, coords.y)) +
    0.02676129477092691 * texture2D(u_texture, vec2(coords.x - offset5, coords.y)) +
    0.027322936326229168 * texture2D(u_texture, vec2(coords.x - offset4, coords.y)) +
    0.02776036558823372 * texture2D(u_texture, vec2(coords.x - offset3, coords.y)) +
    0.02806729607390565 * texture2D(u_texture, vec2(coords.x - offset2, coords.y)) +
    0.02823927666850656 * texture2D(u_texture, vec2(coords.x - offset1, coords.y)) +
    0.014141218754056023 * texture2D(u_texture, coords) +
    0.02823927666850656 * texture2D(u_texture, vec2(coords.x + offset1, coords.y)) +
    0.02806729607390565 * texture2D(u_texture, vec2(coords.x + offset2, coords.y)) +
    0.02776036558823372 * texture2D(u_texture, vec2(coords.x + offset3, coords.y)) +
    0.027322936326229168 * texture2D(u_texture, vec2(coords.x + offset4, coords.y)) +
    0.02676129477092691 * texture2D(u_texture, vec2(coords.x + offset5, coords.y)) +
    0.026083412485438617 * texture2D(u_texture, vec2(coords.x + offset6, coords.y)) +
    0.025298757942948898 * texture2D(u_texture, vec2(coords.x + offset7, coords.y)) +
    0.024418076680125127 * texture2D(u_texture, vec2(coords.x + offset8, coords.y)) +
    0.02345314690140245 * texture2D(u_texture, vec2(coords.x + offset9, coords.y)) +
    0.02241651828757592 * texture2D(u_texture, vec2(coords.x + offset10, coords.y)) +
    0.0213212420730536 * texture2D(u_texture, vec2(coords.x + offset11, coords.y)) +
    0.020180600448826858 * texture2D(u_texture, vec2(coords.x + offset12, coords.y)) +
    0.019007843034773046 * texture2D(u_texture, vec2(coords.x + offset13, coords.y)) +
    0.017815937571450894 * texture2D(u_texture, vec2(coords.x + offset14, coords.y)) +
    0.01661734114631903 * texture2D(u_texture, vec2(coords.x + offset15, coords.y)) +
    0.015423797240101728 * texture2D(u_texture, vec2(coords.x + offset16, coords.y)) +
    0.014246162710240163 * texture2D(u_texture, vec2(coords.x + offset17, coords.y)) +
    0.013094267577816697 * texture2D(u_texture, vec2(coords.x + offset18, coords.y)) +
    0.011976809210068138 * texture2D(u_texture, vec2(coords.x + offset19, coords.y)) +
    0.01090128124788392 * texture2D(u_texture, vec2(coords.x + offset20, coords.y)) +
    0.009873936466369122 * texture2D(u_texture, vec2(coords.x + offset21, coords.y)) +
    0.008899781718919584 * texture2D(u_texture, vec2(coords.x + offset22, coords.y)) +
    0.007982602234442412 * texture2D(u_texture, vec2(coords.x + offset23, coords.y)) +
    0.007125011836418759 * texture2D(u_texture, vec2(coords.x + offset24, coords.y)) +
    0.006328525144131359 * texture2D(u_texture, vec2(coords.x + offset25, coords.y)) +
    0.005593647503183684 * texture2D(u_texture, vec2(coords.x + offset26, coords.y)) +
    0.004919978267800731 * texture2D(u_texture, vec2(coords.x + offset27, coords.y)) +
    0.004306323106727935 * texture2D(u_texture, vec2(coords.x + offset28, coords.y)) +
    0.003750811206832023 * texture2D(u_texture, vec2(coords.x + offset29, coords.y)) +
    0.003251013578100647 * texture2D(u_texture, vec2(coords.x + offset30, coords.y)) +
    0.002804059092141262 * texture2D(u_texture, vec2(coords.x + offset31, coords.y)) +
    0.0024067453839188434 * texture2D(u_texture, vec2(coords.x + offset32, coords.y)) +
    0.0020556422842986613 * texture2D(u_texture, vec2(coords.x + offset33, coords.y)) +
    0.0017471860018340045 * texture2D(u_texture, vec2(coords.x + offset34, coords.y)) +
    0.001477762812025868 * texture2D(u_texture, vec2(coords.x + offset35, coords.y))
  );
}