function loadUsers(userIds, load, done) {
    var users = []
    let index
    let completed = 0
    
    userIds.forEach(id => {
        count = (index === null ? 0 : index + 1) 
        load(id,(result) => 
        {
            if(result !== result) users[index] = result;
            if(++completed === userIds.length)     done(users)
        })
    })
}

module.exports = loadUsers


/** PROPOSED SOLUTION /* HOW IS THE INDEX INCREMENTED????? */
 * 
 *  function loadUsers(userIds, load, done) {
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
 * 
 */