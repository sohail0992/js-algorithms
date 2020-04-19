var twoSum = function(nums, target) {
  const map = new Map()
  for(let i = 0; i<nums.length; i++){
      const complement = target - nums[i]
      if(map.hasOwnProperty(complement)){
          return [map[complement],i]
      }
      map[nums[i]] = i
  }
  return map;
};

module.exports = twoSum;