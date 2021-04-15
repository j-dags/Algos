// -------------------------------
// Naive recursion
// O(2^m*n)t | O(m+n)s
// -------------------------------
const uniquePaths = (row = 0, col = 0) => {
	debugger
	// if we've reach our target cell, we know we've found a valid path

	// if we are trying to check a cell outside the limits of our grid, return 0
	if (row <= 0 || col <= 0) return 0

	// return 1 so that we can increment our count of unique paths
	if (row === 1 || col === 1) return 1

	// in every other case, add up the unique paths we can find by looking to the right or looking down
	return uniquePaths(row, col - 1) + uniquePaths(row - 1, col)
}

// -------------------------------
// Recursion w/ memoization
// O(m*n)t | O(m+n)s
// -------------------------------
const uniquePaths = (row, col) => {
	debugger
	const memo = {}

	const finder = (row, col) => {
		// Out of bounds return 0
		if (row <= 0 || col <= 0) return 0
		// End row/col return 1
		if (row === 1 || col === 1) return 1
		// If we already visited this cell return its value
		if (memo[`[${row},${col}]`]) return memo[`[${row},${col}]`]

		// Recursive case: save sum of recursive calls to memo
		memo[`[${row},${col}]`] = finder(row - 1, col) + finder(row, col - 1)
		return memo[`[${row},${col}]`]
	}

	return finder(row, col)
}

// -------------------------------
// Dynamic Programming
// O(m*n)t | O(m*n)s
// -------------------------------
function uniquePaths(m, n) {
	// initialize an m x n matrix filled with 1s
	const matrix = Array(m)
	for (let row = 0; row < m; row++) {
		matrix[row] = Array(n).fill(1)
	}

	// iterate through the matrix, starting from the row at index 1
	for (let row = 1; row < m; row++) {
		// iterate through the row starting from the column at index 1
		for (let col = 1; col < n; col++) {
			// set the value of the current cell to the calculated value of possible paths to arrive at our current cell
			matrix[row][col] = matrix[row - 1][col] + matrix[row][col - 1]
		}
	}
	return matrix[m - 1][n - 1]
}

console.log(uniquePaths(3, 3))
console.log(uniquePaths(4, 4))

//3,3 -> 4
//4,4 -> 6
