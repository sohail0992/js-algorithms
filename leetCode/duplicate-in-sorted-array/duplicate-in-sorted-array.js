var removeDuplicates = function(nums) {
   if (nums.length <= 1) {
        return nums.length
   }
   let u = 0;
   for (let i = 0; i < nums.length; i++) {
       if (nums[u] != nums[i]) {
           u++;   // u is the index of the next unique element
           nums[u] = nums[i]
       }
   }
   return u + 1;
};

module.exports = removeDuplicates;