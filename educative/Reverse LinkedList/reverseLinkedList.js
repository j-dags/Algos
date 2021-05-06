/*
Prompt: Given a singly linked list, return a reversed linked list.

Approach: Iterate through the linked list and at each node swap prev and next. Since its singly linked we don't have this.prev so we have to keep track of the previous node as we iterate.

O(n)t | O(1)s
*/

class listNode {
	constructor(val) {
		this.value = val
		this.next = null
	}
}

const reverseLinkedList = (head) => {
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

const two = new listNode(2)
const four = new listNode(4)
const six = new listNode(6)
const eight = new listNode(8)
const ten = new listNode(10)

two.next = four
four.next = six
six.next = eight
eight.next = ten

console.log(two)
console.log(reverseLinkedList(two))
