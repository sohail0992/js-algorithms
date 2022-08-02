var solution = require('./binary-gap');
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    Input: 1041,
    output: 5
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = solution(eachSample.Input);
  describe('Function output is ' + output + ' which should be equal to test sample output ' + eachSample.output, function() {
    it('Test # ' + index, function() {
      assert.deepStrictEqual(output,eachSample.output);
    });
  });
});


