// This is an input class. Do not edit.
class BinaryTree {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

function heightBalancedBinaryTree(tree) {
	return searchTree(tree)[1]
}

function searchTree(tree, balanced = true) {
	if (tree === null) return [0, true]

	const leftBranch = searchTree(tree.left)
	const rightBranch = searchTree(tree.right)
	// Keep track of depth at each node
	const depth = Math.max(leftBranch[0], rightBranch[0]) + 1
	// If tree's imbalanced, set balanced to false
	if (Math.abs(leftBranch[0] - rightBranch[0]) > 1) balanced = false
	// Check to make sure none of child nodes are imbalanced
	balanced = balanced && leftBranch[1] && rightBranch[1]
	return [depth, balanced]
}

// TIME: O(n) - search all nodes
// SPACE: O(h) - max size of call stack
