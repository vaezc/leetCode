/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  function isLetters(str: string) {
    let re = /^[0-9a-zA-Z]*$/g;
    if (str.match(re) == null) return false;
    else return true;
  }

  let str: string = "";
  for (const char of s) {
    if (isLetters(char)) {
      str += char.toLocaleLowerCase();
    }
  }
  let left = 0,
    right = str.length - 1;
  let isEqual = true;
  console.log(str);

  while (left < right) {
    if (str[left] === str[right]) {
      isEqual = true;
      left++;
      right--;
    } else {
      isEqual = false;
      break;
    }
  }
  return isEqual;
}

console.log(isPalindrome("0p"));

// @lc code=end
