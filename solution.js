/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (i < j && nums[i] === nums[j]) {
                count++;
            }
        }
    }
    return count;
}

const numIdenticalPairs1 = function(nums) {
    let ans = 0;
    const cnt = {};

    for (let x of A) {
        ans += cnt[x] || 0;
        cnt[x] = (cnt[x] || 0) + 1;
    }

    return ans;
}

console.log(numIdenticalPairs([1,2,3,1,1,3]))
console.log(numIdenticalPairs([1,1,1,1]))
console.log(numIdenticalPairs([1,2,3]))

console.log(numIdenticalPairs1([1,2,3,1,1,3]))
console.log(numIdenticalPairs1([1,1,1,1]))
console.log(numIdenticalPairs1([1,2,3]))