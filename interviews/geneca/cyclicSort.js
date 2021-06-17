/*
We are given an array containing ‘n’ objects. Each object, when created, was assigned a unique number from 1 to ‘n’ based on their creation sequence. This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.

Write a function to sort the objects in-place on their creation sequence number in O(n)O(n)O(n) and without any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

TL;DR - Given an arr of n objects, sort arr in place in O(n)t O(1)s.

Approach: Iterate through array and swap current element with its destination element.

O(n)t | O(1)s

*/

function cyclicSort(arr) {
	let i = 0
	// keep swapping i and j until arr[i] is the correct number, otherwise inc i
	while (i < arr.length) {
		const j = arr[i] - 1
		if (arr[i] !== arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]]
		else i++
	}
	return arr
}

console.log(cyclicSort([3, 1, 5, 4, 2]))
console.log(cyclicSort([2, 6, 4, 3, 1, 5]))
console.log(cyclicSort([1, 5, 6, 4, 3, 2]))
