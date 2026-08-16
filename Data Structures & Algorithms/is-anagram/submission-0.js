class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const map = new Map();
        for(let i of s){
            map.set(i, (map.get(i) + 1) || 1);
        }

        for(let i of t){
            if(!map.has(i)) return false;
            map.set(i, map.get(i) - 1);
            if(map.get(i) < 1) map.delete(i);
        }

        for(let {k,v} of map){
            if(v>0) return false;
        }

        return true;
    }
}
