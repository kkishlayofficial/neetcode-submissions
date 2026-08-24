class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let st = new Array();
        for(let i = 0; i<s.length; i++){
            if(s[i] == '(' || s[i] == '{' || s[i] == '[') st.push(s[i]);
            else if(s[i] == ')'){
                if(st[st.length - 1] == '(') st.pop();
                else return false;
            }
            else if(s[i] == '}'){
                if(st[st.length - 1] == '{') st.pop();
                else return false;
            }
            else{
                if(st[st.length - 1] == '[') st.pop();
                else return false;
            }
        }
        return !st.length > 0;
    }
}
