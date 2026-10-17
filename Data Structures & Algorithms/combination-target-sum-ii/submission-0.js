class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(nums, target) {
        const res = [];
        const findCombinations = (ip, op, target) => {
            const input = [...ip];
            const output = [...op];
            if (target == 0) {
                res.push(output);
                return;
            }
            if (input.length < 1) return;
            if (target < 0) return;

            const item = input[0];
            findCombinations(
                input.filter((el) => el != item),
                output,
                target,
            );
            target -= item;
            output.push(item);
            findCombinations(input.slice(1), output, target);
        };
        findCombinations(nums, [], target);
        return res;
    }
}
