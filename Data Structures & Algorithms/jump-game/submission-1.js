class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        if(nums.length < 2) return true
        let maxIdx = 0;
        for(let i = 0; i<nums.length; i++){
            if(nums[i] == 0 && maxIdx == i) break;
            maxIdx = Math.max(maxIdx, nums[i] + i);
            if(maxIdx >= nums.length - 1) return true;
        }
        return false;
    }
}
