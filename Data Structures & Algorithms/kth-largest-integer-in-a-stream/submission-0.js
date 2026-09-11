class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.minHeap = new MinPriorityQueue();
        this.size = k;
        for(let num of nums){
            this.minHeap.enqueue(num)
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.enqueue(val);
        while(this.minHeap.size() > this.size) this.minHeap.dequeue();
        return this.minHeap.front();
    }
}
