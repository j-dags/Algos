function hasSingleCycle(arr) {
	let counter = 0;
	let idx = 0;

	while (counter < arr.length) {
		// Function should only return to 0-index after completing all jumps
		if (counter > 0 && idx === 0) return false;
		idx = getIdx(idx, arr);
		counter++;
	}
	// After all jumps, function should be back at 0-index
	return idx === 0;
}

function getIdx(idx, arr) {
	const jump = arr[idx];
	const nextIdx = (idx + jump) % arr.length;
	// If nextIdx < 0, add arr length. (fix negative numbers)
	return nextIdx >= 0 ? nextIdx : nextIdx + arr.length;
}
/*
TIME: O(N) - iterate through arr once
SPACE: O(1) - only saving variables
*/
