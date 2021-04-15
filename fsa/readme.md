# Unique Paths

---

## Interviewer Prompt

You are given the dimensions of a grid, `m` and `n`. Starting from the top left, or `(0,0)`, you want to end up making your way to the bottom right corner. The only two moves you can make are to go one space directly to your right, or one space directly down. Write a function that can help you determine how many unique paths you can take between these two corners.

---

## Example Output

```javascript
uniquePaths(3, 2) // 3
uniquePaths(3, 4) // 10
uniquePaths(7, 3) // 24
```

---

## Interviewer Guide

It might be helpful to draw this problem out for them if they can't visualize it themselves. The values in the cells are somewhat inconsequential and may even just be blank cells when you draw them out, but this might be a good start to guide them. See if the interviewee can draw this out first.

```
[
  [1,1],
  [1,1],
  [1,1]
]
A 3x2 matrix should return 3 paths, corresponding to the following sets of directions
  - right, down, down
  - down, right, down
  - down, down, right
```

---

### RE

At this point the interviewer should be asking you questions to clarify the problem statement. If they are not, prompt them: _"Do you have any questions before we get started?"_ Some questions you may get:

- _Can either m or n be 0?_ Yes. This should not change the problem.

---

### AC

As always, your interviewee should be looking to break this problem down if they can. Some helpful tips:

- Have them diagram a path for a small board. Maybe a `2x2` or a `3x2`.
- If their thoughts seem to be moving in the direction of dynamic programming, ask them what data structure they can use to capture their results as they build toward their solution (they can update their matrix).
- This problem can be solved recursively. As with all recursive problems, push your interviewees to think about their _base_ and _recursive_ cases. What is the smallest version of this problem they can solve? What would this problem look like for a `1x1` matrix? `1x2`? `2x2`?

---

### TO

If your interviewee finishes, have them review:

- Time and space complexity of their solution
- If they've discussed the recursive approach, see if they can talk through the DP approach, and vice versa.
- What is the trade-off between the DP and recursive approaches?

---

## Solution and Explanation (a)

One method of solving this problem involves using **dynamic programming** to calculate the number of possible paths it takes to get to each cell. With `3x4` grid, for example, we can create a matrix with our given dimensions immediately off the bat to maintain a record of how many paths we can take to a given cell.

```
// initial matrix
[
  [ 1, 1, 1, 1 ],
  [ 1, 1, 1, 1 ],
  [ 1, 1, 1, 1 ]
]
```

Since the only moves we can make are to go right or down, we can deduce that the number of paths it takes to get to a given cell should be the sum of the values in the cells immediately to its left and above it. The 0th row and 0th columns are easy--there is only one way to get to these cells, and it's to go in the same direction starting from `matrix[0][0]`. All subsequent cells can be calculated by iterating through the matrix and summing adjacent cells to produce the following result, where the cell at `matrix[m-1][n-1]` contains the answer to our prompt.

```
// after iterating through row 1
[
  [ 1, 1, 1, 1 ],
  [ 1, 2, 3, 4 ],
  [ 1, 1, 1, 1 ]
]
// after iterating through row 2
[
  [ 1, 1, 1,  1 ],
  [ 1, 2, 3,  4 ],
  [ 1, 3, 6, 10 ]
]
```

**Time**: `O(m*n)`

**Space**: `O(m*n)`

For time complexity we need to iterate through each cell in the grid, so our complexity is `O(m*n)`. For space complexity we created a new matrix of `m*n` dimensions, so our complexity is also `O(m*n)`.

---

### Solution Code

```javascript
function uniquePaths(m, n) {
	// initialize an m x n matrix filled with 1s
	const matrix = Array(m)
	for (let row = 0; row < m; row++) {
		matrix[row] = Array(n).fill(1)
	}

	// iterate through the matrix, starting from the row at index 1
	for (let row = 1; row < m; row++) {
		// iterate through the row starting from the column at index 1
		for (let col = 1; col < n; col++) {
			// set the value of the current cell to the calculated value of possible paths to arrive at our current cell
			matrix[row][col] = matrix[row - 1][col] + matrix[row][col - 1]
		}
	}
	return matrix[m - 1][n - 1]
}
```

---

## Solution and Explanation (b)

For some, it may be easier to think about this problem recursively. For our base case, if we are at the top row or left column we `return 1`, since there is only one way to get to any of these cells from the start. For any other cell, we return uniquePaths(top) + uniquePaths(left).

**Time**: `O(2^(m*n))`

**Space**: `O(m+n)`

Excluding the top row and left column, we will be calling two recursive functions for each cell, hence the `O(2^(m(n)))` time complexity. Space complexity will be the maximum size of the call stack when recursing, so `O(n+m)`. This can also be visualized as the longest path from the top-left cell to the bottom-right cell.

### Solution Code

```javascript
function uniquePaths(row, col) {
	// if we are trying to check a cell outside the limits of our grid, return 0
	if (row <= 0 || col <= 0) return 0

	// return 1 since there is only one way to get from the start to any of these cells
	if (row === 1 || col === 1) return 1

	// in every other case, add up the unique paths we can find by looking to the left and above
	return uniquePaths(row, col - 1) + uniquePaths(row - 1, col)
}
```

---

## Summary

- Dynamic programming is a handy tool for incrementally building up answers to complex problems.

---
