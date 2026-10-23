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
    preorderTraversal(root) {

        const res = [];

        const traversal = (root) => {
            if(!root) return;
            res.push(root.val);
            traversal(root.left);
            traversal(root.right);
        }

        traversal(root);
        return res;
    }
}
