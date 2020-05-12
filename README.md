## Gaussian Blur Generator

Generates fragment shaders that apply a Gaussian blur in an efficient manner
based on
[this article](http://rastergrid.com/blog/2010/09/efficient-gaussian-blur-with-linear-sampling/).

### Overview

Normally, a blur shader would require N^2 texture reads for a kernel of size N.
By splitting the shader in two (horizontal, then vertical) and applying a linear
sampling technique, we can reduce the number of texture reads to approximately
N, vastly improving the performance of a Gaussian blur. This can be reduced even
further by ignoring values at the edges of kernels that hardly make a difference
to the output image.

### What is this gem?

This gem applies the technique from the article but generates many different
shaders with varying sample sizes. It writes these shaders to files in the
output directory, for example:

- [output/blur/x/17.frag](output/blur/x/17.frag)
- [output/blur/y/17.frag](output/blur/y/17.frag)

These shaders sample the texture image 17 times per pixel. They are equivalent
to a Gaussian blur kernel of size 33 (2N - 1). The largest pre-compiled shader
samples 129 times which is equivalent to a Gaussiain blur of size 257. I could
have generated more but my laptop ran out of RAM after ~12 hours.

You can run `./bin/generate` yourself by cloning the repository or use one of
the pre-generated shaders in the [`output/blur`](output/blur) directory. These
have been generated with an epsilon value of 0.05 which roughly corresponds to
the article, but you can set this yourself if you'd like:

```sh
$ ./bin/generate 0.07
```

This would set the threshold a little higher than the default 0.05.

### How do I use it?

1. Copy the x and y fragment shaders into your project for the kernel size you want.
2. Compile a shader program for each of the fragment shaders
3. Set `u_texture` to the input texture you want to blur
4. Set `u_scaling` base on the pixel size of the output: `[1/width, 1/height, width/height, height/width]`
5. Draw your scene to a framebuffer/texture instead of directly to the screen
6. Apply the first shader program, then draw to the screen with the second

You can apply the shader to regions of the texture if you'd wish, but the
simplest approach is to apply it to a full-screen quad. In which case, a simple
vertex shader like this one will suffice:

```glsl
attribute vec4 a_position;

void main() {
  gl_Position = a_position;
}
```

You may need to edit the [`glsl.rb` file](lib/gaussian_blur_generator/glsl.rb)
to produce shader code that's more appropriate for your project.

### Multiple passes?

You may find it's more efficient to apply multiple passes of a smaller blur
shader than a single pass of a larger one. This depends on a number of factors
including GPU memory, fill rate, etc. In general, two blurs of size N is
equivalent to a single blur of size `sqrt(2) * N`.

Also, since Gaussian blur is a low-pass filter, it works very well with
downsampling. See the article above for more information.

### License

MIT
