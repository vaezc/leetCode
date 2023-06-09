/*
 * @lc app=leetcode.cn id=36 lang=typescript
 *
 * [36] 有效的数独
 */

// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）

// 0 1 2 3 4 5
// 0 1 2 3 4 5
// 0 1 2 3 4 5
// 0 1 2 3 4 5
// 0 1 2 3 4 5
// 0 1 2 3 4 5

//遍历二维数组

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
  function checkIsOnlyOnce(arr: string[]) {
    const map = new Map();
    arr.forEach((item, index) => {
      if (map.get(item)) {
        return false;
      }
      if (item !== ".") {
        map.set(item, index);
      }
    });
    return true;
  }
  let isValid = true;
  board.forEach((item) => {
    isValid = checkIsOnlyOnce(item);
    if (!isValid) return isValid;
  });

  function checkBlock(startColIndex, startRowIndex) {
    const map = new Map();
    // for (let current = 0; index < array.length; index++) {
    //     const element = array[index];

    // }
  }

  return isValid;
}
// @lc code=end
