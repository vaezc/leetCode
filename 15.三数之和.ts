/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];

  const sortNums = nums.sort((a, b) => a - b);
  let finalArray: number[][] = [];
  for (let i = 0; i < sortNums.length - 2; i++) {
    let left = i + 1;
    let right = sortNums.length - 1;
    if (sortNums[i] > 0) break;
    if (i > 0 && sortNums[i] === sortNums[i - 1]) continue;
    while (left < right) {
      const total = sortNums[i] + sortNums[left] + sortNums[right];

      if (total === 0) {
        finalArray.push([sortNums[i], sortNums[left], sortNums[right]]);
        while (left < right && sortNums[left] === sortNums[left + 1]) left++;
        while (left < right && sortNums[right] === sortNums[right - 1]) right--;
      } else if (total < 0) {
        left = left + 1;
      } else if (total > 0) {
        right = right - 1;
      }
    }
  }

  return finalArray;
}
// @lc code=end
