/*
Prompt: given two sorted linked lists, merge them in sorted order.

Approach: Use three pointers, p1, p2, p1prev. Increment through the linkedlists and where appropriate insert p2 head in between prev and p1. At the end, return whichever head points to the lower initial value.

O(n+m)t | O(1)s. Iterate through both linked lists. No extra spaced required.

*/

class LinkedList {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

function mergeLinkedLists(headOne, headTwo) {
	let p1 = headOne
	let p2 = headTwo
	let prev = null

	// keep iterating until we hit the end of both lists
	while (p1 !== null && p2 !== null) {
		// increment p1 && prev while p1 < p2
		if (p1.value < p2.value) {
			prev = p1
			p1 = p1.next
		} else {
			// if there is a prev node, then insert p2 in between prev and p1
			if (prev !== null) prev.next = p2
			prev = p2
			p2 = p2.next
			prev.next = p1
		}
	}
	// once p1 runs out, insert the rest of p2
	if (!p1) prev.next = p2

	// return whichever head has a lower initial value
	return headOne.value < headTwo.value ? headOne : headTwo
}

const one = new LinkedList('1')
const two = new LinkedList('2')
const three = new LinkedList('3')
const four = new LinkedList('4')
const five = new LinkedList('5')
const six = new LinkedList('6')
const seven = new LinkedList('7')
const eight = new LinkedList('8')
const nine = new LinkedList('9')
const ten = new LinkedList('10')

one.next = two
two.next = three
three.next = four
four.next = five

six.next = seven
seven.next = eight
eight.next = nine
nine.next = ten

console.log(mergeLinkedLists(one, six))
