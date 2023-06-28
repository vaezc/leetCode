/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(numbers: number[]): number {
  let maxNum = numbers[0];
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum = sum + numbers[index];
    if (sum > maxNum) {
      maxNum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxNum;
}

console.log(maxSubArray([-3, -1]));

// @lc code=end
