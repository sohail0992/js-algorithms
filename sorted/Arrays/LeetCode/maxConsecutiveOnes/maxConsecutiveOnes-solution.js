var findMaxConsecutiveOnes = function(nums) {
  // [1,1,0,1,1,1]
 // [1,0,1,1,0,1]
 let lastCount = 0;
 let count = 0;
 for(let i =0;i<nums.length;i++) {
     if(nums[i] === 1) {
       count++;
       if(count > lastCount) {
         lastCount = count;  //2//3
       }
     } else {
       count = 0;
     }
 }
 return lastCount;
};

module.exports = findMaxConsecutiveOnes;