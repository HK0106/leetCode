/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function(tokens) {
    const operator = {
        "+": "+",
        "-": "-",
        "*": "*",
        "/": "/"
    }
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (operator[tokens[i]]) {
            // calculate opertator
            const firstNumber = stack.pop();
            const secondNumber = stack.pop();
            if (tokens[i] === "+") {
                stack.push(secondNumber + firstNumber);
            } else
            if (tokens[i] === "-") {
                stack.push(secondNumber - firstNumber);
            } else
            if (tokens[i] === "*") {
                stack.push(secondNumber * firstNumber);
            } else
            if (tokens[i] === "/") {
                stack.push(Math.trunc(secondNumber / firstNumber));
            }
        } else {
            stack.push(parseInt(tokens[i]));
        }
    }
    return stack.pop();
};

// console.log(evalRPN(["2","1","+","3","*"]))
// console.log(evalRPN(["4","13","5","/","+"]))
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))