// Description
// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.
//
//     Please implement encode and decode
//
// Example
// Example1
//
// Input: ["lint","code","love","you"]
// Output: ["lint","code","love","you"]
// Explanation:
//     One possible encode method is: "lint:;code:;love:;you"
// Example2
//
// Input: ["we", "say", ":", "yes"]
// Output: ["we", "say", ":", "yes"]
// Explanation:
//     One possible encode method is: "we:;say:;:::;yes"\

const encode = (listString) => {
    let result = ""
    for (const string of listString) {
        const length = string.length;
        result += `${length}#${string}`
    }
    return result;
}

const decode = (string) => {
    let result = []
    for (let i = 0; i < string.length; i++) {
        const lengthText = parseInt(string[i]);
        if (lengthText && string[i+1] === "#") {
            let text = "";
            for (let j = 0; j < lengthText; j++) {
                text +=string[i+2+j];
            }
            result.push(text);
        }
    }
    return result;
}
const stringEncode = encode(["abcs","2dksd","3#sdc", "23csd"])
console.log("ENCODE", stringEncode)
console.log("DECODE", decode(stringEncode))