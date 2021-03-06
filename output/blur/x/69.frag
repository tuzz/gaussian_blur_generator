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
  float offset1 = one_pixel * 1.4995144059566203;
  float offset2 = one_pixel * 3.498866947232114;
  float offset3 = one_pixel * 5.4982194885076074;
  float offset4 = one_pixel * 7.497572029783101;
  float offset5 = one_pixel * 9.496924571058596;
  float offset6 = one_pixel * 11.496277112334088;
  float offset7 = one_pixel * 13.495629653609582;
  float offset8 = one_pixel * 15.494982194885075;
  float offset9 = one_pixel * 17.49433473616057;
  float offset10 = one_pixel * 19.493687277436063;
  float offset11 = one_pixel * 21.49303981871156;
  float offset12 = one_pixel * 23.49239235998705;
  float offset13 = one_pixel * 25.491744901262546;
  float offset14 = one_pixel * 27.491097442538038;
  float offset15 = one_pixel * 29.490449983813534;
  float offset16 = one_pixel * 31.489802525089026;
  float offset17 = one_pixel * 33.48915506636452;
  float offset18 = one_pixel * 35.48850760764001;
  float offset19 = one_pixel * 37.48786014891551;
  float offset20 = one_pixel * 39.487212690191;
  float offset21 = one_pixel * 41.48656523146649;
  float offset22 = one_pixel * 43.485917772741985;
  float offset23 = one_pixel * 45.485270314017484;
  float offset24 = one_pixel * 47.484622855292976;
  float offset25 = one_pixel * 49.48397539656847;
  float offset26 = one_pixel * 51.48332793784396;
  float offset27 = one_pixel * 53.48268047911946;
  float offset28 = one_pixel * 55.48203302039495;
  float offset29 = one_pixel * 57.48138556167044;
  float offset30 = one_pixel * 59.480738102945935;
  float offset31 = one_pixel * 61.480090644221434;
  float offset32 = one_pixel * 63.479443185496926;
  float offset33 = one_pixel * 65.47879572677242;
  float offset34 = one_pixel * 67.47814826804792;

  f_color = (
    0.0015235293628966932 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset34, coords.y)) +
    0.0018099592561288968 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset33, coords.y)) +
    0.0021391140725812298 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset32, coords.y)) +
    0.0025150493510063955 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset31, coords.y)) +
    0.0029417565859105954 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset30, coords.y)) +
    0.0034230626102635373 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset29, coords.y)) +
    0.003962516261242454 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset28, coords.y)) +
    0.004563263969842633 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset27, coords.y)) +
    0.005227916618312724 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset26, coords.y)) +
    0.0059584107228957016 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset25, coords.y)) +
    0.006755867689401587 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset24, coords.y)) +
    0.007620455517826293 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset23, coords.y)) +
    0.008551257859357453 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset22, coords.y)) +
    0.009546155714229261 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset21, coords.y)) +
    0.010601727263724933 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset20, coords.y)) +
    0.011713171320657157 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset19, coords.y)) +
    0.012874259633749705 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset18, coords.y)) +
    0.014077322776228819 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset17, coords.y)) +
    0.015313273583345605 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset16, coords.y)) +
    0.016571671086833325 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset15, coords.y)) +
    0.01784082665030829 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset14, coords.y)) +
    0.019107952576768554 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset13, coords.y)) +
    0.02035935188974155 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset12, coords.y)) +
    0.021580646347248805 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset11, coords.y)) +
    0.022757038105664085 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset10, coords.y)) +
    0.02387359888735622 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset9, coords.y)) +
    0.02491557910170418 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset8, coords.y)) +
    0.025868728200419494 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset7, coords.y)) +
    0.026719616684016397 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset6, coords.y)) +
    0.02745594967333806 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset5, coords.y)) +
    0.028066861858677992 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset4, coords.y)) +
    0.02854318396035139 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset3, coords.y)) +
    0.02887767157841748 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset2, coords.y)) +
    0.029065188453458585 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset1, coords.y)) +
    0.014556129552187852 * texture(sampler2D(t_input, s_input), coords) +
    0.029065188453458585 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset1, coords.y)) +
    0.02887767157841748 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset2, coords.y)) +
    0.02854318396035139 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset3, coords.y)) +
    0.028066861858677992 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset4, coords.y)) +
    0.02745594967333806 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset5, coords.y)) +
    0.026719616684016397 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset6, coords.y)) +
    0.025868728200419494 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset7, coords.y)) +
    0.02491557910170418 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset8, coords.y)) +
    0.02387359888735622 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset9, coords.y)) +
    0.022757038105664085 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset10, coords.y)) +
    0.021580646347248805 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset11, coords.y)) +
    0.02035935188974155 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset12, coords.y)) +
    0.019107952576768554 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset13, coords.y)) +
    0.01784082665030829 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset14, coords.y)) +
    0.016571671086833325 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset15, coords.y)) +
    0.015313273583345605 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset16, coords.y)) +
    0.014077322776228819 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset17, coords.y)) +
    0.012874259633749705 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset18, coords.y)) +
    0.011713171320657157 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset19, coords.y)) +
    0.010601727263724933 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset20, coords.y)) +
    0.009546155714229261 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset21, coords.y)) +
    0.008551257859357453 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset22, coords.y)) +
    0.007620455517826293 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset23, coords.y)) +
    0.006755867689401587 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset24, coords.y)) +
    0.0059584107228957016 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset25, coords.y)) +
    0.005227916618312724 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset26, coords.y)) +
    0.004563263969842633 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset27, coords.y)) +
    0.003962516261242454 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset28, coords.y)) +
    0.0034230626102635373 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset29, coords.y)) +
    0.0029417565859105954 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset30, coords.y)) +
    0.0025150493510063955 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset31, coords.y)) +
    0.0021391140725812298 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset32, coords.y)) +
    0.0018099592561288968 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset33, coords.y)) +
    0.0015235293628966932 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset34, coords.y))
  );
}
