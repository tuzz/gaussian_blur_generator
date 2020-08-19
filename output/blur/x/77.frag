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

  float one_pixel = u_scaling.x;
  float offset1 = one_pixel * 1.499611298263799;
  float offset2 = one_pixel * 3.4990930292821973;
  float offset3 = one_pixel * 5.498574760300596;
  float offset4 = one_pixel * 7.498056491318994;
  float offset5 = one_pixel * 9.497538222337393;
  float offset6 = one_pixel * 11.497019953355792;
  float offset7 = one_pixel * 13.49650168437419;
  float offset8 = one_pixel * 15.495983415392589;
  float offset9 = one_pixel * 17.495465146410986;
  float offset10 = one_pixel * 19.494946877429385;
  float offset11 = one_pixel * 21.494428608447784;
  float offset12 = one_pixel * 23.493910339466183;
  float offset13 = one_pixel * 25.493392070484582;
  float offset14 = one_pixel * 27.49287380150298;
  float offset15 = one_pixel * 29.49235553252138;
  float offset16 = one_pixel * 31.49183726353978;
  float offset17 = one_pixel * 33.49131899455818;
  float offset18 = one_pixel * 35.49080072557658;
  float offset19 = one_pixel * 37.490282456594976;
  float offset20 = one_pixel * 39.489764187613375;
  float offset21 = one_pixel * 41.48924591863177;
  float offset22 = one_pixel * 43.488727649650166;
  float offset23 = one_pixel * 45.488209380668565;
  float offset24 = one_pixel * 47.48769111168696;
  float offset25 = one_pixel * 49.48717284270536;
  float offset26 = one_pixel * 51.48665457372376;
  float offset27 = one_pixel * 53.48613630474216;
  float offset28 = one_pixel * 55.48561803576056;
  float offset29 = one_pixel * 57.48509976677896;
  float offset30 = one_pixel * 59.48458149779736;
  float offset31 = one_pixel * 61.48406322881576;
  float offset32 = one_pixel * 63.483544959834155;
  float offset33 = one_pixel * 65.48302669085255;
  float offset34 = one_pixel * 67.48250842187095;
  float offset35 = one_pixel * 69.48199015288935;
  float offset36 = one_pixel * 71.48147188390774;
  float offset37 = one_pixel * 73.48095361492615;
  float offset38 = one_pixel * 75.48043534594454;

  f_color = (
    0.001357394006192292 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset38, coords.y)) +
    0.0015841493937519613 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset37, coords.y)) +
    0.0018411261418093722 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset36, coords.y)) +
    0.0021309256391519047 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset35, coords.y)) +
    0.002456125324621906 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset34, coords.y)) +
    0.0028192290508890125 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset33, coords.y)) +
    0.0032226114098509 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset32, coords.y)) +
    0.003668456582015321 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset31, coords.y)) +
    0.0041586925259689 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset30, coords.y)) +
    0.004694921586305616 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset29, coords.y)) +
    0.005278348859997992 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset28, coords.y)) +
    0.00590970991169822 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset27, coords.y)) +
    0.006589199656456467 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset26, coords.y)) +
    0.007316404421911757 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset25, coords.y)) +
    0.008090239349195727 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset24, coords.y)) +
    0.008908893381185572 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset23, coords.y)) +
    0.009769784108103302 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset22, coords.y)) +
    0.01066952468532117 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset21, coords.y)) +
    0.0116039049005221 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset20, coords.y)) +
    0.012567888243936152 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset19, coords.y)) +
    0.013555626526469959 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset18, coords.y)) +
    0.014560493200111458 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset17, coords.y)) +
    0.01557513607083795 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset16, coords.y)) +
    0.016591549568035786 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset15, coords.y)) +
    0.017601166161427394 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset14, coords.y)) +
    0.018594965915162326 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset13, coords.y)) +
    0.019563602560097315 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset12, coords.y)) +
    0.020497543872169715 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset11, coords.y)) +
    0.021387223590782725 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset10, coords.y)) +
    0.022223201619667357 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset9, coords.y)) +
    0.0229963288458324 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset8, coords.y)) +
    0.02369791260960333 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset7, coords.y)) +
    0.02431987867657198 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset6, coords.y)) +
    0.02485492551235964 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset5, coords.y)) +
    0.025296666750182096 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset4, coords.y)) +
    0.025639757970459053 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset3, coords.y)) +
    0.02588000427648156 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset2, coords.y)) +
    0.026014445640020464 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset1, coords.y)) +
    0.0130240829096837 * texture(sampler2D(t_input, s_input), coords) +
    0.026014445640020464 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset1, coords.y)) +
    0.02588000427648156 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset2, coords.y)) +
    0.025639757970459053 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset3, coords.y)) +
    0.025296666750182096 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset4, coords.y)) +
    0.02485492551235964 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset5, coords.y)) +
    0.02431987867657198 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset6, coords.y)) +
    0.02369791260960333 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset7, coords.y)) +
    0.0229963288458324 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset8, coords.y)) +
    0.022223201619667357 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset9, coords.y)) +
    0.021387223590782725 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset10, coords.y)) +
    0.020497543872169715 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset11, coords.y)) +
    0.019563602560097315 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset12, coords.y)) +
    0.018594965915162326 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset13, coords.y)) +
    0.017601166161427394 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset14, coords.y)) +
    0.016591549568035786 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset15, coords.y)) +
    0.01557513607083795 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset16, coords.y)) +
    0.014560493200111458 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset17, coords.y)) +
    0.013555626526469959 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset18, coords.y)) +
    0.012567888243936152 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset19, coords.y)) +
    0.0116039049005221 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset20, coords.y)) +
    0.01066952468532117 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset21, coords.y)) +
    0.009769784108103302 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset22, coords.y)) +
    0.008908893381185572 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset23, coords.y)) +
    0.008090239349195727 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset24, coords.y)) +
    0.007316404421911757 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset25, coords.y)) +
    0.006589199656456467 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset26, coords.y)) +
    0.00590970991169822 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset27, coords.y)) +
    0.005278348859997992 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset28, coords.y)) +
    0.004694921586305616 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset29, coords.y)) +
    0.0041586925259689 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset30, coords.y)) +
    0.003668456582015321 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset31, coords.y)) +
    0.0032226114098509 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset32, coords.y)) +
    0.0028192290508890125 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset33, coords.y)) +
    0.002456125324621906 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset34, coords.y)) +
    0.0021309256391519047 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset35, coords.y)) +
    0.0018411261418093722 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset36, coords.y)) +
    0.0015841493937519613 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset37, coords.y)) +
    0.001357394006192292 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset38, coords.y))
  );
}
