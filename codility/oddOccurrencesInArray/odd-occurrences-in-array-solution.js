// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let s = new Set; 
  A.forEach(v => s.delete(v) || s.add(v));
  return s.values().next().value;
}

module.exports = solution;