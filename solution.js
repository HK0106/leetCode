/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
    let sumResult = 0;
    if (height.length === 0) {
        return sumResult;
    }
    let leftMax = [];
    let rightMax = [];


    let tempMax = -1;
    for (let i = 0; i < height.length; i++) {
        if (i === 0) {
            leftMax.push(0);
        } else {
            if (height[i - 1] > tempMax) {
                tempMax = height[i - 1];
                leftMax.push(height[i - 1]);
            } else {
                leftMax.push(tempMax)
            }
        }


    }
    tempMax = -1;
    for (let i = height.length - 1; i >= 0; i--) {
        if (i === height.length -1) {
            rightMax[height.length-1]=0;
        } else {
            if (height[i+1] > tempMax) {
                tempMax = height[i+1];
                rightMax[i] = height[i+1]
            } else {
                rightMax[i] = tempMax;
            }
        }

    }
    for (let i = 0; i < height.length; i++) {
        let tempWater = 0;
        if (leftMax[i] <= rightMax[i]) {
            tempWater += leftMax[i] - height[i];
        } else {
            tempWater += rightMax[i] - height[i];
        }
        if (tempWater > 0) {
            sumResult += tempWater;
        }
    }

    return sumResult
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]), `Expect [6]`)
console.log(trap([4,2,0,3,2,5]), `Expect [9]`)