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
  float offset1 = one_pixel * 1.4997562956945574;
  float offset2 = one_pixel * 3.4994313566206334;
  float offset3 = one_pixel * 5.49910641754671;
  float offset4 = one_pixel * 7.498781478472786;
  float offset5 = one_pixel * 9.498456539398862;
  float offset6 = one_pixel * 11.498131600324939;
  float offset7 = one_pixel * 13.497806661251015;
  float offset8 = one_pixel * 15.497481722177092;
  float offset9 = one_pixel * 17.49715678310317;
  float offset10 = one_pixel * 19.496831844029245;
  float offset11 = one_pixel * 21.49650690495532;
  float offset12 = one_pixel * 23.496181965881398;
  float offset13 = one_pixel * 25.495857026807474;
  float offset14 = one_pixel * 27.49553208773355;
  float offset15 = one_pixel * 29.495207148659627;
  float offset16 = one_pixel * 31.494882209585704;
  float offset17 = one_pixel * 33.49455727051178;
  float offset18 = one_pixel * 35.49423233143786;
  float offset19 = one_pixel * 37.49390739236393;
  float offset20 = one_pixel * 39.49358245329001;
  float offset21 = one_pixel * 41.49325751421608;
  float offset22 = one_pixel * 43.49293257514216;
  float offset23 = one_pixel * 45.492607636068236;
  float offset24 = one_pixel * 47.492282696994316;
  float offset25 = one_pixel * 49.49195775792039;
  float offset26 = one_pixel * 51.49163281884647;
  float offset27 = one_pixel * 53.49130787977254;
  float offset28 = one_pixel * 55.49098294069862;
  float offset29 = one_pixel * 57.490658001624695;
  float offset30 = one_pixel * 59.490333062550775;
  float offset31 = one_pixel * 61.49000812347685;
  float offset32 = one_pixel * 63.48968318440293;
  float offset33 = one_pixel * 65.489358245329;
  float offset34 = one_pixel * 67.48903330625508;
  float offset35 = one_pixel * 69.48870836718115;
  float offset36 = one_pixel * 71.48838342810723;
  float offset37 = one_pixel * 73.4880584890333;
  float offset38 = one_pixel * 75.48773354995939;
  float offset39 = one_pixel * 77.48740861088545;
  float offset40 = one_pixel * 79.48708367181153;
  float offset41 = one_pixel * 81.48675873273761;
  float offset42 = one_pixel * 83.48643379366369;
  float offset43 = one_pixel * 85.48610885458976;
  float offset44 = one_pixel * 87.48578391551584;
  float offset45 = one_pixel * 89.48545897644192;
  float offset46 = one_pixel * 91.485134037368;
  float offset47 = one_pixel * 93.48480909829406;
  float offset48 = one_pixel * 95.48448415922014;

  f_color = (
    0.001065043441045076 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset48, coords.y)) +
    0.0012042551180908836 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset47, coords.y)) +
    0.001358125382988601 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset46, coords.y)) +
    0.001527676726879922 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset45, coords.y)) +
    0.001713930996294653 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset44, coords.y)) +
    0.001917898060575938 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset43, coords.y)) +
    0.0021405632481616035 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset42, coords.y)) +
    0.002382873608964061 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset41, coords.y)) +
    0.0026457230895122123 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset40, coords.y)) +
    0.0029299367385317563 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset39, coords.y)) +
    0.0032362540926679224 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset38, coords.y)) +
    0.0035653119244250576 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset37, coords.y)) +
    0.003917626566353656 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset36, coords.y)) +
    0.004293576056228424 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset35, coords.y)) +
    0.004693382376546924 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset34, coords.y)) +
    0.00511709408721924 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset33, coords.y)) +
    0.0055645696718864 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset32, coords.y)) +
    0.006035461934986965 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset31, coords.y)) +
    0.006529203797620176 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset30, coords.y)) +
    0.0070449958446384565 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset29, coords.y)) +
    0.007581795972555541 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset28, coords.y)) +
    0.008138311477227905 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset27, coords.y)) +
    0.00871299390146857 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset26, coords.y)) +
    0.009304036935583978 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset25, coords.y)) +
    0.009909377628295808 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset24, coords.y)) +
    0.01052670112185493 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset23, coords.y)) +
    0.011153449073843217 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset22, coords.y)) +
    0.011786831869898375 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset21, coords.y)) +
    0.012423844667327695 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset20, coords.y)) +
    0.013061287240461314 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset19, coords.y)) +
    0.013695787525997559 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset18, coords.y)) +
    0.014323828692049461 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset17, coords.y)) +
    0.01494177947978871 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset16, coords.y)) +
    0.015545927493274322 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset15, coords.y)) +
    0.01613251504307243 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset14, coords.y)) +
    0.016697777084445233 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset13, coords.y)) +
    0.01723798073298276 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset12, coords.y)) +
    0.017749465791235354 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset11, coords.y)) +
    0.018228685680683202 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset10, coords.y)) +
    0.01867224814554747 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset9, coords.y)) +
    0.019076955079547608 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset8, coords.y)) +
    0.01943984082448925 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset7, coords.y)) +
    0.019758208300952027 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset6, coords.y)) +
    0.02002966235641584 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset5, coords.y)) +
    0.020252139754641414 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset4, coords.y)) +
    0.020423935281372964 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset3, coords.y)) +
    0.02054372350447941 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset2, coords.y)) +
    0.020610575800193185 * texture(sampler2D(t_input, s_input), vec2(coords.x - offset1, coords.y)) +
    0.010313661553393073 * texture(sampler2D(t_input, s_input), coords) +
    0.020610575800193185 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset1, coords.y)) +
    0.02054372350447941 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset2, coords.y)) +
    0.020423935281372964 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset3, coords.y)) +
    0.020252139754641414 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset4, coords.y)) +
    0.02002966235641584 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset5, coords.y)) +
    0.019758208300952027 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset6, coords.y)) +
    0.01943984082448925 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset7, coords.y)) +
    0.019076955079547608 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset8, coords.y)) +
    0.01867224814554747 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset9, coords.y)) +
    0.018228685680683202 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset10, coords.y)) +
    0.017749465791235354 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset11, coords.y)) +
    0.01723798073298276 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset12, coords.y)) +
    0.016697777084445233 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset13, coords.y)) +
    0.01613251504307243 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset14, coords.y)) +
    0.015545927493274322 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset15, coords.y)) +
    0.01494177947978871 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset16, coords.y)) +
    0.014323828692049461 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset17, coords.y)) +
    0.013695787525997559 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset18, coords.y)) +
    0.013061287240461314 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset19, coords.y)) +
    0.012423844667327695 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset20, coords.y)) +
    0.011786831869898375 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset21, coords.y)) +
    0.011153449073843217 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset22, coords.y)) +
    0.01052670112185493 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset23, coords.y)) +
    0.009909377628295808 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset24, coords.y)) +
    0.009304036935583978 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset25, coords.y)) +
    0.00871299390146857 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset26, coords.y)) +
    0.008138311477227905 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset27, coords.y)) +
    0.007581795972555541 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset28, coords.y)) +
    0.0070449958446384565 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset29, coords.y)) +
    0.006529203797620176 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset30, coords.y)) +
    0.006035461934986965 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset31, coords.y)) +
    0.0055645696718864 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset32, coords.y)) +
    0.00511709408721924 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset33, coords.y)) +
    0.004693382376546924 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset34, coords.y)) +
    0.004293576056228424 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset35, coords.y)) +
    0.003917626566353656 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset36, coords.y)) +
    0.0035653119244250576 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset37, coords.y)) +
    0.0032362540926679224 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset38, coords.y)) +
    0.0029299367385317563 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset39, coords.y)) +
    0.0026457230895122123 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset40, coords.y)) +
    0.002382873608964061 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset41, coords.y)) +
    0.0021405632481616035 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset42, coords.y)) +
    0.001917898060575938 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset43, coords.y)) +
    0.001713930996294653 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset44, coords.y)) +
    0.001527676726879922 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset45, coords.y)) +
    0.001358125382988601 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset46, coords.y)) +
    0.0012042551180908836 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset47, coords.y)) +
    0.001065043441045076 * texture(sampler2D(t_input, s_input), vec2(coords.x + offset48, coords.y))
  );
}
