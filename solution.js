/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    nums = nums.sort((a,b) => a-b);
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        if (nums[low] + nums[high] > target) {
            high--;
        } else if (nums[low] + nums[high] < target) {
            low++;
        } else {
            return [low, high];
        }

    }

};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))