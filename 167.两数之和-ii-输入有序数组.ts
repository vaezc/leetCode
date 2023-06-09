/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  let left = 0,
    right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum < target) {
      left++;
    }
    if (sum > target) {
      right--;
    }
    if (sum === target) {
      break;
    }
  }
  return [left + 1, right + 1];
}

// @lc code=end
