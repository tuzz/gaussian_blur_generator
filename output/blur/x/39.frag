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
  float offset1 = one_pixel * 1.498448810754912;
  float offset2 = one_pixel * 3.4963805584281284;
  float offset3 = one_pixel * 5.494312306101344;
  float offset4 = one_pixel * 7.49224405377456;
  float offset5 = one_pixel * 9.490175801447776;
  float offset6 = one_pixel * 11.488107549120993;
  float offset7 = one_pixel * 13.486039296794209;
  float offset8 = one_pixel * 15.483971044467426;
  float offset9 = one_pixel * 17.48190279214064;
  float offset10 = one_pixel * 19.479834539813858;
  float offset11 = one_pixel * 21.477766287487075;
  float offset12 = one_pixel * 23.47569803516029;
  float offset13 = one_pixel * 25.473629782833505;
  float offset14 = one_pixel * 27.471561530506722;
  float offset15 = one_pixel * 29.46949327817994;
  float offset16 = one_pixel * 31.467425025853153;
  float offset17 = one_pixel * 33.46535677352637;
  float offset18 = one_pixel * 35.46328852119959;
  float offset19 = one_pixel * 37.4612202688728;

  gl_FragColor = (
    0.0028367111171657207 * texture2D(u_texture, vec2(coords.x - offset19, coords.y)) +
    0.0038376966276293194 * texture2D(u_texture, vec2(coords.x - offset18, coords.y)) +
    0.005106330298268357 * texture2D(u_texture, vec2(coords.x - offset17, coords.y)) +
    0.006682426202978858 * texture2D(u_texture, vec2(coords.x - offset16, coords.y)) +
    0.008601030040505943 * texture2D(u_texture, vec2(coords.x - offset15, coords.y)) +
    0.010888336930398734 * texture2D(u_texture, vec2(coords.x - offset14, coords.y)) +
    0.013557229546363764 * texture2D(u_texture, vec2(coords.x - offset13, coords.y)) +
    0.01660282257394322 * texture2D(u_texture, vec2(coords.x - offset12, coords.y)) +
    0.01999850367056625 * texture2D(u_texture, vec2(coords.x - offset11, coords.y)) +
    0.02369302131075688 * texture2D(u_texture, vec2(coords.x - offset10, coords.y)) +
    0.027609165347242497 * texture2D(u_texture, vec2(coords.x - offset9, coords.y)) +
    0.0316445026422713 * texture2D(u_texture, vec2(coords.x - offset8, coords.y)) +
    0.035674464435919345 * texture2D(u_texture, vec2(coords.x - offset7, coords.y)) +
    0.03955784472735323 * texture2D(u_texture, vec2(coords.x - offset6, coords.y)) +
    0.04314448475562075 * texture2D(u_texture, vec2(coords.x - offset5, coords.y)) +
    0.04628462469873661 * texture2D(u_texture, vec2(coords.x - offset4, coords.y)) +
    0.0488391439535321 * texture2D(u_texture, vec2(coords.x - offset3, coords.y)) +
    0.05068972947076928 * texture2D(u_texture, vec2(coords.x - offset2, coords.y)) +
    0.05174794278258734 * texture2D(u_texture, vec2(coords.x - offset1, coords.y)) +
    0.02600797773478101 * texture2D(u_texture, coords) +
    0.05174794278258734 * texture2D(u_texture, vec2(coords.x + offset1, coords.y)) +
    0.05068972947076928 * texture2D(u_texture, vec2(coords.x + offset2, coords.y)) +
    0.0488391439535321 * texture2D(u_texture, vec2(coords.x + offset3, coords.y)) +
    0.04628462469873661 * texture2D(u_texture, vec2(coords.x + offset4, coords.y)) +
    0.04314448475562075 * texture2D(u_texture, vec2(coords.x + offset5, coords.y)) +
    0.03955784472735323 * texture2D(u_texture, vec2(coords.x + offset6, coords.y)) +
    0.035674464435919345 * texture2D(u_texture, vec2(coords.x + offset7, coords.y)) +
    0.0316445026422713 * texture2D(u_texture, vec2(coords.x + offset8, coords.y)) +
    0.027609165347242497 * texture2D(u_texture, vec2(coords.x + offset9, coords.y)) +
    0.02369302131075688 * texture2D(u_texture, vec2(coords.x + offset10, coords.y)) +
    0.01999850367056625 * texture2D(u_texture, vec2(coords.x + offset11, coords.y)) +
    0.01660282257394322 * texture2D(u_texture, vec2(coords.x + offset12, coords.y)) +
    0.013557229546363764 * texture2D(u_texture, vec2(coords.x + offset13, coords.y)) +
    0.010888336930398734 * texture2D(u_texture, vec2(coords.x + offset14, coords.y)) +
    0.008601030040505943 * texture2D(u_texture, vec2(coords.x + offset15, coords.y)) +
    0.006682426202978858 * texture2D(u_texture, vec2(coords.x + offset16, coords.y)) +
    0.005106330298268357 * texture2D(u_texture, vec2(coords.x + offset17, coords.y)) +
    0.0038376966276293194 * texture2D(u_texture, vec2(coords.x + offset18, coords.y)) +
    0.0028367111171657207 * texture2D(u_texture, vec2(coords.x + offset19, coords.y))
  );
}