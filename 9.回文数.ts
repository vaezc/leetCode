/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  let xString = x.toString();
  let isEqual = false;
  for (
    let start = 0, end = xString.length - 1;
    start < xString.length, end >= 0;
    start++, end--
  ) {
    if (start > end) break;
    if (xString[start] === xString[end]) {
      isEqual = true;
    } else {
      isEqual = false;
      break;
    }
  }
  return isEqual;
}

// console.log(isPalindrome(0));

// @lc code=end
