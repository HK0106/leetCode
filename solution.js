/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const maps = {};
  const mapt = {};

  for (let i = 0; i < s.length; i++) {
    if(maps[s[i]]) {
      maps[s[i]] += 1;
    } else {
      maps[s[i]] = 1;
    }
    if(mapt[t[i]]) {
      mapt[t[i]] += 1;
    } else {
      mapt[t[i]] = 1;
    }
  }
  for (const prop in maps) {
    if (maps[prop] !== mapt[prop]) {
      return false
    }
  }
  return true;
};

console.log(isAnagram('anagram','nagaram'))
console.log(isAnagram('rat','cat'))