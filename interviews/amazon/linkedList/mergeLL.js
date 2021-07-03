/*
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Approach:
Have a prev, p1 and p2. We will merge the p2 list into p1.

O(n+m)t | O(1)s
*/

class ListNode {
	constructor(val) {
		this.val = val
		this.next = null
	}
}

const mergeTwoLists = function (headOne, headTwo) {
	let prev = null
	let p1 = headOne
	let p2 = headTwo

	if (!p2 && !p1) return null
	if (!p1) return p2
	if (!p2) return p1

	while (p1 && p2) {
		if (p1.val <= p2.val) {
			prev = p1
			p1 = p1.next
		} else {
			prev.next = p2
			prev = p2
			p2 = p2.next
			prev.next = p1
		}
	}

	// add rest of p2 to p1
	// if (p2) p1.next = p2
	console.log(p1)
	console.log(p2)
	console.log(headOne)
	prev.next = p2

	return headOne.val <= headTwo.val ? headOne : headTwo
}

const headOne = new ListNode(1)
headOne.next = new ListNode(2)
headOne.next.next = new ListNode(4)

const headTwo = new ListNode(1)
headTwo.next = new ListNode(3)
headTwo.next.next = new ListNode(4)

console.log(mergeTwoLists(headOne, headTwo))
