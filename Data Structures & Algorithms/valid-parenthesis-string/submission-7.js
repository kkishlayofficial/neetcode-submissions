class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let leftStack = [],
            star = [];
        for (let i = 0; i < s.length; i++) {
            if (s[i] == "(") leftStack.push(i);
            else if (s[i] == "*") star.push(i);
            else {
                if (leftStack.length > 0) leftStack.pop();
                else if (star.length > 0) star.pop();
                else return false;
            }
        }

        while (leftStack.length > 0) {
            if (leftStack[leftStack.length - 1] < star[star.length - 1]){
                leftStack.pop();
                star.pop();
            }
            else return false;
        }

        return true;
    }
}
