class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const prefixMax = [];
        const suffixMax = [];
        let localMax = height[0];
        for (let i = 0; i < height.length; i++) {
            localMax = Math.max(localMax, height[i]);
            prefixMax[i] = localMax;
        }
        localMax = height[height.length - 1];
        for (let i = height.length - 1; i >= 0; i--) {
            localMax = Math.max(localMax, height[i]);
            suffixMax[i] = localMax;
        }
        let result = 0;
        for (let i = 0; i < height.length; i++) {
            result = result + Math.min(suffixMax[i], prefixMax[i]) - height[i];
        }
        return result;
    }
}
