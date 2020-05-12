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
  float offset1 = one_pixel * 1.4997226844148641;
  float offset2 = one_pixel * 3.4993529303013498;
  float offset3 = one_pixel * 5.498983176187835;
  float offset4 = one_pixel * 7.49861342207432;
  float offset5 = one_pixel * 9.498243667960805;
  float offset6 = one_pixel * 11.497873913847291;
  float offset7 = one_pixel * 13.497504159733777;
  float offset8 = one_pixel * 15.497134405620262;
  float offset9 = one_pixel * 17.496764651506748;
  float offset10 = one_pixel * 19.496394897393234;
  float offset11 = one_pixel * 21.49602514327972;
  float offset12 = one_pixel * 23.495655389166206;
  float offset13 = one_pixel * 25.49528563505269;
  float offset14 = one_pixel * 27.494915880939175;
  float offset15 = one_pixel * 29.49454612682566;
  float offset16 = one_pixel * 31.494176372712147;
  float offset17 = one_pixel * 33.49380661859863;
  float offset18 = one_pixel * 35.49343686448512;
  float offset19 = one_pixel * 37.493067110371605;
  float offset20 = one_pixel * 39.49269735625809;
  float offset21 = one_pixel * 41.49232760214458;
  float offset22 = one_pixel * 43.491957848031056;
  float offset23 = one_pixel * 45.49158809391754;
  float offset24 = one_pixel * 47.49121833980403;
  float offset25 = one_pixel * 49.490848585690514;
  float offset26 = one_pixel * 51.490478831577;
  float offset27 = one_pixel * 53.49010907746349;
  float offset28 = one_pixel * 55.48973932334997;
  float offset29 = one_pixel * 57.48936956923646;
  float offset30 = one_pixel * 59.488999815122945;
  float offset31 = one_pixel * 61.48863006100943;
  float offset32 = one_pixel * 63.48826030689592;
  float offset33 = one_pixel * 65.4878905527824;
  float offset34 = one_pixel * 67.48752079866888;
  float offset35 = one_pixel * 69.48715104455538;
  float offset36 = one_pixel * 71.48678129044185;
  float offset37 = one_pixel * 73.48641153632835;
  float offset38 = one_pixel * 75.48604178221483;
  float offset39 = one_pixel * 77.48567202810132;
  float offset40 = one_pixel * 79.4853022739878;
  float offset41 = one_pixel * 81.48493251987428;
  float offset42 = one_pixel * 83.48456276576077;
  float offset43 = one_pixel * 85.48419301164725;
  float offset44 = one_pixel * 87.48382325753374;
  float offset45 = one_pixel * 89.48345350342022;

  gl_FragColor = (
    0.0011380005596355338 * texture2D(u_texture, vec2(coords.x - offset45, coords.y)) +
    0.0012971743451128408 * texture2D(u_texture, vec2(coords.x - offset44, coords.y)) +
    0.0014742409166909715 * texture2D(u_texture, vec2(coords.x - offset43, coords.y)) +
    0.0016705245634142064 * texture2D(u_texture, vec2(coords.x - offset42, coords.y)) +
    0.0018873464391830814 * texture2D(u_texture, vec2(coords.x - offset41, coords.y)) +
    0.002126007534129779 * texture2D(u_texture, vec2(coords.x - offset40, coords.y)) +
    0.002387769728192173 * texture2D(u_texture, vec2(coords.x - offset39, coords.y)) +
    0.00267383503494175 * texture2D(u_texture, vec2(coords.x - offset38, coords.y)) +
    0.002985323197189214 * texture2D(u_texture, vec2(coords.x - offset37, coords.y)) +
    0.0033232478520599795 * texture2D(u_texture, vec2(coords.x - offset36, coords.y)) +
    0.003688491540857311 * texture2D(u_texture, vec2(coords.x - offset35, coords.y)) +
    0.004081779896672913 * texture2D(u_texture, vec2(coords.x - offset34, coords.y)) +
    0.004503655398750293 * texture2D(u_texture, vec2(coords.x - offset33, coords.y)) +
    0.004954451135304663 * texture2D(u_texture, vec2(coords.x - offset32, coords.y)) +
    0.00543426506401037 * texture2D(u_texture, vec2(coords.x - offset31, coords.y)) +
    0.005942935299797904 * texture2D(u_texture, vec2(coords.x - offset30, coords.y)) +
    0.006480016991091072 * texture2D(u_texture, vec2(coords.x - offset29, coords.y)) +
    0.0070447613663788605 * texture2D(u_texture, vec2(coords.x - offset28, coords.y)) +
    0.007636097541427073 * texture2D(u_texture, vec2(coords.x - offset27, coords.y)) +
    0.008252617672086472 * texture2D(u_texture, vec2(coords.x - offset26, coords.y)) +
    0.008892566017433759 * texture2D(u_texture, vec2(coords.x - offset25, coords.y)) +
    0.009553832442132655 * texture2D(u_texture, vec2(coords.x - offset24, coords.y)) +
    0.010233950835081542 * texture2D(u_texture, vec2(coords.x - offset23, coords.y)) +
    0.010930102853739153 * texture2D(u_texture, vec2(coords.x - offset22, coords.y)) +
    0.011639127320602157 * texture2D(u_texture, vec2(coords.x - offset21, coords.y)) +
    0.01235753550127266 * texture2D(u_texture, vec2(coords.x - offset20, coords.y)) +
    0.013081532384037382 * texture2D(u_texture, vec2(coords.x - offset19, coords.y)) +
    0.01380704396101789 * texture2D(u_texture, vec2(coords.x - offset18, coords.y)) +
    0.014529750383335607 * texture2D(u_texture, vec2(coords.x - offset17, coords.y)) +
    0.01524512473036265 * texture2D(u_texture, vec2(coords.x - offset16, coords.y)) +
    0.015948476999323984 * texture2D(u_texture, vec2(coords.x - offset15, coords.y)) +
    0.016635002789839985 * texture2D(u_texture, vec2(coords.x - offset14, coords.y)) +
    0.01729983603214513 * texture2D(u_texture, vec2(coords.x - offset13, coords.y)) +
    0.01793810499139977 * texture2D(u_texture, vec2(coords.x - offset12, coords.y)) +
    0.018544990677333534 * texture2D(u_texture, vec2(coords.x - offset11, coords.y)) +
    0.019115786701797335 * texture2D(u_texture, vec2(coords.x - offset10, coords.y)) +
    0.019645959559681892 * texture2D(u_texture, vec2(coords.x - offset9, coords.y)) +
    0.02013120826364308 * texture2D(u_texture, vec2(coords.x - offset8, coords.y)) +
    0.020567522242150946 * texture2D(u_texture, vec2(coords.x - offset7, coords.y)) +
    0.020951236414887997 * texture2D(u_texture, vec2(coords.x - offset6, coords.y)) +
    0.021279082390084088 * texture2D(u_texture, vec2(coords.x - offset5, coords.y)) +
    0.02154823478485067 * texture2D(u_texture, vec2(coords.x - offset4, coords.y)) +
    0.021756351751052432 * texture2D(u_texture, vec2(coords.x - offset3, coords.y)) +
    0.021901608894052793 * texture2D(u_texture, vec2(coords.x - offset2, coords.y)) +
    0.021982725897391208 * texture2D(u_texture, vec2(coords.x - offset1, coords.y)) +
    0.011001526208846486 * texture2D(u_texture, coords) +
    0.021982725897391208 * texture2D(u_texture, vec2(coords.x + offset1, coords.y)) +
    0.021901608894052793 * texture2D(u_texture, vec2(coords.x + offset2, coords.y)) +
    0.021756351751052432 * texture2D(u_texture, vec2(coords.x + offset3, coords.y)) +
    0.02154823478485067 * texture2D(u_texture, vec2(coords.x + offset4, coords.y)) +
    0.021279082390084088 * texture2D(u_texture, vec2(coords.x + offset5, coords.y)) +
    0.020951236414887997 * texture2D(u_texture, vec2(coords.x + offset6, coords.y)) +
    0.020567522242150946 * texture2D(u_texture, vec2(coords.x + offset7, coords.y)) +
    0.02013120826364308 * texture2D(u_texture, vec2(coords.x + offset8, coords.y)) +
    0.019645959559681892 * texture2D(u_texture, vec2(coords.x + offset9, coords.y)) +
    0.019115786701797335 * texture2D(u_texture, vec2(coords.x + offset10, coords.y)) +
    0.018544990677333534 * texture2D(u_texture, vec2(coords.x + offset11, coords.y)) +
    0.01793810499139977 * texture2D(u_texture, vec2(coords.x + offset12, coords.y)) +
    0.01729983603214513 * texture2D(u_texture, vec2(coords.x + offset13, coords.y)) +
    0.016635002789839985 * texture2D(u_texture, vec2(coords.x + offset14, coords.y)) +
    0.015948476999323984 * texture2D(u_texture, vec2(coords.x + offset15, coords.y)) +
    0.01524512473036265 * texture2D(u_texture, vec2(coords.x + offset16, coords.y)) +
    0.014529750383335607 * texture2D(u_texture, vec2(coords.x + offset17, coords.y)) +
    0.01380704396101789 * texture2D(u_texture, vec2(coords.x + offset18, coords.y)) +
    0.013081532384037382 * texture2D(u_texture, vec2(coords.x + offset19, coords.y)) +
    0.01235753550127266 * texture2D(u_texture, vec2(coords.x + offset20, coords.y)) +
    0.011639127320602157 * texture2D(u_texture, vec2(coords.x + offset21, coords.y)) +
    0.010930102853739153 * texture2D(u_texture, vec2(coords.x + offset22, coords.y)) +
    0.010233950835081542 * texture2D(u_texture, vec2(coords.x + offset23, coords.y)) +
    0.009553832442132655 * texture2D(u_texture, vec2(coords.x + offset24, coords.y)) +
    0.008892566017433759 * texture2D(u_texture, vec2(coords.x + offset25, coords.y)) +
    0.008252617672086472 * texture2D(u_texture, vec2(coords.x + offset26, coords.y)) +
    0.007636097541427073 * texture2D(u_texture, vec2(coords.x + offset27, coords.y)) +
    0.0070447613663788605 * texture2D(u_texture, vec2(coords.x + offset28, coords.y)) +
    0.006480016991091072 * texture2D(u_texture, vec2(coords.x + offset29, coords.y)) +
    0.005942935299797904 * texture2D(u_texture, vec2(coords.x + offset30, coords.y)) +
    0.00543426506401037 * texture2D(u_texture, vec2(coords.x + offset31, coords.y)) +
    0.004954451135304663 * texture2D(u_texture, vec2(coords.x + offset32, coords.y)) +
    0.004503655398750293 * texture2D(u_texture, vec2(coords.x + offset33, coords.y)) +
    0.004081779896672913 * texture2D(u_texture, vec2(coords.x + offset34, coords.y)) +
    0.003688491540857311 * texture2D(u_texture, vec2(coords.x + offset35, coords.y)) +
    0.0033232478520599795 * texture2D(u_texture, vec2(coords.x + offset36, coords.y)) +
    0.002985323197189214 * texture2D(u_texture, vec2(coords.x + offset37, coords.y)) +
    0.00267383503494175 * texture2D(u_texture, vec2(coords.x + offset38, coords.y)) +
    0.002387769728192173 * texture2D(u_texture, vec2(coords.x + offset39, coords.y)) +
    0.002126007534129779 * texture2D(u_texture, vec2(coords.x + offset40, coords.y)) +
    0.0018873464391830814 * texture2D(u_texture, vec2(coords.x + offset41, coords.y)) +
    0.0016705245634142064 * texture2D(u_texture, vec2(coords.x + offset42, coords.y)) +
    0.0014742409166909715 * texture2D(u_texture, vec2(coords.x + offset43, coords.y)) +
    0.0012971743451128408 * texture2D(u_texture, vec2(coords.x + offset44, coords.y)) +
    0.0011380005596355338 * texture2D(u_texture, vec2(coords.x + offset45, coords.y))
  );
}
