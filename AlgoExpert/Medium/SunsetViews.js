function sunsetViews(buildings, direction) {
	let max = 0
	let sunsetBldgs = []
	let step = direction === 'WEST' ? 1 : -1
	let idx = direction === 'WEST' ? 0 : buildings.length - 1

	while (idx >= 0 && idx < buildings.length) {
		if (buildings[idx] > max) sunsetBldgs.push(idx)
		max = Math.max(max, buildings[idx])
		idx += step
	}

	return direction === 'WEST' ? sunsetBldgs : sunsetBldgs.reverse()
}

// Iterate through array keeping track of max building so far.
// Add buildings that can see over running max

// TIME: O(n)
// SPACE: O(n)
