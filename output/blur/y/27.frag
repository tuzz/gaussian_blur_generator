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
  float offset1 = one_pixel * 1.4966887417218544;
  float offset2 = one_pixel * 3.492273730684327;
  float offset3 = one_pixel * 5.487858719646799;
  float offset4 = one_pixel * 7.483443708609271;
  float offset5 = one_pixel * 9.479028697571744;
  float offset6 = one_pixel * 11.474613686534216;
  float offset7 = one_pixel * 13.47019867549669;
  float offset8 = one_pixel * 15.465783664459162;
  float offset9 = one_pixel * 17.461368653421633;
  float offset10 = one_pixel * 19.456953642384107;
  float offset11 = one_pixel * 21.452538631346577;
  float offset12 = one_pixel * 23.44812362030905;
  float offset13 = one_pixel * 25.443708609271525;

  f_color = (
    0.004300319936045439 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset13)) +
    0.006633269194623861 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset12)) +
    0.009873768707922892 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset11)) +
    0.014183846348026 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset10)) +
    0.019664621351571748 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset9)) +
    0.026313579985948816 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset8)) +
    0.03398575188104586 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset7)) +
    0.042369544183803315 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset6)) +
    0.05098772207782066 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset5)) +
    0.05923042743152641 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset4)) +
    0.06642043118925715 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset3)) +
    0.071902471383159 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset2)) +
    0.07514093586807509 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset1)) +
    0.037986620922347517 * texture(sampler2D(t_input, s_input), coords) +
    0.07514093586807509 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset1)) +
    0.071902471383159 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset2)) +
    0.06642043118925715 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset3)) +
    0.05923042743152641 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset4)) +
    0.05098772207782066 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset5)) +
    0.042369544183803315 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset6)) +
    0.03398575188104586 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset7)) +
    0.026313579985948816 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset8)) +
    0.019664621351571748 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset9)) +
    0.014183846348026 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset10)) +
    0.009873768707922892 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset11)) +
    0.006633269194623861 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset12)) +
    0.004300319936045439 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset13))
  );
}
