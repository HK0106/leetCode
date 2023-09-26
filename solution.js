/**
 * @param {string} s
 * @return {boolean}
 */
const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
}
const isValid = function(s) {
    if (s[0] === ")" || s[0] === "}" || s[0] === "]" ||
        s[s.length -1] === "(" || s[s.length -1] === "{" || s[s.length -1] === "[") {
        return false;
    }

    if (s.length % 2 === 1) {
        return false;
    }

    let stack = [];

    for (const element of s) {
        if (element === "[" || element === "{" || element === "(") {
            stack.push(element);
        } else if (pairs[stack.pop()] !== element) {
            return false;
        }
    }
    return stack.length === 0;
}

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("({)}"))