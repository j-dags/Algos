/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Examples
[[1, 5], [3, 10]] -> [[1, 10]]
[[1, 2], [3, 10]] -> [[1, 2], [3, 10]]

Questions?
- negative numbers?
- input sorted?
- min number of intervals?
- intervals always integers?

Approach:
Iterate through the intervals. Keep track of a start and end. While they overlap keep iterating, increasing the end as we go. Once they don't overlap, push [start,end] to an array.

Killed it!
O(nlogn)t | O(n)s
*/

function mergeIntervals(intervals) {
	intervals.sort((a, b) => a[0] - b[0])

	let start = intervals[0][0]
	let end = intervals[0][1]
	let ans = []

	for (let i = 1; i < intervals.length; i++) {
		if (intervals[i][0] <= end) {
			end = Math.max(end, intervals[i][1])
			continue
		}
		ans.push([start, end])
		start = intervals[i][0]
		end = intervals[i][1]
	}
	ans.push([start, end])
	return ans
}

let intervals = [
	[1, 3],
	[2, 6],
	[8, 10],
	[15, 18],
]
let intervals2 = [
	[1, 4],
	[4, 5],
]
// console.log(mergeIntervals(intervals))
console.log(mergeIntervals(intervals2))
