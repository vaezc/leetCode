/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start

// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

// bfs

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  let treeNodeQueue = [root];
  let levelArray: number[][] = [];
  while (treeNodeQueue.length) {
    let array: number[] = [];
    let size = treeNodeQueue.length;
    for (let index = 0; index < size; index++) {
      const element = treeNodeQueue.shift()!;
      array.push(element.val);
      if (element.left) {
        treeNodeQueue.push(element.left);
      }
      if (element.right) {
        treeNodeQueue.push(element.right);
      }
    }
    levelArray.push(array);
  }
  return levelArray;
}

// @lc code=end
