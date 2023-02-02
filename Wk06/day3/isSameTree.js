/*
Given the roots of two binary trees p and q, write a function to check if they are 
the same or not.

Two binary trees are considered the same if they are structurally identical, and 
the nodes have the same value.

Input:     p =  1               q = 1
               / \                 / \
              2   3               2   3
             /   / \             /   / \
            5   6   7           5   6   7
Output: true
*/

const isSameTreeIterative = function (p, q) {
    // set up either a DFS of BFS
    // set up a stack array with roots of p & q
    // while loop => while (stack.length)
    // pop off p and q values off stack, and check if different return false, otherwise if (p.right && q.right)
    // if it exits without returning false, return true

    let stack = [[p, q]];

    while (stack.length) {
        let [pNode, qNode] = stack.pop();
        if (pNode.val !== qNode.val) {
            return false;
        }

        if (pNode.right || qNode.right) {
            if (pNode.right && qNode.right) {
                stack.push([pNode.right, qNode.right]);
            } else {
                return false
            }
        }
        
        if (pNode.left || qNode.left) {
            if (pNode.left && qNode.left) {
                stack.push([pNode.left, qNode.left]);
            } else {
                return false;
            }
        }
    }

    return true;
};

const isSameTreeRecursive = function (p, q) {
    if (!p && ! q) return true;

    if (!p || !q) return false;

    if (p.val !== q.val) return false;

    return isSameTreeRecursive(p.left, q.left) && isSameTreeRecursive(p.right, q.right);
}
