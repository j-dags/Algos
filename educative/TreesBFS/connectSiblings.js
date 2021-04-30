/*
Prompt: Given a bst, connect each node with its level order successor. The last node of each level should point to the first node of the next level

Approach: Traverse through the tree. Set curr.right? equal to the next sibling node.

O(n)t | O(n)s
*/

const connectSiblings = (head) => {
	let queue = [head]

	while (queue.length > 0) {
		let curr = queue.shift()

		if (curr.left) queue.push(curr.left)
		if (curr.right) queue.push(curr.right)

		curr.next = queue[0]
	}

	return head
}

class Node {
	constructor(val) {
		this.val = val
		this.left = null
		this.right = null
		this.next = null
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

console.log(connectSiblings(one))
