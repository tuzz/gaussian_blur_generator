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
  float offset1 = one_pixel * 1.4848484848484849;
  float offset2 = one_pixel * 3.4646464646464645;
  float offset3 = one_pixel * 5.444444444444445;
  float offset4 = one_pixel * 7.424242424242424;
  float offset5 = one_pixel * 9.404040404040405;
  float offset6 = one_pixel * 11.383838383838384;

  f_color = (
    0.01121809948984034 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset6)) +
    0.02631938726462541 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset5)) +
    0.05230252219485956 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset4)) +
    0.08823977317441423 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset3)) +
    0.12660489194589866 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset2)) +
    0.15466448679206415 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y - offset1)) +
    0.08130167827659526 * texture(sampler2D(t_input, s_input), coords) +
    0.15466448679206415 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset1)) +
    0.12660489194589866 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset2)) +
    0.08823977317441423 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset3)) +
    0.05230252219485956 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset4)) +
    0.02631938726462541 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset5)) +
    0.01121809948984034 * texture(sampler2D(t_input, s_input), vec2(coords.x, coords.y + offset6))
  );
}
