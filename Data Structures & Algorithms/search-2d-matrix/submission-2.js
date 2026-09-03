class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const binarySearch = (l, r, target, idx) => {
            if (l > r) return false;
            let mid = l + Math.floor((r - l) / 2);

            if (matrix[idx][mid] == target) return true;
            if (matrix[idx][mid] > target) return binarySearch(l, mid - 1, target, idx);
            else return binarySearch(mid + 1, r, target, idx);
        };

        let l = 0,
            r = matrix.length - 1;
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2);
            if (target <= matrix[mid][matrix[mid].length - 1] && target >= matrix[mid][0])
                return binarySearch(0, matrix[mid].length - 1, target, mid);
            if (target < matrix[mid][0]) r = mid - 1;
            else l = mid + 1;
        }
        return false;
    }
}
