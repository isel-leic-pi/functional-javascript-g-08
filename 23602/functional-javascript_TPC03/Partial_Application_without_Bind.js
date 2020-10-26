var slice = Array.prototype.slice
    function logger(namespace) {
      // SOLUTION GOES HERE
      //  * namespace: a String to prepend to each message passed to the returned function.
      //console.log('namespace:' + namespace);
      //console.log('arguments:' + arguments[0]);
      return function() 
      {
       let args = [namespace].concat(slice.call(arguments));
       return (console.log.apply(null, args));   
      }    
    }
    module.exports = logger

    /*   Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var slice = Array.prototype.slice

    function logger(namespace) {
      return function() {
        console.log.apply(console, [namespace].concat(slice.call(arguments)))
      }
    }

    module.exports = logger


────────────────────────────────────────────────────────────────────────────────*/