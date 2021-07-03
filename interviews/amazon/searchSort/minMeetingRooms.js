/*
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

Approach: This sounds like a merge intervals algorithm, but we solve it with a twist. Sort meeting start times and end times separately. Keep track of the current 'end time'. For every meeting that starts before the current 'end time', increment a counter. Otherwise increment the 'end time' and go to the next meeting.

O(nlogn)t | O(n)s
*/

const minMeetingRooms = (intervals) => {
	// sort meeting starts and ends separately
	let starts = intervals.map((interval) => interval[0]).sort((a, b) => a - b)
	let ends = intervals.map((interval) => interval[1]).sort((a, b) => a - b)
	let end = 0 // track current meeting end time
	let count = 0 // track total number of rooms

	// iterate through each meeting
	for (let i = 0; i < intervals.length; i++) {
		// if meeting starts before "current meeting ends" increment count
		if (starts[i] < ends[end]) count++
		else end++ //otherwise move to next end time
	}
	return count
}

console.log(
	minMeetingRooms([
		[0, 30],
		[5, 10],
		[15, 20],
	])
)
console.log(
	minMeetingRooms([
		[7, 10],
		[2, 4],
	])
)

console.log(
	minMeetingRooms([
		[9, 10],
		[4, 9],
		[4, 17],
	])
)
