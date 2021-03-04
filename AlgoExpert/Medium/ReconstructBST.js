// This is an input class. Do not edit.
class BST {
	constructor(value, left = null, right = null) {
		this.value = value
		this.left = left
		this.right = right
	}
}

function reconstructBst(values) {
	if (values.length < 1) return null

	// Split up node values array into current node, left (smaller) nodes, and right (larger or equal) nodes
	const nextValue = values.shift()
	const leftValues = values.filter((node) => node < nextValue)
	const rightValues = values.filter((node) => node >= nextValue)

	// Create tree for current node and recursively create child nodes
	const tree = new BST(nextValue)
	tree.left = reconstructBst(leftValues)
	tree.right = reconstructBst(rightValues)

	return tree
}

// TIME: O(n) - have to iterate through values array
// SPACE: O(n) - tree scales with values array
