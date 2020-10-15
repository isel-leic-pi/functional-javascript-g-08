function countWords(inputWords) {
  
  return inputWords.reduce((count,curr) => 
  {
    count[curr] = (count[curr] == null ? 1 : count[curr] + 1);
    return count;
  },{});
}

module.exports = countWords
