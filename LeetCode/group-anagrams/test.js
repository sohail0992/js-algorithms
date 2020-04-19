var groupAnagrams = require('./group-anagrams-solutions');
var expect = require('chai').expect;
var assert = require('assert');

//add object to add custom tests
let testSamples = [
  {
    Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
    output: [["eat","tea","ate"],["tan","nat"],["bat"]]
  }
];

//don't modify this
testSamples.forEach((eachSample,index) => {
  let output = groupAnagrams(eachSample.Input);
  describe('Function output is ' + output + ' which should be equal to test sample output ' + eachSample.output, function() {
    it('Test # ' + index, function() {
      assert.deepEqual(output,eachSample.output);
    });
  });
});

