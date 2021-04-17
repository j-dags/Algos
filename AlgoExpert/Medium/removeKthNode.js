// This is an input class. Do not edit.
class LinkedList {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

function removeKthNodeFromEnd(head, k) {
	let length = listLength(head)
	let removeNode = length - k
	let count = 0
	// If 1st node is to be removed
	if (removeNode === 0) {
		head.value = head.next.value
		head.next = head.next.next
	}
	// Else traverse list until we reach kth - 1 node. Remove node
	else {
		while (count < removeNode - 1) {
			count++
			head = head.next
		}
		head.next = head.next.next
	}
}

// Find length of linked list
function listLength(head) {
	let count = 1
	let currNode = head
	while (currNode.next) {
		count++
		currNode = currNode.next
	}
	return count
}

// TIME: O(n) - loop through list twice
// SPACE: O(1) - only storing variables
