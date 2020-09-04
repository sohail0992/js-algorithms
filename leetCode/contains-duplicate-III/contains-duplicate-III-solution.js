/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  let isFound = false;
  for(let i = 0; i < nums.length;i++) {
      for(let j = (i+1);j < nums.length;j++) {
          if((j - i) <= k) {
            if(Math.abs(nums[i] - nums[j]) <= t) {
               isFound = true;
               break;
            } 
          } 
      }
  }
  return isFound;
};

module.exports = containsNearbyAlmostDuplicate;

//best solution

// var containsNearbyAlmostDuplicate = function(nums, k, t) {
//   if(t<0) return false;
//   const map = {};
//   const w = t + 1;
  
//   for(let i=0;i<nums.length;i++){
//       const m = getID(nums[i], w);
//       if(m in map) return true;
//       if((m-1) in map && Math.abs(nums[i] - map[m-1]) < w) return true;
//       if((m+1) in map && Math.abs(nums[i] - map[m+1]) < w) return true;
//       map[m] = nums[i];
//       if(i>=k) delete map[getID(nums[i-k], w)];
//   }
//   return false;
// };

// function getID(i, w){
//   return i<0 ? Math.floor((i+1) / w) - 1 : Math.floor(i/w);
//   // return i<0? (i+1)/w - 1 : i/w;
// }
