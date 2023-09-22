/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    // const returnResult = [];
    // for (let i = 0; i < nums.length; i++) {
    //     let temp = 1
    //     for (let j = 0; j < nums.length; j++) {
    //         if (i===j){
    //             // do nothing
    //         } else {
    //             temp*= nums[j]
    //         }
    //     }
    //     returnResult.push(temp)
    // }
    // return returnResult;



    const length = nums.length;
    const result = new Array(length).fill(1);

    let productBefore = 1;
    for (let i = 0; i < length; i++) {
        result[i] *= productBefore;
        productBefore *= nums[i];
    }

    let productAfter = 1;
    for (let i = length -1; i >= 0 ; i--) {
        result[i] *= productAfter;
        productAfter *= nums[i];
    }
    return result;
};


console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))


