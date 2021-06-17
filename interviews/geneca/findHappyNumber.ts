/*
Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

Approach:
Find cycle start. But instead of using a linked lists, we calculate the next iteration of the happy number.

Could also use a memo?
*/

// // Memoization answer
// function findHappyNumber(num) {
// 	let memo = {}
// 	let currNum = num

// 	while (!memo[currNum]) {
// 		memo[currNum] = true
// 		if (currNum === 1) return true
// 		currNum = calcHappyNumber(currNum)
// 	}
// 	return false
// }

// Fast/slow answer
function findHappyNumber(num: number) {
	let slow = num
	let fast = num

	while (true) {
		slow = calcHappyNumber(slow)
		fast = calcHappyNumber(calcHappyNumber(fast))

		if (slow === fast) {
			if (slow === 1) return true
			return false
		}
	}
}

// function to calculte sum of squares of num. can also use modulus to do this
function calcHappyNumber(num: number) {
	return String(num)
		.split('')
		.reduce((a, b) => a + parseInt(b) ** 2, 0)
}

console.log(findHappyNumber(23))
console.log(findHappyNumber(12))
console.log(findHappyNumber(10))
