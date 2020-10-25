function reduce(arr, fn, initial) {
    return fn(previousValue, currentValue, index , arr)
  }

  module.exports = reduce