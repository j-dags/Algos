/*
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

Approach:
Recursion. We reverse K nodes in our list. We keep track of the original list head (origin).
We then set origin.next = to the recursive call reverseKGroup() on the next node in the list.
We also need a helper function to count the remaining nodes in the list. If it's less than K we don't swap.

O(n**2)t --
O(n)s -- Max recursive stack would be equal to length of list.



*/

// Reverse K nodes function
var reverseKGroup = function (head, k) {
	if (!head || countNodes(head) < k) return head

	let origin = head
	let prev = head
	let curr = head.next
	let count = k

	while (count > 1) {
		let next = curr.next
		curr.next = prev
		prev = curr
		curr = next
		--count
	}

	origin.next = reverseKGroup(curr, k)

	return prev
}

// Count nodes helper function
const countNodes = function (head) {
	if (!head) return 0
	return 1 + countNodes(head.next)
}

class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(reverseKGroup(head, 3))
