/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i ++) {
    console.log(map)
    console.log(map[nums[i]])
    if (map[nums[i]]) {
      return true;
    } else {
      map[nums[i]] = 1
    }
  }
  return false
};
console.log(containsDuplicate([1,2,3,1]));