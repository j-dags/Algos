/*
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

*/

const buildTree = (preorder, inorder) => {
	let map = new Map()
	inorder.forEach((el, idx) => {
		map.set(el, idx)
	})

	function helper(start, end) {
		if (start > end) return null
		let curr = preorder.shift()
		let node = new TreeNode(curr)
		node.left = helper(start, map.get(curr) - 1)
		node.right = helper(map.get(curr) + 1, end)
		return node
	}

	return helper(0, inorder.length - 1)
}
