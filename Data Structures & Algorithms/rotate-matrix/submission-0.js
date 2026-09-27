class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        for(let i = 0; i<matrix.length; i++){
            for(let j = i; j<matrix[i].length; j++){
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        for(let i = 0; i<matrix.length; i++){
            let mid = Math.ceil(matrix[i].length / 2);
            for(let j = 0; j< mid; j++){
                let temp = matrix[i][j];
                let idx = matrix[i].length - j - 1;
                matrix[i][j] = matrix[i][idx];
                matrix[i][idx] = temp;
            }
        }
    }
}
