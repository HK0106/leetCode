/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length-1]]) {
            const j = stack.pop()
            result[j] = i - j;
        }
        stack.push(i);
    }
    return result;
};


console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))