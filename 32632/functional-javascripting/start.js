'use strict'

const curryN = require("./currying.js");

function add3(one, two, three) {
    return one + two + three
  }

  var curryC = curryN(add3)
  var curryB = curryC(1)
  var curryA = curryB(2)
  console.log(curryA(3)) // => 6
  console.log(curryA(10)) // => 13

  console.log(curryN(add3)(1)(2)(3)) // => 6

