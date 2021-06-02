/*
Given an array of numbers and a number 'k', find the median of all 'k' sized subarrays in the array.

Approach:
Sliding window. We add to and subtract from heaps as we move the window. For each iteration, we push the findMedian() into an arr and return the arr.
Tricky part is we need to remember to rearrange the heaps as we slide add AND delete values from the heaps.

O(logn * k)t | O(n)s. Time. Need to iterate through n values, the delete method will take O(k) time because we need to go through all of the heaps and the heap is k, the window size. O(k) because the max heap size will be k.

*/

const Heap = require('collections/heap')

class SlidingWindowMedian {
	constructor() {
		this.maxHeap = new Heap([], null, (a, b) => a - b)
		this.minHeap = new Heap([], null, (a, b) => b - a)
		this.windowMedians = []
	}

	// Insert num into the appropriate heap
	insertNum(num) {
		if (this.maxHeap.length === 0 || this.minHeap.peek() >= num)
			this.maxHeap.push(num)
		else this.minHeap.push(num)

		this.arrangeHeaps()
	}

	// Rearrange heaps if their lengths are out of balance
	arrangeHeaps() {
		if (this.maxHeap.length - this.minHeap.length > 1)
			this.minHeap.push(this.maxHeap.pop())
		if (this.minHeap.length > this.maxHeap.length)
			this.maxHeap.push(this.minHeap.pop())
	}

	// Return the median of the heaps
	findMedian() {
		if (this.maxHeap.length === this.minHeap.length)
			return (this.maxHeap.peek() + this.minHeap.peek()) / 2
		return this.maxHeap.peek()
	}

	// Sliding window method to calculate medians for all sub-arrays of size k
	find_sliding_window_median(nums, k) {
		let start = 0

		for (let end = 0; end < nums.length; end++) {
			this.insertNum(nums[end]) // insert number into heaps

			// close window
			if (1 + end - start > k) {
				// delete starting value from heaps
				this.maxHeap.delete(nums[start])
				this.minHeap.delete(nums[start])
				start++
				this.arrangeHeaps() // rearrange heaps after delete
			}

			if (1 + end - start === k) this.windowMedians.push(this.findMedian()) // push median into windowMedians
		}
		return this.windowMedians
	}
}

let median = new SlidingWindowMedian()
console.log(median.find_sliding_window_median([1, 2, -1, 3, 5], 2))
median = new SlidingWindowMedian()
console.log(median.find_sliding_window_median([1, 2, -1, 3, 5], 3))
