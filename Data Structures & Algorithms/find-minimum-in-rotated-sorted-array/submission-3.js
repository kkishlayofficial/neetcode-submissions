class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0, r = nums.length - 1;
        const bs = (l , r) => {
            if(l > r) return nums[0];
            let mid = l + Math.floor((r - l) / 2);
            if(l == mid) return Math.min(nums[l], nums[r]);
            if(nums[l] > nums[mid]) return bs(l, mid);
            else if(nums[mid] > nums[r] ) return bs(mid, r);
            else return nums[l];
        }

        return bs(l, r);
    }
}
