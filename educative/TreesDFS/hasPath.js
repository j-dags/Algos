/*
Prompt: Given a binary tree and number S, find if the tree has a path from root-to-leaf such that the sum of all the nodes values in that path equal S.

Approach: Add each nodes value to its parents. As we traverse through the tree, we subtract the current nodes value from the target value. If at any point the current node value === target value we found a valid path.

O(n)t | O(h)s. Recursive stack is height of BST. In the worst case, this would be O(n) in a single-branch bst.
*/

const hasPath = (head, s) => {
	return calcPath(head, s)
}

const calcPath = (node, target) => {
	// Base cases: return false if node is empty
	if (!node) return false
	// Return true if we're at a leaf node and node.val === target val
	if (!node.left && !node.right && node.val === target) return true

	// Else return left branch OR right branch
	return (
		calcPath(node.left, target - node.val) ||
		calcPath(node.right, target - node.val)
	)
}

class Node {
	constructor(val) {
		this.val = val
		this.left = null
		this.right = null
	}
}

var root = new Node(12)
root.left = new Node(7)
root.right = new Node(1)
root.left.left = new Node(9)
root.right.left = new Node(10)
root.right.right = new Node(5)

console.log(hasPath(root, 23))
console.log(hasPath(root, 28))
console.log(hasPath(root, 111))
console.log(hasPath(root, 18))
