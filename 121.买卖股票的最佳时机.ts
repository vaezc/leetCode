/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;
  prices.forEach((item, index) => {
    if (item < minPrice) {
      minPrice = item;
    } else if (item - minPrice > maxProfit) {
      maxProfit = item - minPrice;
    }
  });
  return maxProfit;
}

// @lc code=end
