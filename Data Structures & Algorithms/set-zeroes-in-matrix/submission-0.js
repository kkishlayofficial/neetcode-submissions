class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let rowSet = new Set(),
            colSet = new Set();
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 0) {
                    rowSet.add(i);
                    colSet.add(j);
                }
            }
        }

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (rowSet.has(i)) matrix[i][j] = 0;
            }
        }

        for (let i = 0; i < matrix[0].length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (colSet.has(i)) matrix[j][i] = 0;
            }
        }
    }
}
