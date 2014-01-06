var Anagram = function(word) {
  var sortLetters = function(word) {
    return word.toLowerCase().split('').sort().join('');
  };

  var sortedLetters = sortLetters(word);

  var isAnagram = function(testWord) {
    return testWord !== word && sortLetters(testWord) === sortedLetters;
  };

  var matchTestWords = function(testWords) {
    return testWords.filter(isAnagram);
  };

  return {
    match: matchTestWords
  };
};

module.exports = Anagram;