'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
  let pointer = 0;
  let smallestDifference = Math.abs(arr[pointer] - arr[1]);
  while (arr.length > pointer) {
    for (let i = pointer; i < arr.length-1; i++) {
        const difference = Math.abs(arr[pointer] - arr[i + 1]);
        if (smallestDifference > difference) {
          smallestDifference = difference;
      }
    }
    pointer++;
  }
  return smallestDifference;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = minimumAbsoluteDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
