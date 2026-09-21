class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let count = 0;
        let res = n;
        while(res>0){
            let val = res ^ 1;
            if(val == res - 1) count++;
            res = res >> 1;
        }
        return count;
    }
}
