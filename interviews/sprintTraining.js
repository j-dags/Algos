/*
Given an array of points along a line, a runner will run back and forth between each point and the next. Each time a runner starts, stops, or passes a point is considered a visit. Determine the lowest numered marker that is visisted the most times during Pat's day of training.

Approach: Iterate through all the intervals, keep track of the number of times each point is visited and return the lowest, maximum. Prob should keep track of the most visited as we go.

Note this is 1st order indexing so the first index is 1 not 0.
*/

const sprintTraining = (arr) => {
	let visits = {}
	let mostVisited = arr[0]

	for (let i = 0; i < arr.length - 1; i++) {
		let start = Math.min(arr[i], arr[i + 1])
		let end = Math.max(arr[i], arr[i + 1])

		for (let j = start; j <= end; j++) {
			if (!visits[j]) visits[j] = 0
			visits[j] += 1

			if (visits[j] && visits[mostVisited] && visits[j] > visits[mostVisited])
				mostVisited = j
		}
	}
	return mostVisited
}

console.log(sprintTraining([2, 4, 1, 3])) // Should return 2
