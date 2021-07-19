/*
Given a matrix of integers grid with m rows and n columns, find the maximum score of a path starting at [0,0] and ending at [m-1,n-1].

The score of a path is the minimum value in that path.  For example, the value of the path 8 →  4 →  5 →  9 is 4.

Approach:
Sounds like dynamic programming. Built a matrix and keep track of the max min to get to that cell. Use a queue to track which cells will be viewed (avoid checking unecessary cells)

O(n)t | O(n)s
*/

const maxMinPath = (grid) => {
	if (grid === null || grid.length === 0 || grid[0].length === 0) return 0 // base cases

	const h = grid.length // grid height
	const w = grid[0].length // grid width
	// cardinal directions
	const dir = [
		[-1, 0],
		[0, 1],
		[1, 0],
		[0, -1],
	]
	queue = [[0, 0]]
	const dp = [...Array(h)].map(() => Array(w).fill(0)) // create an empty nxm matrix
	dp[0][0] = grid[0][0]

	while (queue.length) {
		const [x, y] = queue.shift()

		// check each direction and add to queue if score is higher
		for (const [dx, dy] of dir) {
			const i = x + dx
			const j = y + dy
			if (i < 0 || j < 0 || i >= h || j >= w) continue
			const score = Math.min(grid[i][j], dp[x][y]) // compare current cell value to next cell value
			// if the next cell has a higher score than dp[i][j], then set dp[i][j] and add [i, j] to the queue
			if (score > dp[i][j]) {
				dp[i][j] = score
				queue.push([i, j])
			}
		}
	}
	return dp[h - 1][w - 1]
}

console.log(
	maxMinPath([
		[5, 4, 5],
		[1, 2, 6],
		[7, 4, 6],
	])
)
console.log(
	maxMinPath([
		[2, 2, 1, 2, 2, 2],
		[1, 2, 2, 2, 1, 2],
	])
)
console.log(
	maxMinPath([
		[3, 4, 6, 3, 4],
		[0, 2, 1, 1, 7],
		[8, 8, 3, 2, 7],
		[3, 2, 4, 9, 8],
		[4, 1, 2, 0, 0],
		[4, 6, 5, 4, 3],
	])
)
