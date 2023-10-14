/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const reduced = nums.reduce((collector, currVal)=>collector.add(currVal), new Set())
  return nums.length !== reduced.size
}
console.log(containsDuplicate([1,2,3,1]));