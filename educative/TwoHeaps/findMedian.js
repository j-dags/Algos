/*
Prompt:
Design a class to calculate the median of a number stream. The class should have the following methods:
1. insertNum: stores the numer in the class
2. findMedian: returns the median of all numbers inserted in the class. (If its even number of numbers inserted, median is average of two middle numbers)

Approach:
Can use two heaps. Split list into min heap and max heap. Inserting a number into a heap will take O(logn)

O(logN)t | O(n)s. Heap insertion is logN time complexity. But why? Space complexity O(n) b/c we're storing all numbers
*/

const Heap = require('collections/heap')

class Median {
	constructor() {
		// Declare heaps. First arg is values, not sure what second arg is, third arg is sorting function
		this.maxHeap = new Heap([], null, (a, b) => a - b)
		this.minHeap = new Heap([], null, (a, b) => b - a)
	}

	insertNum(num) {
		// If maxHeap is empty or num value is <= top of minHeap, push into maxHeap
		if (this.maxHeap.length === 0 || this.minHeap.peek() >= num)
			this.maxHeap.push(num)
		else this.minHeap.push(num)

		this.adjustHeaps() // Call heap adjust method
	}

	adjustHeaps() {
		// If heaps imbalanced, pop and shift the top values accordingly. We allow maxHeap to have 1 more val than minheap by default
		if (this.maxHeap.length - this.minHeap.length > 1)
			this.minHeap.push(this.maxHeap.pop())
		else if (this.minHeap.length > this.maxHeap.length)
			this.maxHeap.push(this.minHeap.pop())
	}

	findMedian() {
		// If heaps have even value, return the average
		if (this.maxHeap.length === this.minHeap.length) {
			return (this.maxHeap.peek() + this.minHeap.peek()) / 2
		}
		return this.maxHeap.peek()
	}
}

// ARRAY APPROACH
// class Median {
// 	constructor() {
// 		this.maxArray = []
// 		this.minArray = []
// 	}

// 	insertNum(val) {
// 		debugger
// 		if (!this.maxArray.length) this.maxArray.push(val)
// 		else if (val < this.maxArray[0]) this.maxArray.push(val)
// 		else if (val > (this.minArray[0] || 0)) this.minArray.push(val)
// 		else this.maxArray.unshift(val)
// 		this.balanceArr()
// 	}

// 	balanceArr() {
// 		// reorganize heaps
// 		if (this.minArray.length > this.maxArray.length) {
// 			let shift = this.minArray.shift()
// 			this.maxArray.unshift(shift)
// 		} else if (this.maxArray.length - this.minArray.length > 1) {
// 			let shift = this.maxArray.shift()
// 			this.minArray.unshift(shift)
// 		}
// 	}

// 	findMedian() {
// 		if ((this.maxArray.length + this.minArray.length) % 2 === 0) {
// 			return (this.maxArray[0] + this.minArray[0]) / 2
// 		} else return this.maxArray[0]
// 	}
// }

let median = new Median()
median.insertNum(3)
median.insertNum(1)
median.insertNum(5)
median.insertNum(4)
console.log(median.findMedian())
