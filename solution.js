/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;
    while (start <= end) {
        const startCharacter = s[start].toLowerCase();
        const endCharacter = s[end].toLowerCase();

        // check start character is alphanumberic or not if not skip
        if (!((startCharacter >= "0" && startCharacter <= "9")
            || (startCharacter >= "a" && startCharacter <= "z"))) {
            start++;
        }

        // check end character is alphanumberic or not if not skip

        else if (!((endCharacter >= "0" && endCharacter <= "9")
            || (endCharacter >= "a" && endCharacter <= "z"))) {
            end--;
        } else {
            if (startCharacter !== endCharacter) {
                return false;
            }
            start++;
            end--;
        }


    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))