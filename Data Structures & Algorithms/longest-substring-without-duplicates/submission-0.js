class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
  let map = new Map();
  let l = 0, r = 0, maxLen = 0;
  while (r < s.length) {
    if (map.has(s[r])) {
      l = Math.max(map.get(s[r]) + 1, l);
    }
    maxLen = Math.max(maxLen, r - l + 1);
    map.set(s[r], r);
    r++;
  }
  return maxLen;
};
}
