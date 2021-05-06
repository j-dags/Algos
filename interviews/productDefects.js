/*
Given a matrix of 1s and 0s, return the size of the largest submatrix of all 1s in the list.

Approach: Dynamic Programming.
1. Create a copy of the matrix. Fill with 0s
2. Copy over top row and left column
3. Iterate through matrix and update the matrix values.
4. Keep track of largest submatrix while iterating
5. Return largest submatrix
*/

// Helper function to copy matrix and copy over top row and left column.
const copyMatrix = (matrix) => {
	// make a copy of the matrix and fill with 0s.
	let rows = matrix.length
	let cols = matrix[0].length

	let dp = new Array(rows).fill(null).map((el) => new Array(cols).fill(0))

	// Copy left column
	for (let i = 0; i < rows; i++) {
		dp[i][0] = matrix[i][0]
	}

	// Copy first row
	for (let j = 0; j < cols; j++) {
		dp[0][j] = matrix[0][j]
	}
	return dp
}

// Main function to return smallest submatrix of 1s
const productDefects = (matrix) => {
	let dp = copyMatrix(matrix)
	let maxSub = 0

	// Iterate, ignoring the first row and first column
	for (let i = 1; i < matrix.length; i++) {
		for (let j = 1; j < matrix[0].length; j++) {
			// Current dp node value can either by 1 higher than its top/left neighbors or just 1 (if one of the neighbors is 0)
			if (matrix[i][j] === 1)
				dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])

			maxSub = Math.max(maxSub, dp[i][j])
		}
	}
	return maxSub
}

const fiveByFive = [
	[1, 1, 1, 1, 1],
	[1, 1, 1, 0, 0],
	[1, 1, 1, 0, 0],
	[1, 1, 1, 0, 0],
	[1, 1, 1, 1, 1],
]

const threeByThree = [
	[1, 1, 0],
	[1, 1, 1],
	[1, 0, 0],
]

console.log(productDefects(fiveByFive))
console.log(productDefects(threeByThree))
