/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

O(n)t | O(1)s
*/

var reverseList = function (head) {
	let prev = null

	while (head) {
		let next = head.next
		head.next = prev
		prev = head
		head = next
	}

	return prev
}
