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
  float offset1 = one_pixel * 1.4997346541659295;
  float offset2 = one_pixel * 3.4993808597205023;
  float offset3 = one_pixel * 5.499027065275075;
  float offset4 = one_pixel * 7.498673270829648;
  float offset5 = one_pixel * 9.498319476384221;
  float offset6 = one_pixel * 11.497965681938794;
  float offset7 = one_pixel * 13.497611887493367;
  float offset8 = one_pixel * 15.49725809304794;
  float offset9 = one_pixel * 17.496904298602512;
  float offset10 = one_pixel * 19.496550504157085;
  float offset11 = one_pixel * 21.496196709711658;
  float offset12 = one_pixel * 23.49584291526623;
  float offset13 = one_pixel * 25.495489120820803;
  float offset14 = one_pixel * 27.495135326375376;
  float offset15 = one_pixel * 29.49478153192995;
  float offset16 = one_pixel * 31.49442773748452;
  float offset17 = one_pixel * 33.4940739430391;
  float offset18 = one_pixel * 35.49372014859367;
  float offset19 = one_pixel * 37.49336635414824;
  float offset20 = one_pixel * 39.49301255970281;
  float offset21 = one_pixel * 41.49265876525739;
  float offset22 = one_pixel * 43.49230497081196;
  float offset23 = one_pixel * 45.491951176366534;
  float offset24 = one_pixel * 47.4915973819211;
  float offset25 = one_pixel * 49.49124358747568;
  float offset26 = one_pixel * 51.49088979303025;
  float offset27 = one_pixel * 53.490535998584825;
  float offset28 = one_pixel * 55.490182204139394;
  float offset29 = one_pixel * 57.48982840969397;
  float offset30 = one_pixel * 59.48947461524854;
  float offset31 = one_pixel * 61.489120820803116;
  float offset32 = one_pixel * 63.488767026357685;
  float offset33 = one_pixel * 65.48841323191226;
  float offset34 = one_pixel * 67.48805943746683;
  float offset35 = one_pixel * 69.4877056430214;
  float offset36 = one_pixel * 71.48735184857598;
  float offset37 = one_pixel * 73.48699805413055;
  float offset38 = one_pixel * 75.48664425968512;
  float offset39 = one_pixel * 77.48629046523969;
  float offset40 = one_pixel * 79.48593667079427;
  float offset41 = one_pixel * 81.48558287634884;
  float offset42 = one_pixel * 83.48522908190341;
  float offset43 = one_pixel * 85.48487528745798;
  float offset44 = one_pixel * 87.48452149301256;
  float offset45 = one_pixel * 89.48416769856713;
  float offset46 = one_pixel * 91.4838139041217;

  gl_FragColor = (
    0.0011129353111657835 * texture2D(u_texture, vec2(coords.x - offset46, coords.y)) +
    0.0012650297764862902 * texture2D(u_texture, vec2(coords.x - offset45, coords.y)) +
    0.0014338421758355788 * texture2D(u_texture, vec2(coords.x - offset44, coords.y)) +
    0.0016205848870252406 * texture2D(u_texture, vec2(coords.x - offset43, coords.y)) +
    0.001826468146496359 * texture2D(u_texture, vec2(coords.x - offset42, coords.y)) +
    0.002052685227984025 * texture2D(u_texture, vec2(coords.x - offset41, coords.y)) +
    0.002300395972609161 * texture2D(u_texture, vec2(coords.x - offset40, coords.y)) +
    0.002570708757537934 * texture2D(u_texture, vec2(coords.x - offset39, coords.y)) +
    0.0028646610339614865 * texture2D(u_texture, vec2(coords.x - offset38, coords.y)) +
    0.0031831986110202235 * texture2D(u_texture, vec2(coords.x - offset37, coords.y)) +
    0.0035271539094704845 * texture2D(u_texture, vec2(coords.x - offset36, coords.y)) +
    0.003897223456256078 * texture2D(u_texture, vec2(coords.x - offset35, coords.y)) +
    0.004293944937456249 * texture2D(u_texture, vec2(coords.x - offset34, coords.y)) +
    0.004717674170977792 * texture2D(u_texture, vec2(coords.x - offset33, coords.y)) +
    0.005168562400406207 * texture2D(u_texture, vec2(coords.x - offset32, coords.y)) +
    0.005646534346152353 * texture2D(u_texture, vec2(coords.x - offset31, coords.y)) +
    0.0061512674779537115 * texture2D(u_texture, vec2(coords.x - offset30, coords.y)) +
    0.006682172992491338 * texture2D(u_texture, vec2(coords.x - offset29, coords.y)) +
    0.00723837899004578 * texture2D(u_texture, vec2(coords.x - offset28, coords.y)) +
    0.007818716343574285 * texture2D(u_texture, vec2(coords.x - offset27, coords.y)) +
    0.008421707741391823 * texture2D(u_texture, vec2(coords.x - offset26, coords.y)) +
    0.009045560360081467 * texture2D(u_texture, vec2(coords.x - offset25, coords.y)) +
    0.0096881625869499 * texture2D(u_texture, vec2(coords.x - offset24, coords.y)) +
    0.010347085161226423 * texture2D(u_texture, vec2(coords.x - offset23, coords.y)) +
    0.011019587040594159 * texture2D(u_texture, vec2(coords.x - offset22, coords.y)) +
    0.011702626225244992 * texture2D(u_texture, vec2(coords.x - offset21, coords.y)) +
    0.012392875686565686 * texture2D(u_texture, vec2(coords.x - offset20, coords.y)) +
    0.013086744453281392 * texture2D(u_texture, vec2(coords.x - offset19, coords.y)) +
    0.013780403806262656 * texture2D(u_texture, vec2(coords.x - offset18, coords.y)) +
    0.014469818426434918 * texture2D(u_texture, vec2(coords.x - offset17, coords.y)) +
    0.015150782230791953 * texture2D(u_texture, vec2(coords.x - offset16, coords.y)) +
    0.01581895852210586 * texture2D(u_texture, vec2(coords.x - offset15, coords.y)) +
    0.016469923971395448 * texture2D(u_texture, vec2(coords.x - offset14, coords.y)) +
    0.017099215851478618 * texture2D(u_texture, vec2(coords.x - offset13, coords.y)) +
    0.01770238184788717 * texture2D(u_texture, vec2(coords.x - offset12, coords.y)) +
    0.018275031692844834 * texture2D(u_texture, vec2(coords.x - offset11, coords.y)) +
    0.018812889801473724 * texture2D(u_texture, vec2(coords.x - offset10, coords.y)) +
    0.01931184803917538 * texture2D(u_texture, vec2(coords.x - offset9, coords.y)) +
    0.019768017717124036 * texture2D(u_texture, vec2(coords.x - offset8, coords.y)) +
    0.020177779900449618 * texture2D(u_texture, vec2(coords.x - offset7, coords.y)) +
    0.020537833121899912 * texture2D(u_texture, vec2(coords.x - offset6, coords.y)) +
    0.020845237622917432 * texture2D(u_texture, vec2(coords.x - offset5, coords.y)) +
    0.02109745529392253 * texture2D(u_texture, vec2(coords.x - offset4, coords.y)) +
    0.021292384555340053 * texture2D(u_texture, vec2(coords.x - offset3, coords.y)) +
    0.021428389509140756 * texture2D(u_texture, vec2(coords.x - offset2, coords.y)) +
    0.021504322795438156 * texture2D(u_texture, vec2(coords.x - offset1, coords.y)) +
    0.010761674227349485 * texture2D(u_texture, coords) +
    0.021504322795438156 * texture2D(u_texture, vec2(coords.x + offset1, coords.y)) +
    0.021428389509140756 * texture2D(u_texture, vec2(coords.x + offset2, coords.y)) +
    0.021292384555340053 * texture2D(u_texture, vec2(coords.x + offset3, coords.y)) +
    0.02109745529392253 * texture2D(u_texture, vec2(coords.x + offset4, coords.y)) +
    0.020845237622917432 * texture2D(u_texture, vec2(coords.x + offset5, coords.y)) +
    0.020537833121899912 * texture2D(u_texture, vec2(coords.x + offset6, coords.y)) +
    0.020177779900449618 * texture2D(u_texture, vec2(coords.x + offset7, coords.y)) +
    0.019768017717124036 * texture2D(u_texture, vec2(coords.x + offset8, coords.y)) +
    0.01931184803917538 * texture2D(u_texture, vec2(coords.x + offset9, coords.y)) +
    0.018812889801473724 * texture2D(u_texture, vec2(coords.x + offset10, coords.y)) +
    0.018275031692844834 * texture2D(u_texture, vec2(coords.x + offset11, coords.y)) +
    0.01770238184788717 * texture2D(u_texture, vec2(coords.x + offset12, coords.y)) +
    0.017099215851478618 * texture2D(u_texture, vec2(coords.x + offset13, coords.y)) +
    0.016469923971395448 * texture2D(u_texture, vec2(coords.x + offset14, coords.y)) +
    0.01581895852210586 * texture2D(u_texture, vec2(coords.x + offset15, coords.y)) +
    0.015150782230791953 * texture2D(u_texture, vec2(coords.x + offset16, coords.y)) +
    0.014469818426434918 * texture2D(u_texture, vec2(coords.x + offset17, coords.y)) +
    0.013780403806262656 * texture2D(u_texture, vec2(coords.x + offset18, coords.y)) +
    0.013086744453281392 * texture2D(u_texture, vec2(coords.x + offset19, coords.y)) +
    0.012392875686565686 * texture2D(u_texture, vec2(coords.x + offset20, coords.y)) +
    0.011702626225244992 * texture2D(u_texture, vec2(coords.x + offset21, coords.y)) +
    0.011019587040594159 * texture2D(u_texture, vec2(coords.x + offset22, coords.y)) +
    0.010347085161226423 * texture2D(u_texture, vec2(coords.x + offset23, coords.y)) +
    0.0096881625869499 * texture2D(u_texture, vec2(coords.x + offset24, coords.y)) +
    0.009045560360081467 * texture2D(u_texture, vec2(coords.x + offset25, coords.y)) +
    0.008421707741391823 * texture2D(u_texture, vec2(coords.x + offset26, coords.y)) +
    0.007818716343574285 * texture2D(u_texture, vec2(coords.x + offset27, coords.y)) +
    0.00723837899004578 * texture2D(u_texture, vec2(coords.x + offset28, coords.y)) +
    0.006682172992491338 * texture2D(u_texture, vec2(coords.x + offset29, coords.y)) +
    0.0061512674779537115 * texture2D(u_texture, vec2(coords.x + offset30, coords.y)) +
    0.005646534346152353 * texture2D(u_texture, vec2(coords.x + offset31, coords.y)) +
    0.005168562400406207 * texture2D(u_texture, vec2(coords.x + offset32, coords.y)) +
    0.004717674170977792 * texture2D(u_texture, vec2(coords.x + offset33, coords.y)) +
    0.004293944937456249 * texture2D(u_texture, vec2(coords.x + offset34, coords.y)) +
    0.003897223456256078 * texture2D(u_texture, vec2(coords.x + offset35, coords.y)) +
    0.0035271539094704845 * texture2D(u_texture, vec2(coords.x + offset36, coords.y)) +
    0.0031831986110202235 * texture2D(u_texture, vec2(coords.x + offset37, coords.y)) +
    0.0028646610339614865 * texture2D(u_texture, vec2(coords.x + offset38, coords.y)) +
    0.002570708757537934 * texture2D(u_texture, vec2(coords.x + offset39, coords.y)) +
    0.002300395972609161 * texture2D(u_texture, vec2(coords.x + offset40, coords.y)) +
    0.002052685227984025 * texture2D(u_texture, vec2(coords.x + offset41, coords.y)) +
    0.001826468146496359 * texture2D(u_texture, vec2(coords.x + offset42, coords.y)) +
    0.0016205848870252406 * texture2D(u_texture, vec2(coords.x + offset43, coords.y)) +
    0.0014338421758355788 * texture2D(u_texture, vec2(coords.x + offset44, coords.y)) +
    0.0012650297764862902 * texture2D(u_texture, vec2(coords.x + offset45, coords.y)) +
    0.0011129353111657835 * texture2D(u_texture, vec2(coords.x + offset46, coords.y))
  );
}
