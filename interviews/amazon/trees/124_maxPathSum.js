/*
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.
The path sum of a path is the sum of the node's vals in the path.
Given the root of a binary tree, return the maximum path sum of any path.

O(n)t | O(1)s
*/

class TreeNode {
	constructor(val) {
		this.val = val
		this.left = null
		this.right = null
	}
}

var maxPathSum = function (root) {
	let max = -Infinity

	function calcSum(root) {
		if (!root) return 0

		let left = Math.max(0, calcSum(root.left))
		let right = Math.max(0, calcSum(root.right))

		max = Math.max(max, root.val + left + right)
		return root.val + Math.max(left, right) // each node returns its value + max of left or right
	}

	calcSum(root)
	return max
}

let root = new TreeNode(-10)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)
console.log(maxPathSum(root))

root = new TreeNode(1)
root.left = new TreeNode(-2)
root.right = new TreeNode(3)
console.log(maxPathSum(root))
