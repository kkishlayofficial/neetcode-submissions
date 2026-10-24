class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const res = [];

        const findCombinations = (x, op) => {
            const output = [...op];

            if(output.length === k){
                res.push(output);
                return;
            }

            while(x <= n){
                output.push(x);
                findCombinations(x+1, output);
                output.pop();
                x++;
            }
        }

        findCombinations(1, []);

        return res;
    }
}
