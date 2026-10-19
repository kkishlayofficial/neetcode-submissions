class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = [];
        // const findPermutations = (ip, op) => {
        //     let input = [...ip];
        //     let output = [...op];

        //     if (input.length == output.length) {
        //         res.push(output);
        //         return;
        //     }

        //     let set = new Set(output);
        //     for (let i = 0; i < input.length; i++) {
        //         if (!set.has(input[i])) {
        //             output.push(input[i]);
        //             findPermutations(input, output);
        //             output.pop();
        //         }
        //     }
        // };
        // findPermutations(nums, []);
        const findPermutations = (input, idx) => {
            if (input.length === idx + 1) {
                res.push(input);
                return;
            }

            for (let i = idx; i < input.length; i++) {
                let tempArr = [...input];
                let val = tempArr[i];
                tempArr[i] = tempArr[idx];
                tempArr[idx] = val;
                findPermutations(tempArr, idx + 1);
            }
        };
        findPermutations(nums, 0);
        return res;
    }
}
