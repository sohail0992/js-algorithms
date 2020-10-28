var solution = require('./distinct-solution');
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    Input: [2, 1, 1, 2, 3, 1],
    output: 3
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


