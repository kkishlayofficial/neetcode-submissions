class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        const binarySearch = (l, r, target) => {
            if(r < l) return -1;
            let mid = l + Math.floor((r - l) / 2);
            if(nums[mid] == target) return mid;
            if(nums[mid] < target) return binarySearch(mid + 1, r, target);
            else return binarySearch(l, mid - 1, target);
        }

        return binarySearch(0, nums.length - 1, target);
    }
}
