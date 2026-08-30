class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0, r = 0, maxFreq = 0, maxLen = 0, map = new Map();

        while(r < s.length){
            map.set(s[r], (map.get(s[r]) || 0) + 1);
            maxFreq = Math.max(maxFreq, map.get(s[r]));

            if(r - l + 1 - maxFreq > k){
                map.set(s[l], map.get(s[l]) - 1);
                l++;
            }

            maxLen = Math.max(maxLen, r - l + 1);
            r++;
        }

        return maxLen;
    }
}
