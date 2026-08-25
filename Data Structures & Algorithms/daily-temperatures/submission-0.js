class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = new Array();
        let res = new Array();
        for (let i = temperatures.length - 1; i >= 0; i--) {
            while (temperatures[stack[stack.length - 1]] <= temperatures[i]) {
                stack.pop();
            }
            res[i] = stack.length > 0 ? stack[stack.length - 1] - i : 0;
            stack.push(i);
        }
        return res;
    }
}
