/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = head;
        let fast = head;
        while(slow && fast.next){
            slow = slow.next;
            if(slow == null) return false;
            if(fast.next)
            fast = fast.next.next;
            if(fast == null) return false;
            if(slow == fast) return true;
        }
        return false;
    }
}
