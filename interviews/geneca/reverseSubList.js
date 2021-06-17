/*
Given a linked list, reverse a sublist within the LL. Return the head of the new list.

O(n)t | O(1)s

*/

function reverseSubList(head, p, q) {
	let curr = head
	// iterate until we get to p-1 node
	for (let i = 1; i < p - 1; i++) curr = curr.next
	// set p-1.next = reverse subList
	curr.next = reverse(curr, curr.next, q - p)

	return head
}

// helper function to reverse a section of LL
function reverse(prev, head, k) {
	let curr = head
	let first = curr // save the origin starting node

	for (let i = 0; i <= k; i++) {
		let next = curr.next
		curr.next = prev
		prev = curr
		curr = next
	}

	first.next = curr // set original starting node.next to curr node
	return prev
}

class Node {
	constructor(value, next = null) {
		this.value = value
		this.next = null
	}

	get_list() {
		let result = ''
		let temp = this
		while (temp !== null) {
			result += temp.value + ' '
			temp = temp.next
		}
		return result
	}
}

head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(
	`Nodes of reversed LinkedList are: ${reverseSubList(head, 2, 4).get_list()}`
)

head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(
	`Nodes of reversed LinkedList are: ${reverseSubList(head, 3, 5).get_list()}`
)
