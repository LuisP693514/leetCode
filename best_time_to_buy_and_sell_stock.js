/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day
to buy one stock and choosing a different day in the future
to sell that stock.

Return the maximum profit you can achieve from this transaction.
If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    
    if (prices.length === 0) return 0;
    
    let currentMax = prices[0];
    let currentMin = prices[0];
    let maxDay = 0;
    let minDay = 0;
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];

        if (price > currentMax) {
            currentMax = price;
            maxDay = i;
        }
        
        if (price < currentMin) {
            currentMin = price;
            minDay = i;
            if (maxDay < i) {
                maxDay = i;
                currentMax = price;
            }
        }
        
        if (currentMax === 104 && currentMin === 0) {
            break;
        }

        if (currentMax - currentMin > maxProfit) {
            maxProfit = currentMax - currentMin;
        }
    }

    return maxProfit;
    
};

const prices = [7, 1, 14, 0, 9, 3]; // => 9
console.log(maxProfit(prices));
