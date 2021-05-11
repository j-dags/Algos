/*
Given a bst, find the path with the maximum sum.

Approach: Similar to treeDiameter except instead of checking diameter we'll be checking the sums of the node values along a path. NOTE: need to ignore negative sums

O(n)t | O(h)s. Need to iterate through all nodes in the tree. Recursive callstack will be max height of the tree.
*/

class TreeNode {
	constructor(val) {
		this.value = val
		this.left = null
		this.right = null
	}
}

class MaxSum {
	constructor() {
		this.maxSum = -Infinity // Initial max sum is negative infinity
	}

	find_maximum_path_sum(root) {
		this.calcMax(root) // Use the calcMax method to store the max sum to this.maxSum
		return this.maxSum
	}

	calcMax(node) {
		if (!node) return 0 // If node is null return 0 for the sum

		const left = this.calcMax(node.left) // Recursively calc max sum of left path
		const right = this.calcMax(node.right) // Recursively cal max sum of right path

		this.maxSum = Math.max(this.maxSum, node.value, node.value + left + right) // Save max of this.maxSum, current node value, or max sum of child paths

		return node.value + Math.max(left, right) // Bubbles up max sum of current path up the recursive stack
	}
}

const maxSum = new MaxSum()

const head = new TreeNode(-1)
head.left = new TreeNode(-3)
console.log(`Maximum Path Sum: ${maxSum.find_maximum_path_sum(head)}`)

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
console.log(`Maximum Path Sum: ${maxSum.find_maximum_path_sum(root)}`)

root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
console.log(`Maximum Path Sum: ${maxSum.find_maximum_path_sum(root)}`)
