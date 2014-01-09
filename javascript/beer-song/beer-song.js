function Verse(number) {

  function bottlesRemaining(nextNumber) {
    var remaining = nextNumber !== undefined ? nextNumber : number;
    if (remaining === 0) { return 'no more bottles of beer'; }
    if (remaining === 1) { return '1 bottle of beer'; }
    return remaining + ' bottles of beer';
  }

  function next() {
    return number === 0 ? 99 : number - 1;
  }

  function pronoun() {
    return number === 1 ? 'it' : 'one';
  }

  function action() {
    if (number > 0) { return 'Take ' + pronoun() + ' down and pass it around'; }
    return 'Go to the store and buy some more';
  }

  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  var text = capitalize(bottlesRemaining() + ' on the wall, ' 
          + bottlesRemaining() + '.\n' + action() + ', '
          + bottlesRemaining(next()) + ' on the wall.\n');

  return {
    text: text
  };
}

function verse(number) {
  return new Verse(number).text;
}

function sing(fromNumber, toNumber) {
  if (fromNumber > (toNumber || 0)) {
    return verse(fromNumber) + '\n' + sing(fromNumber - 1, toNumber);
  }
  return verse(fromNumber);
}

module.exports = {
  verse: verse,
  sing: sing
};
