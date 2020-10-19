function getDependencies(tree,arr) {
    // SOLUTION GOES HERE
    // Note: Feel free to add additional arguments
    // to this function for use with recursive calls.
    // Or not! There are many ways to recurse.
   
    if(!tree) return
    
    if(!arr) arr = []
    
    Object.keys(tree).forEach(obj => {
        if(tree[obj].version) arr.push(obj+'@'+tree[obj].version)
        
        if(typeof(tree[obj]) == 'object'){
            getDependencies(tree[obj],arr)
        }
            
    })
    
    return arr.filter((array,index,element) => element.indexOf(array) === index ).sort()
  }

  module.exports = getDependencies

  /** PROVIDED SOLUTION
   * function getDependencies(mod, result) {
      result = result || []
      var dependencies = mod && mod.dependencies || []
      Object.keys(dependencies).forEach(function(dep) {
        var key = dep + '@' + mod.dependencies[dep].version
        if (result.indexOf(key) === -1) result.push(key)
        getDependencies(mod.dependencies[dep], result)
      })
      return result.sort()
    }
   * 
   * 
   */