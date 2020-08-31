/**
 * @param {number[]} arr
 * @return {number}
 */
'use strict';

// Complete the miniMaxSum function below.
function gradingStudents(grades) {
  // Write your code here
  let reminder = 0;
  let roundedGrades = [];
  let nextMultiple = 0;
  for(let i = 0; i < grades.length;i++) {
    console.log(typeof(grades[i]),grades[i])
    if(grades[i] >= 38) {
      //find next multiple of 5
      //divide number by 5
      reminder = grades[i]/5;
      // round up number to nearest next largest integer.
      reminder = Math.ceil(reminder);
      // multiply reminder by 5 to get next multiple of 5
      nextMultiple = reminder * 5;
      if((nextMultiple - grades[i]) < 3) {
        roundedGrades.push(nextMultiple);
      } else {
        roundedGrades.push(grades[i]);
      }
    } else {
      roundedGrades.push(grades[i]);
    }
  }
  return roundedGrades;
}

function main(arr) {
  return gradingStudents(arr);
}

module.exports = main;