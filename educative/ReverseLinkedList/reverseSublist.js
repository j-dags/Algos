/*
Prompt: Given a singly linked list and nodes 'p' and 'q', reverse the linked list inside nodes 'p' and 'q'.

Approach: Define a helper function to reverse the sublist after 'p'.

O(n)t | O(1)s. Space complexity is still constant because we are mutating the original linkedList.
*/

const reverseSubList = (head, p, q) => {
	debugger
	let curr = head
	let count = 1

	// through linkedList until we the node before 'p'
	while (curr && count < p - 1) {
		curr = curr.next
		count++
	}

	// set node before 'p' next value as the returned reversed sublist
	curr.next = reverseList(curr.next, q - p)

	console.log(head.get_list())
	return head
}

// cefine a helper function to reverse the sublist
const reverseList = (head, length, count = 0) => {
	let curr = head
	let prev = null

	// for the given interval length, reverse the linked list
	while (curr && count <= length) {
		let next = curr.next
		curr.next = prev
		prev = curr
		curr = next
		count++
	}

	// after list is reverse, set the the value of the new tail equal to the rest of the original linked list
	head.next = curr
	return prev
}

class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}

	get_list() {
		let result = ''
		let temp = this
		while (temp !== null) {
			result += temp.val + ' '
			temp = temp.next
		}
		return result
	}
}

const one = new Node(1)
const two = new Node(2)
const three = new Node(3)
const four = new Node(4)
const five = new Node(5)

one.next = two
two.next = three
three.next = four
four.next = five

// console.log(reverseList(two, 2))
console.log(reverseSubList(one, 2, 4))
