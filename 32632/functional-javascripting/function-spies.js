var slice = Array.prototype.slice

function Spy(target, method) {
    
    /**
     * This is a global variable. There should be a better way to do this
     */
    count = 0;
    
    let func = target[method]
    
    target[method] = function()
    {
        count++
        func.call(this,arguments[0]) /** call VS apply ?? */ /** Does it work with function with more than one argument? */
    }

    return this
  }

  module.exports = Spy


  /**   PROVIDED SOLUTION
   * 
   * function Spy(target, method) {
      var originalFunction = target[method]

      // use an object so we can pass by reference, not value
      // i.e. we can return result, but update count from this scope
      var result = {
        count: 0
      }

      // replace method with spy method
      target[method] = function() {
        result.count++ // track function was called
        return originalFunction.apply(this, arguments) // invoke original function
      }

      return result
    }
   * 
   */