function taskAssignment(k, tasks) {
	let ans = [];
	// Map tasks to {idx, val} obj
	tasks = tasks.map((el, idx) => ({ idx: idx, val: el }));
	// Sort tasks by value
	tasks = tasks.sort((a, b) => a.val - b.val);

	// Pair longest and shortest tasks together
	while (tasks.length > 0) {
		let short = tasks.shift();
		let long = tasks.pop();
		ans.push([short.idx, long.idx]);
	}
	return ans;
}

// TIME: O(nlogn) - assuming .map and .sort are nlogn
// SPACE: O(n) - ans array scales proportionally to n
