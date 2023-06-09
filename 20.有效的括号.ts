/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  let strArray: string[] = [];
  for (const str of s) {
    strArray.push(str);
  }
  let isValid = true;
  console.log(strArray);
  if (strArray.length === 1) return false;

  const tempArray: string[] = [];
  strArray.forEach((item, index) => {
    if (item === "[" || item === "{" || item === "(") {
      tempArray.push(item);
    } else {
      const lastElement = tempArray[tempArray.length - 1];
      if (
        (lastElement === "[" && item === "]") ||
        (lastElement === "{" && item === "}") ||
        (lastElement === "(" && item === ")")
      ) {
        tempArray.pop();
      } else {
        isValid = false;
      }
    }
  });
  console.log(tempArray);

  if (tempArray.length === 0 && isValid) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}

console.log(isValid("(("));

// @lc code=end
