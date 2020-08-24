/**
 * @param {number[]} arr
 * @return {number}
 */
'use strict';

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let donotConsiderForSum = null;
    let sum = 0;
    let allSums = [];
    for(let i = 0;i < arr.length;i++) {
        for(let j = 0;j< arr.length;j++) {
            if(i !== j) {
               sum = sum + arr[j];
            }
        }
        allSums.push(sum);
        sum = 0;
    }
    return `${Math.min(...allSums)} ${Math.max(...allSums)}`;
}

function main(arr) {
  return miniMaxSum(arr);
}

module.exports = main;