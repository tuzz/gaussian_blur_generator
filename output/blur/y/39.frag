#version 310 es

precision mediump float;
precision mediump sampler;

layout(set=0, binding=0) uniform _0 { vec4 u_scaling; };

layout(set=0, binding=1) uniform texture2D t_input;
layout(set=0, binding=2) uniform sampler s_input;

layout(location=0) out vec4 f_color;

// Generated by https://github.com/tuzz/gaussian_blur_generator

void main() {
  vec2 coords = gl_FragCoord.xy * u_scaling.xy;

  float one_pixel = u_scaling.y;
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

  f_color = (
    0.0028367111171657207 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset19)) +
    0.0038376966276293194 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset18)) +
    0.005106330298268357 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset17)) +
    0.006682426202978858 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset16)) +
    0.008601030040505943 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset15)) +
    0.010888336930398734 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset14)) +
    0.013557229546363764 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset13)) +
    0.01660282257394322 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset12)) +
    0.01999850367056625 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset11)) +
    0.02369302131075688 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset10)) +
    0.027609165347242497 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset9)) +
    0.0316445026422713 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset8)) +
    0.035674464435919345 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset7)) +
    0.03955784472735323 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset6)) +
    0.04314448475562075 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset5)) +
    0.04628462469873661 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset4)) +
    0.0488391439535321 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset3)) +
    0.05068972947076928 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset2)) +
    0.05174794278258734 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset1)) +
    0.02600797773478101 * texture(sampler2D(t_input, s_input), coords) +
    0.05174794278258734 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset1)) +
    0.05068972947076928 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset2)) +
    0.0488391439535321 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset3)) +
    0.04628462469873661 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset4)) +
    0.04314448475562075 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset5)) +
    0.03955784472735323 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset6)) +
    0.035674464435919345 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset7)) +
    0.0316445026422713 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset8)) +
    0.027609165347242497 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset9)) +
    0.02369302131075688 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset10)) +
    0.01999850367056625 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset11)) +
    0.01660282257394322 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset12)) +
    0.013557229546363764 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset13)) +
    0.010888336930398734 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset14)) +
    0.008601030040505943 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset15)) +
    0.006682426202978858 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset16)) +
    0.005106330298268357 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset17)) +
    0.0038376966276293194 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset18)) +
    0.0028367111171657207 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset19))
  );
}
