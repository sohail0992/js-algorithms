var smallestDifference = require('./smallestDifference');
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    Input: {
      array1: [-1, 5, 10, 20, 28, 3],
      array2: [26, 134, 135, 15, 17],
    },
    Output: [28, 26]
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = smallestDifference(eachSample.Input.array1,eachSample.Input.array2);
  describe('Function output is ' + output + ' which should be equal to test sample output ' + eachSample.output, function() {
    it('Test # ' + index, function() {
      assert.deepStrictEqual(output,eachSample.output);
    });
  });
});

