// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let chars = S.split('');
  let nextChar = '';
  let stack = [];
  for(let char of chars) {
      switch(char) {
          case ']':
              if(isEmpty(stack) || stack.pop() !== '[') {
                return 0;
              }
              break;
          case ')':
              if(isEmpty(stack) || stack.pop() !== '(') {
                return 0;
              }
              break;
          case '}':
              if(isEmpty(stack) || stack.pop() !== '{') {
                return 0;
              }
              break;
          default: 
              stack.push(char);
              break;
      }
  }
  return (isEmpty(stack)) ? 1 : 0;
}

function isEmpty(stack) { 
  return stack.length == 0; 
}

module.exports = solution;