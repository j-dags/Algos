class LinkedList {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

function removeDuplicatesFromLinkedList(linkedList) {
	let current = linkedList

	while (current.next) {
		while (current.next && current.next.value === current.value) {
			current.next = current.next.next
		}
		if (current.next) current = current.next
	}
	return linkedList
}
