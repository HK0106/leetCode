/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    while ( start <= end ) {
        if (numbers[start] + numbers[end] > target) {
            end--;
        } else if (numbers[start] + numbers[end] < target) {
            start++;
        } else {
            return [start+1, end+1];
        }
    }
    return [];
};

console.log(twoSum([2,7,11,15],9))
console.log(twoSum([2,3,4],6))
console.log(twoSum([-1,0],-1))
