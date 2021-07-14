/*
Given three nodes in the same BST. Our job is to determine if nodeOne or nodeThree is an ancestor of nodeTwo. Then determine if the non-ancestor is a descendant of nodeTwo. It is not guaranteed that they're all in the same branch.

Approach:
Simple
- Write a helper function to DFS find if a node is an ancestor.
- Check nodeOne and nodeThree if they're ancestors of nodeTwo
- Check if the other one is a descendant of nodeTwo

O(n)t | O(h)s -- Worst case we traverse through the whole tree. Space will be size of recursive stack.

*/

function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
	if (findAncestor(nodeOne, nodeTwo)) return findAncestor(nodeTwo, nodeThree)
	if (findAncestor(nodeThree, nodeTwo)) return findAncestor(nodeTwo, nodeOne)
	return false
}

const findAncestor = (node, target) => {
	if (!node) return false
	if (node === target) return true
	return findAncestor(node.left, target) || findAncestor(node.right, target)
}
