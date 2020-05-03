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
  float offset1 = one_pixel * 1.4995898277276456;
  float offset2 = one_pixel * 3.4990429313645066;
  float offset3 = one_pixel * 5.498496035001367;
  float offset4 = one_pixel * 7.497949138638228;
  float offset5 = one_pixel * 9.497402242275088;
  float offset6 = one_pixel * 11.49685534591195;
  float offset7 = one_pixel * 13.49630844954881;
  float offset8 = one_pixel * 15.495761553185671;
  float offset9 = one_pixel * 17.495214656822533;
  float offset10 = one_pixel * 19.494667760459393;
  float offset11 = one_pixel * 21.494120864096253;
  float offset12 = one_pixel * 23.493573967733116;
  float offset13 = one_pixel * 25.493027071369976;
  float offset14 = one_pixel * 27.492480175006836;
  float offset15 = one_pixel * 29.491933278643696;
  float offset16 = one_pixel * 31.49138638228056;
  float offset17 = one_pixel * 33.49083948591742;
  float offset18 = one_pixel * 35.49029258955428;
  float offset19 = one_pixel * 37.48974569319114;
  float offset20 = one_pixel * 39.489198796828;
  float offset21 = one_pixel * 41.48865190046486;
  float offset22 = one_pixel * 43.488105004101726;
  float offset23 = one_pixel * 45.487558107738586;
  float offset24 = one_pixel * 47.487011211375446;
  float offset25 = one_pixel * 49.486464315012306;
  float offset26 = one_pixel * 51.485917418649166;
  float offset27 = one_pixel * 53.485370522286026;
  float offset28 = one_pixel * 55.484823625922886;
  float offset29 = one_pixel * 57.484276729559745;
  float offset30 = one_pixel * 59.48372983319661;
  float offset31 = one_pixel * 61.48318293683347;
  float offset32 = one_pixel * 63.48263604047033;
  float offset33 = one_pixel * 65.48208914410719;
  float offset34 = one_pixel * 67.48154224774406;
  float offset35 = one_pixel * 69.48099535138091;
  float offset36 = one_pixel * 71.48044845501778;
  float offset37 = one_pixel * 73.47990155865463;

  gl_FragColor = (
    0.0013940307217029395 * texture2D(u_texture, vec2(coords.x - offset37, coords.y)) +
    0.0016336864285528764 * texture2D(u_texture, vec2(coords.x - offset36, coords.y)) +
    0.001906174066886189 * texture2D(u_texture, vec2(coords.x - offset35, coords.y)) +
    0.0022143897981738566 * texture2D(u_texture, vec2(coords.x - offset34, coords.y)) +
    0.0025611994676983025 * texture2D(u_texture, vec2(coords.x - offset33, coords.y)) +
    0.0029493797967265895 * texture2D(u_texture, vec2(coords.x - offset32, coords.y)) +
    0.003381552334543414 * texture2D(u_texture, vec2(coords.x - offset31, coords.y)) +
    0.0038601108969169387 * texture2D(u_texture, vec2(coords.x - offset30, coords.y)) +
    0.004387143542244164 * texture2D(u_texture, vec2(coords.x - offset29, coords.y)) +
    0.004964350471032012 * texture2D(u_texture, vec2(coords.x - offset28, coords.y)) +
    0.005592959565943115 * texture2D(u_texture, vec2(coords.x - offset27, coords.y)) +
    0.006273641604099301 * texture2D(u_texture, vec2(coords.x - offset26, coords.y)) +
    0.007006427455204123 * texture2D(u_texture, vec2(coords.x - offset25, coords.y)) +
    0.007790629812237558 * texture2D(u_texture, vec2(coords.x - offset24, coords.y)) +
    0.008624772170054005 * texture2D(u_texture, vec2(coords.x - offset23, coords.y)) +
    0.009506527856211422 * texture2D(u_texture, vec2(coords.x - offset22, coords.y)) +
    0.010432671914653854 * texture2D(u_texture, vec2(coords.x - offset21, coords.y)) +
    0.011399048536067623 * texture2D(u_texture, vec2(coords.x - offset20, coords.y)) +
    0.01240055651199943 * texture2D(u_texture, vec2(coords.x - offset19, coords.y)) +
    0.013431154860619951 * texture2D(u_texture, vec2(coords.x - offset18, coords.y)) +
    0.01448389033266083 * texture2D(u_texture, vec2(coords.x - offset17, coords.y)) +
    0.015550947964099508 * texture2D(u_texture, vec2(coords.x - offset16, coords.y)) +
    0.016623725210515986 * texture2D(u_texture, vec2(coords.x - offset15, coords.y)) +
    0.01769292949478517 * texture2D(u_texture, vec2(coords.x - offset14, coords.y)) +
    0.01874869824771206 * texture2D(u_texture, vec2(coords.x - offset13, coords.y)) +
    0.019780739747155097 * texture2D(u_texture, vec2(coords.x - offset12, coords.y)) +
    0.020778492294857554 * texture2D(u_texture, vec2(coords.x - offset11, coords.y)) +
    0.021731298543053078 * texture2D(u_texture, vec2(coords.x - offset10, coords.y)) +
    0.022628591126622504 * texture2D(u_texture, vec2(coords.x - offset9, coords.y)) +
    0.023460085201564184 * texture2D(u_texture, vec2(coords.x - offset8, coords.y)) +
    0.024215973064361445 * texture2D(u_texture, vec2(coords.x - offset7, coords.y)) +
    0.024887115752706183 * texture2D(u_texture, vec2(coords.x - offset6, coords.y)) +
    0.02546522642349853 * texture2D(u_texture, vec2(coords.x - offset5, coords.y)) +
    0.02594304037983567 * texture2D(u_texture, vec2(coords.x - offset4, coords.y)) +
    0.02631446687800328 * texture2D(u_texture, vec2(coords.x - offset3, coords.y)) +
    0.02657471828348202 * texture2D(u_texture, vec2(coords.x - offset2, coords.y)) +
    0.026720412748880526 * texture2D(u_texture, vec2(coords.x - offset1, coords.y)) +
    0.013378480989277412 * texture2D(u_texture, coords) +
    0.026720412748880526 * texture2D(u_texture, vec2(coords.x + offset1, coords.y)) +
    0.02657471828348202 * texture2D(u_texture, vec2(coords.x + offset2, coords.y)) +
    0.02631446687800328 * texture2D(u_texture, vec2(coords.x + offset3, coords.y)) +
    0.02594304037983567 * texture2D(u_texture, vec2(coords.x + offset4, coords.y)) +
    0.02546522642349853 * texture2D(u_texture, vec2(coords.x + offset5, coords.y)) +
    0.024887115752706183 * texture2D(u_texture, vec2(coords.x + offset6, coords.y)) +
    0.024215973064361445 * texture2D(u_texture, vec2(coords.x + offset7, coords.y)) +
    0.023460085201564184 * texture2D(u_texture, vec2(coords.x + offset8, coords.y)) +
    0.022628591126622504 * texture2D(u_texture, vec2(coords.x + offset9, coords.y)) +
    0.021731298543053078 * texture2D(u_texture, vec2(coords.x + offset10, coords.y)) +
    0.020778492294857554 * texture2D(u_texture, vec2(coords.x + offset11, coords.y)) +
    0.019780739747155097 * texture2D(u_texture, vec2(coords.x + offset12, coords.y)) +
    0.01874869824771206 * texture2D(u_texture, vec2(coords.x + offset13, coords.y)) +
    0.01769292949478517 * texture2D(u_texture, vec2(coords.x + offset14, coords.y)) +
    0.016623725210515986 * texture2D(u_texture, vec2(coords.x + offset15, coords.y)) +
    0.015550947964099508 * texture2D(u_texture, vec2(coords.x + offset16, coords.y)) +
    0.01448389033266083 * texture2D(u_texture, vec2(coords.x + offset17, coords.y)) +
    0.013431154860619951 * texture2D(u_texture, vec2(coords.x + offset18, coords.y)) +
    0.01240055651199943 * texture2D(u_texture, vec2(coords.x + offset19, coords.y)) +
    0.011399048536067623 * texture2D(u_texture, vec2(coords.x + offset20, coords.y)) +
    0.010432671914653854 * texture2D(u_texture, vec2(coords.x + offset21, coords.y)) +
    0.009506527856211422 * texture2D(u_texture, vec2(coords.x + offset22, coords.y)) +
    0.008624772170054005 * texture2D(u_texture, vec2(coords.x + offset23, coords.y)) +
    0.007790629812237558 * texture2D(u_texture, vec2(coords.x + offset24, coords.y)) +
    0.007006427455204123 * texture2D(u_texture, vec2(coords.x + offset25, coords.y)) +
    0.006273641604099301 * texture2D(u_texture, vec2(coords.x + offset26, coords.y)) +
    0.005592959565943115 * texture2D(u_texture, vec2(coords.x + offset27, coords.y)) +
    0.004964350471032012 * texture2D(u_texture, vec2(coords.x + offset28, coords.y)) +
    0.004387143542244164 * texture2D(u_texture, vec2(coords.x + offset29, coords.y)) +
    0.0038601108969169387 * texture2D(u_texture, vec2(coords.x + offset30, coords.y)) +
    0.003381552334543414 * texture2D(u_texture, vec2(coords.x + offset31, coords.y)) +
    0.0029493797967265895 * texture2D(u_texture, vec2(coords.x + offset32, coords.y)) +
    0.0025611994676983025 * texture2D(u_texture, vec2(coords.x + offset33, coords.y)) +
    0.0022143897981738566 * texture2D(u_texture, vec2(coords.x + offset34, coords.y)) +
    0.001906174066886189 * texture2D(u_texture, vec2(coords.x + offset35, coords.y)) +
    0.0016336864285528764 * texture2D(u_texture, vec2(coords.x + offset36, coords.y)) +
    0.0013940307217029395 * texture2D(u_texture, vec2(coords.x + offset37, coords.y))
  );
}