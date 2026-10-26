class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];

        const isPalindrome = (s) => {
            let i = 0,
                j = s.length - 1;

            while (i < j) {
                if (s[i] !== s[j]) return false;
                i++;
                j--;
            }
            return true;
        };

        const findPalindromes = (op, x) => {
            const output = [...op];
            if (x == s.length) {
                res.push(output);
                return;
            }

            for (let i = x; i < s.length; i++) {
                if (isPalindrome(s.substring(x, i+1))) {
                    output.push(s.substring(x, i+1));
                    findPalindromes(output, i+1);
                    output.pop();

                }
            }
        };

        findPalindromes([], 0);

        return res;
    }
}
