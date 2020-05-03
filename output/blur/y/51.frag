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
  float offset1 = one_pixel * 1.4991023339317773;
  float offset2 = one_pixel * 3.497905445840814;
  float offset3 = one_pixel * 5.496708557749851;
  float offset4 = one_pixel * 7.495511669658887;
  float offset5 = one_pixel * 9.494314781567923;
  float offset6 = one_pixel * 11.49311789347696;
  float offset7 = one_pixel * 13.491921005385997;
  float offset8 = one_pixel * 15.490724117295033;
  float offset9 = one_pixel * 17.489527229204068;
  float offset10 = one_pixel * 19.488330341113105;
  float offset11 = one_pixel * 21.487133453022143;
  float offset12 = one_pixel * 23.48593656493118;
  float offset13 = one_pixel * 25.484739676840217;
  float offset14 = one_pixel * 27.48354278874925;
  float offset15 = one_pixel * 29.482345900658288;
  float offset16 = one_pixel * 31.481149012567325;
  float offset17 = one_pixel * 33.47995212447636;
  float offset18 = one_pixel * 35.478755236385396;
  float offset19 = one_pixel * 37.47755834829444;
  float offset20 = one_pixel * 39.47636146020347;
  float offset21 = one_pixel * 41.475164572112504;
  float offset22 = one_pixel * 43.473967684021545;
  float offset23 = one_pixel * 45.47277079593058;
  float offset24 = one_pixel * 47.47157390783962;
  float offset25 = one_pixel * 49.47037701974865;

  gl_FragColor = (
    0.002106986118011352 * texture2D(u_texture, vec2(coords.x, coords.y - offset25)) +
    0.0026580078553863884 * texture2D(u_texture, vec2(coords.x, coords.y - offset24)) +
    0.0033210961894114513 * texture2D(u_texture, vec2(coords.x, coords.y - offset23)) +
    0.0041099673309053075 * texture2D(u_texture, vec2(coords.x, coords.y - offset22)) +
    0.005037650930583001 * texture2D(u_texture, vec2(coords.x, coords.y - offset21)) +
    0.006115776054363408 * texture2D(u_texture, vec2(coords.x, coords.y - offset20)) +
    0.007353766690211124 * texture2D(u_texture, vec2(coords.x, coords.y - offset19)) +
    0.008757977183234292 * texture2D(u_texture, vec2(coords.x, coords.y - offset18)) +
    0.010330809010774327 * texture2D(u_texture, vec2(coords.x, coords.y - offset17)) +
    0.012069860210707033 * texture2D(u_texture, vec2(coords.x, coords.y - offset16)) +
    0.013967166412039326 * texture2D(u_texture, vec2(coords.x, coords.y - offset15)) +
    0.016008596638481528 * texture2D(u_texture, vec2(coords.x, coords.y - offset14)) +
    0.018173466848183613 * texture2D(u_texture, vec2(coords.x, coords.y - offset13)) +
    0.0204344287937504 * texture2D(u_texture, vec2(coords.x, coords.y - offset12)) +
    0.02275768089556305 * texture2D(u_texture, vec2(coords.x, coords.y - offset11)) +
    0.02510353158236781 * texture2D(u_texture, vec2(coords.x, coords.y - offset10)) +
    0.02742732469182905 * texture2D(u_texture, vec2(coords.x, coords.y - offset9)) +
    0.029680712325761506 * texture2D(u_texture, vec2(coords.x, coords.y - offset8)) +
    0.03181323479591321 * texture2D(u_texture, vec2(coords.x, coords.y - offset7)) +
    0.03377414210647069 * texture2D(u_texture, vec2(coords.x, coords.y - offset6)) +
    0.035514369089583754 * texture2D(u_texture, vec2(coords.x, coords.y - offset5)) +
    0.036988559059445036 * texture2D(u_texture, vec2(coords.x, coords.y - offset4)) +
    0.03815702058184261 * texture2D(u_texture, vec2(coords.x, coords.y - offset3)) +
    0.03898750002869124 * texture2D(u_texture, vec2(coords.x, coords.y - offset2)) +
    0.039456659635325055 * texture2D(u_texture, vec2(coords.x, coords.y - offset1)) +
    0.019787417882328892 * texture2D(u_texture, coords) +
    0.039456659635325055 * texture2D(u_texture, vec2(coords.x, coords.y + offset1)) +
    0.03898750002869124 * texture2D(u_texture, vec2(coords.x, coords.y + offset2)) +
    0.03815702058184261 * texture2D(u_texture, vec2(coords.x, coords.y + offset3)) +
    0.036988559059445036 * texture2D(u_texture, vec2(coords.x, coords.y + offset4)) +
    0.035514369089583754 * texture2D(u_texture, vec2(coords.x, coords.y + offset5)) +
    0.03377414210647069 * texture2D(u_texture, vec2(coords.x, coords.y + offset6)) +
    0.03181323479591321 * texture2D(u_texture, vec2(coords.x, coords.y + offset7)) +
    0.029680712325761506 * texture2D(u_texture, vec2(coords.x, coords.y + offset8)) +
    0.02742732469182905 * texture2D(u_texture, vec2(coords.x, coords.y + offset9)) +
    0.02510353158236781 * texture2D(u_texture, vec2(coords.x, coords.y + offset10)) +
    0.02275768089556305 * texture2D(u_texture, vec2(coords.x, coords.y + offset11)) +
    0.0204344287937504 * texture2D(u_texture, vec2(coords.x, coords.y + offset12)) +
    0.018173466848183613 * texture2D(u_texture, vec2(coords.x, coords.y + offset13)) +
    0.016008596638481528 * texture2D(u_texture, vec2(coords.x, coords.y + offset14)) +
    0.013967166412039326 * texture2D(u_texture, vec2(coords.x, coords.y + offset15)) +
    0.012069860210707033 * texture2D(u_texture, vec2(coords.x, coords.y + offset16)) +
    0.010330809010774327 * texture2D(u_texture, vec2(coords.x, coords.y + offset17)) +
    0.008757977183234292 * texture2D(u_texture, vec2(coords.x, coords.y + offset18)) +
    0.007353766690211124 * texture2D(u_texture, vec2(coords.x, coords.y + offset19)) +
    0.006115776054363408 * texture2D(u_texture, vec2(coords.x, coords.y + offset20)) +
    0.005037650930583001 * texture2D(u_texture, vec2(coords.x, coords.y + offset21)) +
    0.0041099673309053075 * texture2D(u_texture, vec2(coords.x, coords.y + offset22)) +
    0.0033210961894114513 * texture2D(u_texture, vec2(coords.x, coords.y + offset23)) +
    0.0026580078553863884 * texture2D(u_texture, vec2(coords.x, coords.y + offset24)) +
    0.002106986118011352 * texture2D(u_texture, vec2(coords.x, coords.y + offset25))
  );
}
