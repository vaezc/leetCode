/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
class LRUCache {
  cacheMap: Map<number, number>;
  capacity: number;

  constructor(capacity: number) {
    this.cacheMap = new Map();
    this.capacity = capacity;
  }

  get(key: number): number {
    const value = this.cacheMap.get(key);
    if (value === undefined) {
      return -1;
    }
    this.cacheMap.delete(key);
    this.cacheMap.set(key, value);
    return value;
  }

  put(key: number, value: number): void {
    if (this.cacheMap.get(key)) {
      this.cacheMap.delete(key);
      this.cacheMap.set(key, value);
    } else if (this.cacheMap.size === this.capacity) {
      this.cacheMap.delete(this.cacheMap.keys().next().value);
      this.cacheMap.set(key, value);
    } else {
      this.cacheMap.set(key, value);
    }
  }
}

// var obj = new LRUCache(2);
// obj.put(2, 1);
// obj.put(2, 2);
// console.log(obj.get(2));
// obj.put(1, 1);
// obj.put(4, 1);
// console.log(obj.get(2));
// obj.put(4, 4);
// console.log(obj.get(1));
// console.log(obj.get(3));
// console.log(obj.get(4));

// @lc code=end
