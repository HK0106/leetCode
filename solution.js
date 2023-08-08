//https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    let tempString = strs[i].split('').sort().join('')
    if (map[tempString]) {
      map[tempString].push(strs[i]);
    } else {
      map[tempString] = [strs[i]];
    }
  }
  return Object.values(map);
};


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]), `expect must be [["bat"],["nat","tan"],["ate","eat","tea"]]`)