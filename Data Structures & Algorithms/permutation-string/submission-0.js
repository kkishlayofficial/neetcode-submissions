class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s2.length < s1.length) return false;
        let arrS1 = Array.from({ length: 26 }, () => 0);
        let arrS2 = Array.from({ length: 26 }, () => 0);

        for (let s of s1) {
            arrS1[s.charCodeAt(0) - 97]++;
        }

        const compareArray = (arr1, arr2) => {
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
        };

        let l = 0,
            r = 0;
        while (r < s1.length) {
            arrS2[s2[r].charCodeAt(0) - 97]++;
            r++;
        }

        if (compareArray(arrS1, arrS2)) return true;

        while (r < s2.length) {
            arrS2[s2[l].charCodeAt(0) - 97]--;
            l++;
            arrS2[s2[r].charCodeAt(0) - 97]++;
            if (compareArray(arrS1, arrS2)) return true;
            r++;
        }
        return false;
    }
}
