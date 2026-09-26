class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let topRow = 0,
            leftCol = 0,
            rightCol = matrix[0].length - 1,
            bottomRow = matrix.length - 1,
            res = [];

        while (topRow <= bottomRow && leftCol <= rightCol) {
            for (let i = leftCol; i <= rightCol; i++) {
                res.push(matrix[topRow][i]);
            }
            topRow++;
            if (topRow > bottomRow) break;
            for (let i = topRow; i <= bottomRow; i++) {
                res.push(matrix[i][rightCol]);
            }
            rightCol--;
            if (rightCol < leftCol) break;
            for (let i = rightCol; i >= leftCol; i--) {
                res.push(matrix[bottomRow][i]);
            }
            bottomRow--;
            for (let i = bottomRow; i >= topRow; i--) {
                res.push(matrix[i][leftCol]);
            }
            leftCol++;
        }
        return res;
    }
}
