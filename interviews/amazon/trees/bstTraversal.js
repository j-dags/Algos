/*
Given a bst and an empty array, traverse through the bst w/ inorder, preorder, and postorder traversal. Populate the array as you rtraverse the bst.

Approach:
- DFS and push to array as we go

O(n)t | O(n)s

*/

function inOrderTraverse(tree, array) {
	if (!tree) return
	inOrderTraverse(tree.left, array)
	array.push(tree.value)
	inOrderTraverse(tree.right, array)
	return array
}

function preOrderTraverse(tree, array) {
	if (!tree) return
	array.push(tree.value)
	preOrderTraverse(tree.left, array)
	preOrderTraverse(tree.right, array)
	return array
}

function postOrderTraverse(tree, array) {
	if (!tree) return
	postOrderTraverse(tree.left, array)
	postOrderTraverse(tree.right, array)
	array.push(tree.value)
	return array
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
ten.right.right = new Node(22)

console.log(inOrderTraverse(ten))
console.log(preOrderTraverse(ten))
console.log(postOrderTraverse(ten))
