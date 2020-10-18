function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return
    operation()
    return () => repeat(operation, --num) //** Soe the function isn't immediatly called, I must return an anonymous function */
  }

  /** What a trampoline function does is call a recursive function, step by step in order for it to not be called recursively  */
  function trampoline(fn) 
  {
    let func = fn(arguments)
    
    while(typeof(func) === 'function') /** When a recursive function end, due to line 2, it doesn't return itself no more */
        func = func()
    return func
  }

  module.exports = function(operation, num) {
    // You probably want to call your trampoline here!
    return trampoline(repeat(operation, num))
  }