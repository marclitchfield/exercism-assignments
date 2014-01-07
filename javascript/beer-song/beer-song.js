function bottlesRemaining(number) {
  if (number === 0) { return 'no more bottles of beer'; }
  if (number === 1) { return '1 bottle of beer'; }
  return number + ' bottles of beer';
}

function next(number) {
  return number === 0 ? 99 : number - 1;
}

function pronoun(number) {
  return number === 1 ? 'it' : 'one';
}

function action(number) {
  return number > 0 ? 'Take ' + pronoun(number) + ' down and pass it around'
      : 'Go to the store and buy some more';
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function verse(number) {
  return capitalize(bottlesRemaining(number) + ' on the wall, ' 
      + bottlesRemaining(number) + '.\n' + action(number) + ', '
      + bottlesRemaining(next(number)) + ' on the wall.\n');
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
