/*
Prompt: Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

Approach: Need to keep track of depth somehow. Or maybe for the current subarray we add all of the children in a new subarray.

O(n)t | O(n)s. Need to iterate through each node and results array will scale linearly to nodes.
*/

// This solutions returns the node values and not the nodes themselves.
const traverse = (head) => {
	let queue = [head]
	let result = []

	// Iterate through all nodes in a BFS fashion
	while (queue.length > 0) {
		// Define a new array for each level
		let arr = []
		// Will shift out as many nodes as required for that particular level
		const levelSize = queue.length
		for (let i = 0; i < levelSize; i++) {
			let curr = queue.shift()
			// Add child nodes to the queue
			if (curr.left) queue.push(curr.left)
			if (curr.right) queue.push(curr.right)
			arr.push(curr.val)
		}
		// Add level array to results array
		result.push(arr)
	}
	return result
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

console.log(traverse(one))
