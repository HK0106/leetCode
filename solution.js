/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
    let L = 0, maxLeft = 0, maxRight = 0, sum = 0;
    let R = height.length -1;

    while (L < R) {
        if (height[L] <= height[R]) {

            if (height[L] > maxLeft) maxLeft = height[L]
            else sum += maxLeft - height[L]
            L++;
        } else {

            if (height[R] > maxRight) maxRight = height[R]
            else sum += maxRight -height[R]
            R--;
        }
    }
    return sum;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]), `Expect [6]`)
console.log(trap([4,2,0,3,2,5]), `Expect [9]`)