function minNumberOfCoinsForChange(n, denoms) {
	// Dynamically solve minimum coins for 0, 1, ...n

	// Create array of infinities, set 0th element to 0
	let mins = Array(n + 1).fill(Infinity)
	mins[0] = 0

	for (const denom of denoms) {
		for (const idx in mins) {
			// Check that denominations are less than current target value
			if (denom <= idx) {
				// Subtract coin from target value, add 1 to the min denominations for that remainder value
				mins[idx] = Math.min(mins[idx], 1 + mins[idx - denom])
			}
		}
	}
	return mins[n] !== Infinity ? mins[n] : -1
}

// TIME: O(n*d) - target amount * number of denominations
// SPACE: O(n) - array scales w/ n
