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
  float offset1 = one_pixel * 1.4944237918215613;
  float offset2 = one_pixel * 3.486988847583643;
  float offset3 = one_pixel * 5.479553903345725;
  float offset4 = one_pixel * 7.4721189591078065;
  float offset5 = one_pixel * 9.464684014869889;
  float offset6 = one_pixel * 11.45724907063197;
  float offset7 = one_pixel * 13.449814126394052;
  float offset8 = one_pixel * 15.442379182156134;
  float offset9 = one_pixel * 17.434944237918216;
  float offset10 = one_pixel * 19.4275092936803;

  gl_FragColor = (
    0.005826928287698983 * texture2D(u_texture, vec2(coords.x - offset10, coords.y)) +
    0.010115980276655131 * texture2D(u_texture, vec2(coords.x - offset9, coords.y)) +
    0.016534822625679287 * texture2D(u_texture, vec2(coords.x - offset8, coords.y)) +
    0.02545132821514684 * texture2D(u_texture, vec2(coords.x - offset7, coords.y)) +
    0.036899846504647116 * texture2D(u_texture, vec2(coords.x - offset6, coords.y)) +
    0.05039804841957287 * texture2D(u_texture, vec2(coords.x - offset5, coords.y)) +
    0.06485418154329738 * texture2D(u_texture, vec2(coords.x - offset4, coords.y)) +
    0.0786404083611858 * texture2D(u_texture, vec2(coords.x - offset3, coords.y)) +
    0.08986155882023933 * texture2D(u_texture, vec2(coords.x - offset2, coords.y)) +
    0.09677162400634795 * texture2D(u_texture, vec2(coords.x - offset1, coords.y)) +
    0.04929054587905866 * texture2D(u_texture, coords) +
    0.09677162400634795 * texture2D(u_texture, vec2(coords.x + offset1, coords.y)) +
    0.08986155882023933 * texture2D(u_texture, vec2(coords.x + offset2, coords.y)) +
    0.0786404083611858 * texture2D(u_texture, vec2(coords.x + offset3, coords.y)) +
    0.06485418154329738 * texture2D(u_texture, vec2(coords.x + offset4, coords.y)) +
    0.05039804841957287 * texture2D(u_texture, vec2(coords.x + offset5, coords.y)) +
    0.036899846504647116 * texture2D(u_texture, vec2(coords.x + offset6, coords.y)) +
    0.02545132821514684 * texture2D(u_texture, vec2(coords.x + offset7, coords.y)) +
    0.016534822625679287 * texture2D(u_texture, vec2(coords.x + offset8, coords.y)) +
    0.010115980276655131 * texture2D(u_texture, vec2(coords.x + offset9, coords.y)) +
    0.005826928287698983 * texture2D(u_texture, vec2(coords.x + offset10, coords.y))
  );
}
