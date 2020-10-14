function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
       return submittedUsers.every(x => goodUsers.some(y => y['id'] === x['id']));
      };
    }

    module.exports = checkUsersValid