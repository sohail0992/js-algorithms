// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    N = N.toString(2);
    let count = 0;
    let greatest = -1;
    for (let i = 0; i < N.length; i++) {
        if (N[i] == 0) {
            count++;
        } 
        if (N[i] == 1) {     
            if (count > greatest) {
                greatest = count;
            }
            count = 0;
        }
  
    }
    return greatest;
}


module.exports = solution;