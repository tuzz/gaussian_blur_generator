class GaussianBlurGenerator
  Values = Struct.new(:offsets_d, :weights_d, :offsets_l, :weights_l, :texture_reads, :effective_size, :row_number)

  def self.generate(epsilon)
    row_number = 0
    last_size = 0

    loop do
      row_number += 2

      row = pascal(row_number)
      sum = row.sum
      peak = row[row.size / 2].to_d / sum

      # Remove weights that make negligible difference to the output image.
      row = row.reject { |n| n.to_d / sum < peak * epsilon }
      sum = row.sum

      # If we've already seen a row of this size, skip those that are more truncated.
      next if row.size == last_size
      last_size = row.size

      midpoint = row.size / 2
      next if midpoint.odd?

      weights_d = row.map { |n| n.to_d / sum }[midpoint..]
      offsets_d = (0..midpoint).map(&:to_d)

      break if weights_d[0] == 0 # Precision limit reached

      weights_l = weights_d[1..].each_slice(2).map(&:sum)
      offsets_l = offsets_d[1..].each_slice(2).map do |t1, t2|
        numerator = offsets_d[t1] * weights_d[t1] + offsets_d[t2] * weights_d[t2]
        denominator = weights_d[t1] + weights_d[t2]

        numerator / denominator
      end

      weights_l.unshift(weights_d.first)
      offsets_l.unshift(0.0)
      texture_reads = offsets_l.size * 2 - 1

      yield Values.new(offsets_d, weights_d, offsets_l, weights_l, texture_reads, row.size, row_number)
    end
  end

  def self.pascal(n)
    @cache ||= {}
    @cache[n] ||= (n == 0 ? [1] : [1, *pascal(n - 1).each_cons(2).map(&:sum), 1])
  end
end
