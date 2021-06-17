/*
Given the head of a singly LL that contains a cycle, find the starting node of the cycle.

Aproach:
Have a fast and slow pointer. Find where they meet. Then reset one of the pointers and iterate at same speed. They will meet at the start.

O(n)t | O(1)s
*/

class Node {
	constructor(value, next = null) {
		this.value = value
		this.next = null
	}
}

function findCycleStart(head) {
	let fast = head.next.next
	let slow = head.next

	// find where pointers meet
	while (fast !== slow) {
		fast = fast.next.next
		slow = slow.next
	}

	// reset one of the pointers to beginning
	fast = head
	// pointers will now meet at the cycle start
	while (fast !== slow) {
		fast = fast.next
		slow = slow.next
	}

	return fast
}

head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${findCycleStart(head).value}`)
