var singleNumber = function(nums) {
  let singleValue = -1;
  let result = [];
  nums.filter((v) => {
      result = nums.filter(eachValue => eachValue === v);
      if(result.length === 1) {
          singleValue = result[0];
      }
  });
  return singleValue
};

module.exports = singleNumber;