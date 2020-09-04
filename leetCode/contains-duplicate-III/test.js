var solution = require('./contains-duplicate-III-solution');
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    arr: [1,2,1,1],
    k: 1,
    t: 0,
    output: true
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = solution(eachSample.arr,eachSample.k,eachSample.t);
  describe('Function output should be equal to test sample output', function() {
    it('Test # ' + index, function() {
      assert.deepStrictEqual(output,eachSample.output);
    });
  });
});

