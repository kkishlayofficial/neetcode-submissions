class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0, r = 0, maxLen = 0, map = new Map();

        while(r<s.length){
            if(map.has(s[r])){
                l = Math.max(l, map.get(s[r]) + 1);
            }
                maxLen = Math.max(maxLen, r - l + 1);
            map.set(s[r], r);
            r++;
        }
        // maxLen = Math.max(maxLen, r - l + 1);
        return maxLen;
    }
}
