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
  float offset1 = one_pixel * 1.4994847131569908;
  float offset2 = one_pixel * 3.4987976640329785;
  float offset3 = one_pixel * 5.498110614908966;
  float offset4 = one_pixel * 7.4974235657849535;
  float offset5 = one_pixel * 9.496736516660942;
  float offset6 = one_pixel * 11.49604946753693;
  float offset7 = one_pixel * 13.495362418412917;
  float offset8 = one_pixel * 15.494675369288904;
  float offset9 = one_pixel * 17.493988320164892;
  float offset10 = one_pixel * 19.49330127104088;
  float offset11 = one_pixel * 21.492614221916867;
  float offset12 = one_pixel * 23.491927172792856;
  float offset13 = one_pixel * 25.49124012366884;
  float offset14 = one_pixel * 27.49055307454483;
  float offset15 = one_pixel * 29.489866025420817;
  float offset16 = one_pixel * 31.489178976296806;
  float offset17 = one_pixel * 33.488491927172795;
  float offset18 = one_pixel * 35.48780487804878;
  float offset19 = one_pixel * 37.48711782892477;
  float offset20 = one_pixel * 39.486430779800756;
  float offset21 = one_pixel * 41.485743730676745;
  float offset22 = one_pixel * 43.485056681552734;
  float offset23 = one_pixel * 45.48436963242872;
  float offset24 = one_pixel * 47.483682583304706;
  float offset25 = one_pixel * 49.482995534180695;
  float offset26 = one_pixel * 51.482308485056684;
  float offset27 = one_pixel * 53.48162143593267;
  float offset28 = one_pixel * 55.480934386808656;
  float offset29 = one_pixel * 57.480247337684645;
  float offset30 = one_pixel * 59.479560288560634;
  float offset31 = one_pixel * 61.478873239436616;
  float offset32 = one_pixel * 63.478186190312606;
  float offset33 = one_pixel * 65.4774991411886;

  gl_FragColor = (
    0.001573129869116564 * texture2D(u_texture, vec2(coords.x, coords.y - offset33)) +
    0.001878326189196542 * texture2D(u_texture, vec2(coords.x, coords.y - offset32)) +
    0.0022304200942967205 * texture2D(u_texture, vec2(coords.x, coords.y - offset31)) +
    0.0026339760714694095 * texture2D(u_texture, vec2(coords.x, coords.y - offset30)) +
    0.003093476033811519 * texture2D(u_texture, vec2(coords.x, coords.y - offset29)) +
    0.00361319769713322 * texture2D(u_texture, vec2(coords.x, coords.y - offset28)) +
    0.004197077488851007 * texture2D(u_texture, vec2(coords.x, coords.y - offset27)) +
    0.004848560175011455 * texture2D(u_texture, vec2(coords.x, coords.y - offset26)) +
    0.0055704383130335405 * texture2D(u_texture, vec2(coords.x, coords.y - offset25)) +
    0.006364685566848024 * texture2D(u_texture, vec2(coords.x, coords.y - offset24)) +
    0.007232288809664727 * texture2D(u_texture, vec2(coords.x, coords.y - offset23)) +
    0.00817308473435157 * texture2D(u_texture, vec2(coords.x, coords.y - offset22)) +
    0.009185607336380368 * texture2D(u_texture, vec2(coords.x, coords.y - offset21)) +
    0.010266953073961325 * texture2D(u_texture, vec2(coords.x, coords.y - offset20)) +
    0.011412670692908317 * texture2D(u_texture, vec2(coords.x, coords.y - offset19)) +
    0.012616682586433652 * texture2D(u_texture, vec2(coords.x, coords.y - offset18)) +
    0.01387124411069003 * texture2D(u_texture, vec2(coords.x, coords.y - offset17)) +
    0.015166946478921911 * texture2D(u_texture, vec2(coords.x, coords.y - offset16)) +
    0.016492767712131654 * texture2D(u_texture, vec2(coords.x, coords.y - offset15)) +
    0.0178361746538511 * texture2D(u_texture, vec2(coords.x, coords.y - offset14)) +
    0.019183277303450444 * texture2D(u_texture, vec2(coords.x, coords.y - offset13)) +
    0.020519034749250903 * texture2D(u_texture, vec2(coords.x, coords.y - offset12)) +
    0.021827509870711397 * texture2D(u_texture, vec2(coords.x, coords.y - offset11)) +
    0.023092167824223367 * texture2D(u_texture, vec2(coords.x, coords.y - offset10)) +
    0.02429621123585357 * texture2D(u_texture, vec2(coords.x, coords.y - offset9)) +
    0.02542294310738887 * texture2D(u_texture, vec2(coords.x, coords.y - offset8)) +
    0.026456146807784155 * texture2D(u_texture, vec2(coords.x, coords.y - offset7)) +
    0.027380471270135927 * texture2D(u_texture, vec2(coords.x, coords.y - offset6)) +
    0.02818180872849204 * texture2D(u_texture, vec2(coords.x, coords.y - offset5)) +
    0.02884765207140349 * texture2D(u_texture, vec2(coords.x, coords.y - offset4)) +
    0.029367419195848433 * texture2D(u_texture, vec2(coords.x, coords.y - offset3)) +
    0.029732732621891078 * texture2D(u_texture, vec2(coords.x, coords.y - offset2)) +
    0.029937644049736485 * texture2D(u_texture, vec2(coords.x, coords.y - offset1)) +
    0.01499454695153437 * texture2D(u_texture, coords) +
    0.029937644049736485 * texture2D(u_texture, vec2(coords.x, coords.y + offset1)) +
    0.029732732621891078 * texture2D(u_texture, vec2(coords.x, coords.y + offset2)) +
    0.029367419195848433 * texture2D(u_texture, vec2(coords.x, coords.y + offset3)) +
    0.02884765207140349 * texture2D(u_texture, vec2(coords.x, coords.y + offset4)) +
    0.02818180872849204 * texture2D(u_texture, vec2(coords.x, coords.y + offset5)) +
    0.027380471270135927 * texture2D(u_texture, vec2(coords.x, coords.y + offset6)) +
    0.026456146807784155 * texture2D(u_texture, vec2(coords.x, coords.y + offset7)) +
    0.02542294310738887 * texture2D(u_texture, vec2(coords.x, coords.y + offset8)) +
    0.02429621123585357 * texture2D(u_texture, vec2(coords.x, coords.y + offset9)) +
    0.023092167824223367 * texture2D(u_texture, vec2(coords.x, coords.y + offset10)) +
    0.021827509870711397 * texture2D(u_texture, vec2(coords.x, coords.y + offset11)) +
    0.020519034749250903 * texture2D(u_texture, vec2(coords.x, coords.y + offset12)) +
    0.019183277303450444 * texture2D(u_texture, vec2(coords.x, coords.y + offset13)) +
    0.0178361746538511 * texture2D(u_texture, vec2(coords.x, coords.y + offset14)) +
    0.016492767712131654 * texture2D(u_texture, vec2(coords.x, coords.y + offset15)) +
    0.015166946478921911 * texture2D(u_texture, vec2(coords.x, coords.y + offset16)) +
    0.01387124411069003 * texture2D(u_texture, vec2(coords.x, coords.y + offset17)) +
    0.012616682586433652 * texture2D(u_texture, vec2(coords.x, coords.y + offset18)) +
    0.011412670692908317 * texture2D(u_texture, vec2(coords.x, coords.y + offset19)) +
    0.010266953073961325 * texture2D(u_texture, vec2(coords.x, coords.y + offset20)) +
    0.009185607336380368 * texture2D(u_texture, vec2(coords.x, coords.y + offset21)) +
    0.00817308473435157 * texture2D(u_texture, vec2(coords.x, coords.y + offset22)) +
    0.007232288809664727 * texture2D(u_texture, vec2(coords.x, coords.y + offset23)) +
    0.006364685566848024 * texture2D(u_texture, vec2(coords.x, coords.y + offset24)) +
    0.0055704383130335405 * texture2D(u_texture, vec2(coords.x, coords.y + offset25)) +
    0.004848560175011455 * texture2D(u_texture, vec2(coords.x, coords.y + offset26)) +
    0.004197077488851007 * texture2D(u_texture, vec2(coords.x, coords.y + offset27)) +
    0.00361319769713322 * texture2D(u_texture, vec2(coords.x, coords.y + offset28)) +
    0.003093476033811519 * texture2D(u_texture, vec2(coords.x, coords.y + offset29)) +
    0.0026339760714694095 * texture2D(u_texture, vec2(coords.x, coords.y + offset30)) +
    0.0022304200942967205 * texture2D(u_texture, vec2(coords.x, coords.y + offset31)) +
    0.001878326189196542 * texture2D(u_texture, vec2(coords.x, coords.y + offset32)) +
    0.001573129869116564 * texture2D(u_texture, vec2(coords.x, coords.y + offset33))
  );
}
