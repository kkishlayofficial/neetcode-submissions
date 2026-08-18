class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let st = 1;
        const prefixArr = [];
        for(let num of nums){
            st*=num;
            prefixArr.push(st);
        }
        st = 1;
        const suffixArr = [];
        for(let i = nums.length - 1; i>=0; i--){
            st*= nums[i];
            suffixArr[i] = st;
        }
        const res = [];
        res[0] = suffixArr[1];
        for(let i = 1; i<nums.length - 1; i++){
            res[i] = prefixArr[i - 1] * suffixArr[i + 1];
        }
        res.push(prefixArr[nums.length - 2]);
        return res;
    }
}
