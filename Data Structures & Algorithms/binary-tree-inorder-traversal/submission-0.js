/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    inorderTraversal(root) {
        const res = [];

        const traversal = (root) => {
            if(!root) return;
            traversal(root.left);
            res.push(root.val);
            traversal(root.right);
        }

        traversal(root);
        
        return res;
    }
}
