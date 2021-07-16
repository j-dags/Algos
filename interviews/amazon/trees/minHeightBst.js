/*
Given the inorder order of a bst, construct a bst of minimum height.

Approach:
- Use start and end pointers
- Find the middle index of a given array
  - Create a node
  - node.left = new Tree of left subarray
  - node.right = new tree of right subarray

O(n)t | O(h)s
*/

function minHeightBst(array) {
	const buildTree = (start, end) => {
		if (start > end) return null
		const mid = Math.floor((start + end) / 2)
		const node = new BST(array[mid])
		node.left = buildTree(start, mid - 1)
		node.right = buildTree(mid + 1, end)
		return node
	}
	return buildTree(0, array.length - 1)
}

class BST {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}
function preOrderTraverse(tree, array) {
	if (!tree) return
	array.push(tree.value)
	preOrderTraverse(tree.left, array)
	preOrderTraverse(tree.right, array)
	return array
}

function inOrderTraverse(tree, array) {
	if (!tree) return
	inOrderTraverse(tree.left, array)
	array.push(tree.value)
	inOrderTraverse(tree.right, array)
	return array
}

let tree = minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22])
console.log(tree)
console.log(preOrderTraverse(tree, []))
console.log(inOrderTraverse(tree, []))
