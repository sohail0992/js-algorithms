var sortedSquares = require('./squaresOfASortedArray-solution');
var expect = require('chai').expect;
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    input: [-4,-1,0,3,10],
    output: [0,1,9,16,100]
  },
  {
    input: [-7,-3,2,3,11],
    output: [4,9,9,49,121]
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = sortedSquares(eachSample.input);
  describe('Function output is ' + output + ' which should be equal to test sample output ' + eachSample.output, function() {
    it('Test # ' + index, function() {
      assert.deepEqual(output,eachSample.output);
    });
  });
});

