/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start
function sortArray(numbers: number[]): number[] {
  if (numbers.length <= 1) return numbers;
  let benchmark = numbers[0];
  let left = 1;
  let right = numbers.length - 1;
  function swap(i, j) {
    let temp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = temp;
  }
  while (left !== right) {}
}

// console.log(sortArray([5, 2, 3, 1]));

// @lc code=end
