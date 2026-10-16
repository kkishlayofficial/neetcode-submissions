class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[1] - b[1]);
        let count = 0,
            r = 1,
            end = intervals[0][1];
        while (r < intervals.length) {
            if (end > intervals[r][0]) {
                count++;
            } else end = intervals[r][1];
            r++;
        }
        return count;
    }
}
