/**
 * Implement binary search if has target item return index of that item if not return -1
 * @param arr {Array}
 * @param target {any}
 * @param start {number}
 * @param stop  {number}
 */
const binarySearchRecursive = (arr, target, start = 0, stop = arr.length -1) => {
  if (start > stop) {
    return -1; // Target not found
  }

  const mid = Math.floor((start + stop) / 2);

  if (arr[mid] === target) {
    return mid; // index of target search
  } else if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, start, mid -1);
  } else {
    return binarySearchRecursive(arr, target, mid + 1, stop);
  }
}

console.log('Result of 16 in [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]:', binarySearchRecursive([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 16));
// Output: Result of 16 in [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]: 4
console.log('Result of 23 in [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]:', binarySearchRecursive([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23));
// Output: Result of 23 in [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]: 5
console.log('Result of 38 in [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]:', binarySearchRecursive([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 38));
// Output: Result of 38 in [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]: 6
console.log('Result of 91 in [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]:', binarySearchRecursive([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 91));
// Output: Result of 91 in [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]: 9
console.log('Result of 3 in [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]:', binarySearchRecursive([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 3));
// Output: Result of 3 in [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]: -1
