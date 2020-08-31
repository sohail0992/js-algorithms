/**
 * @param {number[]} arr
 * @return {number}
 */
'use strict';

function threeNumberSum(array, targetSum) {
    // Write your code here.
      array = array.sort((a,b) => a-b);
      let triplets = [];
      let left = 0;
      let right = 0;
      let currentSum = null;
      for(let i =0; i< array.length - 2; i++) {
          left = i + 1;
          right = array.length - 1;
          while(left < right) {
              currentSum = array[i] + array[left] + array[right];
              if(currentSum === targetSum) {
                  triplets.push([array[i],array[left],array[right]]);
                  left += 1;
                  right -= 1;
              } else if(currentSum < targetSum) {
                  left = left + 1;
              } else if(currentSum > targetSum) {
                  right = right - 1;
              }
          }
      }
      return triplets;
  }
  
// Do not edit the line below.
module.exports  = threeNumberSum;