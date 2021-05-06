/*
Prompt: Given a binary tree, populate an array to represent its zigzag level order traversal.

Approach: Implement the order traversal but reverse order every other level.
*/

const zigzagTraversal = (root) => {
	debugger
	let queue = [root]
	let result = []

	while (queue.length > 0) {
		let arr = []
		let levelSize = queue.length

		for (let i = 0; i < levelSize; i++) {
			let curr = queue.shift()
			if (result.length % 2 === 0) arr.push(curr.val)
			else arr.unshift(curr.val)

			if (curr.left) queue.push(curr.left)
			if (curr.right) queue.push(curr.right)
		}
		result.push(arr)
	}
	return result
}

class treeNode {
	constructor(val) {
		this.val = val
		this.left = null
		this.right = null
	}
}

const one = new treeNode(1)
const two = new treeNode(2)
const three = new treeNode(3)
const four = new treeNode(4)
const five = new treeNode(5)
const six = new treeNode(6)
const seven = new treeNode(7)
const nine = new treeNode(9)
const ten = new treeNode(10)
const twelve = new treeNode(12)
const seventeen = new treeNode(17)
const twenty = new treeNode(20)

twelve.left = seven
twelve.right = one
seven.left = nine
one.left = ten
one.right = five
ten.left = twenty
ten.right = seventeen

console.log(zigzagTraversal(twelve))
