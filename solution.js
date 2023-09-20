/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const numToIndex = {}; // A map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        console.log(numToIndex)
        if (complement in numToIndex) {
            return [numToIndex[complement], i];
        }

        numToIndex[nums[i]] = i;
    }

    return []; // Return an empty array if no solution is found
};

console.log(twoSum([3,3], 6))