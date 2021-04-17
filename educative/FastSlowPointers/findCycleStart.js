/*
Prompt: Given a singly linkedList that contains a cycle, write a function to find the starting node.
Approach: Find the cycle length, K. Then initiate two pointers: one at the start and one K nodes away. Keep incrementing nodes by one until eventually they meet. That is the start of the cycle.

O(n)t | O(1)s
All cycle looping is done in a linear fashion, not nested. No additional space is required assigned from counting variables.
*/

class Node {
	constructor(value, next = null) {
		this.value = value
		this.next = next
	}
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next

const findCycleStart = (head) => {
	// Declare two pointers, left and right. Once they meet we will have our cycle start
	let left = head
	let right = head

	// Find the length of the cycle
	let length = findCycleLength(head)
	// Shift the right node by the length of the cycle
	for (let i = length; i > 0; i--) right = right.next

	// Loop through cycle until two pointers meet up
	while (left.value !== right.value) {
		left = left.next
		right = right.next
	}
	return left
}

const findCycleLength = (head) => {
	let slow = head
	let fast = head

	while (fast !== null && fast.next !== null) {
		fast = fast.next.next
		slow = slow.next

		if (fast === slow) return calcCycleLength(fast)
	}
	return null
}

const calcCycleLength = (node) => {
	let length = 1
	let current = node.next

	while (current.value !== node.value) {
		current = current.next
		length++
	}
	return length
}

console.log(findCycleStart(head))
