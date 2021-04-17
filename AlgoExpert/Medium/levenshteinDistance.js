function levenshteinDistance(str1, str2) {
	str2 = ' ' + str2
	str1 = ' ' + str1
	const distances = [...Array(str1.length)].map(() =>
		Array(str2.length).fill(0)
	)

	for (let row = 0; row < str1.length; row++) {
		for (let col = 0; col < str2.length; col++) {
			if (row === 0) distances[row][col] = col
			else if (col === 0) distances[row][col] = row
			else if (str2[col] === str1[row])
				distances[row][col] = distances[row - 1][col - 1]
			else {
				distances[row][col] =
					1 +
					Math.min(
						distances[row][col - 1],
						distances[row - 1][col],
						distances[row - 1][col - 1]
					)
			}
		}
	}
	return distances[str1.length - 1][str2.length - 1]
}

// TIME: O(n*m)
// SPACE: O(n*m)

/*

This really hinges on understanding the algorithm. We make a 2D array. Let's look at an example:

DISTANCES
   _  y  a  b  d
_  0  1  2  3  4
a  1  1  1  2  3
b  2  2  2  1  2
c  3  3  3  2  2

The horizontal axes represent our initial string. The vertical axes represent the target string. I.e. we're trying to convert initial to target. We approach this dynamically, solving how many moves it takes to convert 1 letter, than 2 letters, 3 letters, etc.

Ex:
In order to convert ya to a, it will take (1) move.
In order to convert yab to abc, it will take (2) moves

For any element in matrix DISTANCES:
if row === col, DISTANCES[row][col] = DISTANCES[row-1][col-1]
else DISTANCES[row][col] is equal to 1 + the min of its left, top, and top left neighbors
*/
