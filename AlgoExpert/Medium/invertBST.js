// Recursively iterate through tree in post-order. That way child swaps are completed before parent swap
function invertBinaryTree(tree) {
	if (tree.left) invertBinaryTree(tree.left)
	if (tree.right) invertBinaryTree(tree.right)
	tree = swap(tree)

	return tree
}

// Swaps left and right branches of a tree
function swap(tree) {
	let swap = tree.left
	tree.left = tree.right
	tree.right = swap
	return tree
}

// This is the class of the input binary tree.
class BinaryTree {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

// TIME: O(n) - Iterate through tree
// SPACE: O(d) - Max size of call stack (recursion)
