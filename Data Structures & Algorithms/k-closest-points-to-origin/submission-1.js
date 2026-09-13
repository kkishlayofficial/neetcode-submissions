class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let maxHeap = new MaxPriorityQueue((item) => item.dis);

        for (let point of points) {
            let dis = Math.sqrt(point[0] ** 2 + point[1] ** 2);
            maxHeap.enqueue({ dis, point });
            if (maxHeap.size() > k) maxHeap.dequeue();
        }

        let result = [];
        while (maxHeap.size()) {
            result.push(maxHeap.dequeue().point);
        }
        return result;
    }
}
