module.exports = function(namespace) {
    // SOLUTION GOES HERE
    return console.log.bind(null, namespace)
  }
  /*Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    module.exports = function(namespace) {
      return console.log.bind(console, namespace)
    }


──────────────────────────────────────────────────────────────────────────────── */