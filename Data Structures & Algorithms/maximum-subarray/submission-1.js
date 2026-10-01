class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0],
            sum = nums[0];
        for (let i = 1; i < nums.length; i++) {
            sum = Math.max(sum + nums[i], nums[i]);
            maxSum = Math.max(maxSum, sum);
        }
        return maxSum;
    }
}
