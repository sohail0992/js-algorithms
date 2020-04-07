/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hashMap = {};
  for (word of strs) {
      let sortedStr = word.split("").sort().join("");
      if (!hashMap[sortedStr]) {
          hashMap[sortedStr] = [];
      }
      hashMap[sortedStr].push(word)

  }
  return Object.values(hashMap)
};

module.exports = groupAnagrams;