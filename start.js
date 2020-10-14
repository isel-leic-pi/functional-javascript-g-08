const inspect = require("./tpc/tpc2-reflection");


function Fruit(name,color) {
  this.name = name
  this.color = color
  this.toString = function(){ return `${this.name} with the color ${this.color}`}
  this.changeColor = function(color) {this.color = color}
}

let apple = new Fruit('Apple','red')

inspect(apple);