/* ------------------------
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
		[1, 1, 0],
		[1, 1, 0],
		[0, 0, 1],
	])
)
