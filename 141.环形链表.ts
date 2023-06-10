/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
 */

// @lc code=start

// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) return false;
  let p: ListNode | null = head.next;
  let hasCycle = false;
  const array = [head];
  while (p) {
    if (array.includes(p)) {
      hasCycle = true;
      break;
    }
    array.push(p);
    p = p.next;
  }
  return hasCycle;
}

// const list = new ListNode(1);
// const list2 = new ListNode(2);
// list.next = list2;
// list2.next = list;
// list.next.next = new ListNode(0);
// list.next.next.next = new ListNode(-4);
// list.next.next.next.next = list2;

// console.log(hasCycle(list));

// @lc code=end
