async function repeat(operation, num) {   /** This is completelty diferent than the solution. Is this valid? */
    
    // modify this so it can be interrupted
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  }

  module.exports = repeat



  /** Proposed solution
   * function repeat(operation, num) {
      if (num <= 0) return

      operation()

      // release control every 10 or so
      // iterations.
      // 10 is arbitrary.
      if (num % 10 === 0) {
        setTimeout(function() {
          repeat(operation, --num)
        })
      } else {
        repeat(operation, --num)
      }
    }

    module.exports = repeat
   * 
   */