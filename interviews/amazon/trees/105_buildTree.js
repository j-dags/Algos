/*
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

Approach:
We build the tree by going in preorder order. We take advantage of the fact that in the inorder order, all values to the left of a value are left of the value (same for right).

- Built a hash table {nodeValue : inorderIndex}
- define a helper (tree building) function
	- shift a value out of the preorder array
	- create a Node(value)
	- get the inorderIndex from hash table
	- node.left = helper(start, inorderIndex - 1)
	- node.right = helper(indorderIndex + 1, end)
	- return null if (start > end)

O(n)t | O(n)s
*/

class TreeNode {
	constructor(val) {
		this.val = val
		this.left = null
		this.right = null
	}
}

const buildTree = (preorder, inorder) => {
	const hash = {}

	inorder.forEach((el, idx) => {
		hash[el] = idx
	})

	const assembleTree = (start, end) => {
		if (start > end) return null
		const curr = preorder.shift()
		const node = new TreeNode(curr)
		node.left = assembleTree(start, hash[curr] - 1)
		node.right = assembleTree(hash[curr] + 1, end)
		return node
	}

	return assembleTree(0, inorder.length - 1)
}

const preorder = [3, 9, 20, 15, 7]
const inorder = [9, 3, 15, 20, 7]
console.log(buildTree(preorder, inorder))
