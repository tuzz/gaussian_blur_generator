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
  float offset1 = one_pixel * 1.4975124378109452;
  float offset2 = one_pixel * 3.494195688225539;
  float offset3 = one_pixel * 5.490878938640133;
  float offset4 = one_pixel * 7.487562189054726;
  float offset5 = one_pixel * 9.48424543946932;
  float offset6 = one_pixel * 11.480928689883914;
  float offset7 = one_pixel * 13.477611940298507;
  float offset8 = one_pixel * 15.474295190713102;
  float offset9 = one_pixel * 17.470978441127695;
  float offset10 = one_pixel * 19.46766169154229;
  float offset11 = one_pixel * 21.46434494195688;
  float offset12 = one_pixel * 23.461028192371476;
  float offset13 = one_pixel * 25.45771144278607;
  float offset14 = one_pixel * 27.454394693200662;
  float offset15 = one_pixel * 29.451077943615257;

  gl_FragColor = (
    0.0036709436835386964 * texture2D(u_texture, vec2(coords.x - offset15, coords.y)) +
    0.005360514138030157 * texture2D(u_texture, vec2(coords.x - offset14, coords.y)) +
    0.007621393961305801 * texture2D(u_texture, vec2(coords.x - offset13, coords.y)) +
    0.01055055241232009 * texture2D(u_texture, vec2(coords.x - offset12, coords.y)) +
    0.014221366730892289 * texture2D(u_texture, vec2(coords.x - offset11, coords.y)) +
    0.018665700868392816 * texture2D(u_texture, vec2(coords.x - offset10, coords.y)) +
    0.0238558303041023 * texture2D(u_texture, vec2(coords.x - offset9, coords.y)) +
    0.02968940176308116 * texture2D(u_texture, vec2(coords.x - offset8, coords.y)) +
    0.03598101472865087 * texture2D(u_texture, vec2(coords.x - offset7, coords.y)) +
    0.04246369367391549 * texture2D(u_texture, vec2(coords.x - offset6, coords.y)) +
    0.04880236394835818 * texture2D(u_texture, vec2(coords.x - offset5, coords.y)) +
    0.054619534121116434 * texture2D(u_texture, vec2(coords.x - offset4, coords.y)) +
    0.05953103872394518 * texture2D(u_texture, vec2(coords.x - offset3, coords.y)) +
    0.06318740921298961 * texture2D(u_texture, vec2(coords.x - offset2, coords.y)) +
    0.0653147890995362 * texture2D(u_texture, vec2(coords.x - offset1, coords.y)) +
    0.03292890525964948 * texture2D(u_texture, coords) +
    0.0653147890995362 * texture2D(u_texture, vec2(coords.x + offset1, coords.y)) +
    0.06318740921298961 * texture2D(u_texture, vec2(coords.x + offset2, coords.y)) +
    0.05953103872394518 * texture2D(u_texture, vec2(coords.x + offset3, coords.y)) +
    0.054619534121116434 * texture2D(u_texture, vec2(coords.x + offset4, coords.y)) +
    0.04880236394835818 * texture2D(u_texture, vec2(coords.x + offset5, coords.y)) +
    0.04246369367391549 * texture2D(u_texture, vec2(coords.x + offset6, coords.y)) +
    0.03598101472865087 * texture2D(u_texture, vec2(coords.x + offset7, coords.y)) +
    0.02968940176308116 * texture2D(u_texture, vec2(coords.x + offset8, coords.y)) +
    0.0238558303041023 * texture2D(u_texture, vec2(coords.x + offset9, coords.y)) +
    0.018665700868392816 * texture2D(u_texture, vec2(coords.x + offset10, coords.y)) +
    0.014221366730892289 * texture2D(u_texture, vec2(coords.x + offset11, coords.y)) +
    0.01055055241232009 * texture2D(u_texture, vec2(coords.x + offset12, coords.y)) +
    0.007621393961305801 * texture2D(u_texture, vec2(coords.x + offset13, coords.y)) +
    0.005360514138030157 * texture2D(u_texture, vec2(coords.x + offset14, coords.y)) +
    0.0036709436835386964 * texture2D(u_texture, vec2(coords.x + offset15, coords.y))
  );
}