/*
Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s 
and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.
Return the number of closed islands.

Approach:
Outside-in
- Check edges for any 0s (land). DFS through edge land and convert 0s to 1s
- Iterate through inside. DFS through any 0s and convert to 1s. Increment an island counter
- Return island counter

O(wh)t | O(wh)s
*/


var closedIsland = function(grid) {
    let islands = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const isEdge = i === 0 || j === 0 || i === grid.length - 1 || j === grid[0].length - 1
            if (isEdge && grid[i][j] === 0) dfs(grid, i, j)
        }
    }
    
    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid[0].length - 1; j++) {
            if (grid[i][j] === 0) {
                dfs(grid, i, j)
                islands++
            }
        }
    }
    return islands
};

function dfs (matrix, y, x) {
    matrix[y][x] = 1
	const adjacent = [
		[y + 1, x],
		[y - 1, x],
		[y, x + 1],
		[y, x - 1],
	]    
    for (const [dy,dx] of adjacent) {
        if (matrix[dy] && matrix[dy][dx] === 0) dfs(matrix, dy, dx)
    }
}

const input = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]

console.log(closedIsland(input))
