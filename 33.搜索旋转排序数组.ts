/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;
  let index = -1;
  while (left <= right) {
    let middle = Math.ceil((left + right) / 2);
    if (nums[middle] === target) return middle;
    if (nums[left] < nums[middle]) {
      right = middle - 1;
    }
    if (nums[middle] < nums[right]) {
      left = middle + 1;
    }
    console.log(left, middle, right);
  }
  return index;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

// (7)[7];
// [4,5,6]
// [0,1,2]

// @lc code=end
