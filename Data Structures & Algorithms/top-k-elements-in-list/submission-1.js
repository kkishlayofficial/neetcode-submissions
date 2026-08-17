class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        // If we sort based on the value of items in the map, it will fail the follow up question, which is the TC must be less than O(nlogn);

        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        for (let [key, val] of map) {
            buckets[val].push(key);
        }

        let result = [];

        for (let i = nums.length; i >= 0; i--) {
            if (buckets[i].length > 0) {
                result = [...result, ...buckets[i]];
            }
            if (result.length >= k) return result.splice(0, k);
        }

        return [];
    }
}
