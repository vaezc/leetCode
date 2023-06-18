/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start

// 使用遍历和递归两种方式来解决
function search(nums: number[], target: number): number {
  let mid = Math.ceil((0 + nums.length) / 2);

  if (target > nums[nums.length - 1] || target < nums[0]) {
    return -1;
  }

  if (nums.length === 1 || nums.length === 2) {
    const index = nums.findIndex((item) => item === target);
    return index;
  }

  if (target > nums[mid]) {
    return mid + search(nums.slice(mid), target);
  } else if (target < nums[mid]) {
    return search(nums.slice(0, mid), target);
  } else if (target === nums[mid]) {
    return mid;
  }
  return -1;
}

// @lc code=end
