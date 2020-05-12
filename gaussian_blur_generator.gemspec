Gem::Specification.new do |s|
  s.name        = "gaussian_blur_generator"
  s.version     = "1.1.0"
  s.licenses    = ["MIT"]
  s.summary     = "Gaussian Blur Generator"
  s.description = "Generates fragment shaders that apply a Gaussian blur in an efficient manner."
  s.author      = "Chris Patuzzo"
  s.email       = "chris@patuzzo.co.uk"
  s.homepage    = "https://github.com/tuzz/gaussian_blur_generator"
  s.files       = ["README.md"] + Dir["lib/**/*.*"] + Dir["bin/*"] + Dir["output/*"]
end
