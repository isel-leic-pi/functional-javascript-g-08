'use strict'

function repeat(operation, num) {
	
  if(num <= 0)
	return
  
  for(let i=0;i<num;i++)
	operation()
}


// Do not remove the line below
module.exports = repeat


/*
Solução dada

module.exports = function doubleAll(numbers) {
      return numbers.map(function double(num) {
        return num * 2
      })
    }

*/