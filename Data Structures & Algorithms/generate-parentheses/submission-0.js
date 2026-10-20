class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = [];

        const generate = (str, leftCount, rightCount) => {

            if(leftCount == n && rightCount == n){
                res.push(str);
                return;
            }

            if(leftCount < n){
                str = str + '(';
                generate(str, leftCount + 1, rightCount);
                str = str.substr(0, str.length - 1);
            }

            if(leftCount > rightCount && rightCount < n){
                str = str + ')';
                generate(str, leftCount, rightCount + 1);
                str = str.substr(0, str.length - 1);
            }
        }
        generate('', 0, 0);
        return res;
    }
}
