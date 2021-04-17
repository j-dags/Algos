function numberOfWaysToMakeChange(n, denoms) {
	// Initialize an array of 0s to size n+1
	const ways = new Array(n + 1).fill(0);
	// There is only 1 way to have 0 change
	ways[0] = 1;
	// Iterate through set of denominations
	for (let denom of denoms) {
		// Iterate through 0, 1...n
		for (let i = 1; i < n + 1; i++) {
			// Only check coins <= to value of n
			if (denom <= i) {
				// Add the permutations of (i - coin) to the permutations of i
				ways[i] += ways[i - denom];
			}
		}
	}

	return ways[n];
}

// TIME: O(n * denoms)
// SPACE: O(n)

// Do not edit the line below.
exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;
