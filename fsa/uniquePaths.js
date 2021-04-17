// -------------------------------
// Naive recursion
// O(2^m*n)t | O(m+n)s
// -------------------------------
// const uniquePaths = (m, n) => {
// 	// if we are trying to check a cell outside the limits of our grid, return 0
// 	if (m <= 0 || n <= 0) return 0

// 	// return 1 since there is only one way to get from the start to any of these cells
// 	if (m === 1 || n === 1) return 1

// 	// in every other case, add up the unique paths we can find by looking to the left and above
// 	return uniquePaths(m, n - 1) + uniquePaths(m - 1, n)
// }

// -------------------------------
// Recursion w/ memoization
// O(m*n)t | O(m+n)s
// -------------------------------
const uniquePaths = (m, n) => {
	const memo = {}

	const findPaths = (m, n) => {
		// If we are trying to check a cell outside the limits of our grid, return 0
		if (m <= 0 || n <= 0) return 0

		// Return 1 since there is only one way to get from the start to any of these cells
		if (m === 1 || n === 1) return 1

		// If we already visited this cell return its stored value
		if (memo[`[${m},${n}]`]) return memo[`[${m},${n}]`]

		// Recursive case: save sum of recursive calls to memo
		memo[`[${m},${n}]`] = findPaths(m - 1, n) + findPaths(m, n - 1)
		return memo[`[${m},${n}]`]
	}

	return findPaths(m, n)
}

// -------------------------------
// Dynamic Programming
// O(m*n)t | O(m*n)s
// -------------------------------
// const uniquePaths = (m, n) => {
// 	const memo = {}

// 	const findPaths = (m, n) => {
// 		// If we are trying to check a cell outside the limits of our grid, return 0
// 		if (m <= 0 || n <= 0) return 0

// 		// Return 1 since there is only one way to get from the start to any of these cells
// 		if (m === 1 || n === 1) return 1

// 		// If we already visited this cell return its stored value
// 		if (memo[`[${m},${n}]`]) return memo[`[${m},${n}]`]

// 		// Recursive case: save sum of recursive calls to memo
// 		memo[`[${m},${n}]`] = findPaths(m - 1, n) + findPaths(m, n - 1)
// 		return memo[`[${m},${n}]`]
// 	}

// 	return findPaths(m, n)
// }

console.log(uniquePaths(3, 3))
console.log(uniquePaths(4, 4))
