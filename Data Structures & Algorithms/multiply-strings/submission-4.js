class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        let res = Array.from({length: num1.length + num2.length}, () => 0);
        let carry = 0;
        for (let i = num1.length - 1; i >=0 ; i--) {
            for(let j = num2.length - 1; j>=0; j--){
                let val = res[i+j+1]+ carry + (num2[j] * num1[i]);
                carry = Math.floor(val/ 10);
                res[i+j+1] = val%10;
            }
            res[i] = carry;
            carry = 0;
        }
        let i = 0;
        while(i<res.length){
            if(res[i] !=0) break;
            i++;
        }
        if(i == res.length) return '0';
        return res.slice(i).join('');
    }
}
