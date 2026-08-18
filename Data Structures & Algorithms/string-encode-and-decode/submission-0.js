class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    map = new Map();
    encode(strs) {
        const key = JSON.stringify(strs)
        this.map.set(key, strs);
        return key;
        
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return this.map.get(str);
    }
}
