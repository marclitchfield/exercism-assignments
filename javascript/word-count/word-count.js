var lowercaseWords = function(text) {
  return text.toLowerCase().match(/\w+/g);
};

var wordCounts = function(text) {
  var counts = {};
  var words = lowercaseWords(text);
  words.forEach(function incrementCountForWord(word) { 
    counts[word] = (counts[word] || 0) + 1; 
  });
  return counts;
};

module.exports = wordCounts;