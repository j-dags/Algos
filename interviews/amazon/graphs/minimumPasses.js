/*
Write a function that returns the number of passes it takes to convert all negative numbers in a matrix to positive. Negative numbers can only be converted if an adjacent (up, down, left, right) number is positive.

Approach:
Implement a BFS approach.
- Find all the positive numbers and add them to a queue.
- If they have a negative neighbor, flip neighbor and add to secondary queue.

O(wh)t | O(wh)s
*/

const minimumPassesOfMatrix = (matrix) => {
	let queue = []
	let secQueue = []
	let passes = 0

	// Find all positives in the matrix and add them to queue
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] > 0) queue.push([i, j])
		}
	}

	// Keep looping while either queue has items in it
	while (queue.length || secQueue.length) {
		// Two queues are how we keep track of number of passes
		if (queue.length === 0) {
			queue = secQueue
			secQueue = []
			passes++
		}

		let [i, j] = queue.shift()

		const adjacent = [
			[i + 1, j],
			[i - 1, j],
			[i, j + 1],
			[i, j - 1],
		]

		for (const [dy, dx] of adjacent) {
			if (matrix[dy] && matrix[dy][dx] < 0) {
				matrix[dy][dx] *= -1
				secQueue.push([dy, dx])
			}
		}
	}
	return containsNegatives(matrix) ? -1 : passes
}

const containsNegatives = (grid) => {
	for (const row of grid) {
		for (const val of row) {
			if (val < 0) return true
		}
	}
	return false
}

const input = [
	[1, 0, 0, -2, -3],
	[-4, -5, -6, -2, -1],
	[0, 0, 0, 0, -1],
	[-1, 0, 3, 0, 3],
]
console.log(minimumPassesOfMatrix(input))
