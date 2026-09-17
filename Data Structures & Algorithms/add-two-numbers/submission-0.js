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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
        let head = new ListNode(-1);
        let tempHead = head;
        while(l1 && l2){
            let val = l1.val + l2.val + carry;
            carry = Math.floor(val/10);
            val = val % 10;
            let temp = new ListNode(val);
            tempHead.next = temp;
            tempHead = temp;
            l1 = l1.next;
            l2 = l2.next;
        }
        while(l1){
            let val = l1.val + carry;
            carry = Math.floor(val/10);
            val = val % 10;
            let temp = new ListNode(val);
            tempHead.next = temp;
            tempHead = temp;
            l1 = l1.next;
        }
        while(l2){
            let val = l2.val + carry;
            carry = Math.floor(val/10);
            val = val % 10;
            let temp = new ListNode(val);
            tempHead.next = temp;
            tempHead = temp;
            l2 = l2.next;
        }
        if(carry > 0){
            let temp = new ListNode(carry);
            tempHead.next = temp;
            tempHead = temp;
        }
        return head.next;
    }
}
