
var moveZeroes = function(nums) {
  for(let i = 0;i< nums.length;i++) {
      if(nums[i] === 0) {
          nums.splice(i,1);//0
          nums.push(0);
        
      }
  }
 return nums; 
};

module.exports = moveZeroes;