function staircaseTraversal(height, maxSteps) {
	let memo = { 0: 1, 1: 1 }

	function stairs(height, maxSteps) {
		if (height in memo) return memo[height]

		let value = 0
		if (height < 0) value = 0
		else if (height <= 1) value = 1
		else if (height in memo) value = memo[height]
		else {
			for (let i = height - maxSteps; i < height; i++) {
				value += stairs(i, maxSteps)
			}
			memo[height] = value
		}
		return value
	}
	return stairs(height, maxSteps)
}

// TIME: O(h * s) - have to check num of steps for each height
// SPACE: O(h) - memo scales with height
