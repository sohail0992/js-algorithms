/**
 * @param {number[]} arr
 * @return {number}
 */
'use strict';

// Complete the miniMaxSum function below.
function timeConversion(s) {
    const chars = s.split('');
    const lastTwoCharacters = chars[chars.length - 2] + chars[chars.length - 1];
    chars[chars.length - 2] = null;
    chars[chars.length - 1] = null
    let firstTwoCharacters = chars[0] + chars[1];
    if(lastTwoCharacters === 'PM' && firstTwoCharacters !== '12') {
      firstTwoCharacters = parseInt(firstTwoCharacters) + 12;
      firstTwoCharacters = firstTwoCharacters.toString().split('');
      chars[0] = firstTwoCharacters[0];
      chars[1] = firstTwoCharacters[1];
    } else if(lastTwoCharacters === 'AM') {
      if(firstTwoCharacters === '12') {
        chars[0] = 0;
        chars[1] = 0;
      }
    }
    return chars.join('');
}

function main(value) {
  return timeConversion(value);
}

module.exports = main;