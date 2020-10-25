function repeat(operation, num) {

    operation();
   
     
   
  }

  // Do not remove the line below
  module.exports = repeat

  /*Official* 
  function repeat(operation, num) {
      if (num <= 0) return
      operation()
      return repeat(operation, --num)
    }

    module.exports = repeat
  */