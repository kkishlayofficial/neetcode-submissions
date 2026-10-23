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
    postorderTraversal(root) {
        const res = [];

        const traversal = (root) => {
            if(!root) return;
            traversal(root.left);
            traversal(root.right);
            res.push(root.val);
        }

        traversal(root);
        return res;
    }
}
