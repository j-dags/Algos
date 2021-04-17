/*
Prompt: A number is happy if the sum of the square of its digits leads us to 1. All other numbers will not reach 1.
Examples:
23 -> 13 -> 10 -> 1
12 -> 5 -> 29 -> 85 -> 89 -> 145 -> 42 -> 20 -> 4 -> 16 -> 38 -> 58 -> 89 -> ...
Approach: First thought is to memoize. Other thought is to treat as singly linkedList. But instead of node.next, we have to calculate the next node. If at any point the next node is 1, we have a happy number. Otherwise if we have a cycle and no 1, we have not happy number.
*/

// FastSlowPointer ANSWER
// O(log(n))t | O(1)s. This way is more efficient because we have constant space complexity
const happyNumber = (num) => {
	let slow = num
	let fast = num

	while (true) {
		slow = findSquareSum(slow)
		fast = findSquareSum(findSquareSum(fast))

		// If slow === fast we hit a cycle. Return true if the pointers === 1. Otherwise we cycled but didn't find a happy number (false)
		if (slow === fast) {
			if (slow === 1) return true
			return false
		}
	}
}

// Mathematical way to sum the squares. Modulus takes off last digit. Divide by 10 will eliminate 0s.
function findSquareSum(num) {
	let sum = 0
	while (num > 0) {
		digit = num % 10
		sum += digit ** 2
		num -= digit
		num = num / 10
	}
	return sum
}

console.log(happyNumber(23))
console.log(happyNumber(12))

// MEMOIZATION ANSWER
// O(log(n))t | O(log(n))s. Complexity is hard to determine, but it has a logarithmic nature. BUT we do know that time and space complexity will be the same because the memo will be proportional to the cycle length.

// const happyNumber = (num) => {
// 	const memo = {}

// 	// Loop through cycle (aka add sum of the squares) until we cycle
// 	while (!(num in memo)) {
// 		memo[num] = true
// 		num = findSquareSum(num)
// 	}

// 	return '1' in memo
// }
