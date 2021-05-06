/*
Prompt: Given a singly linkedList that contains a cycle, write a function to find the starting node.
Approach: Find the cycle length, K. Then initiate two pointers: one at the start and one K nodes away. Keep incrementing nodes by one until eventually they meet. That is the start of the cycle.

O(n)t | O(1)s
All cycle looping is done in a linear fashion, not nested. No additional space is required assigned from counting variables.
*/

class Node {
	constructor(value, next = null) {
		this.value = value
		this.next = next
	}
}

const head = new Node(1)
const two = new Node(2)
const four = new Node(4)
const five = new Node(5)
const six = new Node(6)

head.next = two
two.next = four
four.next = five
five.next = six
six.next = four

// Much more elegant solution!
const findCycleStart = (head) => {
	let slow = head.next
	let fast = head.next.next

	// find the point 'p' where the fast and slow pointers will meet
	while (slow !== fast) {
		slow = slow.next
		fast = fast.next.next
	}

	// reset the slow pointer. at this point the slow pointer will be a distance 'd' from the starting node of the loop. because of math, the second pointer will be a dikstance 'r' (which happens to equal 'd') from the cycle. so, the two pointers will meet at our desired node.
	slow = head
	while (slow !== fast) {
		slow = slow.next
		fast = fast.next
	}
	return slow
}

console.log(findCycleStart(head))
