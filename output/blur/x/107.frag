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
  float offset1 = one_pixel * 1.499800079968013;
  float offset2 = one_pixel * 3.499533519925363;
  float offset3 = one_pixel * 5.499266959882713;
  float offset4 = one_pixel * 7.499000399840064;
  float offset5 = one_pixel * 9.498733839797413;
  float offset6 = one_pixel * 11.498467279754765;
  float offset7 = one_pixel * 13.498200719712115;
  float offset8 = one_pixel * 15.497934159669466;
  float offset9 = one_pixel * 17.497667599626816;
  float offset10 = one_pixel * 19.497401039584165;
  float offset11 = one_pixel * 21.49713447954152;
  float offset12 = one_pixel * 23.496867919498868;
  float offset13 = one_pixel * 25.496601359456218;
  float offset14 = one_pixel * 27.496334799413567;
  float offset15 = one_pixel * 29.496068239370917;
  float offset16 = one_pixel * 31.49580167932827;
  float offset17 = one_pixel * 33.49553511928562;
  float offset18 = one_pixel * 35.495268559242966;
  float offset19 = one_pixel * 37.49500199920032;
  float offset20 = one_pixel * 39.49473543915767;
  float offset21 = one_pixel * 41.49446887911502;
  float offset22 = one_pixel * 43.49420231907237;
  float offset23 = one_pixel * 45.493935759029725;
  float offset24 = one_pixel * 47.49366919898707;
  float offset25 = one_pixel * 49.493402638944424;
  float offset26 = one_pixel * 51.49313607890177;
  float offset27 = one_pixel * 53.49286951885912;
  float offset28 = one_pixel * 55.49260295881648;
  float offset29 = one_pixel * 57.49233639877382;
  float offset30 = one_pixel * 59.492069838731176;
  float offset31 = one_pixel * 61.49180327868852;
  float offset32 = one_pixel * 63.491536718645875;
  float offset33 = one_pixel * 65.49127015860323;
  float offset34 = one_pixel * 67.49100359856058;
  float offset35 = one_pixel * 69.49073703851792;
  float offset36 = one_pixel * 71.49047047847527;
  float offset37 = one_pixel * 73.49020391843263;
  float offset38 = one_pixel * 75.48993735838998;
  float offset39 = one_pixel * 77.48967079834733;
  float offset40 = one_pixel * 79.48940423830467;
  float offset41 = one_pixel * 81.48913767826203;
  float offset42 = one_pixel * 83.48887111821938;
  float offset43 = one_pixel * 85.48860455817673;
  float offset44 = one_pixel * 87.48833799813409;
  float offset45 = one_pixel * 89.48807143809142;
  float offset46 = one_pixel * 91.48780487804878;
  float offset47 = one_pixel * 93.48753831800613;
  float offset48 = one_pixel * 95.48727175796348;
  float offset49 = one_pixel * 97.48700519792084;
  float offset50 = one_pixel * 99.48673863787818;
  float offset51 = one_pixel * 101.48647207783553;
  float offset52 = one_pixel * 103.48620551779288;
  float offset53 = one_pixel * 105.48593895775024;

  gl_FragColor = (
    0.0009614534582709655 * texture2D(u_texture, vec2(coords.x - offset53, coords.y)) +
    0.0010747917818067461 * texture2D(u_texture, vec2(coords.x - offset52, coords.y)) +
    0.0011989296536041576 * texture2D(u_texture, vec2(coords.x - offset51, coords.y)) +
    0.001334554725959746 * texture2D(u_texture, vec2(coords.x - offset50, coords.y)) +
    0.0014823556753956703 * texture2D(u_texture, vec2(coords.x - offset49, coords.y)) +
    0.0016430161281429216 * texture2D(u_texture, vec2(coords.x - offset48, coords.y)) +
    0.0018172079633177666 * texture2D(u_texture, vec2(coords.x - offset47, coords.y)) +
    0.002005584015106847 * texture2D(u_texture, vec2(coords.x - offset46, coords.y)) +
    0.0022087702070336546 * texture2D(u_texture, vec2(coords.x - offset45, coords.y)) +
    0.0024273571638155473 * texture2D(u_texture, vec2(coords.x - offset44, coords.y)) +
    0.0026618913592583527 * texture2D(u_texture, vec2(coords.x - offset43, coords.y)) +
    0.0029128658718672604 * texture2D(u_texture, vec2(coords.x - offset42, coords.y)) +
    0.0031807108331424238 * texture2D(u_texture, vec2(coords.x - offset41, coords.y)) +
    0.0034657836666146316 * texture2D(u_texture, vec2(coords.x - offset40, coords.y)) +
    0.003768359228278574 * texture2D(u_texture, vec2(coords.x - offset39, coords.y)) +
    0.004088619970900129 * texture2D(u_texture, vec2(coords.x - offset38, coords.y)) +
    0.004426646265400704 * texture2D(u_texture, vec2(coords.x - offset37, coords.y)) +
    0.004782407021842761 * texture2D(u_texture, vec2(coords.x - offset36, coords.y)) +
    0.005155750760146215 * texture2D(u_texture, vec2(coords.x - offset35, coords.y)) +
    0.005546397286256497 * texture2D(u_texture, vec2(coords.x - offset34, coords.y)) +
    0.00595393013278181 * texture2D(u_texture, vec2(coords.x - offset33, coords.y)) +
    0.006377789923867489 * texture2D(u_texture, vec2(coords.x - offset32, coords.y)) +
    0.006817268822063157 * texture2D(u_texture, vec2(coords.x - offset31, coords.y)) +
    0.007271506209991643 * texture2D(u_texture, vec2(coords.x - offset30, coords.y)) +
    0.00773948575162684 * texture2D(u_texture, vec2(coords.x - offset29, coords.y)) +
    0.008220033966869114 * texture2D(u_texture, vec2(coords.x - offset28, coords.y)) +
    0.008711820438873374 * texture2D(u_texture, vec2(coords.x - offset27, coords.y)) +
    0.009213359756307384 * texture2D(u_texture, vec2(coords.x - offset26, coords.y)) +
    0.009723015272538443 * texture2D(u_texture, vec2(coords.x - offset25, coords.y)) +
    0.010239004740879845 * texture2D(u_texture, vec2(coords.x - offset24, coords.y)) +
    0.010759407859761894 * texture2D(u_texture, vec2(coords.x - offset23, coords.y)) +
    0.011282175734381818 * texture2D(u_texture, vec2(coords.x - offset22, coords.y)) +
    0.011805142232454772 * texture2D(u_texture, vec2(coords.x - offset21, coords.y)) +
    0.012326037181614218 * texture2D(u_texture, vec2(coords.x - offset20, coords.y)) +
    0.012842501325325195 * texture2D(u_texture, vec2(coords.x - offset19, coords.y)) +
    0.013352102923448949 * texture2D(u_texture, vec2(coords.x - offset18, coords.y)) +
    0.013852355853431591 * texture2D(u_texture, vec2(coords.x - offset17, coords.y)) +
    0.014340739039097598 * texture2D(u_texture, vec2(coords.x - offset16, coords.y)) +
    0.014814717006827747 * texture2D(u_texture, vec2(coords.x - offset15, coords.y)) +
    0.015271761344093757 * texture2D(u_texture, vec2(coords.x - offset14, coords.y)) +
    0.015709372813484054 * texture2D(u_texture, vec2(coords.x - offset13, coords.y)) +
    0.01612510385701937 * texture2D(u_texture, vec2(coords.x - offset12, coords.y)) +
    0.016516581211199262 * texture2D(u_texture, vec2(coords.x - offset11, coords.y)) +
    0.016881528343246535 * texture2D(u_texture, vec2(coords.x - offset10, coords.y)) +
    0.017217787413749883 * texture2D(u_texture, vec2(coords.x - offset9, coords.y)) +
    0.017523340470576885 * texture2D(u_texture, vec2(coords.x - offset8, coords.y)) +
    0.017796329583671718 * texture2D(u_texture, vec2(coords.x - offset7, coords.y)) +
    0.018035075640189503 * texture2D(u_texture, vec2(coords.x - offset6, coords.y)) +
    0.01823809553426942 * texture2D(u_texture, vec2(coords.x - offset5, coords.y)) +
    0.018404117505418677 * texture2D(u_texture, vec2(coords.x - offset4, coords.y)) +
    0.018532094403670527 * texture2D(u_texture, vec2(coords.x - offset3, coords.y)) +
    0.018621214687990925 * texture2D(u_texture, vec2(coords.x - offset2, coords.y)) +
    0.018670910996346463 * texture2D(u_texture, vec2(coords.x - offset1, coords.y)) +
    0.009341677973537132 * texture2D(u_texture, coords) +
    0.018670910996346463 * texture2D(u_texture, vec2(coords.x + offset1, coords.y)) +
    0.018621214687990925 * texture2D(u_texture, vec2(coords.x + offset2, coords.y)) +
    0.018532094403670527 * texture2D(u_texture, vec2(coords.x + offset3, coords.y)) +
    0.018404117505418677 * texture2D(u_texture, vec2(coords.x + offset4, coords.y)) +
    0.01823809553426942 * texture2D(u_texture, vec2(coords.x + offset5, coords.y)) +
    0.018035075640189503 * texture2D(u_texture, vec2(coords.x + offset6, coords.y)) +
    0.017796329583671718 * texture2D(u_texture, vec2(coords.x + offset7, coords.y)) +
    0.017523340470576885 * texture2D(u_texture, vec2(coords.x + offset8, coords.y)) +
    0.017217787413749883 * texture2D(u_texture, vec2(coords.x + offset9, coords.y)) +
    0.016881528343246535 * texture2D(u_texture, vec2(coords.x + offset10, coords.y)) +
    0.016516581211199262 * texture2D(u_texture, vec2(coords.x + offset11, coords.y)) +
    0.01612510385701937 * texture2D(u_texture, vec2(coords.x + offset12, coords.y)) +
    0.015709372813484054 * texture2D(u_texture, vec2(coords.x + offset13, coords.y)) +
    0.015271761344093757 * texture2D(u_texture, vec2(coords.x + offset14, coords.y)) +
    0.014814717006827747 * texture2D(u_texture, vec2(coords.x + offset15, coords.y)) +
    0.014340739039097598 * texture2D(u_texture, vec2(coords.x + offset16, coords.y)) +
    0.013852355853431591 * texture2D(u_texture, vec2(coords.x + offset17, coords.y)) +
    0.013352102923448949 * texture2D(u_texture, vec2(coords.x + offset18, coords.y)) +
    0.012842501325325195 * texture2D(u_texture, vec2(coords.x + offset19, coords.y)) +
    0.012326037181614218 * texture2D(u_texture, vec2(coords.x + offset20, coords.y)) +
    0.011805142232454772 * texture2D(u_texture, vec2(coords.x + offset21, coords.y)) +
    0.011282175734381818 * texture2D(u_texture, vec2(coords.x + offset22, coords.y)) +
    0.010759407859761894 * texture2D(u_texture, vec2(coords.x + offset23, coords.y)) +
    0.010239004740879845 * texture2D(u_texture, vec2(coords.x + offset24, coords.y)) +
    0.009723015272538443 * texture2D(u_texture, vec2(coords.x + offset25, coords.y)) +
    0.009213359756307384 * texture2D(u_texture, vec2(coords.x + offset26, coords.y)) +
    0.008711820438873374 * texture2D(u_texture, vec2(coords.x + offset27, coords.y)) +
    0.008220033966869114 * texture2D(u_texture, vec2(coords.x + offset28, coords.y)) +
    0.00773948575162684 * texture2D(u_texture, vec2(coords.x + offset29, coords.y)) +
    0.007271506209991643 * texture2D(u_texture, vec2(coords.x + offset30, coords.y)) +
    0.006817268822063157 * texture2D(u_texture, vec2(coords.x + offset31, coords.y)) +
    0.006377789923867489 * texture2D(u_texture, vec2(coords.x + offset32, coords.y)) +
    0.00595393013278181 * texture2D(u_texture, vec2(coords.x + offset33, coords.y)) +
    0.005546397286256497 * texture2D(u_texture, vec2(coords.x + offset34, coords.y)) +
    0.005155750760146215 * texture2D(u_texture, vec2(coords.x + offset35, coords.y)) +
    0.004782407021842761 * texture2D(u_texture, vec2(coords.x + offset36, coords.y)) +
    0.004426646265400704 * texture2D(u_texture, vec2(coords.x + offset37, coords.y)) +
    0.004088619970900129 * texture2D(u_texture, vec2(coords.x + offset38, coords.y)) +
    0.003768359228278574 * texture2D(u_texture, vec2(coords.x + offset39, coords.y)) +
    0.0034657836666146316 * texture2D(u_texture, vec2(coords.x + offset40, coords.y)) +
    0.0031807108331424238 * texture2D(u_texture, vec2(coords.x + offset41, coords.y)) +
    0.0029128658718672604 * texture2D(u_texture, vec2(coords.x + offset42, coords.y)) +
    0.0026618913592583527 * texture2D(u_texture, vec2(coords.x + offset43, coords.y)) +
    0.0024273571638155473 * texture2D(u_texture, vec2(coords.x + offset44, coords.y)) +
    0.0022087702070336546 * texture2D(u_texture, vec2(coords.x + offset45, coords.y)) +
    0.002005584015106847 * texture2D(u_texture, vec2(coords.x + offset46, coords.y)) +
    0.0018172079633177666 * texture2D(u_texture, vec2(coords.x + offset47, coords.y)) +
    0.0016430161281429216 * texture2D(u_texture, vec2(coords.x + offset48, coords.y)) +
    0.0014823556753956703 * texture2D(u_texture, vec2(coords.x + offset49, coords.y)) +
    0.001334554725959746 * texture2D(u_texture, vec2(coords.x + offset50, coords.y)) +
    0.0011989296536041576 * texture2D(u_texture, vec2(coords.x + offset51, coords.y)) +
    0.0010747917818067461 * texture2D(u_texture, vec2(coords.x + offset52, coords.y)) +
    0.0009614534582709655 * texture2D(u_texture, vec2(coords.x + offset53, coords.y))
  );
}
