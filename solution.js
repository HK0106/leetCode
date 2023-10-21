/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function(piles, h) {
    let low = 1, high = Math.max(...piles), k = -1;
    while (low <= high) {

        const mid = low + ((high - low) >> 1);
        const numOfHours = piles.reduce((total, pile) => total + Math.ceil(pile/mid), 0)
        if (numOfHours <= h) {
            k = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }

    }
    return k;
};

console.log(minEatingSpeed([3,6,7,11],8), 'Expect 4')
console.log(minEatingSpeed([30,11,23,4,20],5), 'Expect 30')
console.log(minEatingSpeed([30,11,23,4,20],6), 'Expect 23')