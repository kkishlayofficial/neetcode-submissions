class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const findPivot = (l, r) => {
            if(nums[l] <= nums[r]) return l;
            const mid = l + Math.floor((r - l) / 2);
            if(nums[mid] > nums[r]) return findPivot(mid+1, r);
            else return findPivot(l, mid);
        }

        const bs = (l, r) => {
            if(l > r) return -1;
            const mid = l + Math.floor((r - l) / 2);
            if(nums[mid] == target) return mid;
            if(nums[mid] > target) return bs(l, mid - 1);
            else return bs(mid + 1, r);
        }

        const pivotIndex = findPivot(0, nums.length - 1);
        if(target >= nums[pivotIndex] && target<= nums[nums.length - 1]) return bs(pivotIndex, nums.length - 1);
        else return bs(0, pivotIndex - 1);
    }
}
