class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(digits.length < 1) return [];
        const numberMapping = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz",
        };

        const res = [];

        const createCombinations = (output, numIdx) => {
            if (output.length == digits.length) {
                res.push(output);
                return;
            }
            let mappedStr = numberMapping[digits[numIdx]];
            for (let c of mappedStr) {
                createCombinations(output + c, numIdx + 1);
            }
        };

        createCombinations('', 0);
        return res;
    }
}
