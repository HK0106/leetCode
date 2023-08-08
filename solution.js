//https://leetcode.com/problems/top-k-frequent-elements/
const topKFrequent = function(nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }
  return [...map.keys()].sort((a, b) => map.get(b) - map.get(a)).slice(0, k);
};

console.log(topKFrequent([1,1,1,2,2,3],2),' expect [1,2]');