// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return null;
        let map = new Map();
        let newHead = new Node(head.val);
        let copy = newHead;
        let temp = head.next;
        map.set(head, newHead);
        while(temp){
            let curr = new Node(temp.val);
            copy.next = curr;
            copy = curr;
            map.set(temp, curr);
            temp = temp.next;
        }
        temp = head;
        copy = newHead;
        while(temp){
            const node = map.get(temp);
            node.random = map.get(temp.random);
            temp = temp.next;
        }
        return newHead;
    }
}
