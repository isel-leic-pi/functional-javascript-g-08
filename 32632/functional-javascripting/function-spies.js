function Spy(target, method) {
    
    target[method] = function() {
        let x = 0;

        
    }
  }

  module.exports = Spy