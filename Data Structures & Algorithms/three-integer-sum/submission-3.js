class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const result = [];
        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i] == nums[i - 1]) continue;
            let l = i + 1;
            let r = nums.length - 1;
            let target = nums[i] * -1;
            while (l < r) {
                if (nums[l] + nums[r] === target) {
                    result.push([nums[i], nums[l], nums[r]]);
                while (nums[l] === nums[l + 1]) l++;
                while (nums[r] === nums[r - 1]) r--;
                    l++;
                    r--;
                } else if (nums[l] + nums[r] > target) r--;
                else l++;
            }
        }
        return result;
    }
}
