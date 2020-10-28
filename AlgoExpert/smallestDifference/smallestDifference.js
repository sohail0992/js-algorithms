'use strict';

function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
    let count = 0;
    // let smallestDifference = Math.abs(arrayOne[0], arrayTwo[0]);
    for(let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {
            console.log(count++, 'count')
        }
    }
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
  