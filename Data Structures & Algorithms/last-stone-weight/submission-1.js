class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let heap = new MaxPriorityQueue();
        for (let i = 0; i < stones.length; i++) {
            heap.enqueue(stones[i]);
        }
        while (heap.size() > 1) {
            let x = heap.dequeue();
            let y = heap.dequeue();
            let rem = x - y;
            if (rem) heap.enqueue(rem);
        }
        return heap.size() > 0 ? heap.dequeue() : 0;
    }
}
