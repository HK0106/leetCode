/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
const longestSubsequence = function(arr, difference) {
  let max = 1
  const m = {};
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    m[val] = m[val - difference] ? m[val - difference] + 1 : 1;
    max = Math.max(max, m[val]);
  }
  return max
};