class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const set = new Set();

        let sum = 0;
        let val = n;

        while (val !== 1) {
            while (val > 9) {
                sum = sum + (val % 10) ** 2;
                val = Math.floor(val / 10);
            }
            sum = sum + val ** 2;
            if (set.has(sum)) return false;
            set.add(sum);
            val = sum;
            sum = 0;
        }
        return true;
    }
}
