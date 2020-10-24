'use strict'

function duckCount() 
{
  return Array.prototype.slice.call(arguments).filter(
	function(arg) {
	
		return Object.prototype.hasOwnProperty.call(arg, 'quack')
	
	}).length;
}

module.exports = duckCount

/*
Solução dada

function duckCount() {
      return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
      }).length
    }

    module.exports = duckCount
*/