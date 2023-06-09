/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
class MinStack {
  minIndex: number;
  stack: number[];
  constructor() {
    this.stack = [];
    this.minIndex = 0;
  }

  push(val: number): void {
    this.stack.push(val);
    let min = this.stack[0];
    this.minIndex = 0;
    this.stack.forEach((item, index) => {
      if (item < min) {
        min = item;
        this.minIndex = index;
      }
    });
  }

  pop(): void {
    this.stack.pop();
    let min = this.stack[0];
    this.minIndex = 0;
    this.stack.forEach((item, index) => {
      if (item < min) {
        min = item;
        this.minIndex = index;
      }
    });
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.stack[this.minIndex];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// var obj = new MinStack();
// obj.push(85);
// obj.push(-99);
// obj.push(67);
// console.log(obj.stack);
// var param_4 = obj.getMin();
// console.log(param_4);
// console.log(obj.stack);
// var param_3 = obj.pop();
// console.log(param_3);
// console.log(obj.stack);
// var param_5 = obj.top();
// console.log(param_5);
// console.log(obj.stack);
// var param_6 = obj.getMin();
// console.log(obj.minIndex);

// console.log(param_6);

// @lc code=end
