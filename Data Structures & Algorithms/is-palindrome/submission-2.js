class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.toLowerCase();
        const isValid = (s) => {
            return (
                (s.charCodeAt(0) >= 48 && s.charCodeAt(0) <= 57) ||
                (s.charCodeAt(0) >= 97 && s.charCodeAt(0) <= 122)
            );
        };
        let i = 0;
        let j = str.length - 1;

        while (i < j) {
            if (!isValid(str[i])) {
                i++;
                continue;
            }
            if (!isValid(str[j])) {
                j--;
                continue;
            }
            if (str[i] == str[j]) {
                i++;
                j--;
            } else return false;
        }
        return true;
    }
}
