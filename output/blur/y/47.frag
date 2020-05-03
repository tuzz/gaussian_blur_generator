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
  float offset1 = one_pixel * 1.4989399293286219;
  float offset2 = one_pixel * 3.4975265017667843;
  float offset3 = one_pixel * 5.496113074204947;
  float offset4 = one_pixel * 7.4946996466431095;
  float offset5 = one_pixel * 9.493286219081272;
  float offset6 = one_pixel * 11.491872791519434;
  float offset7 = one_pixel * 13.490459363957598;
  float offset8 = one_pixel * 15.48904593639576;
  float offset9 = one_pixel * 17.487632508833922;
  float offset10 = one_pixel * 19.486219081272086;
  float offset11 = one_pixel * 21.484805653710247;
  float offset12 = one_pixel * 23.48339222614841;
  float offset13 = one_pixel * 25.48197879858657;
  float offset14 = one_pixel * 27.480565371024735;
  float offset15 = one_pixel * 29.4791519434629;
  float offset16 = one_pixel * 31.47773851590106;
  float offset17 = one_pixel * 33.47632508833922;
  float offset18 = one_pixel * 35.47491166077739;
  float offset19 = one_pixel * 37.47349823321555;
  float offset20 = one_pixel * 39.47208480565371;
  float offset21 = one_pixel * 41.47067137809187;
  float offset22 = one_pixel * 43.469257950530036;
  float offset23 = one_pixel * 45.4678445229682;

  gl_FragColor = (
    0.0023044631554789263 * texture2D(u_texture, vec2(coords.x, coords.y - offset23)) +
    0.002964155464775107 * texture2D(u_texture, vec2(coords.x, coords.y - offset22)) +
    0.003769695783455438 * texture2D(u_texture, vec2(coords.x, coords.y - offset21)) +
    0.0047400991167720246 * texture2D(u_texture, vec2(coords.x, coords.y - offset20)) +
    0.005893128782122151 * texture2D(u_texture, vec2(coords.x, coords.y - offset19)) +
    0.007244081819411916 * texture2D(u_texture, vec2(coords.x, coords.y - offset18)) +
    0.008804427166398529 * texture2D(u_texture, vec2(coords.x, coords.y - offset17)) +
    0.01058036290252678 * texture2D(u_texture, vec2(coords.x, coords.y - offset16)) +
    0.012571381377380383 * texture2D(u_texture, vec2(coords.x, coords.y - offset15)) +
    0.014768949890182787 * texture2D(u_texture, vec2(coords.x, coords.y - offset14)) +
    0.017155426891311963 * texture2D(u_texture, vec2(coords.x, coords.y - offset13)) +
    0.01970333673913416 * texture2D(u_texture, vec2(coords.x, coords.y - offset12)) +
    0.02237511775468528 * texture2D(u_texture, vec2(coords.x, coords.y - offset11)) +
    0.025123437539827136 * texture2D(u_texture, vec2(coords.x, coords.y - offset10)) +
    0.02789213643044076 * texture2D(u_texture, vec2(coords.x, coords.y - offset9)) +
    0.030617816209101232 * texture2D(u_texture, vec2(coords.x, coords.y - offset8)) +
    0.03323203997165583 * texture2D(u_texture, vec2(coords.x, coords.y - offset7)) +
    0.03566405480461005 * texture2D(u_texture, vec2(coords.x, coords.y - offset6)) +
    0.037843897054592346 * texture2D(u_texture, vec2(coords.x, coords.y - offset5)) +
    0.039705696134703004 * texture2D(u_texture, vec2(coords.x, coords.y - offset4)) +
    0.04119096230807278 * texture2D(u_texture, vec2(coords.x, coords.y - offset3)) +
    0.04225163091916744 * texture2D(u_texture, vec2(coords.x, coords.y - offset2)) +
    0.042852642606041255 * texture2D(u_texture, vec2(coords.x, coords.y - offset1)) +
    0.021502118356305437 * texture2D(u_texture, coords) +
    0.042852642606041255 * texture2D(u_texture, vec2(coords.x, coords.y + offset1)) +
    0.04225163091916744 * texture2D(u_texture, vec2(coords.x, coords.y + offset2)) +
    0.04119096230807278 * texture2D(u_texture, vec2(coords.x, coords.y + offset3)) +
    0.039705696134703004 * texture2D(u_texture, vec2(coords.x, coords.y + offset4)) +
    0.037843897054592346 * texture2D(u_texture, vec2(coords.x, coords.y + offset5)) +
    0.03566405480461005 * texture2D(u_texture, vec2(coords.x, coords.y + offset6)) +
    0.03323203997165583 * texture2D(u_texture, vec2(coords.x, coords.y + offset7)) +
    0.030617816209101232 * texture2D(u_texture, vec2(coords.x, coords.y + offset8)) +
    0.02789213643044076 * texture2D(u_texture, vec2(coords.x, coords.y + offset9)) +
    0.025123437539827136 * texture2D(u_texture, vec2(coords.x, coords.y + offset10)) +
    0.02237511775468528 * texture2D(u_texture, vec2(coords.x, coords.y + offset11)) +
    0.01970333673913416 * texture2D(u_texture, vec2(coords.x, coords.y + offset12)) +
    0.017155426891311963 * texture2D(u_texture, vec2(coords.x, coords.y + offset13)) +
    0.014768949890182787 * texture2D(u_texture, vec2(coords.x, coords.y + offset14)) +
    0.012571381377380383 * texture2D(u_texture, vec2(coords.x, coords.y + offset15)) +
    0.01058036290252678 * texture2D(u_texture, vec2(coords.x, coords.y + offset16)) +
    0.008804427166398529 * texture2D(u_texture, vec2(coords.x, coords.y + offset17)) +
    0.007244081819411916 * texture2D(u_texture, vec2(coords.x, coords.y + offset18)) +
    0.005893128782122151 * texture2D(u_texture, vec2(coords.x, coords.y + offset19)) +
    0.0047400991167720246 * texture2D(u_texture, vec2(coords.x, coords.y + offset20)) +
    0.003769695783455438 * texture2D(u_texture, vec2(coords.x, coords.y + offset21)) +
    0.002964155464775107 * texture2D(u_texture, vec2(coords.x, coords.y + offset22)) +
    0.0023044631554789263 * texture2D(u_texture, vec2(coords.x, coords.y + offset23))
  );
}
