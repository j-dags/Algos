var numIslands = function (grid) {
	let islands = 0
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === '1') {
				islands++
				removeIslands(i, j, grid)
			}
		}
	}
	return islands
}

var removeIslands = function (i, j, grid) {
	// set curr element to 0
	grid[i][j] = '0'

	// check adjacent elements
	const directions = [
		[i - 1, j],
		[i + 1, j],
		[i, j - 1],
		[i, j + 1],
	]

	for (const [dy, dx] of directions) {
		// if (dy >= 0 && dy < grid.length && dx >= 0 && dx < grid[0].length) { <---- slightly faster
		if (grid[dy] && grid[dy][dx]) {
			if (grid[dy][dx] === '1') removeIslands(dy, dx, grid)
		}
	}
}

const test = [
	['1', '1', '1', '1', '0'],
	['1', '1', '0', '1', '0'],
	['1', '1', '0', '0', '0'],
	['0', '0', '0', '0', '0'],
]

console.log(numIslands(test))
