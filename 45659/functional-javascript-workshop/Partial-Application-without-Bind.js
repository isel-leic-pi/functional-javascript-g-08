'use strict'

var slice = Array.prototype.slice

function logger(namespace) {
	
	return function()
	{
		// aqui o call ao slice serve para copiar os argumentos. porquê?
		let args = [namespace].concat(slice.call(arguments))
	  
		console.log.apply(null, args)
	}
}

    module.exports = logger

/*
Solução dada



*/