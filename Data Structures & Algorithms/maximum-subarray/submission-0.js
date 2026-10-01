class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0],
            sum = nums[0];
        for (let i = 1; i < nums.length; i++) {
            sum = sum + nums[i];
            if(nums[i] > sum) sum = nums[i];
            // console.log({i, sum});
            maxSum = Math.max(maxSum, sum);
        }
        return maxSum;
    }
}
