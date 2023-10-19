/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function(temperatures) {
    const n = temperatures.length -1
    const result = [];
    for (let i = 0; i < n; i++) {
        let currentCheck = i + 1;
        let flag = false;
        while (currentCheck <= n) {
            if (temperatures[currentCheck] > temperatures[i]) {
                result.push(currentCheck-i);
                flag = true;
                break;
            }
            currentCheck++;
        }
        if (!flag) {
            result.push(0);
        }
    }
    result.push(0);
    return result
};


console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))