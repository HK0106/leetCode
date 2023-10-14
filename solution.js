/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');
  if (s.length !== t.length) {
    return false;
  } else {
    for (let i = 0; i < s.length; i++) {
     if (sortedS[i] !== sortedT[i]) {
       return  false
     }
    }
    return true;
  }
};

console.log(isAnagram('anagram','nagaram'))
console.log(isAnagram('rat','cat'))