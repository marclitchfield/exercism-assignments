var Word = function(letters) {
  var sortedLettersInWord = sortedLetters(letters);

  function sortedLetters(letters) {
    return letters.toLowerCase().split('').sort().join('');
  }

  return {
    isDifferentThan: function(otherWord) {
      return letters.toLowerCase() !== otherWord.toLowerCase();
    },
    hasSameLettersAs: function(otherWord) {
      return sortedLettersInWord === sortedLetters(otherWord);
    }
  };
}

var Anagram = function(letters) {
  var word = new Word(letters);

  function isAnagramOf(testWord) {
    return word.isDifferentThan(testWord) && word.hasSameLettersAs(testWord);
  }

  return {
    match: function(testWords) {
      return testWords.filter(isAnagramOf);
    }
  };
};

module.exports = Anagram;