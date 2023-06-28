/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// 滑动窗口
// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (s.length === 1) return 1;
  let maxLength = 0;
  for (let index = 0; index < s.length; index++) {
    let stringArray: string[] = [s[index]];
    for (let j = index + 1; j < s.length; j++) {
      if (stringArray.includes(s[j])) {
        break;
      } else {
        stringArray.push(s[j]);
      }
    }
    if (stringArray.length > maxLength) {
      maxLength = stringArray.length;
    }
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("aa"));

// @lc code=end
