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
  float offset1 = one_pixel * 1.4992303745510518;
  float offset2 = one_pixel * 3.4982042072857875;
  float offset3 = one_pixel * 5.497178040020524;
  float offset4 = one_pixel * 7.496151872755259;
  float offset5 = one_pixel * 9.495125705489995;
  float offset6 = one_pixel * 11.49409953822473;
  float offset7 = one_pixel * 13.493073370959467;
  float offset8 = one_pixel * 15.492047203694202;
  float offset9 = one_pixel * 17.491021036428936;
  float offset10 = one_pixel * 19.489994869163674;
  float offset11 = one_pixel * 21.488968701898408;
  float offset12 = one_pixel * 23.487942534633145;
  float offset13 = one_pixel * 25.486916367367883;
  float offset14 = one_pixel * 27.485890200102617;
  float offset15 = one_pixel * 29.484864032837354;
  float offset16 = one_pixel * 31.483837865572088;
  float offset17 = one_pixel * 33.482811698306826;
  float offset18 = one_pixel * 35.48178553104156;
  float offset19 = one_pixel * 37.48075936377629;
  float offset20 = one_pixel * 39.479733196511035;
  float offset21 = one_pixel * 41.47870702924577;
  float offset22 = one_pixel * 43.4776808619805;
  float offset23 = one_pixel * 45.476654694715236;
  float offset24 = one_pixel * 47.47562852744998;
  float offset25 = one_pixel * 49.47460236018471;
  float offset26 = one_pixel * 51.473576192919445;
  float offset27 = one_pixel * 53.47255002565418;

  gl_FragColor = (
    0.001942407507195799 * texture2D(u_texture, vec2(coords.x - offset27, coords.y)) +
    0.002409746088942978 * texture2D(u_texture, vec2(coords.x - offset26, coords.y)) +
    0.002965028050119203 * texture2D(u_texture, vec2(coords.x - offset25, coords.y)) +
    0.0036183758471653974 * texture2D(u_texture, vec2(coords.x - offset24, coords.y)) +
    0.004379521104258959 * texture2D(u_texture, vec2(coords.x - offset23, coords.y)) +
    0.005257367664951176 * texture2D(u_texture, vec2(coords.x - offset22, coords.y)) +
    0.006259498281571218 * texture2D(u_texture, vec2(coords.x - offset21, coords.y)) +
    0.007391639670541863 * texture2D(u_texture, vec2(coords.x - offset20, coords.y)) +
    0.008657106263017236 * texture2D(u_texture, vec2(coords.x - offset19, coords.y)) +
    0.010056248248821332 * texture2D(u_texture, vec2(coords.x - offset18, coords.y)) +
    0.011585933963293158 * texture2D(u_texture, vec2(coords.x - offset17, coords.y)) +
    0.013239099797867514 * texture2D(u_texture, vec2(coords.x - offset16, coords.y)) +
    0.015004402148504611 * texture2D(u_texture, vec2(coords.x - offset15, coords.y)) +
    0.016866005050297842 * texture2D(u_texture, vec2(coords.x - offset14, coords.y)) +
    0.0188035338080267 * texture2D(u_texture, vec2(coords.x - offset13, coords.y)) +
    0.02079221902066376 * texture2D(u_texture, vec2(coords.x - offset12, coords.y)) +
    0.022803247020548294 * texture2D(u_texture, vec2(coords.x - offset11, coords.y)) +
    0.0248043222390198 * texture2D(u_texture, vec2(coords.x - offset10, coords.y)) +
    0.026760434927233578 * texture2D(u_texture, vec2(coords.x - offset9, coords.y)) +
    0.02863481475874679 * texture2D(u_texture, vec2(coords.x - offset8, coords.y)) +
    0.03039003802293246 * texture2D(u_texture, vec2(coords.x - offset7, coords.y)) +
    0.03198924436833389 * texture2D(u_texture, vec2(coords.x - offset6, coords.y)) +
    0.03339740935111642 * texture2D(u_texture, vec2(coords.x - offset5, coords.y)) +
    0.03458261226892534 * texture2D(u_texture, vec2(coords.x - offset4, coords.y)) +
    0.03551723561434541 * texture2D(u_texture, vec2(coords.x - offset3, coords.y)) +
    0.0361790334049447 * texture2D(u_texture, vec2(coords.x - offset2, coords.y)) +
    0.03655201076453662 * texture2D(u_texture, vec2(coords.x - offset1, coords.y)) +
    0.018322929488155906 * texture2D(u_texture, coords) +
    0.03655201076453662 * texture2D(u_texture, vec2(coords.x + offset1, coords.y)) +
    0.0361790334049447 * texture2D(u_texture, vec2(coords.x + offset2, coords.y)) +
    0.03551723561434541 * texture2D(u_texture, vec2(coords.x + offset3, coords.y)) +
    0.03458261226892534 * texture2D(u_texture, vec2(coords.x + offset4, coords.y)) +
    0.03339740935111642 * texture2D(u_texture, vec2(coords.x + offset5, coords.y)) +
    0.03198924436833389 * texture2D(u_texture, vec2(coords.x + offset6, coords.y)) +
    0.03039003802293246 * texture2D(u_texture, vec2(coords.x + offset7, coords.y)) +
    0.02863481475874679 * texture2D(u_texture, vec2(coords.x + offset8, coords.y)) +
    0.026760434927233578 * texture2D(u_texture, vec2(coords.x + offset9, coords.y)) +
    0.0248043222390198 * texture2D(u_texture, vec2(coords.x + offset10, coords.y)) +
    0.022803247020548294 * texture2D(u_texture, vec2(coords.x + offset11, coords.y)) +
    0.02079221902066376 * texture2D(u_texture, vec2(coords.x + offset12, coords.y)) +
    0.0188035338080267 * texture2D(u_texture, vec2(coords.x + offset13, coords.y)) +
    0.016866005050297842 * texture2D(u_texture, vec2(coords.x + offset14, coords.y)) +
    0.015004402148504611 * texture2D(u_texture, vec2(coords.x + offset15, coords.y)) +
    0.013239099797867514 * texture2D(u_texture, vec2(coords.x + offset16, coords.y)) +
    0.011585933963293158 * texture2D(u_texture, vec2(coords.x + offset17, coords.y)) +
    0.010056248248821332 * texture2D(u_texture, vec2(coords.x + offset18, coords.y)) +
    0.008657106263017236 * texture2D(u_texture, vec2(coords.x + offset19, coords.y)) +
    0.007391639670541863 * texture2D(u_texture, vec2(coords.x + offset20, coords.y)) +
    0.006259498281571218 * texture2D(u_texture, vec2(coords.x + offset21, coords.y)) +
    0.005257367664951176 * texture2D(u_texture, vec2(coords.x + offset22, coords.y)) +
    0.004379521104258959 * texture2D(u_texture, vec2(coords.x + offset23, coords.y)) +
    0.0036183758471653974 * texture2D(u_texture, vec2(coords.x + offset24, coords.y)) +
    0.002965028050119203 * texture2D(u_texture, vec2(coords.x + offset25, coords.y)) +
    0.002409746088942978 * texture2D(u_texture, vec2(coords.x + offset26, coords.y)) +
    0.001942407507195799 * texture2D(u_texture, vec2(coords.x + offset27, coords.y))
  );
}
