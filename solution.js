/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  const map1 = {};
  const map2 = {};
  if (s.length !== t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (map1[s[i]]) {
      map1[s[i]]++;
    } else {
      map1[s[i]] = 1;
    }
    if (map2[t[i]]) {
      map2[t[i]]++;
    } else {
      map2[t[i]] = 1;
    }
  }
  for (const map1Key in map1) {
    if (map1[map1Key] !== map2[map1Key]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram('anagram','nagaram'))
console.log(isAnagram('rat','cat'))