'use strict'

function getShortMessages(messages) {
 
	let filtrada =  messages.filter(
		function filtro(obj) {
			return obj.message.length < 50
	  })
	  
	return filtrada.map( msg => msg.message)
}

module.exports = getShortMessages

//message => message.message.length < 50

/*
Solução dada

module.exports = function getShortMessages(messages) {
      return messages.filter(function(item) {
        return item.message.length < 50
      }).map(function(item) {
        return item.message
      })
    }

*/