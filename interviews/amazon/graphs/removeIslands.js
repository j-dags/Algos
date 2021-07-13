/*
Given a matrix of 1s and 0s, remove all islands (vertically/horizontally adjacent 1s) that don't touch the edges of the matrix.

Approach:
- Iterate through matrix
- If we encounter a 1, check if it touches the border (using DFS)
- If it doesn't touch border, DFS remove the island
- As we go along, keep track of visited nodes so we don't recurse infinitely

O(wh)t | O(wh)s


*/

// TIME: 270ms
function removeIslands1(matrix) {
	console.time()
	let visited = {}
	for (let i = 1; i < matrix.length - 1; i++) {
		for (let j = 1; j < matrix[0].length - 1; j++) {
			if (matrix[i][j] === 1 && !visited[`${i},${j}`]) {
				const hasEdge = checkEdge(matrix, i, j, visited)
				if (!hasEdge) remIsland(matrix, i, j)
			}
		}
	}
	console.timeEnd()
	return matrix
}

function checkEdge(matrix, y, x, visited) {
	if (`[${y},${x}]` in visited) return
	visited[`${y},${x}`] = true
	if (
		y === 0 ||
		y === matrix.length - 1 ||
		x === 0 ||
		x === matrix[0].length - 1
	) {
		if (matrix[y][x] === 1) return true
		return false
	}

	const adjacent = [
		[y + 1, x],
		[y - 1, x],
		[y, x + 1],
		[y, x - 1],
	]
	return adjacent.some(([dy, dx]) => {
		if (matrix[dy] && matrix[dy][dx] === 1 && !visited[`${dy},${dx}`])
			return checkEdge(matrix, dy, dx, visited)
		return false
	})
}

function remIsland(matrix, y, x) {
	matrix[y][x] = 0

	const adjacent = [
		[y + 1, x],
		[y - 1, x],
		[y, x + 1],
		[y, x - 1],
	]
	for (const [dy, dx] of adjacent) {
		if (matrix[dy] && matrix[dy][dx] === 1) remIsland(matrix, dy, dx)
	}
}

// APROACH 2:
// Go around outsides and find invalid islands. Then iterate inside and remove valid islands
// TIME: 5ms
function removeIslands(matrix) {
	console.time()
	const edgeIslands = [
		...Array(matrix.length)
			.fill(0)
			.map((el) => Array(matrix[0].length).fill(false)),
	]
	const visited = {}

	// Iterate over matrix and save any invalid islands
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			const isEdge =
				i === 0 ||
				i === matrix.length - 1 ||
				j === 0 ||
				j === matrix[0].length - 1

			if (matrix[i][j] === 1 && isEdge && !visited[`${i},${j}`]) {
				dfsEdge(matrix, i, j, visited, edgeIslands)
				visited[`${i},${j}`] = true
			}
		}
	}
	// Iterate over matrix and remove any islands that are false in edgeIsland matrix
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === 1 && edgeIslands[i][j] === false) matrix[i][j] = 0
		}
	}
	console.timeEnd()
	return matrix
}

function dfsEdge(matrix, y, x, visited, edgeIslands) {
	visited[`${y},${x}`] = true
	edgeIslands[y][x] = true

	const adjacent = [
		[y + 1, x],
		[y - 1, x],
		[y, x + 1],
		[y, x - 1],
	]

	for (const [dy, dx] of adjacent) {
		if (matrix[dy] && matrix[dy][dx] === 1 && !visited[`${dy},${dx}`])
			dfsEdge(matrix, dy, dx, visited, edgeIslands)
	}
}

const matrix = [
	[1, 0, 0, 0, 0, 0],
	[0, 1, 0, 1, 1, 1],
	[0, 0, 1, 0, 1, 0],
	[1, 1, 0, 0, 1, 0],
	[1, 0, 1, 1, 0, 0],
	[1, 0, 0, 0, 0, 1],
]

console.log(removeIslands1(matrix))
