class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let arr = Array.from({ length: n + 1 }, () => 0);
        // For all the even numbers the 1 bits are half of the number and for odd it's half plus 1.
        for (let i = 1; i <= n; i++) {
            let idx = Math.floor(i / 2);
            if (i % 2 == 0) arr[i] = arr[idx];
            else arr[i] = arr[idx] + 1;
        }
        return arr;
    }
}
