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
	recursiveMerge(headOne, headTwo, null)
	return headOne.value < headTwo.value ? headOne : headTwo
}

function recursiveMerge(p1, p2, p1Prev) {
  if (p1 === null) {
    p1Prev.next = p2
    return
  }
  if (p2 === null) return
​  if (p1.value < p2.value) {
    recursiveMerge(p1.next, p2, p1)
  } else {
    if (p1Prev !== null) p1Prev.next = p2
    const newP2 = p2.next
    p2.next = p1
    recursiveMerge(p1, newP2, p2)
  }
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

two.next = six
six.next = seven
seven.next = eight

one.next = three
three.next = four
four.next = five
// five.next = nine
// nine.next = ten

console.log(mergeLinkedLists(two, one))
