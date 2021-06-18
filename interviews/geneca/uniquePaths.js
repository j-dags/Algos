/*
Given a grid of nxm dimensions, find how many unique paths there are from the top left grid to bottom right grid
*/

// -------------------------
// Iterative Dynamic Programming
// O(n*m)t | O(n*m)s
// -------------------------

// function uniquePaths(n, m) {
// 	let matrix = Array(n)
// 		.fill(0)
// 		.map((el) => Array(m).fill(1))

// 	for (let i = 1; i < n; i++) {
// 		for (let j = 1; j < m; j++) {
// 			matrix[i][j] = matrix[i][j - 1] + matrix[i - 1][j]
// 		}
// 	}
// 	return matrix[n - 1][m - 1]
// }

// -------------------------
// Recursion w/ Memoization
// O(n*m)t | O(n+m)s
// -------------------------
function uniquePaths(n, m, memo = {}) {
	if (n < 1 || m < 1) return 0
	if (n === 1 || m == 1) return 1
	if (memo[`n:${n}, m:${m}`]) return memo[`n:${n}, m:${m}`]

	let ans = uniquePaths(n - 1, m, memo) + uniquePaths(n, m - 1, memo)
	memo[`n:${n}, m:${m}`] = ans
	return ans
}

console.log(uniquePaths(3, 3)) // 6
console.log(uniquePaths(4, 4)) // 20
console.log(uniquePaths(6, 6)) // 20
console.log(uniquePaths(18, 18)) // 20
