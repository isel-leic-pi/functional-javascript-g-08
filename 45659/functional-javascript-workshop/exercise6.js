'use strict'

/*
The reducer function takes four arguments:

Accumulator (acc)
Current Value (cur)
Current Index (idx)
Source Array (src)

Exemplo relevante no site

let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

*/

function countWords(inputWords) {
  
  var obj = {}
  inputWords.reduce(function(acc, cur) {
  	if(obj[cur])
		obj[cur]++
  	else
  		obj[cur] = 1
  
  	return cur
  },null)
  return obj
}

module.exports = countWords


/*
Solução dada

return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }

*/