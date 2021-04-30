/*
Prompt: Given a bst, find the minimum depth using BFS.

Approach: Somehow keep track of depth as we traverse through tree. If a node does not have a right or left node, return the depth.

O(n)t | O(n)s
*/

const minDepth = (head) => {
	// Initialize queue
	let queue = [head]
	// Initialize a depth tracker
	let depth = 1

	if (!head) return 0

	// Traverse through tree
	while (queue.length > 0) {
		// Keep track of how many nodes on each level
		let levelCnt = queue.length

		// Traverse through each level's nodes
		for (let i = 0; i < levelCnt; i++) {
			let curr = queue.shift()
			// If a node has no children, we have reached the min depth. Return the depth and exit loop
			if (!curr.left && !curr.right) return depth
			if (curr.left) queue.push(curr.left)
			if (curr.right) queue.push(curr.right)
		}
		// Increment depth when we go to next level in tree
		depth++
	}
	// Returns max depth (only in the case that the tree is completely balanced)
	return depth
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

one.left = two
one.right = three
two.left = four
two.right = five

console.log(minDepth(one))
console.log(minDepth(null))
