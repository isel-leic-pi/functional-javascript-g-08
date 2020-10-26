'use strict'

module.exports = function arrayMap(arr, fn, thisArg) 
{
    return arr.reduce(
		function(acc, item, index, arr) 
		{
			acc.push(
				fn.call(thisArg, item, index, arr))
			return acc
		}
		, [])
}

/*
Solução dada

return arr.reduce(function(acc, item, index, arr) {
    acc.push(fn.call(thisArg, item, index, arr))
    return acc
  }, [])
  
*/