/**
 * @param {number[]} arr
 * @return {number}
 */
'use strict';

function birthdayCakeCandles(ar) {
    const maxNumber = Math.max(...ar);
    let allOccuranceOfMax = [];
    for(let i = 0; i < ar.length;i++) {
      if(maxNumber === ar[i]) {
        allOccuranceOfMax.push(ar[i]);
      }
    }
     return allOccuranceOfMax.length;
  }
  

function main(arr) {
  return birthdayCakeCandles(arr);
}

module.exports = main;