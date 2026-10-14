class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const res = [];

        const findSubsets = (ip, op) => {
            const input = [...ip];
            const output = [...op];
            if (input.length < 1) {
                res.push(output);
                return;
            }

            let item = input[0];
            findSubsets(
                input.filter((i) => i != item),
                output,
            );
            output.push(item);
            findSubsets(input.slice(1), output);
        };
        findSubsets(nums, []);
        return res;
    }
}
