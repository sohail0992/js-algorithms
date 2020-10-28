// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let N = A.length;
   A = A.sort();
   /**
       * When we sort an array there are two possible options for the largest product
       * 1) The largest (the last) three elements
       * 2) Combination of two smallest and the largest elements
       * A pair of negatives multiplied returns a positive, which in combination with 
       * the largest positive element of the array can give the max outcome.
       * Therefore we return the max of options (1) and (2)
       
  */
  return Math.max(A[0] * A[1] * A[N - 1], A[N - 1] * A[N - 2] * A[N - 3]);
}

module.exports = solution;