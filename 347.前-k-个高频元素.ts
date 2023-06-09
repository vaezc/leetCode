/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map();
  const lastNums: number[] = [];
  nums.forEach((item) => {
    const count = map.get(item) ?? 0;
    map.set(item, count + 1);
  });

  console.log(map);
  const values = [...map.values()].sort((a, b) => b - a);
  const topValue = values.slice(0, k);

  for (const [key, value] of map) {
    const isFind = topValue.some((item) => item === value);
    if (isFind) {
      lastNums.push(key);
    }
  }
  console.log(lastNums);
  return lastNums;
}
// @lc code=end
