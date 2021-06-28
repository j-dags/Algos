/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Approach:
Traverse through the grid and recursively traverse through each island. Within each island, change theh 1s to 0s and then increment a count variable.

*/

var numIslands = function (grid) {
	let count = 0

	// iterate through grid and call removeIsland helper function
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === '1') {
				removeIsland(grid, j, i)
				count++
			}
		}
	}
	return count
}

// sets all 1s of the current island to 0
const removeIsland = (grid, x, y) => {
	grid[y][x] = 0 // set current element to 0

	// traverse through adjacent 1s
	if (x < grid[0].length - 1 && grid[y][x + 1] === '1')
		removeIslands(grid, x + 1, y)
	if (x > 0 && grid[y][x - 1] === '1') removeIslands(grid, x - 1, y)
	if (y < grid.length - 1 && grid[y + 1][x] === '1')
		removeIslands(grid, x, y + 1)
	if (y > 0 && grid[y - 1][x] === '1') removeIslands(grid, x, y - 1)
}

let island1 = [
	['1', '1', '1', '1', '0'],
	['1', '1', '0', '1', '0'],
	['1', '1', '0', '0', '0'],
	['0', '0', '0', '0', '0'],
]

let island2 = [['1', '1']]
let island3 = [
	['1', '1', '0', '0', '0'],
	['1', '1', '0', '0', '0'],
	['0', '0', '1', '0', '0'],
	['0', '0', '0', '1', '1'],
]

console.log(numIslands(island1))
console.log(numIslands(island2))
console.log(numIslands(island3))
