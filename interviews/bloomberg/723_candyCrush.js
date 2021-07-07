/*
This question is about implementing a basic elimination algorithm for Candy Crush.

Given an m x n integer array board representing the grid of candy where board[i][j] represents the type of candy. A value of board[i][j] == 0 represents that the cell is empty.

The given board represents the state of the game following the player's move. Now, you need to restore the board to a stable state by crushing candies according to the following rules:

    If three or more candies of the same type are adjacent vertically or horizontally, crush them all at the same time - these positions become empty.
    After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. No new candies will drop outside the top boundary.
    After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
    If there does not exist more candies that can be crushed (i.e., the board is stable), then return the current board.

You need to perform the above rules until the board becomes stable, then return the stable board.

Input: board = [[110,5,112,113,114],[210,211,5,213,214],[310,311,3,313,314],[410,411,412,5,414],[5,1,512,3,3],[610,4,1,613,614],[710,1,2,713,714],[810,1,2,1,1],[1,1,2,2,2],[4,1,4,4,1014]]
Output: [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[110,0,0,0,114],[210,0,0,0,214],[310,0,0,113,314],[410,0,0,213,414],[610,211,112,313,614],[710,311,412,613,714],[810,411,512,713,1014]]

Appraoch:
1. Search rows for candies that need to be crushed. Set their values to negative
2. Search columns for candies that need to be crushed. Set their values to negative.
3. Crush candies. Have a pointer to keep track of where candies should  go. Fill in 0s above crushed candies.
4. Recursively call candyCrush until board is stable.

*/

const candyCrush = (board) => {
	let isDone = true

	// mark rows
	for (let r = 0; r < board.length; r++) {
		for (let c = 0; c < board[0].length - 2; c++) {
			let num1 = Math.abs(board[r][c])
			let num2 = Math.abs(board[r][c + 1])
			let num3 = Math.abs(board[r][c + 2])

			if (num1 === num2 && num2 === num3 && num1 !== 0) {
				board[r][c] = -num1
				board[r][c + 1] = -num2
				board[r][c + 2] = -num3
				isDone = false
			}
		}
	}
	//mark cols
	for (let c = 0; c < board[0].length; c++) {
		for (let r = 0; r < board.length - 2; r++) {
			let num1 = Math.abs(board[r][c])
			let num2 = Math.abs(board[r + 1][c])
			let num3 = Math.abs(board[r + 2][c])

			if (num1 === num2 && num2 === num3 && num1 !== 0) {
				board[r][c] = -num1
				board[r + 1][c] = -num2
				board[r + 2][c] = -num3
				isDone = false
			}
		}
	}

	//drop
	if (!isDone) {
		for (let c = 0; c < board[0].length; c++) {
			let idx = board.length - 1
			for (let r = board.length - 1; r >= 0; r--) {
				if (board[r][c] > 0) {
					board[idx][c] = board[r][c]
					idx--
				}
			}
			for (let r = idx; r >= 0; r--) {
				board[r][c] = 0
			}
		}
	}

	if (isDone) return board
	else return candyCrush(board)
}

const board = [
	[110, 5, 112, 113, 114],
	[210, 211, 5, 213, 214],
	[310, 311, 3, 313, 314],
	[410, 411, 412, 5, 414],
	[5, 1, 512, 3, 3],
	[610, 4, 1, 613, 614],
	[710, 1, 2, 713, 714],
	[810, 1, 2, 1, 1],
	[1, 1, 2, 2, 2],
	[4, 1, 4, 4, 1014],
]

console.log(candyCrush(board))
