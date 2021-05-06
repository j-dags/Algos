/*
Prompt: Given a bst, return the nodes in its right view. In other words, when looking at the tree from the right side, what nodes are visible.

Approach: Add the last node of each level to an array.
*/

const rightTree = (head) => {
	let queue = [head]
	let rights = []

	while (queue.length > 0) {
		let levelCnt = queue.length

		for (let i = 0; i < levelCnt; i++) {
			let curr = queue.shift()
			if (curr.left) queue.push(curr.left)
			if (curr.right) queue.push(curr.right)

			if (i === levelCnt - 1) rights.push(curr.val)
		}
	}
	return rights
}

class Node {
	constructor(val) {
		this.val = val
		this.left = null
		this.right = null
	}
}

const one = new Node(1)
const two = new Node(2)
const three = new Node(3)
const four = new Node(4)
const five = new Node(5)
const six = new Node(6)
const seven = new Node(7)

one.left = two
one.right = three
two.left = four
two.right = five
three.left = six
three.right = seven

var root = new Node(12)
root.left = new Node(7)
root.right = new Node(1)
root.left.left = new Node(9)
root.left.right = new Node(2)
root.left.left.left = new Node(3)
root.right.left = new Node(10)
root.right.right = new Node(5)

console.log(rightTree(one))
console.log(rightTree(root))
