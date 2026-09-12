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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;
        const stack = new Array();
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        let temp = slow.next;
        while(temp){
            stack.push(temp.val);
            temp = temp.next;
        }
        temp = head;
        while(stack.length){
            let node = new ListNode(stack.pop());
            fast = temp.next;
            temp.next = node;
            node.next = fast;
            temp = fast;
        }
        slow.next = null;
    }
}
