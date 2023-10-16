/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    const res = [];

    const go = (l, r, s) => {
        console.log('===========================')
        console.log('=res=',res);
        console.log('=str=',s);
        console.log('=l=',l);
        console.log('=r=',r);
        console.log('===========================')
        if (s.length === 2 * n) {
            res.push(s);
            return;
        }

        if (l < n) go(l + 1, r, s + '(');
        if (r < l) go(l, r + 1, s + ')');
    };

    go(0, 0, '');
    return res;
};

console.log(generateParenthesis(3))
