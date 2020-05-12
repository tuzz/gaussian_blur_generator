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
  float offset1 = one_pixel * 1.4997661001091533;
  float offset2 = one_pixel * 3.4994542335880245;
  float offset3 = one_pixel * 5.499142367066895;
  float offset4 = one_pixel * 7.4988305005457665;
  float offset5 = one_pixel * 9.498518634024638;
  float offset6 = one_pixel * 11.49820676750351;
  float offset7 = one_pixel * 13.497894900982379;
  float offset8 = one_pixel * 15.49758303446125;
  float offset9 = one_pixel * 17.49727116794012;
  float offset10 = one_pixel * 19.496959301418993;
  float offset11 = one_pixel * 21.496647434897863;
  float offset12 = one_pixel * 23.496335568376736;
  float offset13 = one_pixel * 25.496023701855606;
  float offset14 = one_pixel * 27.495711835334475;
  float offset15 = one_pixel * 29.49539996881335;
  float offset16 = one_pixel * 31.49508810229222;
  float offset17 = one_pixel * 33.49477623577109;
  float offset18 = one_pixel * 35.49446436924996;
  float offset19 = one_pixel * 37.49415250272883;
  float offset20 = one_pixel * 39.4938406362077;
  float offset21 = one_pixel * 41.49352876968658;
  float offset22 = one_pixel * 43.49321690316545;
  float offset23 = one_pixel * 45.492905036644316;
  float offset24 = one_pixel * 47.492593170123186;
  float offset25 = one_pixel * 49.492281303602056;
  float offset26 = one_pixel * 51.49196943708093;
  float offset27 = one_pixel * 53.4916575705598;
  float offset28 = one_pixel * 55.49134570403867;
  float offset29 = one_pixel * 57.49103383751754;
  float offset30 = one_pixel * 59.49072197099641;
  float offset31 = one_pixel * 61.49041010447529;
  float offset32 = one_pixel * 63.49009823795416;
  float offset33 = one_pixel * 65.48978637143303;
  float offset34 = one_pixel * 67.4894745049119;
  float offset35 = one_pixel * 69.48916263839077;
  float offset36 = one_pixel * 71.48885077186964;
  float offset37 = one_pixel * 73.4885389053485;
  float offset38 = one_pixel * 75.48822703882738;
  float offset39 = one_pixel * 77.48791517230626;
  float offset40 = one_pixel * 79.48760330578513;
  float offset41 = one_pixel * 81.487291439264;
  float offset42 = one_pixel * 83.48697957274287;
  float offset43 = one_pixel * 85.48666770622174;
  float offset44 = one_pixel * 87.48635583970061;
  float offset45 = one_pixel * 89.48604397317948;
  float offset46 = one_pixel * 91.48573210665835;
  float offset47 = one_pixel * 93.48542024013722;
  float offset48 = one_pixel * 95.48510837361609;
  float offset49 = one_pixel * 97.48479650709497;

  gl_FragColor = (
    0.0010421984329107925 * texture2D(u_texture, vec2(coords.x - offset49, coords.y)) +
    0.0011755432930737383 * texture2D(u_texture, vec2(coords.x - offset48, coords.y)) +
    0.001322642617704533 * texture2D(u_texture, vec2(coords.x - offset47, coords.y)) +
    0.0014844381544295829 * texture2D(u_texture, vec2(coords.x - offset46, coords.y)) +
    0.0016618715597494665 * texture2D(u_texture, vec2(coords.x - offset45, coords.y)) +
    0.001855874446380625 * texture2D(u_texture, vec2(coords.x - offset44, coords.y)) +
    0.0020673573614289906 * texture2D(u_texture, vec2(coords.x - offset43, coords.y)) +
    0.002297197742002986 * texture2D(u_texture, vec2(coords.x - offset42, coords.y)) +
    0.0025462269191952195 * texture2D(u_texture, vec2(coords.x - offset41, coords.y)) +
    0.0028152162670249817 * texture2D(u_texture, vec2(coords.x - offset40, coords.y)) +
    0.003104862619485303 * texture2D(u_texture, vec2(coords.x - offset39, coords.y)) +
    0.003415773105752278 * texture2D(u_texture, vec2(coords.x - offset38, coords.y)) +
    0.0037484495802961146 * texture2D(u_texture, vec2(coords.x - offset37, coords.y)) +
    0.004103272850430312 * texture2D(u_texture, vec2(coords.x - offset36, coords.y)) +
    0.004480486928049302 * texture2D(u_texture, vec2(coords.x - offset35, coords.y)) +
    0.004880183554207237 * texture2D(u_texture, vec2(coords.x - offset34, coords.y)) +
    0.00530228726404032 * texture2D(u_texture, vec2(coords.x - offset33, coords.y)) +
    0.00574654127459863 * texture2D(u_texture, vec2(coords.x - offset32, coords.y)) +
    0.006212494488726375 * texture2D(u_texture, vec2(coords.x - offset31, coords.y)) +
    0.006699489913559439 * texture2D(u_texture, vec2(coords.x - offset30, coords.y)) +
    0.007206654791918972 * texture2D(u_texture, vec2(coords.x - offset29, coords.y)) +
    0.007732892738390651 * texture2D(u_texture, vec2(coords.x - offset28, coords.y)) +
    0.008276878158832638 * texture2D(u_texture, vec2(coords.x - offset27, coords.y)) +
    0.008837053212232895 * texture2D(u_texture, vec2(coords.x - offset26, coords.y)) +
    0.009411627547177856 * texture2D(u_texture, vec2(coords.x - offset25, coords.y)) +
    0.009998581011810413 * texture2D(u_texture, vec2(coords.x - offset24, coords.y)) +
    0.010595669496337716 * texture2D(u_texture, vec2(coords.x - offset23, coords.y)) +
    0.011200434021376136 * texture2D(u_texture, vec2(coords.x - offset22, coords.y)) +
    0.011810213134354692 * texture2D(u_texture, vec2(coords.x - offset21, coords.y)) +
    0.012422158620680517 * texture2D(u_texture, vec2(coords.x - offset20, coords.y)) +
    0.01303325447740814 * texture2D(u_texture, vec2(coords.x - offset19, coords.y)) +
    0.01364033903590415 * texture2D(u_texture, vec2(coords.x - offset18, coords.y)) +
    0.01424013005773955 * texture2D(u_texture, vec2(coords.x - offset17, coords.y)) +
    0.014829252566149136 * texture2D(u_texture, vec2(coords.x - offset16, coords.y)) +
    0.015404269115306781 * texture2D(u_texture, vec2(coords.x - offset15, coords.y)) +
    0.015961712142838775 * texture2D(u_texture, vec2(coords.x - offset14, coords.y)) +
    0.01649811799888073 * texture2D(u_texture, vec2(coords.x - offset13, coords.y)) +
    0.01701006219896673 * texture2D(u_texture, vec2(coords.x - offset12, coords.y)) +
    0.017494195409415342 * texture2D(u_texture, vec2(coords.x - offset11, coords.y)) +
    0.01794727964380166 * texture2D(u_texture, vec2(coords.x - offset10, coords.y)) +
    0.018366224128558872 * texture2D(u_texture, vec2(coords.x - offset9, coords.y)) +
    0.018748120285510785 * texture2D(u_texture, vec2(coords.x - offset8, coords.y)) +
    0.01909027527973636 * texture2D(u_texture, vec2(coords.x - offset7, coords.y)) +
    0.019390243592888632 * texture2D(u_texture, vec2(coords.x - offset6, coords.y)) +
    0.019645856104941406 * texture2D(u_texture, vec2(coords.x - offset5, coords.y)) +
    0.01985524620104619 * texture2D(u_texture, vec2(coords.x - offset4, coords.y)) +
    0.020016872464199857 * texture2D(u_texture, vec2(coords.x - offset3, coords.y)) +
    0.02012953756793209 * texture2D(u_texture, vec2(coords.x - offset2, coords.y)) +
    0.020192403045153774 * texture2D(u_texture, vec2(coords.x - offset1, coords.y)) +
    0.010104075154924634 * texture2D(u_texture, coords) +
    0.020192403045153774 * texture2D(u_texture, vec2(coords.x + offset1, coords.y)) +
    0.02012953756793209 * texture2D(u_texture, vec2(coords.x + offset2, coords.y)) +
    0.020016872464199857 * texture2D(u_texture, vec2(coords.x + offset3, coords.y)) +
    0.01985524620104619 * texture2D(u_texture, vec2(coords.x + offset4, coords.y)) +
    0.019645856104941406 * texture2D(u_texture, vec2(coords.x + offset5, coords.y)) +
    0.019390243592888632 * texture2D(u_texture, vec2(coords.x + offset6, coords.y)) +
    0.01909027527973636 * texture2D(u_texture, vec2(coords.x + offset7, coords.y)) +
    0.018748120285510785 * texture2D(u_texture, vec2(coords.x + offset8, coords.y)) +
    0.018366224128558872 * texture2D(u_texture, vec2(coords.x + offset9, coords.y)) +
    0.01794727964380166 * texture2D(u_texture, vec2(coords.x + offset10, coords.y)) +
    0.017494195409415342 * texture2D(u_texture, vec2(coords.x + offset11, coords.y)) +
    0.01701006219896673 * texture2D(u_texture, vec2(coords.x + offset12, coords.y)) +
    0.01649811799888073 * texture2D(u_texture, vec2(coords.x + offset13, coords.y)) +
    0.015961712142838775 * texture2D(u_texture, vec2(coords.x + offset14, coords.y)) +
    0.015404269115306781 * texture2D(u_texture, vec2(coords.x + offset15, coords.y)) +
    0.014829252566149136 * texture2D(u_texture, vec2(coords.x + offset16, coords.y)) +
    0.01424013005773955 * texture2D(u_texture, vec2(coords.x + offset17, coords.y)) +
    0.01364033903590415 * texture2D(u_texture, vec2(coords.x + offset18, coords.y)) +
    0.01303325447740814 * texture2D(u_texture, vec2(coords.x + offset19, coords.y)) +
    0.012422158620680517 * texture2D(u_texture, vec2(coords.x + offset20, coords.y)) +
    0.011810213134354692 * texture2D(u_texture, vec2(coords.x + offset21, coords.y)) +
    0.011200434021376136 * texture2D(u_texture, vec2(coords.x + offset22, coords.y)) +
    0.010595669496337716 * texture2D(u_texture, vec2(coords.x + offset23, coords.y)) +
    0.009998581011810413 * texture2D(u_texture, vec2(coords.x + offset24, coords.y)) +
    0.009411627547177856 * texture2D(u_texture, vec2(coords.x + offset25, coords.y)) +
    0.008837053212232895 * texture2D(u_texture, vec2(coords.x + offset26, coords.y)) +
    0.008276878158832638 * texture2D(u_texture, vec2(coords.x + offset27, coords.y)) +
    0.007732892738390651 * texture2D(u_texture, vec2(coords.x + offset28, coords.y)) +
    0.007206654791918972 * texture2D(u_texture, vec2(coords.x + offset29, coords.y)) +
    0.006699489913559439 * texture2D(u_texture, vec2(coords.x + offset30, coords.y)) +
    0.006212494488726375 * texture2D(u_texture, vec2(coords.x + offset31, coords.y)) +
    0.00574654127459863 * texture2D(u_texture, vec2(coords.x + offset32, coords.y)) +
    0.00530228726404032 * texture2D(u_texture, vec2(coords.x + offset33, coords.y)) +
    0.004880183554207237 * texture2D(u_texture, vec2(coords.x + offset34, coords.y)) +
    0.004480486928049302 * texture2D(u_texture, vec2(coords.x + offset35, coords.y)) +
    0.004103272850430312 * texture2D(u_texture, vec2(coords.x + offset36, coords.y)) +
    0.0037484495802961146 * texture2D(u_texture, vec2(coords.x + offset37, coords.y)) +
    0.003415773105752278 * texture2D(u_texture, vec2(coords.x + offset38, coords.y)) +
    0.003104862619485303 * texture2D(u_texture, vec2(coords.x + offset39, coords.y)) +
    0.0028152162670249817 * texture2D(u_texture, vec2(coords.x + offset40, coords.y)) +
    0.0025462269191952195 * texture2D(u_texture, vec2(coords.x + offset41, coords.y)) +
    0.002297197742002986 * texture2D(u_texture, vec2(coords.x + offset42, coords.y)) +
    0.0020673573614289906 * texture2D(u_texture, vec2(coords.x + offset43, coords.y)) +
    0.001855874446380625 * texture2D(u_texture, vec2(coords.x + offset44, coords.y)) +
    0.0016618715597494665 * texture2D(u_texture, vec2(coords.x + offset45, coords.y)) +
    0.0014844381544295829 * texture2D(u_texture, vec2(coords.x + offset46, coords.y)) +
    0.001322642617704533 * texture2D(u_texture, vec2(coords.x + offset47, coords.y)) +
    0.0011755432930737383 * texture2D(u_texture, vec2(coords.x + offset48, coords.y)) +
    0.0010421984329107925 * texture2D(u_texture, vec2(coords.x + offset49, coords.y))
  );
}
