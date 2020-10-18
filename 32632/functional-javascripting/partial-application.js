var slice = Array.prototype.slice

function logger(namespace) 
{
  return function() 
  {
    args = [namespace].concat(slice.call(arguments))
    console.log.apply(null, args)
  } 
}

/** PROVIDED SOLUTION
* 
*  var slice = Array.prototype.slice

    function logger(namespace) {
      return function() {
        console.log.apply(console, [namespace].concat(slice.call(arguments)))
      }
    }
 * 
*/

module.exports = logger