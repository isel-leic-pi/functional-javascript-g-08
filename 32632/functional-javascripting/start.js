'use strict'

const repeat = require("./trampoline");


var count = 0
    repeat(function() {
      count++
    }, 100000)

console.log('executed %d times', count)
