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
  float offset1 = one_pixel * 1.4987277353689568;
  float offset2 = one_pixel * 3.497031382527566;
  float offset3 = one_pixel * 5.495335029686175;
  float offset4 = one_pixel * 7.493638676844784;
  float offset5 = one_pixel * 9.491942324003393;
  float offset6 = one_pixel * 11.490245971162002;
  float offset7 = one_pixel * 13.488549618320612;
  float offset8 = one_pixel * 15.486853265479219;
  float offset9 = one_pixel * 17.48515691263783;
  float offset10 = one_pixel * 19.483460559796438;
  float offset11 = one_pixel * 21.481764206955045;
  float offset12 = one_pixel * 23.480067854113656;
  float offset13 = one_pixel * 25.478371501272264;
  float offset14 = one_pixel * 27.476675148430875;
  float offset15 = one_pixel * 29.474978795589482;
  float offset16 = one_pixel * 31.47328244274809;
  float offset17 = one_pixel * 33.4715860899067;
  float offset18 = one_pixel * 35.46988973706531;
  float offset19 = one_pixel * 37.468193384223916;
  float offset20 = one_pixel * 39.46649703138253;
  float offset21 = one_pixel * 41.46480067854114;

  gl_FragColor = (
    0.002535853224343265 * texture2D(u_texture, vec2(coords.x - offset21, coords.y)) +
    0.003338558477473682 * texture2D(u_texture, vec2(coords.x - offset20, coords.y)) +
    0.004335893439148301 * texture2D(u_texture, vec2(coords.x - offset19, coords.y)) +
    0.005555019377901262 * texture2D(u_texture, vec2(coords.x - offset18, coords.y)) +
    0.007020732248951623 * texture2D(u_texture, vec2(coords.x - offset17, coords.y)) +
    0.00875329263547759 * texture2D(u_texture, vec2(coords.x - offset16, coords.y)) +
    0.010766013067057188 * texture2D(u_texture, vec2(coords.x - offset15, coords.y)) +
    0.013062757057802825 * texture2D(u_texture, vec2(coords.x - offset14, coords.y)) +
    0.015635552323775982 * texture2D(u_texture, vec2(coords.x - offset13, coords.y)) +
    0.01846255640570702 * texture2D(u_texture, vec2(coords.x - offset12, coords.y)) +
    0.02150662869482147 * texture2D(u_texture, vec2(coords.x - offset11, coords.y)) +
    0.02471475219944782 * texture2D(u_texture, vec2(coords.x - offset10, coords.y)) +
    0.028018507361621564 * texture2D(u_texture, vec2(coords.x - offset9, coords.y)) +
    0.03133572852981618 * texture2D(u_texture, vec2(coords.x - offset8, coords.y)) +
    0.03457337536040286 * texture2D(u_texture, vec2(coords.x - offset7, coords.y)) +
    0.03763153495312948 * texture2D(u_texture, vec2(coords.x - offset6, coords.y)) +
    0.04040834823446635 * texture2D(u_texture, vec2(coords.x - offset5, coords.y)) +
    0.0428055407322436 * texture2D(u_texture, vec2(coords.x - offset4, coords.y)) +
    0.044734148649583694 * texture2D(u_texture, vec2(coords.x - offset3, coords.y)) +
    0.046119979455740395 * texture2D(u_texture, vec2(coords.x - offset2, coords.y)) +
    0.046908341468247405 * texture2D(u_texture, vec2(coords.x - offset1, coords.y)) +
    0.023553772205680893 * texture2D(u_texture, coords) +
    0.046908341468247405 * texture2D(u_texture, vec2(coords.x + offset1, coords.y)) +
    0.046119979455740395 * texture2D(u_texture, vec2(coords.x + offset2, coords.y)) +
    0.044734148649583694 * texture2D(u_texture, vec2(coords.x + offset3, coords.y)) +
    0.0428055407322436 * texture2D(u_texture, vec2(coords.x + offset4, coords.y)) +
    0.04040834823446635 * texture2D(u_texture, vec2(coords.x + offset5, coords.y)) +
    0.03763153495312948 * texture2D(u_texture, vec2(coords.x + offset6, coords.y)) +
    0.03457337536040286 * texture2D(u_texture, vec2(coords.x + offset7, coords.y)) +
    0.03133572852981618 * texture2D(u_texture, vec2(coords.x + offset8, coords.y)) +
    0.028018507361621564 * texture2D(u_texture, vec2(coords.x + offset9, coords.y)) +
    0.02471475219944782 * texture2D(u_texture, vec2(coords.x + offset10, coords.y)) +
    0.02150662869482147 * texture2D(u_texture, vec2(coords.x + offset11, coords.y)) +
    0.01846255640570702 * texture2D(u_texture, vec2(coords.x + offset12, coords.y)) +
    0.015635552323775982 * texture2D(u_texture, vec2(coords.x + offset13, coords.y)) +
    0.013062757057802825 * texture2D(u_texture, vec2(coords.x + offset14, coords.y)) +
    0.010766013067057188 * texture2D(u_texture, vec2(coords.x + offset15, coords.y)) +
    0.00875329263547759 * texture2D(u_texture, vec2(coords.x + offset16, coords.y)) +
    0.007020732248951623 * texture2D(u_texture, vec2(coords.x + offset17, coords.y)) +
    0.005555019377901262 * texture2D(u_texture, vec2(coords.x + offset18, coords.y)) +
    0.004335893439148301 * texture2D(u_texture, vec2(coords.x + offset19, coords.y)) +
    0.003338558477473682 * texture2D(u_texture, vec2(coords.x + offset20, coords.y)) +
    0.002535853224343265 * texture2D(u_texture, vec2(coords.x + offset21, coords.y))
  );
}
