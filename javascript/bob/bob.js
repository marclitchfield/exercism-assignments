var Bob = function() {
  function Message(text) {
    return {
      containsALetter: function() { return text.toLowerCase() !== text.toUpperCase(); },
      isAllCaps: function() { return text === text.toUpperCase(); },
      endsWith: function(character) { return text.charAt(text.length - 1) === character; },
      isAllWhitespace: function() { return text.trim() === ''; }
    };
  }

  function Tone(text) {
    var message = new Message(text);
    return {
      isShouting: function() { return message.containsALetter() && message.isAllCaps(); },
      isQuestion: function() { return message.endsWith('?'); },
      isSilence: function() { return message.isAllWhitespace(); }
    };
  }

  return {
    hey: function(inputText) {
      var tone = new Tone(inputText);
      if (tone.isShouting()) { return 'Woah, chill out!'; }
      if (tone.isQuestion()) { return 'Sure.'; }
      if (tone.isSilence()) { return 'Fine. Be that way!'; }
      return 'Whatever.';
    }
  };
};

module.exports = Bob;