/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
const maxValue = function(events, k) {
  events.sort((a, b) => a[0] - b[0]);
  let n = events.length, obj = {}
  const max = (i, k, prev) => {
    if(i === n || k === 0)return 0;
    let str = `${i}-${k}-${prev}`
    if( obj[str] )return obj[str];
    if(prev >= events[i][0])return obj[str] = max(i + 1, k, prev);
    return obj[str] = Math.max(events[i][2] + max(i + 1, k - 1, events[i][1]), max(i + 1, k, prev))
  }
  return max(0 , k , 0)
};