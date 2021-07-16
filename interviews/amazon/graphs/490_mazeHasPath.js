/*
There is a ball in a maze with empty spaces (represented as 0) and walls (represented as 1). The ball can go through the empty spaces by rolling up, down, left or right, but it won't stop rolling until hitting a wall. When the ball stops, it could choose the next direction.

Given the m x n maze, the ball's start position and the destination, where start = [startrow, startcol] and destination = [destinationrow, destinationcol], return true if the ball can stop at the destination, otherwise return false.

You may assume that the borders of the maze are all walls (see examples).

Approach:
DFS but with a twist. We need to keep moving in one direction until we hit a wall. We can do this using a simple while loop, as opposed to passing a direction into a recursive call.

O(nm)t | O(max(n,m))s. Space will be equal to recursive stack which will be the max of n or m.
*/

var hasPath = ({ maze, start, destination }) => {
	const [dx, dy] = destination
	const [sx, sy] = start

	// prettier-ignore
	const dirs = [[0, -1],[0, 1],[-1, 0],[1, 0]]

	const dfs = (x, y) => {
		for (let [i, j] of dirs) {
			let nx = x
			let ny = y
			// prettier-ignore
			// keeps rolling ball until we hit a wall
			while (nx + i >= 0 && ny + j >= 0 && maze.length > nx + i && maze[0].length > ny + j && maze[nx + i][ny + j] !== 1) {
				nx += i
				ny += j
				if (maze[nx][ny] === 2) break
			}

			if (maze[nx][ny] === 2) continue // if we hit a visited path skip over loop
			maze[nx][ny] = 2 // set node as visited

			if (nx === dx && ny === dy) return true // terminal condition
			if (dfs(nx, ny)) return true // call dfs on the next node. Bubbles up and true values.
		}
		return false
	}
	maze[sx][sy] = 2
	return dfs(sx, sy)
}

const input = {
	maze: [
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 1, 0],
		[1, 1, 0, 1, 1],
		[0, 0, 0, 0, 0],
	],
	start: [0, 4],
	destination: [4, 4],
}

console.log(hasPath(input))
