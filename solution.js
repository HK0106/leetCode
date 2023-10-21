/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function(heights) {
    heights.push(0);
    let stack = [];
    let result = 0;
    for (let i = 0; i < heights.length; i++) {
        let heightStart = i;
        while (stack.length && stack[stack.length - 1][1] > heights[i]) {
            let [pos, height] = stack.pop();
            result = Math.max(result, (i - pos) * height);
            heightStart = pos;
        }
        stack.push([heightStart, heights[i]]);
    }
    return result;
};

console.log(largestRectangleArea([2,1,5,6,2,3]), 'Expected: 10')
console.log(largestRectangleArea([2,4]), 'Expected: 4')