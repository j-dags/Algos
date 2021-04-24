/*
Problem: Given an arr of intervals representing appointments, determine if a person can attend all appointments.

Approach: Sort intervals and check for conflicts

O(nlogn)t | O(n)s
*/
class Interval {
	constructor(start, end) {
		this.start = start
		this.end = end
	}
}

const conflictingAppointments = (intervals) => {
	intervals.sort((a, b) => a.start - b.start)

	for (let i = 0; i < intervals.length - 1; i++) {
		// NOTE!! the '<' comparison operator is used here. The following meetings do not represent a conflict: [2,3] [3,4]
		if (intervals[i + 1].start < intervals[i].end) return false
	}

	return true
}

let yes = [new Interval(6, 7), new Interval(2, 4), new Interval(8, 12)]
let no = [new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]

console.log(conflictingAppointments(yes)) // true
console.log(conflictingAppointments(no)) // false
