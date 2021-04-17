// This is an input class. Do not edit.
class LinkedList {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

function reverseLinkedList(head) {
	let prev = null
	let curr = head

	// For each node in list, keep track of both previous and next nodes. Swap prev/next and continue down list.
	while (curr) {
		let next = curr.next
		curr.next = prev
		prev = curr
		curr = next
	}
	// Node head will end up at null (outside of the list). Hence, return the prev (last node)
	return prev
}

// TIME: O(n) - traverse list
// SPACE: O(1) - no additional data structures

// Do not edit the lines below.
exports.LinkedList = LinkedList
exports.reverseLinkedList = reverseLinkedList
