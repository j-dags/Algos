/*
Prompt: Return the middle node of the linked list. If there are even nodes, return the second middle node.
Approach: Fast and slow pointers. Fast = 2x slow. Once fast reaches the end, slow should be at the middle node!

O(n)t | O(1)s. Iterate through N nodes. Constant space
*/

const middleLinkedList = (head) => {
	let slow = head
	let fast = head

	while (fast !== null && fast.next !== null) {
		slow = slow.next
		fast = fast.next.next
	}

	return slow
}

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

console.log(`Middle Node: ${middleLinkedList(head).value}`)

head.next.next.next.next.next = new Node(6)
console.log(`Middle Node: ${middleLinkedList(head).value}`)

head.next.next.next.next.next.next = new Node(7)
console.log(`Middle Node: ${middleLinkedList(head).value}`)
