var fibnnacciSumSeries = require('./fibonacci-sum');
var expect = require('chai').expect;
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  // {
  //   N: 4,
  //   output: [0, 1, 1, 2]
  // },
  {
    N: 7,
    output: [-1, -1, -1, 4, -1, 6, 7]
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = fibnnacciSumSeries(eachSample.N);
  describe('Function output should be equal to test sample output', function() {
    it('Test # ' + index, function() {
      assert.deepEqual(output,eachSample.output);
    });
  });
});

