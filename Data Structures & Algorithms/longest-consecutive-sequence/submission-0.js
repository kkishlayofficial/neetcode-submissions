class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
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
