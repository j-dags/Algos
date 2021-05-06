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
head.next.next.next.next.next.next = head.next.next.next

const findCycleLength = (head) => {
	let slow = head
	let fast = head

	while (fast !== null && fast.next !== null) {
		fast = fast.next.next
		slow = slow.next
		// Once we find a cycle, calculate and return the cycle length
		if (slow === fast) return calcCycleLength(fast)
	}
	return 0
}

const calcCycleLength = (node) => {
	let length = 1
	let current = node.next

	// Loop through cycle until we get back to the beginning. Increment counter as we go
	while (current.value !== node.value) {
		current = current.next
		length++
	}
	return length
}

console.log(findCycleLength(head))

/*
Problem: Given a singlely linkedList with a cycle, find the length of the cycle.
Approach: First, find if a cycle exists. If cycle exists, run a helper function to calculate the cycle length. Basically, loop through the cycle again with a counter to count how long it is.

O(n)t | O(1)s. Iterate through the cycle multiple times, but in a linear fashion. No scaling space complexity
*/
