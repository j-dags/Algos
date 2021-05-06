class Node {
	constructor(value, next = null) {
		this.value = value
		this.next = next
	}
}

head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = head.next.next

const hasCycle = (head) => {
	// Define our pointers
	let fast = head
	let slow = head

	console.log(typeof head.value, head.value)

	// If fast is outside of the linkedlist it will be null. If fast is the last node, fast.next will be null
	while (fast !== null && fast.next !== null) {
		// Increment pointers
		fast = fast.next.next
		slow = slow.next
		if (slow === fast) return true
	}

	return false
}

// O(n)t | O(1)s. Iterate throgh n nodes.
console.log(hasCycle(head))
