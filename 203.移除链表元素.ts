/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head === null) return null;
  let current = head;
  let p = head.next;
  while (head) {
    if (head.val === val) {
      head = head.next;
      if (head) {
        current = head;
        p = head.next;
      }
    } else {
      break;
    }
  }
  while (p) {
    if (p.val === val) {
      current.next = p.next;
      p = p.next;
      continue;
    }
    current = p;
    p = p.next;
  }

  return head;
}

// const list = new ListNode(1);
// list.next = new ListNode(2);
// list.next.next = new ListNode(3);
// list.next.next.next = new ListNode(4);
// list.next.next.next.next = new ListNode(5);
// list.next.next.next.next.next = new ListNode(6);

// console.log(removeElements(list, 4));
// @lc code=end
