class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        nums.sort((a,b) => a-b);
        const findCombinations = (ip, op, target) => {
            const input = [...ip];
            const output = [...op];
            if (target == 0) {
                res.push(output);
                return;
            }
            if (input.length < 1) return;
            if (target < input[0]) return;
            
            findCombinations(input.slice(1), output, target);
            const item = input[0];
            target -= item;
            output.push(item);
            findCombinations(input, output, target);
        };
        findCombinations(nums, [], target);
        return res;
    }
}
