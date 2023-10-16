//https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const map = {}
    for (let i = 0; i < strs.length; i++) {
        const temp = strs[i].split('').sort().join('');
        if (temp in map) {
            map[temp].push(strs[i]);
        } else {
            map[temp] = [strs[i]];
        }
    }
    return Object.values(map)
};


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]), `expect must be [["bat"],["nat","tan"],["ate","eat","tea"]]`)