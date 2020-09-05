// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  //O(N^2) complexity
  // if(A.length === 0) {
  //   return 0;
  // } else if(A.length === 1) {
  //   return 1;
  // }
  // let uniqueElements = [];
  // for(let i = 0;i <A.length;i++) {
  //     const index = uniqueElements.findIndex(each => each === A[i]);
  //     if(index === -1) {
  //       uniqueElements.push(A[i]);    
  //     }
  // }
  // return uniqueElements.length;
  //O(N)
  return [... new Set(A)].length;
}

module.exports = solution;