var moveZeroes = require('./move-zeroes-solution');
var expect = require('chai').expect;
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    input: [0,1,0,3,12],
    output: [1,3,12,0,0]
  },
  {
    input: [0,1,0,3,1,0],
    output: [1,3,1,0,0,0]
  },
  {
    input: [0,0,0,0],
    output: [0,0,0,0]
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = moveZeroes(eachSample.input);
  describe('Function output is ' + output + ' which should be equal to test sample output ' + eachSample.output, function() {
    it('Test # ' + index, function() {
      assert.deepEqual(output,eachSample.output);
    });
  });
});

