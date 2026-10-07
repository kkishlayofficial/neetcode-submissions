class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let firstRowImpacted = false,
            firstColImpacted = false;
        // Check if first row is affected
        for (let row = 0; row < matrix.length; row++) {
            if (matrix[row][0] == 0) {
                firstRowImpacted = true;
                break;
            }
        }

        // Check if first column is affected
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[0][col] == 0) {
                firstColImpacted = true;
                break;
            }
        }

        // Mark first row/column
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 0) {
                    matrix[0][j] = 0;
                    matrix[i][0] = 0;
                }
            }
        }

        // Update value of row/column with 0
        for (let i = 1; i < matrix.length; i++) {
            for (let j = 1; j < matrix[i].length; j++) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;
            }
        }

        // Update first row if required
        if (firstRowImpacted) for (let row = 0; row < matrix.length; row++) matrix[row][0] = 0;

        // Update first column if required
        if (firstColImpacted) for (let col = 0; col < matrix[0].length; col++) matrix[0][col] = 0;
    }
}
