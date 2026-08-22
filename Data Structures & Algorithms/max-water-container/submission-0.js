class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let maxArea = -1;
        while(l<r){
            let h = Math.min(heights[l], heights[r]);
            let w = r - l;
            maxArea = Math.max(maxArea, h*w);
            if(heights[l]<= heights[r])l++;
            else r--;
        }
        return maxArea;
    }
}
