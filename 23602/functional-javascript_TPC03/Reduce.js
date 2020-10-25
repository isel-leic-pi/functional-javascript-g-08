    function countWords(inputWords) {
      return inputWords.reduce(function (allwords, word) { 
        if (word in allwords) {
          allwords[word]++
        }
        else {
          allwords[word] = 1
        }
        return allwords
      }, {})
    }

    module.exports = countWords


    /**OFICIAL**    function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
    }

    module.exports = countWords
*/