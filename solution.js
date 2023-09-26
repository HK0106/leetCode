/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
    const setNums = new Set(nums);
    let numberConsecutive = 0;

    for (const num of nums) {
        if (setNums.has(num + 1)) {
            continue;
        }

        let counter = 1;
        let current = num;

        while (setNums.has(--current)) {
            counter++;
        }

        numberConsecutive = Math.max(counter, numberConsecutive);
    }

    return numberConsecutive;
};

console.log(longestConsecutive([100,4,200,1,3,2]))
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))