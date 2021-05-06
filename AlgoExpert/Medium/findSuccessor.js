function findSuccessor(tree, node) {
	if (node.right) return leftMostChild(node.right)
	return rightMostParent(node)
}

// Moves down a "left branch" of the tree. Returns node at the end
function leftMostChild(node) {
	let currNode = node
	while (currNode.left) currNode = currNode.left
	return currNode
}

// Moves up a "right branch" of the tree and returns parent node
function rightMostParent(node) {
	let currNode = node
	while (currNode.parent && currNode.parent.right === currNode)
		currNode = currNode.parent
	return currNode.parent
}

// TIME: O(h) - max height of the tree
// SPACE: O(1) - only storing variables
