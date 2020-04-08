/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let length =  nums.length;
    let count = 1;
    for(let i = 0;i< length;i++) {
        if(nums[i] === 0) {
            nums.push(0);     
            nums.splice(i,1);//0
            if(i > -1  && nums[i] === 0 && count <= length) {
              --i;
            }
            count++;
        }
    }
   return nums; 
};



module.exports = moveZeroes;