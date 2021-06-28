/*
Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).
The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).
You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

There are MULTIPLE ways to do this: sorting, min-heap, max-heap, quicksort, etc.


*/

const Heap = require('collections/heap') //http://www.collectionsjs.com

// Naive approach: Sort by square root and return first k answers
var kClosest = function (points, k) {
	points = points.sort(
		(a, b) =>
			Math.sqrt(a[0] ** 2 + a[1] ** 2) - Math.sqrt(b[0] ** 2 + b[1] ** 2)
	)
	return points.slice(0, k)
}

// Let's try a heap approach. I think this works but can't require in libraries to leetcode.
var kClosestHeap = function (points, k) {
	maxHeap = new Heap()

	// push k elements into heap
	for (let i = 0; i < k; i++) {
		maxHeap.push(points[i])
	}

	for (let i = k; i < points.length; i++) {
		let sqrt = Math.sqrt(points[i][0] ** 2 + points[i][1] ** 2)
		let heapTop = Math.sqrt(maxHeap.peek()[0] ** 2 + maxHeap.peek()[1] ** 2)

		if (sqrt < heapTop) {
			maxHeap.pop()
			maxHeap.push(points[i])
		}
	}
	return maxHeap.content
}

console.log(
	kClosestHeap(
		[
			[3, 3],
			[5, -1],
			[-2, 4],
		],
		2
	)
)
