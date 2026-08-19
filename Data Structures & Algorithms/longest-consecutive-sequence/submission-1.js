class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // Add the numbers to a set and if num - 1 doesn't exist in the set, that means it is the start of the sequence. Otherwise skip. So every item is traversed only once.
    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxCount = 0;
        for(let num of nums){
            if(!set.has(num - 1)){
                let len = 1;
                while(set.has(num + len)) len++;
                maxCount = Math.max(maxCount, len);
            }
        }
        return maxCount;
    }
}
