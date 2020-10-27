function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        //use every and after o some
      return submittedUsers.every(subusers => goodUsers.some(goousers => goousers['id'] == subusers['id']))
    };
  }

  module.exports = checkUsersValid


  /*Official**
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