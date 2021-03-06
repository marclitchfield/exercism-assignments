var Message = function(text) {
  return {
    containsALetter: function() { return text.toLowerCase() !== text.toUpperCase(); },
    isAllCaps: function() { return text === text.toUpperCase(); },
    endsWith: function(character) { return text.slice(-1) === character; },
    isAllWhitespace: function() { return text.trim() === ''; }
  };
};

var Tone = function(text) {
  var message = new Message(text);
  return {
    isShouting: function() { return message.containsALetter() && message.isAllCaps(); },
    isQuestion: function() { return message.endsWith('?'); },
    isSilence: function() { return message.isAllWhitespace(); }
  };
};

var Bob = function() {
  return {
    hey: function(text) {
      var tone = new Tone(text);
      if (tone.isShouting()) { return 'Woah, chill out!'; }
      if (tone.isQuestion()) { return 'Sure.'; }
      if (tone.isSilence()) { return 'Fine. Be that way!'; }
      return 'Whatever.';
    }
  };
};

module.exports = Bob;