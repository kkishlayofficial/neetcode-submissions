class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = prices[prices.length - 1];
        let maxP = 0;
        for(let i = prices.length - 2; i>=0 ; i--){
            maxP = Math.max(maxP, max - prices[i]);
            max = Math.max(max, prices[i]);
        }
        return maxP;
    }
}
