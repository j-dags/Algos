/*
Given a list of non-overlapping intervals sorted by start time, insert a given interval in the correct position and merge all necessary intervals.

Approach:
This is a more elegant solution. We have one counter i that we keep track of. There are three phases
1) intervals don't overlap with newInterval. Push intervals to final array and increment i
2) intervals overlap with newInterval. Merge newInterval with current interval and increment. Basically newInterval swallows up all overlapping intervals.
3) intervals don't overlap with newInterval. Push intervals to final array and increment i

Examples:
([[1,3], [5,7], [8,12]], [4,6]) -> [[1, 3], [4,7], [8,12]]

O(n)t | O(n)s
*/

class Interval {
	constructor(start, end) {
		this.start = start
		this.end = end
	}

	print_interval() {
		process.stdout.write(`[${this.start}, ${this.end}]`)
	}
}

const insertInterval = (intervals, newInterval) => {
	let finalIntervals = []
	let i = 0

	// Add all 'previous' intervals to final array
	while (intervals[i].start <= newInterval.start && i < intervals.length) {
		finalIntervals.push(intervals[i])
		i++
	}

	// Merge any overlapping intervals
	while (
		newInterval.start <= intervals[i].start &&
		newInterval.end >= intervals[i].start
	) {
		newInterval.start = Math.min(intervals[i].start, newInterval.start)
		newInterval.end = Math.max(intervals[i].end, newInterval.end)
		i++
	}
	finalIntervals.push(newInterval)

	while (i < intervals.length) {
		finalIntervals.push(intervals[i])
		i++
	}

	return finalIntervals
}

console.log(
	insertInterval(
		[new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
		new Interval(4, 6)
	)
)
