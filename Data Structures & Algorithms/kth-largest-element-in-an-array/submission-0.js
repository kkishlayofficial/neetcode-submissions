class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const mHeap = new MaxPriorityQueue();
        for(let num of nums){
            mHeap.enqueue(num);
        }
        while(k>1){
            mHeap.dequeue();
            k--;
        }
        return mHeap.front();
    }
}
