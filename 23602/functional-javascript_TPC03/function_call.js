/*function myFunction() {
    console.log('called my function')
  }*/

module.exports = Function.call.bind(Array.prototype.slice)
/*
## Hints

  * This is absolutely a one liner.
  * Every JavaScript Function inherits methods such as call, apply and bind from the object `Function.prototype`.
  * Function#call executes the value of `this` when it is invoked.  Inside `someFunction.call()`, the value of `this` will be `someFunction`.
  * Function.call itself is a function thus it inherits from `Function.prototype`
  */
 /*
 Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    // Explained:
    // The value of `this` in Function.call is the function
    // that will be executed.
    //
    // Bind returns a new function with the value of `this` fixed
    // to whatever was passed as its first argument.
    //
    // Every function 'inherits' from Function.prototype,
    // thus every function, including call, apply and bind 
    // have the methods call apply and bind.
    //
    // Function.prototype.call === Function.call
    module.exports = Function.call.bind(Array.prototype.slice)


────────────────────────────────────────────────────────────────────────────────
 */