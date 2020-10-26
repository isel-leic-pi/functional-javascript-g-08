function loadUsers(userIds, load, done) {
    var users = []
    for (var i = 0; i < userIds.length; i++) {
      users.push(load(userIds[i]))
    }
    return done(users) 
  }
  module.exports = loadUsers
/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    function loadUsers(userIds, load, done) {
      var completed = 0
      var users = []
      userIds.forEach(function(id, index) {
        load(id, function(user) {
          users[index] = user
          if (++completed === userIds.length) return done(users)
        })
      })
    }

    module.exports = loadUsers


────────────────────────────────────────────────────────────────────────────────
*/