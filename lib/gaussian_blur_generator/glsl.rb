class GaussianBlurGenerator
  def self.glsl(values, axis)
    offsets = values.offsets_l[1..].map.with_index do |offset, index|
      "float offset#{index + 1} = one_pixel * #{offset.to_f};"
    end

    if axis == "x"
      template = "coords.x + offset@, coords.y"
    else
      template = "coords.x, coords.y + offset@"
    end

    positives = values.weights_l[1..].map.with_index do |weight, index|
      "#{weight.to_f} * texture2D(u_texture, vec2(#{template.sub("@", (index + 1).to_s)}))"
    end

    negatives = positives.map { |s| s.sub("+", "-") }

    summation = negatives.reverse + [
      "#{values.weights_l[0].to_f} * texture2D(u_texture, coords)"
    ] + positives

    <<~GLSL
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

        float one_pixel = u_scaling.#{axis};
        #{offsets.join("\n  ")}

        gl_FragColor = (
          #{summation.join(" +\n    ")}
        );
      }
    GLSL
  end
end
