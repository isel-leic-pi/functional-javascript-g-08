module.exports = function arrayMap(arr, fn, thisArg) {
    // SOLUTION GOES HERE
    return arr.reduce(function (accumulator, currentValue, index, arr) { 
        accumulator.push(fn.call(thisArg, currentValue, index, arr))
        return accumulator
      }, [])
  }
  /*
  arr.reduce(callback( accumulator, currentValue[, index[, array]] ) {
  // return result from executing something for accumulator or currentValue
}[, initialValue]);
  */

 /*return arr.reduce(function(acc, item, index, arr) {
    acc.push(fn.call(thisArg, item, index, arr))
    return acc
  }, [])
  
  Write map using reduce
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function(callback, thisArg) {
    return this.reduce(function(mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(thisArg, currentValue, index, array)
      return mappedArray
    }, [])
  }
}

[1, 2, , 3].mapUsingReduce(
  (currentValue, index, array) => currentValue + index + array.length
) // [5, 7, , 10]

  */
 /*Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    module.exports = function arrayMap(arr, fn, thisArg) {
      return arr.reduce(function(acc, item, index, arr) {
        acc.push(fn.call(thisArg, item, index, arr))
        return acc
      }, [])
    }


──────────────────────────────────────────────────────────────────────────────── */