'use strict'


function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
	return submittedUsers.every(function(sUser) {
		return goodUsers.some(function(gUser) {
			return sUser.id === gUser.id
		})
	})
  }
}

module.exports = checkUsersValid

/*
Solução dada

module.exports = function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(submittedUser) {
          return goodUsers.some(function(goodUser) {
            return goodUser.id === submittedUser.id
          })
        })
      }
    }

*/