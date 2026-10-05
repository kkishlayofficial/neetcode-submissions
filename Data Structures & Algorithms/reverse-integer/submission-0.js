class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let val = Math.abs(x);
        let res = 0;
        while(val > 9){
            res = res * 10 + (val % 10)
            val = Math.floor(val/10)
        }
        res = res * 10 + (val % 10)
        if(Math.abs(res) > (2**31) - 1) return 0;
        return x < 0 ? res * -1 : res;
    }
}
