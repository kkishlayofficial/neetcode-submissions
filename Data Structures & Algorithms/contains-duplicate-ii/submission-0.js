class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                let diff = Math.abs(i - map.get(nums[i]));
                if (diff <= k) return true;
            }
            map.set(nums[i], i);
        }

        return false;
    }
}
