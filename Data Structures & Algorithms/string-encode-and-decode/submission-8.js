class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = '';
        for(let s of strs){
            str+= `${s.length}#${s}`
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length < 1) return [];
        const res = [];
        for(let i = 0; i<str.length; i++){
            let j = i;
            while(str[i] !== '#') i++;
            let len = Number(str.substring(j, i));
            if(len < 1){
                res.push('');
            }
            else{
                const sub = str.substring(i+1, i+1+len);
                res.push(sub);
            }
            i=i+len;
        }
        return res;
    }
}
