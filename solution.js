//https://leetcode.com/problems/lru-cache/description/

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  // use a Map<key, value>
  // Map in JS keeps the insertion order
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.map.has(key)) {
    return -1;
  }
  const value = this.map.get(key);
  // delete it and insert again, make it the lastest
  this.map.delete(key);
  this.map.set(key, value);
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  this.map.delete(key);
  this.map.set(key, value);
  if (this.map.size > this.capacity) {
    // iterator api next => {value, done}
    // the first key returned by iteration is the first inserted
    this.map.delete(this.map.keys().next().value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */