function duckCount() {
    // SOLUTION GOES HERE
    var args = Array.prototype.slice.call(arguments);

    var tmp=0;
    console.log(args[0]);
    console.log(args[0].hasOwnProperty('quack'));
    /*if (arguments.duckCount())
      {
        return 1
      }
      return tmp = tmp+1;
*/
  }

  module.exports = duckCount