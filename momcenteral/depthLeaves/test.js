var func = require('./depthLeaves');
var assert = require('assert');
// console.log(output.maxDepth, 'maxDepth')
//add object to add custom tests

//   2
// /   \
// 5     9
// \
// 7
let testSamples = [
  {
    arr1: [2, [5, false, [7, false, false]], [9, false, false]],
    output: 1
  },
  {
    arr1: [2, [5,[6, false, false], [7, [1, false, false], false]], [8,[9, false, false], [12, [0, false, false]]]],
    output: 2
  }
];

//                  2
     //          /   \
     //         5      8
     //        / \    / \
     //       6   7  9   12
     //          /       \
     //         1         0


//don't modify this
testSamples.forEach((eachSample, index) => {
  let depth = func.maxDepth(eachSample.arr1);
  console.log(depth, 'd');
  // let output = func.getLeafCountsAtDepth(eachSample.arr1, depth, 0, 0);
  // // output = func.run(eachSample.arr1);

  // describe('Function output should be equal to test sample output', function () {
  //   it('Test # ' + index, function () {
  //     assert.deepStrictEqual(output, eachSample.output);
  //   });
  // });
});

