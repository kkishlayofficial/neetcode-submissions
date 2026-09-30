class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        if (nums.length < 2) return 0;
        // let count = 0;
        // let maxIdx = 0;
        // for (let i = 0; i < nums.length; i++) {
        //     if (nums[i] + i > maxIdx) {
        //         maxIdx = nums[i] + i;
        //         count++;
        //         if (maxIdx >= nums.length - 1) {
        //             break;
        //         }
        //     }
        // }
        // return count;

        let l = 0, r = 0, jump = 0;
        while(r < nums.length - 1){
            let far = 0;
            for(let i = l; i<=r; i++){
                far = Math.max(far, nums[i] + i);
            }
            l = r + 1;
            r = far;
            jump++;
        }
        return jump;
    }
}
