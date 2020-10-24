'use strict'

function Spy(target, method) {
	//método original
	let originalFunction = target[method]
	
	//contador. tem de ser global, é a melhor maneira?
	var result = {
		count: 0
	}
	
	//substituir por função que conta e chama a anterior
	target[method] = function() {
		result.count++ 
		return originalFunction.apply(this, arguments)
	}
	
	return result
}

module.exports = Spy

/*
Solução dada

function Spy(target, method) {
      var originalFunction = target[method]

      // use an object so we can pass by reference, not value
      // i.e. we can return result, but update count from this scope
      var result = {
        count: 0
      }

      // replace method with spy method
      target[method] = function() {
        result.count++ // track function was called
        return originalFunction.apply(this, arguments) // invoke original function
      }

      return result
    }

    module.exports = Spy
  
*/