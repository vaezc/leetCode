/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  function binarySearch(
    numbers: number[],
    left: number = 0,
    right: number = nums.length - 1
  ) {
    let index = -1;
    let middle = Math.ceil((left + right) / 2);
    if (numbers[middle] === target) return middle;
    if (left >= right) return left + 1;
    if (target > numbers[middle]) index = binarySearch(numbers, middle, right);
    if (target < numbers[middle])
      index = binarySearch(numbers, left, middle - 1);
    return index;
  }
  if (target > nums[nums.length - 1]) return nums.length;
  if (target < nums[0]) return 0;
  const index = binarySearch(nums);
  return index;
}

console.log(searchInsert([1, 3, 5, 6], 7));

// @lc code=end
