/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const map = {};
  if (nums.length) return false;
  for (const element of nums) {
    if (!map[element]) {
      map[element] = 1;
    } else {
      return true;
    }
    return true;
  }
};
console.log(containsDuplicate([1,2,3,4]));