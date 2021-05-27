/*
Prompt:
Design a class to calculate the median of a number stream. The class should have the following methods:
1. insertNum: stores the numer in the class
2. findMedian: returns the median of all numbers inserted in the class. (If its even number of numbers inserted, median is average of two middle numbers)

Approach:
Can use two heaps. Split list into min heap and max heap. Inserting a number into a heap will take O(logn)

*/

class Median {
	constructor() {
		this.maxArray = []
		this.minArray = []
	}

	insertNum(val) {
		debugger
		if (!this.maxArray.length) this.maxArray.push(val)
		else if (val < this.maxArray[0]) this.maxArray.push(val)
		else if (val > (this.minArray[0] || 0)) this.minArray.push(val)
		else this.maxArray.unshift(val)

		// reorganize heaps
		if (this.minArray.length > this.maxArray.length) {
			let shift = this.minArray.shift()
			this.maxArray.unshift(shift)
		} else if (this.maxArray.length - this.minArray.length > 1) {
			let shift = this.maxArray.shift()
			this.minArray.unshift(shift)
		}
	}

	findMedian() {
		if ((this.maxArray.length + this.minArray.length) % 2 === 0) {
			return (this.maxArray[0] + this.minArray[0]) / 2
		} else return this.maxArray[0]
	}
}

let median = new Median()
median.insertNum(3)
median.insertNum(1)
median.insertNum(5)
median.insertNum(4)
console.log(median.findMedian())
console.log(median)

// console.log(1 % 2)
// console.log(2 % 2)
// console.log(3 % 2)
// console.log(![].length)
