/*
Given a linked list, reverse the linked list. Return the head of the new list.

O(n)t | O(1)s

*/

function reverse(head) {
	let prev = null
	let curr = head

	while (curr) {
		let next = curr.next
		curr.next = prev
		prev = curr
		curr = next
	}

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

head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse(head).get_list()}`)
