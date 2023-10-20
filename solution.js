/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet = function(target, position, speed) {
    const getTime = ([pos, sp]) => (target - pos) / sp
    const stack = []

    const times = position
        .map((v, i) => [v, speed[i]])
        .sort((a, b) => a[0] - b[0])
        .map(getTime)

    for (const time of times) {
        while (stack.length && stack.at(-1) <= time) {
            stack.pop()
        }

        stack.push(time)
    }

    return stack.length

};

// console.log(carFleet(12,[10,8,0,5,3],[2,4,1,1,3]))
// console.log(carFleet(10,[3],[3]))
// console.log(carFleet(100,[0,2,4],[4,2,1]))
// console.log(carFleet(10,[6,8],[3,2]))
console.log(carFleet(10,[0,4,2],[2,1,3]))