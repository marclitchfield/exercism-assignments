var Anagram = function(word) {
  var sortedLettersInWord = sortedLetters(word);

  function sortedLetters(word) {
    return word.toLowerCase().split('').sort().join('');
  }

  function areWordsDifferent(word, testWord) {
    return word.toLowerCase() !== testWord.toLowerCase();
  }

  function doWordsHaveSameLetters(word, testWord) {
    return sortedLettersInWord === sortedLetters(testWord);
  }

  function isAnagram(testWord) {
    return areWordsDifferent(word, testWord) && doWordsHaveSameLetters(word, testWord);
  }

  function matchTestWords(testWords) {
    return testWords.filter(isAnagram);
  }

  return {
    match: matchTestWords
  };
};

module.exports = Anagram;