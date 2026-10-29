class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    romanToInt(s) {
        let obj = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        };

        let i = 0;
        let sum = 0;
        while (i < s.length - 1) {
            if (obj[s[i]] >= obj[s[i + 1]]) {
                sum += obj[s[i]];
            } else sum -= obj[s[i]];
            i++;
        }

        return sum + obj[s[i]];
    }
}
