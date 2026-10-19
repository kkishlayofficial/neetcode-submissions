class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = [];
        const findPermutations = (ip, op) => {
            let input = [...ip];
            let output = [...op];

            if (input.length == output.length) {
                res.push(output);
                return;
            }

            let set = new Set(output);
            for (let i = 0; i < input.length; i++) {
                if (!set.has(input[i])) {
                    output.push(input[i]);
                    findPermutations(input, output);
                    output.pop();
                    set.delete(input[i]);
                }
            }
        };
        findPermutations(nums, []);
        return res;
    }
}
