/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let low = 0;
    let high = height.length - 1;
    let maxArea = 0;

    while (low < high) {
        const minHeight = Math.min(height[low], height[high]);
        const currentArea = (high - low) * minHeight;

        if (height[low] < height[high]) {
            low++;
        } else {
            high--;
        }
    }

    return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 'Expect 49');
