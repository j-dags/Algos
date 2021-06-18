class Node {
	constructor(value, next = null) {
		this.value = value
		this.next = null
	}

	print() {
		let result = ''
		let temp = this
		while (temp) {
			result += temp.value + ' '
			temp = temp.next
		}
		return result
	}
}

const headOne = new Node(2)
headOne.next = new Node(6)
headOne.next.next = new Node(7)
headOne.next.next.next = new Node(8)

const headTwo = new Node(1)
headTwo.next = new Node(3)
headTwo.next.next = new Node(4)
headTwo.next.next.next = new Node(5)
headTwo.next.next.next.next = new Node(9)
headTwo.next.next.next.next.next = new Node(10)

function mergeLL(headOne, headTwo) {
	let p1 = headOne
	let p2 = headTwo
	let prev = null

	// loop while both LL have values
	while (p1 && p2) {
		// if p1 < p2, shift p1 and prev
		if (p1.value < p2.value) {
			prev = p1
			p1 = p1.next
		}
		// if p2 > p1, insert before p1
		else {
			if (prev) prev.next = p2
			prev = p2
			p2 = p2.next
			prev.next = p1
		}
	}

	if (!p1) prev.next = p2 // add any remainder of p2 onto p1
	return headOne < headTwo ? headOne : headTwo // return the smaller value of the two LL heads
}

mergeLL(headOne, headTwo)
console.log(headTwo.print())
