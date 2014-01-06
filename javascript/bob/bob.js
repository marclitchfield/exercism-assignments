var Bob = function() {
  function classifyTone(message) {
    function messageContainsALetter() { return message.toLowerCase() !== message.toUpperCase(); }
    function messageIsAllCaps() { return message === message.toUpperCase(); }
    function messageEndsWith(character) { return message.indexOf(character, message.length - 1) !== -1; }
    function messageIsAllWhitespace() { return message.trim() === ''; }

    return {
      isShouting: function() { return messageContainsALetter() && messageIsAllCaps(); },
      isQuestion: function() { return messageEndsWith('?'); },
      isSilence: function() { return messageIsAllWhitespace(); }
    };
  }

  return {
    hey: function(message) {
      var tone = classifyTone(message);
      if (tone.isShouting()) { return 'Woah, chill out!'; }
      if (tone.isQuestion()) { return 'Sure.'; }
      if (tone.isSilence()) { return 'Fine. Be that way!'; }
      return 'Whatever.';
    }
  };
};

module.exports = Bob;