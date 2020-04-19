// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let binary = N.toString(2);
  let zeroCount = 0;
  let highestCount = 0;
  for(let i = 0;i < binary.length;i++) {
      if(binary.charAt(i) == 0) {
          zeroCount++;
      } else {
          if(zeroCount > highestCount) {
             highestCount = zeroCount;  
          }
          zeroCount = 0;
      }
  }
  return highestCount;
}

module.exports = solution;