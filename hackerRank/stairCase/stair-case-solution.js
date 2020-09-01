/**
 * @param {number[]} arr
 * @return {number}
 */
'use strict';

// Complete the staircase function below.
function staircase(n) {
    //create array of length n and fill each index with empty string
    const line = Array(n).fill(' ');
    for (let i = n - 1; i >= 0; i--) {
      line[i] = '#';
      //join all array and return as string
      line = line.join('');
      console.log(line);
    }
    return line;
  }

function main(n) {
  return staircase(n);
}

module.exports = main;