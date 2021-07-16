/*
Given a tree, validate whether it is a valid BST. Each node has a value, left, and right.

Approach:
DFS because we need to pass a minimum and maximum to each recursive call
- Each recursive call receives a min and max
- When we recurse to node.left we replace max w/ node.value and recurse.
- When we recurse to node.right we replace min w/ node.value and recurse

O(n)t + O(h)s
*/

const validateBST = (tree) => {
	const dfs = (node, min = -Infinity, max = Infinity) => {
		if (!node) return true
		if (node.value < min || node.value >= max) return false
		return dfs(node.left, min, node.value) && dfs(node.right, node.value, max)
	}
	return dfs(tree)
}

class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

const ten = new Node(10)
ten.left = new Node(5)
ten.left.left = new Node(2)
ten.left.right = new Node(5)
ten.left.left.left = new Node(1)
ten.right = new Node(15)
ten.right.left = new Node(13)
ten.right.right = new Node(22)
ten.right.left.right = new Node(14)

console.log(validateBST(ten))

ten.right.left.right.left = new Node(1)
console.log(validateBST(ten))
