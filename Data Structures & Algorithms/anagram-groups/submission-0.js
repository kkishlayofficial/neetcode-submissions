class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sortedStrs = strs.map((str) => Array.from(str).toSorted().join(""));
        const map = new Map();
        for(let i = 0; i< sortedStrs.length; i++){
            if(!map.has(sortedStrs[i])) map.set(sortedStrs[i], []);
            map.get(sortedStrs[i]).push(i);
        }
        const result = [];
        for(let [k,v] of map){
            result.push(v.map(item => strs[item]));
        }
        return result;
    }
}
