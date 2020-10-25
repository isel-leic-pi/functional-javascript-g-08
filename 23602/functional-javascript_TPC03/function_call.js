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