/*
Given the root of a binary tree, invert the tree, and return its root.

Input:   tree = 1               
               R L               
              2   3               
             R   R L             
            5   6   7           
Output:  tree = 1
               / \
              3   2
             / \   \
            7   6   5
*/

const invertTree = function(root) {
    if (!root) return null;

    invertTree(root.right);
    invertTree(root.left);

    let curr = root.left;
    root.left = root.right;
    root.right = curr;
    return root;
};