/* ------------------------

There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

DFS Approach
Very similar to riverSizes. Only difference is instead of recursively checking adjacent cells, we recursively call connected rows.
O(n**2)t | O(n)s
------------------------ */

var findCircleNum = function (grid) {
	const visited = new Set()
	let numProvinces = 0

	const dfs = (row) => {
		for (let col = 0; col < grid.length; col++) {
			if (grid[row][col] === 1 && !visited.has(col)) {
				visited.add(col)
				dfs(col)
			}
		}
	}

	for (let row = 0; row < grid.length; row++) {
		if (!visited.has(row)) {
			numProvinces++
			dfs(row)
		}
	}

	return numProvinces
}

console.log(
	findCircleNum([
		[1, 1, 1, 0],
		[1, 1, 1, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 1],
	])
)

/* ------------------------------------------
Can do this exactly like river sizes. Finding the number of unique islands in a matrix
------------------------------------------ */
// var findCircleNum = function (grid) {
// 	let numProvinces = 0

// 	const dfs = (y, x) => {
// 		grid[y][x] = 2

// 		const adjacent = [
// 			[y - 1, x],
// 			[y + 1, x],
// 			[y, x + 1],
// 			[y, x - 1],
// 		]

// 		for (const [dy, dx] of adjacent) {
// 			if (grid[dy] && grid[dy][dx] === 1) dfs(dy, dx)
// 		}
// 	}

// 	for (let row = 0; row < grid.length; row++) {
// 		for (let col = 0; col < grid[0].length; col++) {
// 			if (grid[row][col] === 1) {
// 				numProvinces++
// 				dfs(row, col)
// 			}
// 		}
// 	}

// 	return numProvinces
// }
