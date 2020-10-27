function doubleAll(numbers) {
    
    return numbers.map(function(num) {
        return num * 2
      })

  }

  module.exports = doubleAll


  /*Site - Mapping an array of numbers using a function containing an argument
The following code shows how map works when a function requiring one argument is used with it. The argument will automatically be assigned from each element of the array as map loops through the original array.

let numbers = [1, 4, 9]
let doubles = numbers.map(function(num) {
  return num * 2
})

// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]*/
/*Official 

    module.exports = function doubleAll(numbers) {
      return numbers.map(function double(num) {
        return num * 2
      })
    }
*/