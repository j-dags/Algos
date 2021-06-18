/*
You're an industrious programmer that lives off the grid. The local well that you use to fetch water has gone dry, so you've decided to collect rain water to filter; however, your collection device isn't flat.

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water your collection device is able to trap after raining.

O(n)t | O(n)s
*/

function rainWaterCollector(arr) {
	let currMax = arr[0]
	let waterLevel = Array(arr.length).fill(0)
	let waterCollected = 0

	// iterate forwards to save water level
	for (let i = 0; i < arr.length; i++) {
		currMax = Math.max(currMax, arr[i])
		waterLevel[i] = currMax
	}

	// iterate in reverse to save water level from other direction
	// if water level > collector level, add to water collected
	currMax = arr[arr.length - 1]
	for (let i = arr.length - 1; i >= 0; i--) {
		currMax = Math.max(currMax, arr[i])
		waterLevel[i] = Math.min(currMax, waterLevel[i])

		if (arr[i] < waterLevel[i]) waterCollected += waterLevel[i] - arr[i]
	}

	return waterCollected
}

// vol = 7
const a = [0, 0, 1, 2, 4, 3, 2, 5, 0, 0, 2, 1]
console.log('collection device "a" can hold', rainWaterCollector(a))

// vol = 6
const b = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log('collection device "b" can hold', rainWaterCollector(b))

// vol = 12
const c = [0, 3, 0, 1, 0, 0, 0, 1, 0, 2]
console.log('collection device "c" can hold', rainWaterCollector(c))

// vol = 8
const d = [0, 1, 0, 3, 5, 0, 0, 0, 2, 0, 1]
console.log('collection device "d" can hold', rainWaterCollector(d))

// vol = 38
const e = [0, 5, 3, 2, 8, 8, 1, 1, 2, 4, 3, 3, 7, 1, 2, 4, 3, 2]
console.log('collection device "e" can hold', rainWaterCollector(e))
