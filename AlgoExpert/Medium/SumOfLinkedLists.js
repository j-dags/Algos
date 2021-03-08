// This is an input class. Do not edit.
class LinkedList {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

function sumOfLinkedLists(listOne, listTwo) {
	let sum = 0
	let carry = 0
	let listHead = new LinkedList(0)
	let currNode = listHead

	while (listOne || listTwo || carry) {
		// set sum equal to carry from prev nodes
		sum = carry
		// If listOne has a node, add value to sum and go to next node
		if (listOne) {
			sum += listOne.value
			listOne = listOne.next
		}
		// If listTwo has a node, add value to sum and go to next node
		if (listTwo) {
			sum += listTwo.value
			listTwo = listTwo.next
		}
		// Carry 10s digit to next iteration
		carry = sum > 9 ? 1 : 0
		sum = sum % 10
		currNode.next = new LinkedList(sum)
		currNode = currNode.next
	}
	return listHead.next
}

// TIME: O(max(n,m)) - scales with larger list
// SPACE: O(max(n,m)) - scales with larger list

// Do not edit the lines below.
exports.LinkedList = LinkedList
exports.sumOfLinkedLists = sumOfLinkedLists
