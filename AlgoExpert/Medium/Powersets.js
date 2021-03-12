function powerset(array) {
	const sets = [[]]

	array.forEach((el) => {
		sets.forEach((set) => {
			sets.push([...set, el])
		})
	})
	return sets
}

// TIME: O(n * 2^n)
// SPACE: O(n * 2^n)

/*
There a 2^n subsets for a given number n. Subsets also scale w/ n. So for complexity, we have 2^n subsets, each subset with
an average length n/2 (which approximates to n). So complexity is n*2^n. Same for time and space.

0 -> 1
1 -> 2
2 -> 4
...
*/
