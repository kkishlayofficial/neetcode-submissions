class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let row = false,
            col = false;
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[0][j] == 0) {
                row = true;
                break;
            }
        }
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][0] == 0) {
                col = true;
                break;
            }
        }
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 0) {
                    matrix[0][j] = 0;
                    matrix[i][0] = 0;
                }
            }
        }

        for (let i = 1; i < matrix.length; i++) {
            for (let j = 1; j < matrix[i].length; j++) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;
            }
        }
        if (row) for (let j = 0; j < matrix[0].length; j++) matrix[0][j] = 0;

        if (col) for (let j = 0; j < matrix.length; j++) matrix[j][0] = 0;
    }
}
