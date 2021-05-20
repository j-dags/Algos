/*
Computer has multiple processors, each with 4 cores. Each task has a predicted execution time, and each processor has a specified time when its cores become available. Assuming tha exactly 5 tasks are assigned to each processor and that they run independently, what is the earlist time that all tasks can be processed.

Approach:
Sort processors in ascending processing time. Sort tasks in descending task time. Add longest tasks to fastest processors. Iterate through all combinations to find the max.

*/

const minProcessingTime = (processorTime, taskTime) => {
	let max = 0
	let p = 0
	let j = 0

	processorTime.sort((a, b) => a - b) // Sort processors in ascending order
	taskTime.sort((a, b) => b - a) // Sort tasks in descending order

	// Loop through all tasks
	for (let t = 0; t < taskTime.length; t++) {
		//Loop through 4 cores
		if (j > 3) {
			p++
			j = 0
		}
		max = Math.max(max, processorTime[p] + taskTime[t])
		j++
	}
	return max
}

console.log(minProcessingTime([8, 10], [2, 2, 3, 1, 8, 7, 4, 5]))
