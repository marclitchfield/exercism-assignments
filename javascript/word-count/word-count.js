var splitIntoLowercaseWords = function(text) {
  var lowercaseWords = text.toLowerCase().split(/\W+/);
  return lowercaseWords.filter(function whereExists(word) { 
    return word !== '';
  });
};

var wordCounts = function(text) {
  var counts = {};
  var words = splitIntoLowercaseWords(text);
  words.forEach(function incrementCountForWord(word) { 
    counts[word] = (counts[word] || 0) + 1; 
  });
  return counts;
};

module.exports = wordCounts;