'use strict'

const duckCount = require("./call");


var notDuck = Object.create({quack: true})
var duck = {quack: true}
console.log(duckCount(duck, notDuck)); // 1
