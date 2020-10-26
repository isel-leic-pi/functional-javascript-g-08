function duckCount() {
    // SOLUTION GOES HERE
    var args = Array.prototype.slice.call(arguments).filter(arg => Object.hasOwnProperty.call(arg,'quack')).length;
    return args
    
      }
  module.exports = duckCount

  /*Your solution to Basic: Call passed!

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    function duckCount() {
      return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
      }).length
    }

    module.exports = duckCount


──────────────────────────────────────────────────────────────────────────────── */