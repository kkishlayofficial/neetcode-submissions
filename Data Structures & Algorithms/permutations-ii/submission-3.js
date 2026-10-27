class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        const res = [];

        const findPermutations = (ip, idx) => {
            if (idx === ip.length) {
                res.push(ip);
                return;
            }

            const input = [...ip];
            const set = new Set();
            for (let i = idx; i < input.length; i++) {
                let tempArr = [...input];
                if(!set.has(tempArr[i])){
                set.add(tempArr[i]);
                let val = tempArr[i];
                tempArr[i] = tempArr[idx];
                tempArr[idx] = val;
                findPermutations(tempArr, idx + 1);
                }
            }
        };

        findPermutations(nums, 0);

        return res;
    }
}
