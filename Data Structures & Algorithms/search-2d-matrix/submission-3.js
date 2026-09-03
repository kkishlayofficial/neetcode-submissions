class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0,
            r = matrix.length - 1;
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2);
            if (target <= matrix[mid][matrix[mid].length - 1] && target >= matrix[mid][0]) {
                let l1 = 0,
                    r1 = matrix[mid].length - 1;
                while (l1 <= r1) {
                    let mid1 = l1 + Math.floor((r1 - l1) / 2);
                    if (target == matrix[mid][mid1]) return true;
                    if (target < matrix[mid][mid1]) r1 = mid1 - 1;
                    else l1 = mid1 + 1;
                }
            }
            if (target < matrix[mid][0]) r = mid - 1;
            else l = mid + 1;
        }
        return false;
    }
}
