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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let result = new ListNode();
        let curr = result;
        while (list1 && list2) {
            if (list1.val > list2.val) {
                curr.next = new ListNode(list2.val);
                curr = curr.next;
                list2 = list2.next;
            } else {
                curr.next = new ListNode(list1.val);
                curr = curr.next;
                list1 = list1.next;
            }
        }
        while (list1) {
            curr.next = new ListNode(list1.val);
            curr = curr.next;
            list1 = list1.next;
        }
        while (list2) {
            curr.next = new ListNode(list2.val);
            curr = curr.next;
            list2 = list2.next;
        }
        return result.next;
    }
}
