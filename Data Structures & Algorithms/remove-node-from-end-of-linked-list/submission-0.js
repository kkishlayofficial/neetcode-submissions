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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let curr = head;
        let temp = new ListNode(-1);
        temp.next = head;
        head = temp;
        while (n-- > 1) {
            curr = curr.next;
        }
        while (curr.next) {
            curr = curr.next;
            temp = temp.next;
        }

        if (temp.next && temp.next.next) temp.next = temp.next.next;
        else temp.next = null;
        return head.next;
    }
}
