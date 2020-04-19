/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
  let hash = {};
  for(let i = 0;i< arr.length;i++) {
      if(hash[arr[i]]) {
         hash[arr[i]]++;
      } else {
          hash[arr[i]] = 1;
      }
  }
 let result = 0;
  for(let key in hash) {
      if(hash[parseInt(key) + 1]) {
        result = result+=hash[key];
      }
  }
  return result;
};

module.exports = countElements;