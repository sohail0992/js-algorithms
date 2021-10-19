// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(nums, target) {
  return binarySearch(nums, 0, nums.length -1, target);  
}

function binarySearch(arr, lower, higher, target) {
  if (lower > higher) return -1;
  let mid = parseInt((lower + higher)/2);
  if (arr[mid] === target) {
      return mid;
  }
  // if target greater than mid value return the right half
  if (target > arr[mid]) {
    return binarySearch(arr, (mid + 1), (arr.length - 1), target);
  }  else {
    return binarySearch(arr, lower, (mid - 1), target);
  }
}

module.exports = solution;