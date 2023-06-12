/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  const answer: number[] = [];
  for (let index = 0; index < temperatures.length; index++) {
    const element = temperatures[index];
    let hasHigher = false;
    for (let j = index + 1; j < temperatures.length; j++) {
      const element2 = temperatures[j];
      if (element2 > element) {
        hasHigher = true;
        answer.push(j - index);
        break;
      }
    }
    if (!hasHigher) answer.push(0);
  }

  return answer;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

// @lc code=end
