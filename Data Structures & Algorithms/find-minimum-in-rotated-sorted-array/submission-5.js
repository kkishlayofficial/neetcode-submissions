class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0, r = nums.length - 1;
        const bs = (l , r) => {
            if(nums[l] <= nums[r]) return nums[l];
            let mid = l + Math.floor((r - l) / 2);
            if(nums[l] > nums[mid]) return bs(l, mid);
            else return bs(mid + 1, r);
        }

        return bs(l, r);
    }
}
