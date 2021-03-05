// This is an input class. Do not edit.
class BinaryTree {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

function binaryTreeDiameter(tree) {
	return findMaxWidth(tree)[1]
}

function findMaxWidth(tree, width = 0) {
	if (tree === null) return [0, 0]

	const leftBranch = findMaxWidth(tree.left, width)
	const rightBranch = findMaxWidth(tree.right, width)
	const depth = Math.max(leftBranch[0], rightBranch[0]) + 1
	const newWidth = Math.max(leftBranch[0] + rightBranch[0])
	width = Math.max(leftBranch[1], rightBranch[1], newWidth)

	return [depth, width]
}

// TIME: O(n) - Visit each node once
// SPACE: O(h) - Height of tree. Callstack for recursion
