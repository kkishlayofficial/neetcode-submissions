class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let x = 0;
        for (let i = 0; i < 32; i++) {
            let z = n & 1;
            n = n >> 1;
            x = x << 1;
            x = x | z;
        }
        return x >>> 0;
    }
}
