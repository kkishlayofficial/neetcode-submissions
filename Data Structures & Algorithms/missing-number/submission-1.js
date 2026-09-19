class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let total = Math.floor((nums.length * (nums.length + 1)) / 2);
        let sum = 0;
        for(let num of nums) sum += num;
        return total - sum;
    }
}
