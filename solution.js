/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    let low = 0, high = nums.length -1
    while (low < high) {
        let mid = low + Math.floor((high - low + 1) /2)
        if (target < nums[mid]) {
            high = mid - 1;
        } else {
            low = mid;
        }
    }
    return nums[low] === target ? low : -1
};

//nums = [-1,0,3,5,9,12], target = 9 => 4
console.log(search([-1,0,3,5,9,12], 9))

// nums = [-1,0,3,5,9,12], target = 2 => -1

console.log(search([-1,0,3,5,9,12], 2))