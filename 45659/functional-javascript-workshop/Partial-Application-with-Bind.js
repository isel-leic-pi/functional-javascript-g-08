'use strict'

function logger(namespace) {
	
	return console.log.bind(null, namespace)
}

    module.exports = logger

/*
Solução dada

module.exports = function(namespace) {
      return console.log.bind(console, namespace)
    }

*/