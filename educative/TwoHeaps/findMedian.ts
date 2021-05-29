/*
Prompt:
Design a class to calculate the median of a number stream. The class should have the following methods:
1. insertNum: stores the numer in the class
2. findMedian: returns the median of all numbers inserted in the class. (If its even number of numbers inserted, median is average of two middle numbers)

Approach:
Can use two heaps. Split list into min heap and max heap. Inserting a number into a heap will take O(logn)

*/
const Heap = require('collections/heap')

class MedianOfStream {
	constructor() {
		this.maxHeap = new Heap([], null, (a, b) => a - b)
		this.minHeap = new Heap([], null, (a, b) => b - a)
	}
}
