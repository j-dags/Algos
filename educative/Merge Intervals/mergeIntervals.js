/*
Given a list of intervals, merge any overlapping intervals to produce a list of mutually exclusive intervals.
Approach: Compare pairs of intervals at a time. If they overlap then merge the intervals and save to an answer array. Otherwise keep iterating.

O(nlogn)t | O(n)s. O(nlogn)t for the sort, O(n)s b/c we're creating another array. Also need O(n)s for the sort.
*/

class Interval {
	constructor(start, end) {
		this.start = start
		this.end = end
	}
}

const merge = (intervals) => {
	// Return input if it doesn't have at least two intervals
	if (intervals.length < 2) return intervals
	// Sort intervals by their starting value
	intervals = intervals.sort((a, b) => a.start - b.start)

	// Declare array for answer
	const mergedIntervals = []
	// Create new variables for the 0th index interval
	let start = intervals[0].start
	let end = intervals[0].end

	// Iterate intervals index 1 through n
	for (i = 1; i < intervals.length; i++) {
		// If the 1st interval overlaps with the 0th interval, then combine the intervals. New end value is the max of either 0th interval or 1st interval
		if (intervals[i].start <= end) end = Math.max(intervals[i].end, end)
		else {
			// Save interval to our answer array
			mergedIntervals.push(new Interval(start, end))
			// Replace 0th interval with the 1st interval. Next iteration we will be comparing 1st and 2nd intervals, etc.
			start = intervals[i].start
			end = intervals[i].end
		}
	}

	// Last index interval doesn't get a comparison, so make sure to push it into the answer array.
	mergedIntervals.push(new Interval(start, end))
	return mergedIntervals
}

let result = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)])
console.log(result)
