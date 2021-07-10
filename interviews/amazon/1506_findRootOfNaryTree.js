/*
You are given all the nodes of an N-ary tree as an array of Node objects, where each node has a unique value.

Return the root of the N-ary tree.

Approach:
We know that the root node is the node that is not a child. So if we were to iterate through each node and its children, 
and save all the children, the parent node is hte node that was not a child.

By that same logic, we only visit the parent node once and all other nodes twice. So if we keep a sum we add a nodes value
when we iterate, but if it's a child we subtract the value. The end value of our pointer will be the parent node.

O(n+e)t | O(1)s. I believe this is O(n+e) because we need to iterate through each node and its children.

*/

var findRoot = function(tree) {
    let sum = 0
    for (const node of tree) {
        sum += node.val
        for (const child of node.children) {
            sum -= child.val
        }
    }
    for (const node of tree) {
        if (node.val === sum) return node
    }
};