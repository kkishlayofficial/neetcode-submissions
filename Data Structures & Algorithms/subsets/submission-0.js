class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
        const findSubsets = (op, ip) => {
            const inp = [...ip];
            const out = [...op];
            if (inp.length < 1) {
                res.push([...out]);
                return;
            }
            let item = inp.pop();
            findSubsets(out, inp);
            out.push(item);
            findSubsets(out, inp);
        };
        findSubsets([], nums);
        return res;
    }
}
