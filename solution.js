/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const map = {};
    for (const [index, mapElement] of nums.entries()) {
        if ((target - mapElement) in map) {
            return [map[target - mapElement], index];
        } else {
            map[mapElement] = index;
        }
    }
    return [];
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))