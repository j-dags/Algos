/*
Prompt: Given a binary tree, populate an array to represent the averages of its level.

Approach: Traverse the tree level by level. Insert the level averages into the answer array

O(n)t | O(n)s. At most we can have 2n/3 nodes on one level which approx. O(n)
*/

const levelAverages = (head) => {
	let averages = []
	let queue = [head]

	while (queue.length > 0) {
		let levelCnt = queue.length
		let levelSum = 0
		for (let i = 0; i < levelCnt; i++) {
			let curr = queue.shift()
			levelSum += curr.val

			if (curr.left) queue.push(curr.left)
			if (curr.right) queue.push(curr.right)
		}
		averages.push(levelSum / levelCnt)
	}
	return averages
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
root.right.left = new Node(10)
root.right.right = new Node(5)

console.log(levelAverages(one))
console.log(levelAverages(root))
