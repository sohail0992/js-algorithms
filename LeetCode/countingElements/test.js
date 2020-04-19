var countElements = require('./counting-elements-solution');
var expect = require('chai').expect;
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    Input: [1,2,3],
    output: 2//1 and 2 are counted cause 2 and 3 are in arr.
  },
  {
    Input: [1,1,3,3,5,5,7,7],
    output: 0 //No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.
  },
  {
    Input: [1,3,2,3,5,0],
    output: 3 //0, 1 and 2 are counted cause 1, 2 and 3 are in arr.
  }, 
  {
    Input: [1,1,2,2],
    output: 2 //Two 1s are counted cause 2 is in arr.
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = countElements(eachSample.Input);
  describe('Function output is ' + output + ' which should be equal to test sample output ' + eachSample.output, function() {
    it('Test # ' + index, function() {
      assert.deepEqual(output,eachSample.output);
    });
  });
});

